import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React from "react";
import { storage_bucket } from "../../firebase";
import { UpdateAvatarBusinessAction } from "../../redux/actions/BusinessAction";
import { useDispatch } from "react-redux";

export default function Header(props) {
  const { businessByID } = props;
const dispatch = useDispatch()
  const uploadFile = async (e, certificateId) => {
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
            const value = {
              id:businessByID.businessId,
              avatar: url,
            };
            const action = UpdateAvatarBusinessAction( value, businessByID.businessId);
            dispatch(action);
          });
        }
      );
    } catch (error) {
      console.error("File Upload Error:", error);
    }
  };
  return (
    <div>
      <div className="w-100 rounded-3 p-2 pt-3 pb-3 bg-white border-bottom">
        <div className="p-0 m-0 w-100 clearfix">
          <div className="p-2 float-start w85">
            <h1 className="fs-3 text-capitalize">
              {businessByID?.businessNameEng} - {businessByID?.businessName}
            </h1>

            <div
              className="p-1 ps-0 star_898989 star_mb"
              style={{ display: "flex" }}
            >
              <i className="fa fa-star star_checked" />{" "}
              <i className="fa fa-star star_checked" />{" "}
              <i className="fa fa-star star_checked" />{" "}
              <i className="fa fa-regular fa-star-half-stroke star_checked" />{" "}
              <i className="fa fa-star" />{" "}
              <img
                className="ps-3"
                src="https://trangvangvietnam.com/images/ICON-SPONSOR.png"
              />{" "}
              <span className="star_text">NHÀ TÀI TRỢ</span>
            </div>
            <div className="w-100 clearfix">
              <div className="border border-dark-subtle rounded-2 p-2 text-center mb-2 logo_listing logo-bisuness">
                <img
                  style={{ width: "100%" }}
                  alt={`  ${businessByID.businessNameEng} - ${businessByID.businessName}`}
                  src={
                    businessByID &&
                    businessByID.Images &&
                    businessByID?.avatar
                  }
                />
                 <div className="button-wrapper">
                            <span className="label">Tải ảnh lên</span>
                            <input
                              type="file"
                              name="upload"
                              id="upload"
                              className="upload-box"
                              placeholder="Tải ảnh lên"
                              onChange={(e) => {
                                uploadFile(e, businessByID.businessId);
                              }}
                            />
                          </div>
              </div>
              <div className="logo_lisitng_address">
                <div className="pb-2 pt-0 ps-3 pe-4 m-0">
                  {businessByID.address}
                </div>
                <div className="pb-2 pt-0 ps-3 pe-4 m-0 fs-5">
                  <i className="fa fa-solid fa-phone-volume text-black-50 pe-1" />
                  <a href={`tel:{${businessByID.phone}`}>
                    {businessByID.phone}
                  </a>
                </div>
                <div className="pb-2 pt-0 ps-3 pe-0 m-0 email_link">
                  <i className="fa fa-regular fa-envelope pe-1 text-black-50" />{" "}
                  <a href={`mailto:${businessByID.email}`}>
                    {businessByID.email}
                  </a>
                </div>
                <div className="pb-2 pt-0 ps-3 pe-0 m-0 web_link">
                  <i className="fa fa-solid fa-earth-asia pe-1 text-black-50" />{" "}
                  <a
                    className="fs-5 web"
                    rel="nofollow"
                    target="_blank"
                    href={`${businessByID.website}`}
                  >
                    {businessByID.website}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-1 pt-3 float-end w15">
            <div className="w-100 h-auto p-2 pb-1">
              <img
                className="w-100"
                src="../images/logo-xacthuc-listings.png"
              />
            </div>
            <div className="w-100 pt-1 by_trangvang">BY YELLOW PAGES</div>
          </div>
        </div>
      </div>
    </div>
  );
}
