export interface Post {
  slug: string;
  title: string;
  description: string;
  type: string;
  date: string;
  external?: boolean;
  url?: string;
  content?: string;
  subtitle?: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
}

export const posts: Post[] = [
  {
    slug: 'choosing-product-metrics-that-matter-avoid-vanity-metrics',
    title: 'Choosing Product Metrics That Actually Matter (and How to Avoid Vanity Metrics)',
    subtitle: 'A master guide for modern Product Managers, SaaS founders & D2C entrepreneurs',
    description: 'Learn how to choose product metrics that truly drive growth, avoid vanity metrics, and build a metrics stack that works for both B2B SaaS and B2C businesses. Includes definitions, formulas, and real-world examples.',
    type: 'Notes',
    date: '2024-12-01',
    metaTitle: 'Choosing Product Metrics That Actually Matter (and How to Avoid Vanity Metrics)',
    metaDescription: 'Learn how to choose product metrics that truly drive growth, avoid vanity metrics, and build a metrics stack that works for both B2B SaaS and B2C businesses. Includes definitions, formulas, and real-world examples.',
    keywords: 'product metrics, vanity metrics, actionable metrics, KPIs, North Star metric, B2B SaaS metrics, ecommerce metrics, product management analytics, churn, retention, conversion rate',
    content: `
      <p>If you want to see the future of your product… look at its metrics.</p>
      <p>Not the metrics that make you feel good.<br>The metrics that make you think — and sometimes make you uncomfortable.</p>
      <p>Most dashboards today are like Instagram feeds: curated to impress, not express reality. Teams celebrate followers, downloads, page views, impressions… while revenue, retention, adoption, and satisfaction stay flat.</p>
      <p><strong>The truth?</strong><br>You can't manage what you don't measure — and you can't scale what you measure incorrectly.</p>
      <p>This article shows you how to choose the right product metrics, avoid vanity traps, and build a metrics engine that actually accelerates growth.</p>

      <hr class="my-12 border-gray-300">

      <h2>1️⃣ Metrics vs KPIs — Let's get the basics right (in 60 seconds)</h2>
      <table>
        <thead>
          <tr>
            <th>Concept</th>
            <th>What it means</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Metric</strong></td>
            <td>Any number you track</td>
            <td>"10,000 sign-ups"</td>
          </tr>
          <tr>
            <td><strong>KPI</strong></td>
            <td>A metric that indicates success vs a goal</td>
            <td>"Activation rate: % of new users experiencing value"</td>
          </tr>
        </tbody>
      </table>
      <p><strong>Not every metric is important.</strong><br>Only KPIs influence decisions and show progress toward goals.</p>

      <hr class="my-12 border-gray-300">

      <h2>2️⃣ The Difference Between Vanity & Actionable Metrics</h2>
      <table>
        <thead>
          <tr>
            <th>Vanity Metrics</th>
            <th>Actionable Metrics</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Look impressive</td>
            <td>Drive decisions</td>
          </tr>
          <tr>
            <td>Easy to grow artificially</td>
            <td>Hard to grow unless value improves</td>
          </tr>
          <tr>
            <td>Don't correlate with revenue or retention</td>
            <td>Strongly correlate with customer value</td>
          </tr>
          <tr>
            <td>Don't tell you what to do next</td>
            <td>Tell you exactly what to fix</td>
          </tr>
        </tbody>
      </table>
      <p><strong>A simple rule:</strong></p>
      <p>If a metric goes up and your strategy stays the same → it's probably vanity.<br>If a metric goes down and it keeps you up at night → it's probably actionable.</p>

      <hr class="my-12 border-gray-300">

      <h2>3️⃣ The AARRR Framework — A map for choosing meaningful metrics</h2>
      <p>A product has a lifecycle. So should your metrics:</p>
      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>Core Question</th>
            <th>Good Metrics</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Acquisition</strong></td>
            <td>Are the right users finding us?</td>
            <td>Conversion rate, CAC</td>
          </tr>
          <tr>
            <td><strong>Activation</strong></td>
            <td>Are they experiencing value quickly?</td>
            <td>Activation rate, Time-to-Value</td>
          </tr>
          <tr>
            <td><strong>Retention</strong></td>
            <td>Do they keep coming back?</td>
            <td>30/90-day retention, churn</td>
          </tr>
          <tr>
            <td><strong>Revenue</strong></td>
            <td>Is value converting to money?</td>
            <td>MRR, AOV, LTV</td>
          </tr>
          <tr>
            <td><strong>Referral</strong></td>
            <td>Are customers recommending us?</td>
            <td>NPS, Referral rate</td>
          </tr>
        </tbody>
      </table>
      <p><strong>Every metric should support one of these stages.</strong></p>

      <hr class="my-12 border-gray-300">

      <h2>4️⃣ 🎯 The Ultimate List of Metrics to Choose From (B2B & B2C)</h2>
      <p>Below is a comprehensive menu of metrics. You don't need all of them — pick the ones aligned to your business model and growth stage.</p>

      <h3>🔵 B2B SaaS Product Metrics</h3>

      <h4><strong>Acquisition</strong></h4>
      <ul>
        <li>Marketing Qualified Leads (MQL)</li>
        <li>Sales Qualified Leads (SQL)</li>
        <li>Free-to-Paid Conversion Rate</li>
        <li>Lead Velocity Rate (LVR)</li>
        <li>Customer Acquisition Cost (CAC)</li>
      </ul>

      <h4><strong>Activation</strong></h4>
      <ul>
        <li>Activation Rate (% of users completing the "aha moment")</li>
        <li>Time-to-Value (TTV)</li>
        <li>Onboarding Completion Rate</li>
        <li>First Month Feature Adoption Rate</li>
        <li>Product Qualification Rate (PQL)</li>
      </ul>

      <h4><strong>Engagement & Retention</strong></h4>
      <ul>
        <li>Weekly Active Accounts (WAA)</li>
        <li>Stickiness Ratio (DAU/WAU or WAU/MAU)</li>
        <li>User / Account Level Engagement Score</li>
        <li>Adoption Rate of Key Features</li>
        <li>Session Frequency & Time on Core Feature</li>
        <li>Churn (Logo Churn & Revenue Churn)</li>
        <li>Net Revenue Retention (NRR)</li>
        <li>Gross Revenue Retention (GRR)</li>
      </ul>

      <h4><strong>Revenue & Monetization</strong></h4>
      <ul>
        <li>Monthly Recurring Revenue (MRR)</li>
        <li>Average Revenue per Account (ARPA)</li>
        <li>Expansion MRR (Upsells, Seats, Add-Ons)</li>
        <li>Customer Lifetime Value (LTV)</li>
        <li>CAC Payback Period</li>
      </ul>

      <h4><strong>Referral & Satisfaction</strong></h4>
      <ul>
        <li>Net Promoter Score (NPS)</li>
        <li>Customer Satisfaction Score (CSAT)</li>
        <li>Customer Effort Score (CES)</li>
        <li>Referral Rate</li>
      </ul>

      <hr class="my-8 border-gray-200">

      <h3>🟠 B2C / D2C Ecommerce Metrics</h3>

      <h4><strong>Acquisition</strong></h4>
      <ul>
        <li>Website Visitor → Purchase Conversion Rate</li>
        <li>Cost-per-Click (CPC)</li>
        <li>Cost-per-Acquisition (CPA)</li>
        <li>First-Order CAC</li>
      </ul>

      <h4><strong>Activation</strong></h4>
      <ul>
        <li>Add-to-Cart Rate</li>
        <li>Checkout Initiation Rate</li>
        <li>First-Purchase Time</li>
        <li>Product Page Conversion Rate</li>
      </ul>

      <h4><strong>Retention</strong></h4>
      <ul>
        <li>Repeat Purchase Rate</li>
        <li>Days Between Purchases</li>
        <li>Subscription Renewal Rate</li>
        <li>Product Return Rate</li>
        <li>Customer Churn</li>
      </ul>

      <h4><strong>Revenue</strong></h4>
      <ul>
        <li>Average Order Value (AOV)</li>
        <li>Revenue per Visitor (RPV)</li>
        <li>Customer Lifetime Value (LTV)</li>
        <li>Gross Margin / Contribution Margin</li>
        <li>Upsell / Cross-sell Rate</li>
      </ul>

      <h4><strong>Engagement & Loyalty</strong></h4>
      <ul>
        <li>Wishlist Engagement Rate</li>
        <li>Loyalty Program Participation / Redemption Rate</li>
        <li>Post-Purchase Engagement (Email / WhatsApp)</li>
        <li>Review & Rating Rate</li>
      </ul>

      <h4><strong>Referral & Advocacy</strong></h4>
      <ul>
        <li>Referral Purchase Rate</li>
        <li>NPS</li>
        <li>Organic Mention Volume</li>
      </ul>

      <blockquote>
        <p><strong>⭐ Insight (Psychology of Product Metrics)</strong></p>
        <p>People (including PMs) gravitate toward vanity metrics because they protect ego and reduce discomfort:</p>
        <p>• "Signups are growing" sounds better than<br>"Only 11% of users find value."</p>
        <p>But growth begins the moment a team becomes brutally honest.</p>
        <p><strong>Real progress sounds like:</strong><br>
        • "We don't have a traffic problem. We have a conversion problem."<br>
        • "We don't have a sales problem. We have an activation problem."<br>
        • "We don't have a product problem. We have an onboarding problem."</p>
        <p>That mindset shift is where great products begin.</p>
      </blockquote>

      <hr class="my-12 border-gray-300">

      <h2>5️⃣ Real Scenarios — When Correct Metrics Change the Roadmap</h2>

      <h3>🔹 B2B SaaS Scenario</h3>
      <p>A PM must pick what to prioritize next:</p>
      <table>
        <thead>
          <tr>
            <th>Vanity View</th>
            <th>Actionable View</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>"We added 20,000 new signups — growth is great!"</td>
            <td>"Only 6% reach the activation moment — users don't get value quickly."</td>
          </tr>
        </tbody>
      </table>
      <p><strong>Roadmap decision:</strong> Prioritize onboarding & Time-to-Value → not new feature development.</p>

      <hr class="my-8 border-gray-200">

      <h3>🔸 B2C / D2C Scenario</h3>
      <p>A founder is planning next quarter's marketing spend:</p>
      <table>
        <thead>
          <tr>
            <th>Vanity View</th>
            <th>Actionable View</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>"We reached 1M website visitors — marketing is killing it!"</td>
            <td>"Conversion rate is 1.1% and 72% of carts are abandoned — revenue is leaking."</td>
          </tr>
        </tbody>
      </table>
      <p><strong>Roadmap decision:</strong> Fix the conversion funnel → then scale marketing.</p>

      <hr class="my-12 border-gray-300">

      <h2>6️⃣ The North Star Metric Framework</h2>
      <p>Choosing one North Star Metric (NSM) aligns everyone:</p>
      <table>
        <thead>
          <tr>
            <th>Business Type</th>
            <th>Example North Star</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>B2B SaaS</td>
            <td>"Weekly Active Teams with ≥3 key actions"</td>
          </tr>
          <tr>
            <td>D2C Brand</td>
            <td>"Number of repeat purchases per month"</td>
          </tr>
          <tr>
            <td>Marketplace</td>
            <td>"Successful transactions per month"</td>
          </tr>
          <tr>
            <td>Productivity App</td>
            <td>"Tasks completed per active user per week"</td>
          </tr>
          <tr>
            <td>Streaming App</td>
            <td>"Hours watched per user per month"</td>
          </tr>
        </tbody>
      </table>
      <p><strong>Alongside the NSM, add guardrail metrics (to prevent unintentional harm):</strong></p>
      <ul>
        <li>Churn</li>
        <li>Customer complaints</li>
        <li>NPS</li>
        <li>Return rate</li>
        <li>Support tickets</li>
      </ul>

      <hr class="my-12 border-gray-300">

      <h2>7️⃣ A Step-by-Step Plan to Build Your Own Metrics Strategy</h2>
      <p><strong>✔ Step 1</strong> — Define your 12-month product goal<br>(e.g., retention, revenue, expansion, adoption)</p>
      <p><strong>✔ Step 2</strong> — Choose your North Star Metric<br>(1 number that reflects customer value + business value)</p>
      <p><strong>✔ Step 3</strong> — Select 5–7 supporting actionable KPIs<br>(From the menu above — not more!)</p>
      <p><strong>✔ Step 4</strong> — Demote vanity metrics<br>(Move them to the "context" section of dashboards)</p>
      <p><strong>✔ Step 5</strong> — Review and refine quarterly<br>Metrics evolve as your product matures.</p>

      <hr class="my-12 border-gray-300">

      <h2>Final Thought</h2>
      <p><strong>Great products are not built by the teams who see the most data,<br>but by the teams who see the right data — and have the courage to act on it.</strong></p>
      <p>The moment your metrics tell the truth, your roadmap becomes clearer,<br>your decisions become sharper,<br>and your product begins to grow — for real.</p>
    `
  },
  {
    slug: 'product-discovery-mistakes',
    title: 'Five Common Product Discovery Mistakes (and How to Avoid Them)',
    description: 'Lessons learned from running discovery on complex B2B features - from asking the wrong questions to falling in love with solutions too early.',
    type: 'Opinion',
    date: '2024-03-15'
  },
  {
    slug: 'notion-teardown',
    title: 'Product Teardown: How Notion Mastered Progressive Complexity',
    description: 'Analyzing how Notion balances simplicity for new users with powerful features for advanced users - and what B2B products can learn from it.',
    type: 'Product teardown',
    date: '2024-02-28'
  },
  {
    slug: 'saying-no-stakeholders',
    title: 'The Art of Saying No to Stakeholders (Without Saying No)',
    description: 'Practical frameworks for managing stakeholder requests, prioritizing ruthlessly, and maintaining trust while protecting your roadmap.',
    type: 'Opinion',
    date: '2024-02-10'
  },
  {
    slug: 'metrics-that-matter',
    title: 'Choosing Metrics That Actually Matter',
    description: 'How to move beyond vanity metrics and identify leading indicators that drive real business outcomes for B2B products.',
    type: 'Notes',
    date: '2024-01-22'
  },
  {
    slug: 'figma-collaboration',
    title: 'Product Teardown: Figma\'s Real-Time Collaboration',
    description: 'Breaking down how Figma turned multiplayer collaboration from a feature into their core product moat - and changed design forever.',
    type: 'Product teardown',
    date: '2024-01-08'
  }
];
