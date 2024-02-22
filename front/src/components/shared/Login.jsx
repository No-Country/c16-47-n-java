import { useState } from "react";

const LoginForm = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const toggleRegisterForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  const handleRegister = () => {
    // Aquí establecemos el estado de showRegisterForm a falso
    setShowRegisterForm(false);
  };

  return (
    <section className="bg-[#fafafa] flex w-full h-screen">
      {/* Lado izquierdo */}
      <div className="relative lg:flex h-full w-full lg:w-1/2 items-center justify-center bg-[#f1f1f1]">
        {showRegisterForm ? (
          <img
            src="src/assets/img/Loguito-removebg.png"
            className="animate-bounce h-60 w-60"
          />
        ) : (
          <div
            className="bg-white px-10 py-10 rounded-3xl border-t-2 border-r-2 border-b-2 border-l-2 border-[#ff9a36] border-t-[#a1bb23] border-r-[#a1bb23] border-b-[#ff9a36]"
            style={{
              borderRadius: "15px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            <h1 className="text-5xl font-semibold">
              {showRegisterForm ? "Crear cuenta" : "Bienvenido/a de nuevo"}
            </h1>
            {showRegisterForm && (
              <div className="mt-8 flex flex-col gap-y-4">
                {/* Contenido del formulario de registro */}
                <button
                  className="active:scale-[.98] hover:scale-[1.01] py-2 rounded-xl bg-[#74BB23] text-white text-lg font-bold"
                  onClick={handleRegister} // Manejador para el botón "Registrar"
                >
                  Registrar
                </button>
              </div>
            )}
            {!showRegisterForm && (
              <>
                {/* Contenido del formulario de inicio de sesión */}
                <p className="font-medium text-lg text-gray-500 mt-4">
                  Por favor ingresa tus datos
                </p>
                <div className="mt-5">
                  <div>
                    <label className="text-lg font-medium">Email</label>
                    <input
                      className="w-full border-2 border-gray-100 rounded-xl p-2 my-1 bg-transparent"
                      placeholder="Ingresa tu email"
                    />
                  </div>
                  <div>
                    <label className="text-lg font-medium">Contraseña</label>
                    <input
                      className="w-full border-2 border-gray-100 rounded-xl p-2 my-1 bg-transparent"
                      placeholder="Ingresa tu contraseña"
                    />
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-y-4">
                  <button className="active:scale-[.98] hover:scale-[1.01] py-2 rounded-xl bg-[#74BB23] text-white text-lg font-bold">
                    Iniciar sesión
                  </button>
                </div>
                <div className="mt-5 flex justify-center items-center">
                  <p className="font-medium text-base">No tiene una cuenta?</p>
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

      {/* Lado derecho */}
      <div className="relative lg:flex h-full w-full lg:w-1/2 items-center justify-center bg-[#f1f1f1]">
        {!showRegisterForm && (
          <img
            src="src/assets/img/Loguito-removebg.png"
            className="animate-bounce h-60 w-60"
          />
        )}
        {showRegisterForm && (
          <div
            className="bg-white px-10 py-10 rounded-3xl border-t-2 border-r-2 border-b-2 border-l-2 border-[#ff9a36] border-t-[#a1bb23] border-r-[#a1bb23] border-b-[#ff9a36]"
            style={{
              borderRadius: "15px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            <h1 className="text-5xl font-semibold">Crear cuenta</h1>
            {/* Contenido del formulario de registro */}
            <div className="mt-8 flex flex-col gap-y-4">
              <button
                className="active:scale-[.98] hover:scale-[1.01] py-2 rounded-xl bg-[#74BB23] text-white text-lg font-bold"
                onClick={handleRegister} // Manejador para el botón "Registrar"
              >
                Registrar
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LoginForm;
