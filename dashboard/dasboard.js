var wrapper = document.getElementById("wrapper")
var tech = document.getElementById("tech");
var business = document.getElementById("business");
var science = document.getElementById("science");
var searchResult = document.getElementById('searchResult')

var loader = document.querySelectorAll(".loader")
function getData() {
    fetch("https://api.worldnewsapi.com/search-news?text=technology&api-key=822c8a72f5054c88be1f9d87d7c196ea&language=en&number=8")
        .then((response) => {
            return response.json()
        })
        .then(result => {
            loader[0].classList.add("d-none")
            if (result.news) {
                for (let i = 0; i < result.news.length; i++) {
                    tech.innerHTML += `
                <div class="card m-2" style="width: 18rem;">
                    <img src="${result.news[i].image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${result.news[i].title}</h5>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            `
                }
            } else {
                tech.innerHTML = "<p class='fs-5 fw-semibold py-4 my-auto text-dark-emphasis'>Unable to Fetch Data</p>"
            }
        })
        .catch(error => console.log(error))

    fetch("https://api.worldnewsapi.com/search-news?text=bussiness&api-key=822c8a72f5054c88be1f9d87d7c196ea&language=en&number=8")
        .then((response) => response.json())
        .then(result => {
            loader[1].classList.add("d-none")
            if (result.news) {
                for (let i = 0; i < result.news.length; i++) {
                    business.innerHTML += `
                <div class="card m-2" style="width: 18rem;">
                    <img src="${result.news[i].image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${result.news[i].title}</h5>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            `
                }
            } else {
                business.innerHTML = "<p class='fs-5 fw-semibold py-4 my-auto text-dark-emphasis'>Unable to Fetch Data</p>"
            }
        })
        .catch(error => console.log(error))
    fetch("https://api.worldnewsapi.com/search-news?text=science&api-key=822c8a72f5054c88be1f9d87d7c196ea&language=en&number=8")
        .then((response) => response.json())
        .then(result => {
            loader[2].classList.add("d-none")
            if (result.news) {
                for (let i = 0; i < result.news.length; i++) {
                    science.innerHTML += `
            <div class="card m-2" style="width: 18rem;">
                <img src="${result.news[i].image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${result.news[i].title}</h5>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
            </div>
        `}
            } else {
                science.innerHTML = "<p class='fs-5 fw-semibold py-4 my-auto text-dark-emphasis'>Unable to Fetch Data</p>"
            }
        })
        .catch(error => console.log(error))




}

getData()

function searchQuery() {
    var searchInput = document.getElementById("search").value;
    wrapper.innerHTML = "";
    loader[3].classList.remove("d-none")
    fetch(`https://api.worldnewsapi.com/search-news?text=${searchInput}&api-key=822c8a72f5054c88be1f9d87d7c196ea&language=en&number=20`)
        .then((response) => response.json())
        .then(result => {
            loader[3].classList.add("d-none")
            if (result.news) {
                for (let i = 0; i < result.news.length; i++) {
                    searchResult.innerHTML += `
                <div class="card m-2" style="width: 18rem;">
                    <img src="${result.news[i].image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${result.news[i].title}</h5>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            `
                }
            } else{
                searchResult.innerHTML = "<p class='fs-5 fw-semibold py-4 my-auto text-dark-emphasis'>Unable to Fetch Data</p>"
            }
        })
        .catch(error => console.log(error))
}

var currDate = new Date();
var footerCopy = document.getElementById("copyright")
footerCopy.innerHTML = `
© Copyright ${currDate.getFullYear()} 2023. All right reserved
`
