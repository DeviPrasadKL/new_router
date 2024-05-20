import React, { Suspense } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import axios from 'axios';
import { Button } from 'antd';
import { defer, useLoaderData, Await, Link } from 'react-router-dom';

export default function Home() {

    const { apiData } = useLoaderData();

    return (
        <div className='flex'>
            <Suspense fallback={<p className='text-2xl text-black'>Loading.......</p>}>
                <Await resolve={apiData.data} errorElement={<p>Error Loading posts</p>}>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
                        {
                            apiData.map((ele) => {
                                return (
                                    <div className='m-1 border-2 border-slate-400' key={ele.id} >
                                        <Card key={ele.id} className='flex flex-col justify-between h-full'>
                                            <CardHeader>
                                                <CardTitle>{ele.id}</CardTitle>
                                                <CardDescription>{ele.title}</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <p>{ele.body.slice(0, 90)}...</p>
                                            </CardContent>
                                            <CardFooter>
                                                <Link  className="w-full" to={`${ele.id}`}>
                                                    <Button  className="w-full" type="primary">
                                                        Read
                                                    </Button>
                                                </Link>
                                            </CardFooter>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Await>
            </Suspense>
        </div>
    )
}

export const dataLoader = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return defer({ apiData: res.data })
}