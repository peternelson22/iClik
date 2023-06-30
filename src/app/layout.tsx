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
      <body className='scrollbar-thin scrollbar-track-slate-600 scrollbar-thumb-rose-800'>
        <Header />
        {children}
      </body>
    </html>
  );
}
