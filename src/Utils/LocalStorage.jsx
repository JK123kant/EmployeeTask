// localStorage.clear()
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "aarav@mail.com",
    password: "123",
    taskNumber: 3,
    taskStats: {
      active: 2,
      newtask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Complete Monthly Report",
        taskDescription: "Finish the report for the month, including sales data and performance analysis.",
        taskDate: "2025-01-15",
        taskCategory: "Reporting",
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Team Meeting",
        taskDescription: "Attend the monthly team meeting to discuss ongoing projects.",
        taskDate: "2025-01-10",
        taskCategory: "Meetings",
      },
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Website",
        taskDescription: "Implement the new design changes on the company website.",
        taskDate: "2025-01-18",
        taskCategory: "Web Development",
      },
    ],
  },
  {
    id: 2,
    firstName: "Ishaan",
    email: "ishan@mail.com",
    password: "123",
    taskNumber: 2,
    taskStats: {
      active: 1,
      newtask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Client Presentation",
        taskDescription: "Prepare and deliver a presentation to the client regarding their requirements.",
        taskDate: "2025-01-20",
        taskCategory: "Client",
      },
      {
        active: true,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Internal Documentation",
        taskDescription: "Update the internal project documentation with the latest changes.",
        taskDate: "2025-01-12",
        taskCategory: "Documentation",
      },
    ],
  },
  {
    id: 3,
    firstName: "Riya",
    email: "employee3@example.com",
    password: "123",
    taskNumber: 3,
    taskStats: {
      active: 2,
      newtask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Fix the reported bugs from the last release.",
        taskDate: "2025-01-16",
        taskCategory: "Development",
      },
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review the code submitted by team members for the current sprint.",
        taskDate: "2025-01-19",
        taskCategory: "Code Quality",
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Test New Features",
        taskDescription: "Test the newly implemented features for bugs.",
        taskDate: "2025-01-10",
        taskCategory: "Testing",
      },
    ],
  },
  {
    id: 4,
    firstName: "Ananya",
    email: "Ananya@1.com",
    password: "123",
    taskNumber: 3,
    taskStats: {
      active: 2,
      newtask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Organize Office Event",
        taskDescription: "Organize the upcoming office party, including booking a venue and catering.",
        taskDate: "2025-01-22",
        taskCategory: "Event",
      },
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Administer Survey",
        taskDescription: "Distribute and analyze the results of the employee satisfaction survey.",
        taskDate: "2025-01-14",
        taskCategory: "Admin",
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Review Employee Feedback",
        taskDescription: "Review feedback from the team and provide necessary follow-up actions.",
        taskDate: "2025-01-09",
        taskCategory: "Human Resources",
      },
    ],
  },
  {
    id: 5,
    firstName: "Aditya",
    email: "employee5@example.com",
    password: "123",
    taskNumber: 3,
    taskStats: {
      active: 2,
      newtask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Budget Report",
        taskDescription: "Prepare the budget report for the next quarter with projections and expenses.",
        taskDate: "2025-01-17",
        taskCategory: "Finance",
      },
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Market Research",
        taskDescription: "Conduct market research to understand industry trends and competitors.",
        taskDate: "2025-01-21",
        taskCategory: "Research",
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Prepare Presentation",
        taskDescription: "Prepare a presentation for the management team on market trends.",
        taskDate: "2025-01-13",
        taskCategory: "Research",
      },
    ],
  },
];

  const admin= [{
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }];
  
    export const setLocalStorage =()=>{
        localStorage.setItem('employees',JSON.stringify(employees))
        localStorage.setItem('admin',JSON.stringify(admin))

    }
    export const getLocalStorage =()=>{
        const employees=JSON.parse(localStorage.getItem('employees'))
        const admin=JSON.parse(localStorage.getItem('admin'))
        return {employees,admin}
        
    }