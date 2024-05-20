import axios from 'axios';
import React, { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'

export default function Details() {

    const post = useLoaderData();

    return (
        <Suspense fallback={<p className='text-2xl text-black'>Loading.......</p>}>
            <Await resolve={post} errorElement={<p>Error Loading posts</p>}>
                {
                    (loadingData) => {
                        return (
                            <>
                                <h1 className='text-2xl'>{loadingData.id}</h1>
                                <p className='text-xl font-semibold'>{loadingData.title}</p>
                                <p>{loadingData.body}</p>
                            </>
                        )
                    }
                }
            </Await>
        </Suspense>
    )
}

export const getPost = async ({ params }) => {
    const id = params.id;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.data
}