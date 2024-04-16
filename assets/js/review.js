document.addEventListener("DOMContentLoaded", function() {
    var userPreference = localStorage.getItem("userPreference");
    if (userPreference) {
        if (userPreference === "like") {
            document.getElementById("like-btn").classList.add("liked");
        } else {
            document.getElementById("dislike-btn").classList.add("disliked");
        }
    }

    var likeCount = parseInt(localStorage.getItem("likeCount")) || 0;
    var dislikeCount = parseInt(localStorage.getItem("dislikeCount")) || 0;
    
    document.querySelector(".like-amount").textContent = likeCount;
    document.querySelector(".dislike-amount").textContent = dislikeCount;

    document.getElementById("like-btn").addEventListener("click", function() {
        if (!userPreference) {
            likeCount++;
            document.querySelector(".like-amount").textContent = likeCount;
            localStorage.setItem("likeCount", likeCount);
            localStorage.setItem("userPreference", "like");
            this.classList.add("liked");
        }
    });

    document.getElementById("dislike-btn").addEventListener("click", function() {
        if (!userPreference) {
            dislikeCount++;
            document.querySelector(".dislike-amount").textContent = dislikeCount;
            localStorage.setItem("dislikeCount", dislikeCount);
            localStorage.setItem("userPreference", "dislike");
            this.classList.add("disliked");
        }
    });
});
