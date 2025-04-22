const AdminLogin = () => {

  return (
    <div className="w-screen h-screen bg-[#f0f0f0] flex justify-between relative overflow-hidden">
      <div className="min-w-[1200px] min-h-[1200px]  bg-[#3e11aa] rotate-[-60deg] absolute -left-120 -top-100">
        <div className="min-w-[400px] min-h-[400px]  rotate-[60deg] text-white text-center absolute bottom-50 right-90">
          <h1 className="text-8xl">Welcome</h1>
          <h3 className="text-right text-2xl">ProjectPulse</h3>
        </div>
      </div>
      <div className="min-w-[500px] min-h-auto border-2 border-[#1b1a1a46]  text-[#1b1a1a6a] absolute top-70 -right-10 -translate-30 text-center p-5 rounded-xl flex flex-col justify-around">
        <h2 className="text-2xl pb-3">Admin Login</h2>
        <div className="w-auto h-[300px] flex flex-col justify-around">
          <input className="p-3 border-b-2 border-[#1b1a1a46] focus:outline-none"
            type="text"
            placeholder="Username"
          // value={username}
          // onChange={(e) => setUsername(e.target.value)}
          />
          <input className="p-3 border-b-2 border-[#1b1a1a46] focus:outline-none"
            type="password"
            placeholder="Password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          />
          <button className="p-1.5 bg-[#3e11aa] text-2xl text-white rounded-2xl"
          // onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
