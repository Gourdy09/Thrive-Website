"use client";
import Navbar from "./components/Navbar";


export default function Home() {


  return (
    <div className="overflow">
      <Navbar />
      <main className="w-screen h-[80vh]  bg-brand-primary transition-colors duration-300">
        <h1>Thrive</h1>
      </main>
    </div>

  );
}