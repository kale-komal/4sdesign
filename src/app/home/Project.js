'use client';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

const Project = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            require('bootstrap/dist/js/bootstrap.bundle.min.js');
        }
    }, []);

    return (
        <section id='project'>
            <div className="container mt-4">
                <h1 className="text-center heading mb-4 mt-3">OUR PROJECTS</h1>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`}
                            onClick={() => setActiveTab('tab1')}
                        >
                            Industrial Projects
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
                            onClick={() => setActiveTab('tab2')}
                        >
                            Hospital Projects
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`}
                            onClick={() => setActiveTab('tab3')}
                        >
                            Commercial Projects
                        </button>
                    </li>
                </ul>

                <div className="tab-content mt-3">
                    {activeTab === 'tab1' && (
                        <div className="tab-pane active">
                            <div className='row'>
                                <h3 className="servicesubhead mt-3 mb-3">Industrial Client Projects</h3>
                                <div className="col-12 col-6 col-lg-4">
                                    <ul className="basicList">
                                        <li>JSW Palwal (MEPAND ELV Haryana)</li>
                                        <li>Mahabal Metals Pvt. Ltd. (Electrical/ELV Miraj MIDC)</li>
                                        <li>Mahindra CIE Automotive Ltd. Pune. (Electrical Pune)</li>
                                        <li>Aques Pvt. Ltd. (Electrical/ELV Hubli)</li>
                                        <li>Saroj Group (Electrical Kolhapur)</li>
                                        <li>Alpha Marine Ltd. (Electrical Nollore)</li>
                                        <li>Suyash Casting Pvt. Ltd. (Electrical/ELV Miraj MIDC)</li>
                                        <li>The Automotive Research Association of India (Electrical Pune)</li>
                                        <li>GRI Power gear Towers India Pvt.Ltd. (Electrical Hatkangale)</li>
                                        <li>Divgi Torq transfer systems (Electrical/ELV, Sirsi Karnataka)</li>
                                        <br />
                                        <li>Alcomax Pvt. Ltd. (Electrical/ELV Pune) </li>
                                        <li>Godawari Industries Private Limited (Electrical/ELV Miraj MIDC)</li>
                                        <li>Creative Carve Private Limited (Electrical/ELV Pune)</li>
                                    </ul>
                                </div>
                                <div className="col-12 col-6 col-lg-4">
                                    <ul className="basicList">
                                        <li>Sudarshan Aluminium India Ltd (Electrical/ELV Miraj MIDC)</li>
                                        <li>Indoschottle auto parts P. Ltd. & SFS Company (Electrical/ELV Pune)</li>
                                        <li>Premier Ferocast Pvt. Ltd. (Electrical/ELV Pune)</li>
                                        <li>Jyoti tooling and machine shop (Electrical/ELV Pune)</li>
                                        <li>Plastic Omnium Exterior System (I) Pvt LTD (Electrical/ELV Pune)</li>
                                        <li>Reliable Autotech Pvt. Ltd (MEP AND ELV Pune)</li>
                                        <li>Kirloskar Brothers (1L Sq. ft Electrical/ELV Kagal MIDC warehouse) (Kagal MIDC)</li>
                                        <li>Land craft agro Hatkangale (Electrical/ELV Hatkangale)</li>
                                        <li>Crafted Solutions Pune. (Electrical/ELV Pune)</li>
                                        <li>GVR Group Kadur (AP) (Electrical/ELV Nellore AP)</li>
                                    </ul>
                                </div>
                                <div className="col-12 col-6 col-lg-4">
                                    <ul className="basicList">
                                        <li>MBR Group (AP) (Electrical/ELV Nellore AP)</li>
                                        <li>M/s. SSPP Engineering Pvt. Ltd. Kagal MIDC (Electrical/ELV Kagal MIDC)</li>
                                        <li>GSV Ophthlmics Ltd. Goa (Electrical/ELV Goa)</li>
                                        <li>RMK Group Talegaon Pune (Electrical Pune)</li>
                                        <li>Teknic India Pvt. Ltd. Goa (Electrical/ELV Goa)</li>
                                        <li>Schiffer And Menezes India Private Limited Goa (Electrical/ELV Goa)</li>
                                        <li>Chakote Cake and Bakes (Electrical Nandni)</li>
                                        <li>Shri Ganesh Bakery Nandni Pvt. Ltd. (Electrical Nandni)</li>
                                        <li>Rathod Jewellery Kolhapur (Electrical/ELV Kolhapur)</li>
                                        <li>Chakote Agro Pvt. Ltd. (Electrical Nandni)</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    )}
                    {activeTab === 'tab2' && (
                        <div className="tab-pane active">
                            <div className='row'>
                                <h3 className="servicesubhead  mt-3 mb-3">Hospital Client Projects</h3>
                                <div className="col-12 col-6 col-lg-4">
                                    <ul className="basicList">
                                        <li>SDM Memorial Trust Terdal Karnataka (MEP AND ELV)</li>
                                        <li>Dr. Padmjit Nadgoudar Hospital (MEP AND ELV Rabkavi)</li>
                                        <li>Life care Hospital Palus (MEP AND ELV Palus)</li>
                                        <li>Dr. Hitti Hospital Jath (MEP AND ELV Madyal)</li>
                                        <li>Padalkar Hospital (MEP AND ELV Vita)</li>
                                        <li>Shree Hospital (MEP AND ELV Sangli)</li>
                                        <li>Dr. Omkar Kulkarni Hospital (Electrical/ELV Sangli)</li>
                                    </ul>
                                </div>
                                <div className="col-12 col-6 col-lg-4">
                                    <ul className="basicList">
                                        <li>KPC Hospital Kolhapur (Electrical/ELV Kolhapur)</li>
                                        <li>Dr. Chandrapattan Hospital (MEP AND ELV Miraj)</li>
                                        <li>Dr. Amol Tarlekar (MEP AND ELV Vita)</li>
                                        <li>Dr. Sharad Desai (Electrical/ELV Sankeshwar)</li>
                                        <li>Breathwell Hospital (Electrical/ELV Miraj)</li>
                                        <li>Dr.Kiran Patil (MEP AND ELV Gadinglaj)</li>
                                        <li>Dr.Ghadge (MEP AND ELV Pandarpur)</li>
                                    </ul>
                                </div>
                                <div className="col-12 col-6 col-lg-4">
                                    <ul className="basicList">
                                        <li>Apex Hospital Kolhapur (MEP AND ELV Kolhapur)</li>
                                        <li>Yashprabaha Neruro Clinic Miraj (Electrical/ELV Miraj)</li>
                                        <li>Sheetal Patil Hospital at Shedbal. (MEP AND ELV Shedbal)</li>
                                        <li>Dr. Kesarkar Hospital at Gargoti (MEP AND ELV Gargoti)</li>
                                        <li>Sevasadan Hospital Chikodi (Electrical/ELV Chikodi)</li>
                                        <li>Shreyash Hospital Pune. (Electrical/ELV Pune)</li>
                                        <li>Dr.Ganesh Chougule (Electrical/ELV Sangli)</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'tab3' && (
                        <div className="tab-pane active">
                            <div className='row'>
                                <h3 className="servicesubhead  mt-3 mb-3">Commercial Client Projects</h3>
                                <div className="col-12 col-6 col-lg-4">
                                    <ul className="basicList">
                                        <li>Govind Icon (MEP AND ELV Sangli)</li>
                                        <li>Raj Laxmi Mall (MEP AND ELV Sangli)</li>
                                        <li>Purva Heights (Electrical/ELV Sangli)</li>
                                        <li>Park View (Electrical/ELV Sangli)</li>
                                        <li>Arihant Nagar Premium apartments (MEP AND ELV Hubbali)</li>
                                        <li>Hotel OAKS Elite (MEP AND ELV Kalbauragi)</li>
                                        <li>Padmini Mall at Rabkavi. (MEP AND ELV Rabkavi)</li>
                                        <li>Shri Sheetal Manere Office (Electrical/ELV Ichalkarnji)</li>
                                        <li>Brij Square (Electrical/ELV Ichalkarnji)</li>
                                        <li>Allurre by Ashray Developers Resort (MEP AND ELV Goa)</li>
                                    </ul>
                                </div>
                                <div className="col-12 col-6 col-lg-4">
                                    <ul className="basicList">
                                        <li>Serenity by Ashray Developers (MEP AND ELV Goa)</li>
                                        <li>Shri Sachin Chopade corporate office (MEP AND ELV Pune)</li>
                                        <li>Commercial and Residential Project at Devgad (MEP AND ELV Devgad)</li>
                                        <li>Club House at Bagalkote Electrical/ELV Bagalkote)</li>
                                        <li>Shri. Nitin Kudale commercial complex (MEP AND ELV Akluj)</li>
                                        <li>Brij Square (Electrical/ELV Ichalkarnji)</li>
                                        <li>Saraswati (Galaxy Electrical/ELV Ichalkarnji)</li>
                                        <li>Bankar Complex (Electrical/ELV Banhati)</li>
                                        <li>Walstar Technologies Pvt. Ltd. (MEP AND ELV Kolhapur)</li>
                                        <li>Technorix IT Building (Electrical and ELV Goa)</li>
                                    </ul>
                                </div>
                                <div className="col-12 col-6 col-lg-4">
                                    <ul className="basicList">
                                        <li>Info vosin (Electrical and ELV Pune)</li>
                                        <li>Hajare Textile (Electrical and ELV Rabkavi)</li>
                                        <li>Kallyagol Silk Palace (Electrical and ELV Mahalingpur)</li>
                                        <li>Anup Rathi Cloth store (Electrical and ELV Bagalkot)</li>
                                        <li>Woventex India Pvt. Ltd. (Electrical and ELV Ichalkarnji)</li>
                                        <li>Pasupatinath textile (Electrical and ELV Ichalkarnji)</li>
                                        <li>M/S. Patil Textile. (Electrical and ELV Ichalkarnji)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Project;
