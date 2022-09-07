import '../style/button-number.css'

function ButtonNumber({number, selected, select}){
    return(
        <div onClick={()=> selected(number)} className="button-number" style={{backgroundColor: select === number && "hsl(217, 12%, 63%)", color: select === number && "white"}}>
            {number}
        </div>
    );
}

export default ButtonNumber