import React from 'react';
import { Link } from 'react-router-dom';

const Heder = () => {
    return (
        <div>
            <h1>Hello Bangladesh</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/friends">Friends</Link>

            </nav>
        </div>
    );
};

export default Heder;