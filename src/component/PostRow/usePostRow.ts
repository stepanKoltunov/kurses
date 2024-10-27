import {useNavigate} from "react-router-dom";

export const usePostRow = () => {
    const history = useNavigate()

    const rowClickHandler = (id: number) => {
        history(`/post/${id}`)
    }
    return {
        rowClickHandler
    }
}