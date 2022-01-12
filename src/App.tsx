import "../src/css/style.scss";
import { useState, useEffect } from "react";
import { HomePage } from "./component/home";
import { UserPage } from "./component/user";
import { DashboardPage } from "./component/dashboard";
import { TwitterPage } from "./component/twitter";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { RouteItem } from "./component/route";
import ChartBarGraphPage from "./component/chartBarGraph";
import MobileLikePage from "./component/mobileLike";
import SearchDocumentPage from "./component/searchDocument";
import HeadphonePage from "./component/headphone";
import { SubNavigationSection } from "./component/subNavigationSection";
import { useLocation } from 'react-router-dom'

export interface IActivePage {
  activePageName: string;
  activeSubPageName: number;
  subNavigationHide:boolean
}
const defaultValue: IActivePage = {    
  activePageName: "",
  activeSubPageName: 0,
  subNavigationHide:false
};
function App() {  
  const location =window.location.pathname;  
  defaultValue.activePageName=location=="/"?"dashboard":location.split("/")[1];
  const [activePage, setActivePage] = useState<IActivePage>(defaultValue);
  const handelSetActivePage = (pageName: string) => {
    setActivePage({
      ...activePage,
      activePageName: pageName,
      activeSubPageName:0
    });
  };
  const handelSetActiveSubPage = (pageSubName: number) => {        
    setActivePage({
      ...activePage,
      activeSubPageName: pageSubName,
    });
  };
  const handelSunNavigationAShowHide = () => {        
    setActivePage({
      ...activePage,
      subNavigationHide: !activePage.subNavigationHide,
    });
  };
  
  return (
    <div id="page">
      <Router>
        <div className="page-wrapper">
          <div className="col-lg-3 col-md-3 sidebar">
            <div className="sticky-sidebar">
              <ul>
                <li>
                  <a href="#" className="logo">
                    Logo
                  </a>
                </li>
                <RouteItem
                  activePage={activePage}
                  pageName="dashboard"
                  setActivePage={handelSetActivePage}
                  className=""
                />
                <RouteItem
                  activePage={activePage}
                  pageName="twitter"
                  setActivePage={handelSetActivePage}
                  className=""
                />
                <RouteItem
                  activePage={activePage}
                  pageName="improvement"
                  setActivePage={handelSetActivePage}
                  className=""
                />
                <RouteItem
                  activePage={activePage}
                  pageName="socialmedia"
                  setActivePage={handelSetActivePage}
                  className=""
                />
                <RouteItem
                  activePage={activePage}
                  pageName="searchdocument"
                  setActivePage={handelSetActivePage}
                  className=""
                />
                <RouteItem
                  activePage={activePage}
                  pageName="headphone"
                  setActivePage={handelSetActivePage}
                  className={"item-bottom-first"}
                />
                <RouteItem
                  activePage={activePage}
                  pageName="user"
                  setActivePage={handelSetActivePage}
                  className={"item-bottom-second"}
                />
              </ul>
              <div className={activePage.subNavigationHide?"show-slider display":"show-slider"}  onClick={()=>handelSunNavigationAShowHide()}>                               
                <span className="right-arrow">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </span>
              </div>
            </div>            
            <SubNavigationSection
              activePage={activePage}
              handelSetActiveSubPage={handelSetActiveSubPage}
              handelSunNavigationAShowHide={handelSunNavigationAShowHide}
            />
          </div>
          <Routes>
            <Route path="/" element={<HomePage activePage={activePage} />} />
            <Route path="/dashboard" element={<DashboardPage activePage={activePage} />} />
            <Route path="/twitter" element={<TwitterPage activePage={activePage} />} />
            <Route path="/improvement" element={<ChartBarGraphPage activePage={activePage} />} />
            <Route path="/socialmedia" element={<MobileLikePage activePage={activePage} />} />
            <Route path="/searchdocument" element={<SearchDocumentPage activePage={activePage} />} />
            <Route path="/headphone" element={<HeadphonePage activePage={activePage} />} />
            <Route path="/user" element={<UserPage activePage={activePage} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
