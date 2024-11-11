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

        <div className="px-4 py-2">
  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-center text-gray-800 
               max-730:text-sm max-620:text-xs max-530:text-xs max-430:text-xxs max-390:text-xxs">
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
