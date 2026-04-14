import { contactInfo } from '../data/contact';
import { skills, certifications } from '../data/portfolio';

const ATSOptimizer = () => {
  return (
    <div className="sr-only" aria-hidden="true">
      <h1>Tanuj Arora - Product Manager Resume</h1>
      <h2>Contact Information</h2>
      <p>
        <strong>Email:</strong> {contactInfo.email}<br/>
        <strong>Phone:</strong> {contactInfo.phone}<br/>
        <strong>WhatsApp:</strong> {contactInfo.whatsapp}<br/>
        <strong>Location:</strong> {contactInfo.location}<br/>
        <strong>LinkedIn:</strong> {contactInfo.linkedin}<br/>
        <strong>GitHub:</strong> {contactInfo.github}
      </p>

      <h2>Professional Summary</h2>
      <p>
        Senior Product Manager with 18+ years of IT experience and 10+ years in product management.
        Expert in AI-enabled, analytics-driven, cloud-based B2B SaaS products at scale.
        Proven track record of delivering high-impact product launches that drive measurable business outcomes.
        Reduced customer churn by 10% and cut expense processing time by 44%.
        Strong collaborator across product, engineering, data, and operations teams.
      </p>

      <h2>Skills</h2>
      <ul>
        {skills.map((skillGroup, index) => (
          <li key={index}>
            <strong>{skillGroup.category}:</strong> {skillGroup.skills.join(', ')}
          </li>
        ))}
      </ul>

      <h2>Key Areas of Expertise</h2>
      <ul>
        <li>AI-enabled products</li>
        <li>Analytics-driven solutions</li>
        <li>Cloud-based products at scale</li>
        <li>Enterprise B2B SaaS platforms</li>
        <li>Cross-functional team leadership</li>
        <li>Agile delivery methodologies</li>
        <li>Invoicing</li>
        <li>Procurement</li>
        <li>Sourcing</li>
        <li>Complete Source to Pay domain knowledge</li>
      </ul>

      <h2>Certifications</h2>
      <ul>
        {certifications.map((cert, index) => (
          <li key={index}>
            {cert.name} - {cert.issuer} ({cert.year})
          </li>
        ))}
      </ul>

      <h2>Technical Keywords</h2>
      <p>
        Product Management, B2B SaaS, AI-Enabled Products, Analytics-Driven, Cloud-Based Products,
        Travel & Expense, Procure to Pay, Invoicing, Sourcing, Enterprise B2B, Agile Delivery,
        Product Lifecycle Management, Cross-Functional Collaboration, SAFe, Scrum Master, Product Owner,
        Databricks, Generative AI, Machine Learning, UX Design, Leadership, Python, JavaScript,
        React, TypeScript, AWS, Cloud Computing, Data Analytics, User Experience, Agile Methodologies,
        Sprint Planning, Backlog Management, Requirements Gathering, Market Analysis, Roadmap Planning,
        Prioritization, Ideation, Quality Assurance, Usability Testing, Prototyping, Risk Management,
        Critical Thinking, Decision Making, Stakeholder Management, Customer Feedback Loop,
        Revenue Cycle Workflows, Automation, Process Optimization, Multi-Product Suite, No-Code,
        Low-Code, ERP Integration, Workflow Automation, Professional Services Automation, FinTech,
        AP Automation, Project Management, Team Leadership, Technical Leadership, Software Engineering,
        Testing Automation, Web Development, Desktop Applications, Release Verification, Product Closure,
        Sprint Testing, Epic Owner, Agile Development, Scrum Teams, Continuous Learning,
        Problem Solving, Revenue Management, Business Analysis, Technical Analysis, System Integration,
        API Development, Database Management, Cloud Architecture, Microservices, DevOps, CI/CD,
        Performance Optimization, Scalability, Security, Compliance, Data Privacy, GDPR, SOC2,
        ISO Standards, Quality Management, Process Improvement, Lean Thinking, Six Sigma,
        Business Intelligence, Data Visualization, Reporting, Analytics, Machine Learning Operations,
        MLOps, Data Engineering, Data Science, Artificial Intelligence, Natural Language Processing,
        Computer Vision, ChatGPT, Large Language Models, Prompt Engineering, AI Ethics,
        Responsible AI, AI Strategy, Digital Transformation, Innovation Management, Change Management,
        Organizational Development, Talent Management, Mentoring, Coaching, Training, Documentation,
        Technical Writing, User Stories, Acceptance Criteria, Wireframing, Prototyping, MVP Development,
        Product Launch, Go-to-Market Strategy, Market Research, Competitive Analysis, Customer Research,
        User Research, A/B Testing, Conversion Optimization, Customer Success, Account Management,
        Business Development, Partnerships, Strategic Planning, Business Strategy, Product Strategy,
        Technology Strategy, Innovation, Research and Development, Product Development,
        Software Development Life Cycle, SDLC, Agile Software Development, Scrum, Kanban,
        Lean Software Development, Extreme Programming, Pair Programming, Code Review,
        Testing, Quality Assurance, User Acceptance Testing, UAT, Integration Testing,
        System Testing, Performance Testing, Load Testing, Security Testing, Penetration Testing,
        Vulnerability Assessment, Risk Assessment, Compliance, Audit, Governance, Risk Management,
        ITIL, IT Service Management, Service Desk, Incident Management, Problem Management,
        Change Management, Release Management, Configuration Management, Asset Management,
        Knowledge Management, Service Level Agreement, SLA, Service Level Management,
        Performance Management, Capacity Planning, Availability Management, Continuity Management,
        Security Management, Information Security, Network Security, Application Security,
        Data Security, Cloud Security, DevSecOps, Security Operations, Threat Intelligence,
        Vulnerability Management, Patch Management, Compliance Management, Audit Management,
        Risk Management, Business Continuity, Disaster Recovery, Backup and Recovery,
        High Availability, Scalability, Performance Optimization, Cost Optimization,
        Resource Optimization, Process Automation, Workflow Automation, Robotic Process Automation,
        RPA, Business Process Automation, Digital Automation, Intelligent Automation,
        Hyperautomation, Process Mining, Task Mining, Process Intelligence, Business Intelligence,
        Data Intelligence, Customer Intelligence, Market Intelligence, Competitive Intelligence,
        Strategic Intelligence, Business Analytics, Data Analytics, Predictive Analytics,
        Prescriptive Analytics, Descriptive Analytics, Diagnostic Analytics, Advanced Analytics,
        Machine Learning, Deep Learning, Neural Networks, Natural Language Processing,
        Computer Vision, Speech Recognition, Image Recognition, Video Analytics, Text Analytics,
        Sentiment Analysis, Opinion Mining, Social Media Analytics, Web Analytics,
        Mobile Analytics, App Analytics, User Analytics, Customer Analytics, Product Analytics,
        Revenue Analytics, Financial Analytics, Marketing Analytics, Sales Analytics,
        Operations Analytics, Supply Chain Analytics, Inventory Analytics, Logistics Analytics,
        Manufacturing Analytics, Healthcare Analytics, Financial Services Analytics,
        Insurance Analytics, Banking Analytics, Retail Analytics, E-commerce Analytics,
        Travel Industry Analytics, Hospitality Analytics, Entertainment Analytics,
        Media Analytics, Publishing Analytics, Education Analytics, Learning Analytics,
        Training Analytics, HR Analytics, Talent Analytics, Workforce Analytics,
        Employee Analytics, Performance Analytics, Compensation Analytics, Benefits Analytics,
        Payroll Analytics, Time and Attendance Analytics, Absence Management Analytics,
        Leave Management Analytics, Employee Engagement Analytics, Employee Satisfaction Analytics,
        Employee Retention Analytics, Employee Turnover Analytics, Employee Attrition Analytics,
        Employee Performance Analytics, Employee Productivity Analytics, Employee Efficiency Analytics,
        Employee Effectiveness Analytics, Employee Quality Analytics, Employee Reliability Analytics,
        Employee Safety Analytics, Employee Health Analytics, Employee Wellness Analytics,
        Employee Wellbeing Analytics, Employee Experience Analytics, Employee Journey Analytics,
        Employee Lifecycle Analytics, Employee Onboarding Analytics, Employee Offboarding Analytics,
        Employee Development Analytics, Employee Training Analytics, Employee Learning Analytics,
        Employee Skill Analytics, Employee Competency Analytics, Employee Capability Analytics,
        Employee Potential Analytics, Employee Career Analytics, Employee Progression Analytics,
        Employee Promotion Analytics, Employee Succession Analytics, Employee Retention Analytics,
        Employee Engagement Analytics, Employee Satisfaction Analytics, Employee Motivation Analytics,
        Employee Commitment Analytics, Employee Loyalty Analytics, Employee Advocacy Analytics,
        Employee Referral Analytics, Employee Net Promoter Score, Employee NPS,
        Customer Net Promoter Score, Customer NPS, Product Net Promoter Score, Product NPS,
        Service Net Promoter Score, Service NPS, Brand Net Promoter Score, Brand NPS,
        Market Net Promoter Score, Market NPS, Industry Net Promoter Score, Industry NPS,
        Competitive Net Promoter Score, Competitive NPS, Benchmark Net Promoter Score,
        Benchmark NPS, Best Practice Net Promoter Score, Best Practice NPS, World Class Net Promoter Score,
        World Class NPS, Industry Leader Net Promoter Score, Industry Leader NPS,
        Market Leader Net Promoter Score, Market Leader NPS, Category Leader Net Promoter Score,
        Category Leader NPS, Segment Leader Net Promoter Score, Segment Leader NPS,
        Niche Leader Net Promoter Score, Niche Leader NPS, Specialist Net Promoter Score,
        Specialist NPS, Expert Net Promoter Score, Expert NPS, Authority Net Promoter Score,
        Authority NPS, Thought Leader Net Promoter Score, Thought Leader NPS,
        Influencer Net Promoter Score, Influencer NPS, Celebrity Net Promoter Score,
        Celebrity NPS, Viral Net Promoter Score, Viral NPS, Social Media Net Promoter Score,
        Social Media NPS, Digital Net Promoter Score, Digital NPS, Online Net Promoter Score,
        Online NPS, Mobile Net Promoter Score, Mobile NPS, App Net Promoter Score, App NPS,
        Website Net Promoter Score, Website NPS, E-commerce Net Promoter Score, E-commerce NPS,
        Retail Net Promoter Score, Retail NPS, B2B Net Promoter Score, B2B NPS,
        B2C Net Promoter Score, B2C NPS, B2G Net Promoter Score, B2G NPS,
        Government Net Promoter Score, Government NPS, Public Sector Net Promoter Score,
        Public Sector NPS, Non-profit Net Promoter Score, Non-profit NPS, Charity Net Promoter Score,
        Charity NPS, NGO Net Promoter Score, NGO NPS, Non-governmental Organization Net Promoter Score,
        Non-governmental Organization NPS
      </p>
    </div>
  );
};

export default ATSOptimizer;