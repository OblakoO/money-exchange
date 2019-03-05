// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency==0||currency==-1000)
    return {};
    if(currency<=10000)
    {       
        ostatok=currency%50;
        var H = (currency-ostatok)/50;
        ostatok1=ostatok%25;
        var Q = (ostatok-ostatok1)/25;
        ostatok2=ostatok1%10;
        var D = (ostatok1-ostatok2)/10;
        ostatok3=ostatok2%5;
        var N = (ostatok2-ostatok3)/5;
        ostatok4=ostatok3%1;
        var P = (ostatok3-ostatok4)/1;
        
        if (H!=0&&Q!=0&&D!=0&& N!=0 && P!=0)   //Всё не равно 0
        return {"H":H,"Q":Q,"D":D,"N":N,"P":P }


        if(P==0&&H!=0&&Q!=0&&D!=0&& N!=0)   // p=0
        return {"H":H,"Q":Q,"D":D,"N":N}

        if(P!=0&&H==0&&Q!=0&&D!=0&& N!=0)   // p=0
        return {"Q":Q,"D":D,"N":N, "P":P}

        if(P!=0&&H!=0&&Q==0&&D!=0&& N!=0)   // p=0
        return {"H":H,"D":D,"N":N, "P":P}

        if(P!=0&&H!=0&&Q!=0&&D!=0&& N==0)   // p=0
        return {"H":H,"Q":Q,"D":D, "P":P}

        //3

        if(P==0&&H==0&&Q!=0&&D!=0&& N!=0)   // p=0 h=0
        return {"Q":Q,"D":D,"N":N}

        if(P!=0&&H==0&&Q!=0&&D==0&& N!=0)   // p=0 h=0
        return {"Q":Q,"N":N,"P":P}

        if(P!=0&&H==0&&Q==0&&D!=0&& N!=0)   // p=0 h=0
        return {"D":D,"N":N,"P":P}

        if(P==0&&H!=0&&Q==0&&D!=0&& N!=0)   // p=0 h=0
        return {"H":H,"D":D,"N":N}

        if(P!=0&&H!=0&&Q==0&&D!=0&& N==0)   // p=0 h=0
        return {"H":H,"D":D,"P":P}

        if(P!=0&&H!=0&&Q==0&&D==0&& N!=0)   // p=0 h=0
        return {"H":H,"N":N,"P":P}

        if(P==0&&H!=0&&Q!=0&&D!=0&& N==0)   // p=0 h=0
        return {"H":H,"Q":Q,"D":D}

        if(P==0&&H!=0&&Q!=0&&D==0&& N!=0)   // p=0 h=0
        return {"H":H,"Q":Q,"N":N}

        if(P!=0&&H!=0&&Q!=0&&D==0&& N==0)   // p=0 h=0
        return {"H":H,"Q":Q,"P":P}

        // 2

        if(P==0&&H==0&&Q==0&&D!=0&& N!=0)   // p=0 h=0 q=0
        return {"D":D,"N":N}

        if(P==0&&H==0&&Q!=0&&D==0&& N!=0)   // p=0 h=0 q=0
        return {"Q":Q,"N":N}

        if(P==0&&H==0&&Q!=0&&D!=0&& N==0)   // p=0 h=0 q=0
        return {"Q":Q,"D":D}

        if(P==0&&H!=0&&Q==0&&D==0&& N!=0)   // p=0 h=0 q=0
        return {"H":H,"N":N}

        if(P==0&&H!=0&&Q==0&&D!=0&& N==0)   // p=0 h=0 q=0
        return {"H":H,"D":D}

        if(P==0&&H!=0&&Q!=0&&D==0&& N==0)   // p=0 h=0 q=0
        return {"H":H,"Q":Q}

        if(P!=0&&H!=0&&Q==0&&D==0&& N==0)   // p=0 h=0 q=0
        return {"H":H,"P":P}

        if(P!=0&&H==0&&Q!=0&&D==0&& N==0)   // p=0 h=0 q=0
        return {"Q":Q,"P":P}

        if(P!=0&&H==0&&Q==0&&D!=0&& N==0)   // p=0 h=0 q=0
        return {"D":D,"P":P}

        if(P!=0&&H==0&&Q==0&&D==0&& N!=0)   // p=0 h=0 q=0
        return {"N":N,"P":P}


        // 1

        if(P==0&&H==0&&Q==0&&D==0&& N!=0) //p=0 h=0 q=o d=0
        return {"N":N}

        if(P==0&&H==0&&Q==0&&D!=0&& N==0) //p=0 h=0 q=o d=0
        return {"D":D}

        if(P==0&&H==0&&Q!=0&&D==0&& N==0) //p=0 h=0 q=o d=0
        return {"Q":Q}

        if(P==0&&H!=0&&Q==0&&D==0&& N==0) //p=0 h=0 q=o d=0
        return {"H":H}

        if(P!=0&&H==0&&Q==0&&D==0&& N==0) //p=0 h=0 q=o d=0
        return {"P":P}

        

    }else 
    return {error: 'You are rich, my friend! We don\'t have so much coins for exchange' }

}
