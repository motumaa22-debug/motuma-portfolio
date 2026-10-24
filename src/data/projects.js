// src/data/projects.js
export const projects = [
  {
    title: 'KnowledgeHub',
    description: 'A digital knowledge library designed to organize and share educational and literary content, including books, proverbs, poems, and stories.',
    technologies: ['React', 'Vite', 'JavaScript', 'PHP', 'MySQL'],
    status: 'In progress',
    github: 'https://github.com/motumaa22-debug/knowledgehub',
    demo: null,
    highlights: [
      'Dual-stack architecture combining a fast React/Vite client with PHP backend services.',
      'Relational database schema designed in MySQL for categorizing books, author records, and folk stories.',
      'Responsive reading interface optimized for both desktop viewports and mobile devices.',
    ],
  },
  {
    title: 'Food Delivery System — Hara Delivery',
    description: 'A food delivery web application focused on browsing restaurants, managing a shopping cart, and supporting a checkout workflow.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    status: 'Completed',
    github: 'https://github.com/motumaa22-debug/food_delivery',
    demo: null,
    highlights: [
      'Interactive restaurant and menu item browsing with dynamic cart session management.',
      'Order placement workflow with calculated subtotals, delivery fees, and order status tracking.',
      'Relational tables for restaurants, customer accounts, order line items, and delivery addresses.',
    ],
  },
  {
    title: 'Cooperative Store Management System',
    description: 'Academic software project supporting cooperative store operations, including member management, product management, transactions, savings, and reporting.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    status: 'Completed',
    github: '#',
    demo: null,
    highlights: [
      'Member registration and ledger tracking for shares, periodic savings, and dividend allocations.',
      'Point-of-sale inventory module preventing stock overselling and logging transactions.',
      'Structured audit logs and periodic reporting summaries for cooperative administrators.',
    ],
  },
  {
    title: 'Student Management System',
    description: 'Academic software system engineered for organizing, updating, and querying academic student records and department assignments.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    status: 'Completed',
    github: '#',
    demo: null,
    highlights: [
      'CRUD data operations for student enrolment, course registrations, and personal profiles.',
      'Form validation preventing duplicate ID entries and ensuring data integrity.',
      'Administrative view supporting student queries by department, year of study, and status.',
    ],
  },
  {
    title: 'Network Infrastructure Support with IP Camera Connectivity',
    description: 'Computer Science internship technical project supporting industrial network infrastructure, IP camera connectivity, Ethernet cabling, and PoE deployment at Dangote Cement Ethiopia.',
    technologies: ['Computer Networking', 'IP Cameras', 'PoE', 'Cat6 Cabling', 'Network Troubleshooting'],
    status: 'Internship experience',
    github: '#',
    demo: null,
    highlights: [
      'Physical termination, RJ45 crimping, patch panel wiring, and Cat6 Ethernet verification.',
      'Mounting, IP addressing, and PoE switch port assignment for surveillance cameras.',
      'Diagnosing physical link drops and network loop issues using ping, traceroute, and cable testers.',
    ],
  },
];
