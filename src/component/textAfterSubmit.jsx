import '../style/text.css'

function TextAfterSubmit({title, description}){
    return(
        <div className="container-text" style={{display: "flex", alignItems: "center", flexDirection: "column", }}>
            <div>{title}</div>
            <p style={{textAlign: "center"}}>{description}</p>
        </div> 
    );
}

export default TextAfterSubmit