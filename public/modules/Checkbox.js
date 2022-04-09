import { addCheckedItem, removeCheckedItem } from "./state.js";

export const Checkbox = ({ id, description, link, checked = false }) => {
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", id);
  input.setAttribute("name", id);
  input.checked = checked;

  input.addEventListener("change", (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      addCheckedItem(id);
    } else {
      removeCheckedItem(id);
    }
  });

  const label = document.createElement("label");
  label.setAttribute("class", "checkbox-label");
  label.setAttribute("for", id);
  if (link) {
    const a = document.createElement("a");
    a.setAttribute("href", link);
    a.innerHTML = description;
    label.appendChild(a);
  } else {
    label.innerHTML = description;
  }

  const div = document.createElement("div");
  div.setAttribute("class", "checkbox-container");
  div.appendChild(input);
  div.appendChild(label);

  return div;
};
