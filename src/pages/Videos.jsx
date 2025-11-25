import React, { useState } from 'react'
import Nav from '../components/Nav'
import './Videos.css'
import Footer from '../components/Footer'

const initialVideos = [
  { id: 1, title: 'Video 1', description: 'Coming soon...', src: null },
  { id: 2, title: 'Video 2', description: 'Coming soon...', src: null },
  { id: 3, title: 'Video 3', description: 'Coming soon...', src: null },
  { id: 4, title: 'Video 4', description: 'Coming soon...', src: null },
]

const Videos = () => {
  const [videos, setVideos] = useState(initialVideos)

  const handleFileChange = (event, id) => {
    const file = event.target.files[0]
    if (!file) return

    // This creates a temporary URL so you can preview the video
    const previewUrl = URL.createObjectURL(file)

    setVideos(prev =>
      prev.map(video =>
        video.id === id ? { ...video, src: previewUrl } : video
      )
    )
  }

  return (
    <div>
      <Nav />
      <div className="videos-page">
        <h1 className="videos-title">Videos</h1>

        <div className="videos-grid">
          {videos.map(video => (
            <div key={video.id} className="video-card">
              {video.src ? (
                <video
                  className="video-player"
                  controls
                  src={video.src}
                />
              ) : (
                <div className="video-placeholder">
                  <span>Video coming soon</span>
                </div>
              )}

              <h2 className="video-card-title">{video.title}</h2>
              <p className="video-card-description">{video.description}</p>

              <label className="upload-label">
                Upload video for this slot:
                <input
                  type="file"
                  accept="video/*"
                  onChange={e => handleFileChange(e, video.id)}
                />
              </label>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Videos
