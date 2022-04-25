import Header from "./Header";
import Footer from "./Footer";

function Index(props) 
{
    const {content} = props;
    console.log(content);
    return (
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
                <div className="d-flex p-3" style={{backgroundColor: '#434a50'}}>
                    <div className="col-lg-3 col-md-3"></div>
                    <div className="d-block col-lg-7 col-md-7">
                        {content}
                    </div>
                </div>
                <div className="mx-auto my-5">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Index;