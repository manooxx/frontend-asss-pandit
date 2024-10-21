import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import { MdLogin } from "react-icons/md";

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [serviceDetails, setServiceDetails] = useState({}); // Store duration and price for each service
  const [selectedService, setSelectedService] = useState(null); // Track selected service
  const navigate = useNavigate();

  // Fetch services when the component mounts
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get('https://test.backend.urbanoinfotech.com/api/v1/service', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setServices(response.data.results.data || []); // Ensure it’s an array
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    fetchServices();
  }, []);

  // Handle input changes for duration and price for a specific service
  const handleInputChange = (serviceId, field, value) => {
    setServiceDetails((prevDetails) => ({
      ...prevDetails,
      [serviceId]: {
        ...prevDetails[serviceId],
        [field]: value,
      },
    }));
  };

  // Function to handle adding a service
  const handleAddService = async () => {
    if (!selectedService) {
      console.error('Please select a service');
      return;
    }

    const { duration, price } = serviceDetails[selectedService] || {};
    if (!duration || !price) {
      console.error('Please provide both duration and price');
      return;
    }

    const panditProfile = JSON.parse(localStorage.getItem('panditProfile'));
    const selectedCategory = localStorage.getItem('selectedCategory');

    const requestData = {
     
      "category": selectedCategory,
      "service": selectedService,
      "duration": duration,
      "dakshina":price,
    };

    try {
      const token = localStorage.getItem('accessToken');
      await axios.post('https://test.backend.urbanoinfotech.com/api/v1/pandit/service', requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate('/confirmation');
    } catch (error) {
      console.error('Error adding service:', error);
    }
  };
  const handleBack = ()=>{
    navigate('/categories');
  }

  // Check if the selected service has both duration and price filled
  const isAddServiceDisabled = !selectedService || !serviceDetails[selectedService]?.duration || !serviceDetails[selectedService]?.price;

  return (
    <div className="p-6 py-16 relative overflow-hidden  flex flex-col justify-center items-center z-30">
      <div className='w-full rounded-lg px-2  flex justify-between items-center fixed top-1 border bg-red-600 h-12 z-50'>
        <div className='border m-2 rounded-full bg-white'>
          <img className='w-10 h-10' src="https://s3-alpha-sig.figma.com/img/6c85/cb8f/85b58141bd48f98fb066904cca579519?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T98BcLbcitKEFgswX3Uewxm1nFuQbc4iBcIrE8xT3XWMDrnkjhT-9QOtY7UcZ64d-~6oPwqo27yvO1CHIrIr0pc8sV4X-C1-gg~P~kbk1NguKUkFdzk3CTiRwEHpRQ2rMbxKqirVz3CGnbE8J6F4UmEqcJ7OLicG5li3OLET8o1bWD06g1h2G74z1yPMhyYWkAQCFiowO~rgfvuy2cFjU8JMNBvM~JFjxHpHtClgRf8ALE08E8qjp2Ji-N0vN86LyZf0z4efqaxQFr8LaJlmj~DNz0xd1CNtEDbxrizxMhttjey64XMYLmMRm2VRFKaLMcm3MB1dBpwnCwx0tns4CA__" alt="" />
        </div>
        <div>
        <MdLogin className='text-xl text-white cursor-pointer'/>

        </div>
        
      </div>
      <div className='absolute top-[75px] left-2 text-xl  cursor-pointer z-30'>
      <IoMdArrowBack className='' onClick={handleBack} />
      </div>

      <div className='w-64 absolute left-[-120px] top-16 z-10'>
        <img src="https://s3-alpha-sig.figma.com/img/8995/10f6/5efd349079a91edc875a4766c9f16ae8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fd-UHyBxHgKqTau-cGaCiGmHdXN8ulsa3Q1NzLPOiFEzWS-vae-99Ntu4PU~TvpqIX5ac4kBU5gFRyT~gQeaKclTP1dXk4KMmQAbUbrs56cZFNSeMW2to9lx8XJuUjAkkUpxQGL42J0mWPgmtdUIZgSmllQI3fb~VL5VkO9TMlzoGgGps-Z~a4rUN3TGIlIfTFZGBV99t4XKODMrcXWEJgoKQRxernto1FKh36-df4ecm5XkGDPZViBrIfPaz1cFxEOPQjDIKNYSyJ8HIGBLBakYhtt9WDucy4tC~BSAJ7SM1K09xZVvxOoylLKvyc~JbepN2ottFixRytIsjaJJgw__" alt="" />
     </div>
     <div className='w-1/2 absolute right-[-250px] bottom-10 z-10'>
        <img src="https://s3-alpha-sig.figma.com/img/8995/10f6/5efd349079a91edc875a4766c9f16ae8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fd-UHyBxHgKqTau-cGaCiGmHdXN8ulsa3Q1NzLPOiFEzWS-vae-99Ntu4PU~TvpqIX5ac4kBU5gFRyT~gQeaKclTP1dXk4KMmQAbUbrs56cZFNSeMW2to9lx8XJuUjAkkUpxQGL42J0mWPgmtdUIZgSmllQI3fb~VL5VkO9TMlzoGgGps-Z~a4rUN3TGIlIfTFZGBV99t4XKODMrcXWEJgoKQRxernto1FKh36-df4ecm5XkGDPZViBrIfPaz1cFxEOPQjDIKNYSyJ8HIGBLBakYhtt9WDucy4tC~BSAJ7SM1K09xZVvxOoylLKvyc~JbepN2ottFixRytIsjaJJgw__" alt="" />
     </div>
     
      <h1 className="text-4xl font-semibold z-30 mb-16">Select a Service</h1>
      <ul className='grid md:grid-cols-3 gap-3 z-30'>
        {services.length > 0 ? (
          services.map((service) => (
            <li
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`mb-2 p-2 border rounded-lg shadow-md  bg-white ${
                selectedService === service.id ? 'border-red-500' : ''
              }`}
            >
              <div className="flex z-30 items-center justify-center">
                {service.logo_image && (
                  <img
                    src='https://s3-alpha-sig.figma.com/img/f9d3/d97a/9ce99316ef414376f3014b3de31e162b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RReaZUti34qOqzHmwZOzYzzA6gJ6SUdrhkujGwYYxy0xp5n3yS~dpBjSXTcDhFD38mwPjYfj6RSbwPlDdh7ZdgnkALpli3yYgZCJCzCbwgH0mpptaUG1KpygIK3Hr6dDy69tKGzjGUajRKfr0MPkB3eUaTq8eMDY5~ogbcWcVwhQBbuFauDQ3vG94~AHK8nntJ9KJ8DXWCDZ~yqtew37iJ1lzjbbMd15enB6R7By~mqLQp8dDuHT85Vsrk2yTfE7bFpBUr~8LisueReh7yw4p~vb~tRIJ1PYkA56a5RAdTBBG-ANw-W24Neyb4yaSY4zM0n3~PfPusr2WLgpUUHEBg__'
                    alt={service.name}
                    className="w-1/2 h-32 rounded-lg"
                  />
                )}
                <div className='px-3 z-30 flex flex-col gap-2'>
                  <div>
                    <h2 className="text-sm font-semibold">{service.name}</h2>
                    <p className='text-xs text-slate-600'>({service.name_local_lang})</p>
                  </div>
                  <div>
                    {/* Duration input */}
                    <input
                      type="text"
                      placeholder="Duration"
                      value={serviceDetails[service.id]?.duration || ''}
                      onChange={(e) =>
                        handleInputChange(service.id, 'duration', e.target.value)
                      }
                      className="w-full my-1 outline-none px-2 text-sm border border-gray-300 rounded"
                    />
                    {/* Price input */}
                    <input
                      type="text"
                      placeholder="Price"
                      value={serviceDetails[service.id]?.price || ''}
                      onChange={(e) =>
                        handleInputChange(service.id, 'price', e.target.value)
                      }
                      className="w-full outline-none my-1 px-2 text-sm border border-gray-300 rounded"
                    />
                    <div>
                      <button className='border border-red-400 rounded-md w-20 h-5 flex justify-center items-center text-xs text-semibold text-red-400 hover:bg-red-500 hover:text-white duration-300 hover:shadow-lg'>
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p>No services available</p>
        )}
      </ul>

      {/* Add Service Button */}
      <button
        onClick={handleAddService}
        disabled={isAddServiceDisabled} // Disable button if conditions are not met
        className={`h-8 z-30 flex justify-center items-center fixed  md:bottom-10 rounded-lg text-white text-sm duration-300 w-1/3 ${
          isAddServiceDisabled
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-red-600 hover:bg-red-700 hover:shadow-lg'
        }`}
      >
        Add Service
      </button>
    </div>
  );
};

export default ServicesPage;
