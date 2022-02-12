import React from "react";

export default function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-700 mt-80 ">

        <div className="px-8 py-3">
       
            <div className="px-8 py-3">
                <div>India</div>
            </div>
        
            <div className="flex justify-center space-x-8 whitespace-wrap md:justify-self-start items-center ">
                <p className="link">About</p>
                <p className="link">Advertising</p>
                <p className="link">Business</p>
                <p className="link">How Search Works</p>
            </div>

            <div className="flex justify-center space-x-8 md:ml-auto">
                <p className="link">Privacy</p>
                <p className="link">Terms</p>
                <p className="link">Settings</p>
            </div>
        </div>
    </footer>
  );
}
