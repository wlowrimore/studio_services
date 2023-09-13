import MainNav from "./components/navigation/MainNav";
import "./globals.css";
import { Comfortaa } from "next/font/google";

const comfort = Comfortaa({ subsets: ["latin"] });

export const metadata = {
  title: "Imperial Studios",
  description:
    "Imperial Studios is a make believe single page parallax scrolling app.  This app was created using NextJS and TailwindCSS",
  keywords: [
    "React",
    "NextJS",
    "Tailwind",
    "CSS",
    "Hooks",
    "JavaScript",
    "William",
    "Lowrimore",
    "Portfolio",
    "Frontend",
    "frontend",
    "Front-End",
    "front-end",
    "UI",
    "UX",
    "Developer",
    "Software",
    "Engineer",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={comfort.className}>
        <MainNav />
        {children}
        <script src="https://unpkg.com/taos@1.0.5/dist/taos.js"></script>
      </body>
    </html>
  );
}
