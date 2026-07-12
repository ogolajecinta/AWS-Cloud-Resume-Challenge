const themeButton = document.querySelector(".theme-btn");

const savedTheme = localStorage.getItem("theme");


if(savedTheme === "light"){

    document.body.classList.add("light-mode");

    // themeButton.textContent = "🌙";
     themeButton.textContent="☀️";

}



themeButton.addEventListener("click",()=>{


    document.body.classList.toggle("light-mode");


    const lightMode =
    document.body.classList.contains("light-mode");


    if(lightMode){

       
        themeButton.textContent = "🌙";

        localStorage.setItem(
            "theme",
            "light"
        );

    }
    else{

         themeButton.textContent="☀️";

        localStorage.setItem(
            "theme",
            "dark"
        );

    }


});