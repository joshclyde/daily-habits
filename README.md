# Daily Habits

Website that has a checklist of my daily habits.

## Backlog

- make a favicon
- think about increasing the size of everything
- decrease margin top?
- fun animations
- change a checked box from filled to an actual checkmark
- include figma mocks

## Data

Use local storage for database. When a habit is checked off the checklist, I want to save that the item is checked off. When a new day starts, clear the old data.

3am will be the time that a new day starts, just in case I go to bed late and have daily habits that are not done until bedtime.

To change the habit list, I just manually change the json. If I need to change the description, it will not affect whether the habit was completed or not for that day. If I need to remove the habit, then just remove it from the json then it won't show up regardless of whether the id is in the local storage checked array.

For ordering, the order in the json is the order in which the elements are displayed. Can easily move data around in the json so this should be fine.

```json
{
  "a": {
    "description": "Some description"
  },
  "b": {
    "description": "Another description",
    "link": "https://github.com/joshclyde/daily-habits"
  },
}
```

In local storage, just store an array of ids, example `["a", "b", "d"]`.

