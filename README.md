# Toulouse Memory

This is a website with a memory game themed by one of my cats, Toulouse. I hope you enjoy playing it!

You can find her new website [here](https://kailangen96.github.io/toulouse-memory-game/).

![Mock up of her website on different screens](https://cdn.discordapp.com/attachments/1049024982694498367/1109094845206765688/image.png)

# User Experience (UX)

## User Stories

* As a user, I want to be able to understand what the page is about at a first look.
* As a user, I want to be able to track my score and moves.
* As a user, I want to be able to challenge myself against the clock.

### Color Scheme

![Colors used](https://cdn.discordapp.com/attachments/1049024982694498367/1109096161329037423/image.png)

### Typography

* 'Bubblegum Sans' is used for the header as it is a playful font and looks engaging.
* 'Open Sans' is used for paragraphs and the table as it pairs well with the headers and is easy to read.

### Imagery

The pictures I used to create the memory game were all taken by [Hanna Kronberg](https://www.linkedin.com/in/hanna-kronberg-534a2b199/).

* The [backface](assets/images/Backface.jpg) for the cards shows his paw print in the snow of winter 2022.
  
### Overall Feel

The main objective in creating this site was to have a fun mini-game in a browser to train my JavaScript skills.

## Wireframes

The wireframe shows designs for phone, iPad/tablet and desktop displays.

* **Homepage** [wireframe](https://cdn.discordapp.com/attachments/1049024982694498367/1109098085650530375/image.png)
  
# Features

## Current Features

* All pages are fully responsive for:
  * below and to 480px: Mobile devices.
  * 481px — 768px: iPads, Tablets.
  * 769px — 1024px: Small screens, laptops.
  * 1025px — 1200px: Desktops, large screens.
  * 1201px and more — Extra large screens, TV.

* The game field is locked until the start button is pressed.
* The score board keeps track of the players score, time remaining and moves.
  * The score updates as soon as a pair is flipped.
  * The time counts down 60 seconds.
  * the moves update every time two cards are flipped.

## Upcoming Features

* The board currently doesn't shuffle on reset. This needs to be fixed soon!
* Add the possibility of starting the game by clicking a card.
* Add different difficulties.

# Technologies Used

## Languages Used

* [HTML5](https://en.wikipedia.org/wiki/HTML5)
* [CSS3](https://en.wikipedia.org/wiki/CSS)
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

## Frameworks, Libraries & Programs Used

* [Balsamiq](https://balsamiq.com/) used to create wireframes.
* [GitHub](https://github.com/) used to host repository.
* [CodeAnywhere](https://app.codeanywhere.com/) used as IDE.
* [Google Fonts](https://fonts.google.com/) used to import 'Playfair Display' & 'Lato' fonts.
* [GitHub Pages](https://pages.github.com/) used to deploy the site.
* [Lighthouse](https://developers.google.com/web/tools/lighthouse) for performance review.

# Testing

## Validating

Every day after finishing up I used the [HTML](https://validator.w3.org/) and [CSS](https://jigsaw.w3.org/css-validator/) validators to make sure I did not create errors.

### Latest validations

#### HTML

![Image of the latest HTML validation]()

latest test ~

#### CSS

![Image of the latest CSS validation]()

latest test ~

## Testing User Stories from (UX) Section

* _As a user, I want to be able to understand what the page is about at a first look._
  * The page header describes the purpose of the page immediately. The paragraph below gives a more detailed description.
* _As a user, I want to be able to track my score and moves._
  * The score board above the game field will track the score, moves and time.
* _As a user, I want to be able to challenge myself against the clock._
  * The timer inside the score board starts counting down 60 seconds to give the game a challenge.

## Further Testing

### Personal Testing

As another testing method I used the following devices:

#### Computers

* Custom Build PC 1 (screen resolution 1920x1080)
  * Google Chrome ( incl. dev. tools)
    * iPhone SE
    * iPhone XR
    * iPhone 12 Pro
    * Pixel 5
    * Samsung Galaxy S8+
    * Samsung Galaxy S20 Ultra
    * iPad Air
    * iPad Mini
    * Surface Pro 7
    * Surface Duo
    * Galaxy Fold
    * Samsung Galaxy A51/71
    * Nest Hub
    * Nest Hub Max
  * Microsoft Edge
  * Opera
  * Mozilla Firefox

#### Phones

* Huawei P20 lite
  * Google Chrome
* Samsung Galaxy S22
  * Samsung Internet

### Third-Party Testing

As one of the most useful ways to test my website I send it out to many friends and family to try out the game and collect their feedback. This way my website was not only tested on way more browsers but also on a lot of different screen sizes and I managed to gather a couple opinions about the card sizes on smaller screens for example.

### Lighthouse

After deploying my website, I used Lighthouse as a tool to check for performance or accessibility issues.

![Lighthouse results]()

latest test ~

* Performance
  * Lighthouse had no suggestions to optimize the performance of my website.
* Accessibility
  * Lighthouse had no suggestions to optimize the accessibility of my website.
* Best Practices
  * Lighthouse had no suggestions to optimize the practices of my website.
* SEO
  * Lighthouse had no suggestions to optimize the SEO of my website.

## Bugs & Fixes

* The board loaded unshuffled.
  * Instead of calling the function I used the IIFE (Immediately Invoked Function Expression) so that funcion will be immediately executed.

* On reset the board does not shuffle
  * This bug is not fixed yet!

# Deployment

## Deployment through GitHub Pages

1. Log in [GitHub](https://github.com/).
2. Open this [repository](https://github.com/KaiLangen96/video-editor-kronberg).
3. Locate the [settings](https://github.com/KaiLangen96/video-editor-kronberg/settings) cogwheel.
4. On the left hand side under "Code and automation" is the option [pages](https://github.com/KaiLangen96/video-editor-kronberg/settings/pages) located.
5. Under "Build and deployment" locate the "Branch" section.
6. Change the "None" dropdown to "main" and save.
7. After some time the site will be published and accessible.
8. The link can be found above the "Build and deployment" in the "GitHub Pages".

# Credits

## Code

* I created most of my memory game with the help of [Marina Ferreira's](https://marina-ferreira.github.io/tutorials/js/memory-game/) help. She did a great job in her videos explaining the functions!

## Media

* The pictures were all taken and edited by Hanna Kronberg.
* The model of the pictures is mostly Toulouse but in one picuture we have our second cat, Caruso.

## Special Thanks

[Code Institude](https://codeinstitute.net/), for teaching me the languages needed to create this page.

[w3schools](https://www.w3schools.com/), for so many helpful pages and tools to support learning the languages.

[Hanna Kronberg](https://www.linkedin.com/in/hanna-kronberg-534a2b199/), as the owner of both cats (together with me) and as a huge help editing the pictures.

[Coolors](https://coolors.co/636c87-657d5f-9cb097-b2c9ac-f4fcf2), helping me to create the color template used in [Color Scheme](#color-scheme).

[Antonio Rodríguez](https://www.linkedin.com/in/antonio-rodr%C3%ADguez-bb9b99b7/), as my mentor. Once again he helped me a lot getting started with the memory game and laying out a plan.
