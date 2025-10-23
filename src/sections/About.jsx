import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Prince Joseph Elias Obina</p>
            <p className="subtext">
              I’m a graduate of Bachelor of Science in Information Technology
              with a passion for building secure, scalable, and user-friendly
              web solutions. For the past 2+ years, I’ve worked in a corporate
              environment where I learned how different departments connect and
              collaborate to keep a business moving forward. I enjoy creating
              both front-end and back-end solutions and can handle projects
              independently. At the same time, I love working with teams, using
              Git and other tools to keep development smooth and collaborative.
              I also dive into mobile development 😉—building cross-platform
              apps using the React Native environment.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none-bottom-4 h-1/2 sm:h-1/3 bg-gradient-t from-indigo"></div>
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">Core Values</p>
            <Card
              style={{ rotate: "0deg", top: "15%", left: "33%" }}
              text="Clean Code"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "70%", left: "55%" }}
              text="Scalable"
              containerRef={grid2Container}
            />

            <Card
              style={{ rotate: "20deg", bottom: "10%", left: "5%" }}
              text="Creative"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "20%", left: "1%" }}
              text="Efficient"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "40deg", top: "20%", left: "65%" }}
              text="Reliable"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "65%", left: "45%" }}
              image="assets/logos/laravel-logo.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "90%" }}
              image="assets/logos/nodejs-logo.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "10%", left: "4%" }}
              image="assets/logos/react-logo.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "40deg", top: "10%", left: "85%" }}
              image="assets/logos/reactnative-logo.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Philippines, Davao City, and open to remote work
              worldwide
            </p>
            <figure className="absolute left-[30%] top-[10%]">
              <Globe />
            </figure>
          </div>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center-headText">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialized in a variety of languages, frameworks, and tools
              that allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
