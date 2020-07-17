const managerQuestions = [
    {
        type: 'input',
        message: "This application will generate an HTML page for your team. First, what is your manager's name?",
        name: 'mgrName',
        default: 'Sam Kim',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Manager's employee ID?",
        name: 'mgrId',
        default: '001',
        validate: function (answer) {
            if (answer <= 0) {
                return console.log("A valid employee ID is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Manager's email address?",
        name: 'mgrEmail',
        default: 'your@manager.com',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email address is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Manager's office number?",
        name: 'mgrOffice',
        default: '123',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid office number is required.");
            }
            return true;
        }
    },
];


const confirmEmployee = [
    {
        type: 'confirm',
        message: "Added! Add another team member to the team?",
        name: 'confirmEmp'
    }
];

const employeeType = [
    {
        type: 'list',
        message: "Would you like to add an Engineer or Intern?",
        choices: ['Engineer', 'Intern'],
        name: 'empTitle'
    }
];


const engineerQuestions = [
    {
        type: 'input',
        message: "What is your software engineer's name?",
        name: 'engName',
        default: 'Bob the Builder',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Engineer's employee ID?",
        name: 'engId',
        default: '296',
        validate: function (answer) {
            if (answer <= 0) {
                return console.log("A valid employee ID is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Engineer's email address?",
        name: 'engEmail',
        default: 'bobthebuilder@gmail.com',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email address is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your engineer's GitHub? (No @ needed)",
        name: 'engGithub',
        default: 'samdotkim',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub is required.");
            }
            return true;
        }
    }
];

const internQuestions = [
    {
        type: 'input',
        message: "What is your intern's name?",
        name: 'internName',
        default: 'Michael Jordan',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Intern's employee ID?",
        name: 'internId',
        default: '23',
        validate: function (answer) {
            if (answer <= 0) {
                return console.log("A valid employee ID is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Intern's email address?",
        name: 'internEmail',
        default: 'mjordan23@gmail.com',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email address is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the name of your intern's university?",
        name: 'internSchool',
        default: 'University of North Carolina',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid school is required.");
            }
            return true;
        }
    }
];

module.exports = {
    manager: managerQuestions,
    create: confirmEmployee,
    employee: employeeType,
    engineer: engineerQuestions,
    intern: internQuestions
};