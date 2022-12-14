import './navbar.css'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="nav-link active" href="/">
                <img 
                    src="/images/logo/raceplace_logo.png" 
                    alt="Logo race place" 
                    className="logo rounded-pill" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="{{ url_for('cars')}}">Vehicles</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="{{ url_for('locations')}}">Locations</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="{{ url_for('about') }}">About</a>
                    </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="{{ url_for('account') }}">My Account</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="{{ url_for('logout')}}">Sign out</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;