interface Props{
    setProductId:(num:number)=>void;
    mode: boolean;
    currentId:number;
}
export default function GenerateButtonsForMeCauseImLazy({setProductId,mode,currentId}:Props){
    return (
        <button onClick={() => setProductId(currentId)}
                className={mode ? "productButton--light" : "productButton--dark"}>{currentId}</button>
    )
}