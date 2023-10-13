// import React from 'react';

// export default function LoginForm() {

//   const [formData, setFormData] = React.useState({
//     password: '',
//     remember: "true",
//     email:"" // Change the initial value to a boolean
//   });



//  function handleChange(event) {
//   const { name, value, type, checked } = event.target;

//   setFormData(prevFormData => {
//     return {
//       ...prevFormData,
//       // [name]: type === 'checkbox' ? checked : type === 'text' ? value : prevFormData[name]
//     };
//   });
// }


//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(formData);
//   }

//   return (
//     <div className='login-container'>
//       <div className='login-container'>
//         <h1 className='text-2xl'>Log in</h1>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <label className='block mb-1'>Username or email address</label>
//         <input
//         type='text'
//           onChange={handleChange}
//           name='email'
//           value={formData.email}
//           className='border mb-2 p-2'
//         />

//         <label className='block mb-1'>Password</label>
//         <input
//           type='password'
//           name='password'
//           value={formData.password}
//           onChange={handleChange}
//           className='border mb-2 p-2'
//         />

//         {/* <div className='mb-2'> */}
//           <input
//             type='checkbox'
//             id='remember'
//             checked={formData.remember}
//             onChange={handleChange}
//             name='remember'
//             className='mr-2'
//           />
//           <span>Remember me</span>
//         {/* </div> */}

//         <button
//           type='submit'
//           className='py-2 px-4 border border-slate-800 rounded-md bg-blue-500 text-white'
//         >
//           Log in
//         </button>
//         <p className='mt-2'>Lost Your Password?</p>
//       </form>
//     </div>
//   );
// }


import React from "react";

export default function Form(){
    // const [firstName, setFirstName] =React.useState("")
    // function handleChange(event){
        // setFirstName(event.target.value)
    // }
     const [formData, setFormData] =React.useState(
        {firstName:"", lastName: "", 
        email : "" , comments : "",  
        isBirthDay:"true",
        employment : "",
        favColor: ""
    }
     )

    
     function handleChange(event){
        const {name, value, type,checked} = event.target
        
        setFormData(prevFormData =>{
          return  {
                ...prevFormData,
                [name]: type === "checkbox" ?  checked : value 
                // [event.target.name]: event.target.value
            }})
     }

     function handleSubmit(event){
        event.preventDefault()
        //preventDefault  helps to render the page back without refreshing the page 
        // submitToApi(formData)
        console.log(formData)
     }
return(
    <form onSubmit={handleSubmit}>
        <input
        type ="text"
        placeholder= "First Name"
        // onChange={handleChange}
        onChange={handleChange}
        name="firstName"
        // for value u put ur current state.name of the input type , name for input type
        value={formData.firstName}

        />
        <input
        type= "text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
        />
        <input
        type ="text"
        placeholder= "Email"
        // onChange={handleChange}
        onChange={handleChange}
        name="email"
        value={formData.email}
        />
        <textarea 
        placeholder="comments"
        onChange={handleChange}
        name="comments"
        value={formData.comments}
        />
        <input 
        type="checkbox" 
        id = "isBirthDay"
        checked= {formData.isBirthDay}
        onChange={handleChange}
        name="isBirthDay"
        />
        <label htmlFor="isBirthDay" >Is it Your birthday?</label>
        <br />

        <fieldset>
            <legend> Current Employment State</legend>

           <input
            type="radio"
            id="unemployed"
            value="unemployed"
            name= "employment"
            onChange={handleChange}
            checked={formData.employment === "unemployed"}
            
            />
            <label html for ="unemployed">Unemployed</label>
            <br />

            <input
            type="radio"
            id="part-time"
            value="part-time"
            name= "employment"
            onChange={handleChange}
            checked={formData.employment === "part-time"}
            />
            <label html for ="part-time">Part Time</label>
            <br />

            <input
            type="radio"
            id="full-time"
            value="full-time"
            name= "employment"
            onChange={handleChange}
            checked={formData.employment === "full-time"}
            />
            <label html for ="full-time">Full-Time</label>
            <br />
        </fieldset>
<br />
<label htmlFor="favColor">What is your Favorite Color?</label>
<br />
<select 
id="favColor"
value={formData.favColor}
onChange={handleChange}
name="favColor"
>
<option value ="">--Choose--</option>
    <option value ="red">Red</option>
    <option value ="blue">Blue</option>
    <option value ="green">Green</option>
</select> 
<br/>
<br/>

 <button>Submit</button>

    </form>
)
    }
