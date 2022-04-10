export const removeAllCheckedItems = () => {
  localStorage.setItem("checkedItems", "[]");
};


export const getCheckedItems = () =>
  JSON.parse(localStorage.getItem("checkedItems"));

export const addCheckedItem = (id) => {
  const checkedItems = JSON.parse(localStorage.getItem("checkedItems"));
  localStorage.setItem("checkedItems", JSON.stringify([...checkedItems, id]));
};

export const removeCheckedItem = (id) => {
  const checkedItems = JSON.parse(localStorage.getItem("checkedItems"));
  localStorage.setItem(
    "checkedItems",
    JSON.stringify(checkedItems.filter((value) => value !== id))
  );
};

// Initializing "date"
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

// Initializing "checkedItems"
const checkedItems = localStorage.getItem("checkedItems");
if (checkedItems === null) {
  localStorage.setItem("checkedItems", JSON.stringify([]));
}
