import React, { useState } from 'react';
import { cleaningandHygieneData, controlsData, hoandTeamManagersData, personalData, purshaseandStoresData, siteSupervisionData } from './DataFeedback';
import CommanRatingField from '../commonComponents/CommanRatingField';
import Navbar from '../commonComponents/Navbar';
  
const RatingForm = () => {
    const [ratings,setRatings]=useState({
        personalData:{},
        cleaningandHygieneData:{},
        siteSupervisionData:{},
        purshaseandStoresData:{},
        controlsData:{},
        hoandTeamManagersData:{},
    });
    
    const handleRadioChange =(section,name,value)=>{
        // console.log(section,name,value);
        
        setRatings((prevRating)=>({
            ...prevRating,
            [section]:{
                ...prevRating[section],
                [name]:value,
            }
        }))
    }
   
    
    const handleSubmit=()=>{
        
        
        console.log(ratings);
        const totalRating=Object.values(ratings)
        .flatMap((sectionData) => Object.values(sectionData))
        .reduce((accumulator,currentValue)=>accumulator+(parseInt(currentValue)||0),0);
        console.log(totalRating);
    }
    const sections = [
        { title: 'Personnel', data: personalData, sectionKey: 'personalData' },
        { title: 'Cleaning & Hygiene', data: cleaningandHygieneData, sectionKey: 'cleaningandHygieneData' },
        { title: 'Site Supervision', data: siteSupervisionData, sectionKey: 'siteSupervisionData' },
        { title: 'Purshase & Stores', data: purshaseandStoresData, sectionKey: 'purshaseandStoresData' },
        { title: 'Controls', data: controlsData, sectionKey: 'controlsData' },
        { title: 'HO and Team Managers', data: hoandTeamManagersData, sectionKey: 'hoandTeamManagersData' }
      ];
      
      return (
        <div>
          {sections.map((section) => (
            <div key={section.sectionKey}>
              <h2>{section.title}</h2>
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
                  onRadioChange={(value) => handleRadioChange(section.sectionKey,data.name,value)}
                />
              ))}
            </div>
          ))}
          <button onClick={handleSubmit}>Submit</button>
        </div>
      );
    };
export default RatingForm
