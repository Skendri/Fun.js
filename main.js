const letter = document.getElementById("flickerLetter");
      const offset = document.getElementById("flickerPosition");
      const span = document.querySelector("span");

      letter.addEventListener("input", function () {
        span.innerHTML = this.value || " ";
      });

      offset.addEventListener("input", function () {
        span.style.setProperty("--offset", this.value);
      });