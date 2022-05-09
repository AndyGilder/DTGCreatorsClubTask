import axios from 'axios';
import ImageGallery from 'react-image-gallery';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import './ModDetails.css';

function ModDetails() {
  const [ state, setState ] = useState({
    modDetails: {},
    galleryImages: [],
    modOwner: '',
  });
  const { id } = useParams();
  const specificMod = `https://ugc-api.dovetailgames.com/mods/${id}`;
  const [ loadingSpinner, showLoadingSpinner, hideLoadingSpinner ] = LoadingSpinner();

  useEffect(() => {
    const getSpecificMod = async () => {
      showLoadingSpinner();
      const response = await axios.get(specificMod)

      const galleryImages = [];
      const tags = [];

      Object.values(response.data.data.tags).forEach((tag) => {
        tags.push({ id: tag.id, name: tag.name });
      });

      response.data.data.screenshots.map((screenshot) => (
        galleryImages.push({ original: screenshot.url })
      ))

      setState({
        modDetails: response.data.data,
        galleryImages,
        modOwner: await getUserProfile(response.data.data.owner),
        tags,
      });

      hideLoadingSpinner();

      return response;
    }

    getSpecificMod();
  }, [specificMod]);

  function getUserProfile(owner) {
    let username = '';
    let displayName = '';
    let discriminator = '';

    for (const [key, value] of Object.entries(owner)) {
      if (key === 'username') {
        username = value;
      } else if (key === 'displayName') {
        displayName = value;
      } else if (key === 'discriminator') {
        discriminator = value;
      }
    }

    return <a className="mod-owner" href={`https://creatorsclub.dovetailgames.com/profile/${displayName}-${discriminator}/`} target="_blank" rel="noreferrer">{username}</a>;
  }

  return (
    <>
      { loadingSpinner }

      <div className="mod-details-container">
        <Link to="/" className="home-page-link">Back to home page</Link>

        <div className="mod-details-headline-container">
          <div>
            <h1>{ state.modDetails.title }</h1>
            <div>{ state.modDetails.subscriberCount } subscribers</div>
          </div>

          <div>
            <h1>
              { state.modOwner }
            </h1>
          </div>
        </div>

        <div className="mod-gallery-container">
          <ImageGallery items={state.galleryImages} showFullscreenButton={false} />
        </div>

        <div className="mod-details">
          <div>
            <h2>Overview</h2>
            <p>{ state.modDetails.longDescription }</p>

            <div className="tag-list">
              <h2>Tags:</h2>
              {
                state.tags?.map((tag, index) => {
                  return (
                    <span key={tag.id}>{tag.name}</span>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModDetails