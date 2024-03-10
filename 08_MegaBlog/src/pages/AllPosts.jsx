import React, {useState, useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'


// function AllPosts() {
  //     const [posts, setPosts] = useState([])
  //     useEffect(() => {}, [])
  //     appwriteService.getPosts([]).then((posts) => {
  //         if (posts) {
  //             setPosts(posts.documents)
  //         }
  //     })
  //   return (
  //     <div className='w-full py-8'>
  //         <Container>
  //             <div className='flex flex-wrap'>
  //                 {posts.map((post) => (
  //                     <div key={post.$id} className='p-2 w-1/4'>
  //                         <PostCard {...post} />
  //                     </div>
  //                 ))}
  //             </div>
  //             </Container>
  //     </div>
  //   )
  // }
//   function AllPosts() {
//     const [posts, setPosts] = useState([]);
  
//     useEffect(() => {
//       // Fetch posts when the component mounts
//       const fetchPosts = async () => {
//         try {
//           const response = await appwriteService.getPosts([]);
//           if (response && response.documents) {
//             setPosts(response.documents);
//           }
//         } catch (error) {
//           console.error('Error fetching posts:', error);
//         }
//       };
  
//       fetchPosts();
//     }, []);


  
  function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
 
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
                }

export default AllPosts

