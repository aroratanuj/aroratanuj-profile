import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

// Set document title and meta description for SEO
document.title = "Tanuj Arora – Product Manager | B2B SaaS | AI-Enabled Products | 18+ Years Experience";

// Update or create meta description for better SEO
const updateMetaDescription = () => {
  let metaDescription = document.querySelector('meta[name="description"]');
  const description = "Senior Product Manager with 18+ years in IT and 10+ years in product management. Expert in AI-enabled, analytics-driven, cloud-based B2B SaaS products. Specializing in Travel & Expense, Procure to Pay, Invoicing, and enterprise workflows. Proven track record of reducing churn by 10% and improving process efficiency by 44%.";

  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', description);
};

// Update meta keywords
const updateMetaKeywords = () => {
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  const keywords = "Product Manager, B2B SaaS, AI-enabled products, analytics-driven, cloud-based products, Travel & Expense, Procure to Pay, Invoicing, Sourcing, enterprise B2B, agile delivery, product lifecycle management, cross-functional collaboration, SAFe, Scrum Master, Product Owner, Databricks, Generative AI, machine learning";

  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', keywords);
};

// Apply SEO updates
updateMetaDescription();
updateMetaKeywords();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
