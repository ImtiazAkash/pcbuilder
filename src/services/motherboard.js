import axios from "axios";

const BASEURL = "http://localhost:3005/api/"

async function getMotherboard() {
    return  await axios.get(BASEURL+"motherboard")
}

async function postMotherboard() {
    return await axios.post(BASEURL+"motherboard")
}


export {
  getMotherboard,
  postMotherboard
}