import React from "react";

const RenderNinja = (ninja) => {
    return (
        <div className="ninja" key={ninja.id}>
            <div>Name: {ninja.name}</div>
            <div>Age: {ninja.age}</div>
            <div>Belt: {ninja.belt}</div>
        </div>
    )
}

const Ninjas = ({ninjas}) => {
    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 20 ? RenderNinja(ninja) : null
    })
    return (
        <div className="ninja-list">
            { ninjaList }
        </div>
    )
}

export default Ninjas