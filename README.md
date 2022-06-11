# To Do List

## Story

You've always though that the system at work place sucks.
Anybody knows which task do who, there are just a few post-its that show a few tasks.
That's why your team head decided that you have the job to make an online todo app,
which helps the team get the work together.

## What are you going to learn?

- for loops
- if statements
- dom manipulation

## Tasks

1. When the user click on the `Add` button a new task is added with the label from the input box next to it
    - Writing `buy milk` in the input box and pressing the `Add` button introduces a new task with the  label `buy milk` (and also the `done` button)
    - After adding a new task, the contents of the input box are cleared 
    - If there is no text typed in the input box then pressing the `Add` button will not create a new task

2. A task state can be toggled to `done` or `not done`
    - Pressing the `done` button associated to that task will change it's color to green 
    - Pressing the `done` button associated to that task will change it's label to `not done`
    - Pressing the `not done` button associated to that task will change it's label to `done`
    - Pressing the `not done` button associated to that task will remove it's green color
    - If there are 2 tasks, pressing the `done` button will only complete the task to which the button  is linked to

3. Pressing the `Complete all` button will set all tasks to done
    - If there are 2 not done tasks pressing the `Complete all` button will make them green and their  associated buttons will be have the label `not done`
    - After making all tasks done, pressing the button `not done` for a task will change it's state to not  done (remove green color and the button label will change to `done`)

4. Whenever the user types into the filter input only the tasks which have into their name the typed input will  be shown
    - When there are 2 tasks (`buy milk` and `fix car`), typing `buy` in the filter box will only display the  `buy milk` task
    - When the filter box is empty all the tasks are shown
    - When only a part of the tasks are shown, pressing on the `done` / `not done` button will update it's  state accordingly
    - Filtering for tasks still maintains their status (`done` or `not done`)

## General requirements

None

## Hints

- when filtering the tasks you can set the style for tasks which do not contain the required string to `display: none`
- when you create a `click` event listener you can access the html element (and it's children) through the `event.target`

## Background materials

- <i class="far fa-exclamation"></i> [JavaScript Tutorial For Beginners videos](https://www.youtube.com/watch?v=qoSksQ4s_hg&list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET)
- <i class="far fa-book-open"></i> [Article on "How to get started with web development"](https://dev.to/fabcodingzest/how-to-get-started-with-web-development-front-end-part-1-5c6h)
- SoloLearn's [JS tutorial](https://www.sololearn.com/Play/JavaScript)
- [javascript.info](https://javascript.info/)
- If you see yourself more like a cat person, don't miss [JSForCats](http://jsforcats.com)

