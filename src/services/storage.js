import axios from "axios";

const BASEURL = "http://localhost:3005/api/";

async function getStorage() {
  return await axios.get(BASEURL + "storage");
}

async function postStorage() {
  return await axios.post(BASEURL + "storage");
}

export { getStorage, postStorage };
