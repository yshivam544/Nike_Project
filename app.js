const wrapper = document.querySelector(".sliderWrap");
const menuItem = document.querySelectorAll(".menuItems");

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 14999,
      desc:"Nike Air technology consists of pressurised air inside a tough yet flexible bag, and provides more flexibility and spring without compromising structure.",
      colors: [
        {
          code: "black",
          img: "./images/air.png",
        },
        {
          code: "darkblue",
          img: "./images/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Jordan",
      price: 8999,
      desc:"Air Jordan is a line of basketball shoes produced by Nike, Inc. Related apparel and accessories are marketed under Jordan Brand.",
      colors: [
        {
          code: "lightgray",
          img: "./images/jordan.png",
        },
        {
          code: "green",
          img: "./images/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 9999,
      desc:"Blazer has since transformed into a modern staple for skaters and sneakerheads alike. Maturing from a simple canvas high top to a leather mid top and casual low top, this shoe just gets better with age.",
      colors: [
        {
          code: "lightgray",
          img: "./images/blazer.png",
        },
        {
          code: "green",
          img: "./images/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 7999,
      desc:"Lifted Crater foam midsole is made from 12% recycled content, adds stability and has a unique speckled appearance.",
      colors: [
        {
          code: "black",
          img: "./images/crater.png",
        },
        {
          code: "lightgray",
          img: "./images/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 4999,
      desc:"Nike's Space Hippie sneakers and their packaging are made factory scraps. from rPoly, an amalgam of recycled water bottles, t-shirts, and yarn",
      colors: [
        {
          code: "gray",
          img: "./images/hippie.png",
        },
        {
          code: "black",
          img: "./images/hippie2.png",
        },
      ],
    },
  ];

let choosenProduct= products[0];
const currentProductImage=document.querySelector(".productImage");
const currentProductTitle=document.querySelector(".productTitle");
const currentProductPrice=document.querySelector(".productPrice");
const currentProductDescription=document.querySelector(".productDescription");
const currentProductColors=document.querySelectorAll(".color");
const currentProductSizes=document.querySelectorAll(".size");


menuItem.forEach((item, index) => {
    item.addEventListener("click", () => {
    
      wrapper.style.transform = `translateX(${-100 * index}vw)`;

      choosenProduct=products[index];

      currentProductTitle.textContent=choosenProduct.title;
      currentProductPrice.textContent="Rs " + choosenProduct.price;
      currentProductDescription.textContent=choosenProduct.desc;
      currentProductImage.src=choosenProduct.colors[0].img;
       
      currentProductColors.forEach((color,index)=>{
        color.style.backgroundColor = choosenProduct.colors[index].code;

      }); 
    });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImage.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor="white";
            size.style.color="black";
        });
        size.style.backgroundColor="black";
        size.style.color="white";
    });    
})

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});