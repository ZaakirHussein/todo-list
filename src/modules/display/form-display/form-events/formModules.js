const openForm = (form, overlay) => {
  form.style.display = "block";
  overlay.style.display = "block";
};

const closeForm = (form, overlay, input) => {
  form.style.display = "none";
  overlay.style.display = "none";
  input.reset();
};

const deleteForm = (form, overlay, input) => {
  form.remove();
  overlay.style.display = "none";
  input.reset();
};

const overlayTrigger = () => {
  document.querySelector(".overlay").style.display = "block";
};

const hideOverlay = () => {
  document.querySelector(".overlay").style.display = "none";
};

const hideDescription = () => {
  document.querySelector(".description-container").remove();
};

export {
  openForm,
  closeForm,
  deleteForm,
  overlayTrigger,
  hideOverlay,
  hideDescription,
};
