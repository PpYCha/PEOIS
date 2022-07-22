import axios from "axios";

// const url = "http://192.168.254.117:8000/api/infrastructures";
const url = "http://localhost:8000/api/infrastructures";
// const url = "https://nspeo.herokuapp.com/api/infrastructures";

export const fetchInfrastructures = async () => {
  try {
    const res = await axios.get(url);

    if (res.data.status === 200) {
      console.log(res.data.infrastructures);
      return res.data.infrastructures;
    }
  } catch (error) {
    console.log("infrastructure error:", error);
  }
};
