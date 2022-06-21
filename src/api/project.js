import axios from "axios";

const url = "http://localhost:8000/api";

export const fetchProjects = async () => {
  try {
    const res = await axios.get(`${url}/projects`);

    if (res.data.status === 200) {
      console.log(res.data.projects);
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
