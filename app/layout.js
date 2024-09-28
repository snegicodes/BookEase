import Header from "@/components/header";
import "./globals.css";
import {Rubik} from "next/font/google"

const rubik = Rubik({
  subsets: ["latin"],
})
export const metadata = {
  title: "BookEase",
  description: "Book your next meet with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {/* Header */}
        <Header/>
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
          {children}
        </main>
        {/* Footer */}
        <footer className="py-12 bg-blue-100">
          <div className="container mx-auto px-4 text-center text-gray-500">
            <p>Made with ❤️ by snegicodes</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
