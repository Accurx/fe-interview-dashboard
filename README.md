# Accurx Frontend Take Home Exercise

## Overview

This exercise involves building a simple React application to display and search patient data. Follow the steps below to complete each task.

## Exercises

### Part 1: Display Patient Data

Update the React application so that it fetches and displays patient data from the following endpoint:

```
https://61ba219448df2f0017e5a929.mockapi.io/api/patients
```

> [!note]
> If the endpoint above is down, please use the mock data found in `backup.json`.

Your UI should display the following patient details:

- First Name
- Last Name
- Vaccine Type
- NHS Number

Use the wireframe at the bottom of the README as a reference for your layout.

### Part 2: Implement Patient Sorting

Add a feature that sorts patients by name. The search input should both support ascending and descending.

### Part 3: Testing

You are free to add tests as you see fit. Focus on testing the core functionality of your app and be prepared to discuss your testing decisions.

The project has already been set up with [`Vitest`](https://vitest.dev/) and [`React Testing Library`](https://testing-library.com/docs/react-testing-library/intro/). You can run your tests using:

```
npm run test
```

## Commands

```
npm run install
npm run dev
npm run test
npm run lint
npm run format
```

## Designs

[Open in Figma](https://www.figma.com/design/V297Ocfr4vsG6BCUNPLkUC/Frontend-Take-home-Assessment)