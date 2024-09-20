import Head from 'next/head';
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
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
        />
      </Head>
      <body>   
        {children}
        </body>
    </html>
  )
}
