function lockedProfile() {
    let profileElements = Array.from(document.getElementsByClassName("profile"));

    profileElements.forEach(p => {
        let profile = {
            buttonElement: p.querySelector("button"),
            lockRadio: p.querySelector('input[value="lock"]'),
            profileDetails: p.querySelector("div:last-of-type")
        }

        profile.buttonElement.addEventListener("click", showDetails);
    });

    function showDetails(e) {
        let currentProfileLock = e.target.parentNode.querySelector('input[value="lock"]');

        if (!currentProfileLock.checked) {
            let currentProfileDetails = e.target.parentNode.querySelector("div:last-of-type");

            currentProfileDetails.style.display = "block";

            e.target.addEventListener("click", hideDetails);

            e.target.textContent = "Hide it";
        }
    }
    
    function hideDetails(e) {
        let currentProfileLock = e.target.parentNode.querySelector('input[value="lock"]');

        if (!currentProfileLock.checked) {
            let currentProfileDetails = e.target.parentNode.querySelector("div:last-of-type"); 

            currentProfileDetails.style.display = "none";

            e.target.textContent = "Show more";
        }
    }
}
