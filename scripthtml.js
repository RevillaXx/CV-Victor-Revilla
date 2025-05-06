document.addEventListener("DOMContentLoaded", function () {
  const intro = document.getElementById("intro");
  const cv = document.getElementById("cv");
  const verCVBtn = document.getElementById("verCV");

  document.body.style.overflow = "hidden";

  verCVBtn.addEventListener("click", function () {
    //ocultar intro
    intro.style.transition = "transform 0.8s ease, opacity 0.8s ease";
    intro.style.transform = "translateY(-100%)";
    intro.style.opacity = "0";

    //CV animación
    cv.classList.remove("oculto");
    cv.style.opacity = 0;
    cv.style.transform = "translateY(50px)";
    cv.style.transition = "opacity 1s ease, transform 1s ease";

    setTimeout(() => {
      cv.style.opacity = 1;
      cv.style.transform = "translateY(0)";
      document.body.style.overflow = "auto";
    }, 400);
  });
});



document.getElementById("verCV").addEventListener("click", function () {
  const intro = document.getElementById("intro");
  const cv = document.getElementById("cv");
  intro.style.transition = "opacity 0.5s ease-out";
  intro.style.opacity = "0";

  //mostrar CV y desplazar
  setTimeout(() => {
    intro.style.display = "none";
    cv.classList.remove("oculto");
    cv.classList.add("visible");
    
    //desplaza suave
    cv.scrollIntoView({ behavior: "smooth" });
  }, 500); //tiempo transición
});
document.addEventListener("DOMContentLoaded", function () {
  const introContent = document.querySelector(".intro-content");
  introContent.classList.add("slide-down");

  const paragraph = document.querySelector(".intro-content p");
  const fullText = paragraph.textContent.trim();
  paragraph.textContent = "";
  paragraph.style.visibility = "visible";

  const words = fullText.split(" ");
  let index = 0;
  let lineLength = 0;

  
  function typeWriter() {
    if (index < words.length) {
      const word = words[index];
  
      // Si <br> salto linea
      if (word === "<br>") {
        paragraph.innerHTML += "<br>";
        lineLength = 0;
      } else {
        // Si hay palabras anteriores, añádelas con un espacio
        if (lineLength > 0) {
          paragraph.innerHTML += " ";
        }
  
        // Añadimos la palabra actual al contenido
        paragraph.innerHTML += word;
        lineLength += word.length;
      }
  
      index++;
      setTimeout(typeWriter, 140); // Ajusta la velocidad si lo deseas
    }
  }
  

  typeWriter();
});
