import axios from "axios";

// const url = "http://localhost:8000/api/";
const url = "https://nspeo.herokuapp.com/api/";

export const postSignUp = async ({ gender, office, ...values }) => {
  try {
    const res = axios.post(`${url}user-signup`, {
      name: values.values.name,
      email: values.values.email,
      username: values.values.username,
      password: values.values.password,
      address: values.values.address,
      phone: values.values.phone,
      gender: gender,
      office: office,
      is_active: "false",
    });

    return res;
  } catch (error) {
    console.log("signUp error:", error);
  }
};
