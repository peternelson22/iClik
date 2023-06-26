import './globals.css'

export const metadata = {
  title: 'iClik',
  description: 'Click Together',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=''>{children}</body>
    </html>
  )
}
