import logo from "./logo.svg";
import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./pages/Home/Home";
import Gioithieu from "./pages/Gioithieu/Gioithieu";
import Advertising from "./pages/Advertising/Advertising";
import Contact from "./pages/Contact/Contact";
import Stores from "./pages/Stores/Stores";
import ListBussiness from "./pages/ListBussiness/ListBussiness";
import Bussiness from "./pages/Bussiness/Bussiness";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
import { UserTemplate1 } from "./templates/UserTemplate1/UserTemplate1";
import Admin from "./pages/Admin/Admin";
import { AdminTemplate } from "./templates/AdminTemplate/AdminTemplate";
import AdminBusiness from "./pages/AdminBusiness/AdminBusiness";
import Signup from "./pages/Signup/Signup";
import SignupSuccess from "./pages/Signup/SignupSuccess";
import Signin from "./pages/Signin/Signin";
import ViewBusiness from "./pages/ViewBusiness/ViewBusiness";
import YourBusiness from "./pages/YourBusiness/YourBusiness";
import Modal from "./Test";
import AdminAdvertising from "./pages/AdminAdvertising/AdminAdvertising";
import ListCareerBusiness from "./pages/ListCareerBusiness/ListCareerBusiness";
import Search from "./pages/Search/Search";
import Quyche from "./pages/Quyche/QuyChe";
import Baomat from "./pages/Baomat/Baomat";
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
      <UserTemplate  path="/signup" exact Component={Signup} />
      <UserTemplate  path="/viewbusiness/:id" exact Component={ViewBusiness} />
      <UserTemplate  path="/signin" exact Component={Signin} />
      <UserTemplate  path="/advertising" exact Component={Advertising} /> 
      <UserTemplate  path="/stores" exact Component={Stores} />
      <AdminTemplate  path="/admin" exact Component={Admin} /> 
      <AdminTemplate  path="/adminbusiness" exact Component={AdminBusiness} /> 
      <AdminTemplate  path="/adminadvertising" exact Component={AdminAdvertising} /> 
      <UserTemplate1  path="/getcareersbyname/:name" exact Component={ListBussiness} /> 
      <UserTemplate1  path="/searchbusiness/:name" exact Component={Search} /> 
      <UserTemplate1  path="/searchbusinesslocation/:name/:location" exact Component={Search} /> 
      <UserTemplate1  path="/getcareersbyname/:name/:location" exact Component={ListBussiness} /> 
      <UserTemplate1  path="/bussiness/:id" exact Component={Bussiness} /> 
      <UserTemplate1  path="/careerbussiness/:name" exact Component={ListCareerBusiness} /> 
      <UserTemplate1  path="/yourbussiness/:id" exact Component={YourBusiness} /> 
      <Route  path="/gioi-thieu" exact component={Gioithieu} />
      <Route  path="/quy-che" exact component={Quyche} />
      <Route  path="/bao-mat" exact component={Baomat} />
      <Route  path="/signup-success" exact component={SignupSuccess} />
      <Route  path="/contact" exact component={Contact} />  
      <Route  path="/test" exact component={Modal} /> 
      <Route  path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
