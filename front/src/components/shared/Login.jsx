import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "/src/assets/styles/login.css";
import { login, register } from "./AppServicio";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();

  // manejo de animaciones login/register
  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  }, []);

  // login
  async function ingresar(e) {
    e.preventDefault();
    const loginRequest = {
      username: username,
      password: password,
    };
    try {
      const data = await login(loginRequest);
      // setToken("Bearer " + data.token + "");
      localStorage.setItem("token", "Bearer " + data.token + "");
      navigate("/");
    } catch (error) {
      console.log("No se pudo logear. Error: " + error);
    }
  }

  // register
  async function registrar(e) {
    e.preventDefault();

    if (password != password2) {
      alert("Las contraseñas no coinciden");
    } else {
      const registerRequest = {
        username: username,
        email: email,
        password: password,
        role: null,
      };
      try {
        const data = await register(registerRequest);
        localStorage.setItem("token", "Bearer " + data.token + "");
        navigate("/");
      } catch (error) {
        console.log("No se pudo registrar. Error: " + error);
      }
    }
  }

  return (
    <>
      <div className="container iniciar bg-[#181818]" id="container">
        <div className="form-container sign-up-container">
          <div className="bg-[#323232] px-10 pb-10 rounded-3xl border-t-2 border-r-2 border-b-2 border-l-2 border-[#ff9a36] border-t-[#a1bb23] border-r-[#a1bb23] border-b-[#ff9a36] border-form">
            <p className="font-medium text-lg text-gray-500 mt-10 mb-6">
              Crear cuenta
            </p>
            <form onSubmit={(e) => registrar(e)}>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                name="username"
                placeholder="Nombre de usuario"
                required
                className="w-full border-2 border-gray-100 rounded-xl p-2 my-1 bg-transparent"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="Correo electrónico"
                required
                className="w-full border-2 border-gray-100 rounded-xl p-2 my-1 bg-transparent"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="Contraseña"
                required
                className="w-full border-2 border-gray-100 rounded-xl p-2 my-1 bg-transparent"
              />
              <input
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                type="password"
                name="password2"
                placeholder="Repetir cotraseña"
                required
                className="w-full border-2 border-gray-100 rounded-xl p-2 my-1 bg-transparent"
              />
              <div className="mt-8 flex flex-col gap-y-4">
                <button
                  type="submit"
                  className="active:scale-[.98] hover:scale-[1.01] py-2 rounded-xl bg-[#74BB23] text-white text-lg font-bold"
                >
                  Registrar
                </button>
              </div>
            </form>
            <p className="font-medium text-base">Ya tienes una cuenta?</p>
            <button
              id="signIn"
              className="text-[#A1BB23] text-base font-medium ml-2"
            >
              Inicia Sesion
            </button>
          </div>
        </div>
        <div className="form-container sign-in-container">
          <div className="bg-[#323232] px-10 py-10 rounded-3xl border-t-2 border-r-2 border-b-2 border-l-2 border-[#ff9a36] border-t-[#a1bb23] border-r-[#a1bb23] border-b-[#ff9a36] border-form">
            <p className="font-medium text-lg text-gray-500 mt-4">
              Por favor ingresar sus datos
            </p>
            <form onSubmit={(e) => ingresar(e)}>
              <div className="mt-5">
                <div>
                  <label className="text-lg font-medium">Usuario</label>
                  <input
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    className="w-full border-2 border-gray-100 rounded-xl p-2 my-1 bg-transparent"
                    placeholder="Ingresar su nombre de usuario"
                  />
                </div>
                <div>
                  <label className="text-lg font-medium">Contraseña</label>
                  <input
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="w-full border-2 border-gray-100 rounded-xl p-2 my-1 bg-transparent"
                    placeholder="Ingresar su contraseña"
                  />
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-y-4">
                <button
                  type="submit"
                  className="active:scale-[.98] hover:scale-[1.01] py-2 rounded-xl bg-[#74BB23] text-white text-lg font-bold"
                >
                  Iniciar sesión
                </button>
              </div>
            </form>
            <p className="font-medium text-base">No tiene una cuenta?</p>
            <button
              id="signUp"
              className="text-[#A1BB23] text-base font-medium ml-2"
            >
              Registrarse
            </button>
          </div>
        </div>
        <div id="desaparecer" className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left flex  justify-center">
              <div className="mt-5 flex justify-center items-center">
                <img
                  src="src/assets/img/Loguito-removebg.png"
                  className="animate-bounce h-60 w-60 hidden sm:block"
                />
              </div>
            </div>
            <div className="overlay-panel overlay-right flex justify-center">
              <div className="flex justify-center items-center">
                <img
                  src="src/assets/img/Loguito-removebg.png"
                  className="animate-bounce h-60 w-60 hidden sm:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
