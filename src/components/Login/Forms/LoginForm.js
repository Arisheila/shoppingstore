/** @format */

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

import React from "react"

export default function Form() {
	// const [firstName, setFirstName] =React.useState("")
	// function handleChange(event){
	// setFirstName(event.target.value)
	// }
	const [formData, setFormData] = React.useState({
		firstName: "",
		lastName: "",
		email: "",
		comments: "",
		isBirthDay: "true",
		employment: "",
		favColor: "",
	})

	function handleChange(event) {
		const { name, value, type, checked } = event.target

		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[name]: type === "checkbox" ? checked : value,
				// [event.target.name]: event.target.value
			}
		})
	}

	function handleSubmit(event) {
		event.preventDefault()
		//preventDefault  helps to render the page back without refreshing the page
		// submitToApi(formData)
		console.log(formData)
	}
	return (
		<>
			<div>
				<h2>Login</h2>
			</div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="username">Username or email address</label>
				<br />
				<input
					type="text"
					placeholder="Email"
					// onChange={handleChange}
					onChange={handleChange}
					name="email"
					value={formData.email}
				/>
				<br />
				<label>Password</label>
				<br />
				<input
					type="text"
					placeholder="password"
					onChange={handleChange}
					name="password"
					value={formData.password}
				/>
				<br />
				<input id="remember-me" type="checkbox" />
				<label htmlFor="remember-me">Remember me</label>
                <br/>

                <button className="py-2 px-4 border border-slate-800 rounded-md bg-blue-500 text-white">
            Submit
          </button>
          
			</form>
		</>
	)
}
