// LoginForm.jsx
const LoginForm = () => {
  return (
    <body className="bg-[#f1f1f1] flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className="bg-white px-10 py-10 rounded-3xl border-2 border-gray-100">
          <h1 className="text-5xl font-semibold">Bienvenido/a de nuevo</h1>
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
            <div className="mt-5 flex justify-between items-center">
              <div>
                <input type="checkbox" id="recordar" />
                <label
                  className="ml-2 font-medium text-base"
                  htmlFor="recordar"
                >
                  Recordar mis datos
                </label>
              </div>
              <button className="font-medium text-base text-orange-500">
                Olvidé mi contraseña
              </button>
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button className="active:scale-[.98] hover:scale-[1.01] py-2 rounded-xl bg-green-500 text-white text-lg font-bold">
                Iniciar sesión
              </button>
            </div>
            <div className="mt-5 flex justify-center items-center">
              <p className="font-medium text-base">No tiene una cuenta?</p>
              <button className="text-green-500 text-base font-medium ml-2">
                Registrarse
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <img
          src="src/assets/img/Loguito-removebg.png"
          className="animate-bounce h-60 w-60"
        />
      </div>
    </body>
  );
};

export default LoginForm;
