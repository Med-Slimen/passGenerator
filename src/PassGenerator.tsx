import { useRef, useState } from "react";

function PassGenerator(){
    const [pass1,setPass1]=useState("");
    const [pass2,setPass2]=useState("");
    const passLength=useRef<HTMLInputElement>(null)
    const symbols=useRef<HTMLInputElement>(null)
    function copyToClipoard(text:string){
        navigator.clipboard.writeText(text).then(()=>{
            alert("text copied !")
        }).catch(()=>{
            alert("error copying text !")
        })
    }
    function genPass(){
        const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
    let length=passLength.current!.value
    let symbol=symbols.current!.checked
    let pass="";
    Math.max
    let nb=91;
    if(!symbol)nb=62
    while(pass.length<Number(length)){
        
        let rand=Math.floor(Math.random()* nb) 
        
        pass+=characters[rand]
    }
    console.log(pass)
    return pass;
    }
    function generatePass(){
        setPass1(genPass())
        setPass2(genPass())
        /*
        document.getElementById("p1").textContent=genPass();
        document.getElementById("p2").textContent=genPass(); 
        */
    }
    return(
        <div className="box">
            <div className="text">
                <h1>Generate a <span> random password</span></h1>
                <p>Never use an insecure password again.</p>
            </div>
            <div className="inputs">
                <input ref={passLength} id="length" type="number" name="" placeholder="Password Length" />
                <p>Symbols</p>
                <input ref={symbols} type="checkbox" name="" id="symb" />
            </div>
            <button onClick={generatePass}>Generate passwords</button>
            <hr style={{
                height:"5px",
                border:"0px",
                backgroundColor:"#2F3E53"
            }} />
            <div className="output">
                <p id="p1" onClick={()=>copyToClipoard(pass1)}>{pass1}</p>
                <div id="p2" onClick={()=>copyToClipoard(pass2)}>{pass2}</div>
            </div>
        </div>
    );
}
export default PassGenerator