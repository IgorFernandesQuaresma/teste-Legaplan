import { TarefaProvider } from "../context/TarefasContext";
import "../styles/globals.scss";


export const metadata = {
  title: 'Projeto desenvolvido para teste',
  description: 'Teste Legaplan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
        />
      </head>
      <body>
      <TarefaProvider>
        {children}
      </TarefaProvider>
        </body>
    </html>
  )
}
