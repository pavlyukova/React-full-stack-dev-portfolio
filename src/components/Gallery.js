import React from 'react';
import ReactFancyBox from './fancybox/ReactFancyBox'
import './fancybox/fancybox.css'

function Gallery() {

  const GALLERY_IMAGES = [
    {
      thumbnail: '/images/allstar_desktop.jpg',
      image: '/images/allstar_desktop_full.jpg'
    },
    {
      thumbnail: '/images/pioneera_dashboard.jpg',
      image: '/images/pioneera_dashboard.jpg'
    },
    {
      thumbnail: '/images/gpu_ninja.jpg',
      image: '/images/gpu_ninja.jpg'
    },
    {
      thumbnail: '/images/underground.jpg',
      image: '/images/underground.jpg'
    },
    {
      thumbnail: '/images/allstar_desktop.jpg',
      image: '/images/allstar_desktop_full.jpg'
    },
    {
      thumbnail: '/images/pioneera_dashboard.jpg',
      image: '/images/pioneera_dashboard.jpg'
    },
    {
      thumbnail: '/images/gpu_ninja.jpg',
      image: '/images/gpu_ninja.jpg'
    },
    {
      thumbnail: '/images/underground.jpg',
      image: '/images/underground.jpg'
    },
    {
      thumbnail: '/images/allstar_desktop.jpg',
      image: '/images/allstar_desktop_full.jpg'
    },
    {
      thumbnail: '/images/pioneera_dashboard.jpg',
      image: '/images/pioneera_dashboard.jpg'
    },
    {
      thumbnail: '/images/gpu_ninja.jpg',
      image: '/images/gpu_ninja.jpg'
    },
    {
      thumbnail: '/images/underground.jpg',
      image: '/images/underground.jpg'
    }
  ]

  return (
    <section className="section-gallery mb-40" id="gallery">
      <div className="gallery">
        <div className="container">
          <div className="pictures-wrapper row">
            {GALLERY_IMAGES.map((img, i) => {
              return <div className="col-sm-6 col-md-3 px-0" key={i}>
                <ReactFancyBox
                  thumbnail={img.thumbnail}
                  image={img.image}
                />
              </div>
            })

            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
