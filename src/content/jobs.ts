export type Job = {
  slug: string;
  title: string;
  location: string;
  type: "Contract" | "Contract-to-Hire" | "Full-time";
  workMode: "Remote" | "Hybrid" | "Onsite";
  experience: string;
  posted: string; // ISO
  summary: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
};

export const jobs: Job[] = [
  {
    slug: "senior-java-full-stack-developer",
    title: "Senior Java Full Stack Developer",
    location: "Dallas, TX",
    type: "Contract",
    workMode: "Hybrid",
    experience: "8+ years",
    posted: "2026-10-16",
    summary: "Build and modernize customer-facing banking applications using Java, Spring Boot and React for a leading financial services client.",
    responsibilities: [
      "Design and develop RESTful microservices with Spring Boot",
      "Build responsive front-end features in React and TypeScript",
      "Collaborate with product owners in an Agile delivery team",
      "Write unit and integration tests and participate in code reviews",
    ],
    requirements: [
      "8+ years of professional Java development",
      "Hands-on experience with Spring Boot, Kafka and SQL databases",
      "3+ years with React or Angular",
      "Experience deploying to AWS or Azure",
    ],
    skills: ["Java", "Spring Boot", "React", "Kafka", "AWS"],
  },
  {
    slug: "cloud-devops-engineer",
    title: "Cloud DevOps Engineer",
    location: "Remote, USA",
    type: "Contract-to-Hire",
    workMode: "Remote",
    experience: "5+ years",
    posted: "2026-10-12",
    summary: "Own CI/CD pipelines and infrastructure-as-code for a fast-growing healthcare technology platform.",
    responsibilities: [
      "Automate infrastructure with Terraform across AWS accounts",
      "Maintain Kubernetes clusters and Helm-based deployments",
      "Improve observability with metrics, logging and alerting",
      "Partner with security on HIPAA-compliant controls",
    ],
    requirements: [
      "5+ years in DevOps or SRE roles",
      "Strong Terraform, Kubernetes and GitHub Actions experience",
      "AWS certification preferred",
      "Scripting in Python or Bash",
    ],
    skills: ["AWS", "Terraform", "Kubernetes", "CI/CD", "Python"],
  },
  {
    slug: "data-engineer",
    title: "Data Engineer",
    location: "Plano, TX",
    type: "Full-time",
    workMode: "Hybrid",
    experience: "4+ years",
    posted: "2026-10-05",
    summary: "Design scalable data pipelines and lakehouse models that power analytics for a national retail client.",
    responsibilities: [
      "Build batch and streaming pipelines with Spark and Airflow",
      "Model data in Snowflake or Databricks",
      "Ensure data quality, lineage and governance",
      "Support analysts and data scientists with reliable datasets",
    ],
    requirements: [
      "4+ years of data engineering experience",
      "Advanced SQL and Python",
      "Experience with Snowflake, Databricks or BigQuery",
      "Familiarity with dbt is a plus",
    ],
    skills: ["Python", "Spark", "Snowflake", "Airflow", "SQL"],
  },
  {
    slug: "salesforce-developer",
    title: "Salesforce Developer",
    location: "Irving, TX",
    type: "Contract",
    workMode: "Onsite",
    experience: "5+ years",
    posted: "2026-09-29",
    summary: "Customize and extend Sales and Service Cloud for an enterprise telecom client.",
    responsibilities: [
      "Develop Apex classes, triggers and Lightning Web Components",
      "Build integrations with REST and SOAP APIs",
      "Translate business requirements into scalable solutions",
    ],
    requirements: [
      "5+ years of Salesforce development",
      "Platform Developer I certification required, II preferred",
      "Experience with Salesforce DX and CI tooling",
    ],
    skills: ["Apex", "LWC", "Sales Cloud", "Service Cloud"],
  },
  {
    slug: "qa-automation-engineer",
    title: "QA Automation Engineer",
    location: "Sachse, TX",
    type: "Contract-to-Hire",
    workMode: "Hybrid",
    experience: "3+ years",
    posted: "2026-09-22",
    summary: "Drive test automation strategy for web and API products in an Agile environment.",
    responsibilities: [
      "Build and maintain automated test suites with Selenium or Playwright",
      "Automate API testing and integrate tests into CI pipelines",
      "Report defects and collaborate closely with developers",
    ],
    requirements: [
      "3+ years in QA automation",
      "Proficiency in Java, JavaScript or Python",
      "Experience with Postman/REST Assured",
    ],
    skills: ["Selenium", "Playwright", "API Testing", "Jenkins"],
  },
];

export const getJob = (slug: string) => jobs.find((j) => j.slug === slug);
