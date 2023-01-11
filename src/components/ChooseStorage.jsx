import React from "react";
import Classes from "../styles/EachComponent.module.css";
import { Button, Collapse } from "react-bootstrap";
import Storage from "./Storage";
import { useState, useEffect } from "react";

function ChooseStorage({
  logo,
  storageType,
  name,
  setFirstStorage,
  firstStorage,
  setTotalCost,
  totalCost,
}) {
  const [open, setOpen] = useState(false);
  const [allow, setAllow] = useState(false);
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();

   useEffect(() => {
     productPrice && setTotalCost(totalCost + productPrice);
   }, [productPrice]);
  return (
    <div className={Classes.chooseComponent}>
      <div className={Classes.innerComponentBox}>
        <div className={Classes.icon}>
          <img src={logo} alt="logo" />
        </div>
        <div className={Classes.details}>
          <div className="component-name">
            <span>{name}</span>

            {storageType === "SSD" && <span className="mark">Required</span>}
          </div>
          <div className="product-name">
            <p>{productName}</p>
          </div>
        </div>
        <div className={Classes.price}>
          <p>{productPrice} TK</p>
        </div>
        <div className={Classes.action}>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(!open);
              setAllow(!allow);
            }}
            aria-controls="choose"
            aria-expanded={open}
          >
            Choose
          </Button>
        </div>
      </div>
      <Collapse in={open}>
        <div id="choose">
          {allow && (
            <Storage
              logo={logo}
              setProductName={setProductName}
              setProductPrice={setProductPrice}
              setAllow={setAllow}
              allow={allow}
              setOpen={setOpen}
              open={open}
              storageType={storageType}
              setFirstStorage={setFirstStorage}
              firstStorage={firstStorage}
            />
          )}
        </div>
      </Collapse>
    </div>
  );
}

export default ChooseStorage;
