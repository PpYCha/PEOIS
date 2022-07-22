import axios from "axios";

// const url = "http://192.168.254.117:8000/api";
const url = "http://localhost:8000/api";
// const url = "https://nspeo.herokuapp.com/api";

export const fetchProjects = async () => {
  try {
    const res = await axios.get(`${url}/projects`);

    if (res.data.status === 200) {
      return res.data.projects;
    }
  } catch (error) {
    console.log("fetchProhejct error:", error);
  }
};

export const deleteProject = async (id) => {
  try {
    const res = await axios
      .delete(`http://localhost:8000/api/delete-project/${id}`)
      .then(console.log("deleted project"));
  } catch (error) {
    console.log("delete error:", error);
  }
};
