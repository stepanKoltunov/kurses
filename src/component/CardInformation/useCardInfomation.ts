import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postDefaultValue, PostTypes} from "../post.types";
import axios from "axios";

export const useCardInfomation = () => {

    const {cardId} = useParams()
    const [postData, setPostData] = useState<PostTypes>(postDefaultValue)

    useEffect(() => {
        axios.get<PostTypes>(`https://jsonplaceholder.typicode.com/posts/${cardId}`)
            .then((response) => {
                setPostData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return {
        postData
    }
}
