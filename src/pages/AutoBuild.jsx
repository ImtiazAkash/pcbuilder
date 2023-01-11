import React from "react";
import { useState } from "react";
import { Table, Form, Button } from "react-bootstrap";
import axios from "axios";
import Classes from "../styles/AutoBuild.module.css";

function AutoBuild() {

  const [budget, setBudget] = useState();
  // const [processor, setProcessor] = useState();
  // const [motherboard, setMotherboard] = useState();
  // const [ram, setRam] = useState();
  // const [storage, setStorage] = useState();
  // const [monitor, setMonitor] = useState();
  // const [powerSupply, setPowerSupply] = useState();
  // const [graphics, setGraphics] = useState();
   const [builtPC, setBuiltPC] = useState();



  async function onBudgetEntry(e) {
    console.log("button clicked");
    console.log(budget);

    let processor = 0.30*budget;
    let motherboard = 0.13*budget;
    let ram = 0.10*budget;
    let storage = 0.17*budget;
    let powerSupply = 0.08*budget;
    let monitor = 0.22*budget;
    


    e.preventDefault();
 
    await axios.get("http://localhost:3005/api/getpc2?mb="+motherboard+"&pros="+processor+"&ram="+ram+"&ps="+powerSupply+"&st="+storage+"&monitor="+monitor)
    .then((res) => {
      setBuiltPC(res.data)
    })
    .catch((error) => {
      console.log(error);
    })

    console.log(builtPC);

  }
  
  return (
    <div className={Classes.auto_build_body}>
      {/* search box */}
      <div className={Classes.search_form}>
        <Form className="d-flex" method="GET" onSubmit={onBudgetEntry}>
          <Form.Control
            type="number"
            placeholder="Enter your budget"
            className="me-2"
            aria-label="Put_Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
          <Button variant="outline-success" type="submit">
            <strong>Build</strong>
          </Button>
        </Form>
      </div>
      {/* component List  */}
      {builtPC &&
      <div className={`${Classes.search_form} px-2`}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Component</th>
              <th>Description</th>
              <th>Price (TK)</th>
            </tr>
          </thead>
          <tbody>
            {
              Object.keys(builtPC).map((e) => {
                
                return <tr>
                  <td>{e}</td>
                  <td>{builtPC[e].VendorName} {builtPC[e].Model}</td>
                  <td>{builtPC[e].Price}</td>
                </tr>
              })
            }
          </tbody>
        </Table>
      </div> }
    </div>
  );
}

export default AutoBuild;
