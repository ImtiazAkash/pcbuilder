import React, { useState } from "react";
import Classes from "../styles/ManualBuild.module.css";
import processorlogo from "../assests/icons/processor.png";
import motherboardlogo from "../assests/icons/motherboard.png";
import ChooseProcessor from "../components/ChooseProcessor";
import ChooseMotherboard from "../components/ChooseMotherboard";
import ChooseRam from "../components/ChooseRam";
import ramlogo from "../assests/icons/ram.png"
import ChooseStorage from "../components/ChooseStorage";
import hddlogo from "../assests/icons/hdd.png"
import ssdlogo from "../assests/icons/ssd.png"
import gpulogo from "../assests/icons/gpu.png"
import ChooseGPU from "../components/ChooseGPU";


function ManualBuild() {
  const [processorType, setProcessorType] = useState();
  const [ramType, setRamType] = useState();
  const [firstRam, setFirstRam] = useState(false);
  const [firstStorage, setFirstStorage] = useState(false);
  return (
    <div className={Classes.container}>
      <h3 style={{ backgroundColor: "grey", color: "white" }}>
        Choose your components to build your PC
      </h3>
      {/* Processor Chooser */}
      <ChooseProcessor
        logo={processorlogo}
        setProcessorType={setProcessorType}
      />
      {/* Motherboard Chooser */}
      <ChooseMotherboard logo={motherboardlogo} processorType={processorType} setRamType={setRamType} />

      {/* Ram Chooser */}
      <ChooseRam logo={ramlogo} ramType={ramType} setFirstRam={setFirstRam} firstRam={firstRam} name="Ram 1"/>
      {firstRam &&
        <ChooseRam logo={ramlogo} ramType={ramType} firstRam={firstRam} name="Ram 2"/>}

      {/* Storage Chooser */}
      <ChooseStorage logo={ssdlogo} storageType="SSD" name="Storage 1" setFirstStorage={setFirstStorage} firstStorage={firstStorage}/>
      {firstStorage && <ChooseStorage logo={hddlogo} storageType="HDD" name="Storage 2" firstStorage={firstStorage}/>}

      {/* GPU Chooser */}
      <ChooseGPU logo={gpulogo}/>
    </div>
  );
}

export default ManualBuild;
