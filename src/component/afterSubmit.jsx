import selectImg from "../assets/interactive-rating-component-main/images/illustration-thank-you.svg";
import '../style/after-submit.css'

function AfterSubmit({select = 0}){
    return(
        <div className="after-submit">
            <img src={selectImg} alt="After Submit" />
            <div className="info-selected">
                You selected {select} out of 5
            </div>
        </div>
    );
}

export default AfterSubmit