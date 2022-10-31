const detailsContainer = document.querySelector(".brewery-details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");


const url = "https://api.openbrewerydb.org/breweries/" + id;

console.log(url);

async function fetchDetail() {
    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        document.title = details.name;
        detailsContainer.innerHTML = "";
        
        createHtml(details);
    }
    catch(error) {
        console.log(error);
        detailsContainer.innerHTML = error;
    }
}

fetchDetail();

function createHtml(details) {
    detailsContainer.innerHTML = `<h1>${details.name}</h1>
                                  <p>Country: ${details.country}</p>
                                  <p>State: ${details.state}</p>
                                  <p>City: ${details.city}</p>
                                  <p>Street: ${details.street}</p>
                                  <p>Type of brew: ${details.brewery_type}</p>
                                  <p>Phone No: ${details.phone}</p>
    `
}