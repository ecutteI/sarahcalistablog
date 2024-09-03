import React from 'react'
import { Link } from 'react-router-dom'
import { mbaksara1, mbaksara2, mbaksara3, gallery1, gallery2, gallery3 } from '../assets'

const MoreBlogs = () => {

    const blogs = [
        {
            'id': 1,
            'title': "Day's out",
            'desc': "where should we go next?",
            'coverImg': mbaksara1,
        },
        {
            'id': 2,
            'title': "Bücher",
            'desc': "focusing on staying in the moment",
            'coverImg': mbaksara2,
        },
        {
            'id': 3,
            'title': "Telephone booth",
            'desc': "feeling red🍓.",
            'coverImg': mbaksara3,
        },
        {
            'id': 4,
            'title': "Lorem Ipsum",
            'desc': "Lorem Ipsum",
            'coverImg': gallery1,
        },
        {
            'id': 5,
            'title': "Lorem Ipsum",
            'desc': "Lorem Ipsum",
            'coverImg': gallery2,
        },
        {
            'id': 6,
            'title': "Lorem Ipsum",
            'desc': "Lorem Ipsum",
            'coverImg': gallery3,
        },
    ]

    return (
        <div className='w-full bg-[#f9f9f9] py-[50px]'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black'>

                    {blogs.map((blog)=>
                        <Link to={`/blog/${blog.id}`}>
                            <div className='bg-white rounded-x1 overflow-hidden drop-shadow-md'>
                                <img className='h-56 w-full object-cover' src={blog.coverImg} />
                                <div className='p-8'>
                                    <h3 className='font-bold text-2x1 my-1'>{blog.title}</h3>
                                    <p className='text-gray-600 text-xl'>{blog.desc}</p>
                                </div>
                            </div>
                        </Link>

                    )}

                </div>

            </div>

        </div>
    )
}

export default MoreBlogs