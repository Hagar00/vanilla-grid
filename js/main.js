  // get product data from json file 
 fetch('https://dummyjson.com/products')
.then(response => response.json())
.then(
    resData =>{
    resData.products.forEach(product => {
        
        // create div card has image div and content div 
        let card = document.createElement("div");
        card.classList.add("card", product.category); 
 
        let imgContainer = document.createElement("div");
        imgContainer.classList.add("image-container");

            let image = document.createElement("img");
            image.setAttribute("src", product.thumbnail);
            imgContainer.appendChild(image);
            card.appendChild(imgContainer);

        let contentContainer = document.createElement("div");
        contentContainer.classList.add("container");

            let name = document.createElement("h5");
            name.classList.add("product-name");
            name.innerText = product.title.toUpperCase();
            contentContainer.appendChild(name);
     
            let price = document.createElement("h6");
            price.innerText = "$" + product.price;
            contentContainer.appendChild(price);

            //details button 
            let detailsButton = document.createElement("button");
            detailsButton.innerHTML= "show more";
            detailsButton.setAttribute("id","popup-btn");
            contentContainer.appendChild(detailsButton);

            //delete
            let deleteButton = document.createElement("button");
            deleteButton.innerHTML= "Delete";
            deleteButton.setAttribute("id","del-btn");
            contentContainer.appendChild(deleteButton);

            deleteButton.addEventListener("click",()=>{
                deleteButton.parentElement.parentNode.remove();
            })
            card.appendChild(contentContainer);

            document.getElementById("products").appendChild(card);

          // create create pop up box 
          let popUpBox = document.createElement("div");
          popUpBox.setAttribute("id","popup");

          let title = document.createElement("h3");
          title.setAttribute("id","popup-title");


    });
});

//Search button click search by name using input
document.getElementById("search").addEventListener("click", () => {

  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});

//filtering buttons by category
function filterProduct(value) {

  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });


  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
} ;

