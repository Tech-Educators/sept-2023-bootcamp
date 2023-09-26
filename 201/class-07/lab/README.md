# Lab: Salmon Cookies Pt. 2

## Problem Domain

[Pat's Salmon Cookies](https://github.com/codefellows/code-201-guide/blob/main/curriculum/class-06/lab/README.md){:target="_blank"} problem domain can be found here!

## Instructions

1. Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the 'new' keyword, it creates a new instance.

1. Replace the lists of your data for each store and  build a single table of data instead. It should look similar to the following:

    Display each stores data in a table format similar to what is below. Break each column by the hour and  complete each row with a "Daily Location Total".

|         | 6:00am | 7:00am | 8:00am | 9:00am | 10:00am | 11:00am | 12:00pm | 1:00pm | 2:00pm | 3:00pm | 4:00pm | 5:00pm | 6:00pm | 7:00pm | Daily Location Total |
| ------- | ------ | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | -------------------- |
| Seattle |        |        |        |        |         |         |         |        |        |        |        |        |        |        |
| Tokyo   |        |        |        |        |         |         |         |        |        |        |        |        |        |        |
| Dubai   |        |        |        |        |         |         |         |        |        |        |        |        |        |        |
| Paris   |        |        |        |        |         |         |         |        |        |        |        |        |        |        |
| Lima    |        |        |        |        |         |         |         |        |        |        |        |        |        |        |
| Totals  |        |        |        |        |         |         |         |        |        |        |        |        |        |        |

1. Each cookie stand location should have a separate `render()`` method that creates and appends its row to the table
1. The header row and footer row are each created in their own stand-alone function
   > NOTE: Please use a header cell for both the header row ( containing store hours ), and the footer row ( hourly and grand totals across all stores ).

### Stretch Goals

- Continue to work on design aspects of the public-facing page.
- Run a Lighthouse Accessibility report looking for a score between 65-80. Make necessary improvements to your site to get into that range. Add a screenshot of your score to your README.md.
- Make a style guide, using either [Starbucks React Components Pattern Library](https://www.starbucks.com/developer/pattern-library/guidelines/) or [Starbucks - High level Guide](https://creative.starbucks.com/) as a model.
- Create a second table that will help Pat manage staffing. Using the basic rubric that single Salmon Cookie Tosser can serve 20 customers per hour, and that each location should have a minimum of two Salmon Cookie Tossers on shift at all times, calculate how many Salmon Cookie Tossers are needed at each location each hour.
- Research into Pat's customer traffic has shown that the hours of 8am, 11am, and 3pm tend to have more customers than other hours, and that the hours with the least customers are 1pm and 6pm. Apply a control curve to the projected sales numbers to reflect those daily ebbs and flows. The following array represents the percentage of maximum traffic that occurs during each of the hours from 6am to 8pm, and can be used to scale the projected hourly customer traffic into more accurate values:

`[0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6]`

### Developer Style Guide

In addition to the requirements listed above, please ensure that your project also contains the following according to our style guide:

- Good use of a constructor function; style and syntax are correctly implemented
- Duplicate code has been removed and DRY principles are evident
- Working on a non-main branch for the day, with regular commit history. Basically, every time you get something to work, you should do a commit. But you only need to push every couple of hours or so, tops.

## Resources

No additional resources are required for this lab. Utilize your demo code and

## Submission Instructions

- Submit the link to your GitHub repo for this project.
- Deploy your GitHub repo using [Github Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site){:target="_blank"}. Submit the link to your deployed site for this project.
- Add a comment to this Canvas submission with answers to the following questions
  - How did this go, overall?
  - What observations or questions do you have about what you've learned so far?
  - How long did it take you to complete this assignment? And, before you started, how long did you think it would take you to complete this assignment?