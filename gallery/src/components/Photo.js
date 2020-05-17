import React from 'react'

function Photo (props){
    
        return (
            <li>
                <img src={props.url} alt="an image" />
            </li>
        )
    
}

export default Photo ;