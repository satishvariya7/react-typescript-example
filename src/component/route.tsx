import React from "react";
import { IActivePage } from "../App";
import Home from "../SVG/ui-home.svg";
import User from "../SVG/ui-user.svg";
import Dashboard from "../SVG/dashboard-web.svg";
import ChartBarGraph from "../SVG/chart-bar-graph.svg";
import Headphone from "../SVG/headphone-alt.svg";
import SearchDocument from "../SVG/search-document.svg";
import socialmedia from "../SVG/stock-mobile.svg";
import Twitter from "../SVG/twitter.svg";
import { Link } from "react-router-dom";

interface IProps {
  activePage: IActivePage;
  pageName: string;
  setActivePage: (value: string) => void;
  className:string
}
export function RouteItem(props: IProps) {
  const { activePage, setActivePage, pageName,className } = props;
  let pageIcon = "";
  if (pageName == "") pageIcon = Home;
  else if (pageName == "user") pageIcon = User;
  else if (pageName == "dashboard") pageIcon = Dashboard;
  else if (pageName == "twitter") pageIcon = Twitter;
  else if (pageName == "improvement") pageIcon = ChartBarGraph;
  else if (pageName == "headphone") pageIcon = Headphone;
  else if (pageName == "searchdocument") pageIcon = SearchDocument;
  else if (pageName == "socialmedia") pageIcon = socialmedia;
  else {
  }  
  return (
    <li
      className={
        activePage.activePageName.toLocaleLowerCase() ===
        pageName.toLocaleLowerCase()
          ? "active "+className
          : className
      }
    >
      <Link to={"/" + pageName} onClick={() => setActivePage(pageName)} className={pageName=="user"?"menu-link item-bottom":"menu-link"}>
        <img src={pageIcon} alt="React Logo"></img>
      </Link>
    </li>
  );
}
