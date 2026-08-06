const form = document.getElementById("adForm");


if(form){

form.addEventListener("submit", function(e){

    e.preventDefault();


    const ad = {

        id: Date.now(),

        title:
        document.getElementById("title").value,


        price:
        document.getElementById("price").value,


        category:
        document.getElementById("category").value,


        city:
        document.getElementById("city").value,


        phone:
        document.getElementById("phone").value,


        description:
        document.getElementById("description").value,


        image:
        "images/logo.png",


        date:
        new Date().toLocaleString("ar")

    };



    Storage.addAd(ad);



    alert("تم نشر الإعلان بنجاح");


    window.location.href="index.html";


});

}
