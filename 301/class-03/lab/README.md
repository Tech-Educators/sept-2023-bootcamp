# Passing Functions in Props

## Resources

### Overview

For this class you will be adding a feature to your `Gallery Of Horns` that allows the user to click on an image and display it as a modal.

### Time Estimate

For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

```md
Number and name of feature: **************\_\_\_\_**************

Estimate of time needed to complete: **\_**

Start time: **\_**

Finish time: **\_**

Actual time needed to complete: **\_**
```

Add this information to your README.

### Feature #1: Display a Modal

#### Why are we implementing this feature?

- As a user, I want the image to be displayed in a larger size and with the description shown so that I can view the details of a single image.

#### What are we going to implement?

```text
Given that a user wants to view the details of the image
When the user clicks on an individual image
Then the image should render larger on the screen with the description displayed
```

#### How are we implementing it?

- Import the `data.json` file into your `App` component and send that data into the `Gallery` component
- Map over the JSON data in your `Gallery` component to render each beast
- Send a function into your `Gallery` component that allows the user to update state in the `App`
- Create a `SelectedBeast` component and include it in your `App`
- Use the state in the `App` to render an individual beast in a Modal in the `SelectedBeast` component using React Bootstrap

## Stretch Goal: Fuzzy search

#### Why are we implementing this feature?

- As a user, I want the ability to search my images so that I can view only the images containing specific titles or keywords.

#### What are we going to implement?

```text
Given that a user wants to view specific images
When the user enters a character into the search field
Then only the images matching the current set of characters should be displayed on the screen
```

#### How are we implementing it?

- Create an input element to allow users to search for an image. It is up to you to decide if the user should be able to search by title, keyword, or both.
- Write a regular expression pattern to create a fuzzy search so that the results are narrowed down and displayed every time the user enters or removes a character from the input.

## Submission Instructions

- Complete your Feature Tasks for the day
- Run your Lighthouse Accessibility report looking for a score of 65 or higher. Make adjustments as needed.
- Create a Pull Request (PR) back to the `main` branch of your repository
- On Canvas, submit a link to your PR and a link to your deployed application on Netlify.
- Add a comment in your Canvas assignment which includes the following:
  - A question within the context of this lab assignment
  - An observation about the lab assignment, or related 'Ah-hah!' moment
  - How long you spent working on this assignment
