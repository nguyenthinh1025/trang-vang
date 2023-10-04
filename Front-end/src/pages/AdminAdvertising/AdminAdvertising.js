import React, { useState, useEffect, useRef } from "react";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import { Rating } from "primereact/rating";
import { Toolbar } from "primereact/toolbar";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { InputNumber } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import { GetListBusinessAction, UpdateAciveBusinessAction } from "../../redux/actions/BusinessAction";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "primereact/dropdown";
import moment from "moment";
import { GetListAdvertisementsAction, UpdateStatusAdvertisementsAction } from "../../redux/actions/AdvertisementsAction";

export default function AdminAdvertising() {
  const dispatch = useDispatch();
  const { arrAdvertisements } = useSelector((root) => root.AdvertisementsReducer);
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
    { value: "active", label: "Hoạt động" },
    { value: "inactive", label: "Cấm hoạt động" },
    { value: "pending", label: "Chờ duyệt" },
  ];
  const [op, setOp] = useState("active");
  const onInputDropdown = (e, field) => {
    setOp(e.target.value);;
  };
  useEffect(() => {
    const modifiedArray = arrAdvertisements.map((item) => ({
      ...item,
      formattedCreateDate: moment(item.createDate).format('DD/MM/YYYY hh:mm A')
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
    console.log(_product)
     const action = UpdateStatusAdvertisementsAction(_product.adId);
     dispatch(action)
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
    let _products = products.filter((val) => val.id !== product.id);

    setProducts(_products);
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
          onClick={() => editProduct(rowData)}
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
          placeholder="Search..."
        />
      </span>
    </div>
  );
  const productDialogFooter = (
    <React.Fragment>
      <Button label="Hủy" icon="pi pi-times" outlined onClick={hideDialog} />
     {op ==="pending" ?  <Button label="Đồng ý" icon="pi pi-check" onClick={saveProduct} /> : <div></div>}
    </React.Fragment>
  );
  const deleteProductDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteProductDialog}
      />
      <Button
        label="Yes"
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
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
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
            <Column
              field={(createDate) =>
                moment(createDate.createDate).format("DD/MM/YYYY hh:mm A")
              }
              header="Thời gian tạo"
              style={{ minWidth: "12rem" }}
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
                Are you sure you want to delete <b>{product.name}</b>?
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
