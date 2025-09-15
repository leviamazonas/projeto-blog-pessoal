import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../../components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Transição em Preto e Branco",
  description: "A jornada de um homem trans e autista em sua transição da publicidade para a tecnologia, narrada com a paixão e a raça de um corinthiano.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <div className="flex flex-col min-h-screen">
          
          <Header /> {/* Nosso novo cabeçalho interativo */}

          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>

          <footer className="bg-gray-100 border-t border-gray-200 mt-auto">
            <div className="container mx-auto px-4 py-4 text-center text-gray-500">
              <p>&copy; {new Date().getFullYear()} Meu Blog Pessoal. Todos os direitos reservados.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}