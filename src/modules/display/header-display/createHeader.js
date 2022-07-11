const navCreation = (() => {
  const addContent = document.querySelector(".content");
  const navBar = addContent.appendChild(document.createElement("nav"));
  navBar.classList.add("navigation-bar");
  // Left Navigation Bar
  const leftNavBar = navBar.appendChild(document.createElement("div"));
  leftNavBar.classList.add("nav-left");
  const panelBar = leftNavBar.appendChild(document.createElement("i"));
  panelBar.className = "fa-solid fa-bars";
  panelBar.setAttribute("id", "panel-bars");
  const homeButton = leftNavBar.appendChild(document.createElement("i"));
  homeButton.className = "fa-solid fa-house";
  homeButton.setAttribute("id", "home-button");
  const searchBarContainer = leftNavBar.appendChild(
    document.createElement("div")
  );
  searchBarContainer.classList.add("search-container");
  const searchInput = searchBarContainer.appendChild(
    document.createElement("input")
  );
  searchInput.classList.add("search-bar");
  const searchImg = searchInput.appendChild(document.createElement("svg"));
  searchImg.className = "fa-solid fa-magnifying-glass";
  searchInput.placeholder = "Search";
  // Center Navigation Bar
  const centerNavBar = navBar.appendChild(document.createElement("div"));
  centerNavBar.classList.add("nav-center");
  const leftNavLogo = centerNavBar.appendChild(document.createElement("img"));
  leftNavLogo.setAttribute("id", "nav-logo");
  leftNavLogo.src = "/images/Todo List Secondary Logo(transparent).png";
  const navTitle = centerNavBar.appendChild(document.createElement("h1"));
  navTitle.textContent = "Todo List";
  navTitle.setAttribute("id", "nav-title");
})();

export default navCreation;
