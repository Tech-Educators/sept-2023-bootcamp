# Custom Servers with Node and Express

## Overview

In this lab assignment, you will begin building your own custom API server, which will provide data for the City Explorer front-end application. This means users will get to see not only the map, but also interesting information about the area, provided by a variety of third-party APIs that your server will manage.

## Resources

[Node JS Docs](https://nodejs.org/en/){:target="\_blank"}

[NPM JS Docs](https://docs.npmjs.com/){:target="\_blank"}

[Express JS Docs](http://expressjs.com/en/4x/api.html){:target="\_blank"}

[dotenv Docs](https://www.npmjs.com/package/dotenv){:target="\_blank"}

## Process

When available, your instructor will pair you with a partner for this lab. Review each other's code from the previous lab and plan out an approach to this lab's work on a whiteboard.

1. Do a formal code review of each person's code (10 minutes each).
   1. Open your partner's GitHub pull request on your laptop.
   1. Identify an area in the code that:
      1. you don't understand
      1. or seems overly complex
      1. or you see a way to improve
      1. or you want more information on
      1. or you really like or think is interesting
   1. Add kind comments or questions inline using the GitHub review feature.
1. Draw the web request-response cycle for the current lab tasks (about 10 minutes).
   1. Document the data flow: identify inputs and outputs for each part of the cycle.
   1. Outline the functions that support this data flow.
   1. Be sure to include these drawings in your README.md.

You will then work independently for the rest of the day, implementing your plan, coding in your own repository, submitting your own pull request.

### Workflow

- We will be using the [Trello](https://trello.com/home){:target="\_blank"} project management tool for the duration of this project.
- To maximize your experience with Trello, you should create a free Trello account by clicking on the `Sign Up` button.
- After creating an account, go to the [City Explorer Trello Board](https://trello.com/b/SxYfZwXV/module-2-city-explorer-te){:target="\_blank"}, open the "... Show Menu" link, click the "... More" link, and then click "Copy Board". Before you create it, be sure to "Change" from Private to "Public" (and click "Yes, Make Board Public") so your instructional team can see your work. Now, click "Create" to add a copy to your personal account.
- This Trello board contains all of the features required to complete this lab assignment.
- Review the user stories and analyze the feature requests and requirements in the lab.
- Within each story, note the acceptance criteria ("Given ... When ... Then...") and the checklist of feature tasks. Be careful to execute tasks in order as they are often dependencies of one another.
- Throughout the lab time, check off tasks as you complete them, and move the story cards through the workflow.

### Documentation

You must have a complete `README.md` for both your server and your website repositories.

_Your `README.md` must include:_

```md
# Project Name

**Author**: Your Name Goes Here
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview

<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

## Getting Started

<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture

<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log

<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

## Credit and Collaborations

<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
```

### Time Estimates

For each of the lab features, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

```markdown
Name of feature: **************\_\_\_\_**************

Estimate of time needed to complete: **\_**

Start time: **\_**

Finish time: **\_**

Actual time needed to complete: **\_**
```

Add this information to your README.

## Submission Instructions

1. Complete your Feature Tasks for the lab, according to the Trello cards.
1. Your lab will require 2 repositories: 1 for the Server (back-end) and 1 for the client (front-end)
1. Run your Lighthouse Accessibility report for the client, looking for a score of 65 or higher. Make adjustments as needed.
1. Create a PR back to the `main` branch of each of your repositories, showing ALL your work, and merge them cleanly.
1. On Canvas, submit a link to both PRs. Add a comment in your Canvas assignment which includes the following:
   - A link to the deployed version of your latest code.
   - A link to your public Trello board.
   - A question within the context of this lab assignment.
   - An observation about the lab assignment, or related 'Ah-hah!' moment.
   - How long you spent working on this assignment.
