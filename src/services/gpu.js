import axios from "axios";

const BASEURL = "http://localhost:3005/api/";

async function getGPU() {
  return await axios.get(BASEURL + "gpu");
}

async function postGPU() {
  return await axios.post(BASEURL + "gpu");
}

export { getGPU, postGPU };
