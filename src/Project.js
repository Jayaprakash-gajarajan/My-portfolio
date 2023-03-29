import React from "react";
import "./Project.css";
import Project1 from './img/movie.jpg';
import Project2 from './img/Weather.jpg';
import Project3 from './img/calculator.jpg';
// import Project4 from './img/portfolio-4.jpg';

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
           Design simple Beginer level Project that can help,
        </p>
        <p className="heading p__color">
          to boost my confidence.
        </p>
      </div>
       <div className="container">
           <div className="row">
           <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Capstone Project</h5>
                     <h4 className="project__text">Project Management Tool</h4>
                     <div>
                     <a href="https://github.com/Jayaprakash-gajarajan/capstone_project" className="project__btn" target={"_blank"}>Github Link</a>
                     <a href="https://luminous-puppy-5baf2e.netlify.app/" className="project__btn" target={"_blank"}>Deploy URL</a>
                    </div>
                     </div>
                 </div>
             </div>
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Simple Movie app</h5>
                     <h4 className="project__text">To design simple movie app in React js</h4>
                     <div className="button_box">
                     <a href="https://github.com/Jayaprakash-gajarajan/movie-1000" className="project__btn" target={"_blank"}>Github Link</a>
                     <a href="https://endearing-maamoul-133512.netlify.app/" className="project__btn" target={"_blank"}>Deploy URL</a>
                    </div>
                     </div>
                 </div>
             </div>

             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Movie booking</h5>
                     <h4 className="project__text">Movie booking app</h4>
                     <div>
                     <a href="https://github.com/Jayaprakash-gajarajan/test-1" className="project__btn" target={"_blank"}>Github Link</a>
                     <a href="https://cool-starlight-b277af.netlify.app/" className="project__btn" target={"_blank"}>Deploy URL</a>
                     </div>
                     </div>
                 </div>
             </div>

             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Library Management</h5>
                     <h4 className="project__text">To design library books management</h4>
                     <div>
                     <a href="https://github.com/Jayaprakash-gajarajan/React-task-7" className="project__btn" target={"_blank"}>Github Link</a>
                     <a href="https://heroic-heliotrope-9ac740.netlify.app/" className="project__btn" target={"_blank"}>Deploy URL</a>
                     </div>
                     </div>
                 </div>
             </div>

             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">CRUD operations</h5>
                     <h4 className="project__text">to create a from using curd operations</h4>
                     <div>
                     <a href="https://github.com/Jayaprakash-gajarajan/React-task-4" className="project__btn" target={"_blank"}>Github Link</a>
                     <a href="https://darling-syrniki-efa4c5.netlify.app/" className="project__btn" target={"_blank"}>Deploy URL</a>
                     </div>
                     </div>
                 </div>
             </div>


             



             {/* <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4>
                     <a href="#" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div> */}
             
             {/* <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <button className="view__more pointer btn">View more</button>
             </div> */}

           </div>
       </div>
    </div>
  );
}

export default Project;