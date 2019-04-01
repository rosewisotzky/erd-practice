// getData is the fetch call that is returning information from my local API and parsing it into JavaScript
const getData = () => {
    return fetch("http://localhost:8088/employees?_expand=department&_expand=computer").then(response => response.json())
}
