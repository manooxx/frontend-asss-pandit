import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const LoginPage = () => {
  const [phone, setPhone] = useState('')
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://test.backend.urbanoinfotech.com/api/v1/send-otp', {
        "contact_number": phone,
      });
      if (response.status == 200) {
        navigate('/otp', { state: { phone } });
      }
      console.log("Otp sent successfully")
      console.log(response.status)
    } catch (error) {
      console.error('Error sending OTP', error)
    }

  }

  return (

    <div className='relative w-full h-screen overflow-hidden '>

<div className='absolute top-36 right-20 md:right-80 md:top-40  z-50  '>
        <h2 className='text-xl text-white md:text-black md:text-4xl mb-2'>
        पूजा पाठ हो या अनुष्ठान,

        </h2>
       <p className='text-xl text-white md:text-black  md:text-4xl'> <span className='text-red-500 '>पंडित</span> मिलना हुआ आसान।  </p>
      </div>


      <div className='w-full rounded-lg px-2  flex justify-between items-center fixed top-1 border bg-red-600 h-12 z-40'>
        <div className='border m-2 rounded-full bg-white'>
          <img className='w-10 h-10' src="https://s3-alpha-sig.figma.com/img/6c85/cb8f/85b58141bd48f98fb066904cca579519?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T98BcLbcitKEFgswX3Uewxm1nFuQbc4iBcIrE8xT3XWMDrnkjhT-9QOtY7UcZ64d-~6oPwqo27yvO1CHIrIr0pc8sV4X-C1-gg~P~kbk1NguKUkFdzk3CTiRwEHpRQ2rMbxKqirVz3CGnbE8J6F4UmEqcJ7OLicG5li3OLET8o1bWD06g1h2G74z1yPMhyYWkAQCFiowO~rgfvuy2cFjU8JMNBvM~JFjxHpHtClgRf8ALE08E8qjp2Ji-N0vN86LyZf0z4efqaxQFr8LaJlmj~DNz0xd1CNtEDbxrizxMhttjey64XMYLmMRm2VRFKaLMcm3MB1dBpwnCwx0tns4CA__" alt="" />
        </div>

        <p className='text-white  md:pr-12 text-sm cursor-pointer hover:underline'>Don't have account?</p>

      </div>


      <div className='hidden md:block w-1/2 absolute right-0 top-20 z-40'>
        <img src="https://s3-alpha-sig.figma.com/img/3728/a488/6b91537a04814f17c6a4ef090f299bdf?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JLiCJlWRaBW1RlPULusgAsp~XFYsNNnB-82bLA79XX~Hk23aiHmkXEQo9CaY8j8XxXeJim6EBHJxyZ35GFM8SvQNHXG3m2Q1qk2oNsczPXFOiPv7CACt6pLs9Cwy614SKBS5cdHjFgCjvFyrn6IP3tIwP2-SQffqUJyWQm2nzmWKTS2DNp~TWbtHGYyVt2rGnUUrmXtcf7iIHdQcoKzcBBO5WvGPbIc1htrc5w-xpepKmk1TWL-A~vzmp5Byj7L~nkmkMyoHlYglJURg4VcAL6lu32NHP~liWaw7GmabufgP-FZ6w6wHLnZ9siaxM05TmBs38QT5BmG3~Lih0q0q-Q__" alt="" />
      </div>
      <div className='hidden md:block w-1/2 absolute right-20 top-40 z-20'>
        <img src="https://s3-alpha-sig.figma.com/img/8995/10f6/5efd349079a91edc875a4766c9f16ae8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fd-UHyBxHgKqTau-cGaCiGmHdXN8ulsa3Q1NzLPOiFEzWS-vae-99Ntu4PU~TvpqIX5ac4kBU5gFRyT~gQeaKclTP1dXk4KMmQAbUbrs56cZFNSeMW2to9lx8XJuUjAkkUpxQGL42J0mWPgmtdUIZgSmllQI3fb~VL5VkO9TMlzoGgGps-Z~a4rUN3TGIlIfTFZGBV99t4XKODMrcXWEJgoKQRxernto1FKh36-df4ecm5XkGDPZViBrIfPaz1cFxEOPQjDIKNYSyJ8HIGBLBakYhtt9WDucy4tC~BSAJ7SM1K09xZVvxOoylLKvyc~JbepN2ottFixRytIsjaJJgw__" alt="" />
      </div>




      <div className='relative  md:w-5/12 h-screen  bg-slate-400 z-30'>
        <img className='h-screen object-cover opacity-20' src="https://s3-alpha-sig.figma.com/img/9263/7f09/85a06cb9bd0b962f4c2c5fd0d86bf79f?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SoIKhpQO1FHAOpqHB9ONxisqsu77JJgSPPKh9oBbPBH3LLBPt-5cdQ0pbdIww4y9uOwfdEeJavsZO2i~GvRGenAVjZCJFqs-c2gQg4cFyr0oMhBNsPcEI-7uERz4JIp~XfrkaVbV4vk0Sxf1DJwCwAmUcm7v4sTMSYjZK1j-cvZG-8eycjoSQlh5e3XOJ64mtGdGwhOiUZ5uf6~aPMpI4ncsC0T7NozfaumeVO8GB6w9gu0-A9S-ub2MGaafIgUJobRN4gfLL8akuW-flq16bx86N~gfcve1j9Lnm5D88-OWCcfZDg-ptBxw1jHdih4twangfy6h09tUuobmKjHTxw__" alt="" />

        <div className='absolute  w-7/12 top-1/3 left-20 md:left-28 flex flex-col gap-4 md:gap-8'>
          <h1 className='text-4xl text-white md:text-slate-900 font-bold'>
            Log In
          </h1>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-3 text-sm font-semibold'>
              <h4 className= 'text-white md:text-slate-800' >
                Enter Mobile No.
              </h4>

              <input className='h-8 rounded px-3 text-sm outline-none mb-8 shadow-lg' onChange={(e) => setPhone(e.target.value)} type="text" placeholder='Mobile no.' />
            </div>

            <button className=' h-7 w-full rounded bg-red-600 text-white text-sm hover:bg-red-700 duration-300 hover:shadow-lg ' type='submit'>
              Submit
            </button>
          </form>

        </div>
      </div>

     
    </div>
  )
}

export default LoginPage
