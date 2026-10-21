export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Hiring Insights" | "Career Advice" | "Industry Trends";
  date: string; // ISO
  readMins: number;
  author: string;
  body: { heading?: string; text: string }[];
};

export const posts: Post[] = [
  {
    slug: "contract-vs-contract-to-hire-vs-direct-hire",
    title: "Contract, Contract-to-Hire or Direct Hire: Choosing the Right Staffing Model",
    excerpt:
      "Each engagement model solves a different problem. Here is how to match the model to your timeline, budget and risk tolerance.",
    category: "Hiring Insights",
    date: "2026-10-08",
    readMins: 6,
    author: "Reddington Talent Team",
    body: [
      { text: "Not every open role is the same, so not every hire should follow the same path. The staffing model you choose affects how fast you can start, how much risk you carry, and how your team evolves over the next year." },
      { heading: "Contract staffing: speed and flexibility", text: "Contract consultants are ideal for defined projects, seasonal peaks or specialized skills you need for a limited period. You gain capacity quickly without long-term headcount commitments, and you can extend or end the engagement as priorities shift." },
      { heading: "Contract-to-hire: proof before commitment", text: "Contract-to-hire lets you see a professional’s real work, communication style and team fit before extending a permanent offer. It is the lowest-risk path for roles where culture and collaboration matter as much as technical skill." },
      { heading: "Direct hire: building long-term capability", text: "When a role is core to your product or strategy, direct hire is usually the right call. A specialized recruiting partner shortens the search by bringing a pre-vetted shortlist and handling the market mapping, outreach and screening." },
      { heading: "How to decide", text: "Start with three questions: How long will the need last? How critical is the role to long-term strategy? How quickly do you need someone productive? The answers usually point clearly to one model — and a good staffing partner will tell you honestly which one." },
    ],
  },
  {
    slug: "most-in-demand-tech-skills-2027",
    title: "The Most In-Demand Tech Skills Heading Into 2027",
    excerpt:
      "AI engineering, cloud security and data platforms top the list. What hiring managers are prioritizing — and what candidates should learn next.",
    category: "Industry Trends",
    date: "2026-09-24",
    readMins: 5,
    author: "Reddington Talent Team",
    body: [
      { text: "Technology hiring has shifted from broad generalists to professionals who combine deep platform knowledge with business context. Across our client engagements, a handful of skill areas consistently draw the most demand." },
      { heading: "AI and ML engineering", text: "Companies have moved past experimentation. They now need engineers who can take models into production — building retrieval pipelines, evaluation frameworks and guardrails that make AI dependable." },
      { heading: "Cloud security and identity", text: "As infrastructure spreads across multiple clouds, security engineers with identity, zero-trust and compliance automation experience are among the hardest roles to fill." },
      { heading: "Modern data platforms", text: "Data engineers fluent in lakehouse architectures, streaming and governance are essential for every analytics and AI initiative." },
      { heading: "What it means for you", text: "For employers, it means starting searches earlier and being clear about must-have versus trainable skills. For candidates, it means pairing certifications with real project outcomes you can talk about." },
    ],
  },
  {
    slug: "resume-tips-it-professionals",
    title: "7 Resume Tips That Get IT Professionals More Interviews",
    excerpt:
      "Recruiters scan hundreds of resumes a week. These practical changes help yours stand out — and survive applicant tracking systems.",
    category: "Career Advice",
    date: "2026-09-10",
    readMins: 4,
    author: "Reddington Recruiting",
    body: [
      { text: "A strong resume is not a list of everything you have done — it is evidence that you can solve the problems a hiring manager has right now." },
      { heading: "1. Lead with impact", text: "Replace task descriptions with outcomes. “Reduced deployment time by 60% by introducing CI/CD pipelines” says far more than “Responsible for deployments.”" },
      { heading: "2. Mirror the job description", text: "Use the same terminology the posting uses for tools and skills. Applicant tracking systems match keywords literally." },
      { heading: "3. Keep the stack visible", text: "Add a concise technical skills section near the top, grouped by category: languages, cloud, data, tools." },
      { heading: "4–7. The details that matter", text: "Keep it to two pages, use a clean single-column layout, include links to GitHub or portfolios, and tailor your summary for every application. Small adjustments compound into noticeably more callbacks." },
    ],
  },
  {
    slug: "reduce-time-to-hire",
    title: "How to Cut Your Time-to-Hire Without Lowering the Bar",
    excerpt:
      "Top technology candidates are off the market in about ten days. Five process changes that help you move faster and still hire well.",
    category: "Hiring Insights",
    date: "2026-08-27",
    readMins: 5,
    author: "Reddington Talent Team",
    body: [
      { text: "In a competitive market, a slow process is a silent rejection. The best candidates often have multiple offers within two weeks of starting their search." },
      { heading: "Define the role before you post", text: "Agree on must-have skills, compensation range and interview panel up front. Most delays come from misalignment discovered mid-process." },
      { heading: "Compress the interview loop", text: "Combine technical and team interviews into a single half-day where possible, and commit to feedback within 24 hours." },
      { heading: "Use a partner who pre-screens", text: "A specialized staffing partner delivers candidates who have already passed technical and background screening, so your team only spends time on high-signal conversations." },
      { heading: "Make the offer stage effortless", text: "Have approvals ready before final interviews. Speed at the offer stage is often the deciding factor between two good options." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
