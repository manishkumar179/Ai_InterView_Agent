import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../features/hooks/useAuth";

const Register = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  let navigate = useNavigate();
  const {handleRegister} = useAuth()

  const handleSubmit = async (e)=>{
    e.preventDefault();
    handleRegister({username, email, password});

    navigate("/")
    
  }



  return (
    <div className="bg-amber-200 h-screen w-screen ">
      <div className="flex border h-screen items-center justify-center">
        <div className="flex border p-8 rounded-2xl flex-col gap-8">
          <h1 className="text-2xl text-center font-bold">Register</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="name">
                Name:-
              </label>
              <input
                className="border rounded outline-0  px-5 py-2 "
                type="text"
                name="username"
                onChange={(e)=>{setUsername(e.target.value)}}
                placeholder="Enter name"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="name">
                Email:-
              </label>
              <input
                className="border rounded outline-0  px-5 py-2 "
                type="text"
                name="email"
                onChange={(e)=>{setEmail(e.target.value)}}
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
                name="name"
                onChange={(e)=>{setPassword(e.target.value)}}
                placeholder="Enter Password"
              />
            </div>

            <button className=" border p-2 rounded-2xl bg-blue-500 text-white cursor-pointer active:scale-95 ">
              Register
            </button>
          </form>
          <div>
            <p>
              Already have an account{" "}
              <span
                onClick={() => navigate("/")}
                className=" font-semibold cursor-pointer text-blue-500"
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
