import React from "react";

const MyProfile = () => {
  return (
    <div>
      <h2 className="text-2xl my-3 ml-2">My Profile</h2>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <img className="w-12 h-12 rounded-full" src="profile-picture.jpg" alt="Profile Picture" />
          <div>
            <h1 className="text-lg font-semibold text-gray-800">John Doe</h1>
            <p className="text-sm text-gray-600">Frontend Developer</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-gray-700 text-sm font-semibold uppercase">About Me</h2>
          <p className="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
            elit ante.</p>
        </div>

        <div className="mt-6">
          <h2 className="text-gray-700 text-sm font-semibold uppercase">Contact Information</h2>
          <ul className="mt-2 leading-relaxed">
            <li className="flex items-center text-gray-600">
              <svg className="w-4 h-4 mr-2 fill-current text-gray-400" viewBox="0 0 24 24">
                <path
                  d="M21.707 2.293a1 1 0 0 0-1.414 0L8 14.586V9a1 1 0 0 0-2 0v10a1 1 0 0 0 1 1h10a1 1 0 0 0 0-2H9.414l12.293-12.293a1 1 0 0 0 0-1.414z" />
              </svg>
              john.doe@example.com
            </li>
            <li className="flex items-center text-gray-600 mt-2">
              <svg className="w-4 h-4 mr-2 fill-current text-gray-400" viewBox="0 0 24 24">
                <path
                  d="M19 3H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z" />
                <path
                  d="M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              (123) 456-7890
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MyProfile;
