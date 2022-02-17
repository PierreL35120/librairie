const form = document.querySelector('.form');
const inputTitle = document.querySelector('.livre');
const inputAuthor = document.querySelector('.auteur');
const inputGender = document.querySelector('.genre');
const inputTome = document.querySelector('.tome');
const inputISBN = document.querySelector('.ISBNT');
const collection = document.querySelector('.collection');
const updateform = document.querySelector('.update-form')


//on créé un objet qui va nous permettre d'exploiter des données

let biblio = {
    
}

//boucler sur l'objet
function loadHTML (){
    if(!window.localStorage.getItem('data')) return;
    const data = JSON.parse(window.localStorage.getItem('data'));
    biblio = data;
    Object.keys(biblio).map(key => createHTML(biblio[key], key));
}

window.addEventListener('load', loadHTML);

form.addEventListener('submit', createItem);


function createItem(e){
    e.preventDefault();
    const timestamp = Date.now();
    biblio[timestamp] = {
        title : inputTitle.value,
        autor : inputAuthor.value,
        genre : inputGender.value,
        vol : inputTome.value,
        isbn : inputISBN.value
    }
    // console.log(bilbio[timestamp]);
    createHTML(biblio[timestamp], timestamp);
    saveObj();
    this.reset(); 
}

function createHTML(objet, key){
    if(!objet.title) return;

    const html = `
    <div class="book"><span>${objet.title}</span></div>
    <div class="vol"><span>${objet.vol}</span></div>
    <div class="author"><span>${objet.autor}</span></div>
    <div class="gender"><span>${objet.genre}</span></div>
    <div class="ISBNA"><span>${objet.isbn}</span></div>
    <div class="ISBN"><span><a href="https://www.chasse-aux-livres.fr/prix/${objet.isbn}" target="_blank">Lien</a></div>

    <button name="update" class="update"><img src="2.svg" alt="update"></button>
    <button name="trash" class="trash"><img src="x.svg" alt="X"></button>
    `


const li = document.createElement('li');
    li.classList.add('item');
    li.setAttribute('data-key', key);
    li.innerHTML = html;
    collection.insertBefore(li, collection.firstChild);

    li.children.trash.onclick = toBin;
    li.children.update.onclick = UpDate;
}

function toBin(){
    this.parentNode.remove();
    const key = this.parentNode.getAttribute('data-key');
    delete biblio[key];
    saveObj();
}

function UpDate(){
    if(getComputedStyle(updateform).display != "none"){
        updateform.style.display = "none";
      } else {
        updateform.style.display = "block";
      }
}


function saveObj(){
    window.localStorage.setItem('data', JSON.stringify(biblio))
}









// const book = document.querySelector('#livre')
// const author = document.querySelector('#auteur')
// const gender = document.querySelector('#genre')
// const collec = document.querySelector('.collection')
// const form = document.querySelector('.form')

// let biblio = {

// }

// function loadHTML(){
//     if(!window.localStorage.getItem('data')) return
//     const data = JSON.parse(window.localStorage.getItem('data'))
//     biblio = data;
//     Object.keys(biblio).map(key => createHTML(biblio[key], key));
// }

// window.addEventListener('load', loadHTML);

// form.addEventListener('submit', createHTML)

// function createHTML(e, key){
//     e.preventDefault()
//     const livre = book.value 
//     const auteur = author.value 
//     const genre = gender.value

//     if(!livre) return;
//     const html = `
//     <span class="livre">${livre}</span><span class="auteur">${auteur}</span> <span class="genre">${genre}<span>
//     <button name="trash" class="trash">🗑️</button>
//     `

//     const li = document.createElement('li')
//     li.classList.add('item')    
//     li.setAttribute('data-key', key);
//     li.innerHTML = html
//     collec.insertBefore(li, collec.firstChild)
//     console.log(livre, auteur, genre)
//     saveObj();
//     this.reset();

//     li.children.trash.onclick = toBin;
// }

// function toBin(){
//     this.parentNode.remove();
//     const key = this.parentNode.getAttribute('data-key');
//     delete biblio[key];
//     saveObj();
// }

// function saveObj(){
//     window.localStorage.setItem('data', JSON.stringify(biblio))
// }