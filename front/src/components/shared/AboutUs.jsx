import { FaGithub, FaLinkedin } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-[#303030] py-6">
      <div className="grid grid-cols-1 mx-auto max-w-3xl">
        <Card
          name="Alejandro Dominguez"
          description="Lorem ipsum dolor sit amet, conse fdghfgh fghf ghfgh fghf ghfg fdghfg hfdg hfdg hfdg hdfg"
          rol="Team Leader"
          imageSrc="/src/assets/img/Alejo-Profile.jpg"
          githubURL="https://github.com"
          linkedinURL="https://www.linkedin.com"
          isLeftAligned={true}
        />
        <Card
          name="Saulo Cid"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          rol="Full-Stack"
          imageSrc="/src/assets/img/Saulo-Profile.jpg"
          githubURL="https://github.com/saulocid"
          linkedinURL="https://www.linkedin.com/in/saulociddev/"
          isLeftAligned={false}
        />
        <Card
          name="Daniel Flores"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          rol="Back-End"
          imageSrc="/src/assets/img/Daniel-Profile.jpg"
          githubURL="https://github.com/xOnlinEx"
          linkedinURL="https://www.linkedin.com/in/daniel-flores-developer/"
          isLeftAligned={true}
        />
        <Card
          name="Joel Fiaré"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          rol="Back-End"
          imageSrc="/src/assets/img/Joel-Profile.jpg"
          githubURL="https://github.com/JoelFiare"
          linkedinURL="https://www.linkedin.com/in/joelfiare/"
          isLeftAligned={false}
        />
        <Card
          name="Micaela Murrie"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          rol="Front-End"
          imageSrc="/src/assets/img/Mica-Profile.jpg"
          githubURL="https://github.com/MicaelaMurrie"
          linkedinURL="https://www.linkedin.com/in/micaela-murrie-a977b9284/"
          isLeftAligned={true}
        />
      </div>
    </div>
  );
};

const Card = ({
  name,
  description,
  rol,
  imageSrc,
  githubURL,
  linkedinURL,
  isLeftAligned,
}) => {
  return (
    <div className="bg-[#303030] p-4 flex flex-row items-center justify-between my-6">
      <div
        className={`flex-shrink-0 ${
          isLeftAligned ? "mr-4 md:mr-0" : "order-2 ml-4 md:ml-0"
        }`}
      >
        <img
          src={imageSrc}
          alt={name}
          className="mx-4 w-24 h-24 md:w-32 md:h-auto object-cover rounded-full shadow-xl shadow-[#101010]"
        />
      </div>
      <div className="mx-4 flex flex-col max-w-md">
        <h2 className="text-lg font-bold text-[#ff9a36]">{name}</h2>
        <h3 className="text-[#a1bb23]">{rol}</h3>
        <p className="mt-2 text-gray-300">{description}</p>
        <div className="flex mt-2">
          <a href={githubURL} target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="mx-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
