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
  console.warn(error)
}

