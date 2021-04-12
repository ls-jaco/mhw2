var favorites = [];

document.querySelector("#searchbar").addEventListener("keyup", search);


let grid = document.querySelector("#grid-album");

    album.forEach((element, index) => {
        element.titolo;
        element.immagine;
        element.descrizione;

        let albumBox = document.createElement("div");
        albumBox.className = 'albumBoxClass';
        albumBox.id = 'albumBoxID-' + index;

        
        let image = document.createElement("img");
        image.id = 'img' + index;
        image.addEventListener("click", function(){
            show_description(index)
        })
        image.src = ("./img/" + element.immagine);
        albumBox.appendChild(image);
    
        let title = document.createElement("h1");
        title.textContent = element.titolo;
        albumBox.appendChild(title);

        let favoriteButton = document.createElement("i");
        favoriteButton.className = "material-icons";
        favoriteButton.innerHTML = "&#xe87e;";
        // favoriteButton.addEventListener("click", add_favorite)
        favoriteButton.addEventListener("click", function() {
            add_favorite(element)
        })
        albumBox.appendChild(favoriteButton);
    
        let description = document.createElement("p");
        description.className = 'descriptionClass';
        description.id = "descrizione" + index;
        description.textContent = element.descrizione;
        albumBox.appendChild(description);

        let closeDesc = document.createElement("i");
        closeDesc.className = "material-icons-canc";
        closeDesc.innerHTML = "&#xe5c9;";
        closeDesc.addEventListener("click", function(){
            show_description(index)
        })
        description.appendChild(closeDesc);
        
        grid.appendChild(albumBox);
    });

function search(){

    let input = document.getElementById("searchbar");
    let filter = input.value.toUpperCase();
    let gridS = document.getElementById("grid-album");
    let albumsearch = gridS.getElementsByClassName("albumBoxClass");
    for (let index = 0; index < albumsearch.length; index++) {
        let h1 = albumsearch[index].getElementsByTagName("h1")[0];
        let result = h1.innerText;
        if (result.toUpperCase().indexOf(filter) > -1) {
          albumsearch[index].style.display = "";
        } else {
          albumsearch[index].style.display = "none";
          }   
    }
}

function show_description(id){
    let x = document.getElementById("descrizione" + id);
    if (x.style.display === "none"){
        x.style.display = "block";
    }else{ 
        x.style.display = "none";
        }
} 

//PRIMA VERSIONE DELLA FUNZIONE add_favorite, funzionante ma contorta

// function add_favorite(event) {
//     const icon = event.currentTarget;
//     const albumEl = icon.parentNode;

//     let id = albumEl.getAttribute('id');
//     let array = id.split('-');
//     id = array[1];

//     let albumObj = {
//         ...album[id], id   //spred
//     }

//     if(!checkIfExists(id)){
//     favorites.push(
//         albumObj
//     );}
//     updateFavorites();
// }

// function checkIfExists(id) {
//     return favorites.some(element => element.id === id);
// }

function add_favorite(element){
    if (!favorites.includes(element)){
        favorites.push(element)
    }
    updateFavorites()
}

function updateFavorites(){

    let grid = document.getElementById('favorites').querySelector('.favorites__grid');
    grid.innerHTML = '';

    favorites.forEach( (element, index) => {
        element.titolo;
        element.immagine;

        let albumBox = document.createElement("div");
        albumBox.classList.add(['favorites__grid-album','favorite']);
        albumBox.id = 'albumBoxID-' + index;
        albumBox.className = "albumBoxFavorite";
        
        let image = document.createElement("img");
        image.id = 'img' + index;
        image.src = ("./img/" + element.immagine);
        albumBox.appendChild(image);
        let removeFavoriteButton = document.createElement("i");
        removeFavoriteButton.className ="fas fa-heart-broken";
        removeFavoriteButton.addEventListener("click", function(){
            remove_favorite(index);
        })
        albumBox.appendChild(removeFavoriteButton);
    
        let title = document.createElement("h1");
        title.textContent = element.titolo;
        albumBox.appendChild(title);

        grid.appendChild(albumBox);
    });
}


function remove_favorite(index) {
    favorites.splice(index, 1);
    updateFavorites();
}

function showMenu() {
    let x = document.getElementById("mobile__links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }