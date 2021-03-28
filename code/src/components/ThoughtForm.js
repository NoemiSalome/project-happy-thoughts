import React from 'react'

const ThoughtForm = ({onSubmitThought, newThought, onNewThoughtChange}) => {
    return (
        <div className="input-container">
            <p className="inputcard-text">What's making you happy right now?</p>
            <form onSubmit={onSubmitThought}>
                <label htmlFor="newThought"></label>
                <input
                    id="newThought"
                    type="text"
                    value={newThought}
                    onChange={onNewThoughtChange}
                    placeholder="type here"
                /> 
                <button className="submit-button" type="submit">
                    <p className="submit-button-text"><span role="img" aria-label="heart-emoji">❤️</span><span>Send Happy Thought</span><span role="img" aria-label="heart-emoji">❤️</span></p>
                </button> 
            </form>
        </div>

    )
}

export default ThoughtForm