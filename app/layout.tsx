import "./globals.css";

export const metadata = {
  title: {
    default: "Jireh Software",
    template: "%s | Jireh Software"
  },
  description:
    "Especialistas em desenvolvimento backend com Java, Quarkus e microservices. APIs escaláveis, consultoria e ensino de programação.",
  keywords: [
    "Java",
    "Quarkus",
    "microservices",
    "backend",
    "API",
    "Kafka",
    "desenvolvimento de software"
  ],
  authors: [{ name: "Jireh Software" }],
  creator: "Jireh Software",

  openGraph: {
    title: "Jireh Software",
    description:
      "Desenvolvimento backend moderno com Java, Quarkus e microservices.",
    url: "https://jirehsoftware.com.br",
    siteName: "Jireh Software",
    locale: "pt_BR",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Jireh Software",
    description:
      "Especialistas em backend e arquitetura de sistemas escaláveis"
  },

  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#05080f] text-white antialiased">
        {children}
      </body>
    </html>
  );
}