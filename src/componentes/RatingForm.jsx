import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { cleaningandHygieneData, controlsData, hoandTeamManagersData, personalData, purchaseandStoresData, siteSupervisionData } from './DataFeedback';
import CommanRatingField from '../commonComponents/CommanRatingField';
const RatingForm = () => {
  const { ratingId } = useParams();

  const [ratings, setRatings] = useState({
    personalData: {},
    cleaningandHygieneData: {},
    siteSupervisionData: {},
    purchaseandStoresData: {},
    controlsData: {},
    hoandTeamManagersData: {},
  });

  const handleRadioChange = (section, name, value) => {
    
    setRatings((prevRating) => ({
      ...prevRating,
      [section]: {
        ...prevRating[section],
        [name]: value,
      },
    }));
  };
  // console.log(ratings);

  // console.log("Total length of personal Data"+Object.keys(ratings.personalData).length *5);

  const calculateTotalSelectionTotal = (sectionKey) => {
    const totalSection = (Object.keys(ratings[sectionKey]).length) * 5
    return totalSection
  }

  const calculateTotalRatingTotal = () => {
    let totalRatingCalculation = 0;
    for (let sectionKey in ratings) {
      totalRatingCalculation += (Object.keys(ratings[sectionKey]).length) * 5;
    }
    return totalRatingCalculation;
  };
  const calculateSectionTotal = (sectionKey) => {
    const sectionRatings = ratings[sectionKey];
    return Object.values(sectionRatings)
      .reduce((acc, current) => acc + (current) || 0, 0);
  };

  const calculateTotalRating = () => {
    return Object.keys(ratings)
      .reduce((total, sectionKey) => total + calculateSectionTotal(sectionKey), 0);
  };

  const handleSubmit = () => {
    const totalRating = calculateTotalRating();

    console.log("Total Ratings:" + totalRating);
  };

  const percentageOfTheRating = () => {
    const totalRating = calculateTotalRating();
    const totalRatingActual = calculateTotalRatingTotal();
    if (totalRating === 0) return 0;

    return ((totalRating / totalRatingActual) * 100).toFixed(2);
  }

  const sections = [
    { title: 'Personnel', data: personalData, sectionKey: 'personalData' },
    { title: 'Cleaning & Hygiene', data: cleaningandHygieneData, sectionKey: 'cleaningandHygieneData' },
    { title: 'Site Supervision', data: siteSupervisionData, sectionKey: 'siteSupervisionData' },
    { title: 'Purchase & Stores', data: purchaseandStoresData, sectionKey: 'purchaseandStoresData' },
    { title: 'Controls', data: controlsData, sectionKey: 'controlsData' },
    { title: 'HO and Team Managers', data: hoandTeamManagersData, sectionKey: 'hoandTeamManagersData' }
  ];

  return (
    <div className="bg-white-50 p-8 rounded-lg shadow-lg">
      {sections.map((section) => (
        <div key={section.sectionKey} className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-600 pb-2 mb-4">{section.title}</h2>

          {/* Rating Fields */}
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
              value1={data.value1}
              value2={data.value2}
              value3={data.value3}
              value4={data.value4}
              value5={data.value5}
              radioLabel1={data.radioLabel1}
              radioLabel2={data.radioLabel2}
              radioLabel3={data.radioLabel3}
              radioLabel4={data.radioLabel4}
              radioLabel5={data.radioLabel5}
              selectedValue={ratings[section.sectionKey][data.name]}
              onRadioChange={(value) => handleRadioChange(section.sectionKey, data.name, value)}
            />
          ))}
          <div className=' flex justify-end'>
            <div className="mt-2 text-lg font-semibold " >Sub Total: {calculateSectionTotal(section.sectionKey)}</div>
            <div className="mt-2 text-lg font-semibold">/{calculateTotalSelectionTotal(section.sectionKey)}</div>
          </div>
        </div>
      ))}
      <div className=' flex justify-end'>
        <div className="mt-4 text-xl font-bold text-gray-800 ">Total Rating: {calculateTotalRating()}</div>
        <div className="mt-4 text-xl font-bold text-gray-800">/{calculateTotalRatingTotal()}</div>
      </div>
      <div className=' flex justify-end mt-4 text-xl font-bold text-gray-800'>Percentage:{percentageOfTheRating()}%</div>



      {/* Submit Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleSubmit}
          className="bg-sky-700 text-white py-2 px-6 rounded-full shadow-md
           hover:bg-sky-500 transition duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default RatingForm;
