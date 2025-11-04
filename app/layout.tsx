import "../styles/globals.css";

export const metadata = {
  title: "VTW — vs the world",
  description: "Streetwear built for the comeback — vs the world.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}

