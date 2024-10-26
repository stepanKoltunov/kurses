import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postDefaultValue, PostTypes} from "../../api/post.types";
import axios from "axios";

export const CardInfomation = () => {
    const {cardId} = useParams()
    const [postData, setPostData] = useState<PostTypes>(postDefaultValue)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${cardId}`)
            .then((response) => {
                setPostData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <h1 className={"card-title"}>Подробная информация поста:</h1>
            <ul>
                {Object.entries(postData).map((post, index) => (
                    <li key={index} className={"card-item"}>
                        {post[0]}: {post[1]}
                    </li>
                ))}
            </ul>
        </div>
    )
}