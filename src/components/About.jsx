import React from "react";

function About() {
  return (
    <section id="about" className="about bg-dark">
      <div className="about__container">
        <div className="about__image__div">
          <img
            className="about__image"
            src="https://novateus.com/blog/wp-content/uploads/2022/02/software-developer-gef18a0b18_1280.jpg"
            alt="Smiling Guy"
          />
        </div>
        <div className="about__info">
          <h1 className="about__title title ">
            About <span>Me</span>{" "}
          </h1>
          <div className="about__desc">
            <p className="desc mx-auto">
              Hello there! I'm Anton, a frontend developer with a passion for
              creating delightful digital experiences. From a young age, I've
              been fascinated by the intersection of design and technology, and
              I've dedicated my career to mastering the art of frontend
              development.
            </p>

            <p className="desc mx-auto">
              My journey in web development began 3 yeas ago when I discovered
              my love for translating creative concepts into functional,
              user-friendly websites and applications. Since then, I've honed my
              skills in HTML, CSS, and JavaScript, constantly seeking out new
              challenges and opportunities for growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
