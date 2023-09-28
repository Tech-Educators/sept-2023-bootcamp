# Assignment Overview

Read the document in its entirety before beginning your lab.

## Problem Domain

[Pat's Salmon Cookies](https://codefellows.github.io/code-201-guide/curriculum/class-06/lab/){:target="_blank"} problem domain can be found here!

## Instructions

Today you will be adding a form to your existing cookie stand project so that you can add new locations to the table by simply inputting their information with the form.

- Create a new HTML form to accept the information for a new cookie stand. Be sure to utulize the `<fieldset>` tag to help you style it.

- Upon submission of the HTML form, create an event handler that creates a new instance of a cookie stand that appends to the table upon form submission.

- Use the constructor function as your guide to determine what input fields your form needs (hint: also consider what is passed in when creating instances!).

- If not complete from lab 7, write a stand-alone function to generate a footer row which will display the total number of cookies sold per hour for all locations. When a new store is added using your form, the totals in the footer row should update to include these new sales numbers.
    > HINT: The document.querySelectorAll() method might be useful when re-rendering your footer row [Document.querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll).

- Run your Lighthouse Accessibility report looking for a score between 65-80. Make adjustments as needed. Add a screenshot of your score to your README.md.

- Anywhere you have repeated chunks of code, apply some DRY principles. Generally, once some chunk of code is appearing for a 3rd time or so, that's when you want to consider refactoring.

- Validate your html through [HTML5 validation](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation).

- Confirm that your code is following the single responsibility rule. Each function should only do one thing, with the capability to break it out further as needed.

## Stretch Goals

- Give your input form functionality to update the data for a location that is already in the table. This is going to require some additional pieces, such as:
  - Some kind of `if` statement to test whether the inputted cookie stand location name matches one that is already in the table (or other mechanism to indicate which location to update)
  - The new input numbers need to be run through the calculation methods as with the original creation of the instances

## Resources

No additional resources for today's lab.

## Submission Instructions

- Submit the link to your PR for your branch  GitHub repo for this project.
- Deploy your GitHub repo using [Github Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site){:target="_blank"}. Submit the link to your deployed site for this project.
- Add a comment to this Canvas submission with answers to the following questions
  - How did this go, overall?
  - What observations or questions do you have about what you've learned so far?
  - How long did it take you to complete this assignment? And, before you started, how long did you think it would take you to complete this assignment?