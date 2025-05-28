const fadeElement = document.getElementById('topheader');

const fadeThreshold = 200;

const key = 'cart';
const pricekey = "cartprice";
let hidden = false;
let hidetimeout = null;


const roundToHundredth = (value) => {
    const num = Number(value);
    return Number(num.toFixed(2));
};
window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    let opacity = 1;
    if (scrollY >= fadeThreshold) {
        opacity = 1 - (scrollY - fadeThreshold) / 500;
    }
    opacity = Math.max(0, Math.min(1, opacity));
    if (!detectMob()) {
        fadeElement.style.transition = 'opacity 0.3s ease';
        fadeElement.style.opacity = opacity;
        if (opacity === 0) {
            fadeElement.style.pointerEvents = 'none';
            if (!hidden && !hidetimeout) {
                hidetimeout = setTimeout(() => {
                    fadeElement.style.visibility = 'hidden';  
                    hidden = true;
                    hidetimeout = null;
                }, 300); 
            }
        } else {
            if (hidden) {
                fadeElement.style.visibility = 'visible'; 
                fadeElement.style.display = 'flex'; 
                hidden = false;
            }
            if (hidetimeout) {
                clearTimeout(hidetimeout);
                hidetimeout = null;
            }

            fadeElement.style.pointerEvents = 'auto';
        }
    }
});

function detectMobScreenSize() {
    return ( ( window.innerWidth <= 1036 ));
}
function detectMobScreenSize2() {
    return ( ( window.innerWidth <= 855 ));
}


function shiftcart() {
    if (detectMobScreenSize() && !detectMob()) {
       document.getElementById("altdesktopcart").style.display = 'block';
        document.getElementById("desktopcart").style.display = 'none';
    }
    else {
        document.getElementById("altdesktopcart").style.display = 'none';
        document.getElementById("desktopcart").style.display = 'block';
    }

    if (detectMobScreenSize2() && !detectMob()) {
        document.getElementById('navicon').style.display = 'block';
        document.getElementById('navicon').style.scale = "0.5";
        document.getElementById('navicon').style.marginTop = "15px";
        document.getElementById('navicon').style.position = "fixed";
        document.getElementById('navicon').style.visibility = 'visible';
        document.getElementById('naviconcontainer').style.display = 'block';
        document.getElementById("mobilecart").style.visibility = "hidden";
        document.getElementById('li1').style.display = 'none';
        document.getElementById('socials').style.display = 'none';
        document.getElementById('li2').style.display = 'none';
        document.getElementById('li3').style.display = 'none';
        document.getElementById('desktopcart').style.display = 'none';
    }
    else {
        document.getElementById('navicon').style.visibility = 'hidden';
        document.getElementById('naviconcontainer').style.visibility = 'hidden';
        document.getElementById('li1').style.display = 'block';
        document.getElementById('li2').style.display = 'block';
        document.getElementById('li3').style.display = 'block';
        document.getElementById('socials').style.display = 'block';
    }
}

window.onresize = shiftcart;


window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

function detectMobDimensions() {
    return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
}

window.addEventListener("loadstart", function () {
    console.log("Page Loading Started");
});

window.addEventListener('load', function () {
    if (detectMob() == true) {
        console.log("Mobile Browser Detected");
        document.getElementById('navicon').style.display = 'block';
        document.getElementById('naviconcontainer').style.display = 'block';
        document.getElementById('li1').style.display = 'none';
        document.getElementById('li2').style.display = 'none';
        document.getElementById('li3').style.display = 'none';
        document.getElementById('bloxlogo').style.display = 'none';
        document.getElementById('bloxframe').style.display = 'none';
        document.getElementById('socials').style.display = 'none';
        document.getElementById('slideshowcontainer').style.display = 'none';
        document.getElementById('3dots').style.display = 'none';
        document.getElementById('mobilebuttons').style.display = 'inline-block';
        document.getElementById('insta-follow-text').style.fontSize = '35px';
        document.getElementById('schoolday').style.display = 'none';
        document.getElementById('vanillatiltscript').enabled=false;
        document.getElementById('announcementContainer').style.display = 'none';
        document.getElementById('announcementtext').style.display = 'none';
        document.getElementById('logocard').style.height = "5%";
        document.getElementById('logocard').style.width = "5%";
        document.getElementById('infobutton').style.display = 'none';
        document.getElementById('videocarousel').style.display = 'none';
        document.getElementById('livestreamembed').style.display = 'block';
        document.getElementById('fullscrrenbutton').style.display = 'none';
        document.getElementById('desktopcart').style.display = 'none';
        document.getElementById('mobilecart').style.display = 'block';
        document.getElementById('checkoutbutton').style.scale = "2.5";
        document.getElementById('checkoutbutton').style.transform = "translate(9%, -50%)";
    }
    else {
        console.log("Desktop Browser Detected");
        document.getElementById('navicon').style.visibility = 'hidden';
        document.getElementById('naviconcontainer').style.visibility = 'hidden';
        document.getElementById('li1').style.display = 'block';
        document.getElementById('li2').style.display = 'block';
        document.getElementById('li3').style.display = 'block';
        document.getElementById('socials').style.display = 'block';
        document.getElementById('slideshowcontainer').style.display = 'block';
        document.getElementById('3dots').style.display = 'block';
        document.getElementById('mobilebuttons').style.display = 'none';
        document.getElementById('schoolday').style.display = 'block';
        document.getElementById('vanillatiltscript').enabled=true;
        document.getElementById('announcementContainer').style.display = 'flex';
        document.getElementById('announcementtext').style.display = 'block';
        document.getElementById('livestreamembed').style.display = 'none';
        document.getElementById('videocarousel').style.display = 'block';
        document.getElementById('desktopcart').style.display = 'block';

    }
    const preloader = document.getElementById('preloader');
    console.log("Page Loaded");
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 300);
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 6000);
}

let vidSlideIndex = 1;
showVidSlides(vidSlideIndex);
function plusSlides(n) {
    showVidSlides(vidSlideIndex += n);
}
function cSlide(n) {
    showSlides(slideIndex = n);
}

function currentSlide(n) {
    showVidSlides(vidSlideIndex = n);
}
function showVidSlides(n) {
    let i;
    let vslides = document.getElementsByClassName("vslides");
    if (n > vslides.length) {vidSlideIndex = 1}
    if (n < 1) {vidSlideIndex = vslides.length}
    for (i = 0; i < vslides.length; i++) {
        vslides[i].style.display = "none";
    }
    vslides[vidSlideIndex-1].style.display = "block";
}

function openNav() {
    document.getElementById("sidenavbar").style.width = "100%";
}

function closeNav() {
    document.getElementById("sidenavbar").style.width = "0%";
}

async function findBuyLimit(itemId) {
    const fetchitems = await fetch("/src/items.json");
    const fetchjson = await fetchitems.json();
    const allitems = fetchjson.items;
    const item = allitems.find(i => String(i.id) === String(itemId));
    const blimit = item ? item.buylimit : null;
    return blimit;
}

async function updateItem(itemId, quan) {
    const container = document.getElementById('cartitems');
    const chosencard = document.getElementById(itemId.toString())
    chosencard.getElementsByClassName("card-date")[0].innerHTML = `<div onclick="removeFromCart(${itemId})" class="addremovebuttons">-</div> ${quan} <div onclick="increaseItemCount(String(${itemId}))" class="addremovebuttons">+</div>`;

}

async function refreshCart() {
    console.log("Refreshing cart");
    const container = document.getElementById('cartitems');
    let cartlist = getCart();
    console.log(cartlist);
    const fetchitems = await fetch("/src/items.json");
    const fetchjson = await fetchitems.json();
    const allitems = fetchjson.items;
    let addeditems = allitems.filter(item => cartlist.includes(String(item.id)));
    localStorage.setItem("addeditems", JSON.stringify(addeditems));
    let itemsandquantities = {};
    let itemsandpriceids = {};
    let prices = [];
    let totalprice = 0.00;
    container.innerHTML = '';
    addeditems.forEach(item => {
        if (item.canpurchase === "true") {
            const card = document.createElement('div');
            card.className = 'itemcard';
            if (detectMob() == true) {
                card.className = 'itemcardmobile';
            }
            card.id = item.id;
            let quantity = 0;
            console.log(cartlist);
            for (let cartlistitem of cartlist) {
                if(String(item.id) === cartlistitem) {
                    quantity++;
                }
            }
            itemsandquantities[item.id] = quantity;
            itemsandpriceids[item.id] = item.price_id;
            if (quantity > parseInt(item.buylimit)) {
                quantity = parseInt(item.buylimit);
            }
            prices.push(parseFloat(item.price) * roundToHundredth(quantity).toString());
            totalprice = totalprice + (parseFloat(item.price) * roundToHundredth(quantity).toString());

            card.innerHTML = `
        <img src="${item.imageurl}" alt="${item.title}" loading="lazy">
        <div class="card-content">
          <div class="card-title">${item.name}</div>
          <div class="card-price">${"$"+roundToHundredth(parseFloat(item.price) * quantity).toString()}</div>
          <div class="card-date"><div onclick="removeFromCart(${item.id})" class="addremovebuttons">-</div> ${quantity} <div onclick="addToCart(String(${item.id}))" class="addremovebuttons">+</div></div>
        </div>
      `;
            container.appendChild(card);

        }
    });
    if (totalprice <= 0) {
        totalprice = 0.00;
    }
    localStorage.setItem("itemsandquantities", JSON.stringify(itemsandquantities));
    localStorage.setItem("itemsandpriceids", JSON.stringify(itemsandpriceids));
    localStorage.setItem(pricekey, totalprice);

}

async function openCart() {
    refreshCart()
    if(detectMob() == true) {
        document.getElementById("cartoverlay").style.width = "100%";
    }
    else {
        document.getElementById("cartoverlay").style.width = "50%";
    }
}

function closeCart() {
    document.getElementById("cartoverlay").style.width = "0%";
}

const infobutton = document.querySelector('.infobutton');
const infobox = document.querySelector('.infoboxspan');

infobutton.addEventListener('mouseenter', () => {
    infobox.style.opacity = '1';
});

infobutton.addEventListener('mouseleave', () => {
    infobox.style.opacity = '0';
});

const checkoutbutton = document.getElementById('checkoutbutton');

checkoutbutton.addEventListener('mouseenter', () => {
    const price = localStorage.getItem(pricekey);
    checkoutbutton.textContent = "$"+roundToHundredth(price).toString();
});

checkoutbutton.addEventListener('mouseleave', () => {
    checkoutbutton.textContent = 'Checkout';
});





function renderAnnouncements(data) {
    const container = document.getElementById('announcementContainer');
    container.innerHTML = '';
    const maxCards = 3;

    const announcements = data.slice(0, maxCards);



    announcements.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
        <img src="${item.imgurl}" alt="${item.title}" loading="lazy">
        <div class="card-content">
          <div class="card-title">${item.name}</div>
          <div class="card-date">${formatDate(item.date)}</div>
          <div class="card-description">${item.description}</div>
        </div>
      `;
        container.appendChild(card);
    });
    if (announcements.length === 0) {
        console.log("No announcements found");
        container.innerHTML = `<p style="font-family: 'Trebuchet MS'; font-size: 20px; font-weight: bold;">No Announcements Found</p>`;
    }
    container.contentEditable = false;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${month}/${day}`;
}

function loadBloxelsGame() {
    var iframe = $("#game");
    iframe.attr("src", iframe.data("src"));
    document.getElementById("bloxlogo").style.display = "none";
    document.getElementById('fullscrrenbutton').style.display = 'block';
}

function fullscreenGame() {
    const elem = document.getElementById("game");
    try {
        elem.requestFullscreen();
        console.log("Fullscreened game successfully");
    }catch(error) {
        console.log("Failed to fullscreen game, ERR: " + error);
    }
}

let jsonData = null;

async function checkForId(id) {
    try {
        const response = await fetch("/src/items.json");
        const data = await response.json();
        const items = data.items;

        if (!Array.isArray(items)) {
            console.log("Error with verifying file");
            return false;
        }
        const matchFound = items.some(item => item.id && item.id.includes(id));
        if (matchFound === false) {
            console.log("Item ID "+id+" not found");
        }
        return matchFound;
    } catch (err) {
        document.getElementById('result').textContent = 'Error loading file';
        console.error('Error loading file:', err);
        return false;
    }
}


const idCache = new Map();
const limitCache = new Map();

async function increaseItemCount(itemId) {
    const cart = JSON.parse(localStorage.getItem(key)) || [];
    let itemQuantity = 0;
    for (const id of cart) {
        if (id === itemId) itemQuantity++;
    }

    let buyLimit = limitCache.has(itemId) ? limitCache.get(itemId) : parseInt(await findBuyLimit(itemId));
    cart.push(itemId);
    localStorage.setItem(key, JSON.stringify(cart));
    updateItem(itemId, itemQuantity);
}

async function addToCart(itemId) {
    let found = idCache.has(itemId) ? idCache.get(itemId) : await checkForId(itemId);
    idCache.set(itemId, found);
    if (!found) return;

    const cart = JSON.parse(localStorage.getItem(key)) || [];
    let itemQuantity = 0;
    for (const id of cart) {
        if (id === itemId) itemQuantity++;
    }

    let buyLimit = limitCache.has(itemId) ? limitCache.get(itemId) : parseInt(await findBuyLimit(itemId));
    limitCache.set(itemId, buyLimit);

    if (itemQuantity >= buyLimit) {
        console.log("Buy limit reached, item not added to cart");
        return;
    }

    cart.push(itemId);
    localStorage.setItem(key, JSON.stringify(cart));
    requestAnimationFrame(refreshCart);
}

function getCart() {
    let cart = JSON.parse(localStorage.getItem(key)) || [];
    return cart;
}
function clearCart() {
    localStorage.removeItem(key);
}
function removeFromCart(itemId) {
    console.log("Remove from cart " + itemId);
    let cart = JSON.parse(localStorage.getItem(key)) || [];
    console.log(cart);
    for (let index = 0; index < cart.length; index++) {
        if (parseInt(cart[index]) === parseInt(itemId)) {
            console.log("Found");
            cart.splice(index, 1);
            break;
        }
    }
    localStorage.setItem(key, JSON.stringify(cart));
    console.log("New cart " + JSON.stringify(cart));
    refreshCart();
}





function openOverlay(url) {
    document.getElementById("videoFrame").src = url + "?autoplay=1";
    document.getElementById("videoOverlay").style.display = "flex";
}

function closeOverlay() {
    document.getElementById("videoOverlay").style.display = "none";
    document.getElementById("videoFrame").src = "";
}


async function goToCheckout() {
    document.getElementById('checkoutbutton').innerHTML = "Loading...";
    const stripe = Stripe('pk_test_51RS08CP6GvQdglTMipB2KfsejzM9nL6hkgRYhon4PFsxIiBjJ2PSjJSeLZDqEHlGcGj7REAP0zlGYH5zCAfe01fx00lrFFDVvo');
    const quantities = JSON.parse(localStorage.getItem("itemsandquantities"));
    const priceIds = JSON.parse(localStorage.getItem("itemsandpriceids"));
    const LI = Object.keys(quantities)
        .filter(id => quantities[id] > 0 && priceIds[id])
        .map(id => ({
            price: priceIds[id],
            quantity: quantities[id]
        }));

    if (LI.length === 0) {
        alert("Your cart is empty or contains invalid items.");
        return;
    }

    stripe.redirectToCheckout({
        lineItems: LI,
        mode: 'payment',
        successUrl: 'https://gurt.lol/thankyou',
        cancelUrl: 'https://gurt.lol',
    }).then(function (result) {
        if (result.error) {
            console.error(result.error.message);
        }
    });
}

function yearbookSub() {
    const stripe = Stripe('pk_test_51RS08CP6GvQdglTMipB2KfsejzM9nL6hkgRYhon4PFsxIiBjJ2PSjJSeLZDqEHlGcGj7REAP0zlGYH5zCAfe01fx00lrFFDVvo');
    stripe.redirectToCheckout({
        lineItems: [{price: "price_1RSP6RP6GvQdglTMzE9cUO5F", quantity: 1}],
        mode: 'subscription',
        successUrl: 'https://gurt.lol/thankyou',
        cancelUrl: 'https://gurt.lol',
    });
}

function submitItemWithID() {
    console.log(document.getElementById("itemidtextbox").value.toString());
    addToCart(document.getElementById("itemidtextbox").value.toString());
}

fetch('https://script.google.com/macros/s/AKfycbwg9zQyKWJ-D_9zeIfv152xYcJSZCjya9yOmPo2A7C2iBcG3H-HNEtJQxylVihF-yPT/exec')
    .then(response => response.json())
    .then(data => {
        console.log('Loaded announcements:', data);
        renderAnnouncements(data);
    })
    .catch(error => {
        console.error('Error fetching announcements:', error);
    });



