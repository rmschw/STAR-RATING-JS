//put everything in the array ratingStars
const ratingStars = [...document.getElementsByClassName("rating__star")];


function executeRating(stars) {
    const starClassActive = "rating__star fas icon-star";
    const starClassInactive = "rating__star far icon-star";
    const starsLength = stars.length;
    let i;

    stars.map((star) => {
        star.onclick = () => {
            i = stars.indexOf(star);

            if(star.className===starClassInactive) {
                for(i; i >= 0; --i) stars[i].className = starClassActive;
            } else {
                for (i; i< starsLength; ++i) stars[i].className = starClassInactive;
            }
        };
    });
}

executeRating(ratingStars);