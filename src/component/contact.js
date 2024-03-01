const Contact = () => {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="bg-primary text-center align-self-center p" style="width: 33rem; margin-top: 5%;">
                            <i class="fas fa-envelope white"></i>
                            <h5 class=" text-white">Address</h5>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="bg-primary text-center align-self-center p" style="width: 33rem; margin-top: 5%;">
                            <h5 class=" text-white">Enter your Informations</h5>
                            <i class="fas fa-briefcase white"></i>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card" style="width: 33rem; margin-top: 5%; margin-bottom: 10%;">
                                <ul class="list-group list-group-flush">
                                    <h1 class="list-group-item">Main office</h1>
                                    <li class="list-group-item p">
                                        <i class="fas fa-map-marker-alt p"></i>
                                        Head office:<br/>Rohini Delhi-110085
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fas fa-phone p"></i>
                                        +91 - 966-793-7517
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fas fa-phone p"></i>
                                        +91 - 966-795-9059
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fas fa-envelope-square p"></i>
                                        Reach@mechanify.in
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card align-self-center" style="width: 32rem; height:340px; margin-left: 10%; margin-top: 5%;">
                                <h4 class="padding">For B2b Clients</h4>
                                <input class="padding" placeholder="Name"></input>
                                <input class="padding" placeholder="Email" type="text"></input>
                                <input class="padding" placeholder="Phone" type="text" ></input>
                                <input class="padding" placeholder="Message" type="text"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" style="margin-top: 5%; background-color: #000;">
                <div class="col-sm-3 dbox " style="margin-top: 2%;">
                    <img src="logo.61c43fd0.png" height="70" width="200" style="margin-left: 25%;" />
                </div>
                <div class="col-sm-3 dbox " style="margin-top: 2%;">
                    <h4 class="grey p">Address </h4>
                    <div class="white font-weight-bold">
                        <li type="none" class="p">Head Office :<br />
                            Rohini Delhi - 110085</li>
                        <li class="p" type="none">Phone: +91 - 966-793-7517</li>
                        <li class="p" type="none">Phone: +91 - 966-795-9059</li>
                        <li class="p" type="none">Email: Reach@mechanify.in</li>
                    </div>
                </div>
                <div class="col-sm-3 dbox" style="margin-top: 2%;">
                    <h4 class="grey p">Service</h4>
                    <div class="white font-weight-bold">
                        <li type="none">Engine Repair</li>
                        <li type="none">Tyre Replacement</li>
                        <li type="none">Transmission</li>
                        <li type="none">Extended Warranty</li>
                        <li type="none">Batteries</li>
                        <li type="none">Break Repair</li>
                    </div>
                </div>
                <div class="col-sm-3 dbox" style="margin-top: 2%;">
                    <h4 class="grey p">Popular Brand</h4>
                    <div class="white font-weight-bold">
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
            <div class="row d-flex p" style="background-color:rgb(22, 20, 20);">
                <div class="col-sm-6 text-center">
                    <p style="font-size:15px; color: white;">© 2020 Mechanify Services Pvt Ltd</p>
                </div>
                <div class="col-sm-6 ">
                    <img src="download.png" height="30" width="30" style="border-radius: 5px; margin-left: 70%;" />
                </div>
            </div>
        </div>
    )
}