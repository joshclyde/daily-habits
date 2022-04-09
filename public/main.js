import { Checkbox } from "./modules/Checkbox.js";
import { habits } from "./modules/habits.js";
import { getCheckedItems } from "./modules/state.js";

window.addEventListener("DOMContentLoaded", () => {
  const checkedItems = getCheckedItems();
  const checkboxFragment = Object.entries(habits).reduce(
    (fragment, [id, value]) => {
      fragment.appendChild(
        Checkbox({ id, checked: checkedItems.includes(id), ...value })
      );
      return fragment;
    },
    document.createDocumentFragment()
  );

  document.getElementById("list-of-habits").appendChild(checkboxFragment);
});
