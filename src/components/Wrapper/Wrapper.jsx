import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className={`bg-var-(--softBg) mx-auto w-[90%] sm:w-[80%]`}>
      {children}
    </div>
  );
};

export default Wrapper;
