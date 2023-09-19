# VS Code Settings

You can customise your VSCode as much as you like to make it the way you want, but here are teh things we all did together in class:

## Settings

Press `ctrl + ,` or `cmd + ,` to open setting and type in the following to update

- `editor.tabSize` should be set to 2
- `editor.detectIndentation` should be set to true
- `editor.wordWrap` should be set to "on"

A little explanation for each:

- tabSize changes the amount of spaces taken up when we press the tab to indent our code.
- detectIndentation allows VSCode to split longer lines on to a new line, so we don't need to scroll sideways
- wordWrap makes any string of characters that are wider than the screen appear on multiple lines e.g. long urls
## Extensions

Click on the 4 blocks on left and search for the following extensions. They are all optional, but might make your coding easier:

### Prettier:

<img width="524" alt="Screenshot 2023-09-19 at 09 35 09" src="https://github.com/Tech-Educators/sept-2023-bootcamp/assets/91621088/2fc56f7f-268e-4ad2-87c0-96e40c37cdc2">

This extension allows us to keep our code neat and uniform. It also has the added benefit of revealing when the is an issue with our code, when it _doesn't_ format our code. For example, if you are missing a closing </div> tag.

#### Pretter settings:
- `editor.formatOnSave` should be set to true
- `editor.defaultFormatter` should be set to Prettier Code Formatter

### Better Comments

<img width="456" alt="Screenshot 2023-09-19 at 09 34 32" src="https://github.com/Tech-Educators/sept-2023-bootcamp/assets/91621088/e2c521c3-507d-40b8-a3a7-dcdc444d6101">

Better Comments allows us to colour code our comments. The main one being comments that start with `// TODO` appear orange.

### Error Lens

<img width="412" alt="Screenshot 2023-09-19 at 09 34 43" src="https://github.com/Tech-Educators/sept-2023-bootcamp/assets/91621088/777592be-a903-47ec-85b8-a1b52865a036">

Error lens takes the errors that would normally appear in our console to tell us what is broken, and puts them right next to the error itself.

### Indent Rainbow

<img width="410" alt="Screenshot 2023-09-19 at 09 34 56" src="https://github.com/Tech-Educators/sept-2023-bootcamp/assets/91621088/fc656bb4-40ce-4994-adfa-7579b14ae968">

Indent rainbow helps us visualise the tabbing and indenting a little easier.

### VSCode Icons

<img width="388" alt="Screenshot 2023-09-19 at 09 35 24" src="https://github.com/Tech-Educators/sept-2023-bootcamp/assets/91621088/eedd7fb3-86a2-4aab-b596-aa569469d37b">

VSCode Icons changes the icons in the file explorer depending on the name of the file or directory. This helps us find the file we are looking for a little faster.

#### VSCode Icons settings:
- `workbench.iconTheme` should be set to vscode-icons
