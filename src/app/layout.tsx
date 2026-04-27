import Navbar from "@/components/ui/Navbar"; // Navbar yo'li to'g'riligiga ishonch hosil qiling
import "./globals.css";

export const metadata = {
  title: "ITV Admin Panel",
  description: "Kino va Banner boshqaruvi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&family=Titan+One&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#111111] antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
// "use client";

// import { usePathname } from "next/navigation";
// import "./globals.css";
// import Navbar from "@/components/ui/Navbar";

// export default function RootLayout({ children }) {
//   const pathname = usePathname();
//   const noNavbarRoutes = ["/login", "/register"];
//   const showNavbar = !noNavbarRoutes.includes(pathname);

//   return (
//     <html lang="uz">
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//         <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&family=Titan+One&display=swap" rel="stylesheet" />
//       </head>

//       <body className="antialiased">
//         {showNavbar && (
//           <Navbar/>
//         )}

//         <main>
//           {children}
//         </main>
//       </body>
//     </html>
//   );
// }