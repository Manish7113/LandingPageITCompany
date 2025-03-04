'use-client'
import { Icon } from "@iconify/react";

export default function ServiceCard({data}){

    
    return(
        <div className="serviceCard d-flex flex-column justify-content-start align-items-start p-3 pt-4 pb-4 gap-2">
            <Icon icon={data?.item?.icon} className="service-card-icon"/>
            <p className="fs-lg roboto-medium p-0 m-0 w-50 ls-20">{data?.item?.heading}</p>
            <p className="fs-xs ">{data?.item?.description}</p>
        </div>
    )
}