import React from 'react'

const Ninja = ({ninja, deleteNinja}) => {
    return (
        <div className="ninja" style={{marginBottom: 20}}>
            <div style={{display: 'inline', marginRight: 15}}>Name: {ninja.name}</div>
            <div style={{display: 'inline', marginRight: 15}}>Age: {ninja.age}</div>
            <div style={{display: 'inline', marginRight: 15}}>Belt: {ninja.belt}</div>
            <button onClick={()=>deleteNinja(ninja.id)}>DELETE</button>
        </div>
    )
}


export default Ninja