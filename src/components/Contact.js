import React from "react";
import Index from "./layouts/Index";

function Contact()
{
    const Content = () => {
        return (
            <React.Fragment>
                <h2 className="contact text-white my-3">Contact</h2>
                <form className="d-block">
                    <div className="row my-3">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Full Name" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Email" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Phone" />
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Full Name" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Email" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Phone" />
                        </div>
                    </div>
                    <div className="row">
                        <textarea placeholder="Tell me your plan">

                        </textarea>
                    </div>
                </form>
                {/* <form>

                    <div className="row my-5">
                        <div className="col-lg-6 col-md-6">
                            
                        </div>
                        <div className="col-lg-6 col-md-6">

                        </div>
                    </div>
                </form> */}
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <Index content={<Content/>} />
        </React.Fragment>

    );
}

export default Contact;