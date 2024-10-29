import { createContext, useState } from "react";
import run from "../config/gemini";

export const context = createContext();

const ContextProvider = (props) =>{

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayParam = (index, nextWord) =>{
        setTimeout(function (){
            setResultData(prev=>prev+nextWord);

        }, 75*index)

    }




    const onSent = async (prompt) =>{
        setResultData(""); // to remove previous answer from state variable
        setLoading(true); // a loading animation
        setShowResult(true); 
        setRecentPrompt(input)
        
        setPrevPrompts(prev=>[...prev, input])



        let response = await run(input);

        if(prompt != undefined){
            response = await run(prompt)
            setRecentPrompt(prompt)

        } else{
            setPrevPrompts(prev=>[...prev, input])
            setRecentPrompt(input)
            response = await run(input)
        }

        let responseArray = response.split("**");
        let newResponse ="";
        for(let i=0; i<responseArray.length; i++){
            if(i === 0 || i%2 !=1){
                newResponse += responseArray[i];

            } else{
                newResponse += "<b>"+responseArray[i]+ "</b>";

            }
        }
        // setResultData(response); // The initial response to be sent 
        let newResponse2 = newResponse.split("*").join("</br>")
        let newResponseArray = newResponse2.split(" ");

        for(let i=0; i<newResponseArray.length; i++){

            const nextWord = newResponseArray[i];
            delayParam(i, nextWord+" ");

        }
        // setResultData(newResponse2);
        setLoading(false);
        setInput("");
    }

    const contextValue = {
        onSent,
        recentPrompt,
        setRecentPrompt,
        prevPrompts,
        setPrevPrompts,
        loading,
        resultData,
        input,
        setInput,
        showResult
    }

    return(
        <context.Provider value={contextValue} >
            {props.children}
        </context.Provider>
    )
}

export default ContextProvider;