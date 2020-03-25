import React from "react"
import Ninja from './Ninja'

const Ninjas = ({ninjas, deleteNinja}) => {
    const ninjaList = ninjas.map(
        ninja => (ninja.age > 20)
        ? (<Ninja ninja={ninja} deleteNinja={deleteNinja} key={ninja.id}/>)
        : null
    )
    return (
        <div className="ninja-list">
            { ninjaList }
        </div>
    )
}

export default Ninjas