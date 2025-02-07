import React from 'react'

const Contact = () => {
  return (
    <div className="h-[92vh] w-full project flex flex-col justify-center items-center">
        <h1 className='py-10 text-5xl green'>EDUCATION</h1>
      <div className='h-[30vh] w-[80%] flex flex-row justify-center items-center gap-40'>
        <div className='h-[20vh] w-[40%] flex flex-col justify-center items-center px-14'>
          <ul className='font-semibold white list-disc leading-10'>
          <h1 className='text-2xl space-x-4'><i class="fa-solid fa-graduation-cap green"></i><span>SRI SHAKTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY, COIMBATORE</span></h1>
              <li className='text-1xl mx-6 green'>B.E COMPUTER SCIENCE ENGINEERING</li>
              <li className='text-1xl mx-6 green'>2022- 2026 || GPA : 8.57</li>
          </ul>
        </div>
        <div className='h-[20vh] w-[30%] flex flex-col justify-center items-center px-14'>
          <ul className='font-semibold white list-disc leading-10'>
            <h1 className='text-2xl space-x-4'><i class="fa-solid fa-school green"></i><span>PARIMALAM MATRIC HR SEC SCHOOL, DINNUR, HOSUR</span></h1>
              <li className='text-1xl mx-6 green'>2019 - 2020 || SSLC - 93%</li>
              <li className='text-1xl mx-6 green'>2021- 2022 || HSC - 91.6%</li>
          </ul>
        </div>
      </div>
          <div className='flex flex-col justify-center items-center green text-4xl leading-loose'>GET IN TOUCH WITH ME</div>
      <div className='h-[30%] w-[70%] flex flex-col justify-start items-center py-10 leading-10'>
          <div><a href="https://mahalakshmikasthurirengan.github.io/" target='_blank'>
            <button className='bg-black hover:bg-white green rounded-3xl px-3'>Resume</button></a></div>
           {/* <h1 className='white leading-loose text-1xl space-x-3'><i class="fa-solid fa-signature green"></i></h1> */}
           <h1 className='white leading-loose text-1xl space-x-3'><a href="tel:+91 9566834113" target='_blank'><i class="fa-solid fa-phone green"></i></a><span>+91 9566834113</span></h1>
           <h1 className='white leading-loose text-1xl space-x-3'><a href="mailto:mahalakshmikasthurirengan22@gmail.com" target='_blank'><i class="fa-solid fa-envelope green"></i></a><span>mahalakshmikasthurirengan22@gmail.com</span></h1>
           <h1 className='white leading-loose text-1xl space-x-3'><a href="http://www.linkedin.com/in/mahalakshmi-kasthurirengan" target='_blank'><i class="fa-brands fa-linkedin green"></i></a> <span>http://www.linkedin.com/in/mahalakshmi-kasthurirengan</span></h1>
           <h1 className='white leading-loose text-1xl space-x-3'><a href="https://github.com/MahalakshmiKasthurirengan" target='_blank'><i class="fa-brands fa-github green"></i></a> <span>https://github.com/MahalakshmiKasthurirengan</span></h1>
           <h1 className='white leading-loose text-1xl space-x-3'><i class="fa-solid fa-location-dot green" target='_blank'></i><span>Mathigiri, Hosur, Krishnagiri Dt, TN</span></h1>





      </div>
    </div>
  )
}

export default Contact
