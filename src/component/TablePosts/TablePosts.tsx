import {PostRow} from "../PostRow/PostRow";
import "./TablePosts.scss"
import {Pagination} from "../Pagination/Pagination";
import {useTablePosts} from "./useTablePosts";

export const TablePosts = () => {
    const {postsData, filterHandler, paginationHandler, paginationPage} = useTablePosts()

    return (
        <div className={"table"}>
            {postsData.map((post) => {
                return <PostRow {...post} filterHandler={filterHandler}/>
            })}
            <Pagination setPage={paginationHandler} page={paginationPage}/>
        </div>
    )
}