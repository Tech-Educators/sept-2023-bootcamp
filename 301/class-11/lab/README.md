# Building CRUD apps with MongoDB

## Overview - Can of Books App

Books are life-changing. They have the power to enlighten, educate, entertain, heal, and help us grow. Throughout this module, you'll create a small app to track what books have impacted you, and what's recommended to read next.

Web applications essentially all work by managing data related to "resources". The resources that an app cares about can be just about anything: a product for sale, an uploaded photo, a review, a bit of weather data... whatever it is that gets stored in a database. When the app provides the interface to create, read, update, and delete a resource, we refer to that as a CRUD app. Over the next few labs, you will build an app that has books as a resource.

For this assignment, you will READ book data by connecting your front-end React app to a back-end Express server. Your Express server will connect to a MongoDB database. You will need to make a "schema" in your back-end code to model how you want your data to look. You will then populate your database with "seed" data—some of your favorite books. When the front end makes a request to your server, your server will query the database and respond with all of the results from the database. Your front end will display these results.

## Process: Professional Pairing Practice

Much of the work you will be doing in the industry will be in pairs. When available, you will work with the same partner all module on this book app project.

When working with a partner, take at least 30 minutes to make a team agreement before starting on the assignment. This is an essential step to ensure a peaceful and productive module. You MUST answer the following questions in your agreement and include it in your README's "Collaboration" section:

### Logistical

- What hours will you be available to communicate?
- What platform will you use to communicate (ie. Slack, phone ...)?
- How often will you take breaks?
- What is your plan if you start to fall behind?

### Cooperative

- Make a list of each parson's strengths.
- How can you best utilize these strengths in the development of your application?
- In what areas do you each want to develop greater strength?
- Knowing that every person in your team needs to understand the code, how do you plan to approach the day-to-day development?

### Conflict Resolution

- What will your team do if one person is pulling all the weight while the other person is not contributing?
- What will your team do if one person is taking over the project and not letting the other member contribute?
- How will you approach each other and the challenge of building an application knowing that it is impossible for two people to be at the exact same place in understanding and skill level?

## Feature Tasks — READ of CRUD

Tasks for this lab are tracked in user stories on a Trello board.

Your instructor will supply you with a link to the Trello board for you to copy (see instructions below).

## Workflow

- We will be using the [Trello](https://trello.com/home){:target="\_blank"} project management tool for the duration of this project.
- After signing in to your account, go to the [Can of Books Trello board](https://trello.com/b/dR5mrHFl/module-3-can-of-books-te){:target="\_blank"}
- Open the "... Show Menu" link, click the "... More" link, and then click "Copy Board".
- Before you create it, be sure to "Change" from Private to "Public" (and click "Yes, Make Board Public") so your instructional team can see your work. Now, click "Create" to add a copy to your personal account.
- This Trello board contains all of the features required to complete each lab assignment.
- Review the user stories and analyze the feature requests and requirements in the lab.
- Within each story, note the acceptance criteria ("Given ... When ... Then...") and the checklist of feature tasks. Be careful to execute tasks in order as they are often dependencies of one another.
- Throughout the lab time, check off tasks as you complete them, and move the story cards through the workflow.

## Documentation

You must have a complete `README.md` for your repository.

_Your `README.md` must include:_

```md
# Project Name

**Author**: Team Member Names Goes Here
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

## Estimates

<!-- See below -->

## Credit and Collaborations

<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
```

## Time Estimates

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
1. Create a PR back to the `main` branch of your repository, showing ALL your work, and merge it cleanly.
1. Run your Lighthouse Accessibility report for the client, looking for a score of 65 or higher. Make adjustments as needed.
1. On Canvas, submit a link to your PR. Add a comment in your Canvas assignment which includes the following:
   - A link to the deployed version of your latest code.
   - A link to your public Trello board.
   - A question within the context of this lab assignment.
   - An observation about the lab assignment, or related 'Ah-hah!' moment.
   - How long you spent working on this assignment.
