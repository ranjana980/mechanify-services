import repairs from '../assests/images/repairs.png'

const About = () => {
    return (
        <div className='container'>
            <div className="row d-flex align-self-center justify-content-center  mt-5">
                <div className="col-md-12 col-xl-6 col-lg-6 ">
                    <img className="img1" src={repairs} alt="repairs" />
                </div>
                <div className="col-md-12  col-xl-6 col-lg-6">
                    <h1 className="order-3  font-weight-bold" fo> About Mechanify </h1>
                    <h6 className="padding">Mechanify is an innovative automotive service sector offering premium 2-wheeler service
                        at<br /> local costing.
                        Its vision is to organize this unorganized local Automotive market using<br />
                        technology and Mechanify’s brand values.</h6>
                    <h6 className="padding">● We provide Fleet maintenance as a service for companies with bikes and electric
                        vehicles<br /> and help them
                        optimize their unit economics by providing disruptive maintenance cost.</h6>
                    <h6 className="padding">● We provide doorstep vehicle service and repair for B2B clients like logistics,
                        delivery<br />companies,
                        corporates and co-working, so that they can focus on work and not stress about maintenance.</h6>
                    <h6 className="padding">● We also provide roadside assistance to manage your vehicle’s health directly through our
                        app, or via
                        call.</h6>
                </div>
            </div>
        </div>
    )
}

export default About;