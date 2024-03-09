import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct, IProductType } from './types.ts';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/v1/' }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], string | void>({
            query: (id) => {
                if (typeof id === 'string') {
                    return `product/${id}`;
                }
                return `product/`;
            },
        }),
        getProductTypes: builder.query<IProductType[], void>({
            query: () => `type_of_product/`,
        }),
        getProductsByType: builder.query<IProduct[], string | number>({
            query: (id) => `product_by_type/${id.toString()}`,
        }),
        getSearchProducts: builder.query<IProduct[], string>({
            query: (searchInput) => `product_search/${searchInput.toString()}`,
        }),
    }),
});

export const { useGetProductsQuery, useGetProductTypesQuery, useGetProductsByTypeQuery, useGetSearchProductsQuery } =
    productApi;
