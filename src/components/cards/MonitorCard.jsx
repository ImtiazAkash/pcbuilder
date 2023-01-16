import React from "react";
import { Button } from "react-bootstrap";
import Classes from "../../styles/Components.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { getMonitor } from "../../services/monitor";
import monitorlogo from "../../assests/icons/monitor.png";

function MonitorCard() {
  const [outputMonitor, setOutputMonitor] = useState();

  useEffect(() => {
    getMonitor()
      .then((res) => {
        setOutputMonitor(res.data.MONITOR);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {outputMonitor &&
        outputMonitor.map((val, index) => {
          return (
            <div className={Classes.container}>
              <div className={Classes.productContainer}>
                <div className={Classes.icon}>
                  <img src={monitorlogo} alt="product logo" />
                </div>

                <div className={Classes.productInfoBlock}>
                  <h4 className={Classes.productName}>
                    {val.VendorName} {val.Model}
                  </h4>
                  <div className={Classes.productDescription}>
                    <ul>
                      <li>Resolution : {val.Resolution}</li>
                      <li>Refresh Rate: {val.DisplayInHz} Hz</li>
                    </ul>
                  </div>
                </div>
                <div className={Classes.price}>
                  <span className="mx-2">{val.Price}TK</span>
                </div>

                <div className={Classes.action}>
                  <br />
                  <br />
                  <Button>Manage</Button>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default MonitorCard;
