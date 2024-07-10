'use-client'
import { Icon } from "@iconify/react";

export default function ServiceCard(){
    return(
        <div className="specialityCard d-flex flex-column justify-content-start align-items-start p-3 pt-4 pb-4 gap-4">
            <div className="iconContainer d-flex justify-content-center align-items-center">
            <Icon icon="ri:code-box-line" className="service-card-icon"/>

            </div>
            <p className="fs-lg roboto-medium p-0 m-0 w-75 ls-20">Invest in talented team</p>
            <p className="fs-xs secondary-txt">Digital Agency offering unique solution 10 create digital presence
            Digital Agency offering unique solution 10 create digital presence
            </p>
        </div>
    )
}