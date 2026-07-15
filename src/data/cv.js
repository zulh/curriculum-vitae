export const cv = {
  personal: {
    name: 'Ahmad Zulhilmi Ghazali',
    title: 'Full-Stack Software Engineer',
    subtitle: 'Building Production Systems, Integrations & User-Facing Workflows',
    phone: '+6013-830 5184',
    email: 'a.zulhilmi92@gmail.com',
    location: 'Kuala Lumpur, Malaysia',
    linkedin: 'https://linkedin.com/in/zulhilmi-ghazali',
  },

  profile:
    'Full-Stack Software Engineer with over 8 years of experience delivering scalable production systems across the insurtech, aviation, and energy sectors. Experienced in building and maintaining end-to-end insurance quotation platforms, payment integrations, and multi-insurer workflows. Proven track record in developing secure payment pipelines, high-availability middleware, and complex data-driven calculation engines.',

  // Short, capability-led positioning line (shown under the profile).
  coreFocus: [
    'Backend & full-stack engineering',
    'Microservices on Kubernetes',
    'Payment & third-party integrations',
    'CI/CD & release ownership',
    'Production reliability',
    'Team leadership',
  ],

  experience: [
    {
      company: 'Senang',
      role: 'Lead / Senior Software Engineer',
      period: '2024 – Present',
      client: 'Insurtech Platform',
      logo: null,
      projects: [
        {
          title: 'Digital Insurance Ecosystem & TNG Mini Program',
          description:
            'Vehicle insurance quotation, purchase, and policy issuance platform integrating major insurers and digital wallets.',
          bullets: [
            'Led reliability improvements across insurance integration workflows and mentored a team of **3 junior developers** on production safety and code quality.',
            'Built and maintained a vehicle insurance quotation portal (Angular 19 SSR) and its Node.js / TypeScript backend (GraphQL/Apollo, TypeORM), powering real-time quotation and issuance across **8+ insurers** (**200+ policies/day**) including Allianz, Zurich, Chubb, Etiqa, Tokio Marine, and Takaful Ikhlas.',
            'Delivered insurer-specific integration flows (VIX/NCD verification, variant resolution, agreed-value pricing, cover note issuance), each with distinct API contracts and business rules.',
            "Launched quotation, purchase, and issuance on the **TNG Mini Program**, and built FPX, QR, and card payment flows via PayNet with callback verification, reconciliation, and retry/recovery.",
            'Eliminated duplicate policy issuance under concurrent payment callbacks by making the issuance step **atomic and idempotent**, removing manual cancellations and support tickets.',
            'Owned **CI/CD** and releases across dev, staging, and production using GitLab CI, Docker, Kubernetes, and Helm.',
          ],
          tech: 'Angular 19, Node.js, TypeScript, GraphQL / Apollo, TypeORM, MySQL, Docker, Kubernetes, GitLab CI',
        },
      ],
    },
    {
      company: 'AirAsia',
      role: 'Senior Software Engineer',
      period: 'Sept 2022 – May 2024',
      client: 'Airlines Operations & Procurement',
      logo: 'logos/airasia.png',
      projects: [
        {
          title: 'Aviation Fuel Sourcing (AFS) & Centralised Engine (ACE)',
          description:
            'Critical fleet operations and global booking systems handling procurement and high-volume transaction traffic.',
          bullets: [
            'Led development of the AirAsia Aviation Fuel Sourcing (AFS) platform, optimizing **multi-million-dollar** procurement costs.',
            'Integrated high-frequency financial data feeds (FX and MOPS) into a GCP-based calculation engine for real-time fuel forecasting.',
            'Maintained **99.9% uptime** for the ACE middleware managing global booking and fare services for Online Travel Agents (OTA).',
            'Modernized legacy middleware components to .NET Core, reducing processing latency for global OTA requests.',
          ],
          tech: 'GCP (Cloud Run / BigQuery), .NET Core, Node.js, React.js',
        },
      ],
    },
    {
      company: 'Avanade Malaysia',
      role: 'Senior Analyst (Back-End)',
      period: 'Sept 2021 – Aug 2022',
      client: 'Tenaga Nasional Berhad (TNB)',
      logo: 'logos/avanade.png',
      projects: [
        {
          title: 'myTNBiz Enterprise Portal',
          description:
            "Enterprise B2B billing and account management portal for Malaysia's primary utility provider.",
          bullets: [
            'Implemented secure FPX payment integrations for the myTNBiz B2B portal, handling high-volume utility billing.',
            'Established automated CI/CD pipelines on AWS to accelerate deployment cycles for enterprise energy systems.',
            'Developed EFT and Cheque batch processing systems using AWS Lambda and Batch for financial operations.',
            'Authored technical documentation to support specialized long-term maintenance of billing infrastructures.',
          ],
          tech: 'AWS (ECS / Lambda / Batch), .NET Core, MSSQL',
        },
      ],
    },
    {
      company: 'Expro Group Malaysia',
      role: '.NET Developer / Graduate Developer',
      period: 'Apr 2018 – Aug 2021',
      client: 'Energy Sector (Apache, TAQA, ConocoPhillips)',
      logo: 'logos/expro.svg',
      projects: [
        {
          title: 'SafeWells Web & Offline Suite',
          description:
            'A global well-integrity management platform for real-time visibility and offshore data synchronization.',
          bullets: [
            'Modernized legacy .NET architectures for the SafeWells suite, improving data query performance by **40%** for global producers.',
            'Developed a field-ready offline synchronization system using ASP.NET Blazor to ensure data integrity in offshore environments.',
            'Built complex SQL stored procedures to process and validate massive offshore dataset submissions.',
            'Collaborated with global teams to refine reporting dashboards for field engineers.',
          ],
          tech: 'Azure DevOps, .NET Core, Blazor, MSSQL',
        },
      ],
    },
    {
      company: 'PETRONAS ICT',
      role: 'Software Engineering Intern',
      period: 'May 2016 – Dec 2016',
      client: 'Group Treasury Department',
      logo: 'logos/petronas.svg',
      projects: [
        {
          title: 'IFSSC Payment Advice Automation',
          description: 'Automation tool to streamline PETRONAS Group Treasury financial advisory workflows.',
          bullets: [
            'Developed a custom sorting algorithm that reduced manual payment advice processing from **4 hours to 5 minutes**.',
            'Built a secure search and retrieval portal for Group Treasury financial records.',
            'Implemented Access Control Lists (ACL) to protect sensitive financial data.',
          ],
          tech: 'PHP, MySQL',
        },
      ],
    },
  ],

  // Skills are grouped, tag-style. No self-assigned percentages (they read as
  // arbitrary and undercut credibility on a senior profile).
  skills: {
    categories: [
      {
        title: 'Languages',
        items: ['JavaScript (ES6+) / TypeScript', 'C# / .NET', 'SQL / T-SQL'],
      },
      {
        title: 'Frontend',
        items: ['Angular 19', 'NgRx', 'React.js', 'Tailwind CSS', 'HTML5 / CSS3', 'ASP.NET Blazor'],
      },
      {
        title: 'Backend',
        items: ['Node.js', 'GraphQL / Apollo', 'TypeORM', '.NET Core / Web API', 'REST & SOAP APIs'],
      },
      {
        title: 'Databases',
        items: ['MySQL', 'MS SQL Server', 'PostgreSQL', 'Firestore / NoSQL'],
      },
      {
        title: 'Cloud & DevOps',
        items: ['Azure', 'GCP', 'AWS', 'Docker', 'Kubernetes', 'Helm', 'GitLab CI', 'Azure DevOps', 'Nginx'],
      },
      {
        title: 'Tools',
        items: ['Git', 'Postman', 'ExcelJS', 'SoapUI'],
      },
    ],
  },

  certifications: [
    { name: 'ITIL 4 Foundation', issuer: 'AXELOS', year: 2023, credentialId: 'GR671588124AG' },
    { name: 'Azure Developer Associate (AZ-204)', issuer: 'Microsoft', year: 2021, credentialId: 'H866-2444' },
    { name: 'Azure Fundamentals (AZ-900)', issuer: 'Microsoft', year: 2021, credentialId: 'H730-8011' },
    { name: 'Power Platform Fundamentals', issuer: 'Microsoft', year: 2020, credentialId: 'H585-0125' },
    { name: 'MCSA: Web Applications', issuer: 'Microsoft', year: 2019, credentialId: 'H211-3445' },
    { name: 'MTA: Database Fundamentals', issuer: 'Microsoft', year: 2018, credentialId: 'G950-6157' },
    { name: 'MTA: Software Development Fundamentals', issuer: 'Microsoft', year: 2018, credentialId: 'G947-6205' },
    { name: 'Certified Professional Requirements Engineering (CPRE-FL)', issuer: 'MSTB', year: 2017, credentialId: 'MY-CPRE-FL-2017-00066' },
  ],

  education: [
    {
      institution: 'Universiti Teknologi PETRONAS (UTP)',
      degree: 'Bachelor of Technology (Hons) — Information Technology',
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
      description: 'Award-winning interface design for next-gen vehicle infotainment systems, focusing on driver ergonomics.',
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
        'Technical interviewer and facilitator for engineering talent acquisition',
        'Senior mentor for junior developers and engineering residents',
      ],
    },
    {
      year: 'Certification & Community',
      items: [
        'Appointed Corporate Fire Warden (safety leadership)',
        'Active participant in environmental CSR (mangrove restoration)',
      ],
    },
  ],

  // Contact details intentionally omitted from the public site for the referees'
  // privacy. Full references are provided directly to employers on request.
  referees: [
    {
      name: 'Mahesh Lakshmanan',
      role: 'Head of Software Engineering',
      company: 'AirAsia',
    },
    {
      name: 'Terence Jeffrey Dancel',
      role: 'Software Engineering Manager',
      company: 'AirAsia',
    },
  ],
}
