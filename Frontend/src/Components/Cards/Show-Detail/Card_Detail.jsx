import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { get_card_detail } from "../../../Controllers/Cards/Show_Detail/axios.call";

import Nav_Component from "../../Nav/Nav_Container";
import _404_CARD_NOT_FOUND from "./Components/404.not_found";
import Card_Detail from "./Components/Card";
import CardDataContextProvider from "./Context/Card_Data";







export default function Show_Card_Detail({card_id}){
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id");
    const [card, setCard] = useState(undefined);

    useEffect(()=>{
        get_card_detail(id).then(res => setCard(res.data.data)).catch(err => console.log(err));
    },[])

        
    const show_card = ()=>{
        if(card !== undefined){
            return <Card_Detail></Card_Detail>
        }else{
            return <_404_CARD_NOT_FOUND></_404_CARD_NOT_FOUND>
        }
    }
    
    const back_url = sessionStorage.getItem("origin"); 
   
    return <div>
        
    <nav>
    <Nav_Component text={"Home"} url={window.origin}></Nav_Component>
    <Nav_Component text={"Cards"} url={window.origin + `/cards/show-cards/${(back_url == null) ?("") : (back_url)}`}></Nav_Component>
    </nav>
       


       <div>
        
        <CardDataContextProvider card_data={card}>
        {show_card()}
        </CardDataContextProvider>
       </div>
    </div>
}