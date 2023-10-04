import React, { useState } from "react";
export default function Admin() {
  return (
   
 
        <div className="Box-elements">
          <div className="box-element-flex">
            <div className="chart-box">
              <div className="title-element">Activities</div>
              <div className="chart-box-main">
                <div />
              </div>
            </div>
            <div className="box-travel">
              <div className="title-element">Goals Budget</div>
              <div className="box-chart-travel">
                <div className="chart-back-1 chart-travel" />
                <div className="chart-back-2 chart-travel" />
                <div className="chart-travel-data chart-travel">
                  <div className="title-travel">Travel</div>
                  <div className="value-travel">
                    $55/<span>$99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-element-flex">
            <div className="transction">
              <div className="title-element">Transction History</div>
              <div className="box-trans-sub">
                <img src="https://imgtr.ee/images/2023/01/01/fCfV.jpg" alt />
                <div className="info-trans-sub">
                  <h5>Karen Perry</h5>
                  <div>Transfer</div>
                </div>
                <div className=" money-time-trans-sub ">
                  <h5>-$35.00</h5>
                  <div>11:00 PM</div>
                </div>
              </div>
              <div className="box-trans-sub ">
                <img
                  src="https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI"
                  alt
                />
                <div className="info-trans-sub ">
                  <h5>Netflix</h5>
                  <div>Payment</div>
                </div>
                <div className="money-time-trans-sub ">
                  <h5>-$12.79</h5>
                  <div>11:00 PM</div>
                </div>
              </div>
              <div className="box-trans-sub ">
                <img
                  src="https://mymodernmet.com/wp/wp-content/uploads/2021/01/morphy-me-celebrity-face-mashups-15.jpg"
                  alt
                />
                <div className="info-trans-sub ">
                  <h5>Brian Douglas</h5>
                  <div>Transfer</div>
                </div>
                <div className="money-time-trans-sub ">
                  <h5 className="up-trans ">+$155.43</h5>
                  <div>15:42 PM</div>
                </div>
              </div>
              <div className="box-trans-sub ">
                <img
                  src="https://avatars.githubusercontent.com/u/10639145?s=200&v=4"
                  alt
                />
                <div className="info-trans-sub ">
                  <h5>Apple</h5>
                  <div>Payment</div>
                </div>
                <div className="money-time-trans-sub ">
                  <h5>-$66.90</h5>
                  <div>19:23 PM</div>
                </div>
              </div>
            </div>
            <div className="stocks ">
              <div className="title-element">My Stocks</div>
              <div className="stocks-main">
                <div className="sub-stocks">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png"
                    alt
                  />
                  <div className="stocks-titles">Mcdonalds</div>
                  <div className="stocks-number">33098</div>
                  <div className="stocks-status">-6.2645%</div>
                </div>
              </div>
              <div className="stocks-main">
                <div className="sub-stocks">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
                    alt
                  />
                  <div className="stocks-titles">Twitter</div>
                  <div className="stocks-number">11654</div>
                  <div className="stocks-status up-trans">+2.4356%</div>
                </div>
              </div>
              <div className="stocks-main">
                <div className="sub-stocks">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/800px-Tesla_T_symbol.svg.png"
                    alt
                  />
                  <div className="stocks-titles">Tesla</div>
                  <div className="stocks-number">77218</div>
                  <div className="stocks-status up-trans">+12.2465%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

   
  );
}
