import React from 'react';

function CommanRatingField(props) {
    const { label, id1, id2, id3, id4, id5, name, radioLabel1, radioLabel2, radioLabel3, radioLabel4, radioLabel5, selectedValue, onRadioChange } = props;
    
    const handleChange = (value) => {
        onRadioChange(value);
    };

    return (
        <div className="flex justify-between items-center mx-4 py-2 border-b border-neutral-800"> {/* to adjust margin for mobile */}
            <div className="flex-grow">
                <label className="text-sm font-medium">{label}</label>
            </div>
            <div className="flex justify-between space-x-2 sm:space-x-4"> {/* tp adjust space between items on larger screens */}
                <input type='radio' id={id1} name={name} value="5" checked={selectedValue === '5'} onChange={() => handleChange('5')} className='pr-1'/>
                <label htmlFor={id1} className='text-xs sm:text-sm'>{radioLabel1}</label>

                <input type='radio' id={id2} name={name} value="4" checked={selectedValue === '4'} onChange={() => handleChange('4')} className='pr-1'/>
                <label htmlFor={id2} className='text-xs sm:text-sm'>{radioLabel2}</label>

                <input type='radio' id={id3} name={name} value="3" checked={selectedValue === '3'} onChange={() => handleChange('3')} className='pr-1'/>
                <label htmlFor={id3} className='text-xs sm:text-sm'>{radioLabel3}</label>

                <input type='radio' id={id4} name={name} value="2" checked={selectedValue === '2'} onChange={() => handleChange('2')} className='pr-1'/>
                <label htmlFor={id4} className='text-xs sm:text-sm'>{radioLabel4}</label>

                <input type='radio' id={id5} name={name} value="1" checked={selectedValue === '1'} onChange={() => handleChange('1')} className='pr-1'/>
                <label htmlFor={id5} className='text-xs sm:text-sm'>{radioLabel5}</label>
            </div>
        </div>
    );
}

export default CommanRatingField;
