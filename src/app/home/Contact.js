'use client';
import { useState } from 'react';
import TopButton from '../components/Topbtn';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorText = await response.text(); 
                console.error('Server responded with error:', errorText);
                setStatus('An error occurred while sending feedback.');
                return;
            }

            const result = await response.json();
            setStatus('Feedback sent successfully!');
            alert("Feedback Submited Successfully !")
            setFormData({ name: '', email: '', mobile: '', message: '' });
        } catch (error) {
            console.error('Error during fetch:', error);
            setStatus('An error occurred while sending feedback.');
            alert("Error Submiting Feedback")
        }
    };


    return (
        <section id="contact">
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <h3 className="text-uppercase text-center contact-heading mt-4">Contact</h3>
                        <div className="text-center">
                            <span className="shortline bg-white mb-4 mt-3"></span>
                        </div>
                        <div className="col-12 col-md-6">
                            <h3 className="text-white ls-3 mb-4 text-uppercase medium">
                                4S Design Consultancy Services
                            </h3>
                            <h4 className="clrGrey fw-semibold">Head Office :</h4>
                            <span className="home conIco">
                                Asher Villa F102, MSEB Road, Near Kwality Bakery, Vishrambaug Sangli-416416 MH (India)
                                <br />
                                <br />
                                Branches: Pune | Goa
                            </span>
                            <h4 className="clrGrey fw-semibold mt-4">Phone :</h4>
                            <span className="conCall conIco">+91 9890459210, +91 9420429210</span>
                            <h4 className="clrGrey fw-semibold mt-4">Email :</h4>
                            <span className="conMail conIco">4sdesigncs@gmail.com</span>
                            <h4 className="clrGrey fw-semibold mt-4">Website :</h4>
                            <span className="conWebsite conIco">www.4sdesigncs.com</span>
                        </div>
                        <div className="col-12 col-md-6 ">
                            <h3 className="text-white ls-3 mb-4 text-uppercase medium contact-container">
                                Get in touch with us
                            </h3>
                            <form onSubmit={handleSubmit}>
                                <label className="labelCap">Name:*</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Full Name (Surname first)"
                                    className="textBox mb-3"
                                    required
                                />
                                <label className="labelCap">Email Id:*</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email Address"
                                    className="textBox mb-3"
                                    required
                                />
                                <label className="labelCap">Mobile No:*</label>
                                <input
                                    type="text"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    placeholder="Without Country Code"
                                    className="textBox mb-3"
                                    required
                                />
                                <label className="labelCap">Message:*</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    cols={20}
                                    className="textBox mb-3"
                                    required
                                />
                                <button className="buttonForm">SUBMIT</button>
                                {status && <p>{status}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
           <TopButton/>
        </section>
    );
};

export default Contact;
