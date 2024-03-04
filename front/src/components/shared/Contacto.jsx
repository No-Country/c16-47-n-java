import { useState } from "react";

function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xnqevwyw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Gracias por escribirnos, te responderemos a la brevedad");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Hubo un error al enviar los datos");
      }
    } catch (error) {
      console.error("Hubo un error al enviar los datos", error);
    }
  };

  const validateEmail = (email) => {
    // Expresión regular para validar el formato de un correo electrónico
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const isEmailValid = validateEmail(formData.email);

  return (
    <section className="bg-[#181818] p-6">
      <div
        className="mt-5 max-w-md mx-auto bg-[#323232] text-black p-6 font-roboto relative border-t-2 border-r-2 border-b-2 border-l-2 border-[#ff9a36] border-t-[#a1bb23] border-r-[#a1bb23] border-b-[#ff9a36]"
        style={{
          borderRadius: "15px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        <h2 className="text-2xl text-white font-semibold mb-4">Contáctanos</h2>
        <form id="myform" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="text-gray-200 block mb-2">
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 w-full bg-[#252525] text-white"
              style={{ borderRadius: "8px" }}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-200 block mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`border p-2 w-full ${
                isEmailValid ? "" : "border-grey bg-[#252525] text-white"
              }`}
              style={{ borderRadius: "8px" }}
              required
            />
            {!isEmailValid && (
              <p className="text-red-500">
                Por favor, ingresa un correo electrónico válido.
              </p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-gray-200 block mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border p-2 w-full bg-[#252525] text-white"
              style={{ borderRadius: "8px" }}
              rows="5"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full mt-8 mb-4 active:scale-[.98] hover:scale-[1.01] py-2 rounded-xl bg-[#74BB23] text-white text-lg font-bold"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contacto;
