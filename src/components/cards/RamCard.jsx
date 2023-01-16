import React from "react";
import { Button } from "react-bootstrap";
import Classes from "../../styles/Components.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { getRam } from "../../services/ram";
import ramlogo from "../../assests/icons/ram.png"

function RamCard() {
  const [outputRam, setOutputRam] = useState();

  useEffect(() => {
    getRam()
      .then((res) => {
        setOutputRam(res.data.Ram);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  return (
    <>
      {outputRam && (
        outputRam.map((val, index) => {
          return (
            <div className={Classes.container}>
              <div className={Classes.productContainer}>
                <div className={Classes.icon}>
                  <img src={ramlogo} alt="product logo" />
                </div>

                <div className={Classes.productInfoBlock}>
                  <h4 className={Classes.productName}>
                    {val.VendorName} {val.Model}
                  </h4>
                  <div className={Classes.productDescription}>
                    <ul>
                      <li>Memory Type: {val.MemoryType}</li>
                      <li>Bus Speed : {val.BusSpeed}</li>
                      <li>Capacity: {val.Capacity} GB</li>
                    </ul>
                  </div>
                </div>
                <div className={Classes.price}>
                  <span className="mx-2">{val.Price}TK</span>
                </div>

                <div className={Classes.action}>
                  <br />
                  <br />
                  <Button
                    
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          );
        })
      ) }
    </>
  );
}

export default RamCard;
