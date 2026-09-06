import React from 'react'
import { useAuth } from '../../features/hooks/useAuth';
import { useNavigate } from 'react-router';


const Home = () => {

  const navigate = useNavigate();

  const { handleLogout } = useAuth();

   const handleSubmitLogout =async (e) => {
    e.preventDefault();
    await handleLogout();
    navigate("/")
  };

  return (
    <div className='font-bold text-4xl text-blue-700'>
      home page

      <button onClick={handleSubmitLogout}>Logout</button>
    </div>
  )
}

export default Home
