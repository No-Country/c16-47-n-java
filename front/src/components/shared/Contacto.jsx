import React, { useState } from "react";

function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xnqyoljo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
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

  return (
    <div className="max-w-md mx-auto text-black p-6 font-roboto relative border-t-2 border-r-2 border-b-2 border-l-2 border-[#af1a42] border-t-[#a6d47c] border-r-[#00a77b] border-b-[#af1a42]" style={{ borderRadius: '15px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)' }}>
      <h2 className="text-2xl font-semibold mb-4">Contáctanos</h2>
      <form id="myform" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Nombre</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border p-2 w-full" style={{ borderRadius: '8px' }} required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Correo electrónico</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border p-2 w-full" style={{ borderRadius: '8px' }} required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">Mensaje</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="border p-2 w-full" style={{ borderRadius: '8px' }} rows="5" required></textarea>
        </div>
        <div className="flex justify-center"> 
          <button type="submit" className="text-[#00a77b] text-sm py-3 px-12 rounded-xl border border-gray-500 transition duration-300 ease-in-out hover:bg-[#00a77b] hover:text-white hover:scale-110">Enviar</button> {/* Aumento del tamaño del botón */}
        </div>
      </form>
    </div>
  );
}

export default Contacto;
