var wrapper = document.getElementById("wrapper")
var tech = document.getElementById("tech");
var business = document.getElementById("business");
var science = document.getElementById("science");

function getData() {
    fetch("https://newsapi.org/v2/everything?q=technology&sortBy=publishedAt&pageSize=8&apiKey=53a1762632c84bb888c07a3fb5b9aea6")
        .then((response) => response.json())
        .then(result => {
            for (let i = 0; i < result.articles.length; i++) {
                tech.innerHTML += `
            <div class="card m-2" style="width: 18rem;">
                <img src="${result.articles[i].urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${result.articles[i].title}</h5>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
            </div>
        `
            }
        })
        .catch(error => console.log(error))

    fetch("https://newsapi.org/v2/everything?q=business&sortBy=publishedAt&pageSize=8&apiKey=53a1762632c84bb888c07a3fb5b9aea6")
        .then((response) => response.json())
        .then(result => {
            for (let i = 0; i < result.articles.length; i++) {
                business.innerHTML += `
            <div class="card m-2" style="width: 18rem;">
                <img src="${result.articles[i].urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${result.articles[i].title}</h5>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
            </div>
        `
            }
        })
        .catch(error => console.log(error))
    fetch("https://newsapi.org/v2/everything?q=science&sortBy=publishedAt&pageSize=8&apiKey=53a1762632c84bb888c07a3fb5b9aea6")
        .then((response) => response.json())
        .then(result => {
            for (let i = 0; i < result.articles.length; i++) {
                science.innerHTML += `
            <div class="card m-2" style="width: 18rem;">
                <img src="${result.articles[i].urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${result.articles[i].title}</h5>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
            </div>
        `
            }
        })
        .catch(error => console.log(error))




}

getData()

function searchQuery() {
    var searchInput = document.getElementById("search").value;
    wrapper.innerHTML = "";
    fetch(`https://newsapi.org/v2/everything?q=${searchInput}&sortBy=publishedAt&apiKey=53a1762632c84bb888c07a3fb5b9aea6`)
        .then((response) => response.json())
        .then(result => {
            for (let i = 0; i < result.articles.length; i++) {
                wrapper.innerHTML += `
            <div class="card m-2" style="width: 18rem;">
                <img src="${result.articles[i].urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${result.articles[i].title}</h5>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `
            }
        })
        .catch(error => console.log(error))
}

