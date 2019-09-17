import React from 'react';
import ImageCard from './ImageCard'

import './ImageList.css';

const ImageList = props =>
{

    //attach map function to array (props.images)
    //store map function as a constant to reference
    //in the component later

    // { alt_description, id, urls } are destructured
    // from (image) map iterator
    // meaning it finds specific object per iteration
    const images = props.images.map((image) => 
    {
        return (
                <ImageCard key={image.id} image={image} />
        )
    });

    return <div className="image-list">{images}</div>
}

export default ImageList; 