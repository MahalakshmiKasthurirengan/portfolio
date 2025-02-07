import React from 'react';
import pic from '../assets/images/profile.jpg'
import proj1 from '../assets/images/project1.png'
import proj2 from '../assets/images/project2.jpg'
import proj3 from '../assets/images/project3.jpg'

const Projects = () => {
  return (
    <div className="h-[92vh] w-full project flex flex-row gap-10 justify-center items-center">
      <div className='cards skill p-5 leading-7'>
      <div className='image-project'>
        <img src={proj1} alt="project 1 - Mind Over Matter" className='h-full w-full'/>
      </div>
        <div className='content-projects'>
          <h1 className='green text-2xl'>MIND OVER MATTER - Empowering the Disability</h1>
          <p className='white'>"Mind Over Matter thrives on strong teamwork,
              with a dedicated group of professionals collaborating to create an inclusive platform. 
            Together, we focus on designing accessible resources that empower individuals with disabilities. 
            Our collective efforts drive innovation and foster a supportive environment for all."</p>
        </div>

      </div>
      <div className='cards skill p-5 leading-7'><div className='image-project'>
        <img src={proj2} alt="project 1 - Mind Over Matter" className='h-full w-full'/>
      </div>
        <div className='content-projects'>
          <h1 className='green text-2xl'>FOOD WASTE MANAGEMENT</h1>
          <p className='white'>Developed a user-friendly front-end application for a food waste management website,
             facilitating efficient food redistribution to orphanages. Designed an intuitive interface to connect 
             donors with orphanages in need, ensuring easy navigation and clear communication. 
            Implemented responsive web design to enhance user experience across devices.</p>
        </div></div>
      <div className='cards skill p-5 leading-7'><div className='image-project'>
        <img src={proj3} alt="project 1 - Mind Over Matter" className='h-full w-full'/>
      </div>
        <div className='content-projects'>
          <h1 className='green text-2xl'>CAR POOLING SYSTEM</h1>
          <p className='white'>Created a carpooling app for team members to promote eco-friendly commuting, 
            allowing users to organize and join carpools efficiently. Developed an intuitive interface with real-time 
            ride scheduling and team collaboration features. 
            Ensured seamless functionality across devices to enhance user convenience.</p>
        </div></div>
      
      
    </div>
  );
};

export default Projects;
