import Header from "@/components/header";
import "./globals.css";
import { Inter} from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs";
import CreateEventDrawer from "@/components/create-event";

const inter = Inter({
  subsets: ['latin']
});
export const metadata = {
  title: "BookEase",
  description: "Book your next meet with ease.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* Header */}
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          {/* Footer */}
          <footer className="py-8 border-t shadow-md">
            <div className="container mx-auto px-4 text-center text-black">
              <p>Made with ❤️ by snegicodes</p>
            </div>
          </footer>
          <CreateEventDrawer />
        </body>
      </html>
    </ClerkProvider>
  );
}
