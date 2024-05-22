// src/components/ShareButton.js
import React from 'react'

const ShareButton = ({productUrl}) => {
  const shareProduct = () => {
    navigator.share({
      title: 'Check out this product!',
      url: productUrl,
    })
  }

  return <button onClick={shareProduct}>Share</button>
}

export default ShareButton
