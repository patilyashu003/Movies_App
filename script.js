const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '9b5c99cec5mshcd176e358e69e5ap1ff69fjsn6241f0226b33',
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};



async function getmovie(){
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        result.map((movie)=>{
            const card = document.createElement('div')
            card.className = 'card'
            const title = document.createElement('h2')
            title.innerText = movie.title;
            const image = document.createElement('img')
            image.src = movie.image
            const desc = document.createElement('p')
            desc.innerText = movie.description
            const year = document.createElement('h3')
            year.innerText = movie.year
            const rating = document.createElement('h4')
            rating.innerText = movie.rating
            card.appendChild(title)
            card.appendChild(image)
            card.appendChild(desc)
            card.appendChild(year)
            card.appendChild(rating)
            document.getElementById('movie-container').appendChild(card)
        })
    } catch (error) {
        console.error(error);
    }
    
}




async function getseries(){
    try {
        const response = await fetch('https://imdb-top-100-movies.p.rapidapi.com/series', options);
        const result = await response.json();
        result.map((movie)=>{
            const card = document.createElement('div')
            card.className = 'card'
            const title = document.createElement('h2')
            title.innerText = movie.title;
            const image = document.createElement('img')
            image.src = movie.image
            const desc = document.createElement('p')
            desc.innerText = movie.description
            const year = document.createElement('h3')
            year.innerText = movie.year
            const rating = document.createElement('h4')
            rating.innerText = movie.rating
            card.appendChild(title)
            card.appendChild(image)
            card.appendChild(desc)
            card.appendChild(year)
            card.appendChild(rating)
            document.getElementById('movie-container').appendChild(card)
        })
    } catch (error) {
        console.error(error);
    }
    
}