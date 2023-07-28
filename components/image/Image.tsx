import React from 'react'
import { ImageProps } from './Image.type'

const Image = ({src,alt,width="100%", height="100%",loading, onLoad,  onError, className, variant, ...props}:ImageProps ) => {
  return (
    <div className='image-container'>
      <img src={src} alt={alt} width={width} height={height}  loading={loading} className={`image ${variant ? `image-${variant}`:""}`} {...props}/>
    </div>
  )
}

export default Image
