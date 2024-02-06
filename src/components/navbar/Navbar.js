import { Link } from "react-router-dom";


const Navbar = () =>
{
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-light mb-4 sticky-top">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/" >HOMEPAGE</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class="nav-link active" to="/allpeople" >ALL PEOPLE</Link>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        
        
        </>
    );
}

export default Navbar;