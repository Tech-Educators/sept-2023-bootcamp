# Problem Domain

The Aunby Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

## what would you like to have as features?

### required features

- i would go there, type in the kitten's name, age
- create a narrative of who this kitten is - personality, likes, etc.
- breed
- good with kids/dogs/other cats
- picture(s) - one at minimum, more is nice

### nice to have

- what their story is
- notes from the foster human
- health history
- videos
- animated gif
- social media links - linkedIn profile
- blink tag

## user scenario

Jose is a volunteer for Aunby Kitten Rescue. He has some level of comfort with a browser and copying/pasting/saving/uploading/etc. He navigates to the enter a kitten form and enters the above info in a form box. When he clicks the "submit" button, the kitten's profile is displayed on the page.

### out of scope

removing kittens from the site
videos, health history, foster notes, social media, blink tag

## user stories

1. As a volunteer for Aunby Kitten Rescue, I want to have kitten bios show up on the page without having to write html myself, so that my workload is lessened. I will know this is done when I can hard-code a kitten bio in JavaScript and that kitten's bio is rendered on the page.

1. As a volunteer, I want to enter the kitten's data into a form, and have that kitten's specific profile automatically show up on the page, so that my workload is lessened. I will know this is done when I can enter kitten data into a form, and that kitten's bio shows up on the page

1. As the web services manager for Seattle Kitten Rescue, I want the code for the bio generation to be written in plain-vanilla JavaScript, so that it can be easily maintained. I will know this is done when I can look at a JavaScript file for the site, and see it written in ES5, with no use of libraries or frameworks.
