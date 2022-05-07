import { useState } from 'react';
import './LoadingSpinner.css';

function LoadingSpinner() {
    const [ loadingSpinner, setLoadingSpinner ] = useState(false);

  return [
    loadingSpinner ? <div className="loading-spinner-container"><div className="loading-spinner"></div></div> : null,
    () => setLoadingSpinner(true),
    () => setLoadingSpinner(false)
  ]
}

export default LoadingSpinner