import {useCardInfomation} from "./useCardInfomation";

export const CardInfomation = () => {
    const {postData} = useCardInfomation()

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