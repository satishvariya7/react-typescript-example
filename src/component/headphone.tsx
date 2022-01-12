import React from 'react'

import { IActivePage } from "../App";
interface IProps {
  activePage: IActivePage;
}
export default function HeadphonePage(props: IProps) {
    const { activePage } = props;
    if (activePage.activeSubPageName == 0) {
        return (
          <div className={activePage.subNavigationHide?"col-lg-9 col-md-9 contentbar full-width":"col-lg-9 col-md-9 contentbar"}>
            <div className="content-top">
              <h2>Meeting</h2>
            </div>
            <div className="info">
              <ul>
                <li>Totoal number of user are 1500</li>
                <li>
                  when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book.
                </li>
                <li>It has survived not only five centuries, </li>
              </ul>
            </div>
          </div>
        );
      }
      return <></>
}
