import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

const SEO = ({
  title = "Tanuj Arora – Product Manager | B2B SaaS | AI-Enabled Products | 18+ Years Experience",
  description = "Senior Product Manager with 18+ years in IT and 10+ years in product management. Expert in AI-enabled, analytics-driven, cloud-based B2B SaaS products. Specializing in Travel & Expense, Procure to Pay, Invoicing, and enterprise workflows.",
  keywords = "Product Manager, B2B SaaS, AI-enabled products, analytics-driven, cloud-based products, Travel & Expense, Procure to Pay, Invoicing, Sourcing, enterprise B2B, agile delivery, product lifecycle management, cross-functional collaboration, SAFe, Scrum Master, Product Owner, Databricks, Generative AI, machine learning",
  ogTitle,
  ogDescription,
  ogImage = "https://aroratanuj.netlify.app/tanuj.png"
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // Update Open Graph tags
    const updateOgTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    };

    updateOgTag('og:title', ogTitle || title);
    updateOgTag('og:description', ogDescription || description);
    updateOgTag('og:image', ogImage);

    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      let twitterTag = document.querySelector(`meta[name="twitter:${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', `twitter:${name}`);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', content);
    };

    updateTwitterTag('card', 'summary_large_image');
    updateTwitterTag('title', ogTitle || title);
    updateTwitterTag('description', ogDescription || description);
    updateTwitterTag('image', ogImage);

  }, [title, description, keywords, ogTitle, ogDescription, ogImage]);

  return null;
};

export default SEO;