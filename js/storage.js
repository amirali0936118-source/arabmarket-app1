const STORAGE_KEY = "arab_market_ads";


class Storage {


    static getAds(){

        return JSON.parse(
            localStorage.getItem(STORAGE_KEY)
        ) || [];

    }



    static saveAds(ads){

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(ads)
        );

    }



    static addAd(ad){

        let ads = this.getAds();

        ads.unshift(ad);

        this.saveAds(ads);

    }


}
