import React from "react";
import Classes from "../styles/EachComponent.module.css";
import { Button, Collapse } from "react-bootstrap";
import Ram from "./Ram";
import { useState, useEffect } from "react";

function ChooseRam({
  logo,
  ramType,
  setFirstRam,
  firstRam,
  name,
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
            {name === "Ram 1" && <span className="mark">Required</span>}
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
            <Ram
              logo={logo}
              setProductName={setProductName}
              setProductPrice={setProductPrice}
              setAllow={setAllow}
              allow={allow}
              setOpen={setOpen}
              open={open}
              ramType={ramType}
              setFirstRam={setFirstRam}
              firstRam={firstRam}
            />
          )}
        </div>
      </Collapse>
    </div>
  );
}

export default ChooseRam;
