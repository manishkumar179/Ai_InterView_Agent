import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ServerUrl } from "../App";
import { FaArrowLeft } from "react-icons/fa";

const InterviewHistory = () => {
  const [interviews, setInterviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getMyInterviews = async () => {
      try {
        const result = await axios.get(
          ServerUrl + "/api/interview/get-interview",
          { withCredentials: true },
        );
        console.log(result.data);
        setInterviews(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    getMyInterviews();
  }, []);

  return (
    <div
      className=" min-h-screen bg-linear-to-br from-fray-50 to-emerald-50
  py-10 "
    >
      <div className="w-[90vw] lg:w-[70vw] max-w-[90%] mx-auto ">
        {/* Heading */}
        <div className=" mb-10 w-full flex items-start gap-4 ">
          <button className=" mb-1 p-3 rounded-full bg-white shadow hover:shadow-md transition  ">
            {" "}
            <FaArrowLeft className=" text-gray-600 " />{" "}
          </button>

          <div>
            <h1 className=" text-3xl font-bold text-gray-800  ">
              {" "}
              Interview History{" "}
            </h1>
            <p className=" text-gray-500 mt-2 ">
              Track your past interviews and performance report
            </p>
          </div>
        </div>

        {interviews.length === 0 ? (
          <div className=" bg-white p-10 rounded-2xl shadow text-center ">
            <p className=" text-gray-500 ">
              No interviews found, Start your first interview.
            </p>
          </div>
        ) : (
          <div className=" grid gap-6  ">
            {interviews.map((item, index) => (
              <div key={index}
                className=" bg-white p-6 rounded-2xl shadow-md hover:shadow-xl
          transition-all duration-300 cursor-pointer border
          border-gray-100 "
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewHistory;
