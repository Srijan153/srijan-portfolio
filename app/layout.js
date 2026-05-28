import './globals.css';

export const metadata = {
  title: 'Srijan Shubh | Portfolio',
  description: 'Structuring visual narratives through precise graphic design.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white selection:bg-teal-500 selection:text-white">
        {children}
      </body>
    </html>
  )
}