'use client'
import ServiceCard from "../subComponent/serviceCard";
import { motion } from "framer-motion"

export default function Service(){
    const serviceCard = [
        {
            icon : 'fe:app-menu',
            heading :'App Developement',
            description :'Get your app for upto 5 lacs user and get playstore access for the entire updatation'
        },
        {
           
            icon : 'streamline:web-solid',
            heading :'Web Developement',
            description :'Get your app for upto 5 lacs user and get playstore access for the entire updatation'
        },
        {
            icon : 'la:uikit',
            heading :'UI/UX Developement',
            description :'Get your app for upto 5 lacs user and get playstore access for the entire updatation'
        }
        
    ]
    return (
        <section className="primary-bg white pt-5">
            <div className="container d-flex flex-column justify-content-center gap-5">
            <div className="white d-flex justify-content-between align-items-center flex-wrap gap-5">
                <motion.h3   initial={{ opacity: 0.2, y:100 }}  whileInView={{ opacity: 1, y:0,}}  transition={{ duration: .4 }}  className="heading-right roboto-bold fs-xl txt-center ">Provide Quality Services.</motion.h3>
                <p className="description-left fs-sm ls-20 txt-center">Level up your digital game. Our innovative solutions amplify your online presence & sales</p>


            </div>
            <div className="d-flex flex-wrap justify-content-around align-items-center gap-3 mb-5">
                {
                    serviceCard?.map((item, index)=>{
                        return(
                            <ServiceCard key={index} data={{item}}></ServiceCard>
                        )
                    })
                }
                

            </div>

            </div>

        </section>
    )
}