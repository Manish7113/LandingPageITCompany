import ServiceCard from "../subComponent/serviceCard";
import Specialitycard from "../subComponent/specialityCard";

export default function Speciality(){
    const techCard = [
        {
          
            icon :'ri:reactjs-fill',
            heading : 'React Js',
            description : 'React JS lets you build web UIs with reusable components, like Lego blocks for code. It uses a virtual DOM for super-fast updates, and JSX for easy UI coding (think HTML mixed with JavaScript). This, along with one-way data flow, makes development quick and efficient. Thats why React is a favorite for building dynamic and scalable web applications'
            
        },
        {
            
          
            icon :'ri:nextjs-line',
            heading : 'Next Js',
            description : 'Next.js builds on React`s awesomeness, adding superpowers for server-rendered apps. It takes care of routing, data fetching (both at build time and on request), image optimization, and more. This lets you focus on building features without getting bogged down in complex setup. Think of it as React on steroids, perfect for creating fast, SEO-friendly web experiences'
            
        },
        {
            
            icon :'mdi:bootstrap',
            heading : 'Bootstrap ',
            description : 'Bootstrap is a superstar framework for front-end development. It provides pre-built components (buttons, forms, navigation, etc.) and styles, letting you create responsive websites quickly without starting from scratch. Think of it as a web design toolkit that saves you time and effort.'
            
        }
    ]
    return (
        <section className="primary-bg white pt-5 speciality">
            <div className="container d-flex flex-column justify-content-center gap-5">
            <div className="white d-flex justify-content-center flex-column align-items-center">
                <h3 className="roboto-bold fs-xxl txt-center">Hello, we are canddy creative </h3>
                <p className=" secondary txt-center container fs-sm ls-20">We're passionate about harnessing the power of technology to empower businesses and individuals
               
                </p>


            </div>
            <div className="d-flex flex-wrap justify-content-center gap-5 align-items-center mb-5">
                {
                    techCard?.map((item,index)=>(
                        <Specialitycard key={index} data={{item}}></Specialitycard>

                    ))
                }
        

            </div>

            </div>

        </section>
    )
}