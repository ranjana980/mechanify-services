
const Contact = () => {
    return (
        <div className="container mb-5">
            <div className="row gap-5 mt-5">
                <div className="col-sm-5">
                    <div className="bg-primary d-flex text-center align-self-center p justify-content-center" >
                        <i className="fas fa-envelope white mt-1 mr-2"></i>
                        <h5 className=" text-white">Address</h5>
                    </div>
                    <div className="card mt-4" >
                        <ul className="list-group list-group-flush">
                            <h1 className="list-group-item">Main office</h1>
                            <li className="list-group-item ">
                                <span className="d-flex ">
                                    <i className="fas fa-map-marker-alt "></i>
                                    <span className="ml-2 ">
                                        <div>
                                            Head office:
                                        </div>
                                        <div >Rohini Delhi-110085</div>
                                    </span>
                                </span>
                            </li>
                            <li className="list-group-item">
                                <i className="fas fa-phone "></i>
                                <span className="ml-2">+91 - 966-793-7517</span>
                            </li>
                            <li className="list-group-item">
                                <i className="fas fa-phone "></i>
                                <span className="ml-2"> +91 - 966-795-9059</span>
                            </li>
                            <li className="list-group-item">
                                <i className="fas fa-envelope-square "></i>
                                <span className="ml-2">reach@mechanify.in</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="bg-primary d-flex text-center align-self-center justify-content-center p">
                        <i className="fas fa-briefcase white mt-1 mr-2"></i>
                        <h5 className=" text-white">Enter your Informations</h5>
                    </div>
                    <div className="card align-self-center mt-4" >
                        <h4 className="padding">For B2b Clients</h4>
                        <input className="padding w-75  ml-4" placeholder="Name"></input>
                        <input className="padding w-75  ml-4" placeholder="Email" type="text"></input>
                        <input className="padding w-75  ml-4" placeholder="Phone" type="text" ></input>
                        <input className="padding w-75  ml-4  mb-3" placeholder="Message" type="text"></input>
                        <div className="bg-primary send-btn d-flex w-75 text-center ml-4 justify-content-center p  mb-2" >
                            <h5 className=" text-white">Send Message</h5>
                            <i class="fas fa-angle-double-right white mt-1 mr-2 mt-2 ml-2"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;