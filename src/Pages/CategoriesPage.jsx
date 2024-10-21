import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import { MdLogin } from "react-icons/md";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get('https://test.backend.urbanoinfotech.com/api/v1/category', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
    
        setCategories(response.data.results.data); 
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    
    fetchCategories();
  }, []);

  const handleSelectCategory = () => {
    if (selectedCategory) {
      localStorage.setItem('selectedCategory', selectedCategory);
      navigate('/services');
    }
  };
  const handleBack = ()=>{
    navigate('/pandit-profile');
  }

  return (
    <div className="p-6 w-full relative overflow-hidden  flex flex-col justify-center items-center py-16 ">

      
        <div className='w-full rounded-lg px-2  flex justify-between items-center  fixed top-1 border bg-red-600 h-12 z-50'>
           <div className='border m-2 rounded-full bg-white'>
           <img className='w-10 h-10   ' src="https://s3-alpha-sig.figma.com/img/6c85/cb8f/85b58141bd48f98fb066904cca579519?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T98BcLbcitKEFgswX3Uewxm1nFuQbc4iBcIrE8xT3XWMDrnkjhT-9QOtY7UcZ64d-~6oPwqo27yvO1CHIrIr0pc8sV4X-C1-gg~P~kbk1NguKUkFdzk3CTiRwEHpRQ2rMbxKqirVz3CGnbE8J6F4UmEqcJ7OLicG5li3OLET8o1bWD06g1h2G74z1yPMhyYWkAQCFiowO~rgfvuy2cFjU8JMNBvM~JFjxHpHtClgRf8ALE08E8qjp2Ji-N0vN86LyZf0z4efqaxQFr8LaJlmj~DNz0xd1CNtEDbxrizxMhttjey64XMYLmMRm2VRFKaLMcm3MB1dBpwnCwx0tns4CA__" alt="" />
        
           </div>
           <div>
        <MdLogin className='text-xl text-white cursor-pointer'/>

        </div>
           </div>
           <div className='fixed top-[75px] left-2 text-xl  z-30 cursor-pointer '>
      <IoMdArrowBack onClick={handleBack} />
      </div>

      <div className='w-64 absolute left-[-120px] top-16 z-10'>
        <img src="https://s3-alpha-sig.figma.com/img/8995/10f6/5efd349079a91edc875a4766c9f16ae8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fd-UHyBxHgKqTau-cGaCiGmHdXN8ulsa3Q1NzLPOiFEzWS-vae-99Ntu4PU~TvpqIX5ac4kBU5gFRyT~gQeaKclTP1dXk4KMmQAbUbrs56cZFNSeMW2to9lx8XJuUjAkkUpxQGL42J0mWPgmtdUIZgSmllQI3fb~VL5VkO9TMlzoGgGps-Z~a4rUN3TGIlIfTFZGBV99t4XKODMrcXWEJgoKQRxernto1FKh36-df4ecm5XkGDPZViBrIfPaz1cFxEOPQjDIKNYSyJ8HIGBLBakYhtt9WDucy4tC~BSAJ7SM1K09xZVvxOoylLKvyc~JbepN2ottFixRytIsjaJJgw__" alt="" />
     </div>
     <div className='w-1/2 absolute right-[-250px] bottom-10 z-10'>
        <img src="https://s3-alpha-sig.figma.com/img/8995/10f6/5efd349079a91edc875a4766c9f16ae8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fd-UHyBxHgKqTau-cGaCiGmHdXN8ulsa3Q1NzLPOiFEzWS-vae-99Ntu4PU~TvpqIX5ac4kBU5gFRyT~gQeaKclTP1dXk4KMmQAbUbrs56cZFNSeMW2to9lx8XJuUjAkkUpxQGL42J0mWPgmtdUIZgSmllQI3fb~VL5VkO9TMlzoGgGps-Z~a4rUN3TGIlIfTFZGBV99t4XKODMrcXWEJgoKQRxernto1FKh36-df4ecm5XkGDPZViBrIfPaz1cFxEOPQjDIKNYSyJ8HIGBLBakYhtt9WDucy4tC~BSAJ7SM1K09xZVvxOoylLKvyc~JbepN2ottFixRytIsjaJJgw__" alt="" />
     </div>

      <h1 className="text-xl md:text-4xl font-semibold mb-10 z-30">Select a Category</h1>
      <ul className='grid md:grid-cols-2 gap-4 mb-7  z-30 '>
        {categories.map((category) => (
          <li
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`mb-2 bg-white p-2 z-30 shadow-md hover:shadow-xl duration-300 border rounded-lg  w-full flex items-center cursor-pointer ${selectedCategory === category.id ? 'border-1 border-red-600' : ''}`}
          >
           
            <img  src='https://s3-alpha-sig.figma.com/img/f9d3/d97a/9ce99316ef414376f3014b3de31e162b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RReaZUti34qOqzHmwZOzYzzA6gJ6SUdrhkujGwYYxy0xp5n3yS~dpBjSXTcDhFD38mwPjYfj6RSbwPlDdh7ZdgnkALpli3yYgZCJCzCbwgH0mpptaUG1KpygIK3Hr6dDy69tKGzjGUajRKfr0MPkB3eUaTq8eMDY5~ogbcWcVwhQBbuFauDQ3vG94~AHK8nntJ9KJ8DXWCDZ~yqtew37iJ1lzjbbMd15enB6R7By~mqLQp8dDuHT85Vsrk2yTfE7bFpBUr~8LisueReh7yw4p~vb~tRIJ1PYkA56a5RAdTBBG-ANw-W24Neyb4yaSY4zM0n3~PfPusr2WLgpUUHEBg__' alt={category.name} className="w-1/2 rounded-lg object-cover h-36 mb-2" />
           
            
           <div className='w-1/2 p-2 px-5 flex z-30 flex-col gap-2'>
           <h2 className="font-semibold text-sm">{category.name} <span className='font-md text-slate-600 text-xs'>({category.name_local_lang})</span></h2>
           <p className='text-xs text-slate-800 font-semibold'>{category.description}</p>
           </div>
          </li>
        ))}
      </ul>
      <button 
        onClick={handleSelectCategory} 
        className="h-7 z-30 rounded bg-red-600 text-white text-sm hover:bg-red-700 duration-300 hover:shadow-lg w-1/3"
        disabled={!selectedCategory} 
      >
         Select Services
      </button>
    </div>
  );
};

export default CategoriesPage;
