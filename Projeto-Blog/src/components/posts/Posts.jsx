import { useEffect, useState } from "react";

import Post from "./Post";

import "./posts.css"

function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log("olá")
            setPosts(data)
            console.log(data)
        })
        .catch(err => console.log(err))
    }, [])



    return (
        <div >
                {posts.length > 0 && 
                    posts.map((post) => (
                        <Post 
                            name={post.title}
                            text={post.text}
                            categorie={post.categorie}
                            img={post.img}
                            comments={post.comments}
                            id={post.id}
                            date={post.date}
                        />
                    ))
                }
        </div>
                
    )
}

export default Posts