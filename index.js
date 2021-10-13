const interval = setInterval(() => {
  const header = document.querySelector("div._1QVfy._2aN_u");
  if (header) {
    clearInterval(interval);
    const a = document.createElement("a");
    const image = document.querySelector("img._2dXkT").src;
    a.innerHTML = "Download";
    a.classList.add("DownloadBtn");
    a.href = image
    a.download = image


    console.log(header)



    header.appendChild(a);
  }
}, 1000);
