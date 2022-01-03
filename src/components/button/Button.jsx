import React from 'react'

function Button(props) {
    return (
        <button {...props} className={`btn-grad text-text text-lg lg:text-xl font-semibold rounded ${props?.styles}`}>
            {props.children}
        </button>
    )
}

export default Button

