# todos : To Do List

> This is a simple To-Do List made with react.js, typescript and SCSS.
>
> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![npm type definitions][types-url]

[types-url]: https://img.shields.io/npm/types/react-dropdown-tree-select.svg?style=flat-square

## <br />

![image](https://user-images.githubusercontent.com/2343376/94308937-4085e600-ffb2-11ea-9265-8cbc63a5cd8a.png)
![image](https://user-images.githubusercontent.com/2343376/94306884-b6884e00-ffae-11ea-8321-40514a2ae35f.png)
![image](https://user-images.githubusercontent.com/2343376/94309143-935f9d80-ffb2-11ea-9459-0a9563a85155.png)
![image](https://user-images.githubusercontent.com/2343376/94309278-c7d35980-ffb2-11ea-94d3-95b29bf8185b.png)

---

# Table of Contents

- Features
- Project Structures
- Installation and Execution
- Language Support
- License

---

# Features

- You can create new To-Do Item(title and contents).
- You can see the To-Do List.
- You can modify the title and contents of To-Do Items.
- You can delete To-Do Items.
- At the user's choice, To-Do Items can have deadlines.
- You can set and adjust the priority of To-Do Items.
- Completion of To-Do Items can be done.
- Alerts can be exposed for past deadlines To-Do Item.
- To-Do items are sorted by the following criteria:
  - completed date
    > Place the completed items at the bottom of the list.
  - deadlines
    > The closer the deadline, places the item at the top of the list.
  - priority
    > Place high priority items at the top of the list.
  - created date
    > Place the old-date items at the top of the list.

---

# Project Structures

```
todos/
  public/
    index.html
  src/
    components/
      layout/
        footer/
        header/
        Layout.scss
        Layout.tsx
      todo/
        todo-display/       # display-mode of To-Do item
        todo-input/         # input-mode of To-Do item
        Todo.scss
        Todo.tsx
    models/
      Todo.ts
    pages/
      todos/
        index.tsx
        Todos.scss
    routes/
      index.tsx
    store/
      contexts/
        TodoContext.tsx     # management of To-Do State
    types/
      index.d.ts
      shape.d.ts
    utilities/
      datetime.ts
      index.ts
      storage.ts
    App.css
    App.tsx
    index.css
    index.tsx
  .gitignore
  package.json
  README.md
  tsconfig.json
```

---

# Installation and Execution

> Clone this git repo to your local machine using `https://github.com/s2junn/todos.git`

```
> git clone https://github.com/s2junn/todos.git
```

> install dependencies.
>
> In the project directory, you can run:

```
> npm i

// or

> yarn
```

> You can then run follwing scripts for local development

```
> npm run start

// or

> yarn start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

# Language Support

- Korean

---

# License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2015 © <a href="https://s2junn.tistory.com/" target="_blank">s2junn</a>.
