const adsContainer = document.getElementById("adsContainer");


function loadAds(){

    const ads = Storage.getAds();

    renderAds(ads);

}



function renderAds(ads){


    if(!adsContainer) return;


    adsContainer.innerHTML="";


    if(ads.length === 0){

        adsContainer.innerHTML = `
        <div class="empty">
        لا توجد إعلانات
        </div>
        `;

        return;
    }



    ads.forEach(ad=>{


        const card = document.createElement("div");

        card.className="ad-item";



        card.innerHTML = `


        <img 
        src="${ad.image || 'images/logo.png'}">


        <div class="ad-info">


        <h3>
        ${ad.title}
        </h3>


        <div class="price">

        ${ad.price} $

        </div>


        <p>
        📍 ${ad.city}
        </p>


        <p class="category">

        ${ad.category}

        </p>


        </div>


        `;



        card.onclick=function(){

            localStorage.setItem(
                "selectedAd",
                ad.id
            );


            location.href="details.html";

        };



        adsContainer.appendChild(card);


    });


}



window.onload = loadAds;
