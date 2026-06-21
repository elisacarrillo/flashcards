import { useState } from "react"
import "./App.css"

function Flashcards({flash}) {
    const [isFlipped, setIsFlipped] = useState(true)
    const [currFC, setCurrFC] = useState(0)
    const maxLen = flash.length - 1
    const minLen = 0
    console.log(flash)
    const setFlip = () => {
        setIsFlipped(!isFlipped)
    }
    const changeFC = () => {
        setIsFlipped(true)
        setCurrFC(Math.floor(Math.random() * (maxLen - minLen + 1)) + minLen)
        
        
    }

    
    return (
        <div className="holder">
            <div className="Box"  onClick={setFlip}>
                <div className="FC" >
                    <p>{isFlipped? flash[currFC].question : flash[currFC].answer}</p>
                </div>
            </div>
            <div className="buttons">
                <button onClick={changeFC}>{"<="}</button>
                <button onClick={setFlip}>Flip</button>
                <button onClick={changeFC}>{"=>"}</button>
            </div>
        </div>
    )
}
export default Flashcards