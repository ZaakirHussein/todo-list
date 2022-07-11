function setFlagColor(obj, flag) {
  if (obj.priority === "Low") {
    flag.style.color = "blue";
  } else if (obj.priority === "Medium") {
    flag.style.color = "orange";
  } else if (obj.priority === "High") {
    flag.style.color = "red";
  }
}

export default setFlagColor;
