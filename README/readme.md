**One Letter Answer JavaScript Quiz**

**Features**

This quiz was one of many, many quizzes I devised for weekly family quiz (Sunday, 7pm) we had during lockdown, over Zoom. By their very nature, none of the quizzes were multiple choice, or if they were (a Mandel Effect quiz for example) the choices were binary. 

![](Aspose.Words.73f814c0-d377-467d-8302-fbaa39984898.001.png)

It made best sense to go for a Who Wants To Be A Millionaire inspired 4 options. The single letter answer quiz seemed nest – originally the participants were choosing from 26 letters, rather than 4. 



![](Aspose.Words.73f814c0-d377-467d-8302-fbaa39984898.002.png)**Existing Features**

All pictures, questions, answer options and the correct answer are all stored in an array in the JavaScript. 

- The question
  - This consists of two parts – the actual worded question, and above it the picture to which the question refers. 
  - Both picture and text are simply changed with JavaScript each time the “Next” button is clicked. 
- ![](Aspose.Words.73f814c0-d377-467d-8302-fbaa39984898.003.png)The Answer options
  - These are similarly loaded each time a new question is loaded. 
  - The JavaScript looks to compare the answer clicked with the correct answer which is stored n the Array of questions.  
  - The Answer buttons do not appear on the first page, but they are in the HTML – to make styling them with CSS easier. 
  - ![](Aspose.Words.73f814c0-d377-467d-8302-fbaa39984898.004.png)An answer button being clicked is necessary to Enable the Next button, which is Disabled until then. 
- The Score and Next button
  - These remain reasonably constant throughout the quiz – only the score changes as the user clicks answers. 
  - ![](Aspose.Words.73f814c0-d377-467d-8302-fbaa39984898.005.png)The Next button caused some fun:
    - I needed the button to say Start when the page loads, and Restart on the last page. The former was far easier to achieve than the latter.  
    - ![](Aspose.Words.73f814c0-d377-467d-8302-fbaa39984898.006.png)The Next button is disabled on every question page until an answer has been clicked.

**Features Left to Implement**

- The answer button :hover feature stopped working when a new question was loaded. To overcome this I used !important in the CSS. Unfortunately this means on a mobile device the RED/Green color change for a wrong/right answer clicked does not become visible until the user is no longer hovering on their answer. This isn’t the end of the world as they have to move the mouse to click the Next button. 



- Likewise :hover doesn’t work on mobile devices, as there is no “mouse pointer”

**Testing**

This was a fairly arduous process. Specifically finalising the Quiz. 

I built it in the order the user would experience it in, and wanted the JS to work before I did what I considered the “finishing touches”. One such touch was the last page; where the user score is revealed and the option to restart the Quiz is given. In order to test I had to click through the whole quiz, every time. This, sometimes, meant hours. I remember the Restart button was disabled all the time as dictated in the JS, until I managed to Enable it. 

**Validator Testing**

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css)
- JavaScript 
  - As I found out to my cost, many times, if there are any JavaScript errors, generally the whole thing stops working. 

**Unfixed Bugs**

I can see no blatant bugs, but there are some design features mentioned previously. 

Notably the color changing when buttons are hovered over or clicked.  I am currently unable to make the CSS and JavaScript work exactly as I wish. 

**Deployment**

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub)

The live link can be found here - [**https://bombshelltom.github.io/JavaScriptQuiz/**](https://bombshelltom.github.io/JavaScriptQuiz/)

**Credits**

All photos were sourced from Google, over two years ago. The flag related questions I “made” myself in Microsoft paint.

I used no code copied and pasted from any other sources. Many times I found myself Googling script lines to make certain things happen, but I always typed and implemented it myself. 
