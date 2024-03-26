import {useState, useEffect} from 'react';
import Nav from '../components/Nav';
import BudgetWidget from '../components/BudgetWidget';
import { BudgetItems } from '../components/BudgetItems.jsx';
import getData from '../util/server.js'
import RemainingItems from '../components/RemainingItems.jsx';




// Landing Page for Product search?
export const ProductResults = () => {
  const [products, setProducts] = useState([]);
  // const [wmProduct, setWmProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("products updated:", products);
  }, [products]);

  const searchTarget = async (search_term) => {
    setLoading(true);
    setError(null);

    console.log(`Searching Target with ${search_term}`);

    try {
      const data = await getData(search_term);
      // const wm_data = await wmData(search_term);
      // TODO: add Walmart search
      setProducts(data);
      // setWmProduct(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  


  return (
    <div className='relative'>
      <Nav searchTarget={searchTarget} showSearchBar={true} />
      {/* <BudgetWidget /> */}
      <BudgetItems products={products}/>
      <RemainingItems products={products}/>
    </div>
  )
};