import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>

        <div
          className='w-full justify-center mb-4'
          style={{
            backgroundImage: `url(${appwriteService.getFilePreview(featuredImage)})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '200px', // Set a height for the container
          }}
        />
        
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </Link>
  );
  
}


export default PostCard