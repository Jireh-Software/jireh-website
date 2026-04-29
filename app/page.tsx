"use client";

import {
  Search,
  ClipboardList,
  Code2,
  Rocket,
  Phone,
  Mail,
  MapPin,
  Globe,
  Camera,
  LifeBuoy,
} from "lucide-react";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const whatsappLink = `https://wa.me/5535991913953?text=Olá,%20vim%20pelo%20site%20e%20quero%20um%20orçamento`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      setSubmitted(true);
    } catch (err) {
      console.error("ERRO RESEND:", err);
      return Response.json({ err });
    }
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
              Ajudamos empresas a crescer com tecnologia
            </div>

            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Sistemas e soluções sob medida para o seu negócio crescer
            </h1>

            <p className="text-gray-400 mb-6">
              Automatize processos, reduza retrabalho e ganhe eficiência com
              tecnologia simples, segura e feita para você.
            </p>

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
                className="border border-white/20 px-6 py-3 rounded-full hover:border-green-400 hover:text-green-400 transition"
                onClick={() => scrollTo("services")}
              >
                Ver serviços
              </button>
            </div>

            <div className="flex gap-10 text-sm">
              <div>
                <p className="text-green-400 text-2xl font-bold">5+</p>
                <span className="text-gray-400">
                  Anos em experiência de mercado
                </span>
              </div>

              <div>
                <p className="text-green-400 text-2xl font-bold">100%</p>
                <span className="text-gray-400">
                  foco em soluções sob medida
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-24 px-6 bg-[#0b1120]">
          <div className="max-w-6xl mx-auto text-center">
            {/* HEADER */}
            <h2 className="text-3xl font-bold mb-4">
              Como podemos ajudar seu negócio
            </h2>

            <p className="text-gray-400 mb-12">
              Soluções práticas para automatizar processos, integrar sistemas e
              melhorar a eficiência da sua empresa.
            </p>

            {/* SERVICES */}
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              {[
                {
                  title: "Desenvolvimento de sistemas",
                  desc: "Criamos sistemas sob medida para automatizar processos e aumentar eficiência.",
                  icon: "💻",
                  items: [
                    "Sistemas personalizados",
                    "Integrações",
                    "Automação",
                  ],
                },
                {
                  title: "Consultoria em tecnologia",
                  desc: "Ajudamos você a melhorar sistemas existentes e reduzir custos.",
                  icon: "🧠",
                  items: [
                    "Melhoria de sistemas",
                    "Redução de custos",
                    "Planejamento",
                  ],
                },
                {
                  title: "Ensino de programação",
                  desc: "Treinamentos práticos com foco no mercado.",
                  icon: "🎓",
                  items: ["Aulas práticas", "Conteúdo atualizado", "Foco real"],
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:-translate-y-2 hover:border-green-400/30 transition-all duration-300 text-left"
                >
                  <div className="text-green-400 text-2xl mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
                  <ul className="text-gray-500 text-sm space-y-1">
                    {item.items.map((li, idx) => (
                      <li key={idx}>✔ {li}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* ANTES VS DEPOIS */}
            <div className="mb-20">
              <h3 className="text-2xl font-bold mb-10">
                O que muda com a solução certa
              </h3>

              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-red-500/5 border border-red-500/20 p-6 rounded-2xl">
                  <h4 className="text-red-400 font-bold mb-4">❌ Antes</h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>Processos manuais e repetitivos</li>
                    <li>Erros frequentes</li>
                    <li>Perda de tempo</li>
                    <li>Sistemas não integrados</li>
                  </ul>
                </div>

                <div className="bg-green-500/5 border border-green-500/20 p-6 rounded-2xl">
                  <h4 className="text-green-400 font-bold mb-4">✅ Depois</h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>Processos automatizados</li>
                    <li>Mais controle e precisão</li>
                    <li>Maior eficiência da empresa</li>
                    <li>Visão global do negócio</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* EXEMPLOS */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-10">Exemplos de soluções</h3>

              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h4 className="font-bold mb-2">
                    Sistema de controle interno
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Automação de processos operacionais, reduzindo tarefas
                    manuais e erros.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h4 className="font-bold mb-2">Integração de plataformas</h4>
                  <p className="text-gray-400 text-sm">
                    Conexão entre sistemas para centralizar dados e melhorar a
                    gestão.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h4 className="font-bold mb-2">Automação de tarefas</h4>
                  <p className="text-gray-400 text-sm">
                    Redução de retrabalho com automações inteligentes e
                    eficientes.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA FINAL */}
            <div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
              >
                Falar sobre meu projeto
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Você precisa disso se...
            </h2>

            <div className="text-gray-300 space-y-3">
              <p>✔ Usa planilhas e quer automatizar processos</p>
              <p>✔ Tem retrabalho manual no dia a dia</p>
              <p>✔ Precisa integrar sistemas ou plataformas</p>
              <p>✔ Quer escalar seu negócio com tecnologia</p>
            </div>
          </div>
        </section>

        <ProcessSection whatsappLink={whatsappLink} />

        {/* ABOUT */}
        <section id="about" className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* TEXTO */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Sobre a Jireh Software
              </h2>

              <p className="text-gray-400 mb-6">
                A Jireh Software nasceu com o propósito de ajudar empresas a
                crescer por meio da tecnologia, de forma simples, eficiente e
                acessível.
              </p>

              <p className="text-gray-400 mb-6">
                Mais do que desenvolver sistemas, buscamos entender a realidade
                de cada cliente e construir soluções que realmente façam sentido
                para o seu negócio.
              </p>

              {/* STORYTELLING */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl mb-6">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Acreditamos que tecnologia não deve ser complicada nem
                  distante. Por isso, nosso trabalho é baseado em valores que
                  vão além do código:
                  <span className="text-green-400"> transparência</span>,
                  <span className="text-green-400"> responsabilidade</span> e
                  <span className="text-green-400">
                    {" "}
                    compromisso com resultados reais
                  </span>
                  .
                  <br />
                  <br />
                  Nosso objetivo é construir relações de confiança, ajudando
                  cada cliente a crescer com soluções que realmente funcionam no
                  dia a dia.
                </p>

                {/* FRASE PESSOAL */}
                <p className="mt-6 text-green-400 italic text-sm border-l-2 border-green-400 pl-4">
                  “Tecnologia com propósito, feita por pessoas para pessoas.”
                </p>
              </div>

              {/* DIFERENCIAIS */}
              <div className="space-y-3 text-sm text-gray-300 mb-8">
                <p>✔ Atendimento próximo e direto</p>
                <p>✔ Soluções personalizadas para cada cliente</p>
                <p>✔ Experiência com sistemas reais</p>
                <p>✔ Foco em resultado, não só em tecnologia</p>
              </div>

              {/* CTA */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
              >
                Falar sobre meu projeto
              </a>
            </div>

            {/* LADO VISUAL */}
            <div className="space-y-6">
              {/* PERFIL */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4">
                <img
                  src="/perfil.png"
                  alt="Gabriel Martins"
                  className="w-16 h-16 rounded-full object-cover border border-white/10"
                />

                <div>
                  <p className="font-semibold">Gabriel Martins</p>
                  <p className="text-gray-400 text-sm">
                    Fundador • Jireh Software
                  </p>

                  <a
                    href="https://www.linkedin.com/in/gabriel-martins-68a235a8/"
                    target="_blank"
                    className="text-green-400 text-sm hover:underline"
                  >
                    Ver perfil no LinkedIn →
                  </a>
                </div>
              </div>

              {/* STACK */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h3 className="font-semibold mb-4">Tecnologias utilizadas</h3>

                <div className="flex flex-wrap gap-2 text-sm">
                  {[
                    "Spring",
                    "Node.js",
                    "Angular",
                    "SQL",
                    "NoSQL",
                    "Java",
                    "Quarkus",
                    "Kafka",
                    "React",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-green-400/10 text-green-400 border border-green-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 px-6 bg-[#111827]">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* TEXTO */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Vamos tirar sua ideia do papel?
              </h2>

              <p className="text-gray-400 mb-6">
                Se você precisa automatizar processos, melhorar um sistema ou
                começar um projeto do zero, podemos te ajudar.
              </p>

              <p className="text-gray-400 mb-6">
                Fale com a gente e vamos entender sua necessidade — sem
                compromisso.
              </p>

              {/* BENEFÍCIOS */}
              <div className="space-y-3 text-sm text-gray-300 mb-8">
                <p>✔ Atendimento rápido</p>
                <p>✔ Soluções sob medida</p>
                <p>✔ Linguagem simples, sem complicação</p>
                <p>✔ Foco em resultado real</p>
              </div>

              {/* CTA WHATSAPP */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-6 h-6 fill-white"
                >
                  <path d="M16 .4C7.3.4.4 7.3.4 16c0 2.8.7 5.5 2.1 7.9L.4 31.6l7.9-2.1c2.3 1.3 5 2 7.7 2 8.7 0 15.6-6.9 15.6-15.6S24.7.4 16 .4zm0 28.4c-2.4 0-4.8-.7-6.8-1.9l-.5-.3-4.7 1.2 1.3-4.6-.3-.5c-1.3-2-2-4.4-2-6.8 0-7.1 5.8-12.9 12.9-12.9S28.9 8.9 28.9 16 23.1 28.8 16 28.8zm7.3-9.6c-.4-.2-2.3-1.1-2.7-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.4-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.1-.8.1-.1.4-.4.6-.6.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7 0-.2-.9-2.2-1.2-3-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.7.1-1 .5-.3.4-1.4 1.3-1.4 3.2s1.5 3.7 1.7 3.9c.2.2 3 4.6 7.4 6.4 1 .4 1.8.6 2.4.8 1 .3 1.9.2 2.6.1.8-.1 2.3-1 2.6-1.9.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5z" />
                </svg>
                Falar direto no WhatsApp
              </a>
            </div>

            {/* FORM */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="font-semibold mb-4">Ou envie uma mensagem</h3>

              {submitted ? (
                <p className="text-green-400">
                  Mensagem enviada! Em breve entraremos em contato.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    className="bg-white/5 p-3 rounded outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Seu nome"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />

                  <input
                    className="bg-white/5 p-3 rounded outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Seu email"
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
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

              {/* GARANTIA */}
              <p className="text-xs text-gray-500 mt-4">
                Sem compromisso — vamos entender seu problema e te orientar.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#05080f] border-t border-white/10 py-12 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-sm">
            {/* MARCA */}
            <div>
              <h3 className="text-lg font-bold mb-3">Jireh Software</h3>

              <p className="text-gray-400 mb-4">
                Soluções tecnológicas sob medida para ajudar empresas a crescer
                com eficiência e simplicidade.
              </p>

              <p className="text-gray-500 italic text-xs">
                “Tecnologia com propósito, feita para pessoas.”
              </p>
            </div>

            {/* NAVEGAÇÃO */}
            <div>
              <h4 className="font-semibold mb-3">Navegação</h4>

              <ul className="space-y-2 text-gray-400">
                {[
                  { label: "Serviços", href: "#services" },
                  { label: "Processo", href: "#process" },
                  { label: "Sobre", href: "#about" },
                  { label: "Contato", href: "#contact" },
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      className="hover:text-green-400 transition"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTATO */}
            <div>
              <h4 className="font-semibold mb-3">Contato</h4>

              <ul className="space-y-3 text-gray-400">
                {/* ITEM COM ANIMAÇÃO */}
                {[
                  {
                    icon: <Phone size={16} />,
                    label: "WhatsApp",
                    href: whatsappLink,
                  },
                  {
                    icon: <Mail size={16} />,
                    label: "contato@jirehsoftware.com.br",
                    href: "mailto:contato@jirehsoftware.com.br",
                  },
                  {
                    icon: <Globe size={16} />,
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/gabriel-martins-68a235a8/",
                  },
                  {
                    icon: <Camera size={16} />,
                    label: "Instagram",
                    href: "https://instagram.com/jireh.software",
                  },
                ].map((item, i) => (
                  <li key={i}>
                    <motion.a
                      href={item.href}
                      target="_blank"
                      whileHover={{ scale: 1.05 }}
                      className="group flex items-center gap-2 transition"
                    >
                      <span className="text-gray-400 group-hover:text-green-400 transition duration-300 group-hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]">
                        {item.icon}
                      </span>

                      <span className="group-hover:text-green-400 transition duration-300">
                        {item.label}
                      </span>
                    </motion.a>
                  </li>
                ))}

                {/* LOCAL (sem link) */}
                <li className="flex items-center gap-2 text-gray-400">
                  <MapPin size={16} />
                  Santa Rita do Sapucaí - MG
                </li>
              </ul>
            </div>

            {/* INFO */}
            <div>
              <h4 className="font-semibold mb-3">Informações</h4>

              <ul className="space-y-2 text-gray-400">
                <li>Atendimento sob demanda</li>
                <li>Soluções personalizadas</li>
                <li>Projetos sob orçamento</li>
              </ul>
            </div>
          </div>

          {/* LINHA FINAL */}
          <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-center text-xs text-gray-500 space-y-1">
            <p>
              © {new Date().getFullYear()} Jireh Software. Todos os direitos
              reservados.
            </p>

            <p>Jireh Software ME • CNPJ: 43.286.490/0001-47</p>
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

function ProcessSection({ whatsappLink }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // linha crescendo
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      title: "Entendimento",
      desc: "Conversamos para entender seu problema e objetivo.",
      icon: <Search size={20} />,
    },
    {
      title: "Planejamento",
      desc: "Definimos a melhor solução e estrutura do projeto.",
      icon: <ClipboardList size={20} />,
    },
    {
      title: "Desenvolvimento",
      desc: "Construção com acompanhamento e melhorias contínuas.",
      icon: <Code2 size={20} />,
    },
    {
      title: "Entrega",
      desc: "Implementação e validação completa da solução.",
      icon: <Rocket size={20} />,
    },
    {
      title: "Acompanhamento contínuo",
      desc: "Mesmo após a entrega, acompanhamos o uso da solução e oferecemos suporte para garantir desempenho e evolução contínua.",
      icon: <LifeBuoy size={20} />,
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* LINHA BASE */}
        <div className="hidden lg:block absolute top-10 left-0 w-full h-[2px] bg-white/10" />

        {/* LINHA ANIMADA */}
        <motion.div
          style={{ width: lineWidth }}
          className="hidden lg:block absolute top-10 left-0 h-[2px] bg-gradient-to-r from-green-400 to-blue-500"
        />

        {/* STEPS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative">
          {steps.map((item, i) => {
            const start = i / steps.length;
            const end = start + 1 / steps.length;

            const progress = useTransform(
              scrollYProgress,
              [start, end],
              [0, 1],
            );

            const scale = useTransform(progress, [0, 1], [0.85, 1]);
            const opacity = useTransform(progress, [0, 1], [0.3, 1]);

            const isActive = useTransform(progress, (v) => v > 0.5);

            return (
              <motion.div
                key={i}
                style={{ scale, opacity }}
                className="flex flex-col items-center text-center relative"
              >
                {/* ÍCONE */}
                <motion.div
                  style={{
                    backgroundColor: useTransform(
                      progress,
                      [0, 1],
                      ["#05080f", "#00e5b0"],
                    ),
                    color: useTransform(progress, [0, 1], ["#9ca3af", "#000"]),
                    boxShadow: useTransform(
                      progress,
                      [0, 1],
                      ["0 0 0px rgba(0,0,0,0)", "0 0 20px rgba(34,197,94,0.7)"],
                    ),
                  }}
                  className="z-10 mb-6 w-14 h-14 flex items-center justify-center rounded-full border border-white/10 transition-all"
                >
                  {item.icon}
                </motion.div>

                {/* CARD */}
                <motion.div
                  style={{
                    borderColor: useTransform(
                      progress,
                      [0, 1],
                      ["rgba(255,255,255,0.1)", "rgba(34,197,94,0.6)"],
                    ),
                    boxShadow: useTransform(
                      progress,
                      [0, 1],
                      ["0 0 0px rgba(0,0,0,0)", "0 10px 30px rgba(0,0,0,0.4)"],
                    ),
                  }}
                  className="bg-white/5 backdrop-blur-md border p-6 rounded-2xl w-full transition-all"
                >
                  <p className="text-green-400 font-bold mb-2 text-sm">
                    0{i + 1}
                  </p>

                  <h3 className="font-semibold mb-2 text-base">{item.title}</h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
