import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostService from '../../API/postService';
import MyButton from '../../components/button/btn';

function RoutesPlayOpened() {
  const {id} = useParams();
  const [post, setPost] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    PostService.fetchPostItem(id)
      .then(response => {
        const data = response.data;
        setPost(data);
      })
      .catch(err => {
        console.log(`can't fetch post`);
      })
  }, [id]);

  return (
    <>
      <h1>{ post.id }-{ post.title }</h1>
      <p>{ post.body }</p>
      <MyButton onClick={() => {navigate(-1)}}>Go back</MyButton>
    </>
  )
}

export default RoutesPlayOpened;