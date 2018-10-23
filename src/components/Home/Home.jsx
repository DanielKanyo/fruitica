import React from 'react';
import './Home.css';
import Gallery from 'react-grid-gallery';

const IMAGES =
  [{
    src: "https://preview.ibb.co/kgjmGV/pexels-photo-1020327.jpg",
    thumbnail: "https://preview.ibb.co/kgjmGV/pexels-photo-1020327.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://preview.ibb.co/iVjWiA/fresh-pressed-juices-1920x1080.jpg",
    thumbnail: "https://preview.ibb.co/iVjWiA/fresh-pressed-juices-1920x1080.jpg  ",
    thumbnailWidth: 320,
    thumbnailHeight: 180,
  },
  {
    src: "https://image.ibb.co/j4gYwV/pexels-photo-1161547.jpg",
    thumbnail: "https://image.ibb.co/j4gYwV/pexels-photo-1161547.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://image.ibb.co/c5ifbV/pexels-photo-905326.jpg",
    thumbnail: "https://image.ibb.co/c5ifbV/pexels-photo-905326.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://preview.ibb.co/mRazmV/pexels-photo-1.jpg",
    thumbnail: "https://preview.ibb.co/mRazmV/pexels-photo-1.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://image.ibb.co/f8eWiA/pexels-photo-1282273.jpg",
    thumbnail: "https://image.ibb.co/f8eWiA/pexels-photo-1282273.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://image.ibb.co/c2h6GV/pexels-photo-1326931.jpg",
    thumbnail: "https://image.ibb.co/c2h6GV/pexels-photo-1326931.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 480,
  },
  {
    src: "https://image.ibb.co/mAE8Vq/pexels-photo.jpg",
    thumbnail: "https://image.ibb.co/mAE8Vq/pexels-photo.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://image.ibb.co/nPDVtA/pexels-photo-174667.jpg",
    thumbnail: "https://image.ibb.co/nPDVtA/pexels-photo-174667.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://preview.ibb.co/ncOKmV/pexels-photo-1011337.jpg",
    thumbnail: "https://preview.ibb.co/ncOKmV/pexels-photo-1011337.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://image.ibb.co/hdfqRV/milk-splash-milk-cherry-spoon-324133.jpg",
    thumbnail: "https://image.ibb.co/hdfqRV/milk-splash-milk-cherry-spoon-324133.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://preview.ibb.co/c1eTDA/food-coffee-spoon-drink.jpg",
    thumbnail: "https://preview.ibb.co/c1eTDA/food-coffee-spoon-drink.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://preview.ibb.co/bOwatA/pexels-photo-132694-6-Moka-fp.jpg",
    thumbnail: "https://preview.ibb.co/bOwatA/pexels-photo-132694-6-Moka-fp.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://image.ibb.co/hCToDA/pexels-photo-264487.jpg",
    thumbnail: "https://image.ibb.co/hCToDA/pexels-photo-264487.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://preview.ibb.co/crhFtA/pexels-photo-269235.jpg",
    thumbnail: "https://preview.ibb.co/crhFtA/pexels-photo-269235.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://preview.ibb.co/nHFqRV/pexels-photo-618917.jpg",
    thumbnail: "https://preview.ibb.co/nHFqRV/pexels-photo-618917.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://preview.ibb.co/k7rm0q/pexels-photo-926361.jpg",
    thumbnail: "https://preview.ibb.co/k7rm0q/pexels-photo-926361.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://image.ibb.co/dwN4mV/pexels-photo-1294943.jpg",
    thumbnail: "https://image.ibb.co/dwN4mV/pexels-photo-1294943.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 240,
  },
  {
    src: "https://image.ibb.co/m41KLq/soup-leek-potato-3-Moka-sw.jpg",
    thumbnail: "https://image.ibb.co/m41KLq/soup-leek-potato-3-Moka-sw.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://preview.ibb.co/dgy8fq/pexels-photo-266642.jpg",
    thumbnail: "https://preview.ibb.co/dgy8fq/pexels-photo-266642.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://preview.ibb.co/j0qbYA/pexels-photo-668295.jpg",
    thumbnail: "https://preview.ibb.co/j0qbYA/pexels-photo-668295.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://preview.ibb.co/c5rTfq/pexels-photo-1056555.jpg",
    thumbnail: "https://preview.ibb.co/c5rTfq/pexels-photo-1056555.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://image.ibb.co/g6NC6V/pexels-photo-1191639.jpg",
    thumbnail: "https://image.ibb.co/g6NC6V/pexels-photo-1191639.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://preview.ibb.co/gGdkRV/pexels-photo-1251179.jpg",
    thumbnail: "https://preview.ibb.co/gGdkRV/pexels-photo-1251179.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://preview.ibb.co/c7qM0q/pexels-photo-236834.jpg",
    thumbnail: "https://preview.ibb.co/c7qM0q/pexels-photo-236834.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://preview.ibb.co/msJ8fq/peanut-butter-and-bread-on-wooden-chopping-board-1632260.jpg",
    thumbnail: "https://preview.ibb.co/msJ8fq/peanut-butter-and-bread-on-wooden-chopping-board-1632260.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://image.ibb.co/f7TKmV/da-li-kikiriki-goji.jpg",
    thumbnail: "https://image.ibb.co/f7TKmV/da-li-kikiriki-goji.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 180,
  },
  {
    src: "https://image.ibb.co/f1JwYA/pb-love-2-1321233.jpg",
    thumbnail: "https://image.ibb.co/f1JwYA/pb-love-2-1321233.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 329,
  },
  {
    src: "https://preview.ibb.co/nsZs6V/animal-squirrel-sciurus-bird.jpg",
    thumbnail: "https://preview.ibb.co/nsZs6V/animal-squirrel-sciurus-bird.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://image.ibb.co/c2ruLq/sunset-hands-love-woman.jpg",
    thumbnail: "https://image.ibb.co/c2ruLq/sunset-hands-love-woman.jpg ",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://preview.ibb.co/nQWm0q/cinnamon-stick-cinnamon-powder-spice-flavoring-47046.jpg",
    thumbnail: "https://preview.ibb.co/nQWm0q/cinnamon-stick-cinnamon-powder-spice-flavoring-47046.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://preview.ibb.co/iLDARV/jause-eat-delicious-food-56007.jpg",
    thumbnail: "https://preview.ibb.co/iLDARV/jause-eat-delicious-food-56007.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://image.ibb.co/h4qqRV/pexels-photo-112780.jpg",
    thumbnail: "https://image.ibb.co/h4qqRV/pexels-photo-112780.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 462,
  },
  {
    src: "https://preview.ibb.co/nhOoDA/pexels-photo-208450.jpg",
    thumbnail: "https://preview.ibb.co/nhOoDA/pexels-photo-208450.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://image.ibb.co/eGcFtA/pexels-photo-277253.jpg",
    thumbnail: "https://image.ibb.co/eGcFtA/pexels-photo-277253.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 358,
  },
  {
    src: "https://preview.ibb.co/drWx6V/pexels-photo-357576.jpg",
    thumbnail: "https://preview.ibb.co/drWx6V/pexels-photo-357576.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },

  {
    src: "https://preview.ibb.co/c1m5RV/pexels-photo-185941.jpg",
    thumbnail: "https://preview.ibb.co/c1m5RV/pexels-photo-185941.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://preview.ibb.co/nmAeLq/food-holiday-vacation-summer.jpg",
    thumbnail: "https://preview.ibb.co/nmAeLq/food-holiday-vacation-summer.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://preview.ibb.co/eLnFtA/pexels-photo-1345190.jpg",
    thumbnail: "https://preview.ibb.co/eLnFtA/pexels-photo-1345190.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://preview.ibb.co/i4P60q/spice-chiles-paprika-chili-54453.jpg",
    thumbnail: "https://preview.ibb.co/i4P60q/spice-chiles-paprika-chili-54453.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://preview.ibb.co/jO6KLq/pexels-photo-616353.jpg",
    thumbnail: "https://preview.ibb.co/jO6KLq/pexels-photo-616353.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://preview.ibb.co/fvaDfq/pexels-photo-458796.jpg",
    thumbnail: "https://preview.ibb.co/fvaDfq/pexels-photo-458796.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://preview.ibb.co/kMgTfq/cow-pasture-animal-almabtrieb.jpg",
    thumbnail: "https://preview.ibb.co/kMgTfq/cow-pasture-animal-almabtrieb.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://preview.ibb.co/m6jjmV/pexels-photo-416585.jpg",
    thumbnail: "https://preview.ibb.co/m6jjmV/pexels-photo-416585.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  },
  {
    src: "https://preview.ibb.co/dE4ELq/animal-bank-note-blur-164627.jpg",
    thumbnail: "https://preview.ibb.co/dE4ELq/animal-bank-note-blur-164627.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
  }]

class Home extends React.Component {
  render() {
    return (
      <div className="Component">
        <div className="image-grid-container">
          <Gallery images={IMAGES} />
        </div>

      </div>
    );
  }
}
export default Home;