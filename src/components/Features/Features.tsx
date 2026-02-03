import iconRefine from '../../assets/icon_refine.png';
import iconRoute from '../../assets/icon_route.png';
import iconExecute from '../../assets/icon_execute.png';
import iconAnalyze from '../../assets/icon_analyze.png';
import './Features.css';

const featureList = [
    {
        icon: iconRefine,
        title: "LLM-powered Legal Terminology",
        description: "Translate plain English into precise legal jargon required for valid FOIA requests. Our AI knows the language of bureaucracy."
    },
    {
        icon: iconRoute,
        title: "Smart Jurisdiction Routing",
        description: "Automatically identify and target the correct local, state, or federal agency. Never get rejected for wrong address again."
    },
    {
        icon: iconExecute,
        title: "Automated Submission",
        description: "Handle the bureaucracy with one click. We format, sign, and submit on your behalf, tracking timelines automatically."
    },
    {
        icon: iconAnalyze,
        title: "Data Ingestion & Analysis",
        description: "Receive structured data, not PDF blobs. Our system checks factuality, highlights key insights, and digitizes records."
    }
];

export const Features = () => {
    return (
        <section id="features" className="features">
            <div className="container">
                <h2 className="section-title">SYSTEM_CAPABILITIES</h2>
                <div className="features-grid">
                    {featureList.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="icon-wrapper">
                                {/* Simple ASCII Icon Placeholder */}
                                {index === 0 ? '[?]' : index === 1 ? '[->]' : index === 2 ? '[!]' : '[#]'}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
