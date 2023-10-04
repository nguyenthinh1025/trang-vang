import React from 'react'

export default function ListLeft(props) {
    const {name ,arrBusinessByCareersType} = props
  return (
    <div className="rounded-3 border h-auto pb-4 bg-white div_nganhnghe_pc">
    <p className="m-0 p-2 pt-3  pb-3 ps-1 h6">
      <small>
        <i className="fa-solid fa-layer-group ps-1 colord63384" />
      </small>{" "}
      Ngành nghề
    </p>
    <p className="m-0 p-1 ps-4 pe-3 fw500">
      <a
        className="yp_red_color"
        href="https://trangvangvietnam.com/categories/41710/thuc-pham-dong-hop.html"
      >
        {name}
        <span className="counter_number fs_13">
          ({arrBusinessByCareersType?.businesses?.filter(item =>item.status ==="active").length})
        </span>
      </a>
    </p>
    <p className="m-0 p-2 pt-3 pb-3 ps-2 h6">
      <small>
        <i className="fa-solid fa-location-dot color20c997" />
      </small>{" "}
      Tỉnh/ Thành phố
    </p>
    <p className="m-0 p-1 ps-4 pb-3 pe-3">
      <a href="https://trangvangvietnam.com/cateprovinces/41710/thực-phẩm-đóng-hộp-ở-tại-hà-nội.html">
        <small>Hà Nội</small>
      </a>
    </p>
    <p className="m-0 p-1 ps-4 pb-3 pe-3">
      <a href="https://trangvangvietnam.com/cateprovinces/41710/thực-phẩm-đóng-hộp-ở-tại-tp.-hồ-chí-minh-(tphcm).html">
        <small>Tp. Hồ Chí Minh (TPHCM)</small>
      </a>
    </p>
    <p className="m-0 p-1 ps-4 pb-3 pe-3">
      <a href="https://trangvangvietnam.com/cateprovinces/41710/thực-phẩm-đóng-hộp-ở-tại-đồng-nai.html">
        <small>Đồng Nai</small>
      </a>
    </p>
    <p className="m-0 p-1 ps-4 pb-3 pe-3">
      <a href="https://trangvangvietnam.com/cateprovinces/41710/thực-phẩm-đóng-hộp-ở-tại-bình-dương.html">
        <small>Bình Dương</small>
      </a>
    </p>
    <p className="m-0 p-1 ps-4 pb-3 pe-3">
      <a href="https://trangvangvietnam.com/cateprovinces/41710/thực-phẩm-đóng-hộp-ở-tại-tp.-đà-nẵng.html">
        <small>Tp. Đà Nẵng</small>
      </a>
    </p>
    <p className="m-0 p-1 ps-4 pb-3 pe-3">
      <a href="https://trangvangvietnam.com/cateprovinces/41710/thực-phẩm-đóng-hộp-ở-tại-tp.-hải-phòng.html">
        <small>Tp. Hải Phòng</small>
      </a>
    </p>
    <p className="m-0 p-1 ps-4 pb-3 pe-3">
      <a href="https://trangvangvietnam.com/cateprovinces/41710/thực-phẩm-đóng-hộp-ở-tại-đồng-tháp.html">
        <small>Đồng Tháp</small>
      </a>
    </p>
    <p className="m-0 p-1 ps-4 pb-3 pe-3">
      <a href="https://trangvangvietnam.com/cateprovinces/41710/thực-phẩm-đóng-hộp-ở-tại-bà-rịa-vũng-tàu.html">
        <small>Bà Rịa-Vũng Tàu</small>
      </a>
    </p>
    <p className="m-0 p-1 ps-4 pb-3 pe-3">
      <a href="https://trangvangvietnam.com/cateprovinces/41710/thực-phẩm-đóng-hộp-ở-tại-hưng-yên.html">
        <small>Hưng Yên</small>
      </a>
    </p>
    <p className="m-0 p-1 ps-4 pb-3 pe-3">
      <a href="https://trangvangvietnam.com/cateprovinces/41710/thực-phẩm-đóng-hộp-ở-tại-lào-cai.html">
        <small>Lào Cai</small>
      </a>
    </p>
    <p className="m-0 p-1 ps-4 pb-3 pe-3">
      <a href="https://trangvangvietnam.com/cateprovinces/41710/thực-phẩm-đóng-hộp-ở-tại-nam-định.html">
        <small>Nam Định</small>
      </a>
    </p>
    <p className="m-0 p-1 ps-4 pb-3 pe-3">
      <a href="https://trangvangvietnam.com/cateprovinces/41710/thực-phẩm-đóng-hộp-ở-tại-phú-yên.html">
        <small>Phú Yên</small>
      </a>
    </p>
    <p className="m-0 p-1 ps-4 pb-3 pe-3">
      <a href="https://trangvangvietnam.com/cateprovinces/41710/thực-phẩm-đóng-hộp-ở-tại-thanh-hóa.html">
        <small>Thanh Hóa</small>
      </a>
    </p>
    <p className="m-0 p-1 ps-4 pb-3 pe-3">
      <a href="https://trangvangvietnam.com/cateprovinces/41710/thực-phẩm-đóng-hộp-ở-tại-thừa-thiên-huế.html">
        <small>Thừa Thiên Huế</small>
      </a>
    </p>
    <p className="m-0 p-1 ps-4 pb-3 pe-3">
      <a href="https://trangvangvietnam.com/cateprovinces/41710/thực-phẩm-đóng-hộp-ở-tại-tp.-cần-thơ.html">
        <small>TP. Cần Thơ</small>
      </a>
    </p>
    <p className="m-0 p-1 ps-4 pb-3 pe-3">
      <a href="https://trangvangvietnam.com/cateprovinces/41710/thực-phẩm-đóng-hộp-ở-tại-hải-dương.html">
        <small>Hải Dương</small>
      </a>
    </p>
    <p className="m-0 p-1 ps-4 pb-3 pe-3">
      <a href="https://trangvangvietnam.com/cateprovinces/41710/thực-phẩm-đóng-hộp-ở-tại-hậu-giang.html">
        <small>Hậu Giang</small>
      </a>
    </p>
    <p className="m-0 p-1 ps-4 pb-3 pe-3">
      <a href="https://trangvangvietnam.com/cateprovinces/41710/thực-phẩm-đóng-hộp-ở-tại-kiên-giang.html">
        <small>Kiên Giang</small>
      </a>
    </p>
    <p className="m-0 p-1 ps-4 pb-3 pe-3">
      <a href="https://trangvangvietnam.com/cateprovinces/41710/thực-phẩm-đóng-hộp-ở-tại-long-an.html">
        <small>Long An</small>
      </a>
    </p>
    <p className="m-0 p-1 ps-4 pb-3 pe-3">
      <a href="https://trangvangvietnam.com/cateprovinces/41710/thực-phẩm-đóng-hộp-ở-tại-ninh-bình.html">
        <small>Ninh Bình</small>
      </a>
    </p>
    <p className="m-0 p-1 ps-4 pb-3 pe-3">
      <a href="https://trangvangvietnam.com/cateprovinces/41710/thực-phẩm-đóng-hộp-ở-tại-quảng-nam.html">
        <small>Quảng Nam</small>
      </a>
    </p>
    <p className="m-0 p-1 ps-4 pb-3 pe-3">
      <a href="https://trangvangvietnam.com/cateprovinces/41710/thực-phẩm-đóng-hộp-ở-tại-tiền-giang.html">
        <small>Tiền Giang</small>
      </a>
    </p>
    <p className="m-0 p-1 ps-4 pb-3 pe-3">
      <a href="https://trangvangvietnam.com/cateprovinces/41710/thực-phẩm-đóng-hộp-ở-tại-vĩnh-long.html">
        <small>Vĩnh Long</small>
      </a>
    </p>

   
  </div>
  )
}
