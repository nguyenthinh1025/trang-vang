import React, { useEffect } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import Slider from "react-slick";
import { GetListMainCategoryAction } from "../../../redux/actions/MainCategoryAction";
import { useDispatch, useSelector } from "react-redux";
import { GetListCareersTypeAction } from "../../../redux/actions/CareersTypeAction";
export default function BodyHome(props) {
  const dispatch = useDispatch();
  const { arrCareersType } = useSelector((root) => root.CareersTypeReducer);
  console.log(arrCareersType);
  const { arrCareers } = props;
  console.log(arrCareers);
  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const isDesktop = window.innerWidth > 768;
  settings.slidesToShow = isDesktop ? 2 : 1;
  console.log(isDesktop);
  useEffect(() => {
    const action = GetListCareersTypeAction();
    dispatch(action);
  }, []);

  return (
    <div className="mt-5 mb-5" style={{ height: "auto", margin: "auto" }}>
      <div className="container-xl">
        <div className=" h-auto w-100">
          <Slider {...settings}>
            {arrCareersType.map((item, index) => {
              return (
                <div className="ng_show_w50">
                  <div className="rounded-3 bg-white mb-3 w-100 ">
                    <p className="m-0 p-0 h6 pt-3 ps-3">
                      <div>{item.careersTypeName}</div>
                    </p>
                    <div className="pt-3">
                      {item?.Careers?.map((cate, index) => {
                        return (
                          <div className={`float-start w33_${index + 1}`}>
                            <div className="niengiam_img div_img_bg">
                              <NavLink
                                to={`getcareersbyname/${cate.careerName}`}
                              >
                                <img
                                  alt="Công ty Logistics"
                                  src={cate?.image_Image?.imageUrl}
                                  style={{
                                    width:
                                      window.innerWidth > 768
                                        ? " 191px"
                                        : "80px",
                                        height:
                                      window.innerWidth > 768
                                        ? " 100px"
                                        : "80px",
                                  }}
                                />
                              </NavLink>
                            </div>
                            <p className="m-0 pb-3 pt-2 text-center niengiam_font">
                              <NavLink
                                to={`getcareersbyname/${cate.careerName}`}
                              >
                                {cate.description}
                              </NavLink>
                            </p>
                          </div>
                        );
                      })}

                      <p className="p-0 m-0 clearfix" />
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="title_line">
          <p className="m-0 p-0" />
          <div className="title_text">NIÊN GIÁM NGÀNH NGHỀ</div>
        </div>
        <div className="h-auto w-100 mt-5">
          <div className="niengiam_div">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/27/an-ninh-bảo-vệ">An ninh - Bảo vệ</a>
            </div>
          </div>
          <div className="niengiam_div">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/9/bao-bì">Bao bì</a>
            </div>
          </div>
          <div className="niengiam_div">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/46/bảo-hộ-lao-động">Bảo hộ lao động</a>
            </div>
          </div>
          <div className="niengiam_div">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/48/cao-su">Cao su</a>
            </div>
          </div>
          <div className="niengiam_div_end">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/10/cơ-khí">Cơ khí</a>
            </div>
          </div>
          <div className="niengiam_div">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/41/công-nghiệp-thiết-bị">
                Công Nghiệp - Thiết bị
              </a>
            </div>
          </div>
          <div className="niengiam_div">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/39/điện-thiết-bị-điện">
                Điện &amp; Thiết bị điện
              </a>
            </div>
          </div>
          <div className="niengiam_div">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/21/điện-lạnh">Điện lạnh</a>
            </div>
          </div>
          <div className="niengiam_div">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/17/đồ-gia-dụng">Đồ gia dụng</a>
            </div>
          </div>
          <div className="niengiam_div_end">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/35/doanh-nghiệp-cần-dùng">
                Doanh nghiệp cần dùng
              </a>
            </div>
          </div>
          <div className="niengiam_div">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/14/du-lịch">Du lịch</a>
            </div>
          </div>
          <div className="niengiam_div">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/13/vận-tải--giao-nhận">Vận tải - giao nhận</a>
            </div>
          </div>
          <div className="niengiam_div">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/31/giấy-sản-phẩm-giấy">Giấy - sản phẩm giấy</a>
            </div>
          </div>
          <div className="niengiam_div">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/24/gỗ-đồ-gỗ">Gỗ &amp; đồ gỗ</a>
            </div>
          </div>
          <div className="niengiam_div_end">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/7/hóa-chất">Hóa chất</a>
            </div>
          </div>
          <div className="niengiam_div">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/32/in-ấn-thiết-kế">In ấn &amp; thiết kế</a>
            </div>
          </div>
          <div className="niengiam_div">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/8/may-mặc">May mặc </a>
            </div>
          </div>
          <div className="niengiam_div">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/38/máy-móc">Máy móc</a>
            </div>
          </div>
          <div className="niengiam_div">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/36/môi-trường">Môi trường</a>
            </div>
          </div>
          <div className="niengiam_div_end">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/34/nhựa-sản-phẩm-nhựa">Nhựa - sản phẩm nhựa</a>
            </div>
          </div>
          <div className="niengiam_div">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/42/nội-thất">Nội Thất</a>
            </div>
          </div>
          <div className="niengiam_div">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/1/nông-nghiệp">Nông nghiệp</a>
            </div>
          </div>
          <div className="niengiam_div">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/30/ô-tô-xe-máy">Ô tô - xe máy</a>
            </div>
          </div>
          <div className="niengiam_div">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/47/quà-tặng">Quà tặng</a>
            </div>
          </div>
          <div className="niengiam_div_end">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/11/quảng-cáo">Quảng cáo</a>
            </div>
          </div>
          <div className="niengiam_div">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/18/y-tế-thiết-bị-y-tế">Y tế - Thiết bị Y tế</a>
            </div>
          </div>
          <div className="niengiam_div">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/15/thép--inox">Thép - Inox</a>
            </div>
          </div>
          <div className="niengiam_div">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/6/thủ-công-mỹ-nghệ">Thủ công mỹ nghệ</a>
            </div>
          </div>
          <div className="niengiam_div">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/19/thực-phẩm--đồ-uống">Thực phẩm - đồ uống</a>
            </div>
          </div>
          <div className="niengiam_div_end">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/16/văn-phòng-phẩm">Văn Phòng phẩm</a>
            </div>
          </div>
          <div className="niengiam_div">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/40/vật-liệu-xây-dựng">Vật liệu xây dựng</a>
            </div>
          </div>
          <div className="niengiam_div">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/26/viễn-thông">Viễn thông</a>
            </div>
          </div>
          <div className="niengiam_div">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/3/xây-dựng">Xây dựng</a>
            </div>
          </div>
          <div className="niengiam_div">
            <div className="rounded-2 bg-white mb-3 p-3 text-uppercase niengiam_fontsize">
              <span>
                <i className="fa fa-solid fa-bars pe-1" />
              </span>{" "}
              <a href="./gindex/43/xuất-nhập-khẩu">Xuất nhập khẩu</a>
            </div>
          </div>
          <p className="m-0 p-0 clearfix" />
        </div>
        <div className="title_line">
          <p className="m-0 p-0" />
          <div className="title_text">TRANG VÀNG VIỆT NAM</div>
        </div>
        <div className="rounded-3 bg-white h-auto w-100 mt-5 clearfix">
          <div className="gt_trangvang_div1">
            <img className="w-100" src="images/trangvangvietnam.png" />
          </div>
          <div className="gt_trangvang_div2">
            <p className="tuade">
              Trang vàng Việt Nam, danh bạ <strong>250.000</strong> doanh nghiệp
              toàn quốc
            </p>
            <p className="text">
              Kênh cung cấp thông tin doanh nghiệp, kết nối giao thương và xúc
              tiến thương mại lớn, uy tín hàng đầu Việt Nam
            </p>
            <p className="text">
              <i className="fa fa-solid fa-check pe-1" /> Hơn{" "}
              <strong>250.000</strong> thông tin doanh nghiệp.
              <br />
              <i className="fa fa-solid fa-check pe-1" /> Hơn{" "}
              <strong>3.000</strong> ngành nghề,<strong>1.000.000</strong> sản
              phẩm dịch vụ.
              <br />
              <i className="fa fa-solid fa-check pe-1" /> Hơn{" "}
              <strong>200.000</strong> truy cập mỗi ngày để tìm nhà cung cấp.
              <br />
            </p>
          </div>
          <p className="m-0 p-0 clearfix" />
        </div>
        <div className="rounded-3 bg-white h-auto w-100 mt-5">
          <p className="m-0 muclucnganhnghe">
            <i className="fa fa-solid fa-magnifying-glass" /> MỤC LỤC NGÀNH NGHỀ
          </p>
          <div className="p-4 m-0 text-center mucluc_pc">
            <span className="pe-3 fw-semibold">Tìm ngành theo</span>
            <a id="muclucnganhnghe_link" href="./findex/A">
              A
            </a>
            <a id="muclucnganhnghe_link" href="./findex/B">
              B
            </a>
            <a id="muclucnganhnghe_link" href="./findex/C">
              C
            </a>
            <a id="muclucnganhnghe_link" href="./findex/D">
              D
            </a>
            <a id="muclucnganhnghe_link" href="./findex/E">
              E
            </a>
            <a id="muclucnganhnghe_link" href="./findex/F">
              F
            </a>
            <a id="muclucnganhnghe_link" href="./findex/G">
              G
            </a>
            <a id="muclucnganhnghe_link" href="./findex/H">
              H
            </a>
            <a id="muclucnganhnghe_link" href="./findex/I">
              I
            </a>
            <a id="muclucnganhnghe_link" href="./findex/K">
              K
            </a>
            <a id="muclucnganhnghe_link" href="./findex/L">
              L
            </a>
            <a id="muclucnganhnghe_link" href="./findex/M">
              M
            </a>
            <a id="muclucnganhnghe_link" href="./findex/N">
              N
            </a>
            <a id="muclucnganhnghe_link" href="./findex/O">
              O
            </a>
            <a id="muclucnganhnghe_link" href="./findex/P">
              P
            </a>
            <a id="muclucnganhnghe_link" href="./findex/Q">
              Q
            </a>
            <a id="muclucnganhnghe_link" href="./findex/R">
              R
            </a>
            <a id="muclucnganhnghe_link" href="./findex/S">
              S
            </a>
            <a id="muclucnganhnghe_link" href="./findex/T">
              T
            </a>
            <a id="muclucnganhnghe_link" href="./findex/U">
              U
            </a>
            <a id="muclucnganhnghe_link" href="./findex/V">
              V
            </a>
            <a id="muclucnganhnghe_link" href="./findex/W">
              W
            </a>
            <a id="muclucnganhnghe_link" href="./findex/X">
              X
            </a>
            <a id="muclucnganhnghe_link" href="./findex/Y">
              Y
            </a>
            <a id="muclucnganhnghe_link" href="./findex/Z">
              Z
            </a>
          </div>
          <div className="p-4 m-0 text-center mucluc_mobile">
            <a id="muclucnganhnghe_link" href="./findex/A">
              A
            </a>
            <a id="muclucnganhnghe_link" href="./findex/B">
              B
            </a>
            <a id="muclucnganhnghe_link" href="./findex/C">
              C
            </a>
            <a id="muclucnganhnghe_link" href="./findex/D">
              D
            </a>
            <a id="muclucnganhnghe_link" href="./findex/E">
              E
            </a>
            <a id="muclucnganhnghe_link" href="./findex/F">
              F
            </a>
            <a id="muclucnganhnghe_link" href="./findex/G">
              G
            </a>
            <a id="muclucnganhnghe_link" href="./findex/H">
              H
            </a>
            <a id="muclucnganhnghe_link" href="./findex/I">
              I
            </a>
            <a id="muclucnganhnghe_link" href="./findex/K">
              K
            </a>
            <a id="muclucnganhnghe_link" href="./findex/L">
              L
            </a>
            <a id="muclucnganhnghe_link" href="./findex/M">
              M
            </a>
            <a id="muclucnganhnghe_link" href="./findex/N">
              N
            </a>
            <a id="muclucnganhnghe_link" href="./findex/O">
              O
            </a>
            <a id="muclucnganhnghe_link" href="./findex/P">
              P
            </a>
            <a id="muclucnganhnghe_link" href="./findex/Q">
              Q
            </a>
            <a id="muclucnganhnghe_link" href="./findex/R">
              R
            </a>
            <a id="muclucnganhnghe_link" href="./findex/S">
              S
            </a>
            <a id="muclucnganhnghe_link" href="./findex/T">
              T
            </a>
            <a id="muclucnganhnghe_link" href="./findex/U">
              U
            </a>
            <a id="muclucnganhnghe_link" href="./findex/V">
              V
            </a>
            <a id="muclucnganhnghe_link" href="./findex/W">
              W
            </a>
            <a id="muclucnganhnghe_link" href="./findex/X">
              X
            </a>
            <a id="muclucnganhnghe_link" href="./findex/Y">
              Y
            </a>
            <a id="muclucnganhnghe_link" href="./findex/Z">
              Z
            </a>
          </div>
        </div>
        <p className="m-0 p-0 clearfix" />
        <div className="rounded-3 p-3 pb-4 border h-auto w-100 mt-5">
          <div className="foot_signup1">Bạn là doanh nghiệp?</div>
          <div className="foot_signup2">
            Đăng ký Trang vàng là cách đơn giản và hiệu quả để bạn quảng bá, bán
            hàng, giữ và phát triển thị phần !<br />
            <span className="text-black-50">
              <small>
                Hãy gọi hoặc gửi Zalo đến
                <strong>0934.498.168</strong> (gửi Zalo)/{" "}
                <strong>0912.005.564</strong> (gửi Zalo) để được tư vấn và hỗ
                trợ.
              </small>
            </span>
          </div>
          <div className="foot_signup3">
            <button className="border-0 rounded-2 p-1 ps-3 pe-3 buttom_bg_footer_signup text-white">
              <a href="./subpages/signup.asp">Đăng ký miễn phí !</a>
            </button>
          </div>
          <p className="m-0 p-0 mb-1 clearfix" />
        </div>
      </div>
    </div>
  );
}
