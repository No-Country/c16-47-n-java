import alejandro from "/src/assets/img/Alejo-Profile.jpg";
import saulo from "/src/assets/img/Saulo-Profile.jpg";
import daniel from "/src/assets/img/Daniel-Profile.jpg";
import joel from "/src/assets/img/Joel-Profile.jpg";
import mica from "/src/assets/img/Mica-Profile.jpg";

const AboutUs = () => {
  return (
    <div className="bg-[#252525] py-16">
      <div className="grid grid-cols-1 mx-auto">
        <Card
          name="Alejandro Domínguez"
          description="Leader de quipos en No Country realizando reuniones motivacionales y de Sprint. Gestión en control de tareas de equipo y actividades en habilidades blandas."
          rol="Team Leader"
          imageSrc={alejandro}
          githubURL="https://github.com"
          linkedinURL="https://www.linkedin.com/in/jose-alejandro-dominguez/"
          isLeftAligned={true}
        />
        <Card
          name="Saulo Cid"
          description="Organizador de equipo y repartidor de tareas en Scrum. Divisor de roles y control de producción. Desarrollador Java Fullstack con Spring Security JWT, MySql y React + Vite."
          rol="Product Manager - Fullstack"
          imageSrc={saulo}
          githubURL="https://github.com/saulocid"
          linkedinURL="https://www.linkedin.com/in/saulociddev/"
          isLeftAligned={false}
        />
        <Card
          name="Daniel Flores"
          description="Desarrollador Java Back-end con Spring Security JWT con conocimientos amplios en Docker y MySql, armador de estructura backend y apoyo a equipo en tareas del ámbito."
          rol="Back-End"
          imageSrc={daniel}
          githubURL="https://github.com/xOnlinEx"
          linkedinURL="https://www.linkedin.com/in/daniel-flores-developer/"
          isLeftAligned={true}
        />
        <Card
          name="Joel Fiaré"
          description="Desarrollador Java Back-end con Spring Security JWT con amplio conocimiento en armado de base de datos MySql. Gestor de clases  y métodos relacionales."
          rol="Back-End"
          imageSrc={joel}
          githubURL="https://github.com/JoelFiare"
          linkedinURL="https://www.linkedin.com/in/joelfiare/"
          isLeftAligned={false}
        />
        <Card
          name="Micaela Murrie"
          description="Desarrolladora Front-end React Vite con amplio conocimiento en estructuración y estilos personalizados. Empleando creaciones en Canva, Figma, Tailwind y Bootstrap."
          rol="Front-End"
          imageSrc={mica}
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
  const color = isLeftAligned ? "bg-[#303030]" : "bg-[#252525]";

  return (
    <div
      className={`${color} p-12 flex flex-row items-center justify-center lg:gap-44 animacion`}
    >
      <div
        className={`flex-shrink-0 ${
          isLeftAligned ? "mr-4 md:mr-0" : "order-2 ml-4 md:ml-0"
        }`}
      >
        <img
          src={imageSrc}
          alt={name}
          className="lg:mx-4 md:mx-4 w-24 h-24 md:w-32 md:h-auto object-cover rounded-full shadow-xl shadow-[#101010] "
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
