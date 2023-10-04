import { http } from "../../utils/reponse";
import { BusinessByIDAction } from "./BusinessAction";


export const UpateCertificatesAction = (id,value) => {
    return async (dispatch) => {
      try {

        let result = await http.post("/certificate/updatecertificate", value);
  
       const action = BusinessByIDAction(id);
       dispatch(action);
      } catch (error) {
        console.log(error);
      }
    };
  };