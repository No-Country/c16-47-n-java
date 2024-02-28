import { useEffect } from "react";
import "/src/assets/styles/login.css";
import { loginOrRegister } from "./AppServicio";

const LoginForm = () => {
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

  async function entrar(e) {
    e.preventDefault()
    const user = {
      username: "",
      password: ""
    }
    loginOrRegister(user).then()
  }
  return (
    <>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <div className="bg-white px-10 pb-10 rounded-3xl border-t-2 border-r-2 border-b-2 border-l-2 border-[#ff9a36] border-t-[#a1bb23] border-r-[#a1bb23] border-b-[#ff9a36] border-form">
            <p className="font-medium text-lg text-gray-500 mt-10 mb-6">
              Crear cuenta
            </p>
            <form onChange={(e) => entrar(e)}>
              <input
                type="text"
                name="usuario"
                placeholder="Nombre de usuario"
                required
                className="w-full border-2 border-gray-100 rounded-xl p-2 my-1 bg-transparent"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full border-2 border-gray-100 rounded-xl p-2 my-1 bg-transparent"
              />
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                required
                className="w-full border-2 border-gray-100 rounded-xl p-2 my-1 bg-transparent"
              />
              <input
                type="password"
                name="password2"
                placeholder="Repetir cotraseña"
                required
                className="w-full border-2 border-gray-100 rounded-xl p-2 my-1 bg-transparent"
              />
              <input
                type="file"
                name="archivo"
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
              type="submit"
              id="signIn"
              className="text-[#A1BB23] text-base font-medium ml-2"
            >
              Inicia Sesion
            </button>
          </div>
        </div>
        <div className="form-container sign-in-container">
          <div className="bg-white px-10 py-10 rounded-3xl border-t-2 border-r-2 border-b-2 border-l-2 border-[#ff9a36] border-t-[#a1bb23] border-r-[#a1bb23] border-b-[#ff9a36] border-form">
            <p className="font-medium text-lg text-gray-500 mt-4">
              Por favor ingresa tus datos
            </p>
            <form>
              <div className="mt-5">
                <div>
                  <label className="text-lg font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full border-2 border-gray-100 rounded-xl p-2 my-1 bg-transparent"
                    placeholder="Ingresa tu email"
                  />
                </div>
                <div>
                  <label className="text-lg font-medium">Contraseña</label>
                  <input
                    type="password"
                    className="w-full border-2 border-gray-100 rounded-xl p-2 my-1 bg-transparent"
                    placeholder="Ingresa tu contraseña"
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
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <div className="mt-5 flex justify-center items-center">
                <img
                  src="src/assets/img/Loguito-removebg.png"
                  className="animate-bounce h-60 w-60 hidden sm:block"
                />
              </div>
            </div>
            <div className="overlay-panel overlay-right">
              <div className="mt-5 flex justify-center items-center">
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
};

export default LoginForm;
