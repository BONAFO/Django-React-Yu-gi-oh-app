import Card from "./Card";
import CardContHeightContextProvider from "./Context/Container_Height";




const build_cards = (cards) => {

    const build_cards_elements = () => {

        const elements = []
        for (let i = 0; i <= cards.length - 1; i++) {

            elements.push(<Card card_data={cards[i]}></Card>)

        }
        return <div>
            {elements}
        </div>
    }

    if (Array.isArray(cards)) {


        return <div style={{ margin: "0% 8%", }}>

            <CardContHeightContextProvider>
                {build_cards_elements()}
            </CardContHeightContextProvider>
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