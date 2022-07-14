const main = $(".main")

$.ajax({
    url: "https://api.github.com/users/TiKrLa/repos",
    method: "GET"
}).then(results => {
    console.log(results)

    for (let i = 0; i < results.length; i++) {
       if (results[i].stargazers_count !=0) {
         let article = "<article><header><h2>" + results[i].name + "</h2></header><p>" + results[i].description + "</p>" +
            "<ul><li><button><a href=" + results[i].html_url + " target = blank>Github Repo</a></button></li><li><button><a href="
            + results[i].homepage + " target = blank class = button>Deployed App</a></button></li></ul></article>" 

        main.append(article)
    }
  }
})