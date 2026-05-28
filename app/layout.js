import './globals.css';

export const metadata = {
  title: 'Srijan Shubh | Portfolio',
  description: 'Graphic Design Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white">{children}</body>
    </html>
  )
}