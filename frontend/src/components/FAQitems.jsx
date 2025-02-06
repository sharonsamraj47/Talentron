import React from "react";
import "../styles/training_partner.css"

// The reusable FAQItem component
const FAQItem = ({ question, answer, index, toggleCollapse, collapsed }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${index}`}>
        <button
          onClick={() => toggleCollapse(index)} 
          className={`accordion-button ${collapsed[index] ? 'collapsed' : ''} faq-toggle`}
        >
          {question}
          <span className="faq-answer" style={{ display: collapsed[index] ? 'none' : 'block' }}>
            {answer}
          </span>
        </button>
      </h2>
    </div>
  );
};

export default FAQItem;