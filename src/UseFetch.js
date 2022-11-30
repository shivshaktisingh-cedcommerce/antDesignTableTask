import { useCallback } from "react";

const UseFetch=()=>{
  const extractDataFromApi = useCallback(async(url)=>{ 
      return await fetch(url ).then((res)=>res.json())
  },[])
 
  return [extractDataFromApi];
};

export default UseFetch;
