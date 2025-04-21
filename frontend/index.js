function appendImageElem(keyword, index){
    const imgElem = document.createElement('img');
    imgElem.src = `https://source.unsplash.com/featured/?${keyword}&sig=${index}`;

    const galleryElem = document.querySelector('.gallery');
    galleryElem.appendChild(imgElem);
    
}
 
function searchPhotos(event){
    const keyword = event.target.value;

    if(event.key === 'Enter')
        for(let i = 1; i <= 5; i++){
                appendImageElem(keyword, i);
            }
}

function run(){
    

    const inputElem = document.querySelector('input');
    inputElem.addEventListener('keydown', searchPhotos);
}

run();