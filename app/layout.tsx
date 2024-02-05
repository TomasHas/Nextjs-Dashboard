import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        // suppressHydrationWarning={true}// this blocks an error caused by gramarly.
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
