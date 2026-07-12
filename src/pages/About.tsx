import { Briefcase, Code, Database, Users, Download, Sparkles } from 'lucide-react';

const About = () => {
  const experience = [
    {
      role: 'Senior Product Manager',
      company: 'Blackline',
      period: 'May 2023 – Present',
      description: '',
      highlights: [
        'Drove $2M+ in new ARR by identifying a critical accuracy gap in tax rate management and leading vendor evaluation to architect a multi-vendor tax engine integration — giving customers a choice of preferred tax engine; adopted by all new enterprise customers post-launch and directly closed 2 enterprise deals.',
        'Cut inbound support tickets by 50%+ by scoping and delivering an AI-powered contextual chat feature that gives users precise, workflow-aware answers directly inside the platform, freeing the support team for complex, high-value issues.',
        'Own end-to-end product strategy and roadmap for the Intercompany suite, consolidating 4+ standalone products into a unified enterprise offering; apply MoSCoW prioritization and Pendo usage analytics to sequence the roadmap, and define OKRs and north-star metrics around reconciliation effort, tax error rates, and implementation cycle time.',
        'Launched a compliant invoicing solution through a third-party vendor partnership and introduced self-service invoice configuration for implementation consultants — cutting configuration time from weeks to days and reducing post-sale onboarding effort.',
        'Lead cross-functional delivery across 2 scrum teams (10 people total, including 2 engineering managers) spanning Core product and Tax/Invoicing microservices, plus 2 dedicated designers — partnering on API contracts, integration architecture, and UX wireframes across the US, UK, ANZ, and India.',
        'Present quarterly roadmap reviews and feature outcomes to VP-level stakeholders, and build demo narratives and GTM assets with Sales and Pre-Sales — contributing to faster deal cycles and stronger win rates, informed by ongoing competitive analysis of the intercompany and tax compliance landscape.'
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
      description: 'Sole PM across 3 products — Ticketing Platform, Attendance & Leave Management, and Master Data Management — each delivered sequentially through a dedicated scrum team (3 teams across the tenure). Directed a team of 4 (junior PMs and implementation specialists) and owned the full lifecycle from discovery through go-live for 50+ enterprise clients with a combined user base of ~5,000–6,000 employees.',
      highlights: [
        'Ticketing Platform: Identified a critical operational gap — HR and payroll queries raised over email with no tracking, accountability, or SLA visibility — and led the 0-to-1 build of a structured ticketing platform for internal ops teams and 50+ enterprise clients, replacing a fragmented email workflow with a fully auditable, SLA-driven system.',
        'Ticketing Platform: Shipped a full feature set spanning ticket creation & tracking, auto-assignment, SLA monitoring, escalation & notification workflows, manager-level reporting dashboards, and a self-service FAQ module — cutting average resolution time from 7 days to 2 days and handling ~100,000 tickets annually across the client base.',
        'Ticketing Platform: Drove measurable operational outcomes post-launch: 100% ticket visibility and auditability replacing untracked email threads, improved ops efficiency through auto-routing, and higher client satisfaction through consistent SLA adherence.',
        'Attendance & Leave Management: Designed and delivered an enterprise-grade Attendance & Leave Management system from scratch, replacing manual spreadsheet tracking; built configurable leave policies, shift management, and real-time attendance dashboards for multi-country, multi-entity payroll workflows.',
        'Attendance & Leave Management: Integrated the system with downstream payroll pipelines, eliminating manual reconciliation between HR and payroll teams and reducing payroll errors caused by attendance discrepancies.',
        'Across all 3 products: Authored comprehensive product requirements and specification documentation; used Jira for user story management and sprint planning, and ran structured UAT sessions with early adopter customers to validate quality and market fit before each release.',
        'Across all 3 products: Conducted market and competitive analysis to identify feature gaps and opportunities, engaging early adopter customers through MVP feedback sessions to ground decisions in real enterprise use cases.',
        'Across all 3 products: Led end-to-end implementation, configuration, go-live, and hypercare for new client onboardings, ensuring smooth transitions and high adoption across all 3 product lines.'
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
          <a
            href="/resume.pdf"
            download="Gursimran_Singh_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </a>
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed">
            Product Manager with 7+ years of experience building and scaling SaaS products across HR Tech, CRM, and Intercompany Accounting domains. Proven track record of driving revenue impact — including contributing to $2M+ in ARR at BlackLine through a differentiated multi-vendor tax engine integration. Strong expertise in 0-to-1 product builds, roadmap strategy, OKR definition, and stakeholder management, with end-to-end ownership from discovery through delivery. Experienced in shipping AI-powered features, defining API integrations, and leading cross-functional teams across global enterprise environments.
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
