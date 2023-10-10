import React, { Fragment, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GetListBusinessByCareerLocationTypeAction, GetListBusinessByCareersTypeAction } from "../../redux/actions/CareersTypeAction";
import { useDispatch, useSelector } from "react-redux";
import Event from "./Event/Event";
import ListLeft from "./ListLeft/ListLeft";
import ListCenter from "./ListCenter/ListCenter";
import ListRight from "./ListRight/ListRight";
export default function ListBussiness(props) {
  const { name ,location} = props.match.params;
  const dispatch = useDispatch();
  const { arrBusinessByCareersType,arrAdvertisement } = useSelector(
    (root) => root.CareersTypeReducer
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    if(location){
      const action = GetListBusinessByCareerLocationTypeAction(name,location);
      dispatch(action);
    }else{
      const action = GetListBusinessByCareersTypeAction(name);
    dispatch(action);
    }
  }, [location]);
  return (
    <div className="page_bg mb-5" >

      <div className="m-auto h-auto">
        <div className="container-xl pt-3">
          <div className="m-0 clearfix">
            <div className="float-start d-inline">
              <h1 className="p-1 m-0 mt-1 fs-5 ps-2 yp_red_color">
                {name}
              </h1>
            </div>
            <div className="float-start div_ketquatimkiem pc_display">
              <span className="ketquatimkiem_counter">
                ({arrBusinessByCareersType?.businesses?.filter(item =>item.status ==="active").length} doanh nghiệp được tìm
                thấy)
              </span>
            </div>
          </div>

          <Event />
         
          <div className="m-auto h-auto mt-4">
            <ListLeft  name ={name} arrBusinessByCareersType={arrBusinessByCareersType}/>
            <ListCenter  name ={name} arrBusinessByCareersType={arrBusinessByCareersType}/>
           
           <ListRight arrAdvertisement = {arrAdvertisement} />
            <p className="m-0 clearfix" />
          </div>        
          <p className="m-0 clearfix" />
        </div>
      </div>
    
    </div>
  );
}
