import React, { useState } from 'react';
import '../Stylesheets/Help.css';
import swal from 'sweetalert';

const jobTypeOptions = ['Full-time', 'Part-time', 'Contract', 'Internship', 'Freelance'];
const jobCategoryOptions = ['Technology','Engineering', 'Marketing', 'Finance', 'Sales', 'Operations'];

const Help = () => {
  const [name, setName] = useState('');
  const [targetField, setTargetField] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [jobCategory, setJobCategory] = useState(jobCategoryOptions[0]);
  const [jobType, setJobType] = useState(jobTypeOptions[0]);
  const [jobLocation, setJobLocation] = useState('');
  const [salaryRange, setSalaryRange] = useState('');
  const [experience, setExperience] = useState('');
  const [qualification, setQualification] = useState('');
  const bgColor="#FFFFFF";
  
  document.body.style.backgroundColor = bgColor;


  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
     let formValues = {
        name,
        targetField,
        jobTitle,
        jobCategory,
        jobType,
        jobLocation,
        salaryRange,
        experience,
        qualification
     }

     swal({
        title: "We will resolve your issue soon",
        text: "You can see the submitted form values in the console",
        icon: "success",
        button: "Ok",
      });

        console.log(formValues);
        
  };

  return (
    <>
    <header className='header-section'>
        <h1 className='head'>Help</h1>
    </header>

    <div className='form-heading'>
      <h1>Raise Support</h1>
    </div>

    <div className='main-section'>
    <form onSubmit={handleSubmit} >
    
    <div className='align-input'>
    <label>
        Name
        <input 
            type="text" 
            value={name} 
            onChange={(event) => setName(event.target.value)}
            placeholder="Name"
            className='inpt'
            required    
         />
      </label>
      <br />
      <label>
        Target Field
        <input 
            type="url"  
            value={targetField} 
            onChange={(event) => setTargetField(event.target.value)} 
            placeholder="Website Link"
            className='inpt'
            required
        />
      </label>
      </div>

      <br />

      
      <div >
      <label className='job-title'>
        Job Title
        <input 
            type="text" 
            value={jobTitle} 
            onChange={(event) => setJobTitle(event.target.value)} 
            placeholder="Title"
            className='inpt-title'
            required
        />
      </label>
      </div>

      <br />
      <div className='align-input'>
      <label>
        Job Category
      <select id="job-category-select" value={jobCategory} onChange={(e) => setJobCategory(e.target.value)}>
            {jobCategoryOptions.map((option) => (
              <option key={option} value={option} required>
                {option}
            
              </option>
            ))}
        </select>
        </label>
      <br />
      <label>
        Job Type
      
        <select id="job-type-select" value={jobType} onChange={(e) => setJobType(e.target.value)}>
            {jobTypeOptions.map((option) => (
              <option key={option} value={option} required>
                {option}
              </option>
            ))}
        </select>
        </label>
      </div>
      
      <br />
      
      <div className='align-input'>
      <label>
        Job Location
        <input 
            type="text" 
            value={jobLocation} 
            onChange={(event) => setJobLocation(event.target.value)} 
            placeholder="Location"
            className='inpt'
            required
        />
      </label>
      <br />
      <label>
        Salary Range
        <input 
            type="text" 
            value={salaryRange} 
            onChange={(event) => setSalaryRange(event.target.value)}
            placeholder="Salary Range" 
            className='inpt' 
            required  
        />
      </label>
      </div>

      <br />

      <div className='align-input'>
      <label>
        Experience
        <input 
            type="text" 
            value={experience} 
            onChange={(event) => setExperience(event.target.value)} 
            placeholder="Experience"
            className='inpt'
            required
        />
      </label>
      <br />
      <label>
        Qualification
        <input 
            type="text" 
            value={qualification} 
            onChange={(event) => setQualification(event.target.value)} 
            placeholder="Qualification"
            className='inpt'
            required
        />
      </label>
      </div>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
    
    </>

  );
};

export default Help;
