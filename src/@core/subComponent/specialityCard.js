'use-client'
import { Icon } from "@iconify/react";

export default function ServiceCard({ data }) {


    return (
        <div className="specialityCard d-flex flex-column justify-content-start align-items-start p-3 pt-4 pb-4 gap-4">
            <div className="iconContainer d-flex justify-content-center align-items-center">
                <Icon icon={data?.item.icon} className="service-card-icon scale-1" />

            </div>
            <p className="fs-lg roboto-medium p-0 m-0 w-75 ls-20">{data?.item?.heading}</p>
            <p className="fs-xs secondary-txt">{data?.item?.description}
            </p>
        </div>
    )
}