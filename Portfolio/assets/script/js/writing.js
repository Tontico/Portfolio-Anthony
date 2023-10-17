const text = "Hello c'est Anthony !";
    const container = document.querySelector("h1");
    let index = 0;

    function writeText() {
      container.textContent = text.slice(0, index);

      if (index < text.length) {
        index++;
        setTimeout(writeText, 100); // Contrôle la vitesse d'écriture
      }
    }

    writeText(); // Commence l'effet d'écriture
