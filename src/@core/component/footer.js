'use client'

import { Icon } from "@iconify/react"

export default function Footer() {


    const footerData = [
        {
            heading: 'Product',
            dataItem: ['Platform', 'Store Overview', 'Email Reports', 'Portfolio']
        },
        {
            heading: 'Resouces',
            dataItem: ['Case studies', 'Product Guides', 'Reports', 'Blog']
        },
        {
            heading: 'Company',
            dataItem: ['Carrers', 'Contact Sales', 'Contact Support']
        },
    ]


    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-xl-3 col-lg-4 col-md-4 col-sm-12 col-xs-12 d-flex flex-column mb-5">
                    <p className="roboto-bold fs-xl ">CodeMama</p>
                    <p className="roboto-regular gray fs-sm">Your brand deserves more than a cookie-cutter solution. We tailor websites to your unique goals</p>
                    <div className="d-flex flex-row align-items-center gap-3">
                        <div className="footerIconContainer d-flex justify-content-center align-items-center ">
                            <Icon icon="ei:sc-facebook" className="footerIcon" />

                        </div>
                        <div className="footerIconContainer d-flex justify-content-center align-items-center ">
                            <Icon icon="ri:linkedin-fill" className="footerIcon" />

                        </div>
                        <div className="footerIconContainer d-flex justify-content-center align-items-center ">
                            <Icon icon="line-md:twitter-x" className="footerIcon" />

                        </div>

                    </div>

                </div>
                <div className="col-12 col-xl-9 col-lg-8 col-md-8 col-sm-12 col-xs-12 d-flex justify-content-around  flex-wrap gap-5">
                    {
                        footerData?.map((item, index) => (
                            <div className="d-flex flex-column gap-2">
                                <p className="roboto-bold fs-lg  ">{item?.heading}</p>
                                {
                                    item?.dataItem?.map((listItem,itemIndex )=>(
                                        <p key={itemIndex} className="roboto-regular gray fs-sm p-0 m-0 ">{listItem}</p>
                                    ))
                                }
                            </div>
                        ))
                    }
                    
                </div>

            </div>

            <div className="d-flex justify-content-center align-items-center">
                <p className="fs-sm roboto-regular gray">Copyright @ CodeMama 2024</p>

            </div>


        </div>
    )
}