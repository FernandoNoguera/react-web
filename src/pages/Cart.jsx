

function Cart (){
    return(
        <section className="h-100 h-custom" style={{"background-color": "#eee"}}>
            <div className="container h-100 py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col">
                    <div className="card shopping-cart" style={{"border-radius": "15px"}}>
                    <div className="card-body text-black">
                        <div className="row">
                        <div className="col-lg-6 px-5 py-4">
                            <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">TUS PRODUCTOS</h3>





                            <div className="d-flex align-items-center mb-5">
                            <div className="flex-shrink-0">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp"
                                className="img-fluid" style={{"width": "150px"}} alt="Generic placeholder"/>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <a href="#!" className="float-end text-black"><i className="fas fa-times"></i></a>
                                <h5 className="text-primary">Samsung Galaxy M11 64GB</h5>
                                <h6 style={{"color": "#9e9e9e"}}>Color: white</h6>
                                <div className="d-flex align-items-center">
                                <p className="fw-bold mb-0 me-5 pe-3">799$</p>
                                <div className="def-number-input number-input safari_only">
                                    <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                    className="minus"></button>
                                    <input className="quantity fw-bold text-black" min="0" name="quantity" value="1"
                                    type="number"/>
                                    <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                    className="plus"></button>
                                </div>
                                </div>
                            </div>
                            </div>




                            <div className="d-flex align-items-center mb-5">
                            <div className="flex-shrink-0">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp"
                                className="img-fluid" style={{"width": "150px"}} alt="Generic placeholder"/>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <a href="#!" className="float-end text-black"><i className="fas fa-times"></i></a>
                                <h5 className="text-primary">Headphones Bose 35 II</h5>
                                <h6 style={{"color": "#9e9e9e"}}>Color: Red</h6>
                                <div className="d-flex align-items-center">
                                <p className="fw-bold mb-0 me-5 pe-3">239$</p>
                                <div className="def-number-input number-input safari_only">
                                    <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                    className="minus"></button>
                                    <input className="quantity fw-bold text-black" min="0" name="quantity" value="1"
                                    type="number"/>
                                    <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                    className="plus"></button>
                                </div>
                                </div>
                            </div>
                            </div>



                            <div className="d-flex align-items-center mb-5">
                            <div className="flex-shrink-0">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
                                className="img-fluid" style={{"width": "150px"}} alt="Generic placeholder"/>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <a href="#!" className="float-end text-black"><i className="fas fa-times"></i></a>
                                <h5 className="text-primary">iPad 9.7 6-gen WiFi 32GB</h5>
                                <h6 style={{"color": "#9e9e9e"}}>Color: rose pink</h6>
                                <div className="d-flex align-items-center">
                                <p className="fw-bold mb-0 me-5 pe-3">659$</p>
                                <div className="def-number-input number-input safari_only">
                                    <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                    className="minus"></button>
                                    <input className="quantity fw-bold text-black" min="0" name="quantity" value="2"
                                    type="number"/>
                                    <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                    className="plus"></button>
                                </div>
                                </div>
                            </div>
                            </div>

                            <hr/>

                            <div className="d-flex justify-content-between px-x">
                            <p className="fw-bold">Discount:</p>
                            <p className="fw-bold">95$</p>
                            </div>
                            <div className="d-flex justify-content-between p-2 mb-2" style={{"background-color": "#e1f5fe"}}>
                            <h5 className="fw-bold mb-0">Total:</h5>
                            <h5 className="fw-bold mb-0">2261$</h5>
                            </div>

                        </div>
                        <div className="col-lg-6 px-5 py-4">

                            <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Payment</h3>

                            <form className="mb-5">

                            <div className="form-outline mb-5">
                                <input type="text" id="typeText" className="form-control form-control-lg" siez="17"
                                value="1234 5678 9012 3457" minlength="19" maxlength="19" />
                                <label className="form-label" for="typeText">Card Number</label>
                            </div>

                            <div className="form-outline mb-5">
                                <input type="text" id="typeName" className="form-control form-control-lg" siez="17"
                                value="John Smith" />
                                <label className="form-label" for="typeName">Name on card</label>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-5">
                                <div className="form-outline">
                                    <input type="text" id="typeExp" className="form-control form-control-lg" value="01/22"
                                    size="7"  minlength="7" maxlength="7" />
                                    <label className="form-label" for="typeExp">Expiration</label>
                                </div>
                                </div>
                                <div className="col-md-6 mb-5">
                                <div className="form-outline">
                                    <input type="password" id="typeText" className="form-control form-control-lg"
                                    value="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" />
                                    <label className="form-label" for="typeText">Cvv</label>
                                </div>
                                </div>
                            </div>

                            <p className="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit <a
                                href="#!">obcaecati sapiente</a>.</p>

                            <button type="button" className="btn btn-primary btn-block btn-lg">Buy now</button>

                            <h5 className="fw-bold mb-5" style={{"position": "absolut", "bottom": "0"}}>
                                <a href="#!"><i className="fas fa-angle-left me-2"></i>Back to shopping</a>
                            </h5>

                            </form>

                        </div>
                        </div>

                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    )    
}

export default Cart