export const cv = {
  personal: {
    name: 'Ahmad Zulhilmi Ghazali',
    title: 'Full-Stack Software Engineer',
    subtitle: 'Building Production Systems, Integrations & User-Facing Workflows',
    phone: '+6013-830 5184',
    email: 'a.zulhilmi92@gmail.com',
    location: 'Kuala Lumpur, Malaysia',
    linkedin: 'linkedin.com/in/zulhilmi-ghazali',
  },

  profile:
    'Full-Stack Software Engineer with over 7 years of experience in delivering scalable production systems across the aviation, energy, and insurtech sectors. Experienced in building and maintaining production systems involving integrations, workflows, and automation across real-world business use cases. Proven track record in developing secure payment pipelines, high-availability middleware, and complex data-driven calculation engines.',

  experience: [
    {
      company: 'Senang',
      role: 'Motor Team Lead',
      period: '2024 – Present',
      client: 'Insurtech Platform',
      logo: 'logos/senang.png',
      projects: [
        {
          title: 'Digital Insurance Ecosystem & TNG Mini Program',
          description:
            'Leading the engineering efforts for automated insurance quotation, purchase, and issuance flows across major digital platforms.',
          bullets: [
            'Developed and maintained insurance quotation, purchase, and policy issuance flows within the TNG Mini Program (TNG MP) platform.',
            'Integrated third-party insurer/provider APIs to support real-time pricing, validation, and policy issuance.',
            'Implemented payment flows supporting FPX and card transactions, including callback handling and status reconciliation.',
            'Built background jobs for reporting, retries, and asynchronous processing of policy-related workflows.',
            'Improved reliability of issuance and payment flows through enhanced error handling and retry mechanisms.',
            'Worked across frontend, backend, and database layers to deliver end-to-end features for production systems.',
          ],
          tech: 'Node.js, Firebase, React.js, TNG MP Integration',
        },
      ],
    },
    {
      company: 'AirAsia',
      role: 'Senior Software Engineer',
      period: 'Sept 2022 – Dec 2023',
      client: 'Airlines Operations & Procurement',
      logo: 'logos/airasia.png',
      projects: [
        {
          title: 'Aviation Fuel Sourcing (AFS) & Centralised Engine (ACE)',
          description:
            'Critical fleet operations and global booking systems handling procurement and high-volume transaction traffic.',
          bullets: [
            'Lead the development of the AirAsia Aviation Fuel Sourcing (AFS) platform, optimizing multi-million dollar procurement costs.',
            'Integrated high-frequency financial data feeds (FX and MOPS) into a GCP-based calculation engine for real-time fuel forecasting.',
            'Maintained 99.9% uptime for the ACE middleware managing global booking and fare services for Online Travel Agents (OTA).',
            'Modernized legacy middleware components to .NET Core, reducing processing latency for global OTA requests.',
          ],
          tech: 'GCP (Cloud Run / BigQuery), .NET Core, Node.js, React.js',
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
            'Enterprise B2B billing and account management portal for Malaysia\'s primary utility provider.',
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
      role: 'Full-Stack Developer',
      period: 'Apr 2018 – Aug 2021',
      client: 'Energy Sector (Apache, TAQA, ConocoPhillips)',
      logo: 'logos/expro.svg',
      projects: [
        {
          title: 'SafeWells Web & Offline Suite',
          description:
            'A global well-integrity management platform for real-time visibility and offshore data synchronization.',
          bullets: [
            'Modernized legacy .NET architectures for the SafeWells suite, improving data query performance by 40% for global producers.',
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
            'Developed a custom sorting algorithm that reduced manual payment advice processing from 4 hours to 5 minutes.',
            'Built a secure search and retrieval portal for Group Treasury financial records.',
            'Implemented Access Control Lists (ACL) to protect sensitive financial data.',
          ],
          tech: 'PHP, MySQL',
        },
      ],
    },
  ],

  skills: {
    categories: [
      {
        title: 'Languages',
        skills: [
          { name: 'JavaScript (ES6+) / TypeScript', level: 90 },
          { name: 'C# / .NET', level: 92 },
          { name: 'SQL / T-SQL', level: 88 },
          { name: 'Node.js', level: 85 },
        ],
      },
      {
        title: 'Frontend',
        skills: [
          { name: 'React.js / Next.js', level: 86 },
          { name: 'Tailwind CSS / HTML5 / CSS3', level: 88 },
          { name: 'ASP.NET Blazor', level: 75 },
        ],
      },
      {
        title: 'Backend',
        skills: [
          { name: '.NET Core / Web API', level: 94 },
          { name: 'REST & SOAP API Design', level: 88 },
          { name: 'Authentication & Security', level: 82 },
        ],
      },
      {
        title: 'Databases',
        skills: [
          { name: 'MS SQL Server', level: 90 },
          { name: 'Firestore / NoSQL', level: 78 },
          { name: 'PostgreSQL', level: 75 },
        ],
      },
      {
        title: 'Tools & DevOps',
        skills: [
          { name: 'Azure / GCP / AWS', level: 82 },
          { name: 'Azure DevOps / GitLab CI', level: 78 },
          { name: 'Git / Docker / Postman', level: 90 },
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
