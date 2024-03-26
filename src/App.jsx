import { useState,useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import Home from './pages/Home';
import About from './pages/About';
import { ProductResults } from './pages/ProductResults';
import ProductPage from './pages/ProductPage';
import { Budget } from './pages/Budget';
import BudgetWidget from './components/BudgetWidget';

import { fetchData } from './util/bargainSever';



function App() {
  const [open, setOpen] = useState(false);

  // fetching Bargain data 
  useEffect(() => {
    fetchData();
  },[])

  return (
    <>
      <Provider store={store} >
        {/* <Nav /> */}
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product_results' element={<ProductResults />} />
              <Route path='/about' element={<About />} />
              <Route path='/Product' element={<ProductPage />} />
              <Route path= '/budget' element={<Budget />} />
            </Routes>
        </BrowserRouter>
        <BudgetWidget />
      </Provider>
    </>
  )
}

export default App
