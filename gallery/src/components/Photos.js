import React from 'react';
import Photo from './Photo';
import NoPhotos from './NoPhotos'
import propTypes from 'prop-types';

const Photos = props => { 

    const results = props.data;
    let images;
  
    if (results.length>0){
        images = results.map(
        img =>
        < Photo url={`http://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`}  key={img.id} />
      );
    }
    else {
        images = <NoPhotos/>
    }
  
    return(
        <div className="photo-container">
      <ul >
        {images}
      </ul> 
      </div>
    );
  }
  Photos.propTypes={
    data:propTypes.array.isRequired,
    query:propTypes.string.isRequired
  }
export default Photos;
