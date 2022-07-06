import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostService from '../../API/postService';

function RoutesPlay() {
  const [posts, setPosts] = useState(null);

  useEffect(() =>  {
    PostService.fetchPostAll()
      .then((response) => {
        const data = response.data;
        setPosts(data);
      })
      .catch((err) => {
        console.log(`can't fetch posts`);
      });
  }, []);

  const preparePostRender = () => {
    if (!posts) return;
    return posts.map(item => {
      return <div key={item.id}>
        <Link to={`${item.id}`} className="link link__short180">
          {item.id}. {item.title}
        </Link>
      </div>
    })
  };

  return (
    <>
      { preparePostRender() }
    </>
  )
};

export default RoutesPlay;