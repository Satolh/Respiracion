const paragraph = document.querySelector(".paragraph");
const ball = document.querySelector(".ball");

const inhalar = ()=>{
    paragraph.textContent = "Inhalar";
    return new Promise (resolve => setTimeout(resolve,3000));
};

const sostener = ()=>{
    paragraph.textContent = "Sostener";
    return new Promise (resolve => setTimeout(resolve,1500));

}

const exhalar = ()=>{
    paragraph.textContent = "Exhalar";
    return new Promise (resolve => setTimeout(resolve,3000));
}
const respiracionRelax = async () => {
    while(true){
        await inhalar();
        await sostener();
        await exhalar();
    }
};

respiracionRelax();