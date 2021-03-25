import React from "react";
import ClothingImage from '../../assets/clothing-store.PNG';
import './secondProject.styles.scss'
const ProjectTwo = () => {
  return (
    <div className="project-two">
      <article>
        <div className='clothing-details'>
          <h2 className="clothing-name">Clothing-Store</h2>
          <p>
            Clothing-Store allows you to purchase clothes as quickly as
            possible, but payment methods are not yet implemented
          </p>
          <div className="tools">
            <span>
              <a href="http://">Github</a>
            </span>
          </div>
        </div>
        <div className="clothing-image">
          <img src={ClothingImage} alt="clothing" className="clothing-image-1"/>
        </div>
      </article>
      {/* <article>
      <div className="dezzer-image">
        <img src="" alt="" />
      </div>
      <div>
        <h2 className="dezeer">Music-Playlist</h2>
        <p>{projectName}</p>
        <div className="requirement"></div>
      </div>
    </article>  */}
    </div>
  );
};

export default ProjectTwo;
