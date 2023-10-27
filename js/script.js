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

// Prevents the default functionality of the registration form submission and redirects to the home page.
document.getElementById("registration-form").addEventListener("submit", (e) => {
  // prevents default submission action
  e.preventDefault();

  // redirects to the home page
  window.location.href = "/";
});
