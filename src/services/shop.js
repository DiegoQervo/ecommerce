import { base_url } from "../database";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
    reducerPath:"shopApi",
    baseQuery:fetchBaseQuery({baseUrl:base_url}),
    endpoints:(builder) => ({
        getCategorias:builder.query({
            query:(category) => `products.json?orderBy="category"&equalTo="${category}"`
        }),
        getOrders:builder.query({
            query:() => "categorias.json"
        }),
    })
})

export const { useGetCategoriasQuery, useGetOrdersQuery } = shopApi  