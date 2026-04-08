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
            <button className="bg-green-400 text-black px-6 py-2 rounded-full" onClick={() => scrollTo("services")}>Serviços</button>
            <button className="bg-green-400 text-black px-6 py-2 rounded-full" onClick={() => scrollTo("process")}>Processo</button>
            <button className="bg-green-400 text-black px-6 py-2 rounded-full" onClick={() => scrollTo("about")}>Sobre</button>
          </nav>
          <a href="#contact">
            <button className="bg-green-400 text-black rounded-full px-6">Fale conosco</button>
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
                <button className="bg-green-400 text-black rounded-full px-6">WhatsApp</button>
              </a>
              <button className="bg-green-400 text-black px-6 py-2 rounded-full" onClick={() => scrollTo("contact")}>Fale com a equipe</button>
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

        {/* SERVICES */}
        <section id="services" className="py-24 px-6 bg-[#0b1120]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Nossos serviços</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {["Desenvolvimento","Consultoria","Ensino"].map((s, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:-translate-y-2 transition">
                  <h3 className="font-bold mb-2">{s}</h3>
                  <p className="text-gray-400 text-sm">Soluções modernas e escaláveis</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Nosso processo</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {["Descoberta","Planejamento","Desenvolvimento","Entrega"].map((s, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
                  <p className="text-green-400 text-2xl font-bold">0{i + 1}</p>
                  <p className="mt-2">{s}</p>
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
                <h3 className="text-lg font-semibold mb-4 text-green-400">Backend</h3>
                <div className="flex flex-wrap gap-3 mb-6">
                  {[
  {name:"Java",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"},
  {name:"Spring",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"},
  {name:"Quarkus",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/quarkus/quarkus-original.svg"},
  {name:"Node.js",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
  {name:"Kafka",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg"}
].map((tech,i)=>(
  <div key={i} className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,229,176,0.3)] hover:border-green-400/30">
    <img src={tech.icon} className="w-5 h-5 transition duration-300 grayscale hover:grayscale-0 hover:scale-110" />
    <span className="text-sm">{tech.name}</span>
  </div>
))}
                </div>

                {[{ n: "Java", v: 90 }, { n: "Spring", v: 88 }, { n: "Quarkus", v: 85 }].map((s,i)=>(
                  <div key={i} className="mb-3">
                    <div className="flex justify-between text-xs">
                      <span>{s.n}</span><span>{s.v}%</span>
                    </div>
                    <div className="bg-white/10 h-2 rounded">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded" style={{width:`${s.v}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* FRONTEND */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-400">Frontend</h3>
                <div className="flex flex-wrap gap-3 mb-6">
                  {[{name:"Angular",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"}].map((tech,i)=>(
  <div key={i} className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,229,176,0.3)] hover:border-green-400/30">
    <img src={tech.icon} className="w-5 h-5 transition duration-300 grayscale hover:grayscale-0 hover:scale-110" />
    <span className="text-sm">{tech.name}</span>
  </div>
))}
                </div>

                {[{ n: "Angular", v: 78 }].map((s,i)=>(
                  <div key={i} className="mb-3">
                    <div className="flex justify-between text-xs">
                      <span>{s.n}</span><span>{s.v}%</span>
                    </div>
                    <div className="bg-white/10 h-2 rounded">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded" style={{width:`${s.v}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* DATA */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-purple-400">Dados</h3>
                <div className="flex flex-wrap gap-3 mb-6">
                  {[
  {name:"SQL",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"},
  {name:"NoSQL",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"}
].map((tech,i)=>(
  <div key={i} className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,229,176,0.3)] hover:border-green-400/30">
    <img src={tech.icon} className="w-5 h-5 transition duration-300 grayscale hover:grayscale-0 hover:scale-110" />
    <span className="text-sm">{tech.name}</span>
  </div>
))}
                </div>

                {[{ n: "SQL", v: 85 }, { n: "NoSQL", v: 80 }].map((s,i)=>(
                  <div key={i} className="mb-3">
                    <div className="flex justify-between text-xs">
                      <span>{s.n}</span><span>{s.v}%</span>
                    </div>
                    <div className="bg-white/10 h-2 rounded">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded" style={{width:`${s.v}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* INFRA */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-cyan-400">Infra & Arquitetura</h3>
                <div className="flex flex-wrap gap-3 mb-6">
                  {[
  {name:"Microservices",icon:"https://cdn-icons-png.flaticon.com/512/906/906324.png"},
  {name:"APIs",icon:"https://cdn-icons-png.flaticon.com/512/2165/2165004.png"},
  {name:"Mensageria",icon:"https://cdn-icons-png.flaticon.com/512/1041/1041916.png"}
].map((tech,i)=>(
  <div key={i} className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,229,176,0.3)] hover:border-green-400/30">
    <img src={tech.icon} className="w-5 h-5 transition duration-300 grayscale hover:grayscale-0 hover:scale-110" />
    <span className="text-sm">{tech.name}</span>
  </div>
))}
                </div>

                {[{ n: "Microservices", v: 90 }, { n: "APIs", v: 90 }].map((s,i)=>(
                  <div key={i} className="mb-3">
                    <div className="flex justify-between text-xs">
                      <span>{s.n}</span><span>{s.v}%</span>
                    </div>
                    <div className="bg-white/10 h-2 rounded">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded" style={{width:`${s.v}%`}}></div>
                    </div>
                  </div>
                ))}
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
                <button className="bg-green-400 text-black px-6 py-2 rounded-full" type="submit">Enviar</button>
              </form>
            )}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-10 px-6 border-t border-white/10 text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Jireh Software</p>
          <div className="flex gap-4">
            <button className="bg-green-400 text-black px-6 py-2 rounded-full" onClick={() => scrollTo("services")}>Serviços</button>
            <button className="bg-green-400 text-black px-6 py-2 rounded-full" onClick={() => scrollTo("process")}>Processo</button>
            <button className="bg-green-400 text-black px-6 py-2 rounded-full" onClick={() => scrollTo("about")}>Sobre</button>
          </div>
        </footer>

        {/* WHATSAPP */}
        <a href={whatsappLink} target="_blank" className="fixed bottom-6 right-6 bg-green-400 text-black p-4 rounded-full shadow-lg">💬</a>
      </main>
    </div>
  );
}
