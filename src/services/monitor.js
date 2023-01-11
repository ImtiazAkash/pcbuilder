import axios from "axios";

const BASEURL = "http://localhost:3005/api/";

async function getMonitor() {
  return await axios.get(BASEURL + "monitor");
}

async function postMonitor() {
  return await axios.post(BASEURL + "monitor");
}

export { getMonitor, postMonitor };
