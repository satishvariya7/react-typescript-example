import { useEffect, useState } from "react";
import User1 from "../../src/images/user-1.png";
import User2 from "../../src/images/user-2.png";
import { IActivePage } from "../App";
interface IProps {
  activePage: IActivePage;
}
export function TwitterPage(props: IProps) {
  const { activePage } = props;
  useEffect(() => {
    (window as { [key: string]: any })["updateUI"]();
  }, [activePage.activeSubPageName]);
  if (activePage.activeSubPageName == 0) {
    return (
      <div
        className={
          activePage.subNavigationHide
            ? "col-lg-9 col-md-9 contentbar full-width"
            : "col-lg-9 col-md-9 contentbar"
        }
      >
        <div className="content-top">
          <h2>Twitter</h2>
          <a href="#" className="btn btn-primary large">
            Change Account
          </a>
        </div>
        <div className="info">
          <ul>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </li>
            <li>
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </li>
            <li>It has survived not only five centuries, </li>
          </ul>
        </div>
        <div className="tabs-wrapper">
          <div id="tabs">
            <ul>
              <li>
                <a href="#tabs-1">Tweet Search</a>
              </li>
              <li>
                <a href="#tabs-2">Lead</a>
              </li>
              <li>
                <a href="#tabs-3">Potencial Customer</a>
              </li>
              <li>
                <a href="#tabs-4">Engagement</a>
              </li>
              <li>
                <a href="#tabs-5">Auto DM</a>
              </li>
            </ul>
            <div id="tabs-1">
              <div className="tab-content-wrapper">
                <div className="col-md-8 col-lg-8 tab-left">
                  <p>
                    Duis cursus. Maecenas ligula eros, blandit nec, pharetra at,
                    semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent
                    viverra justo vitae neque. Praesent blandit adipiscing
                    velit. Suspendisse potenti. Donec mattis, pede vel pharetra
                    blandit, magna ligula faucibus eros, id euismod lacus dolor
                    eget odio. Nam scelerisque. Donec non libero sed nulla
                    mattis commodo. Ut sagittis. Donec nisi lectus, feugiat
                    porttitor, tempor ac, tempor vitae, pede. Aenean vehicula
                    velit eu tellus interdum rutrum. Maecenas commodo.
                    Pellentesque nec elit. Fusce in lacus. Vivamus a libero
                    vitae lectus hendrerit hendrerit.
                  </p>
                  <div className="game-list">
                    <ul>
                      <li>
                        <span className="game-no">1</span>
                        <span className="game-name">Football</span>
                      </li>
                      <li>
                        <span className="game-no">2</span>
                        <span className="game-name">Basketball</span>
                      </li>
                      <li>
                        <span className="game-no">3</span>
                        <span className="game-name">Baseball</span>
                      </li>
                      <li>
                        <span className="game-no">4</span>
                        <span className="game-name">Hokey</span>
                      </li>
                      <li>
                        <span className="game-no">5</span>
                        <span className="game-name">Cricket</span>
                      </li>
                    </ul>
                    <div className="more-link">
                      <a href="#">Add More</a>
                    </div>
                  </div>
                  <p>
                    out of your <b style={{ color: "#337ab7" }}>5</b> words if
                    Potencial customers new tweet matches
                  </p>
                  <div className="select-list">
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                    </select>
                  </div>
                  <p>Words, then dolphyn will</p>

                  <div className="tab-inner">
                    <div id="tabs-inner">
                      <ul>
                        <li>
                          <a href="#tab-inner-1">Like</a>
                        </li>
                        <li>
                          <a href="#tab-inner-2">Reply</a>
                        </li>
                        <li>
                          <a href="#tab-inner-3">Like & Reply</a>
                        </li>
                      </ul>
                      <div id="#tab-inner-1">
                        <p>Potential costomers new tweet</p>
                        <div className="commentbox">
                          <form>
                            <textarea placeholder="Message"></textarea>
                            <div className="toolbar">
                              <ul>
                                <li>
                                  <span className="btn btn-primary">
                                    <i
                                      className="fa fa-file-text-o"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    &nbsp;Text 1
                                  </span>
                                </li>
                                <li>
                                  <span className="btn btn-primary">
                                    <i
                                      className="fa fa-file-text-o"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    &nbsp;Text 2
                                  </span>
                                </li>
                                <li>
                                  <i
                                    className="fa fa-smile-o"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li>
                                  <i
                                    className="fa fa-paperclip"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li>
                                  <i
                                    className="fa fa-at"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                              </ul>
                            </div>
                          </form>
                        </div>
                        <button className="btn btn-primary">Apply</button>
                      </div>
                      <div id="#tab-inner-2">
                        <p>Inner Tabs 2</p>
                      </div>
                      <div id="#tab-inner-3">
                        <p>Inner Tabs 3</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 tab-right">
                  <div className="commnet-feed">
                    <div className="user-icon">
                      <img src={User1} alt="Image" />
                    </div>
                    <div className="comment-feed">
                      <h4 className="comment-title">
                        Name1 <span>@username</span>
                      </h4>
                      <p>
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum{" "}
                        <span>Football,Basketball,baseball,Hokey</span> and{" "}
                        <span>Cricket</span>Lorem Ipsum Lorem Ipsum Lorem Ipsum
                      </p>
                    </div>
                  </div>
                  <div className="commnet-feed reply">
                    <div className="user-icon">
                      <img src={User2} alt="Image" />
                    </div>
                    <div className="comment-feed">
                      <h4 className="comment-title">
                        Name1 <span>@username</span>
                      </h4>
                      <p>
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum{" "}
                        <span>Football,Basketball,baseball,Hokey</span> and{" "}
                        <span>Cricket</span>Lorem Ipsum Lorem Ipsum Lorem Ipsum
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tabs-2">
              <p>
                Morbi tincidunt, dui sit amet facilisis feugiat, odio metus
                gravida ante, ut pharetra massa metus id nunc. Duis scelerisque
                molestie turpis. Sed fringilla, massa eget luctus malesuada,
                metus eros molestie lectus, ut tempus eros massa ut dolor.
                Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula
                suscipit aliquam. Praesent in eros vestibulum mi adipiscing
                adipiscing. Morbi facilisis. Curabitur ornare consequat nunc.
                Aenean vel metus. Ut posuere viverra nulla. Aliquam erat
                volutpat. Pellentesque convallis. Maecenas feugiat, tellus
                pellentesque pretium posuere, felis lorem euismod felis, eu
                ornare leo nisi vel felis. Mauris consectetur tortor et purus.
              </p>
            </div>
            <div id="tabs-3">
              <p>
                Mauris eleifend est et turpis. Duis id erat. Suspendisse
                potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque
                rutrum erat, eu congue orci lorem eget lorem. Vestibulum non
                ante. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque
                eu urna vel enim commodo pellentesque. Praesent eu risus
                hendrerit ligula tempus pretium. Curabitur lorem enim, pretium
                nec, feugiat nec, luctus a, lacus.
              </p>
              <p>
                Duis cursus. Maecenas ligula eros, blandit nec, pharetra at,
                semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent
                viverra justo vitae neque. Praesent blandit adipiscing velit.
                Suspendisse potenti. Donec mattis, pede vel pharetra blandit,
                magna ligula faucibus eros, id euismod lacus dolor eget odio.
                Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut
                sagittis. Donec nisi lectus, feugiat porttitor, tempor ac,
                tempor vitae, pede. Aenean vehicula velit eu tellus interdum
                rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus.
                Vivamus a libero vitae lectus hendrerit hendrerit.
              </p>
            </div>
            <div id="tabs-4">
              <p>
                Mauris eleifend est et turpis. Duis id erat. Suspendisse
                potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque
                rutrum erat, eu congue orci lorem eget lorem. Vestibulum non
                ante. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque
                eu urna vel enim commodo pellentesque. Praesent eu risus
                hendrerit ligula tempus pretium. Curabitur lorem enim, pretium
                nec, feugiat nec, luctus a, lacus.
              </p>
              <p>
                Duis cursus. Maecenas ligula eros, blandit nec, pharetra at,
                semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent
                viverra justo vitae neque. Praesent blandit adipiscing velit.
                Suspendisse potenti. Donec mattis, pede vel pharetra blandit,
                magna ligula faucibus eros, id euismod lacus dolor eget odio.
                Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut
                sagittis. Donec nisi lectus, feugiat porttitor, tempor ac,
                tempor vitae, pede. Aenean vehicula velit eu tellus interdum
                rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus.
                Vivamus a libero vitae lectus hendrerit hendrerit.
              </p>
            </div>
            <div id="tabs-5">
              <p>
                Mauris eleifend est et turpis. Duis id erat. Suspendisse
                potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque
                rutrum erat, eu congue orci lorem eget lorem. Vestibulum non
                ante. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque
                eu urna vel enim commodo pellentesque. Praesent eu risus
                hendrerit ligula tempus pretium. Curabitur lorem enim, pretium
                nec, feugiat nec, luctus a, lacus.
              </p>
              <p>
                Duis cursus. Maecenas ligula eros, blandit nec, pharetra at,
                semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent
                viverra justo vitae neque. Praesent blandit adipiscing velit.
                Suspendisse potenti. Donec mattis, pede vel pharetra blandit,
                magna ligula faucibus eros, id euismod lacus dolor eget odio.
                Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut
                sagittis. Donec nisi lectus, feugiat porttitor, tempor ac,
                tempor vitae, pede. Aenean vehicula velit eu tellus interdum
                rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus.
                Vivamus a libero vitae lectus hendrerit hendrerit.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (activePage.activeSubPageName == 1) {
    return (
      <div
        className={
          activePage.subNavigationHide
            ? "col-lg-9 col-md-9 contentbar full-width"
            : "col-lg-9 col-md-9 contentbar"
        }
      >
        <div className="content-top">
          <h2>Instant Replay</h2>
        </div>
        <div className="info">
          <ul>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </li>
            <li>
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </li>
            <li>It has survived not only five centuries, </li>
          </ul>
        </div>
      </div>
    );
  } else if (activePage.activeSubPageName == 2) {
    return (
      <div
        className={
          activePage.subNavigationHide
            ? "col-lg-9 col-md-9 contentbar full-width"
            : "col-lg-9 col-md-9 contentbar"
        }
      >
        <div className="content-top">
          <h2>Schedule Retweets</h2>
        </div>
        <div className="info">
          <ul>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </li>
            <li>
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </li>
            <li>It has survived not only five centuries, </li>
          </ul>
        </div>
      </div>
    );
  } else if (activePage.activeSubPageName == 3) {
    return (
      <div
        className={
          activePage.subNavigationHide
            ? "col-lg-9 col-md-9 contentbar full-width"
            : "col-lg-9 col-md-9 contentbar"
        }
      >
        <div className="content-top">
          <h2>Analytics</h2>
        </div>
        <div className="info">
          <ul>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </li>
            <li>
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </li>
            <li>It has survived not only five centuries, </li>
          </ul>
        </div>
      </div>
    );
  } else if (activePage.activeSubPageName == 4) {
    return (
      <div
        className={
          activePage.subNavigationHide
            ? "col-lg-9 col-md-9 contentbar full-width"
            : "col-lg-9 col-md-9 contentbar"
        }
      >
        <div className="content-top">
          <h2>Audit</h2>
        </div>
        <div className="info">
          <ul>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </li>
            <li>
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </li>
            <li>It has survived not only five centuries, </li>
          </ul>
        </div>
      </div>
    );
  } else
    return (
     <></>
    );
}
