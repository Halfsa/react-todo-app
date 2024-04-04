import Card from "./Card";
import {useContext, useEffect, useState} from "react";
import DarkModeContext from "./DarkModeContext";
import GenerateButtonsForMeCauseImLazy from "./generateButtonsForMeCauseImLazy";

export default function Products(){
    const [productId,setProductId] = useState(1);
    let [product,setProduct] = useState<any>({})
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productId}`)
            .then(res => res.json())
            .then(json => {
                setProduct(json)
                console.log(json)
            })
    }, [productId]);
    const mode = useContext(DarkModeContext);
    const generateButtons :number[]=  [];
    for (let i = 1; i < 9; i++) {
        generateButtons.push(i)
    }
    return(
        <>
            <div>
                {generateButtons.map((num)=>{
                    return(
                        <GenerateButtonsForMeCauseImLazy setProductId={setProductId} mode={mode.mode} currentId={num}/>
                    )
                })}
            </div>
            <Card className={(mode.mode?"":"dark")}>
                <h1 className={"text"}>{product.title}</h1>
                <p className={"text"}>{product.description}</p>
            </Card>
        </>
    )
}