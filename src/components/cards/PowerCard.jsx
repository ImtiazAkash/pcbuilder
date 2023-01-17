import React from "react";
import { Button } from "react-bootstrap";
import Classes from "../../styles/Components.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { getPower } from "../../services/powerSupply";
import powerlogo from "../../assests/icons/power.png"

function PowerCard(
  
) {
  const [outputPowerSupply, setOutputPowerSupply] = useState();

  useEffect(() => {
    getPower()
      .then((res) => {
        setOutputPowerSupply(res.data.power_supply);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {outputPowerSupply && (
        outputPowerSupply.map((val, index) => {
          return (
            <div className={Classes.container}>
              <div className={Classes.productContainer}>
                <div className={Classes.icon}>
                  <img src={powerlogo} alt="product logo" />
                </div>

                <div className={Classes.productInfoBlock}>
                  <h4 className={Classes.productName}>
                    {val.VendorName} {val.Model}
                  </h4>
                  <div className={Classes.productDescription}>
                    <ul>
                      <li>Capacity: {val.PowerInW} Watt</li>
                    </ul>
                  </div>
                </div>
                <div className={Classes.price}>
                  <span className="mx-2">{val.Price} TK</span>
                </div>

                <div className={Classes.action}>
                  <br />
                  <br />
                  <Button
                  >
                    Manage
                  </Button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}

export default PowerCard;
