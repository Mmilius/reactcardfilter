import React from 'react'
import Card from './Card'

class CardContainer extends React.Component {
   
    
    
    render () {
        const cards = this.props.cards.map(card => {
            return  <Card key={card.id} card={card}/>
        })
        return(
            <div>
                {cards}
            </div>
        )
    }
}

export default CardContainer