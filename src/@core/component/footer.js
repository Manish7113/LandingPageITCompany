'use client'

import { Icon } from "@iconify/react"

export default function Footer() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-xl-3 col-lg-4 col-md-4 col-sm-12 col-xs-12 d-flex flex-column mb-5">
                    <p className="roboto-bold fs-xl ">Codaddy</p>
                    <p className="roboto-regular gray fs-sm">Building a next generation collobaration platform to connect renters owners homeoweners and agents </p>
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
                    <div className="d-flex flex-column gap-2">
                    <p className="roboto-bold fs-lg  ">Product</p>
                    <p className="roboto-regular gray fs-sm p-0 m-0 ">Platform</p>
                    <p className="roboto-regular gray fs-sm p-0 m-0 ">Store Overview</p>
                    <p className="roboto-regular gray fs-sm p-0 m-0 ">Email Reports</p>
                    <p className="roboto-regular gray fs-sm p-0 m-0 ">Portfolio</p>
                    

                    </div>
                    <div className="d-flex flex-column gap-2">
                    <p className="roboto-bold fs-lg  ">Resouces</p>
                    <p className="roboto-regular gray fs-sm p-0 m-0 ">Case studies</p>
                    <p className="roboto-regular gray fs-sm p-0 m-0 ">Product Guides</p>
                    <p className="roboto-regular gray fs-sm p-0 m-0 ">Reports </p>
                    <p className="roboto-regular gray fs-sm p-0 m-0 ">Blog</p>
                    

                    </div>
                    <div className="d-flex flex-column gap-2">
                    <p className="roboto-bold fs-lg  ">Company</p>
                    <p className="roboto-regular gray fs-sm p-0 m-0 ">Carrers</p>
                    <p className="roboto-regular gray fs-sm p-0 m-0 ">Contact Sales</p>
                    <p className="roboto-regular gray fs-sm p-0 m-0 ">Contact Support</p>
                  
                    

                    </div>


                </div>

            </div>
                
            <div className="d-flex justify-content-center align-items-center mt-5">
                <p className="fs-sm roboto-regular gray">Copyright @ Codaddy 2024</p>

            </div>


        </div>
    )
}