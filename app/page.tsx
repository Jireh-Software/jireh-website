"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const whatsappLink = `https://wa.me/5535991913953?text=Olá,%20vim%20pelo%20site%20da%20Jireh%20Software`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    setSubmitted(true);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting)
            e.target.classList.add("opacity-100", "translate-y-0");
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="bg-[#05080f] text-white font-sans">
      {/* NAV */}
      <header className="fixed top-0 w-full z-50 bg-[#05080f]/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-bold text-lg">
            Jireh<span className="text-green-400">.</span>Software
          </h1>
          <nav className="hidden md:flex gap-8 text-sm text-gray-400">
            <button
              className="bg-green-400 text-black px-6 py-2 rounded-full"
              onClick={() => scrollTo("services")}
            >
              Serviços
            </button>
            <button
              className="bg-green-400 text-black px-6 py-2 rounded-full"
              onClick={() => scrollTo("process")}
            >
              Processo
            </button>
            <button
              className="bg-green-400 text-black px-6 py-2 rounded-full"
              onClick={() => scrollTo("about")}
            >
              Sobre
            </button>
          </nav>
          <a href="#contact">
            <button
              className="bg-green-400 text-black px-6 py-2 rounded-full px-6"
              onClick={() => scrollTo("contact")}
            >
              Fale conosco
            </button>
          </a>
        </div>
      </header>

      <main className="pt-24">
        {/* HERO */}
        <section className="min-h-screen flex items-center px-6 relative overflow-hidden">
          {/* GRID BACKGROUND */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(#00e5b0_1px,transparent_1px),linear-gradient(90deg,#0099ff_1px,transparent_1px)] bg-[size:60px_60px]"></div>

          {/* LOGO DECORATIVO */}
          <img
            src="/icon.svg"
            alt=""
            className="hidden md:block absolute right-[-10px] top-1/2 -translate-y-1/2 w-[400px] opacity-25 blur-[2px] pointer-events-none select-none"
          />

          {/* CONTEÚDO */}
          <div className="max-w-3xl relative z-10">
            <div className="mb-4 text-green-400 text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Especialistas em backend
            </div>

            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Arquitetura e desenvolvimento de sistemas escaláveis
            </h1>

            <p className="text-gray-400 mb-8">
              Desenvolvemos APIs, microservices e sistemas críticos com foco em
              performance, escalabilidade e integração.
            </p>

            <div className="flex gap-4 mb-10">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-green-400 text-black px-6 py-2 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition-all duration-300 hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-black group-hover:scale-110 transition"
                >
                  <path d="M16 .4C7.3.4.4 7.3.4 16c0 2.8.7 5.5 2.1 7.9L.4 31.6l7.9-2.1c2.3 1.3 5 2 7.7 2 8.7 0 15.6-6.9 15.6-15.6S24.7.4 16 .4zm0 28.4c-2.4 0-4.8-.7-6.8-1.9l-.5-.3-4.7 1.2 1.3-4.6-.3-.5c-1.3-2-2-4.4-2-6.8 0-7.1 5.8-12.9 12.9-12.9S28.9 8.9 28.9 16 23.1 28.8 16 28.8zm7.3-9.6c-.4-.2-2.3-1.1-2.7-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.4-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.1-.8.1-.1.4-.4.6-.6.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7 0-.2-.9-2.2-1.2-3-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.7.1-1 .5-.3.4-1.4 1.3-1.4 3.2s1.5 3.7 1.7 3.9c.2.2 3 4.6 7.4 6.4 1 .4 1.8.6 2.4.8 1 .3 1.9.2 2.6.1.8-.1 2.3-1 2.6-1.9.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5z" />
                </svg>
                <span>WhatsApp</span>
              </a>

              <button
                className="bg-green-400 text-black px-6 py-2 rounded-full hover:scale-105 transition"
                onClick={() => scrollTo("contact")}
              >
                Fale com a equipe
              </button>
            </div>

            <div className="flex gap-10 text-sm">
              <div>
                <p className="text-green-400 text-2xl font-bold">5+</p>
                <span className="text-gray-400">
                  Anos em experiência de mercado
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-24 px-6 bg-[#0b1120]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Nossos serviços</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Desenvolvimento */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:-translate-y-2 transition">
                <h3 className="font-bold mb-2">Desenvolvimento</h3>
                <p className="text-gray-400 text-sm">
                  Criamos APIs, microservices e sistemas escaláveis sob medida,
                  com foco em performance, segurança e integração.
                </p>
              </div>

              {/* Consultoria */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:-translate-y-2 transition">
                <h3 className="font-bold mb-2">Consultoria</h3>
                <p className="text-gray-400 text-sm">
                  Ajudamos sua empresa a definir arquiteturas eficientes,
                  melhorar performance e evoluir sistemas com boas práticas e
                  escalabilidade.
                </p>
              </div>

              {/* Ensino */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:-translate-y-2 transition">
                <h3 className="font-bold mb-2">Ensino</h3>
                <p className="text-gray-400 text-sm">
                  Treinamentos práticos em backend, APIs e arquitetura moderna,
                  preparando desenvolvedores e indivíduos em transição de
                  carreira para desafios reais do mercado.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Nosso processo</h2>
            <p className="text-gray-400 mb-12">
              Processo estruturado para entregar soluções com previsibilidade,
              qualidade e escalabilidade.
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  title: "Descoberta",
                  desc: "Entendemos seu negócio e objetivos para definir a melhor solução.",
                },
                {
                  title: "Planejamento",
                  desc: "Definimos arquitetura e estratégia com foco em performance.",
                },
                {
                  title: "Desenvolvimento",
                  desc: "Construção com boas práticas, testes e evolução contínua.",
                },
                {
                  title: "Entrega",
                  desc: "Deploy, validação e acompanhamento em produção.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-green-400/30 hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Número */}
                  <p className="text-green-400 text-2xl font-bold mb-2">
                    0{i + 1}
                  </p>

                  {/* Título */}
                  <p className="font-semibold mb-2">{item.title}</p>

                  {/* Descrição */}
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-24 px-6 bg-[#0b1120]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Stack & Expertise</h2>

            {/* CATEGORIAS */}
            <div className="grid md:grid-cols-2 gap-10">
              {/* BACKEND */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-400">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-3 mb-6">
                  {[
                    {
                      name: "Java",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
                    },
                    {
                      name: "Spring",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
                    },
                    {
                      name: "Quarkus",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/quarkus/quarkus-original.svg",
                    },
                    {
                      name: "Node.js",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                    },
                    {
                      name: "Kafka",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
                    },
                  ].map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,229,176,0.3)] hover:border-green-400/30"
                    >
                      <img
                        src={tech.icon}
                        className="w-5 h-5 transition duration-300 grayscale hover:grayscale-0 hover:scale-110"
                      />
                      <span className="text-sm">{tech.name}</span>
                    </div>
                  ))}
                </div>

                {[
                  { n: "Java", v: 90 },
                  { n: "Spring", v: 88 },
                  { n: "Quarkus", v: 85 },
                ].map((s, i) => (
                  <div key={i} className="mb-3">
                    <div className="flex justify-between text-xs">
                      <span>{s.n}</span>
                      <span>{s.v}%</span>
                    </div>
                    <div className="bg-white/10 h-2 rounded">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded"
                        style={{ width: `${s.v}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* FRONTEND */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-400">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-3 mb-6">
                  {[
                    {
                      name: "Angular",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
                    },
                  ].map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,229,176,0.3)] hover:border-green-400/30"
                    >
                      <img
                        src={tech.icon}
                        className="w-5 h-5 transition duration-300 grayscale hover:grayscale-0 hover:scale-110"
                      />
                      <span className="text-sm">{tech.name}</span>
                    </div>
                  ))}
                </div>

                {[{ n: "Angular", v: 78 }].map((s, i) => (
                  <div key={i} className="mb-3">
                    <div className="flex justify-between text-xs">
                      <span>{s.n}</span>
                      <span>{s.v}%</span>
                    </div>
                    <div className="bg-white/10 h-2 rounded">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded"
                        style={{ width: `${s.v}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* DATA */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-purple-400">
                  Dados
                </h3>
                <div className="flex flex-wrap gap-3 mb-6">
                  {[
                    {
                      name: "SQL",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                    },
                    {
                      name: "NoSQL",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                    },
                  ].map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,229,176,0.3)] hover:border-green-400/30"
                    >
                      <img
                        src={tech.icon}
                        className="w-5 h-5 transition duration-300 grayscale hover:grayscale-0 hover:scale-110"
                      />
                      <span className="text-sm">{tech.name}</span>
                    </div>
                  ))}
                </div>

                {[
                  { n: "SQL", v: 85 },
                  { n: "NoSQL", v: 80 },
                ].map((s, i) => (
                  <div key={i} className="mb-3">
                    <div className="flex justify-between text-xs">
                      <span>{s.n}</span>
                      <span>{s.v}%</span>
                    </div>
                    <div className="bg-white/10 h-2 rounded">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded"
                        style={{ width: `${s.v}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* INFRA */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-cyan-400">
                  Infra & Arquitetura
                </h3>
                <div className="flex flex-wrap gap-3 mb-6">
                  {[
                    {
                      name: "Microservices",
                      icon: "https://cdn-icons-png.flaticon.com/512/906/906324.png",
                    },
                    {
                      name: "APIs",
                      icon: "https://cdn-icons-png.flaticon.com/512/2165/2165004.png",
                    },
                    {
                      name: "Mensageria",
                      icon: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
                    },
                  ].map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,229,176,0.3)] hover:border-green-400/30"
                    >
                      <img
                        src={tech.icon}
                        className="w-5 h-5 transition duration-300 grayscale hover:grayscale-0 hover:scale-110"
                      />
                      <span className="text-sm">{tech.name}</span>
                    </div>
                  ))}
                </div>

                {[
                  { n: "Microservices", v: 90 },
                  { n: "APIs", v: 90 },
                ].map((s, i) => (
                  <div key={i} className="mb-3">
                    <div className="flex justify-between text-xs">
                      <span>{s.n}</span>
                      <span>{s.v}%</span>
                    </div>
                    <div className="bg-white/10 h-2 rounded">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded"
                        style={{ width: `${s.v}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 px-6 bg-[#111827]">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Vamos conversar sobre seu projeto
            </h2>

            <p className="text-gray-400 mb-8">
              Tem uma ideia, precisa evoluir um sistema ou melhorar a
              performance da sua aplicação? Estamos prontos para ajudar você a
              construir soluções escaláveis e eficientes.
            </p>

            <p className="text-gray-500 mb-10 text-sm">
              Preencha o formulário ou fale diretamente pelo WhatsApp.
              Respondemos o mais rápido possível.
            </p>

            {submitted ? (
              <p className="text-green-400">
                Mensagem enviada! Em breve entraremos em contato.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 text-left"
              >
                <input
                  className="bg-white/5 p-3 rounded outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Seu nome"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <input
                  className="bg-white/5 p-3 rounded outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Seu email"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <textarea
                  className="bg-white/5 p-3 rounded outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Descreva seu projeto ou necessidade"
                  rows={4}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />

                <button
                  className="bg-green-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
                  type="submit"
                >
                  Solicitar contato
                </button>
              </form>
            )}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-10 px-6 border-t border-white/10 text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Jireh Software</p>
          <div className="flex gap-4">
            <button
              className="bg-green-400 text-black px-6 py-2 rounded-full"
              onClick={() => scrollTo("services")}
            >
              Serviços
            </button>
            <button
              className="bg-green-400 text-black px-6 py-2 rounded-full"
              onClick={() => scrollTo("process")}
            >
              Processo
            </button>
            <button
              className="bg-green-400 text-black px-6 py-2 rounded-full"
              onClick={() => scrollTo("about")}
            >
              Sobre
            </button>
          </div>
        </footer>

        {/* WHATSAPP */}
        <a
          href={whatsappLink}
          target="_blank"
          className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-6 h-6 fill-white"
          >
            <path d="M16 .4C7.3.4.4 7.3.4 16c0 2.8.7 5.5 2.1 7.9L.4 31.6l7.9-2.1c2.3 1.3 5 2 7.7 2 8.7 0 15.6-6.9 15.6-15.6S24.7.4 16 .4zm0 28.4c-2.4 0-4.8-.7-6.8-1.9l-.5-.3-4.7 1.2 1.3-4.6-.3-.5c-1.3-2-2-4.4-2-6.8 0-7.1 5.8-12.9 12.9-12.9S28.9 8.9 28.9 16 23.1 28.8 16 28.8zm7.3-9.6c-.4-.2-2.3-1.1-2.7-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.4-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.1-.8.1-.1.4-.4.6-.6.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7 0-.2-.9-2.2-1.2-3-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.7.1-1 .5-.3.4-1.4 1.3-1.4 3.2s1.5 3.7 1.7 3.9c.2.2 3 4.6 7.4 6.4 1 .4 1.8.6 2.4.8 1 .3 1.9.2 2.6.1.8-.1 2.3-1 2.6-1.9.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5z" />
          </svg>
        </a>
      </main>
    </div>
  );
}
