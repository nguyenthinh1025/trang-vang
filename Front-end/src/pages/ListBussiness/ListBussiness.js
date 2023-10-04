import React, { Fragment, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GetListBusinessByCareersTypeAction } from "../../redux/actions/CareersTypeAction";
import { useDispatch, useSelector } from "react-redux";
import Event from "./Event/Event";
import ListLeft from "./ListLeft/ListLeft";
import ListCenter from "./ListCenter/ListCenter";
import ListRight from "./ListRight/ListRight";
export default function ListBussiness(props) {
  const dispatch = useDispatch();
  const { arrBusinessByCareersType } = useSelector(
    (root) => root.CareersTypeReducer
  );
  console.log(arrBusinessByCareersType);
  const { name } = props.match.params;
  const words = name.split(" ");
const result = words.slice(-2).join(" ");
console.log(result);

  useEffect(() => {
    const action = GetListBusinessByCareersTypeAction(result);
    dispatch(action);
  }, []);
  return (
    <div className="page_bg">

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
                ({arrBusinessByCareersType?.businesses?.filter(item =>item.status ==="active").length} công ty được tìm
                thấy)
              </span>
            </div>
          </div>

          <Event />
         
          <div className="m-auto h-auto mt-4">
            <ListLeft  name ={name} arrBusinessByCareersType={arrBusinessByCareersType}/>
            <ListCenter  name ={name} arrBusinessByCareersType={arrBusinessByCareersType}/>
           
           <ListRight />
            <p className="m-0 clearfix" />
          </div>        
          <p className="m-0 clearfix" />
        </div>
      </div>
    
    </div>
  );
}
