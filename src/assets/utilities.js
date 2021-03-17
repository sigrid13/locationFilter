import {  toast } from 'react-toastify';

export const ShowToast = (type, message) => {
  if (type === "success") {
    return toast.success(message, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      }
    );
  }
  if (type === "error") {
    return toast.error(message, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      }
    );
  }
}
