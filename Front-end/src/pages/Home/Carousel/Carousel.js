import React, { useEffect, useState } from "react";

export default function Carousel() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?city=${value}&country=Vietnam&format=json`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      const cities = data.map((item) => item.display_name);
      setSuggestions(cities);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClick = (city) => {
    setSearchTerm(city);
    setSuggestions([]); // Đặt gợi ý thành mảng trống để ẩn danh sách gợi ý
  };
  return (
    <div className="m-0 p-0">
      <div className="box_timkiem">
        <div className="container-xl p-3">
          <p style={{ height: 50, clear: "both", padding: 0, margin: 0 }} />
          <div className="trangvang_tuade">
            <h3>YELLOW PAGES</h3>
          </div>
          <h1 className="trangvangvietnam">TRANG VÀNG VIỆT NAM</h1>
          <form
            method="GET"
            action="./search.asp"
            name="frmTrangvang"
            onsubmit="return Checkinput_hay();"
          >
            <div className="div_form_input">
              <div className="nut_what" style={{ position: "relative" }}>
                <p id="auto">
                  <input
                    id="searchField"
                    type="text"
                    name="keyword"
                    autoComplete="OFF"
                    className="nut_what_input"
                    tabIndex={1}
                    placeholder="Ngành nghề, sản phẩm dịch vụ, tên công ty,..."
                  />
                </p>
                <div id="xoakey" className="xoakey_what">
                  <i className="fa-regular fa-circle-xmark" />
                </div>
              </div>
              <div
                className="nut_where"
                style={{
                  backgroundImage: "url(images/address_icon.JPG)",
                  backgroundPosition: "left",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                }}
              >
                <p id="auto1">
                  <input
                    type="text"
                    name="where"
                    autoComplete="OFF"
                    className="nut_where_input"
                    tabIndex={1}
                    placeholder="Địa chỉ, tỉnh thành phố,..."
                    value={searchTerm}
                    onChange={handleChange}
                  />
                  <ul>
                    {suggestions.map((suggestion, index) => (
                      <li key={index} onClick={() => handleClick(suggestion)}>
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                </p>
                <div id="xoawhere" className="xoakey_where">
                  <i className="fa-regular fa-circle-xmark" />
                </div>
              </div>
              <div className="nut_find">
                <button type="submit" className="nuttimkiem">
                  <i className="fa fa-solid fa-magnifying-glass" />
                </button>
              </div>
            </div>
            <p style={{ clear: "both" }} />
            <div id="timcty" className="timcongty">
              <div className="timcongty_check">
                <input type="checkbox" name="timcongty" defaultValue="ON" />
              </div>
              <div className="timcongty_text">
                <p>Chỉ tìm theo tên công ty</p>
              </div>
            </div>
            <p style={{ clear: "both" }} />
          </form>
          <script>
            function Checkinput_hay() {"{"}
            if (document.frmTrangvang.keyword.value == "") {"{"}
            alert("Please input your keyword !");
            document.frmTrangvang.keyword.focus(); return false;
            {"}"} return true;
            {"}"}
          </script>
        </div>
      </div>
    </div>
  );
}
