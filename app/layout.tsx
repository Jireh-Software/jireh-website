import "./globals.css";

export const metadata = {
  title: "Jireh Software",
  description: "Desenvolvimento de software, consultoria e ensino de programação"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
