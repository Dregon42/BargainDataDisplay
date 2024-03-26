import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const columns = [
    { field: 'soldby', headerName: 'Sold By', width: 150 },
    { field: 'shipping', headerName: 'Shipping', width: 450, editable: true},
    { field: 'price', headerName: 'Seller Price', width: 150,editable: true},
];

const row =[
    {id: 1, soldby: 'target', shipping: 'Free Shipping', price: '$100.99'}
]

export const PriceComparison = () => {
    return (
        <div className='flex justify-center'>
            <Box sx={{
                height: 400, 
                width: '50%', 
                background: 'lightgray', 
                padding: 5,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <h1 className='text-center font-semibold text-2xl p-5'>Price Comparison</h1>
                <DataGrid columns={columns} rows={row} sx={{background: 'white'}} />
            </Box>
        </div>
    )
};
