import React from "react";

function Welcome() {
  return (
    <section id="welcome" className="welcome">
      <div className="welcome__container container">
        <div className="welcome__info">
          <p className="welcome__mark">Hello, it's me</p>
          <h1 className="welcome__title">Anton Zinoviev</h1>
          <p className="welcome__mark">
            And I'm a <span>Frontend Developer</span>
          </p>
          <p className="welcome__desc">
            {" "}
            I'm passionate about crafting engaging and intuitive user
            experiences through frontend development. With a keen eye for design
            and a dedication to clean, efficient code, I specialize in bringing
            ideas to life in the digital realm.
          </p>
          <a
            className="./CV-AntonZinoviev.docx"
            download="./CV-AntonZinoviev.docx"
            class="welcome__btn"
          >
            Download CV
          </a>
        </div>
        <div class="welcome__img">
          <img
            className="welcome__img-img"
            src="https://media.istockphoto.com/id/1204374053/photo/profile-side-view-portrait-of-his-he-nice-attractive-skilled-focused-serious-guy-writing.jpg?s=612x612&w=0&k=20&c=ohF7qYstx9E6eJXpcQUtxFJCx9jjRBHilXcFehoOGyU="
            alt="Anton-Zinoviev"
          />
        </div>
      </div>
    </section>
  );
}

export default Welcome;
