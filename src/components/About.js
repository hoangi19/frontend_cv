import React from "react";
import { Info } from "./Info";
import Index from "./layouts/Index";

function About()
{
    React.useEffect(() => {
        document.title = "About"
      }, []);
      
    const Content = () => {
        return (
            <React.Fragment>
                <h2 className="contact index-header text-white">About Me</h2>
                <Info />
                <div className="row my-5">
                    <div className="col-lg-6 col-md-6">
                        <h3 className="contact index-header text-white">Services and Solutions</h3>
                        <div className="d-flex flex-wrap">
                            <div className="col-lg-5 col-md-12 text-white-50">
                                <a href="https://www.linkedin.com/in/hoangi19/" className="d-inline-block p-2 border border-white rounded"><i className="fa fa-linkedin-square px-1" style={{fontSize: '1.5rem', color: 'white'}} /></a>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                            <div className="col-lg-5 col-md-12 text-white-50">
                                <a href="https://www.linkedin.com/in/hoangi19/" className="d-inline-block p-2 border border-white rounded"><i className="fa fa-linkedin-square px-1" style={{fontSize: '1.5rem', color: 'white'}} /></a>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                            <div className="col-lg-5 col-md-12 text-white-50">
                                <a href="https://www.linkedin.com/in/hoangi19/" className="d-inline-block p-2 border border-white rounded"><i className="fa fa-linkedin-square px-1" style={{fontSize: '1.5rem', color: 'white'}} /></a>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                            <div className="col-lg-5 col-md-12 text-white-50">
                                <a href="https://www.linkedin.com/in/hoangi19/" className="d-inline-block p-2 border border-white rounded"><i className="fa fa-linkedin-square px-1" style={{fontSize: '1.5rem', color: 'white'}} /></a>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <h3 className="contact index-header text-white">Personal Information</h3>
                        <div className=" p-3 mx-2 rounded" style={{backgroundColor: '#5b626a'}}>
                            <div className="row d-flex flex-wrap text-white-50">
                                <div className="col-lg-5 col-md-5">
                                    <label className="text-white">Full Name</label>
                                </div>
                                <span>Nguyen Viet Hoang</span>
                            </div>
                            <div className="row d-flex flex-wrap text-white-50">
                                <div className="col-lg-5 col-md-5">
                                    <label className="text-white">Email</label>
                                </div>
                                <span>quynhnhi0124@gmail.com</span>
                            </div>
                            <div className="row d-flex flex-wrap text-white-50">
                                <div className="col-lg-5 col-md-5">
                                    <label className="text-white">Phone</label>
                                </div>
                                <span>0988183310</span>
                            </div>
                            <div className="row d-flex flex-wrap text-white-50">
                                <div className="col-lg-5 col-md-5">
                                    <label className="text-white">Social</label>
                                </div>
                                <span><a href="https://www.linkedin.com/in/hoangi19/" className="d-flex"><i className="fa fa-linkedin-square px-1" style={{fontSize: '1.5rem', color: 'white'}} /></a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
    return (
        <React.Fragment>
            <Index content={<Content />}/>
        </React.Fragment>
    );
}

export default About;