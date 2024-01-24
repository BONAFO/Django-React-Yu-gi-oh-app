import Card from "./Card";




const build_cards = (cards) => {

    const build_cards_elements =()=>{

        const elements =[]
        for (let i = 0; i < cards.length - 1; i++) {

            elements.push(<Card card_data={cards[i]}></Card>)
            
        }
        return <div>
        {elements}
        </div>
    }
    
    if (Array.isArray(cards)) {


        return <div>

            {build_cards_elements()}
{/*                         
            {cards.map(card => {
                return <Card key={card.id} card_data={card}></Card>
            })}
     */}
        </div>

   
    } else {
        return ""
    }
}




export default function Cards({ cards }) {

    return <div>
        {build_cards(cards)}
    </div>
}