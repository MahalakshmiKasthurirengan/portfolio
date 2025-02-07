import NavBar from '../components/NavBar'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Skills = () => {
  return (
    <>
    <div className='h-[120vh] w-[full] flex flex-col project'>
      <div className='h-[50%] w-[full] flex flex-row project'>
        <div className="h-[100%] w-[50%] project flex flex-col justify-center items-center">
            <h1 className="white text-5xl flex">TECH SKILLS</h1>
            <div className="p-7 h-auto w-[70%] flex justify-center items-center ">
              <div className='skills white'>
                <h2>C</h2>
                <div className='bar'>
                  <div className='c'><span>86%</span></div>
                </div>
                <h2>JAVA</h2>
                <div className='bar'>
                  <div className='java'><span>80%</span></div>
                </div>
                <h2>DBMS</h2>
                <div className='bar'>
                  <div className='dbms'><span>90%</span></div>
                </div>
                <h2>HTML, CSS</h2>
                <div className='bar'>
                  <div className='html'><span>78%</span></div>
                </div>
                <h2>JS, REACT</h2>
                <div className='bar'>
                  <div className='js'><span>68%</span></div>
                </div>
              </div>
          </div>
        </div>
        <div className="h-[100%] w-[50%]  project flex flex-col justify-center items-center">
            <h1 className="white text-5xl py-3 flex">OTHER SKILLS</h1>
            <div className="p-7 h-auto w-[70%] flex justify-center items-center ">
              <div className='skills white'>
                <h2>TEAM WORK</h2>
                <div className='bar'>
                  <div className='team'><span>90%</span></div>
                </div>
                <h2>PUBLIC RELATIONS</h2>
                <div className='bar'>
                  <div className='public'><span>89%</span></div>
                </div>
                <h2>LEADERSHIP</h2>
                <div className='bar'>
                  <div className='leadership'><span>95%</span></div>
                </div>
                <h2>TIME MANAGEMENT</h2>
                <div className='bar'>
                  <div className='time'><span>80%</span></div>
                </div>
                <h2>CRITICAL THINKING</h2>
                <div className='bar'>
                  <div className='critical'><span>85%</span></div>
                </div>
              </div>
          </div>
    </div>
    </div>
      <div className='h-[50%] w-[full] flex flex-row project'>
        <div className="h-[100%] w-[50%]  project flex flex-col justify-center items-center">
            <h1 className="white text-5xl">HOBBIES</h1>
            <ul className='hobbies'>
              <li className='text-2xl white flex space-x-3 hobbies'><i class="fa-solid fa-book green"></i><span className='space-x-3'>READING BOOKS</span></li>
              <li className='text-2xl white flex space-x-3 hobbies'><i class="fa-solid fa-code green"></i><span className='space-x-3'>CODING</span></li>
              <li className='text-2xl white flex space-x-3 hobbies'><i class="fa-solid fa-pencil green"></i><span className='space-x-3'>DRAWING</span></li>
              <li className='text-2xl white flex space-x-3 hobbies'><i class="fa-regular fa-heart green"></i><span className='space-x-3'>FITNESS AND WELLNESS</span></li>
              <li className='text-2xl white flex space-x-3 hobbies'><i class="fa-solid fa-plane green"></i><span className='space-x-3'>TRAVEL</span></li>
            </ul>
        </div>
        <div className="h-[100%] w-[50%]  project flex flex-col justify-start items-center">
            <h1 className="white text-5xl top-lang">LANGUAGES KNOWN</h1>
            <div className='languages flex'>
              <ul className='languages '>
                  <li className='white text-2xl flex space-x-3 hobbies'><span className='font-extrabold space-x-3 green'>த :</span>:: TAMIL - READ & WRITE</li>
                  <li className='white text-2xl flex space-x-3 hobbies'><span className='font-extrabold space-x-3 green'>A :</span>:: ENGLISH - READ & WRITE</li>
                  <li className='white text-2xl flex space-x-3 hobbies'><span className='font-extrabold space-x-3 green'>ಕ :</span>:: KANNADA - UNDERSTAND</li>
              </ul>

            </div>
    </div>
      </div>
    </div>
    </>
  );
};


export default Skills;