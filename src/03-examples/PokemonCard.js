import {useLayoutEffect, useRef} from "react";

export const PokemonCard = ({id, name, sprites}) => {
    const h2Ref = useRef();

    //just like useEffect but for triggering DOM changes re-render
    //bettet to got with the standard useEffect
    useLayoutEffect(() => {
        const {height, width}=h2Ref.current.getBoundingClientRect();
        console.log(height, width);
    },[name]);

    return (
        <section style={{height: 200, display: "flex", flexDirection: "row"}}>
            <h2 ref={h2Ref} className="text-capitalize" >#{id} : { name}</h2>
            <div>
                {
                    sprites.map((sprite) => (<img key={sprite} src={sprite} alt={name} />))
                }
            </div>

        </section>)
}