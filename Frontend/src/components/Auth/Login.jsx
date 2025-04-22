const AdminLogin = () => {

  return (
    <div className="w-screen h-screen relative gardient overflow-hidden">
      <div className="min-w-[400px] min-h-auto border-2 border-[#1b1a1a46]  text-[#1b1a1a6a] absolute top-[50%] -right-[10%] -translate-[50%] text-center p-5 rounded-xl flex flex-col justify-around">
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
