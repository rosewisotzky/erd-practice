// Here I am using querySelector to grab the element in my HTML file that has an id of display-container and assigning it to the variable displayContainer
const displayContainer = document.querySelector("#display-container");
// I am using createDocumentFragment to make an empty fragment which I will later be appending my elements to and then appending that fragment to the DOM. It's stored under the variable domFragment
let domFragment = document.createDocumentFragment();
// In this function called createHTML, I am passing in employeeArray as the argument. employeeArray represents the array of objects that is returned from my fetch call in my apiManager.js module. 
const createHTML = (employeeArray) => {
    // Here I am using a forEach loop to loop through my array of objects. I am using dataObject to represent the objects that are returned in this loop.
    employeeArray.forEach(dataObject => {
        // Each time my loop runs, my code is creating the HTML elements neccessary to build out each card.
        const employeeContainer = document.createElement("article");
        employeeContainer.className = "employee";
        const headerEl = document.createElement("header");
        headerEl.className = "employee__name";
        const h1El = document.createElement("h1");
        // Here I am using string interpolation and dot notation to access the specific values that I need to print.
        h1El.textContent = `${dataObject.name}`;
        // I am appending my h1El to my header, and then the header to the container so I can make sure that they are wrapped in the appropriate tags.
        headerEl.appendChild(h1El);
        employeeContainer.appendChild(headerEl);
        // Here I am repeating the steps above for my next section, using a combination of strings and string interpolation and dot notation.
        const departmentSection = document.createElement("section");
        departmentSection.className = "employee__department";
        departmentSection.textContent = `Works in the ${dataObject.department.dept} department`;
        // Again, I am appending this section to the employeeContainer
        employeeContainer.appendChild(departmentSection)

        const computerSection = document.createElement("section");
        computerSection.className = "employee__computer";
        computerSection.textContent = `Currently using ${dataObject.computer.computerType}`;
        employeeContainer.appendChild(computerSection);
        // After repeating the steps above to build my HTML elements, and appending to the container, I finally append my employeeContainer element to my empty document fragment. This cuts down on the constantly appending to the DOM.
        domFragment.appendChild(employeeContainer);
    })
    // Finally, after my loop has run through my array of objects and created the employee articles and appended them to my fragment, I append my fragment to the DOM. I put my final appendChild outside of my loop but  still in my function as my document fragment does not exist outside the scope of this function.
    displayContainer.appendChild(domFragment)
}

// Once your data is normalized, use your DOM skills to display a card for each employee. It should display the employee name, the name of their department, and which computer they are using
{
    /* <article class="employee">
        <header class="employee__name">
            <h1>Rainu Ittycheriah</h1>
        </header>
        <section class="employee__department">
            Works in the IT department
        </section>
        <section class="employee__computer">
            Currently using a 2015 MacBook Pro
        </section>
    </article> */
}
// HERE'S MY ATTEMPT BEFORE BUT REALIZED I NEEDED TO PRACTICE CREATEELEMENT
// const employeeHtml = (employees) => {
//     ` <article class="employee">
// <header class="employee__name">
//     <h1>${employees.name}</h1>
// </header>
// <section class="employee__department">
//     Works in the ${employees.departments.dept} department
// </section>
// <section class="employee__computer">
//     Currently using a ${employees.computers.computer}
// </section>
// </article>`
// }

// displayContainer.innerHTML = employeeHtml
// const buildAndAppend = () => {
//     getData().then(dataArray => {
//         console.log(dataArray)
//     })
// }

// buildAndAppend(employeeHtml)