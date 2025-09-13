import ORIGIN from "./URL";

 export const getAllUsers=async(fullname)=>{

const res=await  fetch(`${ORIGIN}/api/search/users?fullname=${fullname}`,{
    method:"GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  })
  
  const data= await res.json();
  return data;
 }