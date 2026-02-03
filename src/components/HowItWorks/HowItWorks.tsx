import './HowItWorks.css';

const steps = [
    {
        number: "01",
        title: "Describe Your Request",
        description: "Tell us what you're looking for in plain English. No need to know specific form numbers or legal statutes."
    },
    {
        number: "02",
        title: "AI Refinement",
        description: "Our system translates your request into precise legal language, citing relevant FOIA statutes to maximize compliance."
    },
    {
        number: "03",
        title: "Smart Routing",
        description: "We identify the exact agency and department with jurisdiction, ensuring your request lands on the right desk."
    },
    {
        number: "04",
        description: "Receive your documents digitally. We parse the results, OCR scanned files, and highlight key findings."
    }
];

export const HowItWorks = () => {
    // Timestamps for a log feel
    const timestamps = ["09:00:23", "09:00:45", "09:01:12", "09:02:00"];

    return (
        <section id="how-it-works" className="how-it-works">
            <div className="container">
                <h2 className="section-title">Operational Protocol</h2>
                <div className="timeline">
                    {steps.map((step, index) => (
                        <div key={index} className="timeline-item">
                            <div className="step-number">
                                [{timestamps[index] || "00:00:00"}]
                            </div>
                            <div className="step-content">
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-desc">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
