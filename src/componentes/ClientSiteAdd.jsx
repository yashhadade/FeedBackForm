import React, { useState, useEffect } from 'react';
import usePostData from '../API/PostData';

const ClientSiteAdd = () => {
  const { postData, responseData, error, loading, message } =usePostData(`clientSite/new`)
  const [formData, setFormData] = useState({
    clientName: '',
    siteName: '',
    inchargeName: '',
    email: '',
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
     await postData(formData);
    
    console.log(formData);


  };
  useEffect(() => {
    if (responseData) {
    }
  }, [responseData]);


  return (
    <div className='mt-4 max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg '>
     
      <form onSubmit={handleSubmit} className=' items-center space-x-4'> 
        <div className=' flex-col'>
        <div className=' flex-col'>
          <div className=' flex' >
        <div className='flex-1 pr-4 '>
          <label className='block text-sm font-bold  text-black-700'>Client Name :</label>
          <input
            type="text"
            name="clientName"
            value={formData.clientName}
            onChange={handleInputChange}
            placeholder="Enter client name"
            className='mt-1 block w-full px-3 py-2 border border-black-300 rounded-md shadow-sm focus-outline-none 
            focus:ring-black-500 focus:border-black-500' 
          />
        </div>

        <div className='flex-1 pr-4'>
          <label className='block text-sm  font-bold  text-black-700'>Site Name :</label>
          <input
            type="text"
            name="siteName"
            value={formData.siteName}
            onChange={handleInputChange}
            placeholder="Enter site name"
            className='mt-1 block w-full px-3 py-2 border border-black-300 rounded-md shadow-sm focus-outline-none 
            focus:ring-black-500 focus:border-black-500'
          />
        </div>
        </div >
        <div className='flex mt-2'>
        <div className='flex-1 pr-4'>
          <label className='block text-sm font-bold  text-black-700'>Incharge Name :</label>
          <input
            type="text"
            name="inchargeName"
            value={formData.inchargeName}
            onChange={handleInputChange}
            placeholder="Enter incharge name"
            className='mt-1 block w-full px-3 py-2 border border-black-300 rounded-md shadow-sm focus-outline-none 
            focus:ring-black-500 focus:border-black-500'
          />
        </div>

        <div className='flex-1 pr-4'> 
          <label className='block text-sm font-bold text-black-700'>Email :</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter email"
             className='mt-1 block w-full px-3 py-2 border border-black-300 rounded-md shadow-sm focus-outline-none 
            focus:ring-black-500 focus:border-black-500'
          />
        </div>
        </div>
       </div>
       <div className=' flex'>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {message && <p style={{ color: "green" }}>{message}</p>}
        </div>
        <div className='flex justify-center pt-8'>
          <button
            type="submit" onClick={handleSubmit} disabled={loading} 
            className=' flex bg-sky-700 text-white py-2 px-6 rounded-full shadow-md
             hover:bg-sky-500 transition duration-300' >{loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
      </form>
    </div>
  );
};

export default ClientSiteAdd;


