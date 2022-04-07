const habits = {
  a: {
    description: "Wake up at a quality time 🌅",
  },
  b: {
    description: "Weigh Myself ⚖️",
    link: "https://docs.google.com/spreadsheets/d/1fJ7z7xNfmxzrj5tjM6VXIdT8vRJdaWxV6ie5py5DdNE/edit#gid=0",
  },
  c: {
    description: "Cross off calendar day 📆",
  },
  d: {
    description: "Water 🌊",
  },
  e: {
    description: "Coffee ☕️",
  },
  f: {
    description: "Read journal 👀",
  },
  g: {
    description: "Write journal ✏️",
  },
  h: {
    description: "Email ✉️",
  },
  i: {
    description: "Cat Litter 🐈",
  },
  j: {
    description: "Teeth 🪥 🦷",
  },
};

const initDate = () => {
  let date = localStorage.getItem("date");
  if (date === null) {
    // date has never been initialized, so set it
    localStorage.setItem("date", Date());
  } else {
    date = new Date(date);
    const expired = new Date();
    expired.setHours(3, 0, 0);
    if (date < expired && expired < new Date()) {
      // resetting the date for the new day
      localStorage.setItem("date", Date());
      removeAllCheckedItems();
    }
  }
};

const initCheckedItems = () => {
  const checkedItems = localStorage.getItem("checkedItems");
  if (checkedItems === null) {
    localStorage.setItem("checkedItems", JSON.stringify([]));
    return [];
  }
  return JSON.parse(checkedItems);
};

const addCheckedItem = (id) => {
  const checkedItems = initCheckedItems();
  localStorage.setItem("checkedItems", JSON.stringify([...checkedItems, id]));
};

const removeCheckedItem = (id) => {
  const checkedItems = initCheckedItems();
  localStorage.setItem(
    "checkedItems",
    JSON.stringify(checkedItems.filter((value) => value !== id))
  );
};

const removeAllCheckedItems = () => {
  localStorage.setItem("checkedItems", "[]");
};

const Checkbox = ({ id, description, link, checked = false }) => {
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

window.addEventListener("DOMContentLoaded", () => {
  initDate();
  const checkedItems = initCheckedItems();
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
