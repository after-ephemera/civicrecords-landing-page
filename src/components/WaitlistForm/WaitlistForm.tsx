import './WaitlistForm.css';

export const WaitlistForm = () => {
    return (
        <form className="waitlist-form" action="https://formspree.io/f/xbdprorq" method="POST">
            <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="email-input"
                required
            />
            <button type="submit" className="waitlist-btn">Join waitlist</button>
        </form >
    );
};
