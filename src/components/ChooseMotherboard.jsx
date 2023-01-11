import React from "react";
import Classes from "../styles/EachComponent.module.css";
import { Button, Collapse } from "react-bootstrap";
import Motherboard from "./Motherboard";
import { useState } from "react";

function ChooseMotherboard({ logo, processorType, setRamType }) {
  const [open, setOpen] = useState(false);
  const [allow, setAllow] = useState(false);
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();
  return (
    <div className={Classes.chooseComponent}>
      <div className={Classes.innerComponentBox}>
        <div className={Classes.icon}>
          <img src={logo} alt="logo" />
        </div>
        <div className={Classes.details}>
          <div className="component-name">
            <span>Motherboard</span>
            <span className="mark">Required</span>
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
            <Motherboard
              logo={logo}
              setProductName={setProductName}
              setProductPrice={setProductPrice}
              setAllow={setAllow}
              allow={allow}
              setOpen={setOpen}
              open={open}
              processorType={processorType}
              setRamType={setRamType}
            />
          )}
        </div>
      </Collapse>
    </div>
  );
}

export default ChooseMotherboard;
