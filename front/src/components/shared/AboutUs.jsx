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
          <a href={githubURL} target="_blank" className="hover:scale-[1.1]">
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="gray"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.801 8.207 11.385.6.111.793-.261.793-.577 0-.285-.01-1.23-.015-2.236-3.338.724-4.042-1.611-4.042-1.611-.546-1.385-1.334-1.755-1.334-1.755-1.09-.746.083-.73.083-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.806 1.305 3.49.998.108-.774.417-1.305.759-1.605-2.665-.306-5.466-1.334-5.466-5.93 0-1.31.468-2.381 1.236-3.223-.135-.306-.536-1.526.104-3.18 0 0 1.008-.322 3.3 1.23.957-.267 1.983-.399 3.002-.405 1.02.006 2.045.138 3.004.405 2.29-1.552 3.296-1.23 3.296-1.23.642 1.654.24 2.874.117 3.18.77.842 1.234 1.913 1.234 3.223 0 4.607-2.805 5.622-5.475 5.92.43.372.818 1.102.818 2.223 0 1.605-.015 2.896-.015 3.289 0 .318.188.693.798.574C20.566 21.798 24 17.296 24 12c0-6.63-5.37-12-12-12Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">GitHub page</span>
          </a>
          <a
            href={linkedinURL}
            target="_blank"
            className="  mx-2 hover:scale-[1.1]"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="gray"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M5.25 0A2.25 2.25 0 0 0 3 2.25v19.5A2.25 2.25 0 0 0 5.25 24h14.5A2.25 2.25 0 0 0 22 21.75V2.25A2.25 2.25 0 0 0 19.75 0H5.25ZM7.5 20.25H4.5v-9h3v9ZM6 9.75h-.001a1.5 1.5 0 1 1 .002-3.001A1.5 1.5 0 0 1 6 9.75ZM20.25 20.25h-3v-4.656c0-1.103-.022-2.527-1.539-2.527-1.541 0-1.778 1.202-1.778 2.443v4.74h-3v-9h2.849v1.299h.04c.397-.752 1.364-1.545 2.81-1.545 3.005 0 3.562 1.98 3.562 4.558v5.688Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">LinkedIn page</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
