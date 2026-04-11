export const cv = {
  personal: {
    name: 'Ahmad Zulhilmi Ghazali',
    title: 'Senior Software Engineer | Full Stack | Azure & GCP',
    phone: '+6013-830 5184',
    email: 'a.zulhilmi92@gmail.com',
    location: 'Taman Gombak Jaya, 53100 Kuala Lumpur',
  },

  profile:
    'Senior Software Engineer with 7+ years of full-stack experience delivering enterprise-grade web applications across aviation, energy, and utilities sectors. Currently at AirAsia leading development of mission-critical systems serving airlines operations and procurement. Proven track record of leading cross-functional teams, architecting scalable cloud solutions on GCP and AWS, and delivering complex features on schedule. Holds multiple Microsoft certifications including Azure Developer Associate.',

  experience: [
    {
      company: 'AirAsia',
      role: 'Senior Software Engineer (Full Stack)',
      period: 'September 2022 – Present',
      client: 'Airlines Operations & Procurement Department',
      logo: '/logos/airasia.png',
      projects: [
        {
          title: 'Development & Maintenance of AirAsia Aviation Fuel Sourcing (AFS)',
          description:
            'AFS is a dynamic pricing engine that forecasts fuel uplift costs of a flight, incorporating real-time FX rates, MOPS prices, and contractual pricing from fuel suppliers — enabling the procurement team to make informed cost-optimisation decisions.',
          bullets: [
            'Led a team of 5 developers and 2 QA testers in the development and implementation of AFS.',
            'Oversaw the analysis and integration of foreign exchange (FX) rate data, MOPS prices, and contractual pricing into the pricing engine.',
            'Facilitated effective communication among team members, stakeholders, and management to ensure alignment and smooth delivery.',
            'Regularly reported project updates, milestones, and risks to senior management.',
          ],
          tech: 'GCP, GCP Cloud Run, GCP Firestore, GCP KMS, GCP IAM, GCP Cloud Scheduler, GitLab, React.js, Node.js, Postman',
        },
        {
          title: 'Enhancement & Maintenance of ACE (AirAsia Centralised Engine)',
          description:
            'ACE is a middleware managing booking and fare services used by Online Travel Agents (OTA). It controls and validates user data sent to the AirAsia database.',
          bullets: [
            'Collaborated with developers and system admins to enhance and maintain ACE, ensuring reliability, efficiency, and scalability.',
            'Led planning and execution of system upgrades, patches, and bug fixes with minimal operational disruption.',
            'Monitored system performance and proactively addressed anomalies to maintain high availability.',
            'Acted as key point of contact for system-related issues, communicating with stakeholders and resolving issues promptly.',
          ],
          tech: 'GCP, GCP App Engine, GCP Firestore, GCP KMS, GCP BigQuery, GCP IAM, GCP Cloud Scheduler, GitLab, .NET Core, SoapUI, Postman',
        },
      ],
    },
    {
      company: 'Avanade Malaysia',
      role: 'Senior Analyst (Full Stack)',
      period: 'September 2021 – August 2022',
      client: 'Tenaga Nasional Berhad (TNB)',
      logo: '/logos/avanade.png',
      projects: [
        {
          title: 'Development & Maintenance of myTNBiz Portal',
          description:
            'myTNBiz is a web portal for business organisations to manage, view, and pay electricity bills across all their accounts — supporting FPX, EFT, and Cheque payment methods.',
          bullets: [
            'Involved in code writing, unit testing, system documentation, and debugging.',
            'Liaised with design, functional, testing, and BCRM teams to agree on project objectives and specifications.',
            'Created and managed CI/CD code pipelines in AWS Console.',
            'Implemented and debugged the FPX payment method, liaising with TNB FPX Team and payment gateway banks.',
            'Worked on additional payment mechanisms including EFT and Cheque.',
          ],
          tech: 'AWS, AWS ECS, AWS CodeCommit, AWS Lambda, AWS Pipelines, AWS CloudWatch, AWS Batch, .NET Core, SNS, SQS, Git, MSSQL, Swagger, Postman',
        },
      ],
    },
    {
      company: 'Expro Group Malaysia',
      role: 'Developer (Full Stack)',
      period: 'April 2018 – August 2021',
      client: 'Apache Corp., Tullow Oil, TAQA, ConocoPhillips',
      logo: '/logos/expro.png',
      projects: [
        {
          title: 'Development & Maintenance of SafeWells Systems',
          description:
            'SafeWells provides clients visibility into their wells\' integrity status — logging well tests, compliance, maintenance, and pressure data — and notifies clients when wells are due for maintenance.',
          bullets: [
            'Involved in code rewriting, unit testing, system documentation, and debugging to improve system performance.',
            'Involved in the redesigning (UI & UX) and development of the system.',
            'In charge of back-end querying and stored procedure creation for system development.',
          ],
          tech: 'Azure DevOps, Visual Studio, SSMS, IIS, .NET Web Forms',
        },
        {
          title: 'Development & Maintenance of SafeWells Offline Forms System',
          description:
            'Offline Forms Manager extends SafeWells with offline capability for field engineers — recording data offline and syncing to SafeWells when internet connectivity is restored.',
          bullets: [
            'Involved in code writing, unit testing, system documentation, and debugging.',
            'Involved in the designing and development of the system.',
            'Handled tickets for enhancements or bug fixes for the Offline Forms system running on ASP.NET Blazor, delivering on schedule.',
          ],
          tech: 'Azure DevOps, Visual Studio, SSMS, IIS, .NET Blazor',
        },
      ],
    },
    {
      company: 'PETRONAS ICT Sdn. Bhd.',
      role: 'Intern — Business Function Finance-Treasury',
      period: 'May 2016 – December 2016',
      client: null,
      logo: '/logos/petronas.png',
      projects: [
        {
          title: 'Development & Maintenance of the PETRONAS IFSSC Payment Advice Portal',
          description: null,
          bullets: [
            'Sorting of payment advice according to Operating Unit (OPU) Code.',
            'Allows OPUs to access (view & download) payment advice through a search function.',
            'Allows Group Treasury Department of PETRONAS to moderate viewing access by access level.',
            'Automated manual sorting and distribution of payment advice — reducing effort from 4 hours to 5 minutes.',
          ],
          tech: 'XAMPP, PHP, MySQL',
        },
      ],
    },
  ],

  skills: [
    { name: 'C# / ASP.NET (Core, MVC, Blazor, WebForms)', level: 92 },
    { name: 'MS SQL / Stored Procedures', level: 88 },
    { name: 'JavaScript / React.js / Node.js', level: 84 },
    { name: 'REST API Design', level: 86 },
    { name: 'HTML5 / CSS / jQuery', level: 82 },
    { name: 'Microsoft Azure', level: 82 },
    { name: 'Google Cloud Platform (GCP)', level: 78 },
    { name: 'Amazon Web Services (AWS)', level: 74 },
    { name: 'Azure DevOps / GitLab (CI/CD)', level: 76 },
    { name: 'Xamarin / XAML', level: 65 },
    { name: 'PHP / MySQL', level: 68 },
  ],

  certifications: [
    { name: 'Azure Developer Associate', issuer: 'Microsoft', year: 2021, credentialId: 'H866-2444' },
    { name: 'Azure Fundamentals', issuer: 'Microsoft', year: 2021, credentialId: 'H730-8011' },
    { name: 'Power Platform Fundamentals', issuer: 'Microsoft', year: 2020, credentialId: 'H585-0125' },
    { name: 'MCSA: Web Applications', issuer: 'Microsoft', year: 2019, credentialId: 'H211-3445' },
    { name: 'MCSA: Developing ASP.NET MVC Web Applications', issuer: 'Microsoft', year: 2019, credentialId: null },
    { name: 'MCSA: Programming in C#', issuer: 'Microsoft', year: 2019, credentialId: null },
    { name: 'MTA: Database Fundamentals', issuer: 'Microsoft', year: 2018, credentialId: 'G950-6157' },
    { name: 'MTA: Software Development Fundamentals', issuer: 'Microsoft', year: 2018, credentialId: 'G947-6205' },
    {
      name: 'Certified Professional Requirements Engineering — Foundation Level (CPRE-FL)',
      issuer: 'Malaysian Software Testing Board (MSTB)',
      year: 2017,
      credentialId: 'MY-CPRE-FL-2017-00066',
    },
  ],

  education: [
    {
      institution: 'Universiti Teknologi PETRONAS (UTP)',
      degree: 'Bachelor of Technology (Hons) — Information and Communication Technology',
      year: '2014 – 2017',
      result: 'CGPA: 3.51',
    },
    {
      institution: 'Malaysian University English Test (MUET)',
      degree: null,
      year: '2010',
      result: 'Band 4',
    },
  ],

  projects: [
    {
      subject: 'Human Computer Interaction',
      title: 'Intelligent Vehicular System (IVS)',
      description: 'Focused on the interface design for a Vehicle Infotainment System.',
      award: 'Best Project Award by University',
    },
    {
      subject: 'Technopreneurship Team Project',
      title: 'i-Society NFC-based Fast Food Ordering System',
      description:
        'NFC-Tag enabled food ordering — customers tap their smartphone onto the NFC-Tag to place orders. Combination of NFC + Web-based system.',
      award: null,
    },
    {
      subject: 'Web Application Development',
      title: 'UTP Traders',
      description: 'Marketplace platform for UTP students to create product listings for buying and selling.',
      award: null,
    },
    {
      subject: 'Software Engineering',
      title: 'UTP Vehicle Management System',
      description: "Web-based system for the UTP Security Department to manage student vehicle registrations.",
      award: null,
    },
  ],

  activities: [
    {
      year: 2020,
      items: [
        'Involved in facilitating interview sessions for new joiners',
        'Involved in training and mentoring of new joiners',
      ],
    },
    {
      year: 2019,
      items: [
        'Involved in Expro Corporate Social Responsibility Day — Mangrove Restoration',
        'Appointed as the Expro Fire Warden',
      ],
    },
    {
      year: 2017,
      items: [
        'Software Test Design Competition 2017 (TDC 2017) Committee',
        'Community Engagement Project — From UTP With Love',
      ],
    },
    {
      year: 2015,
      items: [
        'Committee in UTP National Hacking Competition (UTPHAX15)',
        'Participated in IHL-MSC Startup Challenge (i-MSC) Innovation Competition',
        'Participated in Bank Rakyat YIM Ideation Challenge',
        'Participated in Corporate Social Responsibility (CSR) in Kampung Bota Kiri',
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
