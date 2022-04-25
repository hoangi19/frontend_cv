import * as React from "react";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

function Contact()
{
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [website, setWebsite] = React.useState('');
    const [projectType, setProjectType] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [plan, setPlan] = React.useState('');

    const handleContact = (event) => {
        event.preventDefault();
    }

    React.useEffect(() => {
        document.title = "Contact"
      }, []);

    return (
        <React.Fragment>
            <div className="wrapper-about">
                <div className="row position-relative">
                    <div className="col-lg-3 col-md-3">
                        <div className="avatar position-absolute">
                            <img align="right" src="./images/avatar.png" alt="avatar" />
                        </div>
                    </div>                
                    <div className="col-lg-7 col-md-7">
                        <Header />
                    </div>      
                </div>
                <div className="d-flex p-3 contact-form" style={{backgroundColor: '#434a50'}}>
                    <div className="col-lg-3 col-md-3"></div>
                    <div className="col-lg-7 col-md-7">
                        <h2 className="contact index-header text-white">Contact</h2>
                        <form className="d-block" onSubmit={handleContact}>
                            <div className="row my-3">
                                <div className="col">
                                    <input 
                                        value={name}
                                        type="text"
                                        className="form-control text-white" 
                                        placeholder="Full Name"
                                        onChange={e => setName(e.target.value)} />
                                </div>
                                <div className="col">
                                    <input 
                                        value={email} 
                                        type="text" 
                                        className="form-control text-white" placeholder="Email" 
                                        onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="col">
                                    <input 
                                        value={phone} 
                                        type="text" 
                                        className="form-control text-white" placeholder="Phone" 
                                        onChange={e => setPhone(e.target.value)} />
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col">
                                    <input 
                                        value={website} 
                                        type="text" 
                                        className="form-control text-white" placeholder="Website" 
                                        onChange={e => setWebsite(e.target.value)} />
                                </div>
                                <div className="col">
                                    <input 
                                        value={projectType} 
                                        type="text" 
                                        className="form-control text-white" placeholder="Email" 
                                        onChange={e => setProjectType(e.target.value)} />
                                </div>
                                <div className="col">
                                    <input 
                                        value={location} 
                                        type="text" 
                                        className="form-control text-white" placeholder="Phone" 
                                        onChange={e => setLocation(e.target.value)} />
                                </div>
                            </div>
                            <div className="row">
                                <textarea 
                                    value={plan} 
                                    className="form-control text-white mx-3" 
                                    placeholder="Tell me your plan" rows="10"  
                                    onChange={e => setPlan(e.target.value)} />
                            </div>
                            <div className="contact">
                                <div className="row ml-0 mt-3">
                                    <a href="/contact"><b>Contact me →</b></a>
                                    <a href="/contact" className="ml-auto mr-3"><b>Download &#8595;</b></a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="text-center my-5">
                    <Footer />
                </div>
            </div>
        </React.Fragment>

    );
}

export default Contact;