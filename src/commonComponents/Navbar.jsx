import React from "react";

function Navbar() {
  return (
    <header className="w-full flex items-center justify-center p-4 text-black">
      <div className="gap-5 flex flex-col  max-w-8xl w-full justify-center items-center">
        <div className="flex items-center space-x-4 w-full justify-center " >
          <div>
          <img src="\ismartlogo.png" alt="iSmart Logo" className=" h-16 max-530:h-10 " />
          </div>
          <div>
          <h1 className="font-extrabold text-3xl text-center max-530:text-2xl max-430:text-xl max-390:text-base">
            iSmart Facitech Pvt Ltd
          </h1>
          </div>
        </div>

        <div>
          <p className="text-base sm:text-2xl font-semibold text-center text-black-400 ">
            Formerly known as “Comfort Facility Management Services Private
            Limited”
            <br />
            and before that “Comfort Facility Management Services LLP”
          </p>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

