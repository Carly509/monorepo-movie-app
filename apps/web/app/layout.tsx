// web/app/layout.tsx
import { TrpcProvider } from '../utils/trpc-provider';
import { AuthProvider } from '../utils/auth-context';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <TrpcProvider>
            <AuthProvider>{children}</AuthProvider>
        </TrpcProvider>
      </body>
    </html>
  );
}
