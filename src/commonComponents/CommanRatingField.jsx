import React from 'react'

function CommanRatingField(props) {
    const { label, id1, id2, id3, id4, id5, name, radioLabel1, radioLabel2, radioLabel3, radioLabel4, radioLabel5, selectedValue, onRadioChange } = props;
    const handleChange = (value) => {
        
        onRadioChange(value);
    };
    return (
        <div className=' flex justify-between ml-[200px] mr-[200px] border-b-[1px] border-b-neutral-800 pb-2 pt-2'>
            <div><label className=' '>{label}</label></div>
            <div className=''>
            <input type='radio' id={id1} name={name} value="5" checked={selectedValue === '5'} onChange={() => handleChange('5')} className=' pr-1'></input>
            <label htmlFor={id1} className=' pl-1 pr-2'>{radioLabel1}</label>
            <input type='radio' id={id2} name={name} value="4" checked={selectedValue === '4'} onChange={() => handleChange('4')} className=' pr-1'></input>
            <label htmlFor={id2} className=' pl-1 pr-2'>{radioLabel2}</label>
            <input type='radio' id={id3} name={name} value="3" checked={selectedValue === '3'} onChange={() => handleChange('3')} className=' pr-1'></input>
            <label htmlFor={id3} className=' pl-1 pr-2'>{radioLabel3}</label>
            <input type='radio' id={id4} name={name} value="2" checked={selectedValue === '2'} onChange={() => handleChange('2')} className=' pr-1'></input>
            <label htmlFor={id4} className=' pl-1 pr-2'>{radioLabel4}</label>
            <input type='radio' id={id5} name={name} value="1" checked={selectedValue === '1'} onChange={() => handleChange('1')} className=' pr-1'></input>
            <label htmlFor={id5} className=' pl-1 pr-2'>{radioLabel5}</label>
            </div>
        </div>
    )
}

export default CommanRatingField
