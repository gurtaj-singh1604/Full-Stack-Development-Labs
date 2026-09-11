// Departments and employees from the Pixell River Financial case study
const departments = [
    {
        name: "Administration",
        employees: [
            {
                firstName: "Zoë",
                lastName: "Robins"
            },
            {
                firstName: "Madeleine",
                lastName: "Madden"
            }
        ]
    },
    {
        name: "Audit",
        employees: [
            {
                firstName: "Josha",
                lastName: "Sadowski"
            },
            {
                firstName: "Kate",
                lastName: "Fleetwood"
            }
        ]
    },
    {
        name: "Banking Operations",
        employees: [
            {
                firstName: "Priyanka",
                lastName: "Bose"
            },
            {
                firstName: "Hammed",
                lastName: "Animashaun"
            },
            {
                firstName: "Álvaro",
                lastName: "Morte"
            },
            {
                firstName: "Taylor",
                lastName: "Napier"
            },
            {
                firstName: "Alan",
                lastName: "Simmonds"
            }
        ]
    },
    {
        name: "Communications",
        employees: [
            {
                firstName: "Gil",
                lastName: "Cardinal"
            },
            {
                firstName: "Richard",
                lastName: "J. Lewis"
            }
        ]
    },
    {
        name: "Corporate Services",
        employees: [
            {
                firstName: "Randy",
                lastName: "Bradshaw"
            },
            {
                firstName: "Tracey",
                lastName: "Cook"
            },
            {
                firstName: "Lubomir",
                lastName: "Mykytiuk"
            }
        ]
    },
    {
        name: "Facilities",
        employees: [
            {
                firstName: "Dakota",
                lastName: "House"
            },
            {
                firstName: "Lori",
                lastName: "Lea Okemah"
            },
            {
                firstName: "Renae",
                lastName: "Morrisseau"
            },
            {
                firstName: "Rick",
                lastName: "Belcourt"
            }
        ]
    },
    {
        name: "Financial Services",
        employees: [
            {
                firstName: "Selina",
                lastName: "Hanusa"
            },
            {
                firstName: "Buffy",
                lastName: "Gaudry"
            },
            {
                firstName: "Shaneen",
                lastName: "Ann Fox"
            },
            {
                firstName: "Allan",
                lastName: "Little"
            },
            {
                firstName: "Danny",
                lastName: "Rabbit"
            }
        ]
    },
    {
        name: "Human Resources",
        employees: [
            {
                firstName: "Jesse",
                lastName: "Ed Azure"
            },
            {
                firstName: "Stacy",
                lastName: "Da Silva"
            },
            {
                firstName: "Vladimír",
                lastName: "Valenta"
            },
            {
                firstName: "Samone",
                lastName: "Sayeses-Whitney"
            },
            {
                firstName: "Paul",
                lastName: "Coeur"
            }
        ]
    },
    {
        name: "Information Technology",
        employees: [
            {
                firstName: "Graham",
                lastName: "Greene"
            },
            {
                firstName: "Sandika",
                lastName: "Evergreen"
            },
            {
                firstName: "Jennifer",
                lastName: "Rodriguez (Software Developer)"
            }
        ]
    },
    {
        name: "IT Technician",
        employees: [
            {
                firstName: "Aiyana",
                lastName: "Littlebear"
            },
            {
                firstName: "Inara",
                lastName: "Thunderbird"
            },
            {
                firstName: "Kaya",
                lastName: "Runningbrook"
            },
            {
                firstName: "Elara",
                lastName: "Firehawk"
            },
            {
                firstName: "Siona",
                lastName: "Moonflower"
            },
            {
                firstName: "Kaiyu",
                lastName: "Greywolf"
            },
            {
                firstName: "Ayawamat",
                lastName: "Nightwind"
            },
            {
                firstName: "Tala",
                lastName: "Braveheart"
            },
            {
                firstName: "Iniko",
                lastName: "Stonebear"
            },
            {
                firstName: "Onatah",
                lastName: "Redhawk"
            }
        ]
    }
];
const populateEmployeeDirectory = (mainNode, departments) => {

    departments.forEach(department => {

        // create a section for each department
        const departmentSectionNode = document.createElement("section");

        // create the department heading
        const departmentHeadingNode = document.createElement("h2");
        departmentHeadingNode.innerHTML = department.name;

        // create a list for the employees
        const employeeListNode = document.createElement("ul");

        // create a list item for each employee
        department.employees.forEach(employee => {

            const employeeListItemNode = document.createElement("li");

            employeeListItemNode.innerHTML =
                `${employee.firstName} ${employee.lastName}`;

            employeeListNode.appendChild(employeeListItemNode);
        });

        // add the heading and list to the department section
        departmentSectionNode.appendChild(departmentHeadingNode);
        departmentSectionNode.appendChild(employeeListNode);

        // add the department section to main
        mainNode.appendChild(departmentSectionNode);
    });
}
document.addEventListener("DOMContentLoaded", () => {

    // store the main DOM node
    const mainNode = document.querySelector(".employee-directory");

    // store the current year DOM node
    const yearNode = document.querySelector(".current-year");

    // populate the employee directory
    populateEmployeeDirectory(mainNode, departments);

    // add the current year to the footer
    yearNode.innerHTML = new Date().getFullYear();
});