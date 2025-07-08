import React from "react";

const CopyRight = () => {
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto h-28 font-acme">
      <div className="text-xs text-center">
        © {new Date().getFullYear()} Travelsy Ltd. All rights reserved.
      </div>
      <div className="text-xs text-center">Made in Kenya by Ralak</div>
    </div>
  );
};

export default CopyRight;
