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




    const onSent = async (prompt) =>{
        setResultData(""); // to remove previous answer from state variable
        setLoading(true); // a loading animation
        setShowResult(true); 
        setRecentPrompt(input)
        const response = await run(input);
        setResultData(response);
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