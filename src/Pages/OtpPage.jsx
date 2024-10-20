import React, {useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'



const OtpPage = () => {
    
    const [otp, setOtp] = useState('')

    const location = useLocation()
    
    const navigate = useNavigate();

    const phone = location.state.phone;


const handleSubmit = async(e)=>{
    e.preventDefault();

    try{
        console.log(phone)
        const response = await axios.post('https://test.backend.urbanoinfotech.com/api/v1/pandit-login', {
           "contact_number": phone,
           "otp": otp,

        });
        if (response.status == 200){
            const accessToken = response.data.results.access
            const refreshToken = response.data.results.refresh

            localStorage.setItem('accessToken', accessToken)
            localStorage.setItem('refreshToken', refreshToken)

            console.log('Tokens stored successfully', accessToken)
            navigate('/pandit-profile')
        }

        console.log("OTP sent successfully")
    }catch (error){
        console.error('Error sending OTP', error)
    }

}
  return (
    <div className='relative w-full h-screen'>

<div className='w-full rounded-lg px-2  flex justify-between items-center fixed top-1 border bg-red-600 h-12 z-30'>
        <div className='border m-2 rounded-full bg-white'>
          <img className='w-10 h-10' src="https://s3-alpha-sig.figma.com/img/6c85/cb8f/85b58141bd48f98fb066904cca579519?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T98BcLbcitKEFgswX3Uewxm1nFuQbc4iBcIrE8xT3XWMDrnkjhT-9QOtY7UcZ64d-~6oPwqo27yvO1CHIrIr0pc8sV4X-C1-gg~P~kbk1NguKUkFdzk3CTiRwEHpRQ2rMbxKqirVz3CGnbE8J6F4UmEqcJ7OLicG5li3OLET8o1bWD06g1h2G74z1yPMhyYWkAQCFiowO~rgfvuy2cFjU8JMNBvM~JFjxHpHtClgRf8ALE08E8qjp2Ji-N0vN86LyZf0z4efqaxQFr8LaJlmj~DNz0xd1CNtEDbxrizxMhttjey64XMYLmMRm2VRFKaLMcm3MB1dBpwnCwx0tns4CA__" alt="" />
        </div>
        <p className='text-white pr-12 text-sm cursor-pointer hover:underline'>Don't have account?</p>
        
      </div>

    <div className='relative w-5/12 h-screen  bg-slate-400'>
    <img className='h-screen object-cover opacity-20' src="https://s3-alpha-sig.figma.com/img/9263/7f09/85a06cb9bd0b962f4c2c5fd0d86bf79f?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SoIKhpQO1FHAOpqHB9ONxisqsu77JJgSPPKh9oBbPBH3LLBPt-5cdQ0pbdIww4y9uOwfdEeJavsZO2i~GvRGenAVjZCJFqs-c2gQg4cFyr0oMhBNsPcEI-7uERz4JIp~XfrkaVbV4vk0Sxf1DJwCwAmUcm7v4sTMSYjZK1j-cvZG-8eycjoSQlh5e3XOJ64mtGdGwhOiUZ5uf6~aPMpI4ncsC0T7NozfaumeVO8GB6w9gu0-A9S-ub2MGaafIgUJobRN4gfLL8akuW-flq16bx86N~gfcve1j9Lnm5D88-OWCcfZDg-ptBxw1jHdih4twangfy6h09tUuobmKjHTxw__" alt="" />
         
         <div className='absolute  w-7/12 top-1/3 left-28 flex flex-col gap-8'>
           <h1 className='text-4xl text-slate-900 font-bold'>
               Log In
           </h1>
           <form onSubmit={handleSubmit}>
          <div className='flex flex-col  gap-3 text-sm font-semibold'>
          <h4 className='text-slate-800' >
               Enter OTP
           </h4>

           <input className='h-8 rounded px-3 text-sm outline-none shadow-lg' onChange={(e)=> setOtp(e.target.value)}  type="text" placeholder='Value' />
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

export default OtpPage
