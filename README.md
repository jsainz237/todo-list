# Todo List Demo 

## Description
A simple todo list web application done in [React](https://reactjs.org/) utilizing the following tools/libraries:
* [Typescript](https://www.typescriptlang.org/)
* [Styled-Components](https://styled-components.com/)
* [Redux](https://redux.js.org/)

## Design and Styling
I like to keep the designs minimal but meaningful. The design on this application was heavily inspired by Apple's design system.

## Accessibility
Although this won't be used by many people, I wanted to focus on accessibility on this application. I used Firefox Developer Edition to check all the elements on this page meet MDN Accessibility standards.

* All colors/contrast meet WCAG standards.
* All form/input elements are labeled.
* All event driven elements (input, toggle, checkbox) are accessible using only the keyboard.

## Features
### Persistance:
Each user's todo list is persisted in Local Storage so that when they revisit the webpage, their list is in the same state as they left it.

The user's dark mode preference is also persisted in local storage. If the user turns on dark mode, it will remain in dark mode when they come back.

### Responsiveness:
This application is fully responsive to the size of the screen it is displayed on.