
import { benfitItems, serviceItems } from '../utils/constant'

const Home = () => {
    return (
        <div>
            <div className="image text-center">
                <h1 className="font-weight-bold text-center white align-self-end">We provide two wheeler service</h1>
                <h1 className="font-weight-bold text-center text-primary">at</h1>
                <h1 className="font-weight-bold text-center text-primary">your doorstep</h1>
                <h3 className="text-white">
                    <span>
                        <span>only at Rs.149</span>
                        <span className="typed-cursor">|</span>
                    </span>
                </h3>
            </div>
            <div className="bg-light">
                <h1 className="font-weight-bold text-center padding">OUR SERVICES</h1>
                <div className="container pb-4">
                    <div className="row justify-content-center align-items-center">
                        {serviceItems.map(({ title, image, describtion }) => (
                            <div className="col-xl-4 col-lg-4 col-md-5 mt-3">
                                <div className="card-content ">
                                    <div className="div mb-3">
                                        <img className="subsize" src={image} />
                                    </div>
                                        <h5 className='text-center'>{title}</h5>
                                        <p className='text-center'>{describtion}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <h1 className="font-weight-bold text-center" style={{ marginTop: '4%' }} >MECHANIFY BENEFITS</h1>
            <div className="container padding">
                <div className="row">
                    {benfitItems.map(({ title, image }) => (
                        <div className="col-xl-4 col-lg-4 mt-3 col-md-5 d-flex justify-content-center align-items-center">
                            <img src={image} height="80" width="80" />
                            <p >{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Home