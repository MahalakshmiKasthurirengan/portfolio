import React from 'react'
import NavBar from '../components/NavBar'
import pic from '../assets/images/profile.jpg'
const Profile = () => {
    return (
      <>
    <div className="h-[92vh] w-full m-0 p-0 project flex flex-row flex-nowrap overflow-x-hidden">
        <div className="h-auto w-[60%] px-36 py-72 flex flex-col flex-nowrap">
            <div className='h-auto w-auto text-5xl text-white gap-3 flex leading-snug'>I'm<span className='green leading-snug'>MAHALAKSHMI KASTHURIRENGAN,</span> <br /></div>
            <div className='h-[20rem] w-[50rem] flex flex-col text-2xl text-white'>with
            expertise in database architecture, web design, and front-end development.
            I enjoy combining clean design with efficient code to create digital solutions that are both functional and visually engaging.
            With strong skills in Java, MySQL, and various web technologies,
            I’m always eager to take on new challenges, learn, and grow.
            </div>
            
          </div>
        <div className="p-30 flex justify-end items-center">
          <img src={pic} alt="profile" className='w-[35rem] h-auto m-0 rounded-full'/>
          </div>
      </div>
      </>
    )
}
export default Profile
