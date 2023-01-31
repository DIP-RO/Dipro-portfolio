import React from 'react';
import './Education.css'

const Education = () => {
    return (
        <div>
             <h1 className='text-4xl text-white my-4  font-bold text-center'>Education Qualification</h1>
            <div className='flex justify-evenly ml-12 align-middle'>
           
    
    <div class="education-section">
       <h2 className='text-3xl text-white my-4  font-bold'>Education</h2>
      <div class="education-item mt-5">
      <h3 className='text-xl text-white my-4 '>B.S.C in Computer Science and Engeneering, Daffodil International University</h3>
                        <p class="education-date">2022-Present</p>
                        </div>
       <div class="education-item">
    <h3 className='text-xl text-white my-4 '>Higher Secondary School Certificate,Mahilara Degree College </h3>
    <p class="education-date">2018-2020</p>
    <p class="education-description">GPA : A+</p>
  </div>
 

            </div>



            <div class="qualification-section">
  <h2 className='text-3xl text-white my-4  font-bold'>Professional Certification</h2>
  <div class="qualification-item mt-5">
    <h3 className='text-xl text-white my-4 '>Complete Web Development Course with Jhankar Mahbub, Programming-Hero</h3>
    <p class="qualification-date">Duration: 7 Months</p>
    
  </div>
  <div class="qualification-item">
    <h3 className='text-xl text-white my-4 '>Digital-Marketing, ABCL-IT</h3>
    <p class="qualification-date">Duration: 6 Months</p>
                </div>
                </div>
   </div>
</div> 
  )};


export default Education;