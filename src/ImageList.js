import React from 'react';
import './style.css'


const ImageList = (props) => {
 const images =   props.images.map((image)=> {
        return <img key={image.id} src={image.webformatURL} alt="warn" />
    })
    return(
        <div className='img-list'>
            {images}
        </div>
    )
}


export default ImageList