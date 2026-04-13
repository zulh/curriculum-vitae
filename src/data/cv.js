export const cv = {
  personal: {
    name: 'Ahmad Zulhilmi Ghazali',
    title: 'Senior Software Engineer | Cloud Architect | FullStack Developer',
    phone: '+6013-830 5184',
    email: 'a.zulhilmi92@gmail.com',
    location: 'Kuala Lumpur, Malaysia',
    linkedin: 'linkedin.com/in/zulhilmi-ghazali', // Added for professionalism
  },

  profile:
    'Strategic-thinking Senior Software Engineer with 7+ years of experience in architecting and maintaining high-scale enterprise applications. Expert in cloud-native solutions (Azure, GCP, AWS) and full-stack development. Proven success in leading cross-functional teams to deliver mission-critical systems in the aviation and energy sectors, with a relentless focus on performance, scalability, and operational excellence.',

  experience: [
    {
      company: 'AirAsia',
      role: 'Senior Software Engineer (Full Stack)',
      period: 'Sept 2022 – Present',
      client: 'Airlines Operations & Procurement',
      logo: 'logos/airasia.png',
      projects: [
        {
          title: 'AirAsia Aviation Fuel Sourcing (AFS)',
          description:
            'A high-performance pricing engine that forecasts fuel costs by processing real-time market data (FX, MOPS) and complex supplier contracts, enabling multi-million dollar procurement optimizations.',
          bullets: [
            'Technical Lead for a cross-functional team of 7 (5 developers, 2 QAs), orchestrating end-to-end delivery of the AFS platform.',
            'Architected the integration of high-frequency financial data feeds (FX and MOPS) into the GCP-based calculation engine.',
            'Bridged technical requirements with business stakeholders to ensure a 100% alignment on procurement cost-saving objectives.',
            'Implemented robust monitoring and alerting for pricing anomalies, ensuring data integrity for financial decision-making.',
          ],
          tech: 'GCP (Cloud Run, Firestore, KMS), Node.js, React.js, GitLab CI/CD',
        },
        {
          title: 'AirAsia Centralised Engine (ACE)',
          description:
            'Critical middleware managing global booking and fare services for Online Travel Agents (OTA), serving as the high-availability gateway to core databases.',
          bullets: [
            'Directed system upgrades and performance tuning for ACE, maintaining 99.9% uptime for high-volume booking traffic.',
            'Spearheaded the legacy modernization of middleware components to .NET Core, significantly reducing latency.',
            'Managed complex system patches and bug fixes in a zero-downtime environment.',
            'Served as the primary technical interface for OTA partners to resolve critical integration issues.',
          ],
          tech: 'GCP (App Engine, BigQuery), .NET Core, SOAP/REST APIs',
        },
      ],
    },
    {
      company: 'Avanade Malaysia',
      role: 'Senior Analyst (Full Stack)',
      period: 'Sept 2021 – Aug 2022',
      client: 'Tenaga Nasional Berhad (TNB)',
      logo: 'logos/avanade.png',
      projects: [
        {
          title: 'myTNBiz Enterprise Portal',
          description:
            'Flagship B2B billing and account management portal for Malaysia\'s primary utility provider, handling high-volume payments and account visibility.',
          bullets: [
            'Engineered secure FPX payment integrations, coordinating directly with banking partners and the TNB internal finance teams.',
            'Architected automated CI/CD pipelines on AWS to streamline deployment cycles from weeks to days.',
            'Led the development of EFT and Cheque batch processing systems using AWS Lambda and Batch.',
            'Produced comprehensive technical documentation to ensure long-term specialized support for TNB operations.',
          ],
          tech: 'AWS (ECS, Lambda, Batch), .NET Core, MSSQL, SQS/SNS',
        },
      ],
    },
    {
      company: 'Expro Group Malaysia',
      role: 'Lead Developer (Full Stack)', // Slightly refined title for senior impact
      period: 'Apr 2018 – Aug 2021',
      client: 'Apache Corp., Tullow Oil, TAQA, ConocoPhillips',
      logo: 'logos/expro.svg',
      projects: [
        {
          title: 'SafeWells Web Integrity Suite',
          description:
            'A global well-integrity management platform providing real-time visibility into well pressure, compliance, and maintenance schedules for major oil producers.',
          bullets: [
            'Modernized legacy .NET Web Forms architectures, resulting in a 40% improvement in data query performance.',
            'Designed and implemented complex SQL stored procedures to handle massive datasets from offshore well tests.',
            'Collaborated with global UX teams to redesign the dashboard interface, improving field engineer reporting efficiency.',
          ],
          tech: 'Azure DevOps, .NET, MSSQL, SSMS, IIS',
        },
        {
          title: 'SafeWells Offline Deployment Manager',
          description:
            'A field-ready offline synchronization system built on ASP.NET Blazor to enable data recording in connectivity-challenged offshore environments.',
          bullets: [
            'Engineered a robust offline-to-online synchronization protocol ensuring 0% data loss during high-latency syncs.',
            'Rapidly prototyped and deployed the Blazor-based UI for cross-platform tablet usage.',
            'Optimized local database storage schemas for field tablets to ensure responsive performance.',
          ],
          tech: 'ASP.NET Blazor, Azure DevOps, LocalDB',
        },
      ],
    },
    {
      company: 'PETRONAS ICT',
      role: 'Software Engineering Resident (Intern)',
      period: 'May 2016 – Dec 2016',
      client: 'Group Treasury Department',
      logo: 'logos/petronas.svg',
      projects: [
        {
          title: 'IFSSC Payment Advice Automation',
          description: 'A transformative automation tool developed for PETRONAS Group Treasury to streamline financial advisory workflows.',
          bullets: [
            'Designed a custom sorting algorithm that reduced manual payment advice processing from 4 hours to 5 minutes (98% efficiency gain).',
            'Developed a secure search and retrieval portal for Operating Units (OPU) to access financial records.',
            'Implemented a granular Access Control List (ACL) system to protect sensitive treasury data.',
          ],
          tech: 'PHP, MySQL, XAMPP',
        },
      ],
    },
  ],

  skills: {
    categories: [
      {
        title: 'Backend & Architecture',
        skills: [
          { name: 'C# / .NET Core / Web API', level: 92 },
          { name: 'MS SQL / Stored Procedures', level: 88 },
          { name: 'Node.js / Express', level: 84 },
          { name: 'REST & SOAP API Design', level: 86 },
        ],
      },
      {
        title: 'Cloud & Infrastructure',
        skills: [
          { name: 'Microsoft Azure (Certified)', level: 82 },
          { name: 'Google Cloud (GCP)', level: 78 },
          { name: 'Amazon Web Services (AWS)', level: 74 },
          { name: 'Docker / Cloud Run / ECS', level: 70 },
        ],
      },
      {
        title: 'Frontend & UI Core',
        skills: [
          { name: 'React.js / Next.js', level: 84 },
          { name: 'JavaScript (ES6+) / TypeScript', level: 85 },
          { name: 'Tailwind CSS / CSS3 / HTML5', level: 82 },
          { name: 'ASP.NET Blazor', level: 75 },
        ],
      },
      {
        title: 'DevOps & Professional Tools',
        skills: [
          { name: 'Azure DevOps / GitLab CI/CD', level: 76 },
          { name: 'Git / GitHub / bitbucket', level: 90 },
          { name: 'Postman / SoapUI / Swagger', level: 88 },
          { name: 'Agile / SCRUM / Jira', level: 85 },
        ],
      },
    ],
  },

  certifications: [
    { name: 'Azure Developer Associate (AZ-204)', issuer: 'Microsoft', year: 2021, credentialId: 'H866-2444' },
    { name: 'Azure Fundamentals (AZ-900)', issuer: 'Microsoft', year: 2021, credentialId: 'H730-8011' },
    { name: 'Power Platform Fundamentals', issuer: 'Microsoft', year: 2020, credentialId: 'H585-0125' },
    { name: 'MCSA: Web Applications', issuer: 'Microsoft', year: 2019, credentialId: 'H211-3445' },
    { name: 'Certified Professional Requirements Engineering (CPRE-FL)', issuer: 'MSTB', year: 2017, credentialId: 'MY-CPRE-FL-2017-00066' },
    { name: 'MCSA: Programming in C#', issuer: 'Microsoft', year: 2019, credentialId: null },
    { name: 'MTA: Database Fundamentals', issuer: 'Microsoft', year: 2018, credentialId: 'G950-6157' },
  ],

  education: [
    {
      institution: 'Universiti Teknologi PETRONAS (UTP)',
      degree: 'Bachelor of Technology (Hons) — IT',
      year: '2014 – 2017',
      result: 'First Class / CGPA: 3.51',
    },
    {
      institution: 'Malaysian University English Test (MUET)',
      degree: 'English Proficiency Certification',
      year: '2010',
      result: 'Band 4',
    },
  ],

  projects: [
    {
      subject: 'Human Computer Interaction',
      title: 'Intelligent Vehicular System (IVS)',
      description: 'Award-winning interface design for Next-Gen Vehicle Infotainment Systems, focusing on driver ergonomics.',
      award: 'Winner: Best Project Award by University',
    },
    {
      subject: 'Technopreneurship',
      title: 'i-Society NFC-based Ordering',
      description: 'Contactless food ordering system utilizing NFC technology to optimize restaurant workflow.',
      award: null,
    },
  ],

  activities: [
    {
      year: 'Leadership & Mentorship',
      items: [
        'Technical Interviewer & Facilitator for engineering talent acquisition',
        'Senior Mentor for junior developers and engineering residents',
      ],
    },
    {
      year: 'Certification & Community',
      items: [
        'Appointed Corporate Fire Warden (Safety Leadership)',
        'Active participant in environmental CSR (Mangrove Restoration)',
      ],
    },
  ],

  referees: [
    {
      name: 'Mahesh Lakshmanan',
      role: 'Head of Software Engineering',
      company: 'AirAsia',
      phone: '+6014 9934 665',
      email: 'maheshlakshmanan@airasia.com',
    },
    {
      name: 'Terence Jeffrey Dancel',
      role: 'Software Engineering Manager',
      company: 'AirAsia',
      phone: '+6017 644 6731',
      email: 'terencedancel@airasia.com',
    },
  ],
}
