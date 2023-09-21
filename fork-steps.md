# Git/GitHub steps for Pair Programming

When you want to work on somebody else's repository:

- Go to the other persons repository on GitHub 
- Click `Fork`
- On the next page, change no settings and just click `Create Repository`
- Click the `Code` button and copy the link
- In your terminal type `git clone` followed by the link you copied
- cd into that folder and open in in VSCode with `code .`

Now you can make changes to the code. When you are done:

- In your terminal type:
- `git add .`
- `git commit -m "Your message`
- `git push`

Now you have all your changes on your Git you can make a Pull request (put the changes from your repo onto the original repo)

- Click `Pull Requests` in the header of GitHub
- Click the `New Pull Request` button
- Don't change any settings and click `Create Pull Request`
- Then click the button that says `Create Pull Request` (that's right, it says it twice)
- Now the person who's repository was the original one can go to `Pull Requests`
- Click on the new one that has been created
- Click `Merge Pull Request` and confirm

Lastly, the original owner needs to make sure their local version is up to date, so should go to thei terminal and run `git pull`.
