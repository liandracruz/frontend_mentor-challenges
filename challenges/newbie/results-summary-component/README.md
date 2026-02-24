# Frontend Mentor - Results summary component solution

This is my solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV).

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### Screenshot

![Desktop version](design\screenshot-desktop.png)
![Mobile version](design\screenshot-mobile.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [](https://liandracruz.github.io/frontend_mentor-challenges/challenges/newbie/results-summary-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Media Queries
- Mobile-first workflow
- JSON

### What I learned

The most challenging part of this project was for sure the use of the JSON file to populate the content, I’m currently a beginner on JavaScript which made the whole process not just very difficult but extremely exciting as well. I chose to prioritize the HTML and CSS at the beginning of the challenge by adding the data directly on the HTML so I could style the whole page first and then later add JSON to the project. It was a very good opportunity not just to test my logical thinking process but also to learn how to use AI to help me in a proper way.

```js
 const summaryContainer = document.getElementById('summary-items-container')

      fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(item => {
          const itemHTML = `
          <div class="summary-scores" id="${item.category.toLowerCase()}">
            <div class="score-label">
              <img src="${item.icon}" alt="${item.category} icon>">
              <span>${item.category}</span>
            </div>
          <p class="score-value"><strong>${item.score}</strong> / 100</p>
          </div>`

          summaryContainer.innerHTML += itemHTML
        })
      })
      .catch(error => console.error('Error loading the JSON:', error))
```

### Continued development

My main focus at this moment is on JavaScript. This project showed me that I need to improve my knowledge not just in the language itself but also on my logical thinking skills.

### AI Collaboration

I have used Google Gemini throughout this challenge to help me make adjustments on the CSS in order to make the project more responsive for bigger screens, and also to generate the JavaScript code in a proper way to apply the JSON file on the project. 


## Author

- Linkedin - [Liandra Cruz](www.linkedin.com/in/liandra-cruz-971a32350)
- GitHub - [Liandra Cruz](https://github.com/liandracruz)
- Frontend Mentor - [@liandracruz](https://www.frontendmentor.io/profile/liandracruz)
