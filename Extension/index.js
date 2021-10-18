function dwn() {

  const interval = setInterval(() => {

    console.log("loaded");
    const header = document.querySelector("div._1QVfy._2aN_u");
    if (header) {
      clearInterval(interval)
      const a = document.createElement("a");
      try {
        const image = document.querySelector("img._2dXkT").src;
        a.innerHTML = "Download";
        a.href = image;
        a.download = image;
      } catch {
        const video = document.querySelector("video.Nu3Wb").src;
        a.innerHTML = "Download";
        a.href = video;
        a.download = video;
      }



      a.classList.add("DownloadBtn");

      header.appendChild(a);

    }

  }, 1000);

  
}

document.addEventListener(onload, dwn())









