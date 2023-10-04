import React from 'react'

export default function Contact(props) {
    const {businessByID} = props
  return (
    <div className="sticky listing_phai">
            <div className="w-100 rounded-3 bg-white p-3 pt-4 mb-3 border-bottom">
              <div className="rounded-4 p-1 text-center yellow_bg fw500">
                <i className="fa-solid fa-phone-volume fa-shake pe-1" /> Thông
                tin liên hệ
              </div>
              <div className="h-auto w-100">
                <div className="pt-3 w-100 mb-3 clearfix">
                  <div className="ps-2 text-center w-25 float-start">
                    <div className="rounded-2 border border-dark-subtle p-1 text-center logo_contact">
                      <img
                        style={{ width: "100%", maxHeight: 46 }}
                        src={
                          businessByID &&
                          businessByID.Images &&
                          businessByID?.Images[0]?.imageUrl
                        }
                      />
                    </div>
                  </div>
                  <div className="p-2 ps-3 pt-1 w-75 float-start">
                    <small>Chúng tôi có thể giúp gì được bạn?</small>
                  </div>
                </div>
                <div className="w-100 rounded-3 p-1 ps-3 mb-2 mauxam_bg">
                  <i className="fa fa-regular fa-user" />{" "}
                  <span className="span_lienhe">Tên liên hệ:</span>
                  <small className="red_color fw500">
                    {" "}
                    {businessByID &&
                      businessByID.Users &&
                      businessByID?.Users[0]?.fullName}
                  </small>
                </div>
                <div className="w-100 rounded-3 p-1 ps-3 mb-2 mauxam_bg">
                  <i className="fa fa-regular fa-gem" />{" "}
                  <span className="span_lienhe">Chức vụ:</span>
                  <small>
                    {" "}
                    {businessByID &&
                      businessByID.Users &&
                      businessByID?.Users[0]?.position}
                  </small>
                </div>
                <div className="w-100 rounded-3 p-1 ps-3 mb-2 mauxam_bg">
                  <i className="fa fa-solid fa-mobile-screen-button" />{" "}
                  <span className="span_lienhe">Di động:</span>
                  <small className="fw-bold color_333">
                    {" "}
                    <a
                      href={`tel:${
                        businessByID &&
                        businessByID.Users &&
                        businessByID?.Users[0]?.phone
                      }`}
                    >
                      {businessByID &&
                        businessByID.Users &&
                        businessByID?.Users[0]?.phone}
                    </a>
                  </small>
                </div>
                <div className="w-100 rounded-3 p-1 ps-3 mb-2 mauxam_bg">
                  <i className="fa fa-regular fa-envelope" />{" "}
                  <span className="span_lienhe">Email:</span>
                  <small>
                    {" "}
                    <a
                      id="email_lienhe"
                      href={`mailto:${
                        businessByID &&
                        businessByID.Users &&
                        businessByID?.Users[0]?.email
                      }`}
                    >
                      {businessByID &&
                        businessByID.Users &&
                        businessByID?.Users[0]?.email}
                    </a>
                  </small>
                </div>
              </div>
              <p className="m-0 clearfix" />
            </div>
            <div className="w-100 rounded-3 bg-white p-3 mb-3  pt-4 border-bottom color666">
              <div className="pt-2 pb-4 text-center fs-4">
                Bạn là doanh nghiệp?
              </div>
              <div className="rounded-4 pb-1 text-white text-center orange_bg fs-5">
                <a
                  id="dangkydn_link"
                  target="_blank"
                  href="https://signup.trangvangvietnam.com/sign_up_now.asp"
                >
                  Đăng Trang vàng miễn phí !
                </a>
              </div>
              <div className="h-auto w-100">
                <p className="m-0 pt-4 pb-2 text-center lh-lg">
                  Đăng ký doanh nghiệp lên Trang vàng là cách đơn giản, hiệu quả
                  nhất để:
                  <br />
                  <i className="fa fa-solid fa-bullhorn" /> Quảng bá doanh
                  nghiệp; <br />
                  <i className="fa-solid fa-comments-dollar" /> Tiếp cận người
                  mua và bán hàng; <br />
                  <i className="fa fa-solid fa-seedling" /> Giữ và mở rộng thị
                  phần;{" "}
                </p>
                <p className="m-0 text-center text-black-50">
                  -------------------------------
                </p>
                <p className="pt-2 text-center line_height38">
                  LIÊN HỆ TRANG VÀNG
                  <br />
                  <span className="fs-5" id="colorFF6600">
                    <i className="fa fa-solid fa-phone" />{" "}
                    <a
                      id="colorFF6600"
                      title="Chát/ Gọi Zalo với Trang Vàng Việt Nam"
                      href="https://zalo.me/0934498168"
                    >
                      0934.498.168
                    </a>
                    /{" "}
                    <a
                      id="colorFF6600"
                      title="Chát/ Gọi Zalo với Trang Vàng Việt Nam"
                      href="https://zalo.me/0934498168"
                    >
                      0912.005.564
                    </a>
                  </span>
                  <br />
                  (số{" "}
                  <span className="fw500">
                    {" "}
                    Hotline/{" "}
                    <a
                      title="Chát/ Gọi Zalo với Trang Vàng Việt Nam"
                      href="https://zalo.me/0934498168"
                    >
                      <img src="https://trangvangvietnam.com/images/zalo_txt.png" />
                    </a>
                  </span>
                  )
                </p>
              </div>
            </div>
          </div>
  )
}
