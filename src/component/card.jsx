import '../style/card-style.css'
import Star from './star'
import ButtonNumber from './buttonNumber';
import ButtonSubmit from './buttonSubmit';
import Text from './text';
import { useState } from 'react';
import AfterSubmit from './afterSubmit';
import TextAfterSubmit from './textAfterSubmit';

function Card() {
    const [select, setSelect] = useState(0);
    const [isSubmit, setIsSubmit] = useState(false);
    const number = [1, 2, 3, 4, 5];
    function selectNumber(number) {
        setSelect(number);
    }

    function submitHandle(){
        if(select != 0){
            setIsSubmit(!isSubmit);
        }
    }
    
    let show = 
        <>
            <Star />
            <Text title={"How did we do?"} description={"Please let us know how we with did your support request. All feedback is appreciated to help us improve our offering!"} />
            <div className='container-button'>
                {number.map((num) => <ButtonNumber key={num} number={num} selected={selectNumber} select={select} />)}
            </div>
            <ButtonSubmit submit={submitHandle}/>
        </>
    if (isSubmit) {
        show =
            <>
                <AfterSubmit select={select}/>
                <TextAfterSubmit title={"Thank you"} description={"We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!."}/>
            </>
        setTimeout(() => {
            setIsSubmit(!isSubmit)
            setSelect(0);
        }, 5000);
    }

    return (
        <div className="card">
            {show}
        </div>
    );
}

export default Card