import "./PostRow.scss"
import {IPostRow} from "./PostRow.types";
import {usePostRow} from "./usePostRow";

export const PostRow = ({id, userId, body, title, filterHandler}:IPostRow) => {
    const {rowClickHandler} = usePostRow()

    return(
        <div className={"row-main"}>
            <div className={"row"} onClick={() => rowClickHandler(id)}>
                <span>id: {id}</span>
                <span>body: {body}</span>
                <span>title: {title}</span>
                <span>userId: {userId}</span>
            </div>
            <div className={"row-btn"} onClick={() => filterHandler(title)}>Фильтровать по Title</div>
        </div>
    )
}