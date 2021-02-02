const fs = require('fs');
const inquirer = require("inquirer");
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

//create an empty that will house all team member details

const teamMember = [];

const managerDetails = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: "Enter Manager's name: ",
        validate: (value) => {
            if (value) {return true}
            else {return 'Please enter a valid name:'};
        }},
        {
        type: 'input',
        name: 'id',
        message: "Enter Manager's id: ",
        validate: (value) => {
            if (value) {return true}
            else {return 'Please enter a valid id:'}
        }},
        {
        type: 'input',
        name: 'email',
        message: "Enter Manager's email: ",
        validate: (value) => {
            if (value) {return true}
            else {return 'Please enter a valid email:'}
        }},
        {
        type: 'input',
        name: 'number',
        message: "Enter Manager's office number: ",
        validate: (value) => {
        if (value) {return true}
        else {return 'Please enter a valid email:'}
        }}
    ])
    .then (data => {
        const mgr = new Manager(data.name, data.id, data.email, data.number);
        teamMember.push(mgr);
        addMember();
    })
}

const engrDetails = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: "Enter Engineer's name: ",
        validate: (value) => {
            if (value) {return true}
            else {return 'Please enter a valid name:'};
        }},
        {
        type: 'input',
        name: 'id',
        message: "Enter Engineer's id: ",
        validate: (value) => {
            if (value) {return true}
            else {return 'Please enter a valid id:'}
        }},
        {
        type: 'input',
        name: 'email',
        message: "Enter Engineer's email: ",
        validate: (value) => {
            if (value) {return true}
            else {return 'Please enter a valid email:'}
        }},
        {
            type: 'input',
            name: 'github',
            message: "Enter Engineer's github id: ",
            validate: (value) => {
            if (value) {return true}
            else {return 'Please enter a valid github id:'}
        }}

    ])
    .then (data => {
        const engr = new Engineer(data.name, data.id, data.email, data.github);
        teamMember.push(engr);
        addMember();
    })
}

const internDetails = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: "Enter Intern name: ",
        validate: (value) => {
            if (value) {return true}
            else {return 'Please enter a valid name:'};
        }},
        {
        type: 'input',
        name: 'id',
        message: "Enter Intern id: ",
        validate: (value) => {
            if (value) {return true}
            else {return 'Please enter a valid id:'}
        }},
        {
        type: 'input',
        name: 'email',
        message: "Enter Intern email: ",
        validate: (value) => {
            if (value) {return true}
            else {return 'Please enter a valid email:'}
        }},
        {
            type: 'input',
            name: 'school',
            message: "Enter Intern's school: ",
            validate: (value) => {
            if (value) {return true}
            else {return 'Please enter a valid name of school:'}
        }}

    ])
    .then (data => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        teamMember.push(intern);
        addMember();
    })
}

//In case additional members is required

const addMember = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addNew',
            message: "Add another Engineer or Intern?",
            choices: [
                'Engineer',
                'Intern',
                'No more member to add'
            ]
        }
    ])
    .then (data => {
        switch(data.addNew) {
            case 'Engineer':
                engrDetails();
                break;
            case 'Intern':
                internDetails();
                break;
            case 'No more member to add':
                renderHTML();
                break;
        }
    })
}


//Generate HTML using this function
function renderHTML() {
    const htmlGenerate = [];
    
    const startHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="style.css"/>
    </head>
    <body>
      <div class="container">
        <header class="row">
            My Team 
        </header>
      </div>
      <div class="container">
          <div id="team-div">
    `
    htmlGenerate.push(startHTML);
    console.log(teamMember);
    

    for (let i  =0; i < teamMember.length; i++) {
        let x = '';
        let y = teamMember[i].title;
        if (y == 'Manager') {
            x = `
          <div class="member-div1">
            <h5 class="first-name">${teamMember[i].name}</h5>
            <h6 class="member-title"><i class="fas fa-mug-hot">&ensp;</i>Manager</h6>
            <ul class="list-group px-3 team-ul">
              <li class="list-group-item text-dark">ID: ${teamMember[i].id}</li>
              <li class="list-group-item text-dark">Email: <a href="mailto:${teamMember[i].email}"> ${teamMember[i].email}</a></li>
              <li class="list-group-item text-dark">Office: ${teamMember[i].officeNumber}</li>
            </ul>
          </div>`
        }
        else if (y =='Engineer'){
            x = `
          <div class="member-div1">
            <h5 class="first-name">${teamMember[i].name}</h5>
            <h6 class="member-title"><i class="fas fa-glasses">&ensp;</i>Engineer</h6>
            <ul class="list-group px-3 team-ul">
              <li class="list-group-item text-dark">ID: ${teamMember[i].id}</li>
              <li class="list-group-item text-dark">Email: <a href="mailto:${teamMember[i].email}"> ${teamMember[i].email}</a></li>
              <li class="list-group-item text-dark">Github: <a href="https://github.com/${teamMember[i].github}" target="_blank">${teamMember[i].github}</a></li>
            </ul>
          </div>`
        }
        else if (y == 'Intern'){
            x = `
          <div class="member-div1">
            <h5 class="first-name">${teamMember[i].name}</h5>
            <h6 class="member-title"><i class="fas fa-user-graduate">&ensp;</i>Intern</h6>
            <ul class="list-group px-3 team-ul">
              <li class="list-group-item text-dark">ID: ${teamMember[i].id}</li>
              <li class="list-group-item text-dark">Email: <a href="mailto:${teamMember[i].email}"> ${teamMember[i].email}</a></li>
              <li class="list-group-item text-dark">School: ${teamMember[i].school}</li>
            </ul>
          </div> 
            `
        }
        htmlGenerate.push(x);
    }

    const endHTML = `
      </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  
  </body>
  
  </html>
    `
    htmlGenerate.push(endHTML);

    fs.writeFile('./dist/index.html', htmlGenerate.join(""), err => {
        if (err) throw err;
        console.log("Team Profile Generated. Open index.html to see the output");
    })
}

//Function to initialize the program
const init = () => {
console.log(`
#################################
Let me introduce my team members!
#################################
`)
managerDetails();
}

//this is where the program will start
init();





