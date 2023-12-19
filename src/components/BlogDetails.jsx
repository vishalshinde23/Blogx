import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='mt-[50px] bg-teal-500  flex flex-col justify-center align-center mx-auto p-14 w-6/12 h-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-md  hover:outline-slate-900 outline-2 hover:bg-sky-200'>
      <NavLink to={`/blog/${post.id}`} >
        <span className='text-xl font-serif '>{post.title}</span>
      </NavLink>
      <p>
        By
        <span className='text-base font-serif p-2  italic' >{post.author}</span>
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span>{post.category}</span>
        </NavLink>
      </p>
      <p> Posted on {post.date} </p>
      <p className='text-teal-900 text-lg font-sans shadow-[inset_-12px_-8px_40px_#46464620] p-4 rounded-md border-[2px]  '> {post.content}</p>
      <div>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className=' mt-8 shadow-2xl shadow-blue-500/20 gap-y-8 gap-x-6  p-2'>{`#${tag}`}</span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
