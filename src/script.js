const app = document.getElementById('root');

var name;
function check() {
    // Clear the div 'root' when new keyword is input
    if (document.getElementById('root') !== null) {
        document.getElementById('root').innerHTML = "";
    }
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    app.appendChild(container);
    
    name = document.getElementById('searchTxt').value;
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name;
    
    // Fetching data from the cocktaildb API
    fetch(url)
        .then((resp) => resp.json())
        .then(function (resp) {
            if (resp && resp.drinks) {
                resp.drinks.forEach(drink => {
                    const card = document.createElement('div');
                    card.setAttribute('class', 'card');

                    const h1 = document.createElement('h1');
                    h1.textContent = drink.strDrink;

                    const image = document.createElement("img");
                    image.src = drink.strDrinkThumb;
                    image.id = "id";
                    image.className = "class";
                    image.src = drink.strDrinkThumb;
                    card.appendChild(image);

                    const p = document.createElement('p');
                    p.textContent = "Instruction: " + `${drink.strInstructions}`;

                    container.appendChild(card);
                    card.appendChild(h1);
                    card.appendChild(p);
                });
            }
            else {
                const p = document.createElement('p');
                p.textContent = "Sorry we don't have a recipe for that drink :(";                
                container.appendChild(p);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}
