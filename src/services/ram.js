import axios from "axios";

const BASEURL = "http://localhost:3005/api/";

async function getRam() {
  return await axios.get(BASEURL + "ram");
}

async function postRam() {
  return await axios.post(BASEURL + "ram");
}

export { getRam, postRam };
