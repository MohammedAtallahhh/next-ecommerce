import React from "react";

const Loader = () => {
  return (
    // <div class="fixed w-full h-full bg-black/50 flex justify-center items-center z-50">
    //   <div
    //     class="spinner-border animate-spin inline-block w-8 h-8 border-4 border-purple-500 rounded-full"
    //     role="status"
    //   ></div>
    // </div>

    <div className="fixed w-full h-full flex justify-center items-center bg-purple-900/30">
      <div className="grid gap-2">
        <div className="flex items-center justify-center ">
          <div className="w-16 h-16 border-b-8 border-purple-500 rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
