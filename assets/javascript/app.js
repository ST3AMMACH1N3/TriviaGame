$(document).ready(function() {
    //------Create an array of question objects
    //Add a question string
    //Add 3 incorrect answer strings
    //Add 1 correct answer string
    let questions = [
        {question: "What year was SpaceX founded?",
         incorrect: ["1998", "2007", "2010"],
         correct: "2002"
        },
        {question: "How many engines are on a falcon heavy?",
         incorrect: ["15", "21", "31"],
         correct: "27"
        },
        {question: "Who is the richest man in the world?",
         incorrect: ["Bill Gates", "Elon Musk", "Warren Buffet"],
         correct: "Jeff Bezos"
        },
        {question: "How long was the Curiousity rover planned to last?",
         incorrect: ["4 years", "6 years", "8 years"],
         correct: "2 years"
        },
        {question: "How high is the ISS?",
         incorrect: ["12 miles", "87 miles", "313 miles"],
         correct: "254 miles"
        },
        {question: "What was the diameter of Sputnik 1?",
         incorrect: ["13 inches", "33 inches", "43 inches"],
         correct: "23 inches"
        },
        {question: "How much did Sputnik 1 weigh?",
         incorrect: ["24 lbs", "64 lbs", "124 lbs"],
         correct: "184 lbs"
        },
        {question: "Who was the first man in space?",
         incorrect: ["Alan Shepard", "Neil Armstrong", "Laika Sirius"],
         correct: "Yuri Gagarin"
        },
        {question: "What was the name of the US program that put Alan Shepard into space?",
         incorrect: ["Gemini", "Apollo", "Redstone"],
         correct: "Mercury"
        },
        {question: "What year did the first Space Shuttle launch?",
         incorrect: ["1975", "1986", "1990"],
         correct: "1981"
        },
    ];

    //------Create variables
    //Create an interval variable
    let interval;
    //Create a time variable
    let time;
    //Create a variable to keep track of if it is currently a question page
    let isQuestion = false;
    //Create a # correct variable, incorrect variable, and unanswered variable
    let stats = [0, 0, 0];

    //------Create the elements for the starting page
    //Create the start button
    let startButton = $("<h2>").attr("id", "start").addClass("answer").text("Start Game");

    //------Create the element for the timer display
    let timerElem = $("<h2>Time Remaining: <span id='time'></span></h2>");

    //------Create a function that clears the elements from the screen
    function clearPage() {
        $("#content").children().detach();
    }

    //------Create a function that adds the elements for the start page
    function startingPage() {
        //Add the start button
        $("#content").append(startButton);
    }

    //------Create a function that adds the elements for the question page
    function questionPage() {
        let num = currentQuestion();

        //------Create the elements for question page
        //Create the header for the question
        let questionElem = $("<h2>").text(questions[num].question);;
        //Create the headers for the answers
        let answerElems = [];

        let notDisplayed = [0, 1, 2, 3];
        for(let i = 0; i < 4; i++) {
            let rand = Math.floor(Math.random() * notDisplayed.length);
            if (notDisplayed[rand] === 3) {
                answerElems.push($("<h2>").addClass("answer").text(questions[num].correct));
            } else {
                answerElems.push($("<h2>").addClass("answer").text(questions[num].incorrect[notDisplayed[rand]]));
            }
            notDisplayed.splice(rand, 1);
        }
        //Add the header for the question
        //Add the headers for the answers
        $("#content").append(timerElem, questionElem, answerElems);
    }

    //------Create a function for the answered page
    function answerPage(answer) {
        //------Create the elements for the answered page
        //Create the header for whether the question was answered correctly or not,
        //  or time ran out
        let answeredElem = $("<h2>");
        //Create the header for the correct answer
        let correctAnswer = questions[currentQuestion()].correct;
        //Check the passed in answer against the current question.
        //Increment the corresponding stat.
        if (answer === null) {
            answeredElem.text("You ran out of time!");  
            stats[2]++;
        } else if (correctAnswer === answer) {
            answeredElem.text("You got it!");  
            stats[0]++
        } else {
            answeredElem.text("Not quite!");  
            stats[1]++;
        }
        let correctAnswerElem = $("<h2>").text(`The correct answer was: ${correctAnswer}`);

        //Add the header for whether the question was answered correctly or not,
        //  or time ran out
        //Add the header for the correct answer
        $("#content").append(timerElem, answeredElem, correctAnswerElem);
    }

    //------Create a function that adds the elements for the stats page
    function statsPage() {
        //------Create the elements for the stats page
        //Create the header for affirming they are done
        let affirmationElem = $("<h2>").text("All done, here's how you did!");
        //Create the headers for showing the number correct, incorrect,
        //  and unanswered.
        let statsElems = [
            $("<h2>Correct Answers: <span></span></h2>"),
            $("<h2>Incorrect Answers: <span></span></h2>"),
            $("<h2>Unanswered: <span></span></h2>"),
        ];

        for(let i = 0; i < stats.length; i++) {
            $(statsElems[i].children()[0]).text(stats[i]);
        }

        //Add the header for affirming they are done
        //Add the headers for showing the number correct, incorrect,
        //  and unanswered.
        //Add the start button
        $("#content").append(affirmationElem, statsElems, startButton);
        
        for(let i = 0; i < stats.length; i++) {
            stats[i] = 0;
        }
    }

    //------Create a function that goes through the various pages sequentially
    function sequence(answer = null) {
        clearInterval(interval);
        isQuestion = false;
        clearPage();

        //If it is a question page set the timer to 10 seconds and call the answer
        //  page function passing in what was clicked on the last page.
        //If it is a start page or an answered page and there are more questions
        //  set the timer to 30 seconds and call the question page function.
        
        if (answer !== "") {
            time = 3;
            answerPage(answer);
        } else if (currentQuestion() < questions.length) {
            time = 30;
            isQuestion = true;
            questionPage()
            $("#time").text(time);
        } else {
            statsPage();
            return;
        }

        //Set the countdown interval for one second
        interval = setInterval(countDown, 1000);        
    }

    //------Create a countdown function
    function countDown() {
        //Count down the timer
        time--;
        //If it is a question page display the time left
        if (isQuestion) {
            $("#time").text(time);
        }
        //If the timer gets to 0 call the sequential function
        if (time < 1) {
            if (isQuestion) {
                sequence();
            } else {
                sequence("");
            }
        }
    }

    function currentQuestion() {
        let sum = 0;
        for(let i = 0; i < stats.length; i++) {
            sum += stats[i];
        }
        return sum;
    }

    //------Create and event listener for mouseclicks on buttons
    $(document).on("click", ".answer", (event) => {
        let answer;
        //If it was an answer clicked pass what was clicked
        if ($(event.currentTarget).attr("id") === "start") {
            answer = "";
        } else {
            answer = $(event.currentTarget).text();
        }
        //Call the sequential function
        sequence(answer); 
    });

    startingPage();
    
});