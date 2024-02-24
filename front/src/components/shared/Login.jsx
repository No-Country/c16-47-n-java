import { useState } from "react";

const LoginForm = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const toggleRegisterForm = () => {
    setShowRegisterForm(true);
  };

  const handleRegister = () => {
    setShowRegisterForm(false);
  };

  function Logear(e) {
    e.preventDefault();
  }

  return (
    <section className="bg-[#fafafa] flex w-full h-screen">
      {/* Lado izquierdo */}
      <div className="flex-1 flex justify-center items-center bg-[#f1f1f1]">
        <div className="max-w-xl">
          {showRegisterForm ? (
            <img
              src="src/assets/img/Loguito-removebg.png"
              className="animate-bounce h-60 w-60"
            />
          ) : (
            <div className="bg-white px-10 py-10 rounded-3xl border-t-2 border-r-2 border-b-2 border-l-2 border-[#ff9a36] border-t-[#a1bb23] border-r-[#a1bb23] border-b-[#ff9a36] border-form">
              <h1 className="text-5xl font-semibold">
                {showRegisterForm ? "Crear cuenta" : "Login"}
              </h1>
              {!showRegisterForm && (
                <>
                  {/* Contenido del formulario de inicio de sesión */}
                  <p className="font-medium text-lg text-gray-500 mt-4">
                    Por favor ingresa tus datos
                  </p>
                  <form action={(e) => Logear(e)}>
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
                        <label className="text-lg font-medium">
                          Contraseña
                        </label>
                        <input
                          type="password"
                          className="w-full border-2 border-gray-100 rounded-xl p-2 my-1 bg-transparent"
                          placeholder="Ingresa tu contraseña"
                        />
                      </div>
                    </div>
                    <div className="mt-8 flex flex-col gap-y-4">
                      <button
                        onClick={(e) => Logear(e)}
                        type="submit"
                        className="active:scale-[.98] hover:scale-[1.01] py-2 rounded-xl bg-[#74BB23] text-white text-lg font-bold"
                      >
                        Iniciar sesión
                      </button>
                    </div>
                  </form>
                  <div className="mt-5 flex justify-center items-center">
                    <p className="font-medium text-base">
                      No tiene una cuenta?
                    </p>
                    <button
                      className="text-[#A1BB23] text-base font-medium ml-2"
                      onClick={toggleRegisterForm}
                    >
                      Registrarse
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Lado derecho */}
      <div className="flex-1 flex justify-center items-center bg-[#f1f1f1]">
        <div className="max-w-xl">
          {!showRegisterForm && (
            <img
              src="src/assets/img/Loguito-removebg.png"
              className="animate-bounce h-60 w-60"
            />
          )}
          {showRegisterForm && (
            <div className="bg-white px-10 py-10 rounded-3xl border-t-2 border-r-2 border-b-2 border-l-2 border-[#ff9a36] border-t-[#a1bb23] border-r-[#a1bb23] border-b-[#ff9a36] border-form">
              <form>
                <h1 className="text-5xl font-semibold mb-5">Crear cuenta</h1>
                {/* Contenido del formulario de registro */}
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
                    onClick={(e) => Logear(e)}
                    type="submit"
                    className="active:scale-[.98] hover:scale-[1.01] py-2 rounded-xl bg-[#74BB23] text-white text-lg font-bold"
                  >
                    Registrar
                  </button>
                </div>
              </form>
              <div className="mt-5 flex justify-center items-center">
                <p className="font-medium text-base">Ya tienes una cuenta?</p>
                <button
                  className="text-[#A1BB23] text-base font-medium ml-2"
                  onClick={handleRegister}
                >
                  Inicia Sesion
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
