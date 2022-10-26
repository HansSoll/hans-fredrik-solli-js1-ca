const url = "https://api.openbrewerydb.org/breweries";
const breweryContainer = document.querySelector(".container");


async function fetchApi() {
    try {
        const response = await fetch(url);
        const result = await response.json();

        console.log(result);
        
        const breweries = result;
        breweryContainer.innerHTML = "";
        
        for(let i = 0; i < breweries.length; i++){
            const breweryName = breweries[i].name;
            const breweryCity = breweries[i].city;
            const breweryType = breweries[i].brewery_type;
            const breweryId = breweries[i].id;

            breweryContainer.innerHTML += `<a class="details" href="details.html?id=${breweryId}">
                                            <h4>${breweryName}</h4>
                                            <p>Type of brew: ${breweryType}</p>
                                            <p>City of origin: ${breweryCity}</p>
                                            </a>
            `
        }
        
    }

    catch (error) {
        console.log(error);
        breweryContainer.innerHTML = error;
    }
}

fetchApi();

