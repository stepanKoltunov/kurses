import {useEffect, useState} from "react";
import {postDefaultValue, PostTypes} from "../../api/post.types";
import axios from "axios";
import {PostRow} from "../PostRow/PostRow";
import "./TablePosts.scss"
import {Pagination} from "../Pagination/Pagination";

export const TablePosts = () => {
    const [postsData, setPostsData] = useState<PostTypes[]>([postDefaultValue])
    const [paginationPage, setPaginationPage] = useState<number>(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${paginationPage}&_limit=5`)
            .then((response) => {
                setPostsData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [paginationPage]);

    const filterHandler = (title: string) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${4}`)
            .then((response) => {
                setPostsData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const paginationHandler = (page: number) => {
        setPaginationPage(page)
    }

    return (
        <div className={"table"}>
            {postsData.map((post) => {
                return <PostRow {...post} filterHandler={filterHandler}/>
            })}
            <Pagination setPage={paginationHandler} page={paginationPage}/>
        </div>
    )
}