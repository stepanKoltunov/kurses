import {PostTypes} from "../../api/post.types";
import "./PostRow.scss"
import {useNavigate} from "react-router-dom";

interface  IPostRow extends PostTypes{
    filterHandler: (title: string) => void
}

export const PostRow = ({id, userId, body, title, filterHandler}:IPostRow) => {
    const history = useNavigate()


    const rowClickHandler = () => {
        history(`/post/${id}`)
    }

    return(
        <div className={"row-main"}>
            <div className={"row"} onClick={rowClickHandler}>
                <span>id: {id}</span>
                <span>body: {body}</span>
                <span>title: {title}</span>
                <span>userId: {userId}</span>
            </div>
            <div className={"row-btn"} onClick={() => filterHandler(title)}>Фильтровать по Title</div>
        </div>
    )
}