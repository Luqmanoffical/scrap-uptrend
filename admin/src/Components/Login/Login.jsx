import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ error, seterror ] = useState(false)
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if(email == "Admin@gmail.com" && password=="12345678"){
        console.log('Logged in');
        navigate("/dashboard")
    }else{
seterror(true);
    }

    
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center">Admin Login</h2>
        {error  ? <div><p className='text-center text-red-600 text-sm'>
            invaild credentional
            </p></div> :""}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-black text-white font-semibold rounded-md border-2 border-black  hover:bg-white hover:text-black"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
