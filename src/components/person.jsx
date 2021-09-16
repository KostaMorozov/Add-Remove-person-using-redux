import React from 'react'
import * as consts from '../consts/consts'

export default function Person({name,age,onDelete}) {
    return (
        <div className='person'>
            {consts.NAME} <h1>{name}</h1>
            {consts.AGE}  <h4>{age}</h4>
            <button className='btn btn-danger' onClick={onDelete}>{consts.DELETE}</button>
        </div>
    )
}
