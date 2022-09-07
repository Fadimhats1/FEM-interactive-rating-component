import '../style/button-submit.css'

function ButtonSubmit({submit}){
    return(
        <button onClick={submit} className="button-submit">SUBMIT</button>
    );
}

export default ButtonSubmit