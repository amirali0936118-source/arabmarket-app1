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
            لا توجد إعلانات حاليا
        </div>
        `;

        return;

    }



    ads.forEach(ad=>{


        const item = document.createElement("div");

        item.className="ad-item";


        item.innerHTML = `

        <img src="${ad.image || 'images/logo.png'}">


        <div class="ad-info">

            <h3>${ad.title}</h3>

            <p class="price">
            ${ad.price} $
            </p>

            <p>
            📍 ${ad.city}
            </p>


            <p>
            ${ad.category}
            </p>

        </div>

        `;



        item.onclick=()=>{

            localStorage.setItem(
                "selectedAd",
                ad.id
            );

            location.href="details.html";

        };


        adsContainer.appendChild(item);


    });


}



window.onload = loadAds;
