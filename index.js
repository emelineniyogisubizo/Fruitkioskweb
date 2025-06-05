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



const nav = document.createElement('div');
nav.className = 'navcontainer';
Object.assign(nav.style, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: '#fdfde7',
  border: '5px solid #bdbdbd',
  padding: '12px 32px',
  margin: '8px',
  borderRadius: '20px',
  boxSizing: 'border-box',
});


const logo = document.createElement('div');
logo.textContent = 'GreenKiosk';
Object.assign(logo.style, {
  fontWeight: 'bold',
  fontSize: '28px',
  color: '#2E8B57',
  marginRight: '16px',
  fontFamily: 'sans-serif'
});
nav.appendChild(logo);


const navLinks = document.createElement('nav');
navLinks.style.display = 'flex';
navLinks.style.gap = '36px';
navLinks.style.flex = '1';
navLinks.style.justifyContent = 'center';

['Home', 'Products', 'About', 'Contact'].forEach(text => {
  const link = document.createElement('a');
  link.textContent = text;
  link.href = '#';
  Object.assign(link.style, {
    color: '#2E8B57',
    fontSize: '18px',
    textDecoration: 'none',
    fontFamily: 'sans-serif'
  });
  link.onmouseenter = () =>{
     link.style.textDecoration = 'underline';
     link.style.textDecorationColor = 'purple';
  };

  link.onmouseleave = () => link.style.textDecoration = 'none';
  navLinks.appendChild(link);
});
nav.appendChild(navLinks);


const cart = document.createElement('i');
cart.className = 'fa fa-shopping-cart'; 
cart.style.fontSize = '22px';
cart.style.color = 'black';
cart.style.marginLeft = '12px';
nav.appendChild(cart);


document.body.insertBefore(nav, document.body.firstChild);

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
heading.style.color = '#2E8B57';
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
button.style.backgroundColor = '#2E8B57';
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
  li.style.marginLeft = '0.6cm';           
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

vegetableimage.style.marginTop = '1cm'

imageveg.append(vegetableimage)

const footer = document.createElement('footer');
footer.style.backgroundColor = '#2E8B57'; 
footer.style.color = 'white';
footer.style.padding = '20px 40px';
footer.style.marginTop = '3cm';
footer.style.fontFamily = 'Arial, sans-serif';

const footerTop = document.createElement('div');
footerTop.style.display = 'flex';
footerTop.style.justifyContent = 'space-between';
footerTop.style.alignItems = 'center';
footerTop.style.flexWrap = 'wrap'; 
footerTop.style.maxWidth = '1200px';
footerTop.style.margin = '0 auto 15px auto';


const businessName = document.createElement('div');
businessName.textContent = 'GreenKiosk';
businessName.style.fontSize = '28px';
businessName.style.fontWeight = '700';
businessName.style.letterSpacing = '1.2px';


const socialMedia = document.createElement('div');
socialMedia.style.display = 'flex';
socialMedia.style.gap = '20px'; 


const socialPlatforms = [
  { name: 'Facebook', class: 'fab fa-facebook-f', url: 'https://facebook.com' },
  { name: 'Twitter', class: 'fab fa-twitter', url: 'https://twitter.com' },
  { name: 'Instagram', class: 'fab fa-instagram', url: 'https://instagram.com' },
  { name: 'LinkedIn', class: 'fab fa-linkedin-in', url: 'https://linkedin.com' }
];


socialPlatforms.forEach(platform => {
  const a = document.createElement('a');
  a.href = platform.url;
  a.target = '_blank';
  a.setAttribute('aria-label', platform.name);
  a.style.color = 'white';
  a.style.fontSize = '22px';
  a.style.transition = 'color 0.3s ease';


  a.addEventListener('mouseenter', () => {
    a.style.color = '#a8e6cf'; 
  });
  a.addEventListener('mouseleave', () => {
    a.style.color = 'white';
  });

  const icon = document.createElement('i');
  icon.className = platform.class;

  a.appendChild(icon);
  socialMedia.appendChild(a);
});


footerTop.appendChild(businessName);
footerTop.appendChild(socialMedia);


footer.appendChild(footerTop);


const copyright = document.createElement('div');
const currentYear = new Date().getFullYear();
copyright.textContent = `© ${currentYear} GreenKiosk. All rights reserved.`;
copyright.style.fontSize = '14px';
copyright.style.textAlign = 'center';
copyright.style.opacity = '0.8';
copyright.style.maxWidth = '1200px';
copyright.style.margin = '0 auto';


footer.appendChild(copyright);


document.body.appendChild(footer);

