import starImg from "../assets/interactive-rating-component-main/images/icon-star.svg"

function Star(){
    return(
        <span className="circle-img">
            <img src={starImg} alt="starImg" />
        </span>
    );
}

export default Star;