import React, { useState } from "react";
import { IActivePage } from "../App";

interface IProps {
  activePage: IActivePage;
  handelSetActiveSubPage: (value: number) => void;
  handelSunNavigationAShowHide: () => void;
}
export function SubNavigationSection(props: IProps) {
  const { activePage, handelSetActiveSubPage, handelSunNavigationAShowHide } =
    props;
  const subNavigationItems = [
    { pageName: "dashboard", items: ["Totoal User", "Total Twitter"] },
    {
      pageName: "twitter",
      items: [
        "Lead Generation",
        "Instant Replay",
        "Schedule Retweets",
        "Analytics",
        "Audit",
      ],
    },
    { pageName: "improvement", items: ["User Graph", "Account Graph"] },
    { pageName: "socialmedia", items: ["Like", "Comments", "Followers"] },
    { pageName: "searchdocument", items: ["Account", "User", "Twitter"] },
    { pageName: "headphone", items: ["Meeting"] },
    {
      pageName: "user",
      items: ["Account", "Security", "Authentication", "Settings"],
    },
  ];
  const selectedSection = subNavigationItems.filter(
    (item) =>
      item.pageName.toLocaleLowerCase() ==
      activePage.activePageName.toLocaleLowerCase()
  );
  return (
    <div
      className={
        activePage.subNavigationHide
          ? "sub-navigator hide-sidebar"
          : "sub-navigator"
      }
    >
      <div className="slider">
      <p>SUBNAVIGATOR</p>
        <span
          className="slider-arrow"
          onClick={() => handelSunNavigationAShowHide()}
        >
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </span>
      </div>      
      <ul>
        {selectedSection[0].items.map((item, index) => {
          return (
            <li
              className={activePage.activeSubPageName == index ? "active" : ""}
              key={index}
              onClick={() => handelSetActiveSubPage(index)}
            >
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
