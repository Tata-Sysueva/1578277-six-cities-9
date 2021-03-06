import {IMG_TO, ZERO} from '../../const';

type RoomGalleryProps = {
  imagesSrc: string[],
}

function RoomGallery({imagesSrc}: RoomGalleryProps): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {imagesSrc
          .slice(ZERO, IMG_TO)
          .map((imageSrc) =>
            (
              <div className="property__image-wrapper" key={imageSrc}>
                <img
                  className="property__image"
                  src={imageSrc}
                  alt="Studio"
                />
              </div>
            ),
          )}
      </div>
    </div>
  );
}

export default RoomGallery;
