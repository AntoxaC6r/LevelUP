

function doClick() {
    alert('Click');
}

bbb.onclick = function(event) {
    event.stopPropagation();
    alert( 'Спасибо' );
  };


  bbb.onclick = function() {
    alert( 'Пожалуйста' );
  };


bbb.addEventListener( 'click', doClick );
//bbb.addEventListener( 'click' , function() {alert('Спасибо!')});
bbb.removeEventListener( 'click', doClick );
bbb.removeEventListener( 'click' , function() {alert('Спасибо!')});


const slides = [
  {id: 1, name: 'Derek Anderson1', job: 'BRITISH COMEDIAN', video: 'some src', title: 'ENQUIRE ABOUT DEREK' },
  {id: 2, name: 'Derek Anderson2', job: 'BRITISH COMEDIAN', video: 'some src', title: 'ENQUIRE ABOUT DEREK' },
  {id: 3, name: 'Derek Anderson3', job: 'BRITISH COMEDIAN', video: 'some src', title: 'ENQUIRE ABOUT DEREK' },
  {id: 4, name: 'Derek Anderson4', job: 'BRITISH COMEDIAN', video: 'some src', title: 'ENQUIRE ABOUT DEREK' }
];

let currentSlide = 1;
const leftArrowElement = document.querySelector('.slider-left-arrow');
const rightArrowElement = document.querySelector('.slider-right-arrow');

function doSlide(direction) {
  currentSlide += direction;
  document.querySelector('h1').innerText = slides[currentSlide].name;
  // change video
  // change title
  // change job
  // change slider-page
  if (currentSlide === 0) {
    leftArrowElement.classList.add('disabled');
  } else {
    leftArrowElement.classList.remove('disabled');
  }
}

// leftArrowElement.addEventListener( 'click', function() {doSlide(-1)});
// rightArrowElement.addEventListener( 'click', function() {doSlide(1)});


const mockData = [{ "id": 1, "name": "Keith Ruiz", "job": "comedian","photo": "https://cdn-03.independent.ie/style/celebrity/celebrity-news/article37866116.ece/097c2/AUTOCROP/w620/ipanews_cbc3aeeb-0628-4b80-8370-0cd43cbc3929_1" }, { "id": 2, "name": "Keith Ruiz", "job": "comedian", "photo": "https://pmctvline2.files.wordpress.com/2018/10/game-of-thrones-peter-dinklage-tyrion-death-season-8-interview.jpg?w=620" }, { "id": 3, "name": "Keith Ruiz", "job": "comedian", "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcaeIWOmi62oncorhSKDzoBPIA7mF1QWUqgnFXKRTbaGHAsp8fUA" }, { "id": 4, "name": "Keith Ruiz", "job": "comedian", "photo": "https://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/2018/05/game-of-thrones-season-1-recap.jpg?itok=ZwQDxPFR" }];


function httpGet(url) {

    return new Promise(function (resolve, reject) {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function () {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function () {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });

}


httpGet('https://jsonplaceholder.typicode.com/users')



.then(response => {
    if (response && response.length) {
        //renderGallery(response);
        renderGallery(mockData);
    }
}, errors => {
    console.log(errors);
});

function renderGallery(data) {
    for (let item of data) {
        $('.gallery-container').append(`
            <div class="gallery-item" style="background-image: url('${item.photo}');">
                <div class="item-inner">
                    <a href="#" class="round-button"><img src="img/arrow.png" alt="photo"></a>
                    <div class="item-info">
                        <div class="person-name">${item.name}</div>
                        <div class="person-job">${item.job}</div>
                    </div>
                </div>
            </div>
        `);
    }
}
