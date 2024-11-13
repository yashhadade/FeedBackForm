import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { cleaningandHygieneData, controlsData, hoandTeamManagersData, personalData, purchaseandStoresData, siteSupervisionData } from './DataFeedback';
import CommanRatingField from '../commonComponents/CommanRatingField';
import usePostData from '../API/PostData';
const RatingForm = () => {
  const { ratingId } = useParams();
  const { postData, responseData, error, loading, message } =usePostData(`feedback/new/${ratingId}`)
  const [ratings, setRatings] = useState({
    personalData: {},
    cleaningandHygieneData: {},
    siteSupervisionData: {},
    purchaseandStoresData: {},
    controlsData: {},
    hoandTeamManagersData: {},
   
  });
const [remarkName,setRemark] = useState({
   remark: "",
})
const [formData, setFormData] = useState([])
console.log
const handleRemark=(e)=>{
  setRemark({...remarkName,[e.target.name]: e.target.value});
}
// console.log(remarkName);


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
  const formatRatingsForPost = () => {
    const formattedRatings = {};
    for (const category in ratings) {
      if (ratings.hasOwnProperty(category)) {
        const categoryData = ratings[category];
        for (const key in categoryData) {
          if (categoryData.hasOwnProperty(key)) {
            formattedRatings[key] = categoryData[key];
          }
        }
      }
    }
    return formattedRatings;
  };
  const handleSubmit = async () => {
    const ratingsData = formatRatingsForPost();
    const dataToSubmit = { ...ratingsData, remark: remarkName.remark };
    // const totalRating = calculateTotalRating();
    setFormData(dataToSubmit)
    await postData(dataToSubmit);
    // console.log("Total Ratings:" + totalRating);
   
    
  };

  useEffect(() => {
    if (responseData) {
    }
  }, [responseData]);
 

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
      {message && <p style={{ color: "green" }}>Thanks For Submiting the FeedBackForm</p>}
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

<div>
<label className='block text-xl font-bold  text-black-700'>Remark :</label>
          <input
            type="text"
            name="remark"
             value={remarkName.remark}
            onChange={handleRemark}
            placeholder="Enter Remark"
            className='mt-1 block w-60 h-20 px-3 py-2 border border-black-300 rounded-md shadow-sm focus-outline-none 
            focus:ring-black-500 focus:border-black-500'
          />
</div> 

      <div className=' flex justify-end'>
        <div className="mt-4 text-xl font-bold text-gray-800 ">Total Rating: {calculateTotalRating()}</div>
        <div className="mt-4 text-xl font-bold text-gray-800">/{calculateTotalRatingTotal()}</div>
      </div>
      <div className=' flex justify-end mt-4 text-xl font-bold text-gray-800'>Percentage:{percentageOfTheRating()}%</div>

      <div className=' flex'>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {message && <p style={{ color: "green" }}>{message}</p>}
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleSubmit}  disabled={loading} 
          className="bg-sky-700 text-white py-2 px-6 rounded-full shadow-md
           hover:bg-sky-500 transition duration-300"
        >
         {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default RatingForm;
