import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { InputTextarea } from "primereact/inputtextarea";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import {
  DetelteBisinessAction,
  GetListBusinessAction,
  UpdateAciveBusinessAction,
} from "../../redux/actions/BusinessAction";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "primereact/dropdown";
import { addHours } from "date-fns";
import moment from "moment";

export default function AdminBusiness() {
  const dispatch = useDispatch();
  const { arrBusiness } = useSelector((root) => root.BusinessReducer);
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
    setOp(e.target.value);
  };
  useEffect(() => {
    const modifiedArray = arrBusiness.map((item) => ({
      ...item,
      formattedCreateDate: moment(item.createDate).format("DD/MM/YYYY hh:mm A"),
    }));

    const filteredArray = modifiedArray.filter((item) => item.status === op);
    setProducts(filteredArray);
  }, [arrBusiness, op]);

  useEffect(() => {
    const action = GetListBusinessAction();
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

  const [money, setMoney] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const saveProduct = () => {
    setSubmitted(true);

    let _products = [...products];
    let _product = {
      ...product,
      money: Number(money),
      startDate: addHours(new Date(startDate), 7),
      endDate: addHours(new Date(endDate), 7),
    };
    const action = UpdateAciveBusinessAction(_product);
    dispatch(action);
    toast.current.show({
      severity: "success",
      summary: "Thành công",
      detail: "Duyệt doanh ngihệp thành công",
      life: 3000,
    });

    // setProducts(_products);
    // setProductDialog(false);
    // setProduct(emptyProduct);
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
    // let _products = products.filter((val) => val.id !== product.id);
    const action = DetelteBisinessAction(product.businessId);
    dispatch(action);

    setDeleteProductDialog(false);
    setProduct(emptyProduct);
    toast.current.show({
      severity: "success",
      summary: "Thành công",
      detail: "Xóa danh nghiệp thành công",
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
      <h4 className="m-0">Quản lý doanh nghiệp</h4>
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
            currentPageReportTemplate="Danh sách {first} đến {last} của {totalRecords} doanh nghiệp"
            globalFilter={globalFilter}
            header={header}
          >
            {/* <Column
              field="businessId"
              header="Mã"
              sortable
              style={{ minWidth: "12rem" }}
            ></Column> */}
            <Column
              field="businessName"
              header="Tên doanh nghiệp"
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="email"
              header="Email"
              sortable
              style={{ minWidth: "16rem" }}
            ></Column>
            <Column field="tax" header="Mã số thuế" sortable></Column>

            <Column
              field="province"
              header="Địa điểm"
              sortable
              style={{ minWidth: "10rem" }}
            ></Column>
            {/* <Column
              field="rating"
              header="Reviews"
              body={ratingBodyTemplate}
              sortable
              style={{ minWidth: "12rem" }}
            ></Column> */}
            <Column
              field="website"
              header="Website"
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
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
          header="Chi tiết doanh nghiệp"
          modal
          className="p-fluid"
          footer={productDialogFooter}
          onHide={hideDialog}
        >
          {product.Images && (
            <img
              src={product.Images[0]?.imageUrl}
              alt=""
              className="product-image block m-auto pb-3"
            />
          )}
          <div class="grid grid-cols-2 gap-2">
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
            <div className="field mt-3">
              <label htmlFor="name" className="font-bold">
                Tên tiếng anh
              </label>
              <InputText
                id="name"
                value={product.businessNameEng}
                onChange={(e) => onInputChange(e, "businessNameEng")}
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
              Mô tả
            </label>
            <InputTextarea
              id="description"
              value={product.description}
              onChange={(e) => onInputChange(e, "description")}
              required
              rows={5}
              cols={20}
            />
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div className="field mt-3">
              <label htmlFor="name" className="font-bold">
                Email
              </label>
              <InputText
                id="name"
                value={product.email}
                onChange={(e) => onInputChange(e, "tax")}
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
            <div className="field mt-3">
              <label htmlFor="name" className="font-bold">
                Số điện thoại
              </label>
              <InputText
                id="name"
                value={product.phone}
                onChange={(e) => onInputChange(e, "phone")}
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
          <div class="grid grid-cols-2 gap-2">
            <div className="field mt-3">
              <label htmlFor="name" className="font-bold">
                Mã số thuế
              </label>
              <InputText
                id="name"
                value={product.tax}
                onChange={(e) => onInputChange(e, "tax")}
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
            <div className="field mt-3">
              <label htmlFor="name" className="font-bold">
                Website
              </label>
              <InputText
                id="name"
                value={product.website}
                onChange={(e) => onInputChange(e, "website")}
                required
                autoFocus
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div className="field mt-3">
              <label htmlFor="name" className="font-bold">
                Người liên lạc
              </label>
              <InputText
                id="name"
                value={product?.Users && product?.Users?.[0]?.fullName}
                onChange={(e) =>
                  onInputChange(e, "product?.Users?.[0]?.username")
                }
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
            <div className="field mt-3">
              <label htmlFor="name" className="font-bold">
                Chức vụ
              </label>
              <InputText
                id="name"
                value={product?.Users && product?.Users?.[0]?.position}
                onChange={(e) =>
                  onInputChange(e, "product?.Users?.[0]?.position")
                }
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
          <div class="grid grid-cols-2 gap-2" style={{ paddingBottom: "20px" }}>
            <div className="field mt-3">
              <label htmlFor="name" className="font-bold">
                Số điện thoại
              </label>
              <InputText
                id="name"
                value={product?.Users && product?.Users?.[0]?.phone}
                onChange={(e) => onInputChange(e, "product?.Users?.[0]?.phone")}
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
          <hr />
          <div
            style={{
              textAlign: "center",
              paddingBottom: "20px",
              fontWeight: 700,
              fontSize: "20px",
            }}
          >
            Cần cập nhật
          </div>
          <div class="grid grid-cols-2 gap-2" style={{ paddingBottom: "20px" }}>
            <div className="field mt-3">
              <label htmlFor="name" className="font-bold">
                Số tiền
              </label>
              <InputText
                type="number"
                id="name"
                // value={1000}
                onChange={(e) => setMoney(e.target.value)}
                required
                // autoFocus
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-2" style={{ paddingBottom: "20px" }}>
            <div className="field mt-3">
              <label htmlFor="name" className="font-bold">
                Ngày bắt đầu
              </label>
              <InputText
                type="datetime-local"
                id="name"
                // value={product.startDate}
                onChange={(e) => setStartDate(e.target.value)}
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
                id="name"
                // value={product.endDate}
                onChange={(e) => setEndDate(e.target.value)}
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
                Bạn muốn xóa doanh nghiệp <b>{product.businessName}</b>?
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
