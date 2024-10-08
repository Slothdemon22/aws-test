




import Hero from "@/comp/Hero";
import Navbar from "@/comp/Navbar";
import Experience from "@/comp/Experience";
import Card from "@/comp/Card";
import Footer from "@/comp/Footer";
import './globals.css'; // if _app.js and globals.css are in the same directory



export const metadata = {
    title: 'Health Carely',
    description: 'Generated by create next app',
}




export default function Home() {
    return (
        <>
            
                    <div className="app w-screen overflow-hidden ">
                            <Navbar/>
                            <Hero/>
                            <Card/>
                            <Experience />
                            <Footer/>
                            
                    </div>
        </>
    );
}