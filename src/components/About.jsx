import aboutImg from "../assets/images/about.png";
import aboutImg2 from "../assets/images/about2.png";

const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-10 " id="about">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2">
          <img src={aboutImg} alt="About image" />
        </div>
        <div className="md:w-2/5">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            We have been improving our product
            <span className="text-secondary">for many years.</span>
          </h2>
          <p className="text-tartiary text-lg mb-7">
            A good example of a paragraph contains a topic conclusion. There are
            many different kinds of animals that live in China.
          </p>
          <button className="btnPrimary">Get Started</button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <div className="md:w-1/2">
          <img src={aboutImg2} alt="About image" />
        </div>
        <div className="md:w-2/5">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            You can Practice at any
            <span className="text-secondary"> time convinent for you.</span>
          </h2>
          <p className="text-tartiary text-lg mb-7">
            A good example of a paragraph contains a topic conclusion. There are
            many different kinds of animals that live in China.
          </p>
          <button className="btnPrimary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
