import axios from "axios";


const getData = async (search_term) => {
    try {
        const params = {
            api_key: "7CA441521C124D01AB9BDB949EFA82C3",
            type: "search",
            search_term: search_term,
            sort_by: "price_low_to_high"
        };
  
        // make the http GET request to RedCircle API
        const response = await axios.get('https://api.redcircleapi.com/request', { params });
    
        // Expected data structure is an array under 'search_results'
        const responseData = response.data.search_results || [];

    
        console.log(responseData);

    
        return responseData;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; 
    }
};


export default getData;