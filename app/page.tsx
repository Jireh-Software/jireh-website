"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const whatsappLink = `https://wa.me/55SEUNUMERO?text=Olá,%20vim%20pelo%20site%20da%20Jireh%20Software`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("opacity-100", "translate-y-0");
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="bg-[#05080f] text-white font-sans">
      {/* NAV */}
      <header className="fixed top-0 w-full z-50 bg-[#05080f]/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-bold text-lg">Jireh<span className="text-green-400">.</span>Software</h1>
          <nav className="hidden md:flex gap-8 text-sm text-gray-400">
            <button onClick={() => scrollTo("services")}>Serviços</button>
            <button onClick={() => scrollTo("process")}>Processo</button>
            <button onClick={() => scrollTo("about")}>Sobre</button>
          </nav>
          <a href="#contact">
            <button className="bg-green-400 text-black rounded-full px-6 py-2">Fale conosco</button>
          </a>
        </div>
      </header>

      <main className="pt-24">
        {/* HERO */}
        <section className="min-h-screen flex items-center px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(#00e5b0_1px,transparent_1px),linear-gradient(90deg,#0099ff_1px,transparent_1px)] bg-[size:60px_60px]"></div>

          <div className="max-w-3xl">
            <div className="mb-4 text-green-400 text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Especialistas em backend
            </div>

            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Arquitetura e desenvolvimento de sistemas escaláveis
            </h1>

            <p className="text-gray-400 mb-8">
              APIs, microservices e sistemas críticos com Java, Quarkus e Kafka.
            </p>

            <div className="flex gap-4 mb-10">
              <a href={whatsappLink} target="_blank">
                <button className="bg-green-400 text-black rounded-full px-6 py-2">WhatsApp</button>
              </a>
              <button className="border border-white/20 px-6 py-2 rounded-full hover:bg-white/10 transition" onClick={() => scrollTo("contact")}>Fale com a equipe</button>
            </div>

            <div className="flex gap-10 text-sm">
              <div>
                <p className="text-green-400 text-2xl font-bold">50+</p>
                <span className="text-gray-400">Projetos</span>
              </div>
              <div>
                <p className="text-green-400 text-2xl font-bold">98%</p>
                <span className="text-gray-400">Satisfação</span>
              </div>
              <div>
                <p className="text-green-400 text-2xl font-bold">5+</p>
                <span className="text-gray-400">Anos</span>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 px-6 bg-[#111827]">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Contato</h2>

            {submitted ? (
              <p className="text-green-400">Mensagem enviada!</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input className="bg-white/5 p-3 rounded" placeholder="Nome" onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <input className="bg-white/5 p-3 rounded" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <textarea className="bg-white/5 p-3 rounded" placeholder="Mensagem" onChange={(e) => setForm({ ...form, message: e.target.value })} />
                <button type="submit" className="bg-green-400 text-black py-2 rounded">Enviar</button>
              </form>
            )}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-10 px-6 border-t border-white/10 text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Jireh Software</p>
        </footer>

        {/* WHATSAPP */}
        <a href={whatsappLink} target="_blank" className="fixed bottom-6 right-6 bg-green-400 text-black p-4 rounded-full shadow-lg">💬</a>
      </main>
    </div>
  );
}
