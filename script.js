 const apiKey= '1005d7eb350247f09cbfa9e82e2a12bb';

 const blogContainer= document.getElementById("blog-container");

 const searchField = document.getElementById("search-input");
 const searchBtn = document.getElementById("search-btn");

 async function fetchRandomNews(){
    try{
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;


    }catch(error){
        console.error("Error fetching random news",error);
        return [];
    }
 }

searchBtn.addEventListener("click", async ()=>{
    const query =searchField.value.trim();
    if(query !==""){
        try{
            const articles= await fetchNewsQuery(query);
            displayBlogs(articles);

        }
        catch(error){
            console.log("Error fetching news by query",error);
        }
    }
    else{
        try{
            const articles =await fetchRandomNews();
            displayBlogs(articles);
        }
        catch(error){
            console.error("Error fetching random news",error);
        }
    }

})

async function fetchNewsQuery(query){
    try{
        const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=10&apikey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;


    }catch(error){
        console.error("Error fetching random news",error);
        return [];
    }
}




function  displayBlogs(articles){
    blogContainer.innerHTML=""
    articles.forEach((article)=>{
        const blogCard =document.createElement("div");
        blogCard.classList.add("blog-card");
        const img= document.createElement("img");
        img.src = article.urlToImage;
        img.alt = article.title ;
        const title = document.createElement("h2");
        const truncatedTitle = article.title.length > 30 ? article.title.slice(0,30) + "...": article.title;
        title.textContent = truncatedTitle;
        const description = document.createElement("p");
        const truncatedDescript = article.description.length > 100 ? article.description.slice(0,100)+ "...": article.description;
        description.textContent= truncatedDescript;

        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogCard.addEventListener("click",()=>{
            window.open(article.url, "_blank");
        });
        blogContainer.appendChild(blogCard);
    })
}

(async ()=>{
    try{
        const articles =await fetchRandomNews();
        displayBlogs(articles);
    }
    catch(error){
        console.error("Error fetching random news",error);
    }
})();