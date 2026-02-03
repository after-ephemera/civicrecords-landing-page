import './WaitlistForm.css';

export const WaitlistForm = () => {
    return (
        <form className="waitlist-form" onSubmit={(e) => e.preventDefault()}>
            <input
                type="email"
                placeholder="Enter your email address"
                className="email-input"
                required
            />
            <button type="submit" className="waitlist-btn">Join waitlist</button>
        </form>
    );
};
