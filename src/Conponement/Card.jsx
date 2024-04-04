import Conteur from "./Conteur";
import "./Card.css"
const Card = ({userName, point}) => {
    return (
        <>
            <div className="card">
                <h1>{userName}</h1>
                <Conteur valu = {point}></Conteur>
                </div>
        </>
    );
};

export default Card;