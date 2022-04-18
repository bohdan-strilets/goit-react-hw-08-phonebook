# Phone book

Refactor the Phonebook application code to add a control state using the library
[Redux Toolkit](https://redux-toolkit.js.org/).

Let the Redux state look like this.

```bash
{
  contacts: {
    items: [],
    filter: ''
  }
}
```

- Create a vault with `configureStore()`
- Create actions to save and delete a contact, as well as update the filter. use
  the function `createAction()`.
- Create contact and filter reducers. use the function `createReducer()` or
  `createSlice()`.
- Bind React Components to Redux Logic with Library Hooks
  [react-redux](https://react-redux.js.org/).
