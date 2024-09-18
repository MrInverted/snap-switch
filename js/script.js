try {
  const videos = document.querySelectorAll("#video [data-video-id]");

  if (videos) videos.forEach(element => {
    element.onclick = () => {
      const id = element.dataset.videoId;

      const iframe = `
        <iframe
          src="https://www.youtube.com/embed/${id}&autoplay=true"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>`;

      element.outerHTML = iframe;
    }
  })
} catch (error) {
  console.warn(error);
}


try {
  const icon = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__right");
  const links = document.querySelectorAll(".header__right a");

  const closeBurger = () => {
    menu.classList.remove("opened");
    icon.classList.remove("opened");
  }

  icon.onclick = () => {
    menu.classList.toggle("opened");
    icon.classList.toggle("opened");
  }

  links.forEach(link => {
    link.onclick = () => closeBurger();
  })
} catch (error) {
  console.warn(error);
}
