import { WaitlistForm } from '../WaitlistForm/WaitlistForm';
import { Globe3D } from '../Globe3D/Globe3D';
import './Hero.css';

export const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="container hero-container">
                <div className="hero-content reveal">
                    <h1 className="hero-title">
                        THE TRUTH.<br />
                        <span className="highlight">DECLASSIFIED.</span>
                    </h1>
                    <p className="hero-subtitle">
                        &gt; INITIATING PROTOCOL: AI-ASSISTED FOIA REQUESTS<br />
                        &gt; STATUS: ONLINE<br />
                        &gt; TARGET: DEMOCRATIZATION OF INFORMATION
                    </p>
                    <div className="hero-cta">
                        <WaitlistForm />
                        <a href="#features" className="secondary-link">[ READ_DOCUMENTATION ]</a>
                    </div>
                </div>
                <div className="hero-visual reveal" style={{ pointerEvents: 'auto' }}>
                    <Globe3D />
                </div>
            </div>
        </section>
    );
};
