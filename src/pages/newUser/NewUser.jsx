import React, { useState } from "react";
import "./newUser.css";
import Home from "../home/Home";
import Swal from "sweetalert2";
import axios from "axios";

export default function NewUser() {
  const [user, userState] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    gender: "",
    office: "",
    isActive: "",
  });

  const handleInput = (e) => {
    userState({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const saveUser = (e) => {
    e.preventDefault();

    async function updateStud() {
      const res = await axios.post("http://localhost:8000/api/add-user/", user);
      if (res.data.status === 200) {
        console.log(res.data.message);
      } else {
        console.log("fail save");
      }
    }
    updateStud();

    // console.log(user);
    // Swal.fire({
    //   title: "Success",
    //   text: "Save successfully",
    //   icon: "success",
    //   confirmButtonText: "OK!",
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm" onSubmit={saveUser}>
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            onChange={handleInput}
            value={user.name}
            placeholder="John Smith"
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleInput}
            value={user.email}
            placeholder="john@gmail.com"
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleInput}
            value={user.password}
            placeholder="password"
          />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            onChange={handleInput}
            value={user.phone}
            placeholder="+63 9XXX-XXX-XXX"
          />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input
            type="text"
            name="address"
            onChange={handleInput}
            value={user.address}
            placeholder="Brgy | Municipality"
          />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender" onChange={handleInput}>
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Office</label>
          <select
            className="newUserSelect"
            name="office"
            id="office"
            onChange={handleInput}
          >
            <option value="select">-SELECT-</option>
            <option value="peo">PEO</option>
            <option value="ppdo">PPDO</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Is Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="select">-SELECT-</option>
            <option value="yes">YES</option>

            <option value="no">NO</option>
          </select>
        </div>
        <button className="newUserButton">Save</button>
      </form>
    </div>
  );
}
