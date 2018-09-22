$(document).ready(function() {
    //------Create an array of question objects
    //Add a question string
    //Add 3 incorrect answer strings
    //Add 1 correct answer string
    let questions = [
        {question: "What year was SpaceX founded?",
         incorrect: ["1998","2007","2010"],
         correct: "2002"
        },
        {question: "How many engines are on a falcon heavy?",
         incorrect: ["15","21","31"],
         correct: "27"
        },
        {question: "Who is the richest man in the world?",
         incorrect: ["Bill Gates","Elon Musk","Warren Buffet"],
         correct: "Jeff Bezos"
        },
        {question: "How long was the Curiousity rover planned to last?",
         incorrect: ["4 years","6 years","8 years"],
         correct: "2 years"
        },
        {question: "How high is the ISS?",
         incorrect: ["12 miles","87 miles","313 miles"],
         correct: "254 miles"
        },
        {question: "What was the diameter of Sputnik 1?",
         incorrect: ["13 inches","33 inches","43 inches"],
         correct: "23 inches"
        },
        {question: "How much did Sputnik 1 weigh?",
         incorrect: ["24 lbs","64 lbs","124 lbs"],
         correct: "184 lbs"
        },
        {question: "Who was the first man in space?",
         incorrect: ["Alan Shepard","Neil Armstrong","Laika Sirius"],
         correct: "Yuri Gagarin"
        },
        {question: "What was the name of the US program that put Alan Shepard into space?",
         incorrect: ["Gemini","Apollo","Redstone"],
         correct: "Mercury"
        },
        {question: "What year did the first Space Shuttle launch?",
         incorrect: ["1975","1986","1990"],
         correct: "1981"
        },
    ];

    //------Create an interval variable

    //------Create tracker variables
    //Create a time variable
    //Create a # correct variable
    //Create a # incorrect variable
    //Create a # unanswered variable

    //------Create the elements for the starting page
    //Create the start button

    //------Create the element for the timer display

    //------Create the elements for question page
    //Create the header for the question
    //Create the headers for the answers
    //Create event listener to the answers to answer the question

    //------Create the elements for the answered page
    //Create the header for whether the question was answered correctly or not,
    //  or time ran out
    //Create the header for the correct answer

    //------Create the elements for the stats page
    //Create the header for affirming they are done
    //Create the headers for showing the number correct, incorrect,
    //  and unanswered.

    //------Create a function that clears the elements from the screen

    //------Create a function that adds the elements for the start page
    //Add the start button

    //------Create a function that adds the elements for the question page
    //Add the header for the question
    //Add the headers for the answers

    //------Create a function for the answered page
    //Check the passed in answer against the current question.
    //Increment the corresponding stat.
    //Add the header for whether the question was answered correctly or not,
    //  or time ran out
    //Add the header for the correct answer

    //------Create a function that adds the elements for the stats page
    //Add the header for affirming they are done
    //Add the headers for showing the number correct, incorrect,
    //  and unanswered.
    //Add the start button

    //------Create a function that goes through the various pages sequentially
    //If it is a start page or an answered page and there are more questions
    //  set the timer to 30 seconds and call the question page function.
    //If there are no more question pages left call the stats page function.
    //If it is a question page set the timer to 10 seconds and call the answer
    //  page function passing in what was clicked on the last page.
    //Set the countdown interval for one second

    //------Create a countdown function
    //Count down the timer
    //If it is a question page display the time left
    //If the timer gets to 0 call the sequential function and clear the
    //  interval.

    //------Create and event listener for mouseclicks on buttons
    //Clear the interval if one exists
    //Call the sequential function
    //If it was an answer clicked pass what was clicked
});