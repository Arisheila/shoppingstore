import { useAuth } from "../context/authContext";
import { testRequest } from "../services/authServices";
import Header from "./header/LoginHeader";
import Banner from "./banner/LoginBanner";

export default function Dashboard() {
  const { signout } = useAuth();

  const handleTestRequest = async () => {
    await testRequest();
  };

  return (
    <>
     <Header/>
      
      <Banner/>

      <h1>Welcome to the Dashboard ! </h1>

     <button style={{color:"white", backgroundColor:"blue" , marginRight:"20px"}}onClick={handleTestRequest}>Test Request</button>

      <button style={{color:"white", backgroundColor:"blue"}}onClick={() => signout()}>Log out</button> 
    </>
  );
}
