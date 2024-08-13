import React from 'react'
import { mbaksara1 } from '../assets'

const BlogContent = () => {

    const blog={
        "id":1,
        "title":"Day's out",
        "desc":"where should we go next?",
        "coverImg" : mbaksara1,
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, impedit! Harum alias at voluptatem aspernatur hic nulla exercitationem magnam obcaecati, voluptatum optio praesentium velit nesciunt nam adipisci! Ducimus dolorem fuga laborum. Maxime commodi expedita atque maiores, facilis vel eos fugiat!'
        
    }

  return (
    <div className='w-full pb-10 bg-[#f9f9f9]'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1 gap-x-8 gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>

                <div className='col-span-2 gap-x-8 gap-y-8'>
                    <img className='h-56 w-full object-cover' src={blog.coverImg}  />
                    <h1 className='font-bold text-2xl my-1 pt-5'>{blog.title}</h1>
                    <div className='pt-5'><p>{blog.content}</p></div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default BlogContent