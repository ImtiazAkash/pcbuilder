import axios from "axios";

const BASEURL = "http://localhost:3005/api/";

async function getPower() {
  return await axios.get(BASEURL + "powersupply");
}

async function postPower() {
  return await axios.post(BASEURL + "powersupply");
}

export { getPower, postPower };
