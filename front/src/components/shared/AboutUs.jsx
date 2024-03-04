import { FaGithub, FaLinkedin } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-white py-6">
      <div className="grid grid-cols-1 mx-auto max-w-3xl">
        <Card
          name="Alejandro Dominguez"
          description="Lorem ipsum dolor sit amet, conse fdghfgh fghf ghfgh fghf ghfg fdghfg hfdg hfdg hfdg hdfg"
          rol="Team Leader"
          imageSrc="/src/assets/img/Alejo-Profile.jpg"
          isLeftAligned={true}
        />
        <Card
          name="Saulo Cid"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          rol="Full-Stack"
          imageSrc="/src/assets/img/Saulo-Profile.jpg"
          isLeftAligned={false}
        />
        <Card
          name="Daniel Flores"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          rol="Back-End"
          imageSrc="/src/assets/img/Daniel-Profile.jpg"
          isLeftAligned={true}
        />
        <Card
          name="Joel Fiaré"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          rol="Back-End"
          imageSrc="/src/assets/img/Joel-Profile.jpg"
          isLeftAligned={false}
        />
        <Card
          name="Micaela Murrie"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          rol="Front-End"
          imageSrc="/src/assets/img/Mica-Profile.jpg"
          isLeftAligned={true}
        />
      </div>
    </div>
  );
};

const Card = ({ name, description, rol, imageSrc, isLeftAligned }) => {
  const githubURLs = {
    Alejo: "https://github.com",
    Saulo: "https://github.com/saulocid",
    Daniel: "https://github.com/xOnlinEx",
    Joel: "https://github.com/JoelFiare",
    Micaela: "https://github.com/MicaelaMurrie",
  };

  const linkedinURLs = {
    Alejo: "https://www.linkedin.com",
    Saulo: "https://www.linkedin.com/in/saulociddev/",
    Daniel: "https://www.linkedin.com/in/daniel-flores-developer/",
    Joel: "https://www.linkedin.com/in/joelfiare/",
    Micaela: "https://www.linkedin.com/in/micaela-murrie-a977b9284/",
  };

  return (
    <div className="bg-white p-4 flex flex-row items-center justify-between my-6">
      <div
        className={`flex-shrink-0 ${
          isLeftAligned ? "mr-4 md:mr-0" : "order-2 ml-4 md:ml-0"
        }`}
      >
        <img
          src={imageSrc}
          alt={name}
          className="mx-4 w-24 h-24 md:w-32 md:h-auto object-cover rounded-full shadow-xl shadow-[#585858]"
        />
      </div>
      <div className="mx-4 flex flex-col max-w-md">
        <h2 className="text-lg font-bold text-[#ff9a36]">{name}</h2>
        <h3 className="text-[#a1bb23]">{rol}</h3>
        <p className="mt-2 text-gray-500">{description}</p>
        <div className="flex mt-2">
          <a
            href={githubURLs[name]}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaGithub size={24} />
          </a>
          <a href={linkedinURLs[name]} target="_blank">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
