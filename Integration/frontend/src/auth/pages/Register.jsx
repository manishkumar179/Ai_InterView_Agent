import React from 'react'
import { useNavigate } from 'react-router'

const Register = () => {
  let navigate = useNavigate()
  return (
    <div className="bg-amber-200 h-screen w-screen ">
      <div className="flex border h-screen items-center justify-center">
        <div className="flex border p-8 rounded-2xl flex-col gap-8">
          <h1 className="text-2xl text-center font-bold">Register</h1>


          <div className="flex flex-col" >
            <label className="font-semibold" htmlFor="name">Name:-</label>
            <input className="border rounded outline-0  px-5 py-2 " type="text" placeholder="Enter name" />
          </div>



          <div className="flex flex-col" >
            <label className="font-semibold" htmlFor="name">Email:-</label>
            <input className="border rounded outline-0  px-5 py-2 " type="text" placeholder="Enter email" />
          </div>

          <div className="flex flex-col" >
            <label className="font-semibold" htmlFor="name">Password:-</label>
            <input className="border rounded outline-0 px-5 py-2 " type="text" placeholder="Enter Password" />
          </div>

          <button className=" border p-2 rounded-2xl bg-blue-500 text-white cursor-pointer active:scale-95 ">
            Register
          </button>

          <div>
            <p>Already have an account <span onClick={()=>navigate("/")} className=" font-semibold cursor-pointer text-blue-500">Login</span></p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Register
