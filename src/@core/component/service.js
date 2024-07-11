import ServiceCard from "../subComponent/serviceCard";

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
                <h3 className="heading-right roboto-bold fs-xl txt-center ">Provide Quality Services.</h3>
                <p className="description-left fs-sm ls-20 txt-center">Digital Agency offering unique solution to create digital presence and increase your sales</p>


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