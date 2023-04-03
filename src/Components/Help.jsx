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
      <header>
          <h1>Help</h1>
      </header>
      <div className='form-heading'>
        <h2>Raise Support</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit} >
        
        <div className='align-div'>
          <label> Name
            <input 
              type="text" 
              value={name} 
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
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
              Placeholder="Website Link"
              required
            />
          </label>
        </div>
        <br />
        <div className='job-title-div'>
          <label className='align-job-title'>
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
        <br/>
        <div className='align-div'>
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
          <br/>
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
        <br/>
        <div className='align-div' >
          <label>
            Job Location
            <input 
              type="text" 
              value={jobLocation} 
              onChange={(event) => setJobLocation(event.target.value)} 
              placeholder="Location"
              required
            />
          </label>
          <br/>
          <label>
            Salary Range
            <input 
              type="text" 
              value={salaryRange} 
              onChange={(event) => setSalaryRange(event.target.value)}
              placeholder="Salary Range"
              required  
            />
          </label>
        </div>
        <br />
        <div className='align-div'>
          <label>
            Experience
            <input 
              type="text" 
              value={experience} 
              onChange={(event) => setExperience(event.target.value)} 
              placeholder="Experience"
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
              required
            />
          </label>
        </div>
        <br />
        <div className='align-btn'>
          <button type="submit" className='sbmt-btn'>Submit</button>
        </div>
      </form>
      </div>
    </>
  );
};

export default Help;
