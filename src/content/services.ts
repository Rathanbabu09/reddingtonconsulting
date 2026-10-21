export type IconName =
  | "users" | "handshake" | "target" | "crown" | "layers" | "globe" | "code" | "cloud"
  | "shield" | "chart" | "cpu" | "database" | "bank" | "heart" | "truck" | "cart"
  | "bolt" | "phone" | "mail" | "pin" | "clock" | "check" | "search" | "spark" | "briefcase";

export const services: { title: string; icon: IconName; body: string; points: string[] }[] = [
  {
    title: "Contract Staffing",
    icon: "users",
    body: "Flexible, project-ready consultants who plug into your team within days — not months.",
    points: ["Onboard in as little as 72 hours", "W2 & C2C engagements", "Scale up or down on demand"],
  },
  {
    title: "Contract-to-Hire",
    icon: "handshake",
    body: "Evaluate real-world performance and culture fit before making a permanent offer.",
    points: ["Try-before-you-hire model", "Lower mis-hire risk", "Seamless conversion"],
  },
  {
    title: "Direct Hire",
    icon: "target",
    body: "Full-time placements sourced, screened and closed by recruiters who know your stack.",
    points: ["Pre-vetted shortlists in 5 days", "Technical & behavioral screening", "Placement guarantee"],
  },
  {
    title: "Executive Search",
    icon: "crown",
    body: "Confidential searches for the technology leaders who will shape your next chapter.",
    points: ["CIO, CTO, VP & Director roles", "Discreet market mapping", "Leadership assessment"],
  },
  {
    title: "Project Solutions",
    icon: "layers",
    body: "Outcome-based delivery teams for implementations, migrations and modernization.",
    points: ["Dedicated delivery manager", "Fixed scope or T&M", "Onshore & nearshore mix"],
  },
  {
    title: "Recruitment Process Outsourcing",
    icon: "globe",
    body: "Our recruiters become an extension of your talent team for high-volume hiring.",
    points: ["Embedded recruiters", "Employer-brand aligned", "Hiring analytics & reporting"],
  },
];

export const expertise: { label: string; icon: IconName }[] = [
  { label: "Software Engineering", icon: "code" },
  { label: "Cloud & DevOps", icon: "cloud" },
  { label: "Cybersecurity", icon: "shield" },
  { label: "Data & Analytics", icon: "chart" },
  { label: "AI / Machine Learning", icon: "cpu" },
  { label: "ERP & CRM", icon: "database" },
  { label: "QA & Automation", icon: "check" },
  { label: "Project Management", icon: "briefcase" },
];

export const industries: { title: string; icon: IconName; body: string }[] = [
  { title: "Banking & Financial Services", icon: "bank", body: "Core banking, payments, risk and regulatory technology talent." },
  { title: "Healthcare & Life Sciences", icon: "heart", body: "EHR, HIPAA-compliant data, clinical systems and health-tech engineers." },
  { title: "Retail & E-commerce", icon: "cart", body: "Omnichannel platforms, supply-chain systems and customer analytics." },
  { title: "Telecom & Technology", icon: "phone", body: "Network, SaaS product and platform engineering teams." },
  { title: "Logistics & Transportation", icon: "truck", body: "Fleet, warehouse and routing systems specialists." },
  { title: "Energy & Utilities", icon: "bolt", body: "SCADA, grid modernization, SAP and field-service technology." },
];

export const process: { step: string; title: string; body: string }[] = [
  { step: "01", title: "Discover", body: "We learn your stack, team culture and what success looks like in the role." },
  { step: "02", title: "Source", body: "Our recruiters tap a curated network of active and passive technology talent." },
  { step: "03", title: "Screen", body: "Technical assessments, reference checks and background verification — done right." },
  { step: "04", title: "Deliver", body: "You interview a short, high-signal shortlist. We handle offers and onboarding." },
];
