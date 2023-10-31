import React, { useState, useEffect, useRef } from "react";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { InputTextarea } from "primereact/inputtextarea";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "primereact/dropdown";
import moment from "moment";
import { addHours } from "date-fns";
import {
  ActiveAdvertisementsAction,
  DetelteAdvertisementsAction,
  GetListAdvertisementsAction,
  UpdateStatusAdvertisementsAction,
} from "../../redux/actions/AdvertisementsAction";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage_bucket } from "../../firebase";
import { useFormik } from "formik";
import { DetelteCareerAction, GetListCareersAction, UpdateCareersAction } from "../../redux/actions/CareersAction";

export default function AdminCareer() {
  const dispatch = useDispatch();
  const { arrCareers } = useSelector(
    (root) => root.CareersReducer
  );
  console.log(arrCareers)

  let emptyProduct = {
    id: null,
    name: "",
    image: null,
    description: "",
    category: null,
    price: 0,
    quantity: 0,
    rating: 0,
    inventoryStatus: "INSTOCK",
  };

  const [products, setProducts] = useState(null);
  const [productDialog, setProductDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
  const [product, setProduct] = useState(emptyProduct);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);

  const arrReportType = [
    { value: "pending", label: "Chờ duyệt" },
    { value: "update", label: "Cập nhật" },
    { value: "active", label: "Hoạt động" },
    { value: "inactive", label: "Cấm hoạt động" },
  ];

  const formik = useFormik({
    initialValues: {
      id: "",
      startDate: "",
      endDate: "",
      website: "",
      image: "",
      money: 0,
    },
    onSubmit: (value) => {
      const newStartDate = addHours(new Date(value.startDate), 7);
      const newEndDate = addHours(new Date(value.endDate), 7);
      const updatedValues = {
        ...value,
        startDate: newStartDate,
        endDate: newEndDate,
      };
      const action = ActiveAdvertisementsAction(updatedValues);
      dispatch(action);
      hideDialog();
    },
  });
  const uploadFile = async (e) => {
    try {
      const file = e.target.files[0];
      const fileRef = ref(storage_bucket, file.name);
      const uploadTask = uploadBytesResumable(fileRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload Progress: ${progress}%`);
        },
        (err) => {
          console.error("Upload Error:", err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(`Download URL: ${url}`);
            console.log({ imageUrl: url });
            formik.setFieldValue("image", url);

            // const action = UpateCertificatesAction(id, value);
            // dispatch(action);
          });
        }
      );
    } catch (error) {
      console.error("File Upload Error:", error);
    }
  };
  const [op, setOp] = useState("active");
  const onInputDropdown = (e, field) => {
    setOp(e.target.value);
  };
  useEffect(() => {
    // const modifiedArray = arrCareers.map((item) => ({
    //   ...item,
    //   formattedCreateDate: moment(item.createDate).format("DD/MM/YYYY hh:mm A"),
    // }));

    const filteredArray = arrCareers.filter((item) => item.businessId !== null);
    setProducts(filteredArray);
  }, [arrCareers, op]);

  useEffect(() => {
    const action = GetListCareersAction();
    dispatch(action);
  }, []);

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const hideDeleteProductsDialog = () => {
    setDeleteProductsDialog(false);
  };

  const saveProduct = () => {
    setSubmitted(true);

    let _products = [...products];
    let _product = { ...product };
    console.log(_product)
    const action = UpdateCareersAction(_product);
    dispatch(action);
    toast.current.show({
      severity: "success",
      summary: "Thành công",
      detail: "Cập nhật ngành nghề thành công",
      life: 3000,
    });

    setProducts(_products);
    setProductDialog(false);
    setProduct(emptyProduct);
  };

  const editProduct = (product) => {
    setProduct({ ...product });
    setProductDialog(true);
  };

  const confirmDeleteProduct = (product) => {
    setProduct(product);
    setDeleteProductDialog(true);
  };

  const deleteProduct = () => {
    console.log(product.careerId)
    const action = DetelteCareerAction(product.careerId);
    dispatch(action);
    setDeleteProductDialog(false);
    setProduct(emptyProduct);
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Product Deleted",
      life: 3000,
    });
  };
  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _product = { ...product };

    _product[`${name}`] = val;

    setProduct(_product);
  };

  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
       
      </div>
    );
  };

  const rightToolbarTemplate = () => {
    return (
      <Button
        label="Tải xuống"
        icon="pi pi-upload"
        className="p-button-help"
        onClick={exportCSV}
      />
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          className="mr-2"
          onClick={() => {
            editProduct(rowData);
            formik.setFieldValue("id", rowData.adId);
          }}
        />
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          onClick={() => confirmDeleteProduct(rowData)}
        />
      </React.Fragment>
    );
  };

  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h4 className="m-0">Quảng cáo</h4>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Tìm kiếm..."
        />
      </span>
    </div>
  );
  const productDialogFooter = (
    <React.Fragment>
      <Button label="Hủy" icon="pi pi-times" outlined onClick={hideDialog} />

        <Button label="Đồng ý" icon="pi pi-check" onClick={saveProduct} />
     
    </React.Fragment>
  );
  const deleteProductDialogFooter = (
    <React.Fragment>
      <Button
        label="Hủy"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteProductDialog}
      />
      <Button
        label="Đồng ý"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteProduct}
      />
    </React.Fragment>
  );


  return (
    <div className="Box-elements" style={{ height: "80%" }}>
      <div className="box-chart-travel">
        <Toast ref={toast} />
        <div
          className=""
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            wordWrap: "break-word",
            backgroundColor: "#fff",
            backgroundClip: "border-box",
            border: "1px solid #eceef3",
            borderRadius: "0.75rem",
            height: "100%",
          }}
        >
          <Toolbar
            className="mb-4"
            left={leftToolbarTemplate}
            right={rightToolbarTemplate}
          ></Toolbar>

          <DataTable
            ref={dt}
            value={products}
            selection={selectedProducts}
            onSelectionChange={(e) => setSelectedProducts(e.value)}
            dataKey="id"
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Danh sách {first} đến {last} của {totalRecords} quảng cáo"
            globalFilter={globalFilter}
            header={header}
          >
            <Column
              field="careerName"
              header="Tên nghành nghề"
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
             field={business =>business?.business?.businessName}
             header="Doanh nghiệp"
             sortable
             style={{ minWidth: "12rem" }}
             body={business =>business?.business?.businessName}
             
            ></Column>

       
            <Column
              body={actionBodyTemplate}
              exportable={false}
              style={{ minWidth: "12rem" }}
            ></Column>
          </DataTable>
        </div>

        <Dialog
          visible={productDialog}
          style={{ width: "60rem" }}
          breakpoints={{ "960px": "75vw", "641px": "90vw" }}
          header="Chi tiết ngành nghề"
          modal
          className="p-fluid"
          footer={productDialogFooter}
          onHide={hideDialog}
        >
          <div class="grid grid-cols-1 gap-2">
            <div className="field mt-3">
              <label htmlFor="name" className="font-bold">
                Tên ngành nghề
              </label>
              <InputText
                id="name"
                value={product.careerName}
                onChange={(e) => onInputChange(e, "careerName")}
                required
                autoFocus
                // className={classNames({
                //   "p-invalid": submitted && !product.name,
                // })}
              />
              {/* {submitted && !product.name && (
                <small className="p-error">Name is required.</small>
              )} */}
            </div>
          </div>
          <div class="grid grid-cols-1 gap-2">
            <div className="field mt-3">
              <label htmlFor="name" className="font-bold">
                Tên doanh nghiệp
              </label>
              <InputText
                id="name"
                value={product.business?.businessName}
                // onChange={(e) => onInputChange(e, "careerName")}
                required
                autoFocus
                // className={classNames({
                //   "p-invalid": submitted && !product.name,
                // })}
              />
              {/* {submitted && !product.name && (
                <small className="p-error">Name is required.</small>
              )} */}
            </div>
          </div>
         
        </Dialog>

        <Dialog
          visible={deleteProductDialog}
          style={{ width: "32rem" }}
          breakpoints={{ "960px": "75vw", "641px": "90vw" }}
          header="Thông báo"
          modal
          footer={deleteProductDialogFooter}
          onHide={hideDeleteProductDialog}
        >
          <div className="confirmation-content">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem" }}
            />
            {product && (
              <span>
                Bạn muốn xóa ngành nghề của doanh nghiệp
                <b>{product.businessName}</b>?
              </span>
            )}
          </div>
        </Dialog>

      
      </div>
    </div>
  );
}
