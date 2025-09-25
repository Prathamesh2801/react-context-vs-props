import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
export default function Login() {
  const navigate = useNavigate();
  const {setUser} = useContext(UserContext)
  const [formData, setFormData] = useState({
    un: "",
    em: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((preVal) => ({
      ...preVal,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.un.trim() && formData.em.trim()) {
      setUser(formData);

      toast.success("Login SuccessFully");
      
      setTimeout(() => {
        toast.success(`Welcome ${formData.un}`,{
          icon:'🙌',
          position:'top-center',
          duration:3000
        })
      }, 3000);

      setFormData({
        un: "",
        em: "",
      });

      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
    else{
      toast.error("Enter Credentials")
    }
  }
  return (
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
      <div class="row align-items-center g-lg-5 py-5">
        <div class="col-lg-7 text-center text-lg-start">
          <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">
            Vertically centered hero sign-up form
          </h1>
          <p class="col-lg-10 fs-4">
            Below is an example form built entirely with Bootstrap's form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
        </div>
        <div class="col-md-10 mx-auto col-lg-5">
          <form
            class="p-4 p-md-5 border rounded-3 bg-body-tertiary"
            onSubmit={handleSubmit}
          >
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                value={formData.un}
                onChange={handleChange}
                id="floatingUsername"
                placeholder="Name"
                name="un"
              />
              <label for="floatingUsername">Username</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                value={formData.em}
                onChange={handleChange}
                id="floatingInput"
                placeholder="name@example.com"
                name="em"
              />
              <label for="floatingInput">Email address</label>
            </div>

            <button class="w-100 btn btn-lg btn-primary" type="submit">
              Sign up
            </button>
            <hr class="my-4" />
            <small class="text-body-secondary">
              By clicking Sign up, you agree to the terms of use.
            </small>
          </form>
        </div>
      </div>
    </div>
  );
}
