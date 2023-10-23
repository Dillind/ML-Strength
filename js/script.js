fetch("components/header.html")
  // convert response fetch object to text
  .then((result) => result.text())
  .then((content) => {
    console.log("Fetch loaded:" + content);

    const headerContainers =
      document.getElementsByClassName("header-container");

    for (container of headerContainers) {
      container.innerHTML = content;
    }
  });

fetch("components/footer.html")
  .then((result) => result.text())
  .then((content) => {
    const footerContainers =
      document.getElementsByClassName("footer-container");

    for (container of footerContainers) {
      container.innerHTML = content;
    }
  });



