import {useEffect, useState} from "react";
import {postDefaultValue, PostTypes} from "../post.types";
import axios from "axios";

export const useTablePosts = () => {
    const [postsData, setPostsData] = useState<PostTypes[]>([postDefaultValue])
    const [paginationPage, setPaginationPage] = useState<number>(1)

    useEffect(() => {
        axios.get<PostTypes[]>(`https://jsonplaceholder.typicode.com/posts?_page=${paginationPage}&_limit=5`)
            .then((response) => {
                setPostsData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [paginationPage]);

    const filterHandler = (title: string) => {
        axios.get<PostTypes[]>(`https://jsonplaceholder.typicode.com/posts?title=${title}`)
            .then((response) => {
                setPostsData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const paginationHandler = (page: number) => {
        setPaginationPage(prevState => page + prevState)
    }

    return {
        filterHandler,
        paginationHandler,
        postsData,
        paginationPage
    }
}