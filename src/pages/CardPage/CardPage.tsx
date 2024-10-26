import {Link} from "react-router-dom";
import './CardPage.scss'
import {CardInfomation} from "../../component/CardInformation/CardInfomation";

export const CardPage = () => {


    return (
            <div className={"card"}>
                <div>
                    <Link to={"/"} className={"card-back"}>На главную</Link>
                </div>
                <CardInfomation/>
            </div>
        );
}