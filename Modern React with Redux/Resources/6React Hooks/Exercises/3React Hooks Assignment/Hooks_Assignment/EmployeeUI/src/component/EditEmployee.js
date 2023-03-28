import React , { useState}from 'react';
import axios from 'axios';

function EditEmployee(props) {
    // Use below variable accordingly
    const data = props.props;

    // Defining state
    // Use below state variables accordingly
    const [name,setName] = useState(data.name);
    const [skill,setSkill] = useState(data.skill);
    const [contactNo,setContactNo] = useState(data.contactNo);
    const [department,setDepartment] = useState(data.department);


    // Do the axios put request here
    // Call the function once user clicks the Update button
    // Prevent the page from getting submitted
    // Populate the value of the form field to the formDetails object 
    //     - use key as id,name,skill,contactNo,department
    //     - use value as => id and name to be remain same as default, other fields has be updated from their respective state variables when user fills the form
    // Do axios put request to url http://localhost:3001/data/'+data.id passing formDetails obj 
    // If successfull response Display alert with message as 'Data Updated , Kindly check'
    // If error console the error
    const updateDetails = (e)=>{}

    return (
        <div className='container-fluid'>
            <h1 className='text-center display-4'>Edit Details for ID: &nbsp;{data.id}</h1>
            <hr/>
            <div className='row'>
                <div className='col-md-4 offset-md-4'>
                    <form>
                        {/* Create the form here
                        Use appropriate state variables to populate the respective inout fields
                        Name filed should be disabled by default
                        Call updateDetails function on click of a button */}
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditEmployee
