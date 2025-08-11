import React from "react";
import axios from "axios";
import Header from "../header/Header";
import Footer from "../Home/Footer/footer";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const [Register, setRegister] = React.useState({
    email: "",
    password: "",
    
  });
  const [error, setError] = React.useState("");
  const navigate = useNavigate();
  
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(Register);
    
    const finalData = {
      email: Register.email,
      password: Register.password,
    };

    try {
      const response = await axios.post(
        "http://localhost:9090/loginUser",
        finalData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          withCredentials: false
        }
      );

      console.log("Response from server:", response.data);
      
      if (response.data === true) {
        
        setError("");
        // Clear form after successful login
        setRegister({
          email: "",
          password: ""
        });
        navigate('/');
      } else {
        setError("Invalid email or password");
        window.alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Full error object:", error);
      
      if (error.response) {
        // Server responded with error
        console.error("Server error:", error.response.data);
        setError(error.response.data.message || "Server error occurred");
      } else if (error.request) {
        // Request was made but no response
        console.error("Network error:", error.request);
        setError("Network error - please check your connection");
      } else {
        // Error in request setup
        console.error("Request error:", error.message);
        setError("Error setting up request");
      }
    }
  };

  return (
    <>
      <Header />
      <div className="bg-gradient-to-br from-amber-700 to-amber-300 min-h-screen">
        <div className="text-center bg-gradient-to-l from-neutral-900 to-black min-h-[180px] sm:p-6 p-4">
          <h4 className="sm:text-3xl text-2xl text-white font-medium mt-3">
            Login to your account
          </h4>
        </div>

        <div className="mx-4 mb-4 -mt-20">
          <form
            className="max-w-4xl mx-auto bg-slate-950 [box-shadow:0_2px_13px_-6px_rgba(0,0,0,0.4)] sm:p-8 p-4 rounded-md"
            onSubmit={handleOnSubmit}
          >
            {/* Google and Apple buttons section */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* ...existing social login buttons... */}
            </div>

            <div className="my-6 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 text-center text-slate-500">Or</p>
            </div>

            <div className="grid sm:grid-cols-1 gap-8">
              <div>
                <label className="text-yellow-300 text-sm font-medium mb-2 block">
                  Email Id
                </label>
                <input
                  name="email"
                  type="email"
                  value={Register.email}
                  onChange={handleOnChange}
                  className="bg-slate-100 focus:bg-transparent w-full text-sm text-slate-800 px-4 py-2.5 rounded-sm border border-gray-200 focus:text-white focus:border-blue-600 outline-0 transition-all"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div>
                <label className="text-yellow-300 text-sm font-medium mb-2 block">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  value={Register.password}
                  onChange={handleOnChange}
                  className="bg-slate-100 focus:bg-transparent w-full text-sm text-slate-800 px-4 py-2.5 rounded-sm border border-gray-200 focus:text-white focus:border-blue-600 outline-0 transition-all"
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>

            <div className="mt-8 flex gap-2.5 items-center">
              <button
                type="submit"
                className="py-2.5 px-5 text-sm font-medium tracking-wider rounded-sm cursor-pointer text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-0"
              >
                Login
              </button>
              <Link to="/register" className="py-2.5 px-5 text-sm font-medium tracking-wider rounded-sm cursor-pointer text-black bg-emerald-500 hover:bg-emerald-400 focus:outline-0">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
