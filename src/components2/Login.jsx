import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SU from '../assets/sign_up.jpg'

export default function Login({  setUser }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    un: "",
    em: "",
    pwd: ""
  });
  
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.un.trim() && formData.em.trim()) {
      setUser(formData); // Update user state
    
      setFormData({
        un:'',
        em:'',
        pwd:''
      })
      setTimeout(() => {
       
        navigate("/");  // Navigate to home page after successful login
      }, 1000);
    }
  }

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h3 className="display-4 fw-bold lh-1 text-body-emphasis mb-5">
            Sign - Up Form
          </h3>
          <p className="col-lg-6 fs-4 "><img  src={SU} alt="" /></p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="un"
                value={formData.un}
                className="form-control"
                placeholder="Name"
                onChange={handleChange}
                required
              />
              <label>User Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                name="em"
                value={formData.em}
                className="form-control"
                placeholder="name@example.com"
                onChange={handleChange}
                required
              />
              <label>Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                name="pwd"
                value={formData.pwd}
                className="form-control"
                placeholder="Password"
                onChange={handleChange}
                required
              />
              <label>Password</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign up
            </button>
          </form>
        </div>
      </div>

     
    </div>
  );
}
