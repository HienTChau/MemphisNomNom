import React from "react";
import Store from "./Store";
import storeData from "../data/storeData";

const Board = () => {
    return (
        <div className="board">
            {storeData.map((store, index) => (
                <Store
                    key={index}
                    image={store.image}
                    name={store.name}
                    description={store.description}
                    website={store.website}
                />
            ))}
        </div>
    )
}
export default Board;