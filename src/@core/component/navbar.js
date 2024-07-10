'use client'
import { Icon } from '@iconify/react';
export default function Header() {
    return (
        <header className='header d-flex flex-column justify-content-between'>
            <div className='d-flex justify-content-evenly align-items-center mt-5 '>
            <div></div>
            <div className='d-flex justify-content-center align-items-center gap-4'>
                <div className='outerCircle'>
                    <div className='innerCircle'>

                    </div>
                </div> <p className='roboto-bold fs-xl p-0 m-0'>CoDaddy</p></div>
            <div className='d-flex justify-content-end'>
                <Icon icon="ci:menu-alt-02" className='fs-xxl align-self-end' />

            </div>

            </div>
            <div className='headerContainer d-flex  justify-content-center align-items-center mb-5'>
            <div className='headerSection d-flex flex-column justify-content-center align-items-center '>
                <p className='roboto-bold fs-xxl ls-50 primary'>Product Experience</p>
                <p className='roboto-regular fs-md ls-20'> Digital Agency offering unique solution to create digital presence and increase your sales  </p>
                <button className='main-btn white orange-bg fs-md'>
                    Request access <Icon icon="tabler:arrow-right" />
                </button>

            </div>

            </div>

        </header>
    )
}