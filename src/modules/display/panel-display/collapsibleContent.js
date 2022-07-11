const collapsibleTextAnimation = (element) => {
  if (element.style.display === "block") {
    element.style.display = "none";
    console.log(element.style.display);
    console.log("hidden");
  } else {
    element.style.display = "block";
    console.log("show");
  }
};

const dropDownAnimation = () => {
  const dropDownHeader = document.querySelector(".projects-header");
  dropDownHeader.classList.toggle("project-header--active");
};

const collapseProjectHeader = (header) => {
  const projectHeaderActiveToggle = (() => {
    header.addEventListener("click", function () {
      if (document.querySelector(".collapsible-content")) {
        displayProjectsInPanel();
        header.classList.toggle("project-header--active");
      } else alert("Make sure to create a project first");
    });
  })();
};

const displayProjectsInPanel = () => {
  const displayProject = document.querySelector(".project-list-container");
  displayProject.classList.toggle("hidden");
};

export {
  collapsibleTextAnimation,
  collapseProjectHeader,
  displayProjectsInPanel,
  dropDownAnimation,
};
