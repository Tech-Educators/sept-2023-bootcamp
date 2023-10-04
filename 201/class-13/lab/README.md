# Lab: Odd Duck Products - Data Persistence

## Problem Domain

The full Odd Duck Products problem domain can be found [HERE](https://codefellows.github.io/code-201-guide/curriculum/class-11/lab/){:target="\_blank"}

## Instructions

Below are your lab requirements in a user story format. Try and think up what the feature tasks would be for each story, once you are done, or you get stuck, review the provided feature tasks to see what the actual tasks are for each story.

1. As a user, I would like my data to persistently track totals between page refreshes, so that I can keep track of the aggregate number of votes.

   - Implement local storage into your current application
   - Make sure the data persists across both browser refreshes and resets

**Hints**:

1. Store the products array into local storage as a formatted JSON string
1. Retrieve the products array from local storage and then utilize the `JSON.parse()` function. Remember, if your constructor utilizes `prototype` methods, you will have to send each item in the array back through the constructor function.

1. Run a Lighthouse Accessbility report. Make necessary updates to your application based on the report to get your score above 80.

   - Add a screenshot of your score to your README.md file.

### Stretch Goals

No additional stretch goals for this assignment

## Resources

Refer to the provided wireframe as a reference for your app

## Submission Instructions

1. When your work is complete and ready for submission, open a Pull Request from your current branch to `main`.
1. Submit the link to the above Pull Request to Canvas.
1. Add a comment to this Canvas submission with answers to the following questions.
   - How did this go, overall?
   - What observations or questions do you have about what you've learned so far?
   - How long did it take you to complete this assignment? And, before you started, how long did you think it would take you to complete this assignment?
1. Complete the merge of your current branch to `main`.
1. Once you've completed your merge, deploy your GitHub repo using [Github Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site){:target="\_blank"}. Submit the link to your deployed site for this project.
