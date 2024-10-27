import "./Pagination.scss"
import {IPagination} from "./Pagination.types";

export const Pagination = ({page, setPage}: IPagination) => {
    return(
        <div className={"pagination"}>
            {page > 1 && <span className={"pagination-btn"} onClick={() => setPage(-1)}>Предыдущая</span>}
            {page}
            {page < 20  && <span className={"pagination-btn"} onClick={() => setPage( 1)}>Следующая</span>}
        </div>
    )
}