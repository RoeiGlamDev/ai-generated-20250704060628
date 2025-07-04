import React, { useState, useEffect } from 'react';

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch('https://api.pexels.com/videos/popular');
      const data = await response.json();
      setVideos(data.videos);
    };
    fetchVideos();
  }, []);

  return (
    <section className="videos">
      <h2>Latest Videos</h2>
      <ul>
        {videos.map((video) => (
          <li key={video