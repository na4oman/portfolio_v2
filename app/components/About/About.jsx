"use client";
import React, { useState } from "react";

const About = () => {
  const [imgSrc, setImgSrc] = useState("");

  const showModalHandler = (e) => {
    const baseURI = e.target.baseURI;
    const src = e.target.src.substring(baseURI.length - 1);
    document.getElementById("my_modal_2").showModal();
    setImgSrc(src);
  };

  return (
    <section className="mb-16 px-4 lg:px-0 pt-20" id="about">
      <h2 className="text-accent text-center text-6xl mb-8 heading">
        About me
      </h2>
      <dialog id="my_modal_2" className="modal backdrop-blur">
        <div className="modal-box max-w-[50rem] max-h-[95%] place-content-center p-0 rounded-none">
          <img
            src={imgSrc}
            className="shadow-2xl object-contain object-center"
          />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          I'm a passionate self-taught Full Stack and Mobile Developer with over
          6 years of hands-on experience building responsive, user-centric web
          and mobile applications. Since discovering web development in late
          2019, I've transformed my curiosity into expertise through dedicated
          learning and practical project development.
          <br />
          <br />
          My journey began with comprehensive Udemy courses and countless hours
          of YouTube tutorials, but it's the real-world projects that truly
          shaped my skills. I specialize in modern JavaScript frameworks, with a
          current focus on Next.js for full-stack web development and React
          Native for mobile applications. My technical arsenal includes Next.js,
          React, React Native, Expo, Node.js, MongoDB, Firebase, TailwindCSS and
          much more allowing me to deliver end-to-end solutions from concept to
          deployment.
          <br />
          <br />
          What drives me is the problem-solving aspect of development – that
          moment when complex logic clicks into place, or when a user interface
          comes together perfectly. I'm committed to writing clean, maintainable
          code and staying current with industry best practices. My recent
          expansion into mobile development reflects my dedication to continuous
          learning and adapting to new technologies.
          <br />
          <br />
          I'm actively seeking opportunities to contribute to innovative
          projects where I can apply my full-stack expertise, collaborate with
          talented teams, and continue growing as a developer in both web and
          mobile ecosystems.
        </div>
        <div
          className="flex-2 grid gap-4 grid-cols-1 md:grid-cols-2 place-items-center
        "
        >
          <img
            src="/images/certificates/html-css.jpg"
            className="sm:max-w-sm shadow-2xl object-cover object-center"
            onClick={(e) => showModalHandler(e)}
          />
          <img
            src="/images/certificates/javascript.jpg"
            className="sm:max-w-sm shadow-2xl object-cover object-center"
            onClick={(e) => showModalHandler(e)}
          />
          <img
            src="/images/certificates/men.jpg"
            className="sm:max-w-sm shadow-2xl object-cover object-center"
            onClick={(e) => showModalHandler(e)}
          />
          <img
            src="/images/certificates/mern.jpg"
            className="sm:max-w-sm shadow-2xl object-cover object-center"
            onClick={(e) => showModalHandler(e)}
          />
          <img
            src="/images/certificates/react.jpg"
            className="sm:max-w-sm shadow-2xl object-cover object-center"
            onClick={(e) => showModalHandler(e)}
          />
          <img
            src="/images/certificates/web-developer-bootcamp.jpg"
            className="sm:max-w-sm shadow-2xl object-cover object-center"
            onClick={(e) => showModalHandler(e)}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
