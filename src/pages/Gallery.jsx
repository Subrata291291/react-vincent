import React from 'react'
import SchoolGallery from '../sections/SchoolGallery'
import CommonBanner from '../components/CommonBanner';

const Gallery = () => {
  return (
    <div>
      <CommonBanner title="Gallery" current="Gallery" />
      <SchoolGallery/>
    </div>
  )
}

export default Gallery
