import { Briefcase, Code, Database, Users, Download, Sparkles } from 'lucide-react';
import { supabase } from '../lib/supabase';

const About = () => {
  const handleDownloadResume = async () => {
    try {
      const { data, error } = await supabase.storage
        .from('resumes')
        .download('Product_Manager_Gursimran_Singh_Resume.pdf');

      if (error) {
        console.error('Error downloading resume:', error);
        return;
      }

      const url = window.URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Product_Manager_Gursimran_Singh_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const experience = [
    {
      role: 'Senior Product Manager',
      company: 'Blackline',
      period: 'May 2023 – Present',
      description: '',
      highlights: [
        'Owned end-to-end product strategy and roadmap for Intercompany — consolidating 4+ previously independent products into a unified enterprise suite; applied MoSCoW prioritization and Pendo usage analytics alongside support ticket analysis to identify high-friction workflows and sequence the roadmap for maximum user impact.',
        'Identified a critical accuracy gap in tax rate management — users manually maintained tax tables, generating recurring support tickets and compliance risk — and drove integration of real-time tax engine APIs; architected a multi-vendor model enabling customers to choose their preferred tax engine, which became a key product differentiator, was adopted by all new enterprise customers post-launch, and directly contributed to closing 2 enterprise deals worth ~$2M in ARR.',
        'Delivered a compliant invoicing solution via third-party vendor partnership and introduced self-service invoice configuration for implementation consultants, reducing configuration time from weeks to days and cutting post-sale onboarding effort across enterprise deployments.',
        'Defined and tracked OKRs for the Intercompany suite, including north star metrics around reduction in manual reconciliation steps, tax error rates, and implementation cycle time — ensuring the team maintained clear, measurable goals aligned with business outcomes each quarter.',
        'Scoped and shipped an AI-powered contextual chat feature that delivered precise, workflow-aware answers to user queries directly within the platform; the feature drove a 50%+ reduction in inbound support tickets, enabling the support team to redirect capacity toward complex, high-value customer issues.',
        'Authored comprehensive PRDs and functional specs in Confluence; translated requirements into Jira epics and user stories, facilitating sprint planning and backlog grooming with engineering to maintain predictable delivery cadence.',
        'Defined API contracts and integration requirements for third-party tax engine and invoicing vendors, bridging product and engineering teams to ensure technically sound, extensible integrations with minimal rework.',
        'Partnered with UX to define information architecture and drove wireframe iterations in Figma, ensuring designs reflected real user workflows validated through structured interviews and stakeholder workshops across US, UK, ANZ, and India.',
        'Defined feature-level success metrics and KPIs to measure adoption, error reduction, and time-to-complete for key workflows; used findings to inform subsequent roadmap iterations.',
        'Conducted competitive analysis across the intercompany and tax compliance landscape to identify market gaps and strengthen product positioning; findings fed directly into roadmap decisions.',
        'Presented quarterly roadmap reviews and feature outcomes to VP-level stakeholders, aligning cross-functional teams on priorities, surfacing trade-offs, and securing buy-in for long-term platform investments.',
        'Built demo narratives and GTM assets in partnership with Sales and Pre-Sales, enabling teams to independently showcase Intercompany capabilities and contributing to faster deal cycles and improved win rates in enterprise evaluations.'
      ]
    },
    {
      role: 'Senior Executive – Product Management',
      company: 'MarketXpander Services Pvt. Ltd',
      period: 'June 2022 – May 2023',
      description: '',
      highlights: [
        'Responsible for providing end-to-end CRM solutions, utilizing workflow technology to automate and streamline business processes across client engagements.',
        'Conducted gap analysis to evaluate as-is vs. would-be state of the business; designed end-to-end solutions and confirmed technical feasibility prior to development.',
        'Obtained stakeholder approval and validation on developed solutions; understood context of different clients to suitably structure solution implementation.',
        'Maintained CRM tools best practice repository and provided end-user training and change management support on CRM systems and tools.'
      ]
    },
    {
      role: 'Business Analyst – Product',
      company: 'Aurus',
      period: 'November 2021 – May 2022',
      description: '',
      highlights: [
        'Performed requirement gathering through client interviews, brainstorming sessions, and elicitation workshops; documented findings in FRDs, BRDs, and Use Cases.',
        'Validated business requirements against data extracts from source owners to ensure accurate data ingestion; ensured compliance with university payment policies.',
        'Handled end-to-end flows of Transaction Processing and Switching Solutions; provided assistance to payments team members as directed by management.'
      ]
    },
    {
      role: 'Implementation Lead / Product Manager',
      company: 'Neeyamo Enterprise Solution',
      period: 'July 2018 – November 2021',
      description: '',
      highlights: [
        'Served as the sole PM across 3 products — Ticketing Platform, Attendance & Leave Management, and Master Data Management — owning the full product lifecycle from discovery and PRD writing through development, UAT, and go-live for 50+ enterprise clients with a combined user base of ~5,000–6,000 employees.',
        'Identified a critical operational gap — client employees were raising HR and payroll queries over email with no tracking, accountability, or SLA visibility — and led the 0-to-1 build of a structured ticketing platform serving both internal ops teams and 50+ enterprise clients; replaced a fragmented email workflow with a fully auditable, SLA-driven system.',
        'Shipped a full feature set including ticket creation & tracking, auto-assignment to ops teams, SLA monitoring, escalation & notification workflows, manager-level reporting dashboards, and a self-service FAQ module — reducing average resolution time from 7 days to 2 days and handling ~100,000 tickets annually across the client base.',
        'Drove measurable operational outcomes post-launch: 100% ticket visibility and auditability replacing untracked email threads, significant improvement in ops team efficiency through auto-routing, and improved client satisfaction scores driven by consistent SLA adherence.',
        'Designed and delivered an enterprise-grade Attendance & Leave Management system from scratch, replacing manual spreadsheet-based tracking; built configurable leave policies, shift management, and real-time attendance dashboards tailored to multi-country, multi-entity payroll workflows across enterprise clients.',
        'Integrated the Attendance & Leave system with downstream payroll processing pipelines to ensure accurate, timely data flow — eliminating manual data reconciliation between HR and payroll teams and reducing payroll errors caused by attendance discrepancies.',
        'Created detailed PRDs, BRDs, and FRDs for all 3 products; utilised Jira for user story management and sprint planning, and conducted structured UAT sessions with early adopter customers to validate product quality and market fit before each release.',
        'Conducted thorough market and competitive analysis to identify feature gaps and opportunities; engaged early adopter customers through MVP feedback sessions to ensure product decisions were grounded in real enterprise use cases.',
        'Led end-to-end implementation, configuration, go-live, and hypercare for new client onboardings — ensuring smooth transitions, high adoption, and customer satisfaction across all 3 product lines.'
      ]
    }
  ];

  const skillGroups = [
    {
      title: 'Product Skills',
      icon: Briefcase,
      skills: ['Product Strategy & Roadmapping', 'OKRs & KPI Definition', 'PRD & BRD Writing', 'User Research & Discovery', 'Stakeholder Management', 'GTM Strategy', 'Competitive Analysis', 'Product Analytics']
    },
    {
      title: 'Methods & Frameworks',
      icon: Users,
      skills: ['Agile / Scrum', 'MoSCoW Prioritization', 'UAT', 'API Integration Design', 'Data Governance', 'Wireframing', 'Client Relationship Management', 'User Interviews', 'Jobs to be Done', 'Design Thinking', 'A/B Testing']
    },
    {
      title: 'Tools & Technical',
      icon: Code,
      skills: ['Jira', 'Figma', 'Confluence', 'Pendo', 'Amplitude/Mixpanel', 'SQL Basics', 'API Concepts', 'Technical Documentation']
    },
    {
      title: 'Domain Knowledge',
      icon: Database,
      skills: ['HR Tech', 'CRM', 'Intercompany Accounting', 'B2B SaaS', 'Workflow Automation', 'Enterprise Payments', 'Finance/Operations', 'Internal Tools', 'Implementation', 'Change Management']
    },
    {
      title: 'AI & Emerging Tech',
      icon: Sparkles,
      skills: ['AI Product Strategy', 'AI Use Case Discovery', 'AI Agents', 'Conversational AI / Chatbots', 'Vector Databases / Embeddings', 'Retrieval-Augmented Generation (RAG)', 'MCP', 'AI Evaluation', 'Human-in-the-Loop Workflows']
    }
  ];

  const interests = [
    'Biking through Bangalore\'s tech parks and surrounding areas',
    'Reading about product strategy, behavioral psychology, and systems thinking',
    'Weekend trips to beaches and hill stations',
    'Learning about AI/ML applications in product development'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-0">
            About Gursimran
          </h1>
          <button
            onClick={handleDownloadResume}
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </button>
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed">
            Product Manager with 7+ years of experience building and scaling SaaS products across HR Tech, CRM, and Intercompany Accounting domains. Strong expertise in product discovery, PRDs, roadmap strategy, stakeholder management, and end-to-end delivery. Proven ability to identify and define AI-driven product opportunities, design AI-assisted workflows and decision-support features, and collaborate with data, engineering, and platform teams to integrate AI/ML capabilities, automation, and intelligent insights into enterprise products.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Experience</h2>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {exp.role}
                  </h3>
                  <p className="text-emerald-600 font-medium mt-1">
                    {exp.company}
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-50 text-emerald-700 mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {exp.description}
              </p>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                    <Icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Outside of work</h2>
        <div className="bg-white rounded-xl p-8 border border-gray-200">
          <p className="text-gray-700 mb-4 leading-relaxed">
            When I'm not thinking about product, you'll find me:
          </p>
          <ul className="space-y-3">
            {interests.map((interest, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">{interest}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
