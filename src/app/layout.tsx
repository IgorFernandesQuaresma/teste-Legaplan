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
        
      </head>
      <body>   
        {children}
        </body>
    </html>
  )
}
