import { Icon } from "@iconify/react";
import PhoneImage from '../../assets/images/phone.png'
import Image from "next/image";

export default function Feature(){
    return(
        <div className="container">
        <div className="featureBlock row mb-5 mt-3">
            <div className="col-12 col-xl-9 col-lg-8 col-md-8 col-sm-12 col-xs-12 d-flex flex-column justify-content-center align-items-start text-container gap-3">
                <p className="fs-xxl primary roboto-medium p-0 m-0 ls-50 txt-center" >All in one market software report </p>
                <p className="p-0 m-0  primary">Digital Agency offering unique solution to create digital presence and increase your sales to create digital presence and increase your sales</p>
                <p className="p-0 m-0  primary">Digital Agency offering unique solution to create digital presence and increase your sales</p>
                <button className='main-btn white orange-bg fs-md'>
                    Request access <Icon icon="tabler:arrow-right" />
                </button>

            </div>
            <div className="col-12 col-xl-3 col-lg-4 col-md-4 col-sm-12 col-xs-12 d-flex flex-column justify-content-center align-items-start">
                <Image src={PhoneImage} alt="not found "  className="image img-fluid"></Image>
 
            </div>

        </div>

        </div>
    )
}