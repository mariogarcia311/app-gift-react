import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    return (
        <div className='card animate__animated animate__fadeInUpBig animate__slower'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
