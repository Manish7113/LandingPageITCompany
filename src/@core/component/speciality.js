import ServiceCard from "../subComponent/serviceCard";
import Specialitycard from "../subComponent/specialityCard";

export default function Speciality(){
    // const serviceCard = [
    //     {
    //         icon
    //     }
    // ]
    return (
        <section className="primary-bg white pt-5 speciality">
            <div className="container d-flex flex-column justify-content-center gap-5">
            <div className="white d-flex justify-content-center flex-column align-items-center">
                <h3 className="roboto-bold fs-xxl txt-center">Hello, we are canddy creative </h3>
                <p className=" secondary txt-center container fs-sm ls-20">Digital Agency offering unique solution to create digital presence and increase your sales
               
                </p>


            </div>
            <div className="d-flex flex-wrap justify-content-center gap-5 align-items-center mb-5">
                <Specialitycard></Specialitycard>
                <Specialitycard></Specialitycard>
                <Specialitycard></Specialitycard>

            </div>

            </div>

        </section>
    )
}