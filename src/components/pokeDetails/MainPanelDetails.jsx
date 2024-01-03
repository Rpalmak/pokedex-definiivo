import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "./Details.css"
import PropTypes from "prop-types";

const MainPanelDetails = ({ nombre, imagenSprite  }) => {

let nombrePokemon = nombre.charAt(0).toUpperCase() + nombre.slice(1);

    return (
        <div className="app">
                <div className="container mt-5 maindetailspanel">
                    <h1 className="text-center text-white mb-4">{nombrePokemon} Information</h1>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-4">
                        <img className="mainPokemonSpriteDetails" src={imagenSprite}></img>
                        </div>
                        
                        <div className="col-md-8">
                            <div className="bg-white">
                                <ul className="nav nav-tabs-details nav-fill-details" id="myTab" role="tablist">
                                    <li className="nav-item-details" role="presentation"> <button className="nav-link-details active" id="faq_tab_1-tab" data-bs-toggle="tab" data-bs-target="#faq_tab_1" type="button" role="tab" aria-controls="faq_tab_1" aria-selected="true">
                                            <div className="d-flex flex-column lh-lg"> <i className='bx bxs-plane-alt'></i> <span>Sprites</span> </div>
                                        </button> </li>
                                    <li className="nav-item-details" role="presentation"> <button className="nav-link-details" id="faq_tab_2-tab" data-bs-toggle="tab" data-bs-target="#faq_tab_2" type="button" role="tab" aria-controls="faq_tab_2" aria-selected="false">
                                            <div className="d-flex flex-column lh-lg"> <i className='bx bxs-shopping-bag'></i> <span>Abilities</span> </div>
                                        </button> </li>
                                    <li className="nav-item-details" role="presentation"> <button className="nav-link-details" id="faq_tab_3-tab" data-bs-toggle="tab" data-bs-target="#faq_tab_3" type="button" role="tab" aria-controls="faq_tab_3" aria-selected="false">
                                            <div className="d-flex flex-column lh-lg"> <i className='bx bx-check-circle'></i> <span>Area Encounters</span> </div>
                                        </button> </li>
                                    <li className="nav-item-details" role="presentation"> <button className="nav-link-details" id="faq_tab_4-tab" data-bs-toggle="tab" data-bs-target="#faq_tab_4" type="button" role="tab" aria-controls="faq_tab_4" aria-selected="false">
                                            <div className="d-flex flex-column lh-lg"> <i className='bx bxs-plane-alt'></i> <span>Moves</span> </div>
                                        </button> </li>
                                    <li className="nav-item-details" role="presentation"> <button className="nav-link-details" id="faq_tab_4-tab" data-bs-toggle="tab" data-bs-target="#faq_tab_4" type="button" role="tab" aria-controls="faq_tab_4" aria-selected="false">
                                            <div className="d-flex flex-column lh-lg"> <i className='bx bxs-plane-alt'></i> <span>Stats</span> </div>
                                        </button> </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade active show" id="faq_tab_1" role="tabpanel" aria-labelledby="faq_tab_1-tab">
                                        <div className="container p-3">
                                            <div className="input-group mb-3"> <input type="text" className="form-control" placeholder="Flight From" /> <input type="text" className="form-control" placeholder="Flight To" /> </div>
                                            <div className="input-group mb-3"> <input type="text" className="form-control" placeholder="Depart" /> <input type="text" className="form-control" placeholder="Return" /> </div>
                                            <div className="input-group mb-3"> <select className="form-select form-control" id="inputGroupSelect02">
                                                    <option selected>Passenger</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3+</option>
                                                </select> <select className="form-select form-control" id="inputGroupSelect02">
                                                    <option selected>Cabin</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select> </div>
                                            <div className="mt-4 d-flex justify-content-end"> <button className="btn btn-success custom-button px-5">Show Flights</button> </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="faq_tab_2" role="tabpanel" aria-labelledby="faq_tab_2-tab">
                                        <div className="container p-3 scroll-y">
                                            <div className="p-3 d-flex justify-content-between align-items-center">
                                                <div className="d-flex flex-column"> <span>Departure</span>
                                                    <div className="d-flex justify-content-between align-items-center"> <span>DAC</span> <i className='bx bxs-plane-take-off ms-3 me-3 text-warning'></i> <span>JKF</span> </div>
                                                </div>
                                                <div> <span>3 hours 22 minutes</span> </div>
                                            </div>
                                            <div className="border-top p-3 d-flex justify-content-between align-items-center">
                                                <div className="d-flex flex-column"> <span>Departure</span>
                                                    <div className="d-flex justify-content-between align-items-center"> <span>TUM</span> <i className='bx bxs-plane-take-off ms-3 me-3 text-warning'></i> <span>DEL</span> </div>
                                                </div>
                                                <div> <span>13 hours 12 minutes</span> </div>
                                            </div>
                                            <div className="border-top p-3 d-flex justify-content-between align-items-center">
                                                <div className="d-flex flex-column"> <span>Departure</span>
                                                    <div className="d-flex justify-content-between align-items-center"> <span>KMD</span> <i className='bx bxs-plane-take-off ms-3 me-3 text-warning'></i> <span>MUM</span> </div>
                                                </div>
                                                <div> <span>5 hours 12 minutes</span> </div>
                                            </div>
                                            <div className="border-top p-3 d-flex justify-content-between align-items-center">
                                                <div className="d-flex flex-column"> <span>Departure</span>
                                                    <div className="d-flex justify-content-between align-items-center"> <span>GOA</span> <i className='bx bxs-plane-take-off ms-3 me-3 text-warning'></i> <span>NPU</span> </div>
                                                </div>
                                                <div> <span>8 hours 12 minutes</span> </div>
                                            </div>
                                            <div className="border-top p-3 d-flex justify-content-between align-items-center">
                                                <div className="d-flex flex-column"> <span>Departure</span>
                                                    <div className="d-flex justify-content-between align-items-center"> <span>SGR</span> <i className='bx bxs-plane-take-off ms-3 me-3 text-warning'></i> <span>NYC</span> </div>
                                                </div>
                                                <div> <span>13 hours 12 minutes</span> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="faq_tab_3" role="tabpanel" aria-labelledby="faq_tab_3-tab">
                                        <div className="container p-3 mt-4">
                                            <div className="input-group mb-3"> <input type="text" className="form-control" placeholder="Search hotels..." /> <input type="text" className="form-control" placeholder="Location" /> </div>
                                            <div className="input-group mb-3"> <select className="form-select form-control" id="inputGroupSelect02">
                                                    <option selected>Rooms</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3+</option>
                                                </select> <select className="form-select form-control" id="inputGroupSelect02">
                                                    <option selected>Members</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                    <option value="3">Four</option>
                                                    <option value="3">Five</option>
                                                </select> </div>
                                            <div className="mt-4 d-flex justify-content-end"> <button className="btn btn-success custom-button px-5">Search Hotels</button> </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="faq_tab_4" role="tabpanel" aria-labelledby="faq_tab_4-tab">
                                        <div className="container p-3">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="input-group mb-3"> <select className="form-select form-control" id="inputGroupSelect02">
                                                            <option selected>Select Airline</option>
                                                            <option value="1">Indigo</option>
                                                            <option value="2">Air India</option>
                                                            <option value="3">Air Asthana</option>
                                                        </select> </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-group mb-3"> <input type="text" className="form-control" placeholder="Flight Number" /> <button className="btn btn-outline-secondary custom-button" type="button">Search</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
          </div>
          </div>
  );
} 

MainPanelDetails.propTypes = {
    nombre: PropTypes.string.isRequired,
    imagenSprite : PropTypes.any,
  };

export default MainPanelDetails;