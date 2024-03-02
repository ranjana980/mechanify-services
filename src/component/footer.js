import footerLogo from '../assests/images/download.png'
import logo from '../assests/images/logo.png'

const Footer = () => {
    return (
        <div>
            <div className="row " style={{ backgroundColor: '#000' }}>
                <div className="col-xl-3 col-lg-3 col-md-3 mt-3 ml-4 mb-2" >
                    <img src={logo} height="70" width="200"  />
                </div>
                <div className='row ml-3 col-xl-7 col-lg-7 col-md-8 mb-2'>
                    <div className="col-xl-4 col-lg-4 col-md-6 mt-3 " >
                        <h4 className="grey ">Address </h4>
                        <div className="white font-weight-bold">
                            <li type="none" >Head Office :<br />
                                Rohini Delhi - 110085</li>
                            <li type="none">Phone: +91 - 966-793-7517</li>
                            <li type="none">Phone: +91 - 966-795-9059</li>
                            <li type="none">Email: Reach@mechanify.in</li>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mt-3" >
                        <h4 className="grey ">Service</h4>
                        <div className="white font-weight-bold">
                            <li type="none">Engine Repair</li>
                            <li type="none">Tyre Replacement</li>
                            <li type="none">Transmission</li>
                            <li type="none">Extended Warranty</li>
                            <li type="none">Batteries</li>
                            <li type="none">Break Repair</li>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mt-3" >
                        <h4 className="grey ">Popular Brand</h4>
                        <div className="white font-weight-bold">
                            <li type="none">Royal Enfield</li>
                            <li type="none">Suzuki</li>
                            <li type="none">Hero</li>
                            <li type="none">Honda</li>
                            <li type="none">Bajaj</li>
                            <li type="none">Yamaha</li>
                            <li type="none">TVS</li>
                            <li type="none">jawa</li>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: 'rgb(22, 20, 20)' }}>
                <div className="row d-flex ml-4  " >
                    <div className="col-sm-6 ">
                        <p style={{ fontSize: '15px', color: 'white' }}>© 2020 Mechanify Services Pvt Ltd</p>
                    </div>
                    <div className="col-sm-6 ">
                        <img src={footerLogo} height="30" width="30" style={{ borderRadius: '5px', marginLeft: ' 70%' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;