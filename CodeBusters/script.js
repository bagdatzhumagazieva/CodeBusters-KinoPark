function Soon(){
    document.getElementById("Schedule").style.display="none";
    document.getElementById("Soon").style.display="block";
    document.getElementById("KinoPark").style.display="none";
    document.getElementById("bg").style.filter="blur(0px)";
    document.getElementById("ForFood").style.display="none";


}

function Schedule(){
    document.getElementById("Schedule").style.display="flex";
    document.getElementById("Soon").style.display="none";
    document.getElementById("KinoPark").style.display="none";
    document.getElementById("ForFood").style.display="none";


}

function Food(){
    document.getElementById("Schedule").style.display="none";
    document.getElementById("Soon").style.display="block";
    document.getElementById("KinoPark").style.display="none";
    document.getElementById("bg").style.filter="blur(10px)";
    document.getElementById("ForFood").style.display="block";
}

function MyKinoark(){
    document.getElementById("Schedule").style.display="none";
    document.getElementById("Soon").style.display="none";
    document.getElementById("KinoPark").style.display="flex";
    document.getElementById("ForFood").style.display="none";

}

function MobileMenu(){
    document.getElementById("MenuPages").style.display="flex";
    document.getElementById("MobileMenu").style.display="none";
    document.getElementById("ImageIcon").style.display="none";
    document.getElementById("Country").style.display="none";

    document.getElementById("Schedule").style.display="block";
    document.getElementById("MobileFood").style.display="block";

    

}

function BackToMenu(){
    document.getElementById("MenuPages").style.display="none";
    document.getElementById("MobileMenu").style.display="block";
    
    document.getElementById("ImageIcon").style.display="flex";
    document.getElementById("Country").style.display="flex";

    document.getElementById("Schedule").style.display="none";
    document.getElementById("MobileFood").style.display="none";



}