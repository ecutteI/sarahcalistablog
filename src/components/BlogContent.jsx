import React from 'react'
import { useParams } from 'react-router-dom'
import { mbaksara1,mbaksara2,mbaksara3, gallery1, gallery2, gallery3 } from '../assets'

const BlogContent = () => {

    const {id}=useParams()

    const blogs=[
        {
            'id': 1,
            'title': "Day's out",
            'desc': "where should we go next?",
            'coverImg': mbaksara1,
            'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, impedit! Harum alias at voluptatem aspernatur hic nulla exercitationem magnam obcaecati, voluptatum optio praesentium velit nesciunt nam adipisci! Ducimus dolorem fuga laborum. Maxime commodi expedita atque maiores, facilis vel eos fugiat!'
        },
        {
            'id': 2,
            'title': "Bücher",
            'desc': "focusing on staying in the moment",
            'coverImg': mbaksara2,
            'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, impedit! Harum alias at voluptatem aspernatur hic nulla exercitationem magnam obcaecati, voluptatum optio praesentium velit nesciunt nam adipisci! Ducimus dolorem fuga laborum. Maxime commodi expedita atque maiores, facilis vel eos fugiat!'
        },
        {
            'id': 3,
            'title': "Telephone booth",
            'desc': "feeling red🍓.",
            'coverImg': mbaksara3,
            'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, impedit! Harum alias at voluptatem aspernatur hic nulla exercitationem magnam obcaecati, voluptatum optio praesentium velit nesciunt nam adipisci! Ducimus dolorem fuga laborum. Maxime commodi expedita atque maiores, facilis vel eos fugiat!'
        },
        {
            'id': 4,
            'title': "Lorem Ipsum",
            'desc': "Lorem Ipsum",
            'coverImg': gallery1,
            'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, impedit! Harum alias at voluptatem aspernatur hic nulla exercitationem magnam obcaecati, voluptatum optio praesentium velit nesciunt nam adipisci! Ducimus dolorem fuga laborum. Maxime commodi expedita atque maiores, facilis vel eos fugiat!'
        },
        {
            'id': 5,
            'title': "Lorem Ipsum",
            'desc': "Lorem Ipsum",
            'coverImg': gallery2,
            'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, impedit! Harum alias at voluptatem aspernatur hic nulla exercitationem magnam obcaecati, voluptatum optio praesentium velit nesciunt nam adipisci! Ducimus dolorem fuga laborum. Maxime commodi expedita atque maiores, facilis vel eos fugiat!'
        },
        {
            'id': 6,
            'title': "Lorem Ipsum",
            'desc': "Lorem Ipsum",
            'coverImg': gallery3,
            'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, impedit! Harum alias at voluptatem aspernatur hic nulla exercitationem magnam obcaecati, voluptatum optio praesentium velit nesciunt nam adipisci! Ducimus dolorem fuga laborum. Maxime commodi expedita atque maiores, facilis vel eos fugiat!'
        }
    ]

    let blog={}
    if(blog){
            let arr = blogs.filter(blog=> blog.id == id)
            blog=arr[0]

    }else{
        blog={}
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