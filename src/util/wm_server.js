import { getJson } from "serpapi";


const wmData = async (query) => {
    try {
      const response = await getJson({
        api_key: "90e28590f54081d77fe7791875f314266693fdd4a2087690eee4ba5552a0c922",
        engine: "walmart",
        query: "coffee"
      });
  
      const searchData = response.organic_results || [];

      console.log(searchData)
  
      return searchData;
    } catch (error) {
      console.error("Error fetching Walmart data:", error);
      throw error; 
    }
  };

  wmData();
  
  export default wmData;