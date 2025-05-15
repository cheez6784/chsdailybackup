const fadeElement = document.getElementById('topheader');


const fadeThreshold = 200;


let hidden = false;
let hidetimeout = null;

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
    return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
}


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
    }
    else {
        console.log("Desktop Browser Detected");
        document.getElementById('navicon').style.visibility = 'hidden';
        document.getElementById('naviconcontainer').innerHTML = "";
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

const infobutton = document.querySelector('.infobutton');
const infobox = document.querySelector('.infoboxspan');

infobutton.addEventListener('mouseenter', () => {
    infobox.style.opacity = '1';
});

infobutton.addEventListener('mouseleave', () => {
    infobox.style.opacity = '0';
});


fetch('https://script.google.com/macros/s/AKfycby_kNV5TcyariT0DLxR6ImiR4yuTSWh_knXHLz8xb0yDUNnT6cvoFULyk3Ph0Ye1Ylo/exec')
    .then(response => response.json())
    .then(data => {
        console.log('Loaded announcements:', data);
        renderAnnouncements(data);
    })
    .catch(error => {
        console.error('Error fetching announcements:', error);
    });

function renderAnnouncements(data) {
    const container = document.getElementById('announcementContainer');
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
    fetch("/src/items.json")
        .then(response => response.json())
        .then(data => {
            jsonData = data;
            console.log("LOADSCRIPT RETURN JSON");
            console.log(jsonData);
        })
        .catch(err => {
            document.getElementById('result').textContent = 'Error loading file';
            console.error('Error loading file:', err);
        });
    if (!jsonData || !Array.isArray(jsonData)) {
        console.log("Error with verifying file");
        return;
    }
    const matchFound = jsonData.some(item => item.id && item.id.includes(id));
    console.log(matchFound === true);
    return matchFound;
}
const key = 'cart';
async function addToCart(itemId) {
    let found = await checkForId(itemId);
    console.log(found === undefined);
    if (found === false) return;
    let cart = JSON.parse(localStorage.getItem(key)) || [];
    cart.push(itemId);
    console.log(cart);
    localStorage.setItem(key, JSON.stringify(cart));
    console.log("Item ID: " + itemId + " has been added to cart");
}
function getCart() {
    let cart = JSON.parse(localStorage.getItem(key)) || [];
    return cart;
}
function clearCart() {
    localStorage.removeItem(key);
}



clearCart();
addToCart('12345');
addToCart('12324');
console.log(getCart());


function openOverlay(url) {
    document.getElementById("videoFrame").src = url + "?autoplay=1";
    document.getElementById("videoOverlay").style.display = "flex";
}

function closeOverlay() {
    document.getElementById("videoOverlay").style.display = "none";
    document.getElementById("videoFrame").src = "";
}


