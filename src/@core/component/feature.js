'use client'
import { Icon } from "@iconify/react";
import PhoneImage from '../../assets/images/phone.png'
import Image from "next/image";
import { motion } from "framer-motion"

export default function Feature() {
    return (
        <div className="container">
            <div className="featureBlock row mb-5 mt-3">
                <div className="col-12 col-xl-9 col-lg-8 col-md-8 col-sm-12 col-xs-12 d-flex flex-column justify-content-center align-items-start text-container gap-3">
                    <motion.p drag
                        dragConstraints={{
                            top: -50,
                            left: -50,
                            right: 50,
                            bottom: 50,
                        }} className="fs-xxl primary roboto-medium p-0 m-0 ls-50 txt-center" >Simplify Marketing, Amplify Results. </motion.p>
                    <p className="p-0 m-0  primary">Grow your brand & sales online. We craft powerful digital experiences. Unleash your online potential. We build websites that convert</p>
                    <p className="p-0 m-0  primary">From invisibility to influence. We build websites that get results. Dominate your digital space. We fuel brand growth & sales.

                        pen_spark
                    </p>
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }} className='main-btn white orange-bg fs-md'>
                        Request access <Icon icon="tabler:arrow-right" />
                    </motion.button>

                </div>
                <div className="col-12 col-xl-3 col-lg-4 col-md-4 col-sm-12 col-xs-12 d-flex flex-column justify-content-center align-items-start">
                    <Image src={PhoneImage} alt="not found " className="image img-fluid"></Image>

                </div>

            </div>

        </div >
    )
}