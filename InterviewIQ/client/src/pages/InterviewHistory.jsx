import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { ServerUrl } from "../App";

const InterviewHistory = () => {
  const [interviews, setInterviews] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getMyInterviews = async () => {
        try {
            const result = await axios.get(ServerUrl + "/api/interview/get-interview", {withCredentials:true})
            console.log(result.data)
            setInterviews(result.data)
        } catch (error) {
            console.log(error)
        }
    };

    getMyInterviews()
  }, []);

  return <div>
    History Page
  </div>;
};

export default InterviewHistory;
