import React from 'react'

const Ninja = ({ninja}) => (
    <div className="ninja" key={ninja.id} style={{marginBottom: 20}}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
    </div>
)


export default Ninja