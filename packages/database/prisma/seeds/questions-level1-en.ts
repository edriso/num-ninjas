import type { QuestionSeed } from './questions-level1';

export const level1QuestionsEn: QuestionSeed[] = [
  // =============================================
  // Topic 1: Addition & Subtraction
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 1 - MCQ 1
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'You went to the school shop and bought a sandwich and juice.',
    questionText:
      'The sandwich costs 15 pounds and the juice costs 8 pounds. How much did you pay?',
    hintText: 'Add the price of the sandwich and the juice',
    explanation: '15 + 8 = 23 pounds',
    options: [
      { optionText: '23 pounds', isCorrect: true },
      { optionText: '22 pounds', isCorrect: false },
      { optionText: '25 pounds', isCorrect: false },
      { optionText: '20 pounds', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 2
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'Sara has 50 pounds and she bought some school things.',
    questionText:
      'Sara has 50 pounds. She bought a notebook for 12 pounds and a pen for 8 pounds. How much money is left?',
    hintText: 'First add what she bought, then subtract from 50',
    explanation: '12 + 8 = 20 pounds spent. 50 - 20 = 30 pounds left',
    options: [
      { optionText: '30 pounds', isCorrect: true },
      { optionText: '38 pounds', isCorrect: false },
      { optionText: '20 pounds', isCorrect: false },
      { optionText: '32 pounds', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 3
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'Karim is saving money in his piggy bank.',
    questionText:
      'Karim has 125 pounds in his piggy bank. He added 75 more pounds. How much does he have now?',
    hintText: 'Add the two numbers together',
    explanation: '125 + 75 = 200 pounds',
    options: [
      { optionText: '200 pounds', isCorrect: true },
      { optionText: '190 pounds', isCorrect: false },
      { optionText: '195 pounds', isCorrect: false },
      { optionText: '210 pounds', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 4
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'Nour went to the supermarket with her mom.',
    questionText: 'The bill was 237 pounds and mom paid 300 pounds. How much change did they get?',
    hintText: 'Subtract the bill from the amount paid',
    explanation: '300 - 237 = 63 pounds',
    options: [
      { optionText: '63 pounds', isCorrect: true },
      { optionText: '73 pounds', isCorrect: false },
      { optionText: '53 pounds', isCorrect: false },
      { optionText: '37 pounds', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 5
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'Your school is collecting books for the library.',
    questionText:
      'Class A brought 148 books and Class B brought 267 books. How many books in total?',
    hintText: 'Add the books from both classes',
    explanation: '148 + 267 = 415 books',
    options: [
      { optionText: '415 books', isCorrect: true },
      { optionText: '405 books', isCorrect: false },
      { optionText: '425 books', isCorrect: false },
      { optionText: '315 books', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 6
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'A fruit shop had apples in the morning.',
    questionText:
      'The shop had 500 apples. They sold 186 apples by noon. How many apples are left?',
    hintText: 'Subtract the sold apples from the total',
    explanation: '500 - 186 = 314 apples',
    options: [
      { optionText: '314 apples', isCorrect: true },
      { optionText: '324 apples', isCorrect: false },
      { optionText: '304 apples', isCorrect: false },
      { optionText: '286 apples', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 7
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'Ahmed scored points in two basketball games.',
    questionText:
      'Ahmed scored 47 points in the first game and 58 points in the second game. What is his total score?',
    hintText: 'Add the scores from both games',
    explanation: '47 + 58 = 105 points',
    options: [
      { optionText: '105 points', isCorrect: true },
      { optionText: '95 points', isCorrect: false },
      { optionText: '115 points', isCorrect: false },
      { optionText: '100 points', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 8
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'Mona is reading a book with many pages.',
    questionText: 'The book has 342 pages. Mona read 178 pages. How many pages are left?',
    hintText: 'Subtract the pages she read from the total pages',
    explanation: '342 - 178 = 164 pages',
    options: [
      { optionText: '164 pages', isCorrect: true },
      { optionText: '174 pages', isCorrect: false },
      { optionText: '154 pages', isCorrect: false },
      { optionText: '236 pages', isCorrect: false },
    ],
  },

  // Topic 1 - Open Ended 1
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'You bought apples and bananas from the fruit shop.',
    questionText:
      'You bought apples for 10 pounds and bananas for 7 pounds. How much did you pay in total?',
    hintText: 'Add the two prices together',
    explanation: '10 + 7 = 17 pounds',
    correctAnswer: '17',
    correctAnswerNumeric: 17,
  },

  // Topic 1 - Open Ended 2
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'Mariam has her weekly pocket money.',
    questionText:
      'Mariam has 100 pounds and she spent 64 pounds on food. How many pounds are left?',
    hintText: 'Subtract what she spent from what she had',
    explanation: '100 - 64 = 36 pounds',
    correctAnswer: '36',
    correctAnswerNumeric: 36,
  },

  // Topic 1 - Open Ended 3
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'Ahmed is saving money to buy a football.',
    questionText:
      'Ahmed has 86 pounds and the football costs 150 pounds. How much more does he need?',
    hintText: 'Subtract what he has from the price of the football',
    explanation: '150 - 86 = 64 pounds',
    correctAnswer: '64',
    correctAnswerNumeric: 64,
  },

  // Topic 1 - Open Ended 4
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'The school bus picks up students from two stops.',
    questionText:
      'The bus picked up 29 students from the first stop and 34 from the second stop. How many students in total?',
    hintText: 'Add the students from both stops',
    explanation: '29 + 34 = 63 students',
    correctAnswer: '63',
    correctAnswerNumeric: 63,
  },

  // =============================================
  // Topic 2: Multiplication
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 2 - MCQ 1
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'Mom bought bags of apples for the family.',
    questionText: 'Each bag has 6 apples and mom bought 7 bags. How many apples in total?',
    hintText: 'Multiply the number of apples in one bag by the number of bags',
    explanation: '6 x 7 = 42 apples',
    options: [
      { optionText: '42', isCorrect: true },
      { optionText: '36', isCorrect: false },
      { optionText: '48', isCorrect: false },
      { optionText: '13', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 2
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'A farmer planted rows of trees in his garden.',
    questionText: 'There are 8 rows with 9 trees in each row. How many trees are there?',
    hintText: 'Multiply the number of rows by the trees in each row',
    explanation: '8 x 9 = 72 trees',
    options: [
      { optionText: '72', isCorrect: true },
      { optionText: '64', isCorrect: false },
      { optionText: '81', isCorrect: false },
      { optionText: '63', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 3
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'The school ordered water bottles for a trip.',
    questionText:
      'They ordered 12 packs of water. Each pack has 24 bottles. How many bottles in total?',
    hintText: 'Multiply 12 by 24',
    explanation: '12 x 24 = 288 bottles',
    options: [
      { optionText: '288', isCorrect: true },
      { optionText: '248', isCorrect: false },
      { optionText: '268', isCorrect: false },
      { optionText: '298', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 4
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'A bookshop is counting books on shelves.',
    questionText: 'There are 15 shelves and each shelf has 8 books. How many books in total?',
    hintText: 'Multiply 15 by 8',
    explanation: '15 x 8 = 120 books',
    options: [
      { optionText: '120', isCorrect: true },
      { optionText: '115', isCorrect: false },
      { optionText: '130', isCorrect: false },
      { optionText: '108', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 5
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'Students are sitting in the school hall for a show.',
    questionText:
      'There are 25 rows of chairs with 16 chairs in each row. How many chairs in total?',
    hintText: 'Multiply 25 by 16',
    explanation: '25 x 16 = 400 chairs',
    options: [
      { optionText: '400', isCorrect: true },
      { optionText: '375', isCorrect: false },
      { optionText: '410', isCorrect: false },
      { optionText: '350', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 6
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'A bakery makes bread every day.',
    questionText: 'The bakery makes 45 loaves of bread each day. How many loaves in 5 days?',
    hintText: 'Multiply 45 by 5',
    explanation: '45 x 5 = 225 loaves',
    options: [
      { optionText: '225', isCorrect: true },
      { optionText: '200', isCorrect: false },
      { optionText: '250', isCorrect: false },
      { optionText: '215', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 7
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'Omar collects stickers and puts them in albums.',
    questionText: 'Each album page holds 6 stickers. Omar has 9 full pages. How many stickers?',
    hintText: 'Multiply 6 by 9',
    explanation: '6 x 9 = 54 stickers',
    options: [
      { optionText: '54', isCorrect: true },
      { optionText: '45', isCorrect: false },
      { optionText: '56', isCorrect: false },
      { optionText: '63', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 8
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'A school bought pencils for all students.',
    questionText:
      'The school bought 32 boxes of pencils. Each box has 12 pencils. How many pencils in total?',
    hintText: 'Multiply 32 by 12',
    explanation: '32 x 12 = 384 pencils',
    options: [
      { optionText: '384', isCorrect: true },
      { optionText: '364', isCorrect: false },
      { optionText: '394', isCorrect: false },
      { optionText: '344', isCorrect: false },
    ],
  },

  // Topic 2 - Open Ended 1
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'You are setting the table for a birthday party.',
    questionText:
      'You need 4 plates for each table. There are 7 tables. How many plates do you need?',
    hintText: 'Multiply the plates per table by the number of tables',
    explanation: '4 x 7 = 28 plates',
    correctAnswer: '28',
    correctAnswerNumeric: 28,
  },

  // Topic 2 - Open Ended 2
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'A bus makes trips between two cities.',
    questionText:
      'The bus carries 48 people each trip. It made 3 trips today. How many people did it carry?',
    hintText: 'Multiply 48 by 3',
    explanation: '48 x 3 = 144 people',
    correctAnswer: '144',
    correctAnswerNumeric: 144,
  },

  // Topic 2 - Open Ended 3
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'Dad buys milk every week.',
    questionText:
      'Dad buys 3 cartons of milk every week. Each carton costs 15 pounds. How much does he spend on milk each week?',
    hintText: 'Multiply the price of one carton by the number of cartons',
    explanation: '3 x 15 = 45 pounds',
    correctAnswer: '45',
    correctAnswerNumeric: 45,
  },

  // Topic 2 - Open Ended 4
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'The PE teacher is counting students for teams.',
    questionText: 'There are 5 teams and each team has 11 players. How many players in total?',
    hintText: 'Multiply 5 by 11',
    explanation: '5 x 11 = 55 players',
    correctAnswer: '55',
    correctAnswerNumeric: 55,
  },

  // =============================================
  // Topic 3: Division with Remainders
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 3 - MCQ 1
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'Mom is sharing dates equally among her children.',
    questionText: 'Mom has 20 dates and 4 children. How many dates does each child get?',
    hintText: 'Divide 20 by 4',
    explanation: '20 / 4 = 5 dates each',
    options: [
      { optionText: '5', isCorrect: true },
      { optionText: '4', isCorrect: false },
      { optionText: '6', isCorrect: false },
      { optionText: '8', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 2
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'The teacher is dividing students into groups.',
    questionText: '30 students need to be divided into groups of 6. How many groups?',
    hintText: 'Divide 30 by 6',
    explanation: '30 / 6 = 5 groups',
    options: [
      { optionText: '5', isCorrect: true },
      { optionText: '4', isCorrect: false },
      { optionText: '6', isCorrect: false },
      { optionText: '3', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 3
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'You have bananas to share with your friends.',
    questionText:
      'You have 25 bananas and want to share them equally among 4 friends. How many bananas does each friend get, and how many are left over?',
    hintText: 'Divide 25 by 4 and find the remainder',
    explanation: '25 / 4 = 6 remainder 1. Each gets 6 and 1 banana is left',
    options: [
      { optionText: '6 each, 1 left over', isCorrect: true },
      { optionText: '5 each, 5 left over', isCorrect: false },
      { optionText: '7 each, 0 left over', isCorrect: false },
      { optionText: '6 each, 2 left over', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 4
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'A coach is making teams for a race.',
    questionText:
      '23 students want to run a relay race. Each team needs 5 runners. How many full teams can be made?',
    hintText: 'Divide 23 by 5',
    explanation: '23 / 5 = 4 full teams with 3 students left over',
    options: [
      { optionText: '4 teams', isCorrect: true },
      { optionText: '5 teams', isCorrect: false },
      { optionText: '3 teams', isCorrect: false },
      { optionText: '6 teams', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 5
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'A shop is packing oranges into bags.',
    questionText:
      'The shop has 50 oranges. Each bag holds 8 oranges. How many full bags can they fill?',
    hintText: 'Divide 50 by 8',
    explanation: '50 / 8 = 6 full bags with 2 oranges left over',
    options: [
      { optionText: '6 bags', isCorrect: true },
      { optionText: '7 bags', isCorrect: false },
      { optionText: '5 bags', isCorrect: false },
      { optionText: '8 bags', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 6
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'Youssef is putting photos in an album.',
    questionText:
      'Youssef has 45 photos. Each page holds 7 photos. How many pages does he fill completely?',
    hintText: 'Divide 45 by 7',
    explanation: '45 / 7 = 6 full pages with 3 photos left over',
    options: [
      { optionText: '6 pages', isCorrect: true },
      { optionText: '7 pages', isCorrect: false },
      { optionText: '5 pages', isCorrect: false },
      { optionText: '8 pages', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 7
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'The school is giving pencils to students.',
    questionText:
      '72 pencils are shared equally among 9 students. How many pencils does each student get?',
    hintText: 'Divide 72 by 9',
    explanation: '72 / 9 = 8 pencils each',
    options: [
      { optionText: '8', isCorrect: true },
      { optionText: '7', isCorrect: false },
      { optionText: '9', isCorrect: false },
      { optionText: '6', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 8
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'A baker is boxing cupcakes for a party.',
    questionText:
      'The baker has 38 cupcakes. Each box holds 6 cupcakes. How many boxes are needed to pack all cupcakes?',
    hintText: 'Divide 38 by 6. Do you need an extra box for the remaining?',
    explanation: '38 / 6 = 6 full boxes with 2 left, so 7 boxes are needed',
    options: [
      { optionText: '7 boxes', isCorrect: true },
      { optionText: '6 boxes', isCorrect: false },
      { optionText: '8 boxes', isCorrect: false },
      { optionText: '5 boxes', isCorrect: false },
    ],
  },

  // Topic 3 - Open Ended 1
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'You are sharing apples with your friends.',
    questionText: 'You have 36 apples and 6 friends. How many apples does each friend get?',
    hintText: 'Divide 36 by 6',
    explanation: '36 / 6 = 6 apples each',
    correctAnswer: '6',
    correctAnswerNumeric: 6,
  },

  // Topic 3 - Open Ended 2
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'The teacher is handing out stickers.',
    questionText:
      '56 stickers are shared equally among 8 students. How many stickers does each student get?',
    hintText: 'Divide 56 by 8',
    explanation: '56 / 8 = 7 stickers each',
    correctAnswer: '7',
    correctAnswerNumeric: 7,
  },

  // Topic 3 - Open Ended 3
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'Dad bought juice bottles for the week.',
    questionText:
      'Dad has 29 juice bottles to share among 3 children equally. How many bottles are left over?',
    hintText: 'Divide 29 by 3 and find the remainder',
    explanation: '29 / 3 = 9 remainder 2. So 2 bottles are left over',
    correctAnswer: '2',
    correctAnswerNumeric: 2,
  },

  // Topic 3 - Open Ended 4
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'Students are lined up in equal rows for a photo.',
    questionText: '42 students stand in rows of 7. How many rows are there?',
    hintText: 'Divide 42 by 7',
    explanation: '42 / 7 = 6 rows',
    correctAnswer: '6',
    correctAnswerNumeric: 6,
  },

  // =============================================
  // Topic 4: Number Sense (place value, rounding, comparing)
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 4 - MCQ 1
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'You are reading the number of people at a football match.',
    questionText: 'What is the value of the digit 5 in the number 3,527?',
    hintText: 'Look at the position of the 5. Is it ones, tens, hundreds, or thousands?',
    explanation: 'The 5 is in the hundreds place, so its value is 500',
    options: [
      { optionText: '500', isCorrect: true },
      { optionText: '50', isCorrect: false },
      { optionText: '5', isCorrect: false },
      { optionText: '5,000', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 2
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'A shop is rounding prices to make them simpler.',
    questionText: 'Round 467 to the nearest hundred.',
    hintText: 'Look at the tens digit. Is it 5 or more?',
    explanation: '467 rounded to the nearest hundred is 500 (because 6 >= 5)',
    options: [
      { optionText: '500', isCorrect: true },
      { optionText: '400', isCorrect: false },
      { optionText: '470', isCorrect: false },
      { optionText: '460', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 3
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'Two students are comparing their book collections.',
    questionText: 'Which number is bigger: 2,489 or 2,498?',
    hintText: 'Compare the numbers digit by digit from the left',
    explanation:
      '2,489 vs 2,498: thousands and hundreds are equal. Tens: 8 vs 9. So 2,498 is bigger',
    options: [
      { optionText: '2,498', isCorrect: true },
      { optionText: '2,489', isCorrect: false },
      { optionText: 'They are equal', isCorrect: false },
      { optionText: 'Cannot tell', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 4
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'You are learning about place value in math class.',
    questionText: 'In the number 6,031, what digit is in the thousands place?',
    hintText: 'The thousands place is the leftmost digit in a 4-digit number',
    explanation: 'In 6,031, the digit 6 is in the thousands place',
    options: [
      { optionText: '6', isCorrect: true },
      { optionText: '0', isCorrect: false },
      { optionText: '3', isCorrect: false },
      { optionText: '1', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 5
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'The teacher is asking you to round numbers.',
    questionText: 'Round 835 to the nearest ten.',
    hintText: 'Look at the ones digit. Is it 5 or more?',
    explanation: '835 rounded to the nearest ten is 840 (because 5 >= 5, round up)',
    options: [
      { optionText: '840', isCorrect: true },
      { optionText: '830', isCorrect: false },
      { optionText: '835', isCorrect: false },
      { optionText: '900', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 6
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'You are arranging numbers from smallest to biggest.',
    questionText: 'Put these numbers in order from smallest to biggest: 3,210 - 3,120 - 3,012',
    hintText: 'Compare the hundreds digit when thousands are the same',
    explanation: '3,012 < 3,120 < 3,210',
    options: [
      { optionText: '3,012 - 3,120 - 3,210', isCorrect: true },
      { optionText: '3,120 - 3,012 - 3,210', isCorrect: false },
      { optionText: '3,210 - 3,120 - 3,012', isCorrect: false },
      { optionText: '3,012 - 3,210 - 3,120', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 7
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'A school has many students across its classes.',
    questionText: 'The school has 1,275 students. What is the value of the digit 2?',
    hintText: 'The 2 is in the hundreds place',
    explanation: 'The digit 2 is in the hundreds place, so its value is 200',
    options: [
      { optionText: '200', isCorrect: true },
      { optionText: '20', isCorrect: false },
      { optionText: '2', isCorrect: false },
      { optionText: '2,000', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 8
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'You are working with big numbers in class.',
    questionText: 'What number is 100 more than 4,856?',
    hintText: 'Add 100 to the number',
    explanation: '4,856 + 100 = 4,956',
    options: [
      { optionText: '4,956', isCorrect: true },
      { optionText: '4,866', isCorrect: false },
      { optionText: '5,856', isCorrect: false },
      { optionText: '4,857', isCorrect: false },
    ],
  },

  // Topic 4 - Open Ended 1
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'You are practicing place value.',
    questionText: 'What is the value of the digit 7 in the number 4,723?',
    hintText: 'The 7 is in the hundreds place',
    explanation: 'The digit 7 is in the hundreds place, so its value is 700',
    correctAnswer: '700',
    correctAnswerNumeric: 700,
  },

  // Topic 4 - Open Ended 2
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'The teacher asks you to round a number.',
    questionText: 'Round 382 to the nearest hundred.',
    hintText: 'Look at the tens digit. 8 is more than 5, so round up',
    explanation: '382 rounded to the nearest hundred is 400',
    correctAnswer: '400',
    correctAnswerNumeric: 400,
  },

  // Topic 4 - Open Ended 3
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'You are reading the price of a new bicycle.',
    questionText: 'The bicycle costs 1,250 pounds. What is 1,000 more than this price?',
    hintText: 'Add 1,000 to 1,250',
    explanation: '1,250 + 1,000 = 2,250',
    correctAnswer: '2250',
    correctAnswerNumeric: 2250,
  },

  // Topic 4 - Open Ended 4
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'You are comparing scores in a game.',
    questionText: 'Round 546 to the nearest ten.',
    hintText: 'The ones digit is 6, which is 5 or more, so round up',
    explanation: '546 rounded to the nearest ten is 550',
    correctAnswer: '550',
    correctAnswerNumeric: 550,
  },

  // =============================================
  // Topic 5: Number Properties (even/odd, factors, multiples)
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 5 - MCQ 1
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'You are sorting numbers in math class.',
    questionText: 'Which of these numbers is odd?',
    hintText: 'An odd number does not divide evenly by 2',
    explanation: '37 is odd because 37 / 2 = 18 remainder 1',
    options: [
      { optionText: '37', isCorrect: true },
      { optionText: '24', isCorrect: false },
      { optionText: '48', isCorrect: false },
      { optionText: '16', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 2
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'The teacher is asking about factors.',
    questionText: 'Which of these is a factor of 12?',
    hintText: 'A factor of 12 divides into 12 with no remainder',
    explanation: '4 is a factor of 12 because 12 / 4 = 3 with no remainder',
    options: [
      { optionText: '4', isCorrect: true },
      { optionText: '5', isCorrect: false },
      { optionText: '7', isCorrect: false },
      { optionText: '8', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 3
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'You are learning about multiples.',
    questionText: 'Which of these is a multiple of 7?',
    hintText: 'A multiple of 7 can be made by multiplying 7 by a whole number',
    explanation: '35 = 7 x 5, so 35 is a multiple of 7',
    options: [
      { optionText: '35', isCorrect: true },
      { optionText: '32', isCorrect: false },
      { optionText: '27', isCorrect: false },
      { optionText: '38', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 4
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'You are pairing socks from the laundry.',
    questionText: 'You have 14 socks. Can you make equal pairs with no socks left over?',
    hintText: 'Is 14 even or odd?',
    explanation: '14 is even (14 / 2 = 7), so yes, all socks can be paired',
    options: [
      { optionText: 'Yes, 7 pairs', isCorrect: true },
      { optionText: 'No, 1 sock is left', isCorrect: false },
      { optionText: 'Yes, 6 pairs', isCorrect: false },
      { optionText: 'No, 2 socks are left', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 5
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'The teacher asks about factors of a number.',
    questionText: 'How many factors does the number 10 have?',
    hintText: 'List all numbers that divide 10 evenly: 1, 2, 5, 10',
    explanation: 'The factors of 10 are: 1, 2, 5, 10. That is 4 factors',
    options: [
      { optionText: '4', isCorrect: true },
      { optionText: '3', isCorrect: false },
      { optionText: '5', isCorrect: false },
      { optionText: '2', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 6
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'You are clapping in a rhythm every 3rd beat.',
    questionText: 'Which of these numbers is a multiple of both 3 and 4?',
    hintText: 'Find a number that divides evenly by both 3 and 4',
    explanation: '24 / 3 = 8 and 24 / 4 = 6, so 24 is a multiple of both',
    options: [
      { optionText: '24', isCorrect: true },
      { optionText: '16', isCorrect: false },
      { optionText: '21', isCorrect: false },
      { optionText: '10', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 7
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'You add two numbers together.',
    questionText: 'If you add an even number and an odd number, the result is always:',
    hintText: 'Try an example: 4 + 3 = ?',
    explanation: 'Even + Odd = Odd. For example, 4 + 3 = 7 (odd)',
    options: [
      { optionText: 'Odd', isCorrect: true },
      { optionText: 'Even', isCorrect: false },
      { optionText: 'Sometimes even, sometimes odd', isCorrect: false },
      { optionText: 'Zero', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 8
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'The teacher writes a number on the board.',
    questionText: 'Which of these is NOT a factor of 18?',
    hintText: 'Check which number does not divide 18 evenly',
    explanation: '18 / 4 = 4 remainder 2, so 4 is not a factor of 18',
    options: [
      { optionText: '4', isCorrect: true },
      { optionText: '2', isCorrect: false },
      { optionText: '9', isCorrect: false },
      { optionText: '6', isCorrect: false },
    ],
  },

  // Topic 5 - Open Ended 1
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'You are finding factors in class.',
    questionText: 'What is the biggest factor of 20 that is less than 20?',
    hintText: 'The factors of 20 are: 1, 2, 4, 5, 10, 20',
    explanation: 'The biggest factor of 20 less than 20 is 10',
    correctAnswer: '10',
    correctAnswerNumeric: 10,
  },

  // Topic 5 - Open Ended 2
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'You are counting by fives.',
    questionText: 'What is the 8th multiple of 5?',
    hintText: 'Multiply 5 by 8',
    explanation: '5 x 8 = 40',
    correctAnswer: '40',
    correctAnswerNumeric: 40,
  },

  // Topic 5 - Open Ended 3
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'Students are lining up in equal rows.',
    questionText:
      '15 students want to stand in equal rows. How many students in each row if there are 3 rows?',
    hintText: 'Divide 15 by 3',
    explanation: '15 / 3 = 5 students per row',
    correctAnswer: '5',
    correctAnswerNumeric: 5,
  },

  // Topic 5 - Open Ended 4
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'You are looking at even and odd numbers.',
    questionText: 'How many even numbers are there between 1 and 20 (not including 1 and 20)?',
    hintText: 'List the even numbers: 2, 4, 6, 8, 10, 12, 14, 16, 18',
    explanation:
      'The even numbers between 1 and 20 are: 2, 4, 6, 8, 10, 12, 14, 16, 18 = 9 numbers',
    correctAnswer: '9',
    correctAnswerNumeric: 9,
  },

  // =============================================
  // Topic 6: Intro to Fractions
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 6 - MCQ 1
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'Mom cut a pizza into equal pieces for the family.',
    questionText:
      'A pizza is cut into 8 equal pieces. You ate 3 pieces. What fraction of the pizza did you eat?',
    hintText: 'The fraction is pieces you ate over total pieces',
    explanation: 'You ate 3 out of 8 pieces = 3/8',
    options: [
      { optionText: '3/8', isCorrect: true },
      { optionText: '5/8', isCorrect: false },
      { optionText: '3/5', isCorrect: false },
      { optionText: '8/3', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 2
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'You are comparing fractions in class.',
    questionText: 'Which fraction is bigger: 1/3 or 1/5?',
    hintText: 'When the top number is the same, the smaller bottom number means a bigger fraction',
    explanation: '1/3 > 1/5 because thirds are bigger pieces than fifths',
    options: [
      { optionText: '1/3', isCorrect: true },
      { optionText: '1/5', isCorrect: false },
      { optionText: 'They are equal', isCorrect: false },
      { optionText: 'Cannot tell', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 3
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'You are learning about equal fractions.',
    questionText: 'Which fraction is equal to 1/2?',
    hintText: 'Multiply both the top and bottom of 1/2 by the same number',
    explanation: '1/2 = 3/6 because 1x3 = 3 and 2x3 = 6',
    options: [
      { optionText: '3/6', isCorrect: true },
      { optionText: '2/6', isCorrect: false },
      { optionText: '1/4', isCorrect: false },
      { optionText: '3/4', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 4
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'A juice bottle is partly full.',
    questionText: 'A juice bottle is 2/5 full. What fraction is empty?',
    hintText: 'The full bottle is 5/5. Subtract the full part',
    explanation: '5/5 - 2/5 = 3/5 is empty',
    options: [
      { optionText: '3/5', isCorrect: true },
      { optionText: '2/5', isCorrect: false },
      { optionText: '3/2', isCorrect: false },
      { optionText: '1/5', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 5
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'Dad cut a watermelon into equal pieces.',
    questionText:
      'Dad cut a watermelon into 6 equal pieces. The family ate 4 pieces. What fraction is left?',
    hintText: 'Subtract the eaten pieces from the total, then write as a fraction',
    explanation: '6 - 4 = 2 pieces left. So 2/6 = 1/3 is left',
    options: [
      { optionText: '2/6', isCorrect: true },
      { optionText: '4/6', isCorrect: false },
      { optionText: '2/4', isCorrect: false },
      { optionText: '6/2', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 6
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'You are comparing fractions with the same bottom number.',
    questionText: 'Which is bigger: 5/8 or 3/8?',
    hintText: 'When the bottom numbers are the same, compare the top numbers',
    explanation: '5/8 > 3/8 because 5 > 3',
    options: [
      { optionText: '5/8', isCorrect: true },
      { optionText: '3/8', isCorrect: false },
      { optionText: 'They are equal', isCorrect: false },
      { optionText: 'Cannot tell', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 7
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'You are simplifying fractions in class.',
    questionText: 'Which fraction is equal to 4/8?',
    hintText: 'Divide both the top and bottom by the same number',
    explanation: '4/8 = 1/2 because 4/4 = 1 and 8/4 = 2',
    options: [
      { optionText: '1/2', isCorrect: true },
      { optionText: '2/4', isCorrect: false },
      { optionText: '1/4', isCorrect: false },
      { optionText: '2/8', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 8
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'You colored part of a shape in art class.',
    questionText:
      'A rectangle is divided into 10 equal parts. You colored 7 parts. What fraction did you color?',
    hintText: 'Write colored parts over total parts',
    explanation: 'You colored 7 out of 10 parts = 7/10',
    options: [
      { optionText: '7/10', isCorrect: true },
      { optionText: '3/10', isCorrect: false },
      { optionText: '7/3', isCorrect: false },
      { optionText: '10/7', isCorrect: false },
    ],
  },

  // Topic 6 - Open Ended 1
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'You are sharing a cake with friends.',
    questionText:
      'A cake is cut into 4 equal pieces. You ate 1 piece. What fraction did you eat? Write only the top number (numerator).',
    hintText: 'You ate 1 out of 4 pieces',
    explanation: 'You ate 1/4 of the cake. The numerator is 1',
    correctAnswer: '1',
    correctAnswerNumeric: 1,
  },

  // Topic 6 - Open Ended 2
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'A water tank is being filled.',
    questionText: 'A tank is 3/4 full. How many quarters are needed to fill it completely?',
    hintText: 'A full tank is 4/4. How many more quarters do you need?',
    explanation: '4/4 - 3/4 = 1/4. So 1 more quarter is needed',
    correctAnswer: '1',
    correctAnswerNumeric: 1,
  },

  // Topic 6 - Open Ended 3
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'You are finding equivalent fractions.',
    questionText: '2/3 = ?/6. What number goes in place of the question mark?',
    hintText: 'The bottom went from 3 to 6 (multiplied by 2). Do the same to the top',
    explanation: '2/3 = 4/6 because 2 x 2 = 4 and 3 x 2 = 6',
    correctAnswer: '4',
    correctAnswerNumeric: 4,
  },

  // Topic 6 - Open Ended 4
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'You drank some of your milk.',
    questionText: 'You drank 3/8 of your milk. How many eighths are left?',
    hintText: 'A full glass is 8/8. Subtract what you drank',
    explanation: '8/8 - 3/8 = 5/8. So 5 eighths are left',
    correctAnswer: '5',
    correctAnswerNumeric: 5,
  },

  // =============================================
  // Topic 7: Measurement (length, weight, capacity)
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 7 - MCQ 1
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'You measured the length of your desk with a ruler.',
    questionText: 'Your desk is 120 cm long. How many meters is that?',
    hintText: '100 cm = 1 meter',
    explanation: '120 cm = 1.2 meters (120 / 100 = 1.2)',
    options: [
      { optionText: '1.2 meters', isCorrect: true },
      { optionText: '12 meters', isCorrect: false },
      { optionText: '0.12 meters', isCorrect: false },
      { optionText: '1.02 meters', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 2
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'Mom is weighing fruit at the market.',
    questionText:
      'Mom bought 2 kg of apples and 500 g of dates. What is the total weight in grams?',
    hintText: '1 kg = 1,000 g',
    explanation: '2 kg = 2,000 g. Total = 2,000 + 500 = 2,500 g',
    options: [
      { optionText: '2,500 g', isCorrect: true },
      { optionText: '2,050 g', isCorrect: false },
      { optionText: '250 g', isCorrect: false },
      { optionText: '2,005 g', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 3
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'You are filling a water bottle.',
    questionText:
      'Your water bottle holds 750 mL. How much more water do you need to fill a 1 liter jug?',
    hintText: '1 liter = 1,000 mL',
    explanation: '1,000 - 750 = 250 mL more',
    options: [
      { optionText: '250 mL', isCorrect: true },
      { optionText: '350 mL', isCorrect: false },
      { optionText: '150 mL', isCorrect: false },
      { optionText: '500 mL', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 4
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'You are measuring the length of the classroom.',
    questionText: 'The classroom is 8 meters long. How many centimeters is that?',
    hintText: '1 meter = 100 cm',
    explanation: '8 x 100 = 800 cm',
    options: [
      { optionText: '800 cm', isCorrect: true },
      { optionText: '80 cm', isCorrect: false },
      { optionText: '8,000 cm', isCorrect: false },
      { optionText: '8 cm', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 5
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'Dad bought bags of rice.',
    questionText:
      'Dad bought a bag of rice that weighs 3 kg and another that weighs 1,500 g. What is the total weight in kg?',
    hintText: 'Convert 1,500 g to kg first (divide by 1,000)',
    explanation: '1,500 g = 1.5 kg. Total = 3 + 1.5 = 4.5 kg',
    options: [
      { optionText: '4.5 kg', isCorrect: true },
      { optionText: '4,500 kg', isCorrect: false },
      { optionText: '4.05 kg', isCorrect: false },
      { optionText: '3.15 kg', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 6
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'You are comparing lengths of two ropes.',
    questionText: 'Rope A is 2 m 30 cm. Rope B is 180 cm. Which rope is longer?',
    hintText: 'Convert both to cm. 2 m 30 cm = 230 cm',
    explanation: '2 m 30 cm = 230 cm. Rope A (230 cm) > Rope B (180 cm)',
    options: [
      { optionText: 'Rope A', isCorrect: true },
      { optionText: 'Rope B', isCorrect: false },
      { optionText: 'They are equal', isCorrect: false },
      { optionText: 'Cannot tell', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 7
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'You are making juice for a party.',
    questionText:
      'You need 3 liters of juice. You have 1 liter and 800 mL. How much more do you need?',
    hintText: 'Convert everything to mL. 3 liters = 3,000 mL, 1 liter 800 mL = 1,800 mL',
    explanation: '3,000 - 1,800 = 1,200 mL = 1 liter 200 mL',
    options: [
      { optionText: '1,200 mL', isCorrect: true },
      { optionText: '2,200 mL', isCorrect: false },
      { optionText: '1,800 mL', isCorrect: false },
      { optionText: '800 mL', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 8
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'You weighed yourself and your school bag.',
    questionText:
      'You weigh 35 kg and your school bag weighs 4,000 g. What is the total weight in kg?',
    hintText: 'Convert 4,000 g to kg (4,000 / 1,000 = 4)',
    explanation: '4,000 g = 4 kg. Total = 35 + 4 = 39 kg',
    options: [
      { optionText: '39 kg', isCorrect: true },
      { optionText: '75 kg', isCorrect: false },
      { optionText: '35.4 kg', isCorrect: false },
      { optionText: '39,000 kg', isCorrect: false },
    ],
  },

  // Topic 7 - Open Ended 1
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'You measured your height.',
    questionText: 'You are 1 meter and 45 cm tall. How many centimeters is that in total?',
    hintText: '1 meter = 100 cm. Add the extra centimeters',
    explanation: '100 + 45 = 145 cm',
    correctAnswer: '145',
    correctAnswerNumeric: 145,
  },

  // Topic 7 - Open Ended 2
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'You are pouring milk into glasses.',
    questionText:
      'A milk carton has 1 liter. You poured 400 mL into a glass. How many mL are left in the carton?',
    hintText: '1 liter = 1,000 mL. Subtract what you poured',
    explanation: '1,000 - 400 = 600 mL',
    correctAnswer: '600',
    correctAnswerNumeric: 600,
  },

  // Topic 7 - Open Ended 3
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'You bought bananas at the market.',
    questionText: 'You bought 3 kg of bananas. How many grams is that?',
    hintText: '1 kg = 1,000 g',
    explanation: '3 x 1,000 = 3,000 g',
    correctAnswer: '3000',
    correctAnswerNumeric: 3000,
  },

  // Topic 7 - Open Ended 4
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'You are measuring a ribbon for a gift.',
    questionText:
      'You need 2 pieces of ribbon. One is 60 cm and the other is 85 cm. How many cm of ribbon do you need in total?',
    hintText: 'Add the two lengths',
    explanation: '60 + 85 = 145 cm',
    correctAnswer: '145',
    correctAnswerNumeric: 145,
  },
];
