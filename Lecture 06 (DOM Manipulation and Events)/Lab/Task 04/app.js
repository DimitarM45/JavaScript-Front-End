function attachGradientEvents() {
    let gradientElement = document.getElementById("gradient");

    gradientElement.addEventListener("mousemove", gradientMove);
    gradientElement.addEventListener("mouseout", gradientOut);

    function gradientMove(e) {
        let power = e.offsetX / (e.target.clientWidth - 1);

        power = Math.trunc(power * 100);

        document.getElementById("result").textContent = power + "%";
    }

    function gradientOut(e) {
        document.getElementById("result").textContent = "";
    }
}