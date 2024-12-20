import React, { useContext } from 'react'
import { assets } from '../../assets/assets';
import './main.css';
import { context } from '../../context/Context';


const Main = () => {

  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(context);


  return (
    <div className='main'>
      <div className='nav' >
        <p>Gemini</p>
        <img src={assets.user_icon} />
      </div>
      <div className='main-container' >
        {!showResult
        ?<>
        <div className='greet' >
          <p><span>Hello, Clinton</span></p>
          <p>How can i help you today? </p>
        </div>

        <div className='cards' >
          <div className='card' >
            <p>Explain how the decentralization of finances helps promote transparency</p>
            <img src={assets.compass_icon} />
          </div>
          <div className='card' >
            <p>Explain the importance of the concept: urban planning </p>
            <img src={assets.bulb_icon} />
          </div>
          <div className='card' >
            <p>What effects does the future of AI have on individuals </p>
            <img src={assets.message_icon} />
          </div>
          <div className='card' >
            <p>Help me fix the errors in the following code </p>
            <img src={assets.code_icon} />
          </div>
        </div>

        </>
        :<div className='result' >

          <div className='result-title' >
            <img  src={assets.user_icon} />
            <p>{recentPrompt}</p>
          </div>

          <div className='result-data' >
            <img src={assets.gemini_icon} />
            {loading?
            <div className='loader' >
              <hr />
              <hr />
              <hr />

            </div>:
            <p dangerouslySetInnerHTML={{__html:resultData}} ></p>

            }
          </div>  
          
        </div>

        }


      </div>

      <div className='main-bottom' >
        <div className='search-box' >
          <input  onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Ask Gemini'  />
          <div>
            <img  src={assets.gallery_icon} />
            <img  src={assets.mic_icon} />
            <img onClick={()=>onSent()} src={assets.send_icon} />
          </div>
        </div>
        <p className='bottom-info' >
            Gemini can make mistakes, so double check it 
          </p>

      </div>

    </div>
  )
}

export default Main