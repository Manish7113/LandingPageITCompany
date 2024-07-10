'use client'

import Contact from "@/@core/component/contact";
import Feature from "@/@core/component/feature";
import Footer from "@/@core/component/footer";
import Navbar from "@/@core/component/navbar";
import Service from "@/@core/component/service";
import Speciality from "@/@core/component/speciality";

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Service></Service>
    <Feature></Feature>
    <Speciality></Speciality>
    <Contact></Contact>
    <Footer></Footer>
   
 
    </>
    
  );
}
