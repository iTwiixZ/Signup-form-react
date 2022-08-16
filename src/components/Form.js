import React from "react";
import { useForm } from "react-hook-form";
import iconError from "../assets/images/icon-error.svg";
export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
 
  return (
    <form className="form-card" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="form-control"
        placeholder="First Name"
        {...register("firstName", { required: true })}
      />
      
      {errors.firstName?.type === "required" && (
        <p className="text-end mt-1 error-message">First Name cannot be empty</p>
      )}

      <input
        className="form-control mt-4"
        placeholder="Last Name"
        {...register("lastName", { required: true })}
      />
       {/* {errors.firstName?.type === "required" && (
        <img className="error-icon" src={iconError} alt="" />
      )} */}
      {errors.firstName?.type === "required" && (
        <p className="text-end mt-1 error-message">Last Name cannot be empty</p>
      )}
      <input
        className="form-control mt-4"
        placeholder="Email"
        type="email"
        {...register("email", { required: true })}
      />
       {/* {errors.firstName?.type === "required" && (
        <img className="error-icon" src={iconError} alt="" />
      )} */}
      {errors.firstName?.type === "required" && (
        <p className="text-end mt-1 error-message">Email cannot be empty</p>
      )}
      <input
        className="form-control mt-4"
        placeholder="Password"
        type="password"
        {...register("password", { required: true })}
      />
       {/* {errors.firstName?.type === "required" && (
        <img className="error-icon" src={iconError} alt="" />
      )} */}
      {errors.firstName?.type === "required" && (
        <p className="text-end mt-1 error-message">Password cannot be empty</p>
      )}
      <button className="subscribe text-white mt-4">CLAIM YOUR FREE TRIAL</button>
      <p className="text-center terms mt-3">
        By clicking the button, you are agreeing to our
        <span className='red'> Terms and Services </span>
      </p>
    </form>
  );
}
