import ImageGallery from 'react-image-gallery';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchModDetails } from '../actions';
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import './ModDetails.css';

function ModDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const modDetailsState = useSelector((state) => state.modDetailsReducer);

  useEffect(() => {
    dispatch(fetchModDetails(id));
  }, [dispatch]);

  const renderModDetails = () => {
    console.log(modDetailsState);
    if (modDetailsState.loading) {
      return <LoadingSpinner />;
    }

    return (
      <>
        <div className="mod-details-container">
          <Link to="/" className="home-page-link">Back to home page</Link>

          <div className="mod-details-headline-container">
            <div>
              <h1>{ modDetailsState.title }</h1>
              <div>{ modDetailsState.subscriberCount } subscribers</div>
            </div>

            <div>
              <h1>
                { modDetailsState.modOwner }
              </h1>
            </div>
          </div>

          <div className="mod-gallery-container">
            <ImageGallery items={modDetailsState.galleryImages} showFullscreenButton={false} />
          </div>

          <div className="mod-details">
            <div>
              <h2>Overview</h2>
              <p>{ modDetailsState.modDetails.longDescription }</p>

              <div className="tag-list">
                <h2>Tags:</h2>
                {
                  modDetailsState.tags?.map((tag, index) => {
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

  return (
    <>
      { renderModDetails() }
    </>
  )
}

export default ModDetails