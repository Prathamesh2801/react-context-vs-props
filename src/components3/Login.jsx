import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "./Toast";

export default function Login({setUser}) {

    const navigate = useNavigate();
    const [formdata,setFormData] = useState({
        un:'',
        em:''
    })
    const [isToast,setToast] = useState(false)

    function handleChange(e) {
        const {name,value} = e.target;

        setFormData((preVal)=>({
            ...preVal,[name]:value
        }))
    }

    function handleSubmit(e) {
        setUser(formdata)
        setFormData({
            un:'',
            em:''
        })
        setTimeout(() => {
            navigate("/")
        }, 1000);
       e.preventDefault();

    }


  return (
    <>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
              Vertically centered hero sign-up form
            </h1>
            <p className="col-lg-10 fs-4">
              Below is an example form built entirely with Bootstrap’s form
              controls. Each required form group has a validation state that can
              be triggered by attempting to submit the form without completing
              it.
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingUserName"
                  name="un"
                  placeholder="Name"
                  value={formdata.un}
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">UserName</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                   name="em"
                  placeholder="name@example.com"
                  value={formdata.em}
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              
          
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign up
              </button>
              <hr className="my-4" />
              <small className="text-body-secondary">
                By clicking Sign up, you agree to the terms of use.
              </small>
            </form>
          </div>
        </div>
      </div>
      {isToast && <Toast/>}
    </>
  );
}
