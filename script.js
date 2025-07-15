/* === GLOBAL === */
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

body {
font-family: 'Open Sans', sans-serif;
line-height: 1.6;
color: #222;
background-color: #fff;
}

h1, h2, h3 {
font-family: 'Playfair Display', serif;
color: #990000;
margin-bottom: 10px;
}

a {
text-decoration: none;
color: inherit;
}

.container {
width: 90%;
max-width: 1200px;
margin: auto;
}

/* === HEADER === */
header {
background-color: #111;
padding: 15px 0;
}

header .container {
display: flex;
justify-content: space-between;
align-items: center;
}

.logo img {
height: 60px;
}

nav ul {
list-style: none;
display: flex;
gap: 20px;
}

nav ul li a {
color: #fff;
font-weight: bold;
transition: color 0.3s;
}

nav ul li a:hover {
color: #990000;
}

/* === BANNIÈRE === */
.banner {
background: url('images/image-banniere.jpg') center/cover no-repeat;
height: 70vh;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
}

.banner-text {
background-color: rgba(0, 0, 0, 0.6);
padding: 30px;
border-radius: 10px;
}

.banner-text h1 {
font-size: 2.5rem;
color: #fff;
}

.banner-text p {
color: #fff;
font-size: 1.2rem;
margin-top: 10px;
}

/* === HISTOIRE === */
.histoire {
padding: 60px 0;
background-color: #f4f4f4;
}

.histoire-content {
display: flex;
gap: 40px;
flex-wrap: wrap;
align-items: center;
}

.histoire-content img {
max-width: 400px;
border-radius: 10px;
}

.histoire-content p {
flex: 1;
font-size: 1.1rem;
}

/* === PRODUITS === */
.produits {
padding: 60px 0;
}

.produits-grid {
display: flex;
gap: 30px;
flex-wrap: wrap;
justify-content: space-between;
}

.produit {
flex: 1;
min-width: 280px;
text-align: center;
}

.produit img {
width: 100%;
border-radius: 10px;
}

.produit h3 {
margin-top: 10px;
font-size: 1.2rem;
}

.produit p {
font-size: 0.95rem;
color: #555;
}

/* === PLATS CUISINÉS === */
.plats {
padding: 60px 0;
background-color: #f9f9f9;
}

.plats-content {
display: flex;
align-items: center;
gap: 30px;
flex-wrap: wrap;
}

.plats-content img {
max-width: 400px;
border-radius: 10px;
}

.plats-content p {
flex: 1;
font-size: 1.1rem;
}

/* === CONTACT === */
.contact {
padding: 60px 0;
text-align: center;
}

.contact p {
font-size: 1.1rem;
margin-bottom: 10px;
}

/* === FOOTER === */
footer {
background-color: #111;
color: #fff;
padding: 20px 0;
text-align: center;
font-size: 0.9rem;
}

/* === RESPONSIVE === */
@media (max-width: 768px) {
.histoire-content,
.plats-content {
flex-direction: column;
}

nav ul {
flex-direction: column;
gap: 10px;
}

.produits-grid {
flex-direction: column;
}

header .container {
flex-direction: column;
}
}

header.sticky {
position: fixed;
top: 0;
width: 100%;
z-index: 999;
box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}
body {
padding-top: 80px; /* pour éviter que le contenu soit caché sous le header sticky */
}
