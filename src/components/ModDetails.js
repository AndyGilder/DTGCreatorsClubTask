import axios from 'axios';
import ImageGallery from 'react-image-gallery';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import './ModDetails.css';

function ModDetails() {
  const [ state, setState ] = useState({
    modDetails: {},
    galleryImages: ['test'],
  });
  const { id } = useParams();
  const specificMod = `https://ugc-api.dovetailgames.com/mods/${id}`;
  const [ loadingSpinner, showLoadingSpinner, hideLoadingSpinner ] = LoadingSpinner();

  useEffect(() => {
    showLoadingSpinner();
    axios.get(specificMod)
      .then(response => {
        const galleryImages = [];

        response.data.data.screenshots.map((screenshot) => (
          galleryImages.push({ original: screenshot.url })
        ))

        setState({
          modDetails: response.data.data,
          galleryImages: galleryImages,
        });

        hideLoadingSpinner();
      })
      .catch(err => {
        console.log(err);
      })

      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mod-details-container">
      { loadingSpinner }

      <div className="mod-details-headline-container">
        <h1>{ state.modDetails.title }</h1>
        <div>{ state.modDetails.subscriberCount } subscribers</div>
      </div>

      <div className="mod-gallery-container">
        <ImageGallery items={state.galleryImages} showFullscreenButton={false} />
      </div>

      <div className="mod-details">
        <div>
          { state.modDetails.longDescription }
        </div>
      </div>
    </div>
  )
}

export default ModDetails