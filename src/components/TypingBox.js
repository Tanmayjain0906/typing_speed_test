import React from "react";

const para = `Generally throw season needle who powder pretty burst accident cloud snow cage tool ahead frame planned feet our account purple from music five writer green mass biggest paragraph bark graph soon sudden range society drive victory die tightly plain raise college rod hurt remain cream raw leg mirror guard best`;

let currIndex = 0;
const TypingBox = () => {


    function handleTypingBox(event)
    {
        let currText = event.target.value;

        if(currText[currIndex] === para[currIndex])
        {
            document.getElementById(currIndex).classList.add("correct");
        }
        else
        {
            document.getElementById(currIndex).classList.add("wrong"); 
        }
        currIndex++;
    }

    return (

        <div className="text-container">
            <div className="words">
                <p onClick={() => document.getElementById("input-feild").focus()}>
                    {para.trim().split("").map((val, index) => (<span id={index}>{val}</span>))}
                </p>
            </div>
            <input type="text" id="input-feild" onKeyUp={handleTypingBox}/>
        </div>
    )
}

export default TypingBox;