import type { QuestionSeed } from './questions-level1';

export const level4QuestionsEn: QuestionSeed[] = [
  // ══════════════════════════════════════════════════════════════════════
  // Topic 1: Ratio & Proportion
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 1, MCQ 1 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'A recipe needs 2 cups of flour for every 3 cups of milk.',
    questionText: 'If you use 6 cups of flour, how many cups of milk do you need?',
    hintText: 'Find how many times 2 fits into 6, then multiply 3 by that number',
    explanation: '6 / 2 = 3 times. So 3 x 3 = 9 cups of milk',
    options: [
      { optionText: '9', isCorrect: true },
      { optionText: '6', isCorrect: false },
      { optionText: '12', isCorrect: false },
      { optionText: '8', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 2 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'Ahmed shares apples with his brother in the ratio 3:2.',
    questionText: 'They have 20 apples total. How many does Ahmed get?',
    hintText: 'Add the ratio parts: 3 + 2 = 5. Find what fraction Ahmed gets',
    explanation: '3 + 2 = 5 parts. Ahmed gets 3/5 of 20 = 12 apples',
    options: [
      { optionText: '12', isCorrect: true },
      { optionText: '10', isCorrect: false },
      { optionText: '8', isCorrect: false },
      { optionText: '15', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 3 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'On a map, 1 cm stands for 5 km in real life.',
    questionText: 'Two cities are 8 cm apart on the map. What is the real distance?',
    hintText: 'Multiply the map distance by the scale',
    explanation: '8 x 5 = 40 km',
    options: [
      { optionText: '40 km', isCorrect: true },
      { optionText: '35 km', isCorrect: false },
      { optionText: '45 km', isCorrect: false },
      { optionText: '13 km', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 4 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'To make juice, you mix 1 cup of concentrate with 4 cups of water.',
    questionText: 'If you want to make 15 cups of juice, how many cups of concentrate do you need?',
    hintText: 'Each batch is 1 + 4 = 5 cups. How many batches make 15?',
    explanation: '1 + 4 = 5 cups per batch. 15 / 5 = 3 batches. 3 x 1 = 3 cups of concentrate',
    options: [
      { optionText: '3', isCorrect: true },
      { optionText: '4', isCorrect: false },
      { optionText: '5', isCorrect: false },
      { optionText: '2', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 5 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'A coach divides 30 players into teams with boys and girls in the ratio 2:3.',
    questionText: 'How many girls are there?',
    hintText: '2 + 3 = 5 total parts. Find the girls part',
    explanation: '2 + 3 = 5 parts. Girls = 3/5 x 30 = 18',
    options: [
      { optionText: '18', isCorrect: true },
      { optionText: '12', isCorrect: false },
      { optionText: '15', isCorrect: false },
      { optionText: '20', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 6 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'Sara makes a fruit salad using bananas and apples in the ratio 2:5.',
    questionText: 'She uses 10 bananas. How many apples does she use?',
    hintText: '10 / 2 = 5, so multiply 5 by that same number',
    explanation: '10 / 2 = 5. So apples = 5 x 5 = 25',
    options: [
      { optionText: '25', isCorrect: true },
      { optionText: '20', isCorrect: false },
      { optionText: '15', isCorrect: false },
      { optionText: '30', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 7 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'A recipe for 4 people needs 6 eggs. You are cooking for 12 people.',
    questionText: 'How many eggs do you need?',
    hintText: '12 is how many times bigger than 4?',
    explanation: '12 / 4 = 3 times. So 6 x 3 = 18 eggs',
    options: [
      { optionText: '18', isCorrect: true },
      { optionText: '12', isCorrect: false },
      { optionText: '24', isCorrect: false },
      { optionText: '15', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 8 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'In a class, the ratio of boys to girls is 4:5. There are 36 students total.',
    questionText: 'How many boys are in the class?',
    hintText: '4 + 5 = 9 total parts. Each part = 36 / 9',
    explanation: '4 + 5 = 9 parts. Each part = 36 / 9 = 4. Boys = 4 x 4 = 16',
    options: [
      { optionText: '16', isCorrect: true },
      { optionText: '20', isCorrect: false },
      { optionText: '18', isCorrect: false },
      { optionText: '14', isCorrect: false },
    ],
  },

  // --- Topic 1, Open Ended 1 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'To make lemonade, you use 2 lemons for every 1 liter of water.',
    questionText: 'How many lemons do you need for 7 liters of water?',
    hintText: 'Multiply the number of liters by 2',
    explanation: '7 x 2 = 14 lemons',
    correctAnswer: '14',
    correctAnswerNumeric: 14,
  },

  // --- Topic 1, Open Ended 2 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'A bag of trail mix has nuts and dried fruit in the ratio 3:1.',
    questionText: 'If there are 9 cups of nuts, how many cups of dried fruit are there?',
    hintText: 'Divide the nuts by 3 to find 1 part',
    explanation: '9 / 3 = 3 cups of dried fruit',
    correctAnswer: '3',
    correctAnswerNumeric: 3,
  },

  // --- Topic 1, Open Ended 3 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'On a map, 2 cm represents 10 km.',
    questionText: 'Two villages are 7 cm apart on the map. What is the real distance in km?',
    hintText: '1 cm = 10 / 2 = 5 km. Multiply 7 by that',
    explanation: '1 cm = 5 km. 7 x 5 = 35 km',
    correctAnswer: '35',
    correctAnswerNumeric: 35,
  },

  // --- Topic 1, Open Ended 4 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'A school divides 48 books between two classes in the ratio 5:3.',
    questionText: 'How many books does the bigger class get?',
    hintText: '5 + 3 = 8 parts. Each part = 48 / 8',
    explanation: '5 + 3 = 8. Each part = 48 / 8 = 6. Bigger class = 5 x 6 = 30',
    correctAnswer: '30',
    correctAnswerNumeric: 30,
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 2: Percentages
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 2, MCQ 1 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'Mona scored 40 out of 50 on her math test.',
    questionText: 'What is her score as a percentage?',
    hintText: 'Divide her score by the total, then multiply by 100',
    explanation: '40 / 50 = 0.8. 0.8 x 100 = 80%',
    options: [
      { optionText: '80%', isCorrect: true },
      { optionText: '75%', isCorrect: false },
      { optionText: '90%', isCorrect: false },
      { optionText: '40%', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 2 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'There are 25 students in a class. 5 of them were absent today.',
    questionText: 'What percentage of the class was absent?',
    hintText: 'Divide 5 by 25, then multiply by 100',
    explanation: '5 / 25 = 0.2. 0.2 x 100 = 20%',
    options: [
      { optionText: '20%', isCorrect: true },
      { optionText: '25%', isCorrect: false },
      { optionText: '15%', isCorrect: false },
      { optionText: '5%', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 3 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'A farmer has 200 date trees. 50% of them gave fruit this year.',
    questionText: 'How many trees gave fruit?',
    hintText: '50% means half',
    explanation: '50% of 200 = 200 / 2 = 100 trees',
    options: [
      { optionText: '100', isCorrect: true },
      { optionText: '50', isCorrect: false },
      { optionText: '150', isCorrect: false },
      { optionText: '125', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 4 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'Ali answered 18 out of 20 questions correctly on a quiz.',
    questionText: 'What percentage did he get correct?',
    hintText: 'Divide 18 by 20, then multiply by 100',
    explanation: '18 / 20 = 0.9. 0.9 x 100 = 90%',
    options: [
      { optionText: '90%', isCorrect: true },
      { optionText: '85%', isCorrect: false },
      { optionText: '80%', isCorrect: false },
      { optionText: '95%', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 5 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'A school has 400 students. 25% of them play football.',
    questionText: 'How many students play football?',
    hintText: '25% means one quarter. Divide 400 by 4',
    explanation: '25% of 400 = 400 / 4 = 100 students',
    options: [
      { optionText: '100', isCorrect: true },
      { optionText: '75', isCorrect: false },
      { optionText: '125', isCorrect: false },
      { optionText: '200', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 6 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'Sara drank 300 ml of her 500 ml water bottle.',
    questionText: 'What percentage of the water did she drink?',
    hintText: 'Divide 300 by 500, then multiply by 100',
    explanation: '300 / 500 = 0.6. 0.6 x 100 = 60%',
    options: [
      { optionText: '60%', isCorrect: true },
      { optionText: '50%', isCorrect: false },
      { optionText: '65%', isCorrect: false },
      { optionText: '30%', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 7 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'In a bag of 40 apples, 10% are green and the rest are red.',
    questionText: 'How many green apples are there?',
    hintText: '10% means 10 out of every 100. For 40, divide by 10',
    explanation: '10% of 40 = 40 x 10 / 100 = 4 green apples',
    options: [
      { optionText: '4', isCorrect: true },
      { optionText: '10', isCorrect: false },
      { optionText: '8', isCorrect: false },
      { optionText: '6', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 8 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'Karim saved 150 pounds out of his goal of 300 pounds.',
    questionText: 'What percentage of his goal has he saved?',
    hintText: '150 is what fraction of 300?',
    explanation: '150 / 300 = 0.5. 0.5 x 100 = 50%',
    options: [
      { optionText: '50%', isCorrect: true },
      { optionText: '45%', isCorrect: false },
      { optionText: '60%', isCorrect: false },
      { optionText: '75%', isCorrect: false },
    ],
  },

  // --- Topic 2, Open Ended 1 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'A class has 50 students. 30 of them passed the science test.',
    questionText: 'What percentage of students passed?',
    hintText: 'Divide the number who passed by the total, then multiply by 100',
    explanation: '30 / 50 = 0.6. 0.6 x 100 = 60%',
    correctAnswer: '60',
    correctAnswerNumeric: 60,
  },

  // --- Topic 2, Open Ended 2 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'There are 80 dates in a box. 75% of them are fresh.',
    questionText: 'How many fresh dates are there?',
    hintText: '75% = 3/4. Divide 80 by 4, then multiply by 3',
    explanation: '75% of 80 = 80 x 75 / 100 = 60 fresh dates',
    correctAnswer: '60',
    correctAnswerNumeric: 60,
  },

  // --- Topic 2, Open Ended 3 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'Omar got 36 out of 40 on his English test.',
    questionText: 'What is his percentage score?',
    hintText: 'Divide 36 by 40 and multiply by 100',
    explanation: '36 / 40 = 0.9. 0.9 x 100 = 90%',
    correctAnswer: '90',
    correctAnswerNumeric: 90,
  },

  // --- Topic 2, Open Ended 4 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'A farm has 500 chickens. 20% of them are brown.',
    questionText: 'How many brown chickens are there?',
    hintText: '20% = 20/100. Multiply 500 by 20 and divide by 100',
    explanation: '20% of 500 = 500 x 20 / 100 = 100 brown chickens',
    correctAnswer: '100',
    correctAnswerNumeric: 100,
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 3: % Applications (discounts, price increase/decrease)
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 3, MCQ 1 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'A backpack costs 200 pounds. The shop gives a 10% discount.',
    questionText: 'What is the price after the discount?',
    hintText: 'Find 10% of 200, then subtract it from 200',
    explanation: '10% of 200 = 20. Price = 200 - 20 = 180 pounds',
    options: [
      { optionText: '180 pounds', isCorrect: true },
      { optionText: '190 pounds', isCorrect: false },
      { optionText: '170 pounds', isCorrect: false },
      { optionText: '160 pounds', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 2 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'A book costs 50 pounds. Its price went up by 20%.',
    questionText: 'What is the new price?',
    hintText: 'Find 20% of 50 and add it to the original price',
    explanation: '20% of 50 = 10. New price = 50 + 10 = 60 pounds',
    options: [
      { optionText: '60 pounds', isCorrect: true },
      { optionText: '70 pounds', isCorrect: false },
      { optionText: '55 pounds', isCorrect: false },
      { optionText: '65 pounds', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 3 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'A pair of shoes costs 300 pounds. There is a 25% sale.',
    questionText: 'How much do you save?',
    hintText: '25% = one quarter. Divide the price by 4',
    explanation: '25% of 300 = 300 / 4 = 75 pounds saved',
    options: [
      { optionText: '75 pounds', isCorrect: true },
      { optionText: '50 pounds', isCorrect: false },
      { optionText: '100 pounds', isCorrect: false },
      { optionText: '60 pounds', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 4 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'A shop sells a water bottle for 40 pounds. They add a 50% price increase.',
    questionText: 'What is the new price of the water bottle?',
    hintText: '50% means half. Find half of 40 and add it',
    explanation: '50% of 40 = 20. New price = 40 + 20 = 60 pounds',
    options: [
      { optionText: '60 pounds', isCorrect: true },
      { optionText: '80 pounds', isCorrect: false },
      { optionText: '50 pounds', isCorrect: false },
      { optionText: '45 pounds', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 5 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'Nour wants to buy a bike for 500 pounds. The store offers 30% off.',
    questionText: 'What is the sale price of the bike?',
    hintText: 'Find 30% of 500, then subtract from 500',
    explanation: '30% of 500 = 150. Sale price = 500 - 150 = 350 pounds',
    options: [
      { optionText: '350 pounds', isCorrect: true },
      { optionText: '400 pounds', isCorrect: false },
      { optionText: '300 pounds', isCorrect: false },
      { optionText: '370 pounds', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 6 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'A kilogram of bananas costs 20 pounds. The price increased by 15%.',
    questionText: 'What is the new price per kilogram?',
    hintText: '10% of 20 = 2, 5% of 20 = 1. Add them together and add to 20',
    explanation: '15% of 20 = 3. New price = 20 + 3 = 23 pounds',
    options: [
      { optionText: '23 pounds', isCorrect: true },
      { optionText: '25 pounds', isCorrect: false },
      { optionText: '22 pounds', isCorrect: false },
      { optionText: '35 pounds', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 7 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'A school bag originally costs 160 pounds. It is now on sale for 120 pounds.',
    questionText: 'What is the percentage discount?',
    hintText: 'Find the difference, then divide by the original price and multiply by 100',
    explanation: '160 - 120 = 40 saved. 40 / 160 = 0.25. 0.25 x 100 = 25%',
    options: [
      { optionText: '25%', isCorrect: true },
      { optionText: '20%', isCorrect: false },
      { optionText: '30%', isCorrect: false },
      { optionText: '40%', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 8 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'A liter of milk costs 25 pounds. After a price drop, it costs 20 pounds.',
    questionText: 'What is the percentage decrease in price?',
    hintText: 'Find the difference and divide by the original price, then multiply by 100',
    explanation: '25 - 20 = 5. 5 / 25 = 0.2. 0.2 x 100 = 20% decrease',
    options: [
      { optionText: '20%', isCorrect: true },
      { optionText: '25%', isCorrect: false },
      { optionText: '15%', isCorrect: false },
      { optionText: '5%', isCorrect: false },
    ],
  },

  // --- Topic 3, Open Ended 1 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'A jacket costs 400 pounds. The store gives a 15% discount.',
    questionText: 'What is the price after the discount?',
    hintText: 'Find 15% of 400, then subtract from 400',
    explanation: '15% of 400 = 60. Price = 400 - 60 = 340 pounds',
    correctAnswer: '340',
    correctAnswerNumeric: 340,
  },

  // --- Topic 3, Open Ended 2 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'A box of dates costs 80 pounds. The price goes up by 25%.',
    questionText: 'What is the new price?',
    hintText: '25% of 80 = one quarter of 80. Add that to 80',
    explanation: '25% of 80 = 20. New price = 80 + 20 = 100 pounds',
    correctAnswer: '100',
    correctAnswerNumeric: 100,
  },

  // --- Topic 3, Open Ended 3 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'A toy costs 250 pounds. You get a 20% discount.',
    questionText: 'How much money do you save?',
    hintText: 'Find 20% of 250. That is the amount you save',
    explanation: '20% of 250 = 250 x 20 / 100 = 50 pounds saved',
    correctAnswer: '50',
    correctAnswerNumeric: 50,
  },

  // --- Topic 3, Open Ended 4 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'A football was 60 pounds. Now it costs 48 pounds.',
    questionText: 'What is the percentage decrease?',
    hintText: 'Find the difference and divide by the original price, then multiply by 100',
    explanation: '60 - 48 = 12. 12 / 60 = 0.2. 0.2 x 100 = 20%',
    correctAnswer: '20',
    correctAnswerNumeric: 20,
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 4: Intro to Algebra
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 4, MCQ 1 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'Ahmed thinks of a number. He calls it x. He adds 7 to it and gets 15.',
    questionText: 'What is the value of x?',
    hintText: 'x + 7 = 15. What plus 7 equals 15?',
    explanation: 'x + 7 = 15, so x = 15 - 7 = 8',
    options: [
      { optionText: '8', isCorrect: true },
      { optionText: '7', isCorrect: false },
      { optionText: '22', isCorrect: false },
      { optionText: '9', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 2 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'Sara has some apples. We call the number of apples "a". She buys 5 more.',
    questionText: 'Which expression shows how many apples Sara has now?',
    hintText: 'She started with a and added 5',
    explanation: 'She had "a" apples and bought 5 more, so she has a + 5',
    options: [
      { optionText: 'a + 5', isCorrect: true },
      { optionText: 'a - 5', isCorrect: false },
      { optionText: '5a', isCorrect: false },
      { optionText: 'a / 5', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 3 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'Each student gets 3 pencils. There are n students in the class.',
    questionText: 'Which expression shows the total number of pencils?',
    hintText: 'Multiply the number of students by pencils per student',
    explanation: 'Total pencils = 3 times n = 3n',
    options: [
      { optionText: '3n', isCorrect: true },
      { optionText: 'n + 3', isCorrect: false },
      { optionText: 'n - 3', isCorrect: false },
      { optionText: 'n / 3', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 4 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'Mona has y pounds. She spends 10 pounds on a book.',
    questionText: 'Which expression shows how much money she has left?',
    hintText: 'She is spending money, so we subtract',
    explanation: 'She had y and spent 10, so she has y - 10 left',
    options: [
      { optionText: 'y - 10', isCorrect: true },
      { optionText: 'y + 10', isCorrect: false },
      { optionText: '10y', isCorrect: false },
      { optionText: '10 - y', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 5 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'If x = 4, you need to find the value of 2x + 3.',
    questionText: 'What is 2x + 3 when x = 4?',
    hintText: 'Replace x with 4: 2 times 4, then add 3',
    explanation: '2 x 4 = 8. 8 + 3 = 11',
    options: [
      { optionText: '11', isCorrect: true },
      { optionText: '9', isCorrect: false },
      { optionText: '10', isCorrect: false },
      { optionText: '14', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 6 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'A box has b balls. You take out 4 balls and 6 are left.',
    questionText: 'What is the value of b?',
    hintText: 'b - 4 = 6. Add 4 to both sides',
    explanation: 'b - 4 = 6, so b = 6 + 4 = 10',
    options: [
      { optionText: '10', isCorrect: true },
      { optionText: '2', isCorrect: false },
      { optionText: '8', isCorrect: false },
      { optionText: '24', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 7 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'Omar buys 4 notebooks. Each notebook costs p pounds. He pays 60 pounds total.',
    questionText: 'Which equation can help find the price of one notebook?',
    hintText: '4 notebooks times the price of each = total',
    explanation: '4 times p = 60, written as 4p = 60',
    options: [
      { optionText: '4p = 60', isCorrect: true },
      { optionText: 'p + 4 = 60', isCorrect: false },
      { optionText: 'p - 4 = 60', isCorrect: false },
      { optionText: '60p = 4', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 8 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'If m = 5, find the value of 3m - 2.',
    questionText: 'What is 3m - 2 when m = 5?',
    hintText: 'Replace m with 5: 3 times 5, then subtract 2',
    explanation: '3 x 5 = 15. 15 - 2 = 13',
    options: [
      { optionText: '13', isCorrect: true },
      { optionText: '17', isCorrect: false },
      { optionText: '8', isCorrect: false },
      { optionText: '10', isCorrect: false },
    ],
  },

  // --- Topic 4, Open Ended 1 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'I think of a number, multiply it by 2, and get 18.',
    questionText: 'What is the number?',
    hintText: 'If 2 times the number = 18, divide 18 by 2',
    explanation: '2 x ? = 18. ? = 18 / 2 = 9',
    correctAnswer: '9',
    correctAnswerNumeric: 9,
  },

  // --- Topic 4, Open Ended 2 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'If x = 6, find the value of 5x.',
    questionText: 'What is 5x when x = 6?',
    hintText: 'Replace x with 6 and multiply',
    explanation: '5 x 6 = 30',
    correctAnswer: '30',
    correctAnswerNumeric: 30,
  },

  // --- Topic 4, Open Ended 3 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'A number plus 12 equals 20.',
    questionText: 'What is the number?',
    hintText: 'Subtract 12 from 20',
    explanation: 'x + 12 = 20. x = 20 - 12 = 8',
    correctAnswer: '8',
    correctAnswerNumeric: 8,
  },

  // --- Topic 4, Open Ended 4 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'If y = 3, find the value of 4y + 1.',
    questionText: 'What is 4y + 1 when y = 3?',
    hintText: 'Replace y with 3: multiply first, then add',
    explanation: '4 x 3 = 12. 12 + 1 = 13',
    correctAnswer: '13',
    correctAnswerNumeric: 13,
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 5: Simple Equations
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 5, MCQ 1 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'Karim has some stickers. He gets 5 more and now has 12.',
    questionText: 'If x + 5 = 12, what is x?',
    hintText: 'Subtract 5 from both sides',
    explanation: 'x = 12 - 5 = 7',
    options: [
      { optionText: '7', isCorrect: true },
      { optionText: '17', isCorrect: false },
      { optionText: '5', isCorrect: false },
      { optionText: '8', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 2 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'Layla shares her apples equally among 3 friends. Each friend gets 8 apples.',
    questionText: 'If x / 3 = 8, what is x?',
    hintText: 'Multiply both sides by 3',
    explanation: 'x = 8 x 3 = 24',
    options: [
      { optionText: '24', isCorrect: true },
      { optionText: '11', isCorrect: false },
      { optionText: '5', isCorrect: false },
      { optionText: '18', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 3 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'A number multiplied by 4 gives 36.',
    questionText: 'If 4x = 36, what is x?',
    hintText: 'Divide both sides by 4',
    explanation: 'x = 36 / 4 = 9',
    options: [
      { optionText: '9', isCorrect: true },
      { optionText: '8', isCorrect: false },
      { optionText: '32', isCorrect: false },
      { optionText: '40', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 4 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'Ahmed had some money. He spent 15 pounds and has 25 pounds left.',
    questionText: 'If x - 15 = 25, what is x?',
    hintText: 'Add 15 to both sides',
    explanation: 'x = 25 + 15 = 40',
    options: [
      { optionText: '40', isCorrect: true },
      { optionText: '10', isCorrect: false },
      { optionText: '35', isCorrect: false },
      { optionText: '30', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 5 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'A teacher divides students into equal groups. 5 groups with x students each makes 35 students.',
    questionText: 'If 5x = 35, what is x?',
    hintText: 'Divide 35 by 5',
    explanation: 'x = 35 / 5 = 7',
    options: [
      { optionText: '7', isCorrect: true },
      { optionText: '30', isCorrect: false },
      { optionText: '40', isCorrect: false },
      { optionText: '6', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 6 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'Nadia adds 9 to a number and gets 21.',
    questionText: 'If x + 9 = 21, what is x?',
    hintText: 'Subtract 9 from 21',
    explanation: 'x = 21 - 9 = 12',
    options: [
      { optionText: '12', isCorrect: true },
      { optionText: '30', isCorrect: false },
      { optionText: '11', isCorrect: false },
      { optionText: '13', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 7 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'A farmer packs oranges into bags of 6. He has 42 oranges.',
    questionText: 'If 6x = 42, how many bags does he need?',
    hintText: 'Divide 42 by 6',
    explanation: 'x = 42 / 6 = 7 bags',
    options: [
      { optionText: '7', isCorrect: true },
      { optionText: '8', isCorrect: false },
      { optionText: '36', isCorrect: false },
      { optionText: '48', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 8 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'Sara takes some books from a shelf. She takes 8 and 14 are left.',
    questionText: 'If x - 8 = 14, how many books were on the shelf?',
    hintText: 'Add 8 to 14',
    explanation: 'x = 14 + 8 = 22 books',
    options: [
      { optionText: '22', isCorrect: true },
      { optionText: '6', isCorrect: false },
      { optionText: '20', isCorrect: false },
      { optionText: '18', isCorrect: false },
    ],
  },

  // --- Topic 5, Open Ended 1 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'A number multiplied by 7 equals 56.',
    questionText: 'If 7x = 56, what is x?',
    hintText: 'Divide 56 by 7',
    explanation: 'x = 56 / 7 = 8',
    correctAnswer: '8',
    correctAnswerNumeric: 8,
  },

  // --- Topic 5, Open Ended 2 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'You add 17 to a number and get 30.',
    questionText: 'If x + 17 = 30, what is x?',
    hintText: 'Subtract 17 from 30',
    explanation: 'x = 30 - 17 = 13',
    correctAnswer: '13',
    correctAnswerNumeric: 13,
  },

  // --- Topic 5, Open Ended 3 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'Omar divides his dates equally among 4 friends. Each gets 9.',
    questionText: 'If x / 4 = 9, how many dates did Omar have?',
    hintText: 'Multiply 9 by 4',
    explanation: 'x = 9 x 4 = 36',
    correctAnswer: '36',
    correctAnswerNumeric: 36,
  },

  // --- Topic 5, Open Ended 4 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'A number minus 23 equals 17.',
    questionText: 'If x - 23 = 17, what is x?',
    hintText: 'Add 23 to 17',
    explanation: 'x = 17 + 23 = 40',
    correctAnswer: '40',
    correctAnswerNumeric: 40,
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 6: Speed / Distance / Time
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 6, MCQ 1 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'A car travels at 60 km per hour.',
    questionText: 'How far does it go in 3 hours?',
    hintText: 'Distance = Speed x Time',
    explanation: 'Distance = 60 x 3 = 180 km',
    options: [
      { optionText: '180 km', isCorrect: true },
      { optionText: '120 km', isCorrect: false },
      { optionText: '200 km', isCorrect: false },
      { optionText: '63 km', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 2 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'A bus travels 200 km in 4 hours.',
    questionText: 'What is its speed?',
    hintText: 'Speed = Distance / Time',
    explanation: 'Speed = 200 / 4 = 50 km per hour',
    options: [
      { optionText: '50 km/h', isCorrect: true },
      { optionText: '40 km/h', isCorrect: false },
      { optionText: '800 km/h', isCorrect: false },
      { optionText: '55 km/h', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 3 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'Nour cycles at 15 km per hour. She needs to travel 45 km.',
    questionText: 'How long will it take her?',
    hintText: 'Time = Distance / Speed',
    explanation: 'Time = 45 / 15 = 3 hours',
    options: [
      { optionText: '3 hours', isCorrect: true },
      { optionText: '4 hours', isCorrect: false },
      { optionText: '2 hours', isCorrect: false },
      { optionText: '30 hours', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 4 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'A train goes at 80 km per hour for 2 hours, then 60 km per hour for 1 hour.',
    questionText: 'What is the total distance?',
    hintText: 'Find each part separately, then add them',
    explanation: '(80 x 2) + (60 x 1) = 160 + 60 = 220 km',
    options: [
      { optionText: '220 km', isCorrect: true },
      { optionText: '200 km', isCorrect: false },
      { optionText: '240 km', isCorrect: false },
      { optionText: '140 km', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 5 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'Ali walks at 5 km per hour. He walks for 2 hours.',
    questionText: 'How far does Ali walk?',
    hintText: 'Distance = Speed x Time',
    explanation: 'Distance = 5 x 2 = 10 km',
    options: [
      { optionText: '10 km', isCorrect: true },
      { optionText: '7 km', isCorrect: false },
      { optionText: '15 km', isCorrect: false },
      { optionText: '3 km', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 6 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'A plane flies 900 km in 3 hours.',
    questionText: 'What is the speed of the plane?',
    hintText: 'Speed = Distance / Time',
    explanation: 'Speed = 900 / 3 = 300 km per hour',
    options: [
      { optionText: '300 km/h', isCorrect: true },
      { optionText: '2700 km/h', isCorrect: false },
      { optionText: '250 km/h', isCorrect: false },
      { optionText: '350 km/h', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 7 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'A boat travels at 20 km per hour. It needs to cross a lake that is 100 km wide.',
    questionText: 'How many hours will the trip take?',
    hintText: 'Time = Distance / Speed',
    explanation: 'Time = 100 / 20 = 5 hours',
    options: [
      { optionText: '5 hours', isCorrect: true },
      { optionText: '4 hours', isCorrect: false },
      { optionText: '2000 hours', isCorrect: false },
      { optionText: '6 hours', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 8 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'Sara runs at 8 km per hour. Mona runs at 6 km per hour. They both run for 2 hours.',
    questionText: 'How much farther does Sara run than Mona?',
    hintText: 'Find each distance, then subtract',
    explanation: 'Sara: 8 x 2 = 16 km. Mona: 6 x 2 = 12 km. Difference = 16 - 12 = 4 km',
    options: [
      { optionText: '4 km', isCorrect: true },
      { optionText: '2 km', isCorrect: false },
      { optionText: '6 km', isCorrect: false },
      { optionText: '8 km', isCorrect: false },
    ],
  },

  // --- Topic 6, Open Ended 1 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'A car travels at 70 km per hour for 4 hours.',
    questionText: 'How far does the car go?',
    hintText: 'Distance = Speed x Time',
    explanation: 'Distance = 70 x 4 = 280 km',
    correctAnswer: '280',
    correctAnswerNumeric: 280,
  },

  // --- Topic 6, Open Ended 2 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'A cyclist rides 120 km in 6 hours.',
    questionText: 'What is the cyclist speed in km per hour?',
    hintText: 'Speed = Distance / Time',
    explanation: 'Speed = 120 / 6 = 20 km per hour',
    correctAnswer: '20',
    correctAnswerNumeric: 20,
  },

  // --- Topic 6, Open Ended 3 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'A train travels at 90 km per hour. The trip is 270 km.',
    questionText: 'How many hours does the trip take?',
    hintText: 'Time = Distance / Speed',
    explanation: 'Time = 270 / 90 = 3 hours',
    correctAnswer: '3',
    correctAnswerNumeric: 3,
  },

  // --- Topic 6, Open Ended 4 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'Omar jogs at 10 km per hour for 3 hours.',
    questionText: 'What distance does Omar cover?',
    hintText: 'Distance = Speed x Time',
    explanation: 'Distance = 10 x 3 = 30 km',
    correctAnswer: '30',
    correctAnswerNumeric: 30,
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 7: Averages
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 7, MCQ 1 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'Ali got these scores on 4 tests: 80, 90, 70, and 60.',
    questionText: 'What is the average of his scores?',
    hintText: 'Add all scores, then divide by 4',
    explanation: '80 + 90 + 70 + 60 = 300. 300 / 4 = 75',
    options: [
      { optionText: '75', isCorrect: true },
      { optionText: '80', isCorrect: false },
      { optionText: '70', isCorrect: false },
      { optionText: '300', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 2 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'The temperature for 5 days was: 30, 32, 28, 34, and 31 degrees.',
    questionText: 'What is the average temperature?',
    hintText: 'Add all temperatures, then divide by 5',
    explanation: '30 + 32 + 28 + 34 + 31 = 155. 155 / 5 = 31',
    options: [
      { optionText: '31', isCorrect: true },
      { optionText: '30', isCorrect: false },
      { optionText: '32', isCorrect: false },
      { optionText: '155', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 3 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'Sara scored 85, 90, and 95 on three math quizzes.',
    questionText: 'What is her average score?',
    hintText: 'Add the three scores and divide by 3',
    explanation: '85 + 90 + 95 = 270. 270 / 3 = 90',
    options: [
      { optionText: '90', isCorrect: true },
      { optionText: '85', isCorrect: false },
      { optionText: '95', isCorrect: false },
      { optionText: '270', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 4 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'The average of 3 numbers is 20. Two of the numbers are 15 and 25.',
    questionText: 'What is the third number?',
    hintText: 'If the average is 20 and there are 3 numbers, the total is 60',
    explanation: 'Total = 20 x 3 = 60. Third number = 60 - 15 - 25 = 20',
    options: [
      { optionText: '20', isCorrect: true },
      { optionText: '10', isCorrect: false },
      { optionText: '30', isCorrect: false },
      { optionText: '25', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 5 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'Five friends weigh: 40, 45, 50, 35, and 55 kg.',
    questionText: 'What is their average weight?',
    hintText: 'Add all weights and divide by 5',
    explanation: '40 + 45 + 50 + 35 + 55 = 225. 225 / 5 = 45 kg',
    options: [
      { optionText: '45 kg', isCorrect: true },
      { optionText: '50 kg', isCorrect: false },
      { optionText: '40 kg', isCorrect: false },
      { optionText: '225 kg', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 6 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'Mona bought 4 items: a notebook for 10 pounds, a pen for 5 pounds, an eraser for 3 pounds, and a ruler for 2 pounds.',
    questionText: 'What is the average price of the items?',
    hintText: 'Add all prices and divide by 4',
    explanation: '10 + 5 + 3 + 2 = 20. 20 / 4 = 5 pounds',
    options: [
      { optionText: '5 pounds', isCorrect: true },
      { optionText: '4 pounds', isCorrect: false },
      { optionText: '6 pounds', isCorrect: false },
      { optionText: '20 pounds', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 7 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'A football team scored 2, 1, 3, 0, and 4 goals in 5 matches.',
    questionText: 'What is the average number of goals per match?',
    hintText: 'Add all goals and divide by the number of matches',
    explanation: '2 + 1 + 3 + 0 + 4 = 10. 10 / 5 = 2 goals per match',
    options: [
      { optionText: '2', isCorrect: true },
      { optionText: '3', isCorrect: false },
      { optionText: '10', isCorrect: false },
      { optionText: '4', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 8 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'The average of 4 numbers is 15. The numbers are 10, 20, 12, and x.',
    questionText: 'What is the value of x?',
    hintText: 'Total = average x count = 15 x 4 = 60. Subtract the known numbers',
    explanation: 'Total = 60. x = 60 - 10 - 20 - 12 = 18',
    options: [
      { optionText: '18', isCorrect: true },
      { optionText: '15', isCorrect: false },
      { optionText: '20', isCorrect: false },
      { optionText: '13', isCorrect: false },
    ],
  },

  // --- Topic 7, Open Ended 1 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'Omar read 4, 6, 8, and 2 pages on four days.',
    questionText: 'What is the average number of pages per day?',
    hintText: 'Add the pages and divide by 4',
    explanation: '4 + 6 + 8 + 2 = 20. 20 / 4 = 5 pages per day',
    correctAnswer: '5',
    correctAnswerNumeric: 5,
  },

  // --- Topic 7, Open Ended 2 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'Three baskets hold 12, 18, and 15 apples.',
    questionText: 'What is the average number of apples per basket?',
    hintText: 'Add the totals and divide by 3',
    explanation: '12 + 18 + 15 = 45. 45 / 3 = 15 apples',
    correctAnswer: '15',
    correctAnswerNumeric: 15,
  },

  // --- Topic 7, Open Ended 3 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'The average height of 5 students is 140 cm. Four of them are 135, 145, 130, and 150 cm.',
    questionText: 'What is the height of the fifth student?',
    hintText: 'Total = 140 x 5 = 700. Subtract the four known heights',
    explanation: 'Total = 700. Fifth = 700 - 135 - 145 - 130 - 150 = 140 cm',
    correctAnswer: '140',
    correctAnswerNumeric: 140,
  },

  // --- Topic 7, Open Ended 4 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'A shop sold 20, 30, 25, 35, and 40 bottles of water over 5 days.',
    questionText: 'What is the average number of bottles sold per day?',
    hintText: 'Add all the bottles and divide by 5',
    explanation: '20 + 30 + 25 + 35 + 40 = 150. 150 / 5 = 30 bottles',
    correctAnswer: '30',
    correctAnswerNumeric: 30,
  },
];
