"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Merci ${formData.name}, votre message a été envoyé !`);
  };

  return (
    <section id="contact" className="py-20 bg-gray-800 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white">Me Contacter</h2>
        <p className="text-gray-400 mt-4">N’hésitez pas à me laisser un message !</p>

        <form onSubmit={handleSubmit} className="mt-6 max-w-lg mx-auto bg-gray-900 p-6 rounded-lg shadow-lg">
          <input
            type="text"
            name="name"
            placeholder="Votre Nom"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Votre Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white"
          />
          <textarea
            name="message"
            placeholder="Votre Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white h-32"
          ></textarea>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg">
            Envoyer
          </button>
        </form>

        {/* Liens sociaux */}
        <div className="flex justify-center space-x-6 mt-6">
          <a href="https://github.com/loulou-bvc" target="_blank" className="text-2xl hover:text-blue-400">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/loup-le-bivic/" target="_blank" className="text-2xl hover:text-blue-400">
            <FaLinkedin />
          </a>
          <a href="mailto:loupbvv@gmail.com" className="text-2xl hover:text-blue-400">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}