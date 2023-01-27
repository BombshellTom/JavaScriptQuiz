**One Letter Answer JavaScript Quiz**

**Features**

This quiz was one of many, many quizzes I devised for weekly family quiz (Sunday, 7pm) we had during lockdown, over Zoom. By their very nature, none of the quizzes were multiple choice, or if they were (a Mandel Effect quiz for example) the choices were binary. 

![](Aspose.Words.6981b64c-bd06-48cf-8e20-9ef2f9e4a3d8.001.png)It made best sense to go for a Who Wants To Be A Millionaire inspired 4 options. The single letter answer quiz seemed necessary – originally the participants were choosing from 26 letters, rather than 4. 





**Existing Features**

![](Aspose.Words.6981b64c-bd06-48cf-8e20-9ef2f9e4a3d8.002.png)All pictures, questions, answer options and the correct answer are all stored in an array in the JavaScript. 





- The question
  - This consists of two parts – the actual worded question, and above it the picture to which the question refers. 
  - Both picture and text are simply changed with JavaScript each time the “Next” button is clicked. 

![](Aspose.Words.6981b64c-bd06-48cf-8e20-9ef2f9e4a3d8.003.png)





- The Answer options
  - These are similarly loaded each time a new question is loaded. 
  - The JavaScript looks to compare the answer clicked with the correct answer which is stored n the Array of questions.  
  - The Answer buttons do not appear on the first page, but they are in the HTML – to make styling them with CSS easier. 
  - ![](Aspose.Words.6981b64c-bd06-48cf-8e20-9ef2f9e4a3d8.004.png)An answer button being clicked is necessary to Enable the Next button, which is Disabled until then. 
- The Score and Next button
  - These remain reasonably constant throughout the quiz – only the score changes as the user clicks answers. 
  - ![](Aspose.Words.6981b64c-bd06-48cf-8e20-9ef2f9e4a3d8.005.png)The Next button caused some fun:
    - I needed the button to say Start when the page loads, and Restart on the last page. The former was far easier to achieve than the latter.  
    - ![](Aspose.Words.6981b64c-bd06-48cf-8e20-9ef2f9e4a3d8.006.png)The Next button is disabled on every question page until an answer has been clicked.
- Quiz layout
- The basic layout: A question placed above four answers, two on each line is entirely taken from Who Wants To Be A Millionaire. The mobile version has them in one column for aesthetics. 
  - This is a very specific Quiz. I remember it was fairly time consuming finding 10 questions that had 1 letter answers AND did not exhaust the format of the Quiz
    - For example I could write dozens of Questions about identifying countries by number plates. But after a while, if it is not your area of expertise it becomes solely a Geography/Flag quiz
    - By incorporating a gimme (What Is Mariah Carey, a known egocentric diva, likely to have named her perfume after? Herself. And it is one letter…), some film trivia (I am a massive James Bond fan) and some science – I feel like I covered a lot of bases. 
- Font choices
  - I have a “go-to” selection of fonts I choose from, admittedly most of them I have discovered by watching other people build websites, either on YouTube or through this course, and when I find one that I, and they, like, I assume it is good enough for me. 
  - These are always sourced from Google fonts: https://fonts.google.com/
    - ![](Aspose.Words.6981b64c-bd06-48cf-8e20-9ef2f9e4a3d8.007.png)My usual list of basic fonts, that I can then change the size, and exact aesthetics of are: Montserrat, Roboto, Open Sans and Lato
- Color scheme 
  - All my color schemes are selected using the website Color Hunt: 
  - It is a vast selection of colors, put together in groups of 4 that work with each other 
  - You can select a theme down the side – autumn, Gold, warm, Happy, Space etc… 
- I had in my mind that the constant section of the page, throughout the Quiz would be the bottom “box”, the one containing the score and Next button
- I remember thinking because it is there all the time, it needs to be palatable on the eye… I remembered solicitors, or lawyers, use “legal pads” which are yellow. Is this easier on the eye, I don’t know, but it influenced my decision here.
- From there I had to find a nice shade of yellow, and then used the other three colors in the scheme where fit. 
- A wrong answer makes the button turn a generic, bright, somewhat garish RED
- A correct answer makes the button turn a generic bright, pleasing GREEN
- The :hover is simply a darker version of the original color – I googled the Hex code and asked for a slightly darker version. This applies to the answer boxes and the Start/Next/Restart button

**Features Left to Implement**

- The answer button :hover feature stopped working when a new question was loaded. To overcome this I used !important in the CSS. Unfortunately this means on a mobile device the RED/Green color change for a wrong/right answer clicked does not become visible until the user is no longer hovering on their answer. 
  - This isn’t the end of the world as I was able to add an Alert notification to pop up, forcing the user to move the mouse, to click “OK” in order to progress the quiz. 
- Likewise :hover doesn’t work on mobile devices, as there is no “mouse pointer” to hover
- It would be nice to have had a greater selection of questions, or for them to appear in random order. But I do not know how to do that, and I am actually perfectly happy with it as it is. 
  - It is a 10 question quiz, it isn’t a video game. Replayability was not high on my agenda; originally the quiz was read out once over Zoom, and then we all moved on to someone else’s round
  - In my mind this would be one of many quizzes I would keep on a website somewhere, and you can click “1 Letter Answers” quiz, and have a go at it to pass time on your lunch break, or to test a friend whilst you’re on the on the train
    - If I were I to monetise my quiz making, I would have to make significant and vast improvements and changes
    - Likewise if I built this as one quiz in a library of quizzes, I would add more questions or randomize the order – or both

**Testing**

This was a fairly arduous process. Specifically finalising the Quiz. 

I also made extensive use of console.log in the development. 

Every command I gave the JS to do something, I had a console.log print, telling me what they had done. When the script first worked, fully, from start the finish, each question, as it was answered printed the following:

The user selected…

The correct answer is….

The user is correct/incorrect. 

The user correct score is currently…

Likewise, I had it log “Loaded” when the page was initialised, so I knew we were ready to go. 

Once I felt I had completed something I wanted to test, I would load up the webpage and start quizzing. I could open the console on the right hand side of my screen and track what the JS doing click by click of my mouse. 

I built it in the order the user would experience it in; I made the first page in HTML, and then set about designing that with CSS. Finally I started to add JS to manipulate the html and css. For example the boxes to contain the answer exist in the HTML, but they are not displayed when the website loads. 

One downside of this chronological technique was that the last page was the last one I came to edit with JS. So, in order to check its functionality I had to click through, right or wrong, all 10 questions to get to the last page. 

I remember, as dictated by the JS, the “Next/Start” button is labelled “Restart” on the last page, that reveals the user score. However it is also disabled as a default. This took me hours to debug. It involved moving a line of code down about 20 lines to fix it.  

**Validator Testing**

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css)
- JavaScript 
  - As I found out to my cost, many times, if there are any JavaScript errors, generally the whole thing stops working. 

**Unfixed Bugs**

I can see no obvious bugs, but there are some design features mentioned previously that I was unable to work around. 

Notably the color changing when buttons are hovered over or clicked.  I am currently unable to make the CSS and JavaScript work exactly as I wish. 

**Deployment**

The live link can be found here - [**https://bombshelltom.github.io/JavaScriptQuiz/**](https://bombshelltom.github.io/JavaScriptQuiz/)

The site was deployed to “GitHub pages”.

This is done, by loading up my BombshellTom repository for the project, and above to the right is a Settings button. 

In settings, down the left hand side, under “Code and Automation” is a “Pages” option.  

From the source section drop-down menu, I selected the Master Branch.

Once the master branch has been selected, the page refreshed automatically, and presented me with a web address to access my site. 

**Credits**

All photos were sourced from Google, over two years ago. The flag related questions I “made” myself in Microsoft paint.

The questions, the images, the wording and the choice of answers were all the creation in my own head. 

Many times I would Google questions I had. I learnt to refine my searches in order to target more specific needs. Sometimes it helped to include the JS Code I was unsure of, and 9/10 someone else has had a similar issue. I was able to read through the solutions presented by other internet users and apply it to my code. 

For example I had no idea about the .disable property for buttons; I learnt that entirely from peoples answers on, and sites similar too, StackOverflow.com that the Google search turned up for me. At this point I did not copy anyone’s code, I used what I had learnt and applied it myself. For example learning about the .disabled function and then applying to my code.  

