import React from "react"

const GoogleMap = ({ src, height }) => {
  return <iframe src={src} width="100%" height={height}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
}

export default GoogleMap
