import { TrpcProvider } from '../utils/trpc-provider';
import { AuthProvider } from '../utils/auth-context';
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <head>
       <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
       </head>
      <body>
        <TrpcProvider>
            <AuthProvider>{children}</AuthProvider>
        </TrpcProvider>
        <div className="wave-container">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
        </div>
      </body>
    </html>
  );
}
