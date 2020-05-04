//get elements
let search= document.getElementById("searchInput");
let submitForm= document.getElementById("form");

form.addEventListener('submit', movieSearch);

function movieSearch(e){
    let searchVAlue= search.value;
    getMovies(searchVAlue);
    e.preventDefault();
}

//getApi
//key 4c7f83b1

function getMovies(searchVAlue){

    axios.get(`http://www.omdbapi.com/?apikey=4c7f83b1&${searchVAlue}`)
    .then((res) => {
         console.log(res);
         
         //console.log(movies);
         let output= "";
         
    })
    .catch((err) => {
       console.log(err);
    });
}