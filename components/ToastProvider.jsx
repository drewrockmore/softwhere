'use client'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


const ToastProvider = ({children}) => {

    const contextClass = {
        success: "bg-green-600/50",
        error: "bg-red-600/50",
        info: "bg-gray-600",
        warning: "bg-orange-400",
        default: "bg-indigo-600",
        dark: "bg-white-600 font-gray-300",
      };
    

    return (
        <>
            {children}
            <ToastContainer 
             toastClassName={(context) =>
                contextClass[context?.type || "default"] +
                " relative p-1 min-h-10 rounded-md overflow-hidden cursor-pointer flex items-center justify-between"
              }
              bodyClassName={() => "text-sm text-white p-3 flex items-center justify-center"}
              />
        </>
    )
}
export default ToastProvider