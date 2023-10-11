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

export default function AdminAdvertising() {
  const dispatch = useDispatch();
  const { arrAdvertisements } = useSelector(
    (root) => root.AdvertisementsReducer
  );
  console.log(arrAdvertisements);
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
      console.log(value);
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
    const modifiedArray = arrAdvertisements.map((item) => ({
      ...item,
      formattedCreateDate: moment(item.createDate).format("DD/MM/YYYY hh:mm A"),
    }));

    const filteredArray = modifiedArray.filter((item) => item.status === op);
    setProducts(filteredArray);
  }, [arrAdvertisements, op]);

  useEffect(() => {
    const action = GetListAdvertisementsAction();
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
    console.log(_product);
    const action = UpdateStatusAdvertisementsAction(_product.adId);
    dispatch(action);
    toast.current.show({
      severity: "success",
      summary: "Thành công",
      detail: "Duyệt quảng cáo thành công",
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
    const action = DetelteAdvertisementsAction(product.adId);
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

  const deleteSelectedProducts = () => {
    let _products = products.filter((val) => !selectedProducts.includes(val));

    setProducts(_products);
    setDeleteProductsDialog(false);
    setSelectedProducts(null);
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Products Deleted",
      life: 3000,
    });
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
        <Dropdown
          options={arrReportType}
          id="reportType"
          onChange={(e) => onInputDropdown(e, "reportType")}
          value={op}
          placeholder="Chọn trạng thái"
        />
        {/* <Button label="Delete" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} /> */}
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
      {op === "pending" ? (
        <Button label="Đồng ý" icon="pi pi-check" onClick={saveProduct} />
      ) : (
        <div></div>
      )}
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
  const deleteProductsDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteProductsDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteSelectedProducts}
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
              field="businessName"
              header="Tên doanh nghiệp"
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="career"
              header="Loại hình kinh doanh"
              sortable
              style={{ minWidth: "16rem" }}
            ></Column>

            <Column
              field="productService"
              header="Sản phẩm"
              sortable
              style={{ minWidth: "10rem" }}
            ></Column>
            <Column
              field="userName"
              header="Người liên hệ"
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="userPhone"
              header="Số điện thoại"
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            {op === "pending" ? (
              <Column
                field="createDate"
                header="Thời gian tạo"
                sortable
                style={{ minWidth: "12rem" }}
                body={(rowData) =>
                  moment(rowData.createDate).format("DD/MM/YYYY hh:mm A")
                }
              ></Column>
            ) : (
              <div></div>
            )}
            {op === "active" ? (
              <Column
                field="money"
                header="Số tiền"
                sortable
                style={{ minWidth: "12rem" }}
                body={(rowData) => rowData.money.toLocaleString() + " vnđ"}
              ></Column>
            ) : (
              <div></div>
            )}
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
          header="Chi tiết quảng cáo"
          modal
          className="p-fluid"
          footer={productDialogFooter}
          onHide={hideDialog}
        >
          <div class="grid grid-cols-1 gap-2">
            <div className="field mt-3">
              <label htmlFor="name" className="font-bold">
                Tên doanh nghiệp
              </label>
              <InputText
                id="name"
                value={product.businessName}
                onChange={(e) => onInputChange(e, "businessName")}
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
          <div className="field mt-3">
            <label htmlFor="description" className="font-bold">
              Loại hình kinh doanh
            </label>
            <InputTextarea
              id="career"
              value={product.career}
              onChange={(e) => onInputChange(e, "career")}
              required
              rows={3}
              cols={20}
            />
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div className="field mt-3">
              <label htmlFor="name" className="font-bold">
                Sản phẩm
              </label>
              <InputText
                id="name"
                value={product.productService}
                onChange={(e) => onInputChange(e, "productService")}
                required
                autoFocus
              />
            </div>
            <div className="field mt-3">
              <label htmlFor="name" className="font-bold">
                Người liên hệ
              </label>
              <InputText
                id="name"
                value={product.userName}
                onChange={(e) => onInputChange(e, "userName")}
                required
                autoFocus
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div className="field mt-3">
              <label htmlFor="name" className="font-bold">
                Số điện thoại
              </label>
              <InputText
                id="name"
                value={product.userPhone}
                onChange={(e) => onInputChange(e, "userPhone")}
                required
                autoFocus
              />
            </div>
          </div>

          {op === "update" ? (
            <form onSubmit={formik.handleSubmit}>
              <div style={{ marginTop: "30px" }}>
                <hr />
                <div
                  style={{
                    textAlign: "center",
                    fontWeight: 800,
                    fontSize: "20px",
                  }}
                >
                  Cần Cập nhật
                </div>
              </div>
              <div class="grid grid-cols-1 gap-2">
                <div className="field mt-3">
                  <label htmlFor="name" className="font-bold">
                    Hình ảnh
                  </label>
                  <InputText
                    type="file"
                    name="upload"
                    placeholder="Tải ảnh lên"
                    onChange={(e) => {
                      uploadFile(e);
                    }}
                  />
                </div>
              </div>
              <div class="grid grid-cols-1 gap-2">
                {formik.values.image !== "" ? (
                  <img
                    src={formik.values.image}
                    width={300}
                    height={300}
                    style={{ marginTop: "50px" }}
                  />
                ) : (
                  <div></div>
                )}
              </div>
              <div class="grid grid-cols-2 gap-2">
                <div className="field mt-3">
                  <label htmlFor="name" className="font-bold">
                    Ngày bắt đầu
                  </label>
                  <InputText
                    type="datetime-local"
                    name="startDate"
                    value={formik.values.startDate}
                    onChange={formik.handleChange}
                    id="name"
                    required
                    autoFocus
                  />
                </div>
                <div className="field mt-3">
                  <label htmlFor="name" className="font-bold">
                    Ngày kết thúc
                  </label>
                  <InputText
                    type="datetime-local"
                    name="endDate"
                    value={formik.values.endDate}
                    onChange={formik.handleChange}
                    id="name"
                    required
                    autoFocus
                  />
                </div>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <div className="field mt-3">
                  <label htmlFor="name" className="font-bold">
                    Website
                  </label>
                  <InputText
                    id="name"
                    name="website"
                    onChange={formik.handleChange}
                    required
                    autoFocus
                  />
                </div>
                <div className="field mt-3">
                  <label htmlFor="name" className="font-bold">
                    Số số tiền
                  </label>
                  <InputText
                    min={1}
                    name="money"
                    onChange={formik.handleChange}
                    type="number"
                    id="name"
                    required
                    autoFocus
                  />
                </div>
              </div>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Cập nhật
              </button>
            </form>
          ) : (
            <div></div>
          )}
        </Dialog>

        <Dialog
          visible={deleteProductDialog}
          style={{ width: "32rem" }}
          breakpoints={{ "960px": "75vw", "641px": "90vw" }}
          header="Confirm"
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
                Bạn muốn xóa quảng cáo của doanh nghiệp{" "}
                <b>{product.businessName}</b>?
              </span>
            )}
          </div>
        </Dialog>

        <Dialog
          visible={deleteProductsDialog}
          style={{ width: "32rem" }}
          breakpoints={{ "960px": "75vw", "641px": "90vw" }}
          header="Confirm"
          modal
          footer={deleteProductsDialogFooter}
          onHide={hideDeleteProductsDialog}
        >
          <div className="confirmation-content">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem" }}
            />
            {product && (
              <span>
                Are you sure you want to delete the selected products?
              </span>
            )}
          </div>
        </Dialog>
      </div>
    </div>
  );
}
