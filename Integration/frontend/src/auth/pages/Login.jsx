import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../features/hooks/useAuth";
import { useSelector } from "react-redux";

const Login = () => {
  const { user, loading } = useSelector((state) => state.auth)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin } = useAuth();
  let navigate = useNavigate();

  const handleSubmit =async (e) => {
    e.preventDefault();
    handleLogin({email, password});
    navigate("/home")
  };

  if(loading){
    return ( <main><h1>Loading....</h1></main> )
  }

  return (
    <div className="bg-amber-200 h-screen w-screen ">
      <div className="flex border h-screen items-center justify-center">
        <div className="flex border p-8 rounded-2xl flex-col gap-8">
          <h1 className="text-2xl text-center font-bold">Login</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-9">
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="name">
                Email:-
              </label>
              <input
                className="border rounded outline-0  px-5 py-2 "
                type="text"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter email"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="name">
                Password:-
              </label>
              <input
                className="border rounded outline-0 px-5 py-2 "
                type="password"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter Password"
              />
            </div>

            <button className=" border p-2 rounded-2xl bg-blue-500 text-white cursor-pointer active:scale-95 ">
              Submit
            </button>
          </form>
          <div>
            <p>
              Don't have account{" "}
              <span
                onClick={() => navigate("/register")}
                className=" font-semibold cursor-pointer text-blue-500"
              >
                Register
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
