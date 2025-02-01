import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-16 px-20 flex flex-wrap justify-around items-center">
      <div className="max-w-sm mb-16">
        <h2 className="text-2xl font-bold text-white mb-4">
          <i className="fa-solid fa-bowl-food"></i> College Mess
        </h2>
        <p className="text-sm mb-4">
          In the new era of technology, we look at the future with certainty and pride for our company.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-9 h-9 bg-red-500 text-white rounded-full flex items-center justify-center text-xl hover:scale-110 transition-transform">
            T
          </a>
          <a href="#" className="w-9 h-9 bg-red-500 text-white rounded-full flex items-center justify-center text-xl hover:scale-110 transition-transform">
            F
          </a>
          <a href="#" className="w-9 h-9 bg-red-500 text-white rounded-full flex items-center justify-center text-xl hover:scale-110 transition-transform">
            I
          </a>
          <a href="#" className="w-9 h-9 bg-red-500 text-white rounded-full flex items-center justify-center text-xl hover:scale-110 transition-transform">
            G
          </a>
        </div>
      </div>
      <div className="flex gap-24">
      <ul className="space-y-3 text-sm">
  <li><a href="#" className="hover:text-red-500">Home</a></li>
  <li><a href="#" className="hover:text-red-500">About</a></li>
  <li><a href="#" className="hover:text-red-500">Menu</a></li>
  <li><a href="#" className="hover:text-red-500">Pricing</a></li>
  <li><a href="#" className="hover:text-red-500">Blog</a></li>
  <li><a href="#" className="hover:text-red-500">Contact</a></li>
  <li><a href="#" className="hover:text-red-500">Delivery</a></li>
</ul>
<ul className="space-y-3 text-sm">
  <li><a href="#" className="hover:text-red-500">Start Here</a></li>
  <li><a href="#" className="hover:text-red-500">Styleguide</a></li>
  <li><a href="#" className="hover:text-red-500">Password Protected</a></li>
  <li><a href="#" className="hover:text-red-500">404 Not Found</a></li>
  <li><a href="#" className="hover:text-red-500">Licenses</a></li>
  <li><a href="#" className="hover:text-red-500">Changelog</a></li>
  <li><a href="#" className="hover:text-red-500">View More</a></li>
</ul>

      </div>
      <div className="text-center text-sm text-gray-500 py-4 bg-gray-700 w-full mt-16">
        Copyright &copy; 2023 Hashtag Developer. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
