import { useFormik } from "formik";
import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateAdvertisementsAction } from "../../redux/actions/AdvertisementsAction";
export default function Advertising(props) {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      userName: "",
      userPhone: "",
      businessName: "",
      career: "",
      productService: "",
      createDate: moment().format('YYYY/MM/DD'),
    },
    onSubmit:async (value) => {
      const action = CreateAdvertisementsAction(value, props);
      dispatch(action)
    },
  });
  return (
    <div className="m-auto h-auto">
      <div className="container-xl pt-5">
        <div className="w-100 rounded-3 p-0 m-0 text-center">
          <div
            className="rounded-4 p-0 ps-3 pe-3 yellow_bg mx-auto mt-1 mb-3"
            style={{ display: "inline-block", background: "#ffde06" }}
          >
            <h1 className="fs-5 text-uppercase p-0 pt-2 text-center">
              QUẢNG CÁO TRANG VÀNG VIỆT NAM
            </h1>
          </div>
          <div
            className="rounded-4 yellow_bg khoangcachtren clearfix"
            style={{
              background: "#ffde06",
              padding: "20px 20px",
              marginBottom: "30px",
              display: "flex",
            }}
          >
            <div className="gioithieuqc1 text-start bigdiv">
              <h5>
                Vì sao doanh nghiệp nên quảng cáo trên Trang vàng Việt Nam?
              </h5>
              <div className="m-0 mt-3 ">
                <div className="h-auto mb-3 clearfix co_chu">
                  <div className="div1 pt-1">
                    <i className="fa fa-regular fa-square-check" />
                  </div>
                  <div className="div2">
                    Đứng đầu và nổi bật hơn các công ty cùng ngành nghề và lĩnh
                    vực kinh doanh
                  </div>
                </div>
                <div className="h-auto mb-3 clearfix co_chu">
                  <div className="div1 pt-1">
                    <i className="fa fa-regular fa-square-check" />
                  </div>
                  <div className="div2">
                    Tiếp cận đầu tiên với khách hàng khi họ tìm kiếm đối tác
                    kinh doanh và nhà cung cấp các sản phẩm và dịch vụ
                  </div>
                </div>
                <div className="h-auto mb-3 clearfix co_chu">
                  <div className="div1 pt-1">
                    <i className="fa fa-regular fa-square-check" />
                  </div>
                  <div className="div2">
                    {" "}
                    Giới thiệu, quảng bá và xây dựng hình ảnh công ty khách hàng
                    và đối tác...
                  </div>
                </div>
              </div>
              <div
                className="rounded-4 p-0 ps-3 pe-3 bg-dark co_chu"
                style={{ display: "inline-block" }}
              >
                <p className="m-0 text-uppercase p-2 pt-2 text-center">
                  <a className="text-warning" href="#DANG-KY-QUANG-CAO">
                    ĐĂNG KÝ QUẢNG CÁO TRANG VÀNG
                  </a>
                </p>
              </div>
              <div className="m-0 mt-3 fw500 co_chu">
                <i className="fa fa-solid fa-headphones pe-1" /> Hotline tư vấn
                quảng cáo:{" "}
                <a className="text-danger" href="tel:0934498168">
                  0934.498.168
                </a>{" "}
                -{" "}
                <a className="text-danger" href="tel:0912005564">
                  0912.005.564
                </a>
                <span className="fw-normal color0099FF">
                  (
                  <a id="color0099FF" href="https://zalo.me/0934498168">
                    Gọi nhắn <b>ZALO</b>
                  </a>
                  )
                </span>
              </div>
            </div>
            <div className="gioithieuqc2">
              <img className="w-100" src="images/quangtrangvangvang.jpg" />
            </div>
          </div>
          <div className="w-100 rounded-3 bg-white p-0 m-0 text-center p-4 pt-5 pb-5 mt-5 pc_display">
            <img className="w-100" src="images/bosanphamyellow-new.jpg" />
          </div>
          <div className="w-100 rounded-3 p-0 pb-4 bg-white m-0 text-center mt-5">
            <div className="w-100 mt-4 p-3">
              <div className="row">
                <div className="col-sm-6">
                  <div
                    className="rounded-4 p-0 mt-3 ps-4 pe-4 bg_xanh mx-auto mt-4"
                    style={{ display: "inline-block" }}
                  >
                    <h2 className="fs-5 text-uppercase p-0 pt-2 text-center">
                      {" "}
                      MỤC - QUẢNG CÁO LISTINGS
                    </h2>
                  </div>
                  <div className="h-auto mt-4 text-start">
                    <div className="h-auto mb-3 clearfix">
                      <div className="div1 pt-1">
                        <i className="fa fa-regular fa-square-check" />
                      </div>
                      <div className="div2">
                        Đứng đầu và nổi bật nhất trong kết quả tìm kiếm theo
                        ngành nghề kinh doanh.
                      </div>
                    </div>
                    <div className="h-auto mb-3 clearfix">
                      <div className="div1 pt-1">
                        <i className="fa fa-regular fa-square-check" />
                      </div>
                      <div className="div2">
                        Được tiếp cận với khách hàng đầu tiên khi họ có nhu cầu
                        tìm kiếm nhà cung cấp sản phẩm dịch vụ từ Trang vàng.
                      </div>
                    </div>
                    <div className="h-auto mb-3 clearfix">
                      <div className="div1 pt-1">
                        <i className="fa fa-regular fa-square-check" />
                      </div>
                      <div className="div2">
                        Tỷ lệ chuyển đổi thành khách hàng mua sản phẩm dịch vụ
                        rất cao (hơn 80%), do khách hàng vào Trang vàng là để
                        tìm nhà cung cấp sản phẩm dịch vụ hoặc nhà sản xuất,...
                      </div>
                    </div>
                    <div className="h-auto mb-3 clearfix">
                      <div className="div1 pt-1">
                        <i className="fa fa-regular fa-square-check" />
                      </div>
                      <div className="div2 fw-bold">
                        Chi phí quảng cáo: Từ 2 - 6 triệu/ năm.
                      </div>
                    </div>
                    <div className="h-auto mb-3 clearfix">
                      <div className="div1 pt-1">
                        <i className="fa fa-regular fa-square-check" />
                      </div>
                      <div className="div2">
                        Được đăng Quảng cáo trên các website của Trang vàng Việt
                        Nam gồm:
                        <a target="_blank" href="https://trangvangvietnam.com">
                          www.trangvangvietnam.com
                        </a>
                      </div>
                    </div>
                    <div className="h-auto mb-3 clearfix">
                      <div className="div1 pt-1">
                        <i className="fa fa-regular fa-square-check" />
                      </div>
                      <div className="div2">
                        Tặng miễn phí thiết kế website chuẩn SEO, hosting vận
                        hành website và hỗ trợ chăm sóc website 24/7,v.v...
                      </div>
                    </div>
                    <div
                      className="rounded-4 p-0 ps-3 pe-3 bg-dark mt-4"
                      style={{ display: "inline-block" }}
                    >
                      <p className="m-0 text-uppercase p-2 pt-2 text-center">
                        <a className="text-warning" href="#DANG-KY-QUANG-CAO">
                          ĐĂNG KÝ QUẢNG CÁO TRANG VÀNG
                        </a>
                      </p>
                    </div>
                    <div className="m-0 mt-3 fw500">
                      <i className="fa fa-solid fa-headphones pe-1" /> Hotline
                      tư vấn quảng cáo:{" "}
                      <a className="text-danger" href="tel:0934498168">
                        0934.498.168
                      </a>{" "}
                      -{" "}
                      <a className="text-danger" href="tel:0912005564">
                        0912.005.564
                      </a>{" "}
                      <span className="fw-normal color0099FF">
                        (
                        <a id="color0099FF" href="https://zalo.me/0934498168">
                          Gọi nhắn <b>ZALO</b>
                        </a>
                        )
                      </span>
                    </div>
                    <div className="m-0 mt-3 text-black-50">
                      <span className="text-danger fw-bold">***Chú ý:</span>{" "}
                      Chúng tôi sẽ gửi thống kê truy cập theo từng ngành nghề để
                      bạn nắm được số lượng khách hàng tìm kiếm hàng tháng/ năm
                      (thống kê bằng <b>Google analytics</b>).
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mt-4">
                  <img className="w-100" src="images/quancao_listings.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 rounded-3 p-0 pb-4 bg-white m-0 text-center mt-5 pc_display">
            <div className="w-100 mt-4 p-3">
              <div className="row">
                <div className="col-sm-6 mt-4">
                  <img className="w-100" src="images/quangcao_banner.jpg" />
                </div>
                <div className="col-sm-6">
                  <div
                    className="rounded-4 p-0 mt-3 ps-4 pe-4 bg_do mx-auto mt-4"
                    style={{ display: "inline-block" }}
                  >
                    <h2 className="fs-5 text-uppercase p-0 pt-2 text-center">
                      {" "}
                      MỤC - QUẢNG CÁO BANNER
                    </h2>
                  </div>
                  <div className="h-auto mt-5 text-start">
                    <div className="h-auto mb-3 clearfix">
                      <div className="div1 pt-1">
                        <i className="fa fa-regular fa-square-check" />
                      </div>
                      <div className="div2">
                        Quảng cáo Banner là hình thức quảng cáo nổi bật nhất nhờ
                        hình ảnh minh họa sống động.
                      </div>
                    </div>
                    <div className="h-auto mb-3 clearfix">
                      <div className="div1 pt-1">
                        <i className="fa fa-regular fa-square-check" />
                      </div>
                      <div className="div2">
                        Hiệu quả hơn do tập trung vào sản phẩm chủ đạo/ mầu sắc
                        nhận diện thương hiệu/ gửi thông điệp nhanh đến khách
                        hàng (khách hàng chỉ mất 3 giây để nhận diện).
                      </div>
                    </div>
                    <div className="h-auto mb-3 clearfix">
                      <div className="div1 pt-1">
                        <i className="fa fa-regular fa-square-check" />
                      </div>
                      <div className="div2">
                        Quảng cáo được hiển thị tại tất cả các tỉnh thành toàn
                        quốc và các trang từ 1,2,3...trong cùng ngành nghề.
                      </div>
                    </div>
                    <div className="h-auto mb-3 clearfix">
                      <div className="div1 pt-1">
                        <i className="fa fa-regular fa-square-check" />
                      </div>
                      <div className="div2 fw-bold">
                        Chi phí quảng cáo: Từ 2 - 5 triệu/ năm.
                      </div>
                    </div>
                    <div className="h-auto mb-3 clearfix">
                      <div className="div1 pt-1">
                        <i className="fa fa-regular fa-square-check" />
                      </div>
                      <div className="div2">
                        Được đăng Quảng cáo trên các website của Trang vàng Việt
                        Nam gồm:
                        <a target="_blank" href="https://trangvangvietnam.com">
                          www.trangvangvietnam.com
                        </a>
                        ;
                        <a target="_blank" href="https://www.yellowpages.vn">
                          www.yellowpages.vn
                        </a>
                        ;
                        <a target="_blank" href="https://niengiamtrangvang.com">
                          www.niengiamtrangvang.com
                        </a>
                      </div>
                    </div>
                    <div className="h-auto mb-3 clearfix">
                      <div className="div1 pt-1">
                        <i className="fa fa-regular fa-square-check" />
                      </div>
                      <div className="div2">
                        Tặng miễn phí thiết kế website chuẩn SEO, hosting vận
                        hành website và hỗ trợ chăm sóc website 24/7,v.v...
                      </div>
                    </div>
                    <div
                      className="rounded-4 p-0 ps-3 pe-3 bg-dark mt-4"
                      style={{ display: "inline-block" }}
                    >
                      <p className="m-0 text-uppercase p-2 pt-2 text-center">
                        <a className="text-warning" href="#DANG-KY-QUANG-CAO">
                          ĐĂNG KÝ QUẢNG CÁO TRANG VÀNG
                        </a>
                      </p>
                    </div>
                    <div className="m-0 mt-3 fw500">
                      <i className="fa fa-solid fa-headphones pe-1" /> Hotline
                      tư vấn quảng cáo:{" "}
                      <a className="text-danger" href="tel:0934498168">
                        0934.498.168
                      </a>{" "}
                      -{" "}
                      <a className="text-danger" href="tel:0912005564">
                        0912.005.564
                      </a>{" "}
                      <span className="fw-normal color0099FF">
                        (
                        <a id="color0099FF" href="https://zalo.me/0934498168">
                          Gọi nhắn <b>ZALO</b>
                        </a>
                        )
                      </span>
                    </div>
                    <div className="m-0 mt-3 text-black-50">
                      <span className="text-danger fw-bold">***Chú ý:</span>{" "}
                      Chúng tôi sẽ gửi thống kê truy cập theo từng ngành nghề để
                      bạn nắm được số lượng khách hàng tìm kiếm hàng tháng/ năm
                      (thống kê bằng <b>Google analytics</b>).
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 rounded-3 p-0 pb-4 bg-white m-0 text-center mt-5 m_display">
            <div className="w-100 mt-4 p-3">
              <div className="row">
                <div className="col-sm-6">
                  <div
                    className="rounded-4 p-0 mt-3 ps-4 pe-4 bg_do mx-auto mt-4"
                    style={{ display: "inline-block" }}
                  >
                    <h2 className="fs-5 text-uppercase p-0 pt-2 text-center">
                      {" "}
                      MỤC - QUẢNG CÁO BANNER
                    </h2>
                  </div>
                  <div className="h-auto mt-4 text-start">
                    <div className="h-auto mb-3 clearfix">
                      <div className="div1 pt-1">
                        <i className="fa fa-regular fa-square-check" />
                      </div>
                      <div className="div2">
                        Quảng cáo Banner là hình thức quảng cáo nổi bật nhất nhờ
                        hình ảnh minh họa sống động.
                      </div>
                    </div>
                    <div className="h-auto mb-3 clearfix">
                      <div className="div1 pt-1">
                        <i className="fa fa-regular fa-square-check" />
                      </div>
                      <div className="div2">
                        Hiệu quả hơn do tập trung vào sản phẩm chủ đạo/ mầu sắc
                        nhận diện thương hiệu/ gửi thông điệp nhanh đến khách
                        hàng (khách hàng chỉ mất 3 giây để nhận diện).
                      </div>
                    </div>
                    <div className="h-auto mb-3 clearfix">
                      <div className="div1 pt-1">
                        <i className="fa fa-regular fa-square-check" />
                      </div>
                      <div className="div2">
                        Quảng cáo được hiển thị tại tất cả các tỉnh thành toàn
                        quốc và các trang từ 1,2,3...trong cùng ngành nghề.
                      </div>
                    </div>
                    <div className="h-auto mb-3 clearfix">
                      <div className="div1 pt-1">
                        <i className="fa fa-regular fa-square-check" />
                      </div>
                      <div className="div2 fw-bold">
                        Chi phí quảng cáo: Từ 2 - 5 triệu/ năm.
                      </div>
                    </div>
                    <div className="h-auto mb-3 clearfix">
                      <div className="div1 pt-1">
                        <i className="fa fa-regular fa-square-check" />
                      </div>
                      <div className="div2">
                        Được đăng Quảng cáo trên các website của Trang vàng Việt
                        Nam gồm:
                        <a target="_blank" href="https://trangvangvietnam.com">
                          www.trangvangvietnam.com
                        </a>
                      </div>
                    </div>
                    <div className="h-auto mb-3 clearfix">
                      <div className="div1 pt-1">
                        <i className="fa fa-regular fa-square-check" />
                      </div>
                      <div className="div2">
                        Tặng miễn phí thiết kế website chuẩn SEO, hosting vận
                        hành website và hỗ trợ chăm sóc website 24/7,v.v...
                      </div>
                    </div>
                    <div
                      className="rounded-4 p-0 ps-3 pe-3 bg-dark mt-4"
                      style={{ display: "inline-block" }}
                    >
                      <p className="m-0 text-uppercase p-2 pt-2 text-center">
                        <a className="text-warning" href="#DANG-KY-QUANG-CAO">
                          ĐĂNG KÝ QUẢNG CÁO TRANG VÀNG
                        </a>
                      </p>
                    </div>
                    <div className="m-0 mt-3 fw500">
                      <i className="fa fa-solid fa-headphones pe-1" /> Hotline
                      tư vấn quảng cáo:{" "}
                      <a className="text-danger" href="tel:0934498168">
                        0934.498.168
                      </a>{" "}
                      -{" "}
                      <a className="text-danger" href="tel:0912005564">
                        0912.005.564
                      </a>{" "}
                      <span className="fw-normal color0099FF">
                        (
                        <a id="color0099FF" href="https://zalo.me/0934498168">
                          Gọi nhắn <b>ZALO</b>
                        </a>
                        )
                      </span>
                    </div>
                    <div className="m-0 mt-3 text-black-50">
                      <span className="text-danger fw-bold">***Chú ý:</span>{" "}
                      Chúng tôi sẽ gửi thống kê truy cập theo từng ngành nghề để
                      bạn nắm được số lượng khách hàng tìm kiếm hàng tháng/ năm
                      (thống kê bằng <b>Google analytics</b>).
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mt-4">
                  <img className="w-100" src="images/quangcao_banner.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 rounded-3 p-0 pb-4 bg-white m-0 text-center mt-5">
            <div className="w-100 mt-4 p-3">
              <div className="row">
                <div className="col-sm-6">
                  <div
                    className="rounded-4 p-0 mt-3 ps-4 pe-4 bg_tim mx-auto mt-4"
                    style={{ display: "inline-block" }}
                  >
                    <h2 className="fs-5 text-uppercase p-0 pt-2 text-center">
                      {" "}
                      MỤC - QUẢNG CÁO VỊ TRÍ ĐẶC BIỆT (TOP4 NGANG)
                    </h2>
                  </div>
                  <div className="h-auto mt-4 text-start">
                    <div className="h-auto mb-3 clearfix">
                      <div className="div1 pt-1">
                        <i className="fa fa-regular fa-square-check" />
                      </div>
                      <div className="div2">
                        Vị trí cao nhất, hiển thị đầu tiên trong kết quả tìm
                        kiếm doanh nghiệp theo ngành nghề/ lĩnh vực kinh doanh.
                      </div>
                    </div>
                    <div className="h-auto mb-3 clearfix">
                      <div className="div1 pt-1">
                        <i className="fa fa-regular fa-square-check" />
                      </div>
                      <div className="div2">
                        Hiệu quả nhờ gửi thông điệp nhanh đến khách hàng (khách
                        hàng chỉ mất 3 giây để nhận diện).
                      </div>
                    </div>
                    <div className="h-auto mb-3 clearfix">
                      <div className="div1 pt-1">
                        <i className="fa fa-regular fa-square-check" />
                      </div>
                      <div className="div2">
                        Tặng quảng cáo ưu tiên listings ngay sau các khách hàng
                        quảng cáo mục Listings.
                      </div>
                    </div>
                    <div className="h-auto mb-3 clearfix">
                      <div className="div1 pt-1">
                        <i className="fa fa-regular fa-square-check" />
                      </div>
                      <div className="div2">
                        Quảng cáo được hiển thị tại tất cả các tỉnh thành toàn
                        quốc và các trang từ 1,2,3...trong cùng ngành nghề.
                      </div>
                    </div>
                    <div className="h-auto mb-3 clearfix">
                      <div className="div1 pt-1">
                        <i className="fa fa-regular fa-square-check" />
                      </div>
                      <div className="div2 fw-bold">
                        Chi phí quảng cáo: Từ 5 triệu/ năm.
                      </div>
                    </div>
                    <div className="h-auto mb-3 clearfix">
                      <div className="div1 pt-1">
                        <i className="fa fa-regular fa-square-check" />
                      </div>
                      <div className="div2">
                        Được đăng Quảng cáo trên các website của Trang vàng Việt
                        Nam gồm:
                        <a target="_blank" href="https://trangvangvietnam.com">
                          www.trangvangvietnam.com
                        </a>
                      </div>
                    </div>
                    <div className="h-auto mb-3 clearfix">
                      <div className="div1 pt-1">
                        <i className="fa fa-regular fa-square-check" />
                      </div>
                      <div className="div2">
                        Tặng miễn phí thiết kế website chuẩn SEO, hosting vận
                        hành website và hỗ trợ chăm sóc website 24/7,v.v...
                      </div>
                    </div>
                    <div
                      className="rounded-4 p-0 ps-3 pe-3 bg-dark mt-3"
                      style={{ display: "inline-block" }}
                    >
                      <p className="m-0 text-uppercase p-2 pt-2 text-center">
                        <a className="text-warning" href="#DANG-KY-QUANG-CAO">
                          ĐĂNG KÝ QUẢNG CÁO TRANG VÀNG
                        </a>
                      </p>
                    </div>
                    <div className="m-0 mt-3 fw500">
                      <i className="fa fa-solid fa-headphones pe-1" /> Hotline
                      tư vấn quảng cáo:{" "}
                      <a className="text-danger" href="tel:0934498168">
                        0934.498.168
                      </a>{" "}
                      -{" "}
                      <a className="text-danger" href="tel:0912005564">
                        0912.005.564
                      </a>{" "}
                      <span className="fw-normal color0099FF">
                        (
                        <a id="color0099FF" href="https://zalo.me/0934498168">
                          Gọi nhắn <b>ZALO</b>
                        </a>
                        )
                      </span>
                    </div>
                    <div className="m-0 mt-3 text-black-50">
                      <span className="text-danger fw-bold">***Chú ý:</span>{" "}
                      Chúng tôi sẽ gửi thống kê truy cập theo từng ngành nghề để
                      bạn nắm được số lượng khách hàng tìm kiếm hàng tháng/ năm
                      (thống kê bằng <b>Google analytics</b>).
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mt-4">
                  <img className="w-100" src="images/quangcao_top4ngang.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white border rounded-4 p-3 pt-4 mt-4 text-center"
            id="DANG-KY-QUANG-CAO"
          >
            <div className="row pt-3 pb-3">
              <div className="col-sm-6 text-start ps-3 border-end">
                <div className="w-100 rounded-3 bg-white pt-0 text-center">
                  <div
                    className="rounded-4 p-0 ps-4 pe-4 yellow_bg mx-auto mt-1"
                    style={{ display: "inline-block" }}
                  >
                    <h1 className="fs-6 text-uppercase p-0 pt-2 text-center">
                      ĐĂNG KÝ QUẢNG CÁO TRANG VÀNG
                    </h1>
                  </div>
                  <form
                    method="POST"
                    name="frmTrangvangadd"
                    onSubmit={formik.handleSubmit}
                  >
                    <div className="h-auto w-100 mt-1">
                      <div className="row mt-4 text-start">
                        <div className="col-sm-4 pe-2 pt-1 title_text_align">
                          Tên của bạn<span className="text-danger">*</span>
                        </div>
                        <div className="col-sm-8 pe-4">
                          <input
                            className="p-1 ps-2 pe-2 w-100 class-input"
                            type="text"
                            name="userName"
                            onChange={formik.handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="row mt-3 text-start">
                        <div className="col-sm-4 pe-2 pt-1 title_text_align">
                          Số điện thoại<span className="text-danger">*</span>
                        </div>
                        <div className="col-sm-8 pe-4">
                          <input
                            className="p-1 ps-2 pe-2 w-50 class-input"
                            type="text"
                            name="userPhone"
                            onChange={formik.handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="row mt-3 text-start">
                        <div className="col-sm-4 pe-2 pt-1 title_text_align">
                          Tên công ty
                        </div>
                        <div className="col-sm-8 pe-4">
                          <input
                            className="p-1 ps-2 pe-2 w-100 class-input"
                            type="text"
                            name="businessName"
                            onChange={formik.handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="row mt-3 text-start">
                        <div className="col-sm-4 pe-2 pt-1 title_text_align">
                          Lĩnh vực kinh doanh
                        </div>
                        <div className="col-sm-8 pe-4">
                          <input
                            className="p-1 ps-2 pe-2 w-100 class-input"
                            type="text"
                            name="career"
                            onChange={formik.handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="row mt-3 text-start">
                        <div className="col-sm-4 pe-2 pt-1 title_text_align">
                          Sản phẩm dịch vụ chính
                          <span className="text-danger">*</span>
                        </div>
                        <div className="col-sm-8 pe-4">
                          <input
                            className="p-1 ps-2 pe-2 w-100 class-input"
                            type="text"
                            name="productService"
                            onChange={formik.handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="row mt-3 text-start">
                        <div className="col-sm-4 pe-2 pt-1" />
                        <div className="col-sm-8 pe-4">
                          <button
                            type="submit"
                            defaultValue="ĐĂNG KÝ QUẢNG CÁO"
                            name="B1"
                            style={{
                              background: "#00A5E3",
                              color: "#FFFFFF",
                              border: "none",
                              width: 186,
                              height: 38,
                              fontSize: 15,
                            }}
                          >Gửi</button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <script>
                    function Checkinput_hayadd()
                    {"{"}if (document.frmTrangvangadd.sodienthoai.value=="")
                    {"{"}alert("Bạn chưa nhập đủ thông tin bắt buộc");
                    document.frmTrangvangadd.sodienthoai.focus(); return false;
                    {"}"}return true;
                    {"}"}
                  </script>
                </div>
              </div>
              <div className="col-sm-6 float-start text-start lienhetrangvang">
                <h3 className="fs-5 pb-2 pt-0">
                  <i className="fa fa-solid fa-house pe-2" />
                  LIÊN HỆ TRANG VÀNG VIỆT NAM
                </h3>
                <p className="m-0 pb-2">
                  <strong className="fw500">Hà Nội:</strong> Tòa Nhà Vinafood1,
                  94 Lương Yên. P. Bạch Đằng, Q. Hai Bà Trưng, Hà Nội
                </p>
                <p className="m-0 pb-2">
                  <strong className="fw500">VP HCM:</strong> Lầu 4, Bách Việt
                  Building, 65 Trần Quốc Hoàn, P. 4, Q. Tân Bình, TP.HCM
                </p>
                <p className="m-0 pb-2">
                  <i className="fa fa-solid fa-tty pe-1" /> Điện thoại: (024)
                  3636 9512/ (024) 3636 9512{" "}
                </p>
                <p className="m-0 pb-2 fw500">
                  <i className="fa fa-solid fa-phone-volume pe-1" /> Hotline:{" "}
                  <a className="text-danger" href="tel:0934498168">
                    0934.498.168
                  </a>{" "}
                  -{" "}
                  <a className="text-danger" href="tel:0912005564">
                    0912.005.564
                  </a>{" "}
                  <span className="fw-normal color0099FF">
                    (
                    <a id="color0099FF" href="https://zalo.me/0934498168">
                      Gọi nhắn <b>ZALO</b>
                    </a>
                    <b>)</b>
                  </span>
                </p>
                <p className="m-0 pb-2">
                  <i className="fa fa-solid fa-headphones pe-1" /> TỔNG ĐÀI:{" "}
                  <strong className="fw500">1900 54 55 80</strong>
                </p>
                <p className="m-0 pb-2">
                  <i className="fa fa-regular fa-envelope pe-1" /> Email:{" "}
                  <a href="contact@trangvangvietnam.com">
                    contact@trangvangvietnam.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
