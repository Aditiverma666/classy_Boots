const wrapper = document.querySelector(".sliderwrapper");
const menuitems = document.querySelectorAll(".menuitem");

const products = [
    {
    id:1,
    title: "Knee Length",
    price: 4999,
    colors:[
        {
        code: "brown",
        img: "./boots/brown.png",
    },
    {
        code: "black",
        img: "./boots/blacknee.png",
    },
],
},
{
    id: 2,
    title: " Pencil Heels",
    price: 4999,
    colors:[
        {
        code: "red",
        img: "./boots/redpencil.png",
    },
    {
        code: "black",
        img: "./boots/blackpencil.png",
    },
],
},
{
    id: 3,
    title: "Velvet",
    price: 4999,
    colors:[
        {
        code: "green",
        img: "./boots/greenvelvet.png",
    },
    {
        code: "maroon",
        img: "./boots/redvelvet.png",
    },
],
},
{
    id: 4,
    title: "Ankle Heels",
    price: 4999,
    colors: [
        {
        code: "pink",
        img: "./boots/pinka.png",
    },
    {
        code: "black",
        img: "./boots/blacka.png",
    },
],
},
{
    id: 5,
    title: "Ankle Flat",
    price: 4999,
    colors: [
        {
        code: "red",
        img: "./boots/af1.png",
    },
    {
        code: "brown",
        img: "./boots/af2.png",
    },
 ],
 },
];
let choosedProduct = products[0];
const currentProductImg = document.querySelector(".productimg");
const currentProductTitle = document.querySelector(".producttitle");
const currentProductPrice = document.querySelector(".productprice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSize = document.querySelectorAll(".size");
menuitems.forEach((item,index) => {
    item.addEventListener("click",() => {
     wrapper.style.transform = `translateX(${-100 * index}vw)`; 
     choosedProduct = products[index]
     currentProductTitle.textContent= choosedProduct.title
     currentProductPrice.textContent= "&#8377;" + choosedProduct.price
     currentProductColors.src=choosedProduct.colors[0].img
     currentProductColors.forEach((color,index)=>{

     color.style.backgroundColor = choosedProduct.colors[index].code;

        });
    });
});

 currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosedProduct.colors[index].img
    });
 });

currentProductSize.forEach((size,index)=>{
    size.addEventListener("click",()=>{
      currentProductSize.forEach((size)=>{
       size.style.backgroundColor= "white"
       size.style.color = "black" 
    });
    size.style.backgroundColor= "black"
    size.style.color = "white" 
   });
});