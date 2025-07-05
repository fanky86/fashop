export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head />
      <body className="bg-gray-100 font-sans text-gray-900">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
