import React from 'react';

function Navbar() {
  return (
    <header className="items-center justify-center p-4 text-black w-full flex flex-col sm:flex-row"> {/* sm:flex-row: to arrange items in a row on larger screens */}
        <div className='gap-5 flex flex-col max-w-8xl w-full justify-center items-center'>
          <div className='flex items-center space-x-4 w-full justify-center'>
            <img src="\ismartlogo.png" alt="iSmart Logo" className="h-16" />
            <h1 className='font-extrabold text-3xl text-center sm:text-left'> {/* sm:text-left: to align text to left on larger screens */}
              iSmart Facitech Pvt Ltd
            </h1>
          </div>

          <div className='text-4xl font-semibold text-center sm:text-left'> {/* sm:text-left: to align text to left on larger screens */}
            <p className="text-2xl font-semibold text-center text-black-400">
              Formerly known as “Comfort Facility Management Services Private Limited”
              <br />
              and before that “Comfort Facility Management Services LLP”
            </p>
          </div>
        </div>
    </header>
  );
}

export default Navbar;
