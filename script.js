let products = document.querySelector(".leftside");
      let data = [
        ["1.PNG", "Product 1", "2.5"],
        ["2.PNG", "Product 2", "3.00"],
        ["3.PNG", "Product 2", "5.00"],
        ["4.PNG", "Kari", "4.00"],
        ["5.PNG", "Salad", "2.00"],
        ["6.PNG", "Piza", "6.00"],
      ];

      for (let i = 0; i < data.length; i++) {
        products.innerHTML += `<div class="product">
          <img src="image/${data[i][0]}" />
          <div class="name">${data[i][1]}</div>
          <div class="prict">$ ${data[i][2]}</div>
          <button onclick="AddProduct(this)">Add product</button>
        </div>`;
      }

      for (let i = 0; i < data.length; i++) {
        document
          .querySelectorAll("button")
          [i].addEventListener("click", (e) => {
            console.log(e);
          });
      }