import axios from "axios";

const BASEURL = "http://localhost:3005/api/"

async function getProcessors() {
    return  await axios.get(BASEURL+"processor")
}

async function postProcessor() {
    return await axios.post(BASEURL+"processor")
}

export {
  getProcessors,
  postProcessor
}