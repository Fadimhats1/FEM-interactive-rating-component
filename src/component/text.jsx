import '../style/text.css'

function Text({title, description}){
    return(
        <div className="container-text">
            <div>{title}</div>
            <p>{description}</p>
        </div> 
    );
}

export default Text