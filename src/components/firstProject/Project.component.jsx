import React from 'react';
import MusicPlaylist from '../../assets/Music-player.png';
import './projectOne.styles.scss'
const ProjectOne = () => {
  return (
    <div className="project-one">
      <article>
        <div className="dezzer-image">
          <img src={MusicPlaylist} alt="music playlist" className="dezeer-image-1" />
        </div>
        <div className="dezeer-api">
          <h2 className="dezeer">Music Player</h2>
          <p>
            This music player is a web application that gives you the different
            shades of music form the 80s to recent Top albums and song of the
            year. You should try it out
          </p>
          <div className="tools">
            <p>Sass, Styled-component, React</p>
          </div>
          <div className="links">
            <span>
              <a href="https://">Github</a>
            </span>
            <a href="https://"></a>
          </div>
        </div>
      </article>
      {/* <article>
      <div>
        <h2 className="dezeer">{projectName}</h2>
        <p>{paragraph}</p>
        <div className="requirement"></div>
      </div>
      <div className="dezzer-image">
        <img src="" alt="" />
      </div>
    </article>
    <article>
      <div className="dezzer-image">
        <img src="" alt="" />
      </div>
      <div>
        <h2 className="dezeer">Music-Playlist</h2>
        <p>{projectName}</p>
        <div className="requirement"></div>
      </div>
    </article> */}
    </div>
  );};

export default ProjectOne;