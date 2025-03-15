document.addEventListener("DOMContentLoaded", () => {
    const articles = document.querySelectorAll(".articulo");
    articles.forEach((article, index) => {
        article.style.opacity = 0;
        article.style.transform = "translateY(20px)";
        setTimeout(() => {
            article.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
            article.style.opacity = 1;
            article.style.transform = "translateY(0)";
        }, index * 200);
    });
});
