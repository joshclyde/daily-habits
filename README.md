# ✅ Daily Habits

Website that has a checklist of my daily habits.

## 👟 Running Locally

```sh
npm i
node ./server.mjs

# Daily Habits is listening on port 3000
```

## 🧑‍🎨 Design Mocks

You can view the mocks [here](https://www.figma.com/file/1mRRdwzuSx4vBh9bM9nota/Daily-Habits-Design-File?node-id=0%3A1). Using Figma to create the designs.

## 📀 Data

Use local storage for database.

When a habit is checked, save the id to an array in local storage.

When a new day starts, clear the checked items so that all items in the list are unchecked. 3am will be the time that a new day starts, just in case I go to bed late and have daily habits that are not done until bedtime.

To change the habit list, just manually change the json. If I need to change the description, it will not affect whether the habit was completed or not for that day. If I need to remove the habit, then just remove it from the json then it won't show up regardless of whether the id is in the local storage checked array. To move the order of items, just move the data around in the json.

```typescript
// The ordering of records will decide the ordering seen by the user.
type HabitList = Record<
  string,
  {
    description: string;
    link?: string;
  }
>;

interface Habits {
  morning: HabitList;
  night: HabitList;
}
```

## 🎒 Backlog

- change a checked box from filled to an actual checkmark
- move checked items to bottom of list
- make sure the sizing of the page is even between figma iphone size, desktop in iphone size, and actual iphone
- change font size to use em
- create a footer or put margin on bottom (on phone, can't really scroll past last checkpoint which is a little awkward)
- css color theming
