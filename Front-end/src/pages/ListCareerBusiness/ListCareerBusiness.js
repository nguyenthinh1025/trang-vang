import React, { useEffect } from "react";
import { ListCareer } from "../Home/BodyHome/ListCareer";
import CareerCenter from "./CareerCenter";
import CareerRight from "./CareerRight";
import BannerTop from "./BannerTop";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { GetListCareersNameAction } from "../../redux/actions/CareersAction";
import { useDispatch, useSelector } from "react-redux";
export default function ListCareerBusiness(props) {
  const { name } = props.match.params;
  const dispatch = useDispatch();
const {arrCareersName,arrCareersAdvertisement} = useSelector(root =>root.CareersReducer)
console.log(arrCareersAdvertisement)
  useEffect(() => {
    window.scrollTo(0, 0);
    const action = GetListCareersNameAction(name);
    dispatch(action);
  }, [name]);
  return (
    <div className="m-auto h-auto pt-5">
      <div className="h-auto w-100 m-0 p-3 pt-0 head_m clearfix">
        <div className="w-100 rounded-3 bg-white">
          <button className="accordion bg-transparent h6 pt-3 pb-2">
            <i className="fa fa-solid fa-bars pe-1" /> NIÊN GIÁM NGÀNH NGHỀ
          </button>
          <div className="panel">
            <div className="h-auto w-100 mb-2">
              {ListCareer.map((item, index) => {
                return (
                  <div className="p-0 m-0 pt-2 border-bottom border-light">
                    <NavLink
                      to={`/careerbussiness/${item.name}`}
                      className="border-0 text-uppercase"
                    >
                      <i className="fa-solid fa-caret-right pe-1" /> {item.name}
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl">
        <BannerTop />
        <div className="h-auto div_nganhnghe_pc">
          <div className="w-100 rounded-3 p-2 pt-3 pb-5 bg-white">
            <div className="p-2 h6 border-bottom border-2">
              <i className="fa fa-solid fa-bars" /> NIÊN GIÁM NGÀNH
            </div>
            {ListCareer.map((item, index) => {
              return (
                <div className="p-2 border-bottom">
                  <NavLink
                    to={`/careerbussiness/${item.name}`}
                    className="text-dark text-capitalize"
                  >
                    {item.name}
                  </NavLink>
                </div>
              );
            })}

            <p className="m-0 p-0 clearfix" />
          </div>
        </div>
        <div className="div_list_cty">
          <div className="w-100 rounded-3 p-3 pt-2 pb-2 bg-white border-bottom">
            <h1 className="fs-4 m-0 p-0 red_color text-capitalize">{name}</h1>
          </div>
          <CareerCenter arrCareersName ={arrCareersName}/>
        </div>
        <CareerRight />
        <p className="m-0 clearfix" />
      </div>
    </div>
  );
}
