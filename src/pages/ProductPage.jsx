import React from 'react';
import Nav from '../components/Nav';
import BudgetWidget from '../components/BudgetWidget';
import { FocusedProduct } from '../components/FocusedProduct';
import { PriceComparison } from '../components/PriceComparison';

const ProductPage = () => {
  return (
    <div>
        {/* <Nav showSearchBar={true} /> */}
        {/* <BudgetWidget /> */}
        <FocusedProduct />
        <PriceComparison />
    </div>
  )
}

export default ProductPage