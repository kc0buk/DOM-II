# DOM II - Event Exploration

Fun Bus wants you to make their site more interactive. They are relying on you to provide 10 unique events to enhance their site. Explore the many events available to you by using the [MDN events reference](https://developer.mozilla.org/en-US/docs/Web/Events).

## Set Up The Project With Git

**Follow these steps to set up and work on your project:**

* [x] Create a forked copy of this project.
* [x] Add your project manager as collaborator on Github.
* [x] Clone your OWN version of the repository (Not Lambda's by mistake!).
* [x] Create a new branch: git checkout -b `<firstName-lastName>`.
* [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
* [ ] Push commits: git push origin `<firstName-lastName>`.

**Follow these steps for completing your project.**

* [x] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` (student's  Repo). **Please don't merge your own pull request** (https://github.com/kc0buk/DOM-II/pull/1)
* [ ] Add your project manager as a reviewer on the pull-request
* [ ] Your project manager will count the project as complete by merging the branch back into `main` branch.

## Task 1: Launch the project with npm

* [x] Navigate to the root of the project with your command line.
* [x] Run `npm install` to download any dependencies listed in the `package.json` file.
* [x] Run `npm start` to compile your project and launch a development server.
* [x] Navigate Chrome to the URL indicated in the output of the `npm start` command.

## Task 2: Create Unique Event Listeners

* [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use:
* [x] `mouseover`
* [x] `keydown`
* [ ] `wheel`
* [ ] `drag / drop`
* [ ] `load`
* [ ] `focus`
* [ ] `resize`
* [x] `scroll`
* [ ] `select`
* [x] `dblclick`

Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

* [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
* [ ] Stop the navigation items from refreshing the page by using `preventDefault()`

## Stretch Task

* [ ] Go look at [GSAP](https://greensock.com/) and implement the animations found in that library with your custom events.

## Stretch assignment

* [ ] Take a look at the [stretch assignment](stretch-assignment) and follow the instructions in the read me file.
