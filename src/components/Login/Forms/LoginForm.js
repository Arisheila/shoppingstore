import React from 'react';

export default function LoginForm() {

  const [formData, setFormData] = React.useState({
    password: '',
    remember: " ",
    email: ''
  });
 
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }



  function handleSubmit(event) {
    event.preventDefault();
    // Add your form submission logic here, e.g., send data to a server
    console.log(formData);
  }

  return (
    <div className="login-container">
      <div className="login-container">
        <h1 className="text-2xl">Log in</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="block mb-1">Username or email address</label>
        <input
          type="text"
          onChange={handleChange}
          name="email"
          value={formData.email}
          className="border mb-2 p-2"
        />

        <label className="block mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="border mb-2 p-2"
        />

        <div className="mb-2">
          <input
            type="checkbox"
            id="remember"
            value={formData.remember}
            onChange={handleChange}
            name="remember"
            className="mr-2"
          />
          <span>Remember me</span>
        </div>

        <button
          type="submit" // This button triggers the form submission
          className="py-2 px-4 border border-slate-800 rounded-md bg-blue-500 text-white"
        >
          Log in
        </button>
        <p className="mt-2">Lost Your Password?</p>
      </form>
    </div>
  );
}
