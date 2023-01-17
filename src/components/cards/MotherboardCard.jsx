import React from "react";
import { Button } from "react-bootstrap";
import Classes from "../../styles/Components.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { getMotherboard } from "../../services/motherboard";
import motherboardlogo from "../../assests/icons/motherboard.png";

function MotherboardCard() {
  const [outputMotherboard, setOutputMotherboard] = useState();

  useEffect(() => {
    getMotherboard()
      .then((res) => {
        setOutputMotherboard(res.data.motherboard);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {outputMotherboard &&
        outputMotherboard.map((val, index) => {
          return (
            <div className={Classes.container}>
              <div className={Classes.productContainer}>
                <div className={Classes.icon}>
                  <img src={motherboardlogo} alt="product logo" />
                </div>

                <div className={Classes.productInfoBlock}>
                  <h4 className={Classes.productName}>
                    {val.VendorName} {val.Model}
                  </h4>
                  <div className={Classes.productDescription}>
                    <ul>
                      <li>Supported CPU : {val.SupportedCPU}</li>
                      <li>Memory Type: {val.MemoryType}</li>
                      <li>Memory Slots: {val.MemorySlots} Series</li>
                      <li>Max Memory: {val.MaxMemory}</li>
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

export default MotherboardCard;
