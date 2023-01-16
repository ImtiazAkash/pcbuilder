import React from 'react'
import { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import processorlogo from "../../assests/icons/processor.png"
import { getProcessors } from '../../services/processor';
import Classes from "../../styles/Components.module.css";

function ProcessorCard() {

    const [outputProcessor, setOutputProcessor] = useState();

    useEffect(() => {
      getProcessors()
        .then((res) => {
          setOutputProcessor(res.data.processor);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  return (
    <>
      {outputProcessor && (
        outputProcessor.map((val, index) => {
          return (
            <div className={Classes.container}>
              <div className={Classes.productContainer}>
                <div className={Classes.icon}>
                  <img src={processorlogo} alt="product logo" />
                </div>

                <div className={Classes.productInfoBlock}>
                  <h4 className={Classes.productName}>
                    {val.VendorName} {val.Model}
                  </h4>
                  <div className={Classes.productDescription}>
                    <ul>
                      <li>Cores : {val.Cores}</li>
                      <li>Thread: {val.Threads}</li>
                      <li>Generation: {val.Series} Series</li>
                      <li>Video Ram: {val.VideoRam}</li>
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
      )}
    </>
  );
}

export default ProcessorCard