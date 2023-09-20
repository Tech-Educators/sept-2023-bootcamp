# Lab: Extend the "About Me" project

Read the document in its entirety before beginning your lab.

## Problem Domain

Teach us more about you! Build out an "About Me" webpage that quizzes the user on fun facts gives the user some basic information about who you are and where you came from. We will build onto this project over the next few labs. Be prepared to refactor your code each day and learn about how a web site incramentally goes from an idea to a deployed site through various iterations of development.

## User Stories

Within the industry, you will encounter different ways that requirements are communicated to developers. This technique is called User Stories. User Stories are presented in the manner of

> As a **\_**, I want **\_**, so that\_\_\_

This layout allows a client to communicate to a team what type of behavior they are looking for and allow the developer team to think up a solution that best fits the the clients need.

The development team will then create sub-bullets called _**Feature Tasks**_ which are individual tasks that must be completed by the developer to accomplish the user story. Once all of the feature tasks for an individual user story is completed, so is the story.

Below are your lab requirements in this format with the feature tasks already created.

## Instructions

Continue to build off of your lab 02 by adding additional functionality to your About Me Guessing Game. Work in the same repository as you did for Lab 2, and modify your README.md file to describe your project with the new features you are adding.

1. As a user, I would like to view a series of data related to the site owners interest so that the I can quickly view more information about them.

   - Create a "Top Ten" at the bottom of your HTML page as an ordered list in HTML. Some ideas that you can include could be top ten movies, top ten favorite places, or top ten places to visit. You may choose to do whatever top ten list that you wish.
   - Convert your work experience and education summary into an unordered list using HTML

1. As a user, I would like to be guided to an answer through a series of feedback responses so that I can learn more about the site owner.

   - Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
   - Indicates through an alert if the guess is "too high" or "too low".
   - It should give the user exactly four opportunities to get the correct answer.
   - After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

1. As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.

   - Add a 7th question that has multiple possible correct answers that are stored in an array.
   - Give the user 6 attempts to guess the correct answer.
   - The guesses will end once the user guesses a correct answer or they run out of attempts.
   - Display all the possible correct answers to the user.
   - Consider using a loop of some sort for this question.

1. As a user, I would like to know my final score so that I can know how well I did.

   - Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.

1. Using Lighthouse in the Chrome DevTools, analyze the accessibility of your application.

   - Strive for a score between 50-65. Make necessary adjustments based on the report to achieve that score.
   - Add a screenshot of your score to your README.md file.

In addition to the user stories stated above, continue to use console.logs throughout the code to track the questions that are being asked to the user, and add addtional CSS to style your HTML page.

Stay within scope of what was taught so far in class. Do not write functions within your application. Avoid the use of "helper" methods such as `.includes()` and `.join()`. Work with the instructional staff directly if you have questions about this requirement.

### Stretch Goals

After completing all of the requirements listed above, you may optionally challenge yourself further by implementing some or all of the following into your application.

- Attempt to make your code more DRY by putting all of the questions, answers, and responses to the first five yes/no questions into arrays (or even one huge multidimensional array), and modifying the game logic such that a 'for' loop will control the flow from question to question.
- Make the number-guessing question use a random number as its correct answer.

## Resources

Utilize the same resources as described in Lab 02.

## Submission Instructions

- Submit the link to your GitHub repo for this project
- Add a comment to this Canvas submission with answers to the following questions
  - How did this go, overall?
  - What observations or questions do you have about what you've learned so far?
  - How long did it take you to complete this assignment? And, before you started, how long did you think it would take you to complete this assignment?
