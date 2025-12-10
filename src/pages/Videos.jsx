import React from 'react'
import Nav from '../components/Nav'
import './Videos.css'
import Footer from '../components/Footer'

const videos = [
  { id: 1, title: 'Video 1', description: 'Coming soon...' },
  { id: 2, title: 'Video 2', description: 'Coming soon...' },
  { id: 3, title: 'Video 3', description: 'Coming soon...' },
  { id: 4, title: 'Video 4', description: 'Coming soon...' },
]

const Videos = () => {
  return (
    <div>
      <Nav />
      <div className="videos-page">
        <h1 className="videos-title">Videos</h1>
        <h2 className="videos-description">Coming Soon!</h2>
        <div className="videos-grid">
          {videos.map(video => (
            <div key={video.id} className="video-card">
              <div className="video-placeholder">
                <span>Video coming soon</span>
              </div>
              <h2 className="video-card-title">{video.title}</h2>
              <p className="video-card-description">{video.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Videos
