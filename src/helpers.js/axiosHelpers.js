import axios from "axios";

const rootAPIUrl = "http://localhost:8000/api/v1";
const taskEp = rootAPIUrl + "/task";

export const fetchAllTask = async () => {
  try {
    const { data } = await axios.get(taskEp);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: "error.message",
    };
  }
};
