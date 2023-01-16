import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import hddlogo from "../../assests/icons/hdd.png";
import { getStorage } from "../../services/storage";
import Classes from "../../styles/Components.module.css";

function HDDCard() {
  const [outputStorage, setOutputStorage] = useState();

  useEffect(() => {
    getStorage()
      .then((res) => {
        setOutputStorage(res.data.STORAGE);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let filteredStorage;

  return (
    <>
      {outputStorage &&
        ((filteredStorage = outputStorage.filter(
          (item) => item.Type === "HDD"
        )),
        filteredStorage.map((val, index) => {
          return (
            <div className={Classes.container}>
              <div className={Classes.productContainer}>
                <div className={Classes.icon}>
                  <img src={hddlogo} alt="product logo" />
                </div>

                <div className={Classes.productInfoBlock}>
                  <h4 className={Classes.productName}>
                    {val.VendorName} {val.Model}
                  </h4>
                  <div className={Classes.productDescription}>
                    <ul>
                      <li>Type : {val.Type}</li>
                      <li>Interface: {val.Interface}</li>
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
                  <Button>Manage</Button>
                </div>
              </div>
            </div>
          );
        }))}
    </>
  );
}

export default HDDCard;
