const id = Number(
    localStorage.getItem("selectedAd")
);


const ads = Storage.getAds();


const ad = ads.find(item => item.id === id);



if(!ad){

    alert("الإعلان غير موجود");

    window.location.href="index.html";

}



document.getElementById("adImage").src =
    ad.image || "images/logo.png";



document.getElementById("adTitle").textContent =
    ad.title;



document.getElementById("adPrice").textContent =
    ad.price + " $";



document.getElementById("adCity").textContent =
    "📍 " + ad.city;



document.getElementById("adCategory").textContent =
    ad.category;



document.getElementById("adDescription").textContent =
    ad.description;



document.getElementById("callBtn").href =
    "tel:" + ad.phone;
