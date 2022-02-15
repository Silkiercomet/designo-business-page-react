# Frontend Mentor - Designo landing page

This is a solution to the [Designo multi-page website](https://www.frontendmentor.io/challenges/designo-multipage-website-G48K6rfUT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Your challenge is to build out this multi-page website and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

View the optimal layout for each page depending on their device's screen size
See hover states for all interactive elements throughout the site
Receive an error message when the contact form is submitted if:
The Name, Email Address or Your Message fields are empty should show "Can't be empty"
The Email Address is not formatted correctly should show "Please use a valid email address"
Bonus: View actual locations on the locations page maps (we recommend Leaflet JS for this)
Download the project and go through the README.md file. This will provide further details about the project and help you get set up.

Want some support on the challenge? Join our Slack community and ask questions in the help channel.

### Screenshot

![Designo Page](./Screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://github.com/Silkiercomet/designo-business-page-react)
- Live Site URL: [Add live site URL here](https://silkiercomet.github.io/designo-business-page-react)

## My process

### Built with

- JSX
- CSS custom module properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [react hook form](https://react-hook-form.com/get-started/) 
- [react route](https://v5.reactrouter.com/web/guides/quick-start) 


### What I learned

this was my first react "Multi-Page" website, thats kind of a contradiction isn't it? after all react is a single page library, well thanks to the react-route-dom library we can simulate this behavior with the use of his routes we can let the user select the content thats gonna be show on the screen, but under the hood we are still using a single-page app 

To see how you can add code snippets, see below:

```jsx
<BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Company" element={<Company />} />
            <Route
              path="AppDesign"
              element={<ShowProjects {...DesignPagesContent[1]} />}
            />
            <Route path="Contact" element={<Contact />} />
            <Route
              path="WebDesign"
              element={<ShowProjects {...DesignPagesContent[0]} />}
            />
            <Route
              path="GraphDesign"
              element={<ShowProjects {...DesignPagesContent[2]} />}
            />

            <Route path="Location" element={<Location />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
```

### Continued development

i'm looking foward to upgrade the location component to actually show the real location of the offices using the leaf API


## Author

- Frontend Mentor - [@Comet466](https://www.frontendmentor.io/profile/Comet466)

