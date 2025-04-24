import health from '../../../../assets/images/health.jpeg'
import blood from '../../../../assets/images/blood.jpeg'
import bank from '../../../../assets/images/bank.jpeg'
import book from '../../../../assets/images/book.jpeg'
import comic from '../../../../assets/images/comic.jpeg'
import notes from '../../../../assets/images/notes.jpeg'
import shopping from '../../../../assets/images/shopping.jpeg'

const ProjectData = [
  {
    ProjectTitle: "Health Engine",
    Project_Description: "A mobile application to monitor daily health stats and habits.",
    StartDate: "2024-12-01",
    EndDate: "2025-03-15",
    ProjectManager: "Alice Johnson",
    Project_Img: health,
    Budget: "25,000",
    TeamName: "Team Alice",
    Status: "Ongoing",
    Tasks: [
      "Set up user authentication",
      "Design dashboard UI",
      "Integrate health tracker API",
      "Build analytics module",
      "Test on mobile devices"
    ]
  },
  {
    ProjectTitle: "Blood Donate Tracker",
    Project_Description: "A dashboard to manage Blood banking and their workflow.",
    StartDate: "2025-01-10",
    EndDate: "2025-06-01",
    ProjectManager: "John Smith",
    Project_Img: blood,
    Budget: "30,000",
    TeamName: "Team John",
    Status: "Pending",
    Tasks: [
      "Create donor registration form",
      "Set up blood inventory database",
      "Map hospital requirements",
      "Develop donor notification system",
      "Build reporting dashboard"
    ]
  },
  {
    ProjectTitle: "comicKey",
    Project_Description: "A responsive platform for read comics.",
    StartDate: "2024-11-20",
    EndDate: "2025-04-30",
    ProjectManager: "Priya Sharma",
    Project_Img: comic,
    Budget: "18,000",
    TeamName: "Team Priya",
    Status: "Ongoing",
    Tasks: [
      "Design comic reader UI",
      "Integrate content delivery",
      "Set up subscription model",
      "Optimize performance",
      "Enable offline access"
    ]
  },
  {
    ProjectTitle: "Banking System",
    Project_Description: "A secure system to handle customer accounts, loans, and transactions.",
    StartDate: "2025-02-05",
    EndDate: "2025-08-10",
    ProjectManager: "David Lee",
    Project_Img: bank,
    Budget: "50,000",
    TeamName: "Team David",
    Status: "Pending",
    Tasks: [
      "Design database schema",
      "Implement login and security",
      "Build account creation flow",
      "Add transaction tracking",
      "Generate monthly reports"
    ]
  },
  {
    ProjectTitle: "E-Shop",
    Project_Description: "A web portal for E-commerce services.",
    StartDate: "2024-10-01",
    EndDate: "2025-01-31",
    ProjectManager: "Sara Ali",
    Project_Img: shopping,
    Budget: "22,000",
    TeamName: "Team Sara",
    Status: "Completed",
    Tasks: [
      "Set up product catalog",
      "Add payment gateway",
      "Design cart UI",
      "Implement user reviews",
      "Launch promo campaigns"
    ]
  },
  {
    ProjectTitle: "Book Management Tool",
    Project_Description: "Track Books orders, sales, and deliveries in real-time.",
    StartDate: "2024-12-15",
    EndDate: "2025-05-20",
    ProjectManager: "Mike Brown",
    Project_Img: book,
    Budget: "15,000",
    TeamName: "Team Mike",
    Status: "Ongoing",
    Tasks: [
      "Design inventory interface",
      "Create order tracking system",
      "Build delivery status view",
      "Add notification alerts",
      "Generate sales reports"
    ]
  },
  {
    ProjectTitle: "NoteMaster",
    Project_Description: "An app to create notes.",
    StartDate: "2025-01-05",
    EndDate: "2025-07-15",
    ProjectManager: "Emily Davis",
    Project_Img: notes,
    Budget: "$12,000",
    TeamName: "Team Emily",
    Status: "Ongoing",
    Tasks: [
      "Create note editor",
      "Add tagging and folders",
      "Enable note sharing",
      "Implement search functionality",
      "Auto-save and backup"
    ]
  }
]; 

const TeamData = [
    {
      TeamName: "Team Alice",
      TeamManager: "Alice Johnson",
      TotalAssignedProjects: 5,
    },
    {
      TeamName: "Team John",
      TeamManager: "John Smith",
      TotalAssignedProjects: 4,
    },
    {
      TeamName: "Team Priya",
      TeamManager: "Priya Sharma",
      TotalAssignedProjects: 3,
    },
    {
      TeamName: "Team David",
      TeamManager: "David Lee",
      TotalAssignedProjects: 6,
    },
    {
      TeamName: "Team Sara",
      TeamManager: "Sara Ali",
      TotalAssignedProjects: 2,
    },
    {
      TeamName: "Team Emily",
      TeamManager: "Emily Davis",
      TotalAssignedProjects: 4,
    },
    {
      TeamName: "Team Mike",
      TeamManager: "Mike Brown",
      TotalAssignedProjects: 3,
    }
];

const TeamActivity = [
  {
      TeamName: "Team John",
      AssignedTasks: 20,
      Completed: 10,
      InProgress: 5,
      Pending: 5,
  },
  {
      TeamName: "Team Sarah",
      AssignedTasks: 18,
      Completed: 9,
      InProgress: 4,
      Pending: 5,
  },
  {
      TeamName: "Team Alpha",
      AssignedTasks: 25,
      Completed: 15,
      InProgress: 8,
      Pending: 2,
  },
  {
      TeamName: "Team Karan",
      AssignedTasks: 10,
      Completed: 8,
      InProgress: 1,
      Pending: 1,
  },
]

const TaskData = [
  { name: 'Completed', value: 100 },
  { name: 'Ongoing', value: 72 },
  { name: 'Pending', value: 28 },
]


export {TeamData, ProjectData, TaskData, TeamActivity};