import React from 'react'

function SubtitleText({children, styles}) {
    return (
        <span className={`text-lg text-black2 ${styles}`}>
            {children}
        </span>
    )
}

export default SubtitleText
