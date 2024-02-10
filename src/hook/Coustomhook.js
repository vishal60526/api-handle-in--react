import axios from 'axios'
import React, { useEffect,useState } from 'react'

function useApi(url){
    const [data, setData] = useState({

    });
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        let finatldata=response.data;
        
        setData({
          "firstName":finatldata.results[0].name.first,
          "lastName":finatldata.results[0].name.last,
          "img":finatldata.results[0].picture.large,
          "gender":finatldata.results[0].gender,
          "phn":finatldata.results[0].phone

        })
      } catch (error) {
      // console.log(error);
      } 

    };

    fetchData();
  }, []);

  return data;
}

export default useApi;
