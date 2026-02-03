import './Header.css';

export const Header = () => {
    return (
        <header className="header">
            <div className="header-container container">
                <div className="logo">
                    CIVIC_RECORDS
                </div>
                <nav className="nav">
                    <ul className="nav-list">
                        <li><a href="#features">Features</a></li>
                        <li><a href="#how-it-works">How it Works</a></li>
                    </ul>
                </nav>
                <button className="btn-primary">Get Started</button>
            </div>
        </header>
    );
};
