import React, { useState } from 'react';
import { cleaningandHygieneData, controlsData, hoandTeamManagersData, personalData, purshaseandStoresData, siteSupervisionData } from './DataFeedback';
import CommanRatingField from '../commonComponents/CommanRatingField';
import Navbar from '../commonComponents/Navbar';
    
const RatingForm = () => {
  const [ratings, setRatings] = useState({
    personalData: {},
    cleaningandHygieneData: {},
    siteSupervisionData: {},
    purshaseandStoresData: {},
    controlsData: {},
    hoandTeamManagersData: {},
  });

  const handleRadioChange = (section, name, value) => {
    console.log(section, name, value);

    setRatings((prevRating) => ({
      ...prevRating,
      [section]: {
        ...prevRating[section],
        [name]: value,
      },
    }));
  };

  const handleSubmit = () => {
    console.log(ratings);
    const totalRating = Object.values(ratings)
      .flatMap((sectionData) => Object.values(sectionData))
      .reduce((accumulator, currentValue) => accumulator + (parseInt(currentValue) || 0), 0);
    console.log(totalRating);
  };

  const sections = [
    { title: 'Personnel', data: personalData, sectionKey: 'personalData' },
    { title: 'Cleaning & Hygiene', data: cleaningandHygieneData, sectionKey: 'cleaningandHygieneData' },
    { title: 'Site Supervision', data: siteSupervisionData, sectionKey: 'siteSupervisionData' },
    { title: 'Purshase & Stores', data: purshaseandStoresData, sectionKey: 'purshaseandStoresData' },
    { title: 'Controls', data: controlsData, sectionKey: 'controlsData' },
    { title: 'HO and Team Managers', data: hoandTeamManagersData, sectionKey: 'hoandTeamManagersData' }
  ];

  return (
    <>
    <div className="bg-white-50 px-8 rounded-lg shadow-lg max-w-full mx-auto">
      {sections.map((section) => (
        <div key={section.sectionKey} className="mb-6">
   
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-600 pb-2 mb-4">{section.title}</h2>
    
          {section.data.map((data, index) => (
            <CommanRatingField
              key={index}
              label={data.label}
              id1={data.id + '1'}
              id2={data.id + '2'}
              id3={data.id + '3'}
              id4={data.id + '4'}
              id5={data.id + '5'}
              name={data.name}
              radioLabel1={data.radioLabel1}
              radioLabel2={data.radioLabel2}
              radioLabel3={data.radioLabel3}
              radioLabel4={data.radioLabel4}
              radioLabel5={data.radioLabel5}
              selectedValue={ratings[section.sectionKey][data.name]}
              onRadioChange={(value) => handleRadioChange(section.sectionKey, data.name, value)}
            />
          ))}
        </div>
      ))}
  
     
      <div className="flex justify-center mt-6">
        <button
          onClick={handleSubmit}
          className="bg-sky-700 text-white py-2 px-6 rounded-full shadow-md hover:bg-sky-500 transition duration-300 "
        >
          Submit
        </button>
      </div>
    </div>
    </>
  );
};
  
export default RatingForm

