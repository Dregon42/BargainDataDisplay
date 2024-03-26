export const fetchData = async () => {
    try {
      const response = await fetch('https://bargain-online-v1.onrender.com/products');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

