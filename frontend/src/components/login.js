import { useState } from "react";

function LoginSignup() {
  const [userType, setUserType] = useState("student");
  const [isSignup, setIsSignup] = useState(false);

  const selectUserType = (type) => {
    setUserType(type);
    setIsSignup(type === "admin");
  };

  const handleLogin = () => {
    if (userType === "student") {
      window.location.href = "/student-dashboard";
    } else {
      window.location.href = "/admin-dashboard";
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1138204965/photo/chef-standing-behind-full-lunch-service-station-with-assortment-of-food-in-trays.jpg?s=612x612&w=0&k=20&c=M-7uLyd2cZQfHMQWXtsolHc-yThA8HVDrryhQfGktrY=')",
      }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center bg-opacity-90">
        <h1 className="text-2xl font-bold mb-4">Welcome!</h1>

        {/* User Type Selection */}
        <div className="mb-4">
          <h2 className="text-lg font-medium">Select User Type:</h2>
          <div className="flex justify-center gap-4 mt-2">
            <button
              className={`py-2 px-6 border rounded ${
                userType === "student" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => selectUserType("student")}
            >
              Student
            </button>
            <button
              className={`py-2 px-6 border rounded ${
                userType === "admin" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => selectUserType("admin")}
            >
              Admin
            </button>
          </div>
        </div>

        {/* Login / Signup Forms */}
        <div>
          {!isSignup ? (
            <div>
              <h2 className="text-lg font-medium mb-2">Login</h2>
              <input type="email" placeholder="Email" className="w-full p-2 mb-2 border rounded" />
              <input type="password" placeholder="Password" className="w-full p-2 mb-2 border rounded" />
              <button onClick={handleLogin} className="w-full bg-blue-600 text-white py-2 rounded">
                Login
              </button>
            </div>
          ) : (
            <div className="bg-white p-4 rounded-lg bg-opacity-80">
              <h2 className="text-lg font-medium mb-2">Signup</h2>
              <input type="text" placeholder="Full Name" className="w-full p-2 mb-2 border rounded" />
              <input type="email" placeholder="Email" className="w-full p-2 mb-2 border rounded" />
              <input type="password" placeholder="Password" className="w-full p-2 mb-2 border rounded" />
              <button className="w-full bg-blue-600 text-white py-2 rounded">Signup</button>
            </div>
          )}
        </div>

        {/* Toggle Button */}
        <button className="mt-4 text-blue-500" onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? "Switch to Login" : "Switch to Signup"}
        </button>
      </div>
    </div>
  );
}

export default LoginSignup;
