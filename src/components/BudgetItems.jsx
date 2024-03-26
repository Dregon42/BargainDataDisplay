import React from "react";
import Product from "./Product";

export const BudgetItems = ({ products }) => {

    if (!products || products.length === 0) {
        return <div>No products to display.</div>;
    }

    const firstFiveProducts = products.slice(0, 5);

    return (
        <div className='productList rounded-lg mt-10 ml-32 h-[350px] inline-flex justify-center items-center p-8 border border-solid border-[#5c93e5]'>
            {firstFiveProducts.map((product) => {
                return <Product product={product} key={product.position} />;
            })}
        </div>
    );
};

