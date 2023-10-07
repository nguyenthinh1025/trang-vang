import React, { Fragment, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GetListBusinessByCareerLocationTypeAction, GetListBusinessByCareersTypeAction } from "../../redux/actions/CareersTypeAction";
import { useDispatch, useSelector } from "react-redux";
import Event from "./Event/Event";
import ListLeft from "./ListLeft/ListLeft";
import ListCenter from "./ListCenter/ListCenter";
import ListRight from "./ListRight/ListRight";
import { SearchBusiness, SearchBusinessLocation } from "../../redux/actions/BusinessAction";
export default function Search(props) {
  const { name ,location} = props.match.params;
  const dispatch = useDispatch();
  const { searchBusinessName,searchBusinessCareer,searchBusinessProduct,searchBusinessAdvertisement } = useSelector(
    (root) => root.BusinessReducer
  );
  console.log(searchBusinessName)
  console.log(searchBusinessCareer)
  console.log(searchBusinessProduct)
  console.log(searchBusinessAdvertisement)
  useEffect(() => {
    if(location){
      const action = SearchBusinessLocation(name,location);
      dispatch(action);
    }else{
      const action = SearchBusiness(name);
    dispatch(action);
    }
  }, [location]);
  const countActiveBusinesses = (businessList) => {
    return businessList?.filter(item => item.status === "active").length || 0;
  };
  
  const totalActiveBusinesses = 
    countActiveBusinesses(searchBusinessName) +
    countActiveBusinesses(searchBusinessCareer) +
    countActiveBusinesses(searchBusinessProduct) +
    countActiveBusinesses(searchBusinessAdvertisement);
  
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
                ({totalActiveBusinesses} doanh nghiệp được tìm
                thấy)
              </span>
            </div>
          </div>

          <Event />
         
          <div className="m-auto h-auto mt-4">
             <ListLeft  name ={name} arrBusinessByCareersType= {totalActiveBusinesses}/>
           {/* <ListCenter  name ={name} arrBusinessByCareersType={arrBusinessByCareersType}/>*/}
           
           <ListRight arrAdvertisement = {searchBusinessAdvertisement} /> 
            <p className="m-0 clearfix" />
          </div>        
          <p className="m-0 clearfix" />
        </div>
      </div>
    
    </div>
  );
}
