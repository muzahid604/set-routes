import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Post = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [postId])
    return (
        <div>
            <h1>this is post:{postId}</h1>
            <h1>{post.title}</h1>
        </div>
    );
};

export default Post;