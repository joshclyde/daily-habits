import { Checkbox } from "./modules/Checkbox.js";
import { habits } from "./modules/habits.js";
import { getCheckedItems } from "./modules/state.js";

window.addEventListener("DOMContentLoaded", () => {
  const checkedItems = getCheckedItems();
  const morningHabitsFragment = Object.entries(habits.morning).reduce(
    (fragment, [id, value]) => {
      fragment.appendChild(
        Checkbox({ id, checked: checkedItems.includes(id), ...value })
      );
      return fragment;
    },
    document.createDocumentFragment()
  );

  const nightHabitsFragment = Object.entries(habits.night).reduce(
    (fragment, [id, value]) => {
      fragment.appendChild(
        Checkbox({ id, checked: checkedItems.includes(id), ...value })
      );
      return fragment;
    },
    document.createDocumentFragment()
  );

  document.getElementById("morning-habits-list").appendChild(morningHabitsFragment);
  document.getElementById("night-habits-list").appendChild(nightHabitsFragment);
});
