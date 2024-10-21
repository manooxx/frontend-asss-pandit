import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import { MdLogin } from "react-icons/md";


const PanditProfilePage = () => {
    const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const navigate = useNavigate();
  const handleSaveProfile = (e) => {
    e.preventDefault();

    localStorage.setItem('panditProfile', JSON.stringify({ firstName, lastName, contact }));
    navigate('/categories');
  };
  const handleBack = ()=>{
    navigate('/');
  }
  return (
   
        <div className="flex w-full justify-center items-center h-screen bg-gray-100">
            <h1 className="text-4xl fixed top-20 z-50 ">Pandit Profile</h1>
            <img src="" alt="" />


<div className='w-full rounded-lg px-2  flex justify-between items-center fixed top-1 border bg-red-600 h-12 z-40'>
        <div className='border m-2 rounded-full bg-white'>
          <img className='w-10 h-10' src="https://s3-alpha-sig.figma.com/img/6c85/cb8f/85b58141bd48f98fb066904cca579519?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T98BcLbcitKEFgswX3Uewxm1nFuQbc4iBcIrE8xT3XWMDrnkjhT-9QOtY7UcZ64d-~6oPwqo27yvO1CHIrIr0pc8sV4X-C1-gg~P~kbk1NguKUkFdzk3CTiRwEHpRQ2rMbxKqirVz3CGnbE8J6F4UmEqcJ7OLicG5li3OLET8o1bWD06g1h2G74z1yPMhyYWkAQCFiowO~rgfvuy2cFjU8JMNBvM~JFjxHpHtClgRf8ALE08E8qjp2Ji-N0vN86LyZf0z4efqaxQFr8LaJlmj~DNz0xd1CNtEDbxrizxMhttjey64XMYLmMRm2VRFKaLMcm3MB1dBpwnCwx0tns4CA__" alt="" />
       
        </div>
        <div>
        <MdLogin className='text-xl text-white cursor-pointer'/>

        </div>
        <div className='fixed top-[75px] left-2 text-xl  cursor-pointer '>
      <IoMdArrowBack onClick={handleBack} />
      </div>
      
        
      </div>
            
            <div>
                
                <img className= 'fixed  drop-shadow-xl  md:w-[1200px] h-[690px] md:h-[550px] top-0 left-0 z-30' src="./Images/final.png" alt="" />
                <img className='fixed opacity-70 right-[0px] top-[440px]  md:right-[-190px] md:top-[-100px] z-10' src="https://s3-alpha-sig.figma.com/img/8995/10f6/5efd349079a91edc875a4766c9f16ae8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fd-UHyBxHgKqTau-cGaCiGmHdXN8ulsa3Q1NzLPOiFEzWS-vae-99Ntu4PU~TvpqIX5ac4kBU5gFRyT~gQeaKclTP1dXk4KMmQAbUbrs56cZFNSeMW2to9lx8XJuUjAkkUpxQGL42J0mWPgmtdUIZgSmllQI3fb~VL5VkO9TMlzoGgGps-Z~a4rUN3TGIlIfTFZGBV99t4XKODMrcXWEJgoKQRxernto1FKh36-df4ecm5XkGDPZViBrIfPaz1cFxEOPQjDIKNYSyJ8HIGBLBakYhtt9WDucy4tC~BSAJ7SM1K09xZVvxOoylLKvyc~JbepN2ottFixRytIsjaJJgw__" alt="" />
            </div>
            
          <div className=" flex flex-col fixed justify-center items-center   md:top-[100px] p-6 rounded  w-96 z-30 gap-3">

            <div className='w-20 rounded-full  drop-shadow-xl'>
              <img className='rounded-full object-cover' src="https://s3-alpha-sig.figma.com/img/3b4a/d73b/b44e8d200d35ff83994d863d6f4ff3ad?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OJkKUltckUxGQVADwFuamGprMx~NqiXzXnsqHMrMFI5d0OnNpvqmfKdn0KdJUiuoUop-LVsB2ct8CrBD-6itPWWZyMU3ydiPuRPuW8YzVUNPOFEhq2AbIjK90HpsNp-7qVy4FjUssURACscOn4tr-bEn7jRJusQzVEtQOidJaTO52f19fSUDdi5Vr3-dXhjlKvRxTAFpMO7aud1N9r26uHifi6BoFa0LDkEjYMbBBlVEFqZcz5UfmX6PDh2rPYGk4QqQYKiWFMe2mdRSB1lOlAhLas3Lsh2ZpkI0sF8uc7uA~UjYGniee9soEiqTlx6Ou7DtbCFJkIbh0k4rk8aM4g__" alt="" />
            </div>
            
            <form className='flex flex-col gap-1' onSubmit={handleSaveProfile}>
  <label htmlFor="firstName" className="font-semibold">First Name</label>
  <input
    type="text"
    id="firstName"
    placeholder="First Name"
    value={firstName}
    onChange={(e) => setFirstName(e.target.value)}
    className="w-[290px] md:w-[300px] px-2 p-1 outline-none border border-black rounded"
  />
  
  <label htmlFor="lastName" className="font-semibold">Last Name</label>
  <input
    type="text"
    id="lastName"
    placeholder="Last Name"
    value={lastName}
    onChange={(e) => setLastName(e.target.value)}
    className="w-[290px] md:w-[300px] px-2 p-1 outline-none border border-black rounded"
  />
  
  <label htmlFor="contact" className="font-semibold">Contact</label>
  <input
    type="text"
    id="contact"
    placeholder="Contact"
    value={contact}
    onChange={(e) => setContact(e.target.value)}
    className="w-[290px] md:w-[300px] border-black px-2 p-1 outline-none border rounded"
  />
  
  <button type="submit" className="h-7 w-full rounded bg-red-600 text-white text-sm hover:bg-red-700 duration-300 hover:shadow-lg">
    Save Profile
  </button>
</form>

          </div>
        </div>
      );
    };
    
    export default PanditProfilePage;
    