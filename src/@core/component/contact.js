export default function Contact(){
    return(
        <div className="container contactContainer mt-5 d-flex justify-content-center align-items-center flex-column white rounded-3 gap-2">
            <p className="fs-xxl roboto-medium p-0 m-0 txt-center">Subscribe Our NewsLetter</p>
            <p className="p-0 m-0 roboto-regular orangeLight txt-center">Digital Agency offering unique solution 10 create digital presence</p>
            <p className="p-0 m-0 roboto-regular orangeLight txt-center">Digital Agency offering unique solution 10 create digital presence  create digital presence </p>
            <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap mt-5 ">
                <input className="main-input" type='text' placeholder="Enter your Email"></input>
                <button className="main-btn primary-bg white fs-lg fw-500">Subscribe</button>
            </div>
        </div>

    )
}