import "./Pagination.scss"

interface IPagination {
    page: number,
    setPage: (page: number) => void
}

export const Pagination = ({page, setPage}: IPagination) => {
    return(
        <div className={"pagination"}>
            {page > 1 && <span className={"pagination-btn"} onClick={() => setPage(page - 1)}>Предыдущая</span>}
            {page}
            {page < 20  && <span className={"pagination-btn"} onClick={() => setPage(page + 1)}>Следующая</span>}
        </div>
    )
}