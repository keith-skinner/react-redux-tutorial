import React from "react"
import Ninja from './Ninja'

const Ninjas = ({ninjas}) => {
    const ninjaList = ninjas.map(
        ninja => (ninja.age > 20)
        ? (<Ninja ninja={ninja}/>)
        : null
    )
    return (
        <div className="ninja-list">
            { ninjaList }
        </div>
    )
}

export default Ninjas