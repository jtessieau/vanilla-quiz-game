const questions = {
    response_code: 0,
    results: [
        {
            type: 'multiple',
            difficulty: 'easy',
            category: 'Entertainment: Video Games',
            question:
                'What Ultimate does Makoto Naegi, protagonist of Danganronpa: Trigger Happy Havoc, have? ',
            correct_answer: 'Ultimate Lucky Student',
            incorrect_answers: [
                'Ultimate Unlucky Student',
                'Ultimate Detective',
                'Ultimate Runner',
            ],
        },
        {
            type: 'multiple',
            difficulty: 'easy',
            category: 'Entertainment: Film',
            question:
                'Which movie contains the quote, &quot;Say hello to my little friend!&quot;?',
            correct_answer: 'Scarface',
            incorrect_answers: ['Reservoir Dogs', 'Heat', 'Goodfellas'],
        },
        {
            type: 'multiple',
            difficulty: 'medium',
            category: 'Science: Computers',
            question:
                'Unix Time is defined as the number of seconds that have elapsed since when?',
            correct_answer: 'Midnight, January 1, 1970',
            incorrect_answers: [
                'Midnight, July 4, 1976',
                'Midnight on the creator of Unix&#039;s birthday',
                'Midnight, July 4, 1980',
            ],
        },
        {
            type: 'multiple',
            difficulty: 'medium',
            category: 'History',
            question:
                'On which day did the attempted coup d&#039;etat of 1991 in the Soviet Union begin?',
            correct_answer: 'August 19',
            incorrect_answers: ['August 21', 'December 26', 'December 24'],
        },
        {
            type: 'multiple',
            difficulty: 'easy',
            category: 'General Knowledge',
            question: 'What is the nickname of the US state of California?',
            correct_answer: 'Golden State',
            incorrect_answers: [
                'Sunshine State',
                'Bay State',
                'Treasure State',
            ],
        },
        {
            type: 'multiple',
            difficulty: 'medium',
            category: 'Science: Computers',
            question:
                'Generally, which component of a computer draws the most power?',
            correct_answer: 'Video Card',
            incorrect_answers: ['Hard Drive', 'Processor', 'Power Supply'],
        },
        {
            type: 'multiple',
            difficulty: 'hard',
            category: 'History',
            question:
                'What did the first vending machines in the early 1880&#039;s dispense?',
            correct_answer: 'Post cards',
            incorrect_answers: ['Alcohol', 'Cigarettes', 'Sodas '],
        },
        {
            type: 'multiple',
            difficulty: 'medium',
            category: 'History',
            question: 'Joseph Smith was the founder of what religion?',
            correct_answer: 'Mormonism',
            incorrect_answers: ['Buddhism', 'Christianity', 'Hinduism'],
        },
        {
            type: 'boolean',
            difficulty: 'hard',
            category: 'Entertainment: Video Games',
            question:
                'The retail disc of Tony Hawk&#039;s Pro Skater 5 only comes with the tutorial.',
            correct_answer: 'True',
            incorrect_answers: ['False'],
        },
        {
            type: 'multiple',
            difficulty: 'easy',
            category: 'Science: Computers',
            question:
                'In any programming language, what is the most common way to iterate through an array?',
            correct_answer: '&#039;For&#039; loops',
            incorrect_answers: [
                '&#039;If&#039; Statements',
                '&#039;Do-while&#039; loops',
                '&#039;While&#039; loops',
            ],
        },
    ],
};

export default questions;
