document.addEventListener("DOMContentLoaded", function () {
  const ball = document.getElementById("ball");
  const obstacle1 = document.getElementById("obstacle1");

  ball.addEventListener("click", function () {
    // Mover la bola a través del primer canal
    let positionX = 50;
    let positionY = 50;
    const interval = setInterval(function () {
      positionX += 2;

      // Ajuste simple para que la bola se mueva en la forma del canal
      if (positionX < 250) {
        positionY += 0.5;
      } else {
        positionY -= 0.5;
      }

      ball.setAttribute("cx", positionX);
      ball.setAttribute("cy", positionY);

      // Gira el obstáculo cuando la bola se acerca
      if (positionX > 320 && positionX < 360) {
        obstacle1.style.transform = "rotate(90deg)";
      }

      if (positionX >= 400) {
        clearInterval(interval);

        // Mover la bola hacia abajo
        const intervalDown = setInterval(function () {
          positionY += 2;
          ball.setAttribute("cy", positionY);

          if (positionY >= 150) {
            clearInterval(intervalDown);
          }
        }, 10);
      }
    }, 10);
  });
});
