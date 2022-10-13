// var btn1 = document.querySelector(".btn1");
// var btn2 = document.querySelector(".btn2");

// var p = document.querySelector(".qtyP");

// btn1.addEventListener("click", dec);
// function dec() {
//     if(p.innerText != 1){
//         var val = +p.innerText;
//         p.innerText = val-1;
//     }
// }

// btn2.addEventListener("click", add);
// function add() {
//     var val = +p.innerText;
//     p.innerText = val+1;
// }

var products = [
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000150_19-fresho-onion.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Onion",
      kg: "1kg",
      strike: 60,
      mrp: 38.38,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000144_13-fresho-ladies-finger.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Ladies Finger",
      kg: "500g",
      strike: 23.19,
      mrp: 19,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000074_19-fresho-cauliflower.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "CauliFlower",
      kg: "1 pc (approx. 400 to 600 g)",
      strike: 23.19,
      mrp: 19,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000283_11-fresho-green-peas.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Green Peas",
      kg: "500g",
      strike: 42.50,
      mrp: 34,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40057966_2-fresho-tender-coconut-medium.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Tender Coconut - Medium",
      kg: "1pc",
      strike: 38.75,
      mrp: 31,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000103_16-fresho-cucumber.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Cucumber",
      kg: "500g",
      strike: 17.15,
      mrp: 14,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40048457_7-fresho-potato-new-crop.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Potato - New Crop",
      kg: "1kg",
      strike: 33.75,
      mrp: 27,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Capsicum - Green",
      kg: "500g",
      strike: 52.50,
      mrp: 42,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000263_11-fresho-strawberry.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Strawberry",
      kg: "200g",
      strike: 60,
      mrp: 48,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40134281_11-fresho-baby-apple-shimla.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Baby Apple Shimla",
      kg: "1 kg (Approx. 11-12 pcs)",
      strike: 215,
      mrp: 172,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000066_25-fresho-cabbage.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Cabbage",
      kg: "1 pc (approx. 500 g to 800 g)",
      strike: 17.50,
      mrp: 12.12,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000127_17-fresho-lemon.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Lemon",
      kg: "250g",
      strike: 22.50,
      mrp: 18,
      brand:"Fresho"
    }
];

// localStorage.setItem("user", "Jithu"); 
var userName = document.getElementById("userName");
var name = localStorage.getItem("user") || "USER";
userName.innerText = name;

products.map((elem)=> {
    elem.qty = 1;
});

var tBody = document.querySelector("tbody");

display(products);
var totalPrice = 0;
var totalSaved = 0;

function display(data){
    tBody.innerHTML = null;
    totalPrice = 0;
    totalSaved = 0;

    data.map((elem, i)=> {
        var tr = document.createElement("tr");

        var tdItem = document.createElement("td");
         tdItem.innerText = elem.name;
        var tdPrice = document.createElement("td");
         tdPrice.setAttribute("class", "price");
         var p1 = document.createElement("p");
         p1.innerText = elem.mrp;
         var p2 = document.createElement("p");
         p2.innerText = elem.strike;
        tdPrice.append(p1, p2);

        var tdQty = document.createElement("td");
         var div = document.createElement("div");
         div.setAttribute("class", "qtyBtn");
         var dec = document.createElement("button");
         dec.setAttribute("class", "btn1");
         dec.innerText = "-";
         dec.addEventListener("click", sub);
         function sub(){
            var val = +disP.innerText;
            if(val != 1){
                disP.innerText = val-1;
            }
            elem.qty = disP.innerText;
            display(data);
         }

         var disP = document.createElement("p");
         disP.setAttribute("class", "qtyP");
         disP.innerText = elem.qty;

         var inc = document.createElement("button");
         inc.setAttribute("class", "btn2");
         inc.innerText = "+";
         inc.addEventListener("click", add);
         function add(){
            var val = +disP.innerText;
            disP.innerText = val+1;
            elem.qty = disP.innerText;
            display(data);
         }

         div.append(dec, disP, inc);
         
        tdQty.append(div);

        var tdTot = document.createElement("td");
         tdTot.innerText = ((+elem.mrp) * (+elem.qty)).toFixed(2);
         totalPrice += (+tdTot.innerText);
        var tdDel = document.createElement("td");
         tdDel.setAttribute("class", "delete");
         tdDel.innerHTML = "<i class='fa-sharp fa-solid fa-xmark'></i>";
         tdDel.addEventListener("click", ()=> {
            data.splice(i, 1);
            display(data);
         });


        var tdSave = document.createElement("td");
         tdSave.setAttribute("class", "savingsTd");
         tdSave.style="color: #bf2330";
        tdSave.innerText = (((+elem.strike) - (+elem.mrp)) * (+elem.qty)).toFixed(2);
        totalSaved += (+tdSave.innerText);

        tr.append(tdItem, tdPrice, tdQty, tdTot, tdDel, tdSave);
        tBody.append(tr);
    });

    var totP = document.querySelector("#total");
    totP.innerText = "Rs. "+totalPrice.toFixed(2);

    var totalH2 = document.querySelector("#totalH2");
    totalH2.innerText = "Rs. "+totalPrice.toFixed(2);

    var savedP = document.querySelector("#savedP");
    savedP.innerText = "Rs. "+totalSaved.toFixed(2);

    var basketItems = document.getElementById("basketItems");
    basketItems.innerText = data.length;

    var totSpan = document.getElementById("totSpan");
    totSpan.innerText = data.length;
}

// localStorage.setItem("bigbasket", JSON.stringify(products));

var clearBasket = document.getElementById("clearBasket");
clearBasket.addEventListener("click", rem);
function rem(){
  localStorage.removeItem("bigbasket");
}

var btn = document.querySelector("#checkBtn");
btn.addEventListener("click", payment);

function payment(){
    window.location.href="payment.html"
}