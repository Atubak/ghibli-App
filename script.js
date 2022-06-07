const app = document.getElementById('root');
const logo = document.createElement('img');
logo.src = "logo.png";

const container = document.createElement('div');
container.classList.add("container");

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
    var data = JSON.parse(this.response);

    const error = false;
    if (error) {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = 'Gah its not working!!!';
        return app.appendChild(errorMessage);
    }

    data.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('card');

        const h1 = document.createElement('h1');
        h1.textContent = movie.title;

        const p = document.createElement('p');
        movie.description = movie.description.substring(0,300);
        p.textContent = `${movie.description}...`;

        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);        
    });
    
    console.log(data);
};

request.send();
