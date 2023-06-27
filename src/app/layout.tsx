import './globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: 'iClik',
  description: 'Click Together',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className=''>
        <Header />
        {children}
      </body>
    </html>
  );
}
