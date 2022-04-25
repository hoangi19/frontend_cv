function Header()
{
    return (
        <div className="header py-3">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="logo">
                    <h2 className="navbar-brand mb-0 h1">Personal</h2>
                    <div className="user-logo text-white">
                        <h3>Viet Hoang Nguyen</h3>
                        <h4>Developer</h4>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="/"><span>Home</span></a>
                        <a className="nav-item nav-link" href="/about"><span>About</span></a>
                        <a className="nav-item nav-link" href="/contact"><span>Contact me</span></a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;