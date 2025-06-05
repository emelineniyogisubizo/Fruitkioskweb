const body = document.body;
body.style.backgroundColor = 'silver'

const image = document.getElementById('image');
const text = document.getElementById('text');
const imagtextcont = document.getElementById('imagtextcont');
const products = document.getElementById('products');
const fruitsimage = document.getElementById('fruits');
const fruitList = document.getElementById('fruitList');
const productsDiv = document.getElementById('ourfruits');
const veggieList = document.getElementById('veggieList');
const veggieDiv = document.getElementById('ourveggies');
const imageveg = document.getElementById('veggieimg');
const orderdlist = document.getElementById('veg')


imagtextcont.style.display = 'flex';
imagtextcont.style.flexDirection = 'row';
imagtextcont.style.gap = '5cm';
imagtextcont.style.marginTop = '2cm';

productsDiv.style.display = 'flex';
productsDiv.style.flexDirection = 'row';
productsDiv.style.gap = '5cm';

veggieDiv.style.display = 'flex';
veggieDiv.style.flexDirection = 'row';
veggieDiv.style.gap = '5cm';
veggieDiv.style.marginTop = '1cm';








const textDiv = document.getElementById('text');
const heading = document.createElement('h1');
heading.style.fontSize = '60px'
heading.style.marginTop = '5cm'
heading.textContent = 'Welcome to Green Kiosks';
heading.style.color = 'green';
heading.style.marginLeft = '6cm';

const paragraph = document.createElement('p');
paragraph.innerHTML =
  'Your one-stop destination for fresh, healthy, and locally sourced produce. We are committed<br><br>' +
  ' to bringing you the best quality fruits, vegetables, and eco-friendly products to support a <br><br>' +
  'sustainable lifestyle. Explore our range and join us in making greener choices every day!';
paragraph.style.lineHeight = '0.3cm';
paragraph.style.marginLeft = '6cm';

const button = document.createElement('button');
button.textContent = 'Shop Now';
button.style.fontSize = '18px';
button.style.width = '140px';
button.style.height = '45px';
button.style.borderRadius = '5px';
button.style.border = 'none';
button.style.marginTop = '1cm'
button.style.backgroundColor = 'green';
button.style.color = 'white';
button.style.marginLeft = '6cm';


textDiv.appendChild(heading);
textDiv.appendChild(paragraph);
textDiv.appendChild(button);

const veggies = document.createElement('img');
veggies.src = 'image/veggiesrem.png';
veggies.width = 500;
veggies.height = 600;

image.appendChild(veggies);

products.style.textAlign = 'center';
products.style.marginTop = '4cm';
products.style.textTransform = 'uppercase';
products.style.fontSize = '50px';
products.style.color = 'purple';


fruitList.style.fontSize = '40px';
fruitList.style.marginTop = '3cm';

const fruitItems = document.querySelectorAll('#fruitList li');
fruitItems.forEach(item => {
  item.style.fontSize = '20px'; 
  item.style.marginLeft = '0.6cm'
});


const newFruits = ['Pineapple', 'Strawberries'];  


newFruits.forEach(fruit => {
  const li = document.createElement('li');  
  li.textContent = fruit;                    
  li.style.fontSize = '20px'; 
  li.style.marginLeft = '0.6cm'               
  fruitList.appendChild(li);                  
});


const fruits2 = document.createElement('img');
fruits2.src = 'image/fruitsrem.png';
fruits2.style.marginLeft = '8cm'

fruitsimage.appendChild(fruits2)


veggieList.style.fontSize = '40px';
veggieList.style.marginTop = '3cm';
veggieList.style.marginLeft = '10cm';

const newVeggies = ['Carrots', 'Spinach'];
newVeggies.forEach(veggie => {
  const li = document.createElement('li');
  li.textContent = veggie;
  li.idName = 'veg';
  veggieList.appendChild(li);
});

const veggieItems = document.querySelectorAll('#veggieList li');

veggieItems.forEach(item => {
  item.style.fontSize = '20px';
  item.style.marginLeft = '0.8cm';
});


const vegetableimage = document.createElement('img');
vegetableimage.src = 'image/vegyremimg.png';
// vegetableimage.style.marginLeft = '8cm';
vegetableimage.style.marginTop = '1cm'

imageveg.append(vegetableimage)




