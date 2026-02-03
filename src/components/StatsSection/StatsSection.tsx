import './StatsSection.css';

const stats = [
    {
        value: "73%",
        label: "Requests Delayed",
        desc: "of all complex FOIA requests exceed statutory response times."
    },
    {
        value: "200+",
        label: "Days Average Wait",
        desc: "for agency processing, with some agencies taking years."
    },
    {
        value: "$1.4B",
        label: "Annual Cost",
        desc: "spent by federal agencies on litigation and processing."
    }
];

export const StatsSection = () => {
    return (
        <section className="stats-section">
            <div className="container">
                <h2 className="section-title">The Broken System</h2>
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card reveal">
                            <h3 className="stat-value">{stat.value}</h3>
                            <h4 className="stat-label">{stat.label}</h4>
                            <p className="stat-desc">{stat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
