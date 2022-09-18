// this is my model and it handles all the service calls

var homeContent = `<div id="home-content"><section class="top">
<h1>Nat's All Shoe Store</h1>
<h2>Best Sellers</h2>
<div class="best">
  <img src="images/shoe1.webp" />
  <img src="images/shoe2.webp" />
  <img src="images/shoe3.jpg" />
  <img src="images/shoe4.webp" />
  <button>Click for More</button>
</div>
</section>

<section class="bottom">
<div class="bottom-header">
  <div class="header-left">
    <h1>Story Highlights</h1>
  </div>
  <div class="header-right">
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-instagram"></i>
    <i class="fa-brands fa-twitter"></i>
  </div>
</div>
<div class="media">
  <div class="users">
    <img src="images/highlight1.jpg" />
    <p>@user_one</p>
  </div>
  <div class="users">
    <img src="images/highlight2.webp" />
    <p>@user_two</p>
  </div>
  <div class="users">
    <img src="images/highlight3.jpg" />
    <p>@user_three</p>
  </div>
  <div class="users">
    <img src="images/highlight4.webp" />
    <p>@user_four</p>
  </div>
</div>
</section></div>`;

var aboutContent = `<div id="about-content"><section class="about-top">
<h1 class="about-title">About Our Store</h1>
<img src="images/about-banner.jpg" />
<p class="about-text">
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
  cupiditate harum accusantium in delectus sit fuga aperiam hic illum
  provident repellat ab corrupti vero molestias quos expedita, quidem
  earum totam doloremque odit officia! Corporis, adipisci veniam
  inventore, rem dicta explicabo saepe modi in dolorem, tempore alias
  expedita. Labore quos voluptatum eligendi ab maxime rerum, architecto
  sit corporis quidem recusandae, possimus porro eos, soluta nesciunt
  nemo. Dolorem dolor quibusdam, doloribus architecto reiciendis quia
  omnis laborum doloremque distinctio quae illum exercitationem magnam!
  Dolore ea odio, harum voluptatibus ipsam aperiam rem, repudiandae
  distinctio corporis natus eius iste. Numquam sunt impedit mollitia
  suscipit debitis.
</p>
<p class="about-text">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat
  facere aliquam iste. Esse ullam modi minima excepturi earum ab odit
  eveniet deleniti ducimus reprehenderit commodi, molestiae dignissimos
  aut. Adipisci vel quos asperiores doloremque, velit quia aspernatur
  neque at natus! Quasi architecto hic ratione totam reprehenderit amet
  culpa dolores perferendis, beatae dolor maxime atque tempore ipsa,
  animi, omnis minus delectus voluptates ab eum vel excepturi! Enim
  repellendus delectus repudiandae placeat corporis harum! Eum repellat
  quos dolore cupiditate recusandae sed cum provident nemo distinctio
  illum, iusto accusamus vitae praesentium deserunt voluptas enim neque
  inventore harum optio quaerat nisi! Rem, a ea?
</p>
</section>

<section class="about-bottom">
<div class="about-bottom-header">
  <h1>Join Us</h1>
  <div class="facebook">
    <img src="images/facebook-logo.png" />
    <a href="www.facebook.com">Follow us on Facebook</a>
  </div>
  <div class="instagram">
    <img src="images/insta-logo.png" />
    <a href="www.instagram.com">Follow us on Instagram</a>
  </div>
  <div class="twitter">
    <img src="images/twitter-logo.png" />
    <a href="www.twitter.com">Follow us on Twitter</a>
  </div>
</div>
</section></div>`;

var productsContent = `<div id="products-content"><section class="products-top">
<div class="top-header">
  <div class="header-left">
    <h1>Search by shoe type:</h1>
  </div>
</div>
<div class="media">
  <div class="type">
    <img src="images/type1.webp" />
    <p>High Tops</p>
  </div>
  <div class="type">
    <img src="images/type2.jpg" />
    <p>Low Tops</p>
  </div>
  <div class="type">
    <img src="images/type3.jpg" />
    <p>Fitness Sneakers</p>
  </div>
  <div class="type">
    <img src="images/type4.webp" />
    <p>Classic Shoes</p>
  </div>
  
  <img src="images/next-icon.webp" />
</div>
</section>

<section class="products-bottom">

<div class="media">
  <div class="type">
    <img src="images/type5.webp" />
    <p>Classic Boots</p>
  </div>
  <div class="type">
    <img src="images/type6.jpg" />
    <p>Comfy Boots</p>
  </div>
  <div class="type">
    <img src="images/type7.webp" />
    <p>Polar Boots</p>
  </div>
  <div class="type">
    <img src="images/type8.webp" />
    <p>Winter Zip Boots</p>
  </div>
  
  <img src="images/next-icon.webp" />
</div>
</section></div>`;

var contactContent = `<div id="contact-content"><section class="contact-top">
<div class="contact-img">
<h1>Contact Us</h1>
  <p>HEADQUARTERS:</p>
  <img src="images/contact-pic.webp" />
</div>
</section>

<section class="contact-bottom">
<p>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
  Exercitationem, voluptatibus.
</p>
<p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat,
  atque!
</p>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
  beatae.
</p>
<p>Phone number: 123-456-7890</p>
<p>Email: myworlddestination@hotmail.com</p>
</section></div>`;

function setCurrentPageContent(pageID) {
  let contentName = pageID + "Content";
  $("#app").html(eval(contentName));
}

function getLastName(lastName) {
  console.log();
}

export { setCurrentPageContent };
