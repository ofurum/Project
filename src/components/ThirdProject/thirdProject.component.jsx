import React from 'react';
import './thirdProject.styles.scss';
import movieImage from '../../assets/movie-app.PNG'
const ProjectThree = () => {
    return (
      <div className="third-project">
        <article>
          <div className="movie-image">
            <img
              src={movieImage}
              alt="movie"
              className="movie-image-1"
            />
          </div>
          <div className="movie-description">
            <h2 className="movie-name">Movie Selection</h2>
            <p>
              This is one of my first React project, This movie application allows you to search for any moive of your choices and nominate them.
            </p>
            <div className="tools">
              <p>Css, React</p>
            </div>
            <div className="links">
              <span>
                <a href="https://">Github</a>
              </span>
              <a href="https://"></a>
            </div>
          </div>
        </article>
      </div>
    );
};

export default ProjectThree;
