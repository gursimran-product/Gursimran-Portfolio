export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  role: string;
  timeframe: string;
  context: string;
  type: string;
  summary: string;
  problem: string;
  goals: string[];
  metrics: string[];
  research: string;
  insights: string[];
  strategy: string;
  solution: string;
  execution: string;
  outcomes: string[];
  learnings: string;
  tags: string[];
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'Automating-Invoice-Management',
    title: 'Automating Invoice Management for Finance Teams',
    category: 'Launched product',
    role: 'Product Manager',
    timeframe: '6 months',
    context: 'B2B SaaS Platform',
    type: 'Launched product',
    summary: 'Redesigned invoice management workflow to reduce manual processing time and errors for finance teams.',
    problem: 'Finance teams at mid-sized companies were spending 15+ hours per week manually processing, matching, and approving invoices. The existing workflow required switching between multiple systems, leading to errors, delayed payments, and frustrated suppliers. The lack of automated matching and approval routing created bottlenecks that scaled poorly as companies grew.',
    goals: [
      'Reduce manual invoice processing time by 40%',
      'Decrease invoice matching errors by 60%',
      'Improve supplier payment timeliness',
      'Enable scalable workflows that grow with company size'
    ],
    metrics: [
      'Average processing time per invoice',
      'Error rate in invoice-PO matching',
      'Time to payment completion',
      'User satisfaction scores from finance teams'
    ],
    research: 'Conducted 12 user interviews with finance managers and AP specialists across 8 companies. Shadowed 3 finance teams during month-end close. Analyzed support tickets and error logs from the past 6 months. Held workshops with 4 key customers to map current workflows and pain points.',
    insights: [
      'Manual data entry errors occurred in 23% of invoices, mostly due to unclear vendor naming conventions',
      'Approval routing was the biggest bottleneck - invoices sat in queues for 3-5 days on average',
      'Finance teams lost significant time tracking down the "right" approver for non-standard purchases',
      'Integration gaps forced users to manually check 2-3 other systems for purchase order details',
      'Month-end close was particularly painful, with teams working late to reconcile mismatches'
    ],
    strategy: 'Prioritized intelligent matching and automated routing as the highest-impact features. Decided to build a rules-based approval system first (versus ML-based) to ship faster and gather data for future intelligence. Aligned with engineering on a phased approach: Phase 1 focused on core workflow automation, Phase 2 on advanced matching algorithms. Worked with sales and marketing to position this as a differentiator in our competitive landscape.',
    solution: 'Built an intelligent invoice processing system with automated PO matching using fuzzy logic, configurable multi-level approval routing based on amount/department/vendor, real-time notifications and escalations, integrated document management, and a unified dashboard showing invoice status pipeline. The system reduced context switching by pulling PO data directly into the invoice view and allowing approvers to review and approve from email or mobile.',
    execution: 'Collaborated closely with engineering on technical feasibility and architecture decisions. Worked with design to prototype and test 3 different approval routing configurations with users. Managed scope carefully - deferred "nice-to-have" features like OCR to Phase 2. Coordinated with customer success to identify beta customers and develop training materials. Ran a 6-week beta with 5 customers before general release.',
    outcomes: [
      'Reduced average processing time from 12 minutes to 4 minutes per invoice (67% improvement)',
      'Cut matching errors from 23% to 6%',
      'Improved on-time payment rate from 73% to 91%',
      'Received NPS of 8.5/10 from finance users',
      'Feature became a key sales differentiator, mentioned in 80% of demos'
    ],
    learnings: 'The importance of shadowing users in their actual environment - we discovered critical pain points that never came up in interviews. Also learned that getting early engineering input on feasibility prevented us from over-promising to customers. If I could do it differently, I would have allocated more time for customer success training and change management - adoption was slower than expected because teams needed to adjust their processes.',
    tags: ['B2B SaaS', 'Workflow Automation', 'Discovery', 'Data-driven', 'Stakeholder Management'],
    featured: true
  },
  {
    slug: 'internal-analytics-platform',
    title: 'Building an Internal Analytics Platform for Operations Teams',
    category: 'Launched product',
    role: 'Product Manager',
    timeframe: '8 months',
    context: 'Internal Platform',
    type: 'Launched product',
    summary: 'Created a self-service analytics platform that empowered operations teams to make data-driven decisions without engineering support.',
    problem: 'Operations teams across 4 business units relied on engineering to run custom SQL queries for basic reporting needs. Average turnaround time was 3-5 days, creating decision-making delays. Engineering team spent ~20% of their time on ad-hoc reporting requests instead of building product features. No standardized metrics meant different teams used conflicting numbers in meetings.',
    goals: [
      'Enable self-service reporting for 90% of common use cases',
      'Reduce engineering time spent on reporting by 80%',
      'Establish single source of truth for key business metrics',
      'Decrease reporting request turnaround from days to minutes'
    ],
    metrics: [
      'Number of self-service reports created',
      'Percentage of reporting requests going to engineering',
      'Time saved by operations teams',
      'Data accuracy and consistency scores'
    ],
    research: 'Analyzed 6 months of Slack requests to engineering team to identify most common reporting needs. Interviewed 15 operations team members about their decision-making workflows. Reviewed existing reporting tools and identified gaps. Conducted competitive analysis of internal BI tools used by similar companies.',
    insights: [
      'Top 10 report types accounted for 70% of all requests',
      'Most users only needed simple filters and date ranges, not complex SQL',
      'Teams wanted to schedule reports and share them with stakeholders',
      'Lack of data documentation caused confusion about metric definitions',
      'Operations managers needed dashboards for weekly business reviews'
    ],
    strategy: 'Decided to build a lightweight internal tool rather than buy an expensive BI platform, given our specific needs and budget constraints. Focused on the most requested report types first. Partnered with data engineering to establish a clean data model. Created a phased rollout plan starting with one business unit as pilot.',
    solution: 'Developed a web-based platform with drag-and-drop report builder for common use cases, pre-built templates for top 15 report types, scheduled report delivery via email, shareable dashboard links, data dictionary with metric definitions, and basic access controls by business unit. Included a feedback mechanism for users to request new capabilities.',
    execution: 'Started with a 2-week design sprint to prototype the core experience. Got early feedback from 5 power users who became internal champions. Worked with data engineering to ensure underlying data quality and performance. Created extensive documentation and video tutorials. Ran training sessions for each business unit during rollout.',
    outcomes: [
      'Operations teams created 450+ reports in first 3 months',
      'Engineering reporting requests dropped by 75%',
      'Average report creation time went from 3-5 days to under 10 minutes',
      'Platform achieved 85% adoption rate across operations teams',
      'Saved an estimated 200 engineering hours per quarter'
    ],
    learnings: 'Involving power users early created internal advocates who helped drive adoption. The data dictionary was more critical than expected - it became the foundation for cross-team alignment on metrics. If I could redo this, I would have invested more in data quality checks upfront - we had to spend extra cycles fixing data issues that surfaced after launch.',
    tags: ['Internal Tools', 'Data Products', 'Self-Service', 'Stakeholder Alignment', 'Change Management'],
    featured: true
  },
  {
    slug: 'ai-powered-search',
    title: 'AI-Powered Search Experience (Product Concept)',
    category: 'Concept / redesign',
    role: 'Product Manager (Concept)',
    timeframe: '3 weeks',
    context: 'Product Exploration',
    type: 'Concept / redesign',
    summary: 'Explored how AI could transform search from keyword matching to intelligent intent understanding for enterprise knowledge base.',
    problem: 'Enterprise knowledge bases have become massive, with thousands of documents, wikis, and resources. Traditional keyword search returns 100+ results that users must manually sift through. Teams waste hours searching for information that exists but is hard to find. New employees struggle to discover relevant resources during onboarding.',
    goals: [
      'Reduce time to find relevant information by 50%',
      'Improve search result relevance and user satisfaction',
      'Surface related content users did not know to look for',
      'Make institutional knowledge more accessible to new team members'
    ],
    metrics: [
      'Time to first relevant result',
      'Search abandonment rate',
      'Click-through rate on search results',
      'User satisfaction with search experience'
    ],
    research: 'Surveyed 45 employees about search pain points. Analyzed search query logs to identify patterns and common dead ends. Reviewed academic research on semantic search and LLM applications. Benchmarked leading AI-powered search products (Glean, Notion AI, Perplexity).',
    insights: [
      'Users often do not know the exact keywords to use, especially for cross-functional topics',
      'Most valuable search results are not the exact document match, but related context around it',
      'People want answers, not just document links',
      'Search is most painful during onboarding and when working on unfamiliar projects',
      'Users would trust AI-generated summaries if source documents were clearly cited'
    ],
    strategy: 'Proposed a hybrid approach: combine semantic search to understand intent with traditional keyword matching for precision. Focus on summarizing results and surfacing related content. Start with read-only experience before allowing AI to edit or create content. Identify a pilot team (customer success) with clear search pain points to validate the concept.',
    solution: 'Designed a search experience where users ask questions in natural language. AI understands intent and returns a summarized answer with source citations. Related documents and suggested follow-up questions appear below. Search learns from user behavior to improve relevance. Included a feedback loop where users can rate result quality.',
    execution: 'Created detailed Figma prototypes showing key user flows. Mapped out technical requirements and estimated engineering effort. Identified potential AI models and vendors to evaluate. Developed business case showing ROI based on time saved. Planned phased rollout: pilot with one team, gather feedback, iterate, then expand.',
    outcomes: [
      'Concept validated with 12 potential users - 10/12 said they would use it daily',
      'Executive leadership approved exploration phase with 2 engineers for 1 quarter',
      'Identified customer success team as ideal pilot group',
      'Created roadmap for MVP and follow-on iterations'
    ],
    learnings: 'Prototyping complex AI interactions is challenging - needed multiple iterations to find the right balance of automation and control. Learned the importance of transparency in how AI generates answers. Next steps would involve technical spikes to validate feasibility and cost, then building a clickable prototype for deeper user testing.',
    tags: ['AI/ML', 'Search', 'Product Strategy', 'Innovation', 'Prototyping'],
    featured: true
  },
  {
    slug: 'karta-dharta-creator-os',
    title: 'Karta-Dharta: Building an Operating System for the Creator Economy',
    category: 'Concept / redesign',
    role: 'Product Manager',
    timeframe: '3 months',
    context: 'Creator Economy Platform',
    type: 'Concept / redesign',
    summary: 'Designed a unified creator operating system that combines AI content creation, brand deal management, and finance tracking to eliminate tool fragmentation for professional creators.',
    problem: 'The creator economy has evolved into a full-fledged business ecosystem, but creators were forced to juggle 5-7 different tools for content ideation, brand partnerships, coordination, and financial tracking. This fragmentation resulted in excessive context switching, poor visibility into deals and payments, inconsistent content quality, revenue leakages, and creators spending more time managing work than actually creating. Mid-tier creators (50K-500K followers) experienced the most pain as operations became increasingly chaotic with growth.',
    goals: [
      'Reduce creator admin and coordination time by 30-40%',
      'Improve content consistency through structured ideation workflows',
      'Increase payment realization rates through systematic invoice tracking',
      'Provide unified visibility into income streams and pending deals',
      'Accelerate creator maturity from hobbyist to professional'
    ],
    metrics: [
      'Time spent on administrative tasks',
      'Content output consistency and quality',
      'Payment collection rates and turnaround time',
      'Tool consolidation (reduction from 5-7 tools to 1)',
      'Creator satisfaction and workflow efficiency scores'
    ],
    research: 'Conducted in-depth interviews with 20+ creators across different tiers (5K-500K followers). Mapped current workflows and pain points through journey mapping exercises. Analyzed competitive landscape of creator tools and identified fragmentation patterns. Studied creator business models, income sources, and operational challenges. Researched tax and financial pain points specific to creator income patterns.',
    insights: [
      'Creators think in workflows, not features - they want "one place where everything makes sense" rather than best-in-class point solutions',
      'Admin pain increases with success - as creators grow, content creation becomes easier but operations become chaotic, with mid-tier creators experiencing the biggest pain',
      'Finance is the most under-served problem - creators earn well but struggle with tracking, miss payments, and face tax-related anxiety',
      'Context switching across tools breaks creative flow and causes work to fall through cracks',
      'AI alone is not differentiation - real value comes from AI + workflow + context + outcomes working together'
    ],
    strategy: 'Decided to build a full creator operating system rather than another point solution, recognizing that integration is the core value proposition. Prioritized three pillars: Creation (AI content engine), Management (CRM for brand deals), and Sustenance (finance tracking). Designed for end-to-end workflow integration where Script → Content → Brand Deal → Invoice → Payment → Analytics flows seamlessly. Targeted small to mid-tier creators (5K-500K followers) who treat content as a profession, not a hobby. Focused on quality, structure, and consistency over basic AI text generation.',
    solution: 'Designed an integrated platform with three core layers: (1) AI Content Creation - topic and idea generation by niche, viral hook generation, multi-format script generation (Reels, Shorts, YouTube, Podcasts), caption and hashtag generation with tone control, and script-to-project linkage; (2) Creator CRM - brand deal pipeline management (Outreach → Negotiation → Delivery → Payment), deal tracking with deliverables and deadlines, contract and asset storage, automated reminders, and centralized contact management; (3) Finance & Monetization - income tracking across platforms and deals, GST-ready invoicing, expense tracking, payment status monitoring, monthly dashboards, and tax estimation. The platform connects these layers into unified creator workflows.',
    execution: 'Started with 3-4 weeks of discovery and market research to understand the creator landscape. Conducted 4 weeks of problem validation through creator interviews across different segments. Spent 3 weeks defining product architecture and feature prioritization. Developed detailed UX flows and feature designs over 3 weeks. Created production-ready designs with comprehensive functional and technical specifications. Validated the concept through feedback sessions with target creators and mapped out beta testing approach.',
    outcomes: [
      'Created deeply validated product concept backed by extensive creator research',
      'Developed production-ready design with full functional specifications',
      'Validated expected outcomes: 30-40% reduction in admin time, higher content consistency, improved payment realization',
      'Designed onboarding flow for under 30 minutes initial setup time',
      'Established clear adoption patterns: daily use for scripts and deal tracking, weekly use for finance review',
      'Product ready to move into build and beta phase with clear roadmap'
    ],
    learnings: 'The biggest insight was that creators do not want more tools - they want fewer, better-integrated ones. Mid-tier creators face the most operational chaos, making them the ideal target segment. Finance turned out to be a much deeper pain point than initially expected, creating anxiety and trust issues that go beyond simple tracking. The market has over-indexed on AI content generation while under-serving creator operations and finance. Real differentiation comes from workflow integration, not feature superiority. If starting over, I would involve creator managers and small agencies earlier in the research phase to understand collaboration patterns better.',
    tags: ['Creator Economy', 'AI/ML', 'Product Strategy', 'Platform Design', 'User Research'],
    featured: true
  },
  {
    slug: 'mobile-app-redesign',
    title: 'Improving Mobile App Onboarding Flow',
    category: 'Product analysis',
    role: 'Product Manager',
    timeframe: '4 weeks',
    context: 'Product Improvement Initiative',
    type: 'Product analysis',
    summary: 'Analyzed and redesigned mobile app onboarding to reduce drop-off and improve activation rates.',
    problem: 'Mobile app onboarding had a 45% drop-off rate between sign-up and first key action. Users who did not complete onboarding were 5x less likely to become active users. Feedback indicated the onboarding flow was too long and did not clearly communicate value. Competitors had significantly smoother onboarding experiences.',
    goals: [
      'Reduce onboarding drop-off rate to under 25%',
      'Increase Day 1 activation rate by 30%',
      'Improve clarity on product value proposition',
      'Shorten time to first value'
    ],
    metrics: [
      'Onboarding completion rate',
      'Time to complete onboarding',
      'Day 1, Day 7, Day 30 activation rates',
      'User sentiment scores during onboarding'
    ],
    research: 'Conducted user testing sessions with 8 new users while they went through onboarding. Analyzed funnel data to identify specific drop-off points. Reviewed session recordings using analytics tools. Benchmarked 6 competitor mobile apps. Collected feedback from customer support tickets mentioning onboarding.',
    insights: [
      'Users dropped off at the account setup screen - too many required fields upfront',
      'Value proposition was unclear until step 5 of 7, but most users churned by step 3',
      'Permissions requests (notifications, camera) felt intrusive without context',
      'Users wanted to explore the app before committing to setup',
      'Successful users found value in one specific feature, but onboarding treated all features equally'
    ],
    strategy: 'Proposed a progressive onboarding approach: let users explore first, defer account setup, show value before asking for permissions, personalize onboarding based on user role/goals. Prioritized changes based on impact and implementation complexity. Planned A/B test to validate changes before full rollout.',
    solution: 'Redesigned onboarding to allow guest browsing first, moved account creation to after initial value demonstration, reduced required fields from 8 to 3, added contextual permission requests tied to specific actions, created role-based onboarding paths, and shortened flow from 7 steps to 4 core steps. Included progress indicators and ability to skip non-essential steps.',
    execution: 'Collaborated with design on prototypes and user testing. Worked with engineering to implement analytics for new funnel tracking. Set up A/B test framework with 50/50 split. Coordinated with marketing to align messaging. Monitored metrics daily during test period to catch any issues early.',
    outcomes: [
      'A/B test showed 38% reduction in drop-off rate (45% to 28%)',
      'Day 1 activation increased by 34%',
      'Time to complete onboarding decreased from 8 minutes to 3.5 minutes',
      'User sentiment scores improved from 6.2 to 8.1',
      'Rolled out to 100% of users after successful test'
    ],
    learnings: 'The power of showing value before asking for commitment - this principle applies beyond onboarding. User testing revealed pain points that data alone did not show. Learned to balance product-led growth principles with necessary account setup requirements. If I were to do this again, I would have tested onboarding changes with different user segments separately, as different audiences had different needs.',
    tags: ['Mobile', 'User Experience', 'Onboarding', 'A/B Testing', 'Conversion Optimization'],
    featured: false
  }
];
