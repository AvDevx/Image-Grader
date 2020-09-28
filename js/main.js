var flag = 0;

function upload() {
    document.getElementById('notification').classList.add("slide-out");
    setTimeout(function () {
        document.getElementById('notification').classList.remove("slide-out");
    }, 3000);
}

function fetchImages(){

    if(flag == 0){
    fetch('https://api.unsplash.com/search/photos?query=london&count=10&client_id=xxz8XG_w160xWBFqAyxnwcax0tgXAgzedQZ6vZVgLkg')
        .then(response => response.json())
        .then(data => {
            data.results.forEach(el => {

                var imageNode = document.getElementById("edited-image").content;
                var copyHTML = document.importNode(imageNode, true);
                copyHTML.querySelector("#image").setAttribute("src", el.urls.regular);
                document.getElementById('edited-modal-body').appendChild(copyHTML);   

            });
        });
        flag++;
    }
}

function submitGrade(el){
    var mark_container = el.closest(".marks");
    if ( mark_container.querySelector("#mark").value >= 0 && mark_container.querySelector("#mark").value < 11 && mark_container.querySelector("#mark").value != ""){
        console.log(mark_container.querySelector("#mark").value);
      el.closest("#image-container").classList.add("shrink");
    }
}