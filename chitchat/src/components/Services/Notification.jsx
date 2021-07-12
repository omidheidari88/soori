import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = () => {
  const notify = () =>
    toast("پیام شما بزودی ارسال میشود", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
    });
  return (
    <div>
      <button onClick={notify}>Notify me!</button>
      <ToastContainer />
    </div>
  );
};

export default Notification;
