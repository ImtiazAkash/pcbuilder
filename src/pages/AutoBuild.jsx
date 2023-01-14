import React from "react";
import { useState } from "react";
import { Table, Form, Button } from "react-bootstrap";
import axios from "axios";
import Classes from "../styles/AutoBuild.module.css";
import JsPDF from "jspdf";
import autoTable from "jspdf-autotable";

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
    e.preventDefault();
    console.log(budget);
    let processor, motherboard, ram, storage, powerSupply, monitor, gpu;

    if (budget < 65000) {
      processor = 0.3 * budget;
      motherboard = 0.13 * budget;
      ram = 0.1 * budget;
      storage = 0.17 * budget;
      powerSupply = 0.08 * budget;
      monitor = 0.22 * budget;

      await axios
        .get(
          "http://localhost:3005/api/getpc2?mb=" +
            motherboard +
            "&pros=" +
            processor +
            "&ram=" +
            ram +
            "&ps=" +
            powerSupply +
            "&st=" +
            storage +
            "&monitor=" +
            monitor
        )
        .then((res) => {
          setBuiltPC(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (budget >= 65000) {
      gpu = 0.3 * budget;

      processor = 0.26 * budget;
      motherboard = 0.1 * budget;
      ram = 0.09 * budget;
      storage = 0.08 * budget;
      powerSupply = 0.05 * budget;
      monitor = 0.14 * budget;

      await axios
        .get(
          "http://localhost:3005/api/getpcwithgpu?mb=" +
            motherboard +
            "&pros=" +
            processor +
            "&ram=" +
            ram +
            "&ps=" +
            powerSupply +
            "&st=" +
            storage +
            "&gpu=" +
            gpu +
            "&monitor=" +
            monitor
        )
        .then((res) => {
          setBuiltPC(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
            onInput={(e) => setBudget(e.target.value)}
          />
          <Button variant="outline-success" type="submit">
            <strong>Build</strong>
          </Button>
        </Form>
      </div>
      {/* component List  */}
      {builtPC && (
        <div
          style={{ display: "flex", flexDirection: "column" }}
          className={`${Classes.search_form} px-2`}
        >
          <Table striped bordered hover id="mypc">
            <thead>
              <tr>
                <th>Component</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Processor</td>
                <td>
                  {builtPC.PROCESSOR.VendorName} {builtPC.PROCESSOR.Model}
                </td>
                <td>{builtPC.PROCESSOR.Price} TK</td>
              </tr>
              <tr>
                <td>Motherboard</td>
                <td>
                  {builtPC.MOTHERBOARD.VendorName} {builtPC.MOTHERBOARD.Model}
                </td>
                <td>{builtPC.MOTHERBOARD.Price} TK</td>
              </tr>
              <tr>
                <td>Ram 1</td>
                <td>
                  {builtPC.RAM1.VendorName} {builtPC.RAM1.Model}
                </td>
                <td>{builtPC.RAM1.Price} TK</td>
              </tr>
              <tr>
                <td>Ram 2</td>
                <td>
                  {builtPC.RAM2.VendorName} {builtPC.RAM2.Model}
                </td>
                <td>{builtPC.RAM2.Price} TK</td>
              </tr>
              <tr>
                <td>SSD</td>
                <td>
                  {builtPC.SSD.VendorName} {builtPC.SSD.Model}
                </td>
                <td>{builtPC.SSD.Price} TK</td>
              </tr>
              <tr>
                <td>HDD</td>
                <td>
                  {builtPC.HDD.VendorName} {builtPC.HDD.Model}
                </td>
                <td>{builtPC.HDD.Price} TK</td>
              </tr>
              {builtPC.GPU && (
                <tr>
                  <td>Graphics Card</td>
                  <td>
                    {builtPC.GPU.VendorName} {builtPC.GPU.Model}
                  </td>
                  <td>{builtPC.GPU.Price} TK</td>
                </tr>
              )}
              <tr>
                <td>Monitor</td>
                <td>
                  {builtPC.MONITOR.VendorName} {builtPC.MONITOR.Model}
                </td>
                <td>{builtPC.MONITOR.Price} TK</td>
              </tr>
              <tr>
                <td>Power Supply</td>
                <td>
                  {builtPC.POWERSUPPLY.VendorName} {builtPC.POWERSUPPLY.Model}
                </td>
                <td>{builtPC.POWERSUPPLY.Price} TK</td>
              </tr>
              <tr>
                <td colSpan={2} style={{ fontWeight: "bold" }}>
                  Total Cost
                </td>
                <td style={{ fontWeight: "bold" }}>{builtPC.totalBudget} TK</td>
              </tr>
            </tbody>
          </Table>

          <Button onClick={() => {
             const doc = new JsPDF();
             autoTable(doc, {
              theme: "grid",
              html: "#mypc"
             })
             doc.save("AutoBuild.pdf")
          }}>Download as PDF</Button>
        </div>
      )}
    </div>
  );
}

export default AutoBuild;
