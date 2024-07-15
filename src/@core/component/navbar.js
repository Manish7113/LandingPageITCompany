'use client'
import { Icon } from '@iconify/react';
import { motion } from "framer-motion"
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Header() {

    const [showSideBar , setShowSideBar] = useState(false)

    const handleClose = () =>{
        setShowSideBar(false)
    }

    return (
        <header className='header d-flex flex-column justify-content-between'>
            <div className='d-flex justify-content-evenly align-items-center mt-5 '>
                <div></div>
                <div className='d-flex justify-content-center align-items-center gap-4'>
                    <div className='outerCircle'>
                        <div className='innerCircle'>

                        </div>
                    </div> <p className='roboto-bold fs-xl p-0 m-0'>CodeMama</p></div>
                <div className='d-flex justify-content-end'>
                    <Icon icon="ci:menu-alt-02" className='fs-xxl align-self-end cursorPointer'  onClick={()=>{
                        setShowSideBar(true)
                    }} />

                </div>

            </div>
            <div className='headerContainer d-flex  justify-content-center align-items-center mb-5'>
                <div className='headerSection d-flex flex-column justify-content-center align-items-center '>
                    <p className='roboto-bold fs-xxl ls-50 primary'>Move Towards Online</p>
                    <p className='roboto-regular fs-md ls-20'> We craft websites & apps that skyrocket your digital presence & sales. </p>
                    <motion.button initial={{ x: -1000 }} animate={{ x: 0 }} className='main-btn white orange-bg fs-md'>
                        Request access <Icon icon="tabler:arrow-right" />
                    </motion.button>

                </div>

            </div>
            <Offcanvas show={showSideBar} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>

        </header>
    )
}