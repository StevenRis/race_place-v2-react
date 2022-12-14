import './footer.css'

const Footer = () => {
    return (
        <footer className="footer small text-muted">
                <div className="d-flex align-items-center justify-content-center py-2">
                <div className="d-flex">
                    <span className="pe-2">&#169; 2022</span>
                    <span>Developed by <a className="text-muted" href="https://stevenris.github.io/portfolio/" target="_blank" rel="noreferrer" >StevenRi</a></span>
                </div>
                </div>
            </footer>
    );
}

export default Footer;