import React from 'react'

class Card extends React.Component {

    state = {
        showAnswer: false
    }

    setShowAnswer = () =>{
        this.setState({showAnswer: !this.state.showAnswer})
        // sets state to the opposite of whateve it already is. It's toggleing. 
    }
    render (){
        const {card} = this.props
        const {setShowAnswer} = this
        const {showAnswer} = this.state

        return (
        <div className="card">
            <img src="https://gocode.academy/wp-content/uploads/2018/06/javascript-logo.png" alt="javescript-log" className="javascript-logo"/>
            <h2>Question {card.id}:</h2>
            <p>{card.prompt}</p>
            <button onClick={setShowAnswer}>Show Answer</button>
            {showAnswer ?
             <div>
                <h2>Answer:</h2>
                 <p>{card.response}</p>
        </div>
        :null
        // if it's true the first thing happens if false the last thing happens
            }
    </div>
    )
    }
}

export default Card