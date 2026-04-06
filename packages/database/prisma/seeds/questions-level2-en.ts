import type { QuestionSeed } from './questions-level1';

export const level2QuestionsEn: QuestionSeed[] = [
  // =============================================
  // Topic 1: Add/Subtract Fractions (same denominator)
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 1 - MCQ 1
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'You ate some pieces of a cake that was cut into equal slices.',
    questionText: 'You ate 2/7 of the cake, then you ate 3/7 more. How much cake did you eat in total?',
    hintText: 'When the bottom numbers are the same, just add the top numbers',
    explanation: '2/7 + 3/7 = 5/7',
    options: [
      { optionText: '5/7', isCorrect: true },
      { optionText: '5/14', isCorrect: false },
      { optionText: '6/7', isCorrect: false },
      { optionText: '1/7', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 2
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'A water bottle is partly full.',
    questionText: 'A water bottle was 5/6 full. You drank 2/6 of it. How much water is left?',
    hintText: 'Subtract the top numbers when the bottom numbers are the same',
    explanation: '5/6 - 2/6 = 3/6 = 1/2',
    options: [
      { optionText: '3/6', isCorrect: true },
      { optionText: '3/12', isCorrect: false },
      { optionText: '7/6', isCorrect: false },
      { optionText: '2/6', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 3
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'Two friends are painting a wall together.',
    questionText: 'Sara painted 3/10 of the wall and Nour painted 4/10. How much did they paint together?',
    hintText: 'Add the top numbers, keep the bottom number the same',
    explanation: '3/10 + 4/10 = 7/10',
    options: [
      { optionText: '7/10', isCorrect: true },
      { optionText: '7/20', isCorrect: false },
      { optionText: '1/10', isCorrect: false },
      { optionText: '12/10', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 4
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'You are filling a jar with dates.',
    questionText: 'The jar is 7/8 full. You took out 3/8 to give to your friend. How full is the jar now?',
    hintText: 'Subtract the top numbers',
    explanation: '7/8 - 3/8 = 4/8 = 1/2',
    options: [
      { optionText: '4/8', isCorrect: true },
      { optionText: '4/16', isCorrect: false },
      { optionText: '10/8', isCorrect: false },
      { optionText: '3/8', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 5
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'You walked part of the way to school, then ran the rest.',
    questionText: 'You walked 1/5 of the way and ran 3/5 of the way. How much of the way have you covered?',
    hintText: 'Add the top numbers',
    explanation: '1/5 + 3/5 = 4/5',
    options: [
      { optionText: '4/5', isCorrect: true },
      { optionText: '4/10', isCorrect: false },
      { optionText: '2/5', isCorrect: false },
      { optionText: '3/5', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 6
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'A garden has flowers and trees.',
    questionText: '4/9 of the garden is flowers and 2/9 is trees. What fraction of the garden is flowers and trees together?',
    hintText: 'Add the two fractions',
    explanation: '4/9 + 2/9 = 6/9 = 2/3',
    options: [
      { optionText: '6/9', isCorrect: true },
      { optionText: '6/18', isCorrect: false },
      { optionText: '2/9', isCorrect: false },
      { optionText: '8/9', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 7
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'You have a piece of ribbon.',
    questionText: 'Your ribbon is 8/12 of a meter. You cut off 5/12 of a meter. How much ribbon is left?',
    hintText: 'Subtract the top numbers',
    explanation: '8/12 - 5/12 = 3/12 = 1/4 of a meter',
    options: [
      { optionText: '3/12', isCorrect: true },
      { optionText: '3/24', isCorrect: false },
      { optionText: '13/12', isCorrect: false },
      { optionText: '5/12', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 8
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'Mom used flour from a bag to bake bread.',
    questionText: 'Mom had 6/6 (a full bag) of flour. She used 2/6 for bread and 1/6 for a cake. How much flour is left?',
    hintText: 'Subtract both amounts from 6/6',
    explanation: '6/6 - 2/6 - 1/6 = 3/6 = 1/2',
    options: [
      { optionText: '3/6', isCorrect: true },
      { optionText: '5/6', isCorrect: false },
      { optionText: '1/6', isCorrect: false },
      { optionText: '4/6', isCorrect: false },
    ],
  },

  // Topic 1 - Open Ended 1
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'You drank juice from a bottle.',
    questionText: 'You drank 2/9 of the juice, then 4/9 more. What fraction did you drink in total? Write just the top number.',
    hintText: 'Add the top numbers: 2 + 4',
    explanation: '2/9 + 4/9 = 6/9. The top number is 6',
    correctAnswer: '6',
    correctAnswerNumeric: 6,
  },

  // Topic 1 - Open Ended 2
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'A tank was full of water.',
    questionText: 'A tank is 10/10 full. You used 3/10 for watering plants. What fraction is left? Write just the top number.',
    hintText: '10 - 3 = ?',
    explanation: '10/10 - 3/10 = 7/10. The top number is 7',
    correctAnswer: '7',
    correctAnswerNumeric: 7,
  },

  // Topic 1 - Open Ended 3
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'You colored parts of a drawing.',
    questionText: 'You colored 1/8, then 2/8, then 3/8 of a drawing. What fraction did you color in total? Write just the top number.',
    hintText: 'Add the top numbers: 1 + 2 + 3',
    explanation: '1/8 + 2/8 + 3/8 = 6/8. The top number is 6',
    correctAnswer: '6',
    correctAnswerNumeric: 6,
  },

  // Topic 1 - Open Ended 4
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'You are eating a bar of dates.',
    questionText: 'A date bar has 5 equal pieces. You ate 3 pieces. How many pieces are left?',
    hintText: '5 - 3 = ?',
    explanation: '5 - 3 = 2 pieces left (2/5 of the bar)',
    correctAnswer: '2',
    correctAnswerNumeric: 2,
  },

  // =============================================
  // Topic 2: Decimals (reading, comparing, ordering)
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 2 - MCQ 1
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'You are reading the price tag on a toy.',
    questionText: 'The price tag says 12.50 pounds. What does the 5 mean in this number?',
    hintText: 'The digit after the decimal point is in the tenths place',
    explanation: 'In 12.50, the 5 is in the tenths place, so it means 5 tenths',
    options: [
      { optionText: '5 tenths', isCorrect: true },
      { optionText: '5 ones', isCorrect: false },
      { optionText: '5 hundredths', isCorrect: false },
      { optionText: '50', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 2
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'You are comparing two runners in a race.',
    questionText: 'Ali finished the race in 12.3 seconds. Omar finished in 12.7 seconds. Who was faster?',
    hintText: 'In a race, a smaller time means faster',
    explanation: '12.3 < 12.7, so Ali was faster',
    options: [
      { optionText: 'Ali', isCorrect: true },
      { optionText: 'Omar', isCorrect: false },
      { optionText: 'They tied', isCorrect: false },
      { optionText: 'Cannot tell', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 3
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'You are ordering numbers in math class.',
    questionText: 'Which list is in order from smallest to biggest? 0.3, 0.35, 0.4',
    hintText: 'Compare the tenths first, then hundredths',
    explanation: '0.3 = 0.30 < 0.35 < 0.4 = 0.40. This order is correct',
    options: [
      { optionText: '0.3, 0.35, 0.4', isCorrect: true },
      { optionText: '0.35, 0.3, 0.4', isCorrect: false },
      { optionText: '0.4, 0.35, 0.3', isCorrect: false },
      { optionText: '0.3, 0.4, 0.35', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 4
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'You measured your pencil with a ruler.',
    questionText: 'Your pencil is 15.8 cm long. Which whole number is 15.8 closest to?',
    hintText: 'Is 15.8 closer to 15 or 16?',
    explanation: '15.8 is closer to 16 (only 0.2 away) than to 15 (0.8 away)',
    options: [
      { optionText: '16', isCorrect: true },
      { optionText: '15', isCorrect: false },
      { optionText: '17', isCorrect: false },
      { optionText: '14', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 5
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'You are comparing prices at two shops.',
    questionText: 'Shop A sells apples for 3.45 pounds per kg. Shop B sells them for 3.54 pounds per kg. Which is cheaper?',
    hintText: 'Compare the numbers. The smaller price is cheaper',
    explanation: '3.45 < 3.54, so Shop A is cheaper',
    options: [
      { optionText: 'Shop A', isCorrect: true },
      { optionText: 'Shop B', isCorrect: false },
      { optionText: 'Same price', isCorrect: false },
      { optionText: 'Cannot tell', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 6
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'You are reading a thermometer.',
    questionText: 'The temperature is 36.7 degrees. What is the digit in the tenths place?',
    hintText: 'The tenths place is the first digit after the decimal point',
    explanation: 'In 36.7, the digit 7 is in the tenths place',
    options: [
      { optionText: '7', isCorrect: true },
      { optionText: '6', isCorrect: false },
      { optionText: '3', isCorrect: false },
      { optionText: '36', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 7
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'You are writing a decimal number.',
    questionText: 'Which decimal number means "seven and three tenths"?',
    hintText: 'The whole number part is 7, and 3 tenths goes after the decimal point',
    explanation: 'Seven and three tenths = 7.3',
    options: [
      { optionText: '7.3', isCorrect: true },
      { optionText: '7.03', isCorrect: false },
      { optionText: '73.0', isCorrect: false },
      { optionText: '0.73', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 8
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'You are putting weights in order.',
    questionText: 'Put these weights in order from lightest to heaviest: 2.15 kg, 2.5 kg, 2.05 kg',
    hintText: 'Compare digit by digit after the decimal point',
    explanation: '2.05 < 2.15 < 2.5 (or 2.50)',
    options: [
      { optionText: '2.05, 2.15, 2.5', isCorrect: true },
      { optionText: '2.5, 2.15, 2.05', isCorrect: false },
      { optionText: '2.05, 2.5, 2.15', isCorrect: false },
      { optionText: '2.15, 2.05, 2.5', isCorrect: false },
    ],
  },

  // Topic 2 - Open Ended 1
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'You are learning about decimals.',
    questionText: 'Write 4 and 6 tenths as a decimal number. (Example: 3 and 2 tenths = 3.2)',
    hintText: 'Put 4 before the decimal point and 6 after',
    explanation: '4 and 6 tenths = 4.6',
    correctAnswer: '4.6',
    correctAnswerNumeric: 4.6,
  },

  // Topic 2 - Open Ended 2
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'You weighed a bag of bananas.',
    questionText: 'The bananas weigh 1.75 kg. What digit is in the hundredths place?',
    hintText: 'The hundredths place is the second digit after the decimal point',
    explanation: 'In 1.75, the 5 is in the hundredths place',
    correctAnswer: '5',
    correctAnswerNumeric: 5,
  },

  // Topic 2 - Open Ended 3
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'You are comparing two decimal numbers.',
    questionText: 'How many tenths are in 0.9?',
    hintText: 'The digit after the decimal tells you the number of tenths',
    explanation: '0.9 = 9 tenths',
    correctAnswer: '9',
    correctAnswerNumeric: 9,
  },

  // Topic 2 - Open Ended 4
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'You measured the length of a table.',
    questionText: 'The table is 2.48 meters long. What is this number rounded to the nearest tenth?',
    hintText: 'Look at the hundredths digit (8). Is it 5 or more?',
    explanation: '2.48 rounded to the nearest tenth is 2.5 (because 8 >= 5)',
    correctAnswer: '2.5',
    correctAnswerNumeric: 2.5,
  },

  // =============================================
  // Topic 3: Add/Subtract Decimals
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 3 - MCQ 1
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'You bought a notebook and an eraser from the shop.',
    questionText: 'The notebook costs 4.50 pounds and the eraser costs 1.25 pounds. What is the total?',
    hintText: 'Line up the decimal points and add',
    explanation: '4.50 + 1.25 = 5.75 pounds',
    options: [
      { optionText: '5.75 pounds', isCorrect: true },
      { optionText: '5.25 pounds', isCorrect: false },
      { optionText: '5.70 pounds', isCorrect: false },
      { optionText: '6.75 pounds', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 2
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'You had money in your pocket.',
    questionText: 'You had 10.00 pounds and spent 3.75 pounds on juice. How much is left?',
    hintText: 'Subtract 3.75 from 10.00',
    explanation: '10.00 - 3.75 = 6.25 pounds',
    options: [
      { optionText: '6.25 pounds', isCorrect: true },
      { optionText: '7.25 pounds', isCorrect: false },
      { optionText: '6.75 pounds', isCorrect: false },
      { optionText: '6.35 pounds', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 3
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'You ran two laps around the playground.',
    questionText: 'The first lap took 2.4 minutes and the second took 2.8 minutes. What is the total time?',
    hintText: 'Add 2.4 + 2.8',
    explanation: '2.4 + 2.8 = 5.2 minutes',
    options: [
      { optionText: '5.2 minutes', isCorrect: true },
      { optionText: '5.0 minutes', isCorrect: false },
      { optionText: '4.12 minutes', isCorrect: false },
      { optionText: '5.12 minutes', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 4
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'You weighed two bags of fruit.',
    questionText: 'One bag weighs 3.65 kg and the other weighs 2.15 kg. What is the difference in weight?',
    hintText: 'Subtract the smaller from the bigger',
    explanation: '3.65 - 2.15 = 1.50 kg',
    options: [
      { optionText: '1.50 kg', isCorrect: true },
      { optionText: '1.40 kg', isCorrect: false },
      { optionText: '5.80 kg', isCorrect: false },
      { optionText: '1.60 kg', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 5
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'You bought milk and bread.',
    questionText: 'Milk costs 8.50 pounds and bread costs 6.75 pounds. What is the total cost?',
    hintText: 'Add 8.50 + 6.75',
    explanation: '8.50 + 6.75 = 15.25 pounds',
    options: [
      { optionText: '15.25 pounds', isCorrect: true },
      { optionText: '14.25 pounds', isCorrect: false },
      { optionText: '15.75 pounds', isCorrect: false },
      { optionText: '15.15 pounds', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 6
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'You are measuring how much you grew.',
    questionText: 'Last year you were 1.35 m tall. Now you are 1.42 m. How much did you grow?',
    hintText: 'Subtract last year from this year',
    explanation: '1.42 - 1.35 = 0.07 m = 7 cm',
    options: [
      { optionText: '0.07 m', isCorrect: true },
      { optionText: '0.7 m', isCorrect: false },
      { optionText: '0.17 m', isCorrect: false },
      { optionText: '0.03 m', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 7
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'You poured water from two bottles into a jug.',
    questionText: 'One bottle has 0.75 L and the other has 0.50 L. How much water is in the jug?',
    hintText: 'Add 0.75 + 0.50',
    explanation: '0.75 + 0.50 = 1.25 L',
    options: [
      { optionText: '1.25 L', isCorrect: true },
      { optionText: '1.20 L', isCorrect: false },
      { optionText: '0.125 L', isCorrect: false },
      { optionText: '1.75 L', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 8
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'Dad gave you money to buy school supplies.',
    questionText: 'Dad gave you 20.00 pounds. You spent 7.85 pounds. How much change do you have?',
    hintText: 'Subtract 7.85 from 20.00',
    explanation: '20.00 - 7.85 = 12.15 pounds',
    options: [
      { optionText: '12.15 pounds', isCorrect: true },
      { optionText: '13.15 pounds', isCorrect: false },
      { optionText: '12.25 pounds', isCorrect: false },
      { optionText: '11.15 pounds', isCorrect: false },
    ],
  },

  // Topic 3 - Open Ended 1
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'You bought two items from the shop.',
    questionText: 'A ruler costs 2.30 pounds and a pencil costs 1.50 pounds. What is the total?',
    hintText: 'Add 2.30 + 1.50',
    explanation: '2.30 + 1.50 = 3.80 pounds',
    correctAnswer: '3.8',
    correctAnswerNumeric: 3.8,
  },

  // Topic 3 - Open Ended 2
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'You are measuring ribbon.',
    questionText: 'You have 5.00 meters of ribbon. You cut off 1.75 meters. How many meters are left?',
    hintText: 'Subtract 1.75 from 5.00',
    explanation: '5.00 - 1.75 = 3.25 meters',
    correctAnswer: '3.25',
    correctAnswerNumeric: 3.25,
  },

  // Topic 3 - Open Ended 3
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'You walked to school and back.',
    questionText: 'The walk to school is 0.8 km. You walk there and back. What is the total distance in km?',
    hintText: 'Add 0.8 + 0.8',
    explanation: '0.8 + 0.8 = 1.6 km',
    correctAnswer: '1.6',
    correctAnswerNumeric: 1.6,
  },

  // Topic 3 - Open Ended 4
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'You had a bottle of juice.',
    questionText: 'You had 2.00 liters of juice. You drank 0.65 liters. How many liters are left?',
    hintText: 'Subtract 0.65 from 2.00',
    explanation: '2.00 - 0.65 = 1.35 liters',
    correctAnswer: '1.35',
    correctAnswerNumeric: 1.35,
  },

  // =============================================
  // Topic 4: Time Calculations
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 4 - MCQ 1
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'You started your homework after school.',
    questionText: 'You started homework at 4:15 PM and finished at 5:00 PM. How long did it take?',
    hintText: 'Count the minutes from 4:15 to 5:00',
    explanation: 'From 4:15 to 5:00 = 45 minutes',
    options: [
      { optionText: '45 minutes', isCorrect: true },
      { optionText: '55 minutes', isCorrect: false },
      { optionText: '30 minutes', isCorrect: false },
      { optionText: '1 hour', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 2
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'The school day starts in the morning.',
    questionText: 'School starts at 7:30 AM and ends at 2:00 PM. How many hours is the school day?',
    hintText: 'Count the hours from 7:30 to 2:00',
    explanation: '7:30 to 2:00 = 6 hours and 30 minutes',
    options: [
      { optionText: '6 hours 30 minutes', isCorrect: true },
      { optionText: '7 hours', isCorrect: false },
      { optionText: '5 hours 30 minutes', isCorrect: false },
      { optionText: '6 hours', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 3
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'You are watching a movie with your family.',
    questionText: 'The movie starts at 6:45 PM and is 1 hour 30 minutes long. What time does it end?',
    hintText: 'Add 1 hour 30 minutes to 6:45',
    explanation: '6:45 + 1:30 = 8:15 PM',
    options: [
      { optionText: '8:15 PM', isCorrect: true },
      { optionText: '7:15 PM', isCorrect: false },
      { optionText: '8:45 PM', isCorrect: false },
      { optionText: '7:45 PM', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 4
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'You are waiting for the school bus.',
    questionText: 'The bus comes every 20 minutes. You just missed the 8:00 AM bus. When is the next one?',
    hintText: 'Add 20 minutes to 8:00',
    explanation: '8:00 + 20 minutes = 8:20 AM',
    options: [
      { optionText: '8:20 AM', isCorrect: true },
      { optionText: '8:10 AM', isCorrect: false },
      { optionText: '8:30 AM', isCorrect: false },
      { optionText: '8:40 AM', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 5
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'You are baking a cake with mom.',
    questionText: 'The cake goes in the oven at 3:20 PM. It needs to bake for 45 minutes. When should you take it out?',
    hintText: 'Add 45 minutes to 3:20',
    explanation: '3:20 + 45 = 4:05 PM',
    options: [
      { optionText: '4:05 PM', isCorrect: true },
      { optionText: '3:65 PM', isCorrect: false },
      { optionText: '4:15 PM', isCorrect: false },
      { optionText: '3:55 PM', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 6
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'Your family is driving to visit your grandparents.',
    questionText: 'You left home at 9:00 AM and arrived at 11:30 AM. How long was the drive?',
    hintText: 'Count the hours and minutes from 9:00 to 11:30',
    explanation: '9:00 to 11:30 = 2 hours 30 minutes',
    options: [
      { optionText: '2 hours 30 minutes', isCorrect: true },
      { optionText: '3 hours', isCorrect: false },
      { optionText: '2 hours', isCorrect: false },
      { optionText: '1 hour 30 minutes', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 7
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'You have different activities after school.',
    questionText: 'Soccer practice is 1 hour 15 minutes. Homework takes 50 minutes. How long are both together?',
    hintText: 'Add 1 hour 15 minutes + 50 minutes',
    explanation: '1:15 + 0:50 = 2 hours 5 minutes',
    options: [
      { optionText: '2 hours 5 minutes', isCorrect: true },
      { optionText: '1 hour 65 minutes', isCorrect: false },
      { optionText: '2 hours 15 minutes', isCorrect: false },
      { optionText: '1 hour 55 minutes', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 8
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'You are planning your morning before school.',
    questionText: 'You wake up at 6:30 AM. You need 90 minutes to get ready and eat breakfast. What time will you be ready?',
    hintText: '90 minutes = 1 hour 30 minutes. Add to 6:30',
    explanation: '6:30 + 1:30 = 8:00 AM',
    options: [
      { optionText: '8:00 AM', isCorrect: true },
      { optionText: '7:30 AM', isCorrect: false },
      { optionText: '7:00 AM', isCorrect: false },
      { optionText: '8:30 AM', isCorrect: false },
    ],
  },

  // Topic 4 - Open Ended 1
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'You timed how long you read a book.',
    questionText: 'You started reading at 5:00 PM and stopped at 5:35 PM. How many minutes did you read?',
    hintText: 'Count the minutes from 5:00 to 5:35',
    explanation: '5:35 - 5:00 = 35 minutes',
    correctAnswer: '35',
    correctAnswerNumeric: 35,
  },

  // Topic 4 - Open Ended 2
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'You have two classes in the morning.',
    questionText: 'Math class is 40 minutes and Science class is 40 minutes. What is the total time in minutes?',
    hintText: 'Add 40 + 40',
    explanation: '40 + 40 = 80 minutes',
    correctAnswer: '80',
    correctAnswerNumeric: 80,
  },

  // Topic 4 - Open Ended 3
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'You are timing your walk to school.',
    questionText: 'You left home at 7:10 AM and arrived at school at 7:40 AM. How many minutes did the walk take?',
    hintText: 'Subtract 7:10 from 7:40',
    explanation: '7:40 - 7:10 = 30 minutes',
    correctAnswer: '30',
    correctAnswerNumeric: 30,
  },

  // Topic 4 - Open Ended 4
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'You slept for a nap in the afternoon.',
    questionText: 'How many minutes are in 2 hours?',
    hintText: '1 hour = 60 minutes',
    explanation: '2 x 60 = 120 minutes',
    correctAnswer: '120',
    correctAnswerNumeric: 120,
  },

  // =============================================
  // Topic 5: Perimeter & Area (rectangles, squares)
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 5 - MCQ 1
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'You are putting a fence around a garden.',
    questionText: 'A garden is 8 m long and 5 m wide. What is the perimeter?',
    hintText: 'Perimeter = 2 x (length + width)',
    explanation: 'Perimeter = 2 x (8 + 5) = 2 x 13 = 26 m',
    options: [
      { optionText: '26 m', isCorrect: true },
      { optionText: '40 m', isCorrect: false },
      { optionText: '13 m', isCorrect: false },
      { optionText: '21 m', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 2
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'You are covering the floor of your room with tiles.',
    questionText: 'Your room is 4 m long and 3 m wide. What is the area?',
    hintText: 'Area = length x width',
    explanation: 'Area = 4 x 3 = 12 square meters',
    options: [
      { optionText: '12 square meters', isCorrect: true },
      { optionText: '14 square meters', isCorrect: false },
      { optionText: '7 square meters', isCorrect: false },
      { optionText: '24 square meters', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 3
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'You are putting a border around a square photo.',
    questionText: 'A square photo has sides of 6 cm. What is the perimeter?',
    hintText: 'For a square, perimeter = 4 x side',
    explanation: 'Perimeter = 4 x 6 = 24 cm',
    options: [
      { optionText: '24 cm', isCorrect: true },
      { optionText: '36 cm', isCorrect: false },
      { optionText: '12 cm', isCorrect: false },
      { optionText: '18 cm', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 4
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'You are covering a table with paper.',
    questionText: 'A table is 120 cm long and 80 cm wide. What is its area?',
    hintText: 'Area = length x width',
    explanation: '120 x 80 = 9,600 square cm',
    options: [
      { optionText: '9,600 sq cm', isCorrect: true },
      { optionText: '400 sq cm', isCorrect: false },
      { optionText: '960 sq cm', isCorrect: false },
      { optionText: '200 sq cm', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 5
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'A football field has a rectangular shape.',
    questionText: 'A small football field is 50 m long and 30 m wide. What is the perimeter?',
    hintText: 'Perimeter = 2 x (length + width)',
    explanation: 'Perimeter = 2 x (50 + 30) = 2 x 80 = 160 m',
    options: [
      { optionText: '160 m', isCorrect: true },
      { optionText: '1,500 m', isCorrect: false },
      { optionText: '80 m', isCorrect: false },
      { optionText: '200 m', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 6
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'You are finding the area of a square classroom.',
    questionText: 'A square classroom has sides of 7 m. What is the area?',
    hintText: 'Area of a square = side x side',
    explanation: 'Area = 7 x 7 = 49 square meters',
    options: [
      { optionText: '49 square meters', isCorrect: true },
      { optionText: '28 square meters', isCorrect: false },
      { optionText: '14 square meters', isCorrect: false },
      { optionText: '56 square meters', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 7
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'You have a rectangular piece of paper.',
    questionText: 'A rectangle has a perimeter of 30 cm. The length is 10 cm. What is the width?',
    hintText: 'Perimeter = 2 x (length + width). So 30 = 2 x (10 + width)',
    explanation: '30 = 2 x (10 + width). 15 = 10 + width. Width = 5 cm',
    options: [
      { optionText: '5 cm', isCorrect: true },
      { optionText: '10 cm', isCorrect: false },
      { optionText: '20 cm', isCorrect: false },
      { optionText: '15 cm', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 8
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'Dad is buying paint for a wall.',
    questionText: 'The wall is 5 m long and 3 m high. What is the area of the wall?',
    hintText: 'Area = length x height',
    explanation: '5 x 3 = 15 square meters',
    options: [
      { optionText: '15 square meters', isCorrect: true },
      { optionText: '16 square meters', isCorrect: false },
      { optionText: '8 square meters', isCorrect: false },
      { optionText: '20 square meters', isCorrect: false },
    ],
  },

  // Topic 5 - Open Ended 1
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'You are measuring a book cover.',
    questionText: 'A book cover is 20 cm long and 15 cm wide. What is the perimeter in cm?',
    hintText: 'Perimeter = 2 x (20 + 15)',
    explanation: 'Perimeter = 2 x 35 = 70 cm',
    correctAnswer: '70',
    correctAnswerNumeric: 70,
  },

  // Topic 5 - Open Ended 2
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'You are finding the area of a bathroom floor.',
    questionText: 'The bathroom floor is 3 m long and 2 m wide. What is the area in square meters?',
    hintText: 'Area = length x width',
    explanation: '3 x 2 = 6 square meters',
    correctAnswer: '6',
    correctAnswerNumeric: 6,
  },

  // Topic 5 - Open Ended 3
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'You drew a square on your notebook.',
    questionText: 'A square has a perimeter of 36 cm. What is the length of one side in cm?',
    hintText: 'Perimeter of a square = 4 x side. So side = 36 / 4',
    explanation: '36 / 4 = 9 cm per side',
    correctAnswer: '9',
    correctAnswerNumeric: 9,
  },

  // Topic 5 - Open Ended 4
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'You are finding the area of a square tile.',
    questionText: 'A square tile has sides of 10 cm. What is the area in square cm?',
    hintText: 'Area of a square = side x side',
    explanation: '10 x 10 = 100 square cm',
    correctAnswer: '100',
    correctAnswerNumeric: 100,
  },

  // =============================================
  // Topic 6: Estimation (rounding, approximation)
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 6 - MCQ 1
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'You are shopping and want to estimate the total cost.',
    questionText: 'You bought items for 28 pounds and 43 pounds. Estimate the total by rounding to the nearest ten.',
    hintText: 'Round 28 to 30 and 43 to 40, then add',
    explanation: '28 rounds to 30. 43 rounds to 40. Estimate: 30 + 40 = 70 pounds',
    options: [
      { optionText: '70 pounds', isCorrect: true },
      { optionText: '71 pounds', isCorrect: false },
      { optionText: '80 pounds', isCorrect: false },
      { optionText: '60 pounds', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 2
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'You are estimating how many students are in the hall.',
    questionText: 'There are 487 students. Estimate this number to the nearest hundred.',
    hintText: 'Look at the tens digit. Is it 5 or more?',
    explanation: '487 rounded to the nearest hundred is 500',
    options: [
      { optionText: '500', isCorrect: true },
      { optionText: '400', isCorrect: false },
      { optionText: '490', isCorrect: false },
      { optionText: '480', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 3
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'You want to check if your addition is close to correct.',
    questionText: 'Estimate 197 + 304 by rounding to the nearest hundred.',
    hintText: 'Round 197 to 200 and 304 to 300',
    explanation: '197 rounds to 200, 304 rounds to 300. Estimate: 200 + 300 = 500',
    options: [
      { optionText: '500', isCorrect: true },
      { optionText: '400', isCorrect: false },
      { optionText: '600', isCorrect: false },
      { optionText: '501', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 4
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'You want to estimate the cost of groceries.',
    questionText: 'Apples cost 52 pounds and bananas cost 37 pounds. Estimate the total to the nearest ten.',
    hintText: 'Round 52 to 50 and 37 to 40',
    explanation: '52 rounds to 50. 37 rounds to 40. Estimate: 50 + 40 = 90 pounds',
    options: [
      { optionText: '90 pounds', isCorrect: true },
      { optionText: '80 pounds', isCorrect: false },
      { optionText: '100 pounds', isCorrect: false },
      { optionText: '89 pounds', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 5
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'You are estimating a subtraction.',
    questionText: 'Estimate 812 - 395 by rounding to the nearest hundred.',
    hintText: 'Round 812 to 800 and 395 to 400',
    explanation: '812 rounds to 800, 395 rounds to 400. Estimate: 800 - 400 = 400',
    options: [
      { optionText: '400', isCorrect: true },
      { optionText: '500', isCorrect: false },
      { optionText: '300', isCorrect: false },
      { optionText: '420', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 6
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'You are estimating a multiplication.',
    questionText: 'Estimate 19 x 5 by rounding 19 to the nearest ten.',
    hintText: 'Round 19 to 20',
    explanation: '19 rounds to 20. Estimate: 20 x 5 = 100',
    options: [
      { optionText: '100', isCorrect: true },
      { optionText: '95', isCorrect: false },
      { optionText: '90', isCorrect: false },
      { optionText: '110', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 7
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'Dad is checking if he has enough money.',
    questionText: 'Dad wants to buy 3 shirts. Each costs 68 pounds. Estimate the total by rounding.',
    hintText: 'Round 68 to 70, then multiply by 3',
    explanation: '68 rounds to 70. Estimate: 70 x 3 = 210 pounds',
    options: [
      { optionText: '210 pounds', isCorrect: true },
      { optionText: '200 pounds', isCorrect: false },
      { optionText: '180 pounds', isCorrect: false },
      { optionText: '240 pounds', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 8
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'You are checking your math homework.',
    questionText: 'Your answer for 48 x 21 is 1,008. Estimate to check: round both numbers to the nearest ten.',
    hintText: 'Round 48 to 50 and 21 to 20',
    explanation: 'Estimate: 50 x 20 = 1,000. Your answer 1,008 is close to 1,000, so it looks correct',
    options: [
      { optionText: '1,000', isCorrect: true },
      { optionText: '900', isCorrect: false },
      { optionText: '1,100', isCorrect: false },
      { optionText: '800', isCorrect: false },
    ],
  },

  // Topic 6 - Open Ended 1
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'You want a quick estimate.',
    questionText: 'Estimate 58 + 31 by rounding both to the nearest ten. What is the estimate?',
    hintText: 'Round 58 to 60 and 31 to 30',
    explanation: '60 + 30 = 90',
    correctAnswer: '90',
    correctAnswerNumeric: 90,
  },

  // Topic 6 - Open Ended 2
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'You are estimating a subtraction quickly.',
    questionText: 'Estimate 692 - 310 by rounding to the nearest hundred.',
    hintText: 'Round 692 to 700 and 310 to 300',
    explanation: '700 - 300 = 400',
    correctAnswer: '400',
    correctAnswerNumeric: 400,
  },

  // Topic 6 - Open Ended 3
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'You are estimating how many eggs.',
    questionText: 'A farm has 29 boxes with about 10 eggs each. Estimate the total by rounding 29 to the nearest ten.',
    hintText: 'Round 29 to 30, then multiply by 10',
    explanation: '30 x 10 = 300 eggs',
    correctAnswer: '300',
    correctAnswerNumeric: 300,
  },

  // Topic 6 - Open Ended 4
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'You are estimating costs at a fruit shop.',
    questionText: 'You buy 4 bags of dates. Each bag costs 47 pounds. Estimate the total by rounding 47 to the nearest ten.',
    hintText: 'Round 47 to 50, then multiply by 4',
    explanation: '50 x 4 = 200 pounds',
    correctAnswer: '200',
    correctAnswerNumeric: 200,
  },

  // =============================================
  // Topic 7: Patterns & Sequences
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 7 - MCQ 1
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'You are looking at a number pattern.',
    questionText: 'What is the next number in this pattern: 5, 10, 15, 20, ?',
    hintText: 'What number are you adding each time?',
    explanation: 'The pattern adds 5 each time. 20 + 5 = 25',
    options: [
      { optionText: '25', isCorrect: true },
      { optionText: '30', isCorrect: false },
      { optionText: '22', isCorrect: false },
      { optionText: '24', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 2
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'You are counting down for a game.',
    questionText: 'What is the next number: 50, 45, 40, 35, ?',
    hintText: 'What number are you subtracting each time?',
    explanation: 'The pattern subtracts 5 each time. 35 - 5 = 30',
    options: [
      { optionText: '30', isCorrect: true },
      { optionText: '25', isCorrect: false },
      { optionText: '32', isCorrect: false },
      { optionText: '28', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 3
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'You see a pattern on the classroom wall.',
    questionText: 'What is the next number: 2, 4, 8, 16, ?',
    hintText: 'Each number is multiplied by what?',
    explanation: 'Each number is doubled (x 2). 16 x 2 = 32',
    options: [
      { optionText: '32', isCorrect: true },
      { optionText: '24', isCorrect: false },
      { optionText: '18', isCorrect: false },
      { optionText: '20', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 4
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'You are doing a math puzzle.',
    questionText: 'What is the next number: 3, 6, 9, 12, 15, ?',
    hintText: 'These are multiples of what number?',
    explanation: 'Multiples of 3. Next: 15 + 3 = 18',
    options: [
      { optionText: '18', isCorrect: true },
      { optionText: '17', isCorrect: false },
      { optionText: '21', isCorrect: false },
      { optionText: '16', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 5
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'You are stacking blocks in a growing pattern.',
    questionText: 'Row 1 has 1 block, row 2 has 3 blocks, row 3 has 5 blocks. How many blocks in row 4?',
    hintText: 'How many blocks are added each row?',
    explanation: 'The pattern adds 2 each time: 1, 3, 5, 7',
    options: [
      { optionText: '7', isCorrect: true },
      { optionText: '6', isCorrect: false },
      { optionText: '8', isCorrect: false },
      { optionText: '9', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 6
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'You notice a pattern in house numbers on your street.',
    questionText: 'The houses are numbered: 4, 8, 12, 16. What is the rule?',
    hintText: 'What number do you add each time?',
    explanation: 'Add 4 each time (these are multiples of 4)',
    options: [
      { optionText: 'Add 4', isCorrect: true },
      { optionText: 'Add 3', isCorrect: false },
      { optionText: 'Multiply by 2', isCorrect: false },
      { optionText: 'Add 5', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 7
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'You are looking at a tricky pattern.',
    questionText: 'What comes next: 1, 1, 2, 3, 5, 8, ?',
    hintText: 'Each number is the sum of the two numbers before it',
    explanation: '5 + 8 = 13',
    options: [
      { optionText: '13', isCorrect: true },
      { optionText: '11', isCorrect: false },
      { optionText: '10', isCorrect: false },
      { optionText: '14', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 8
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'You are saving money each week.',
    questionText: 'Week 1 you save 10 pounds, week 2 you save 15 pounds, week 3 you save 20 pounds. How much will you save in week 5?',
    hintText: 'You save 5 more each week',
    explanation: 'Week 4: 25, Week 5: 30 pounds',
    options: [
      { optionText: '30 pounds', isCorrect: true },
      { optionText: '25 pounds', isCorrect: false },
      { optionText: '35 pounds', isCorrect: false },
      { optionText: '28 pounds', isCorrect: false },
    ],
  },

  // Topic 7 - Open Ended 1
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'You are continuing a pattern.',
    questionText: 'What is the next number: 7, 14, 21, 28, ?',
    hintText: 'These are multiples of 7. Add 7 to the last number',
    explanation: '28 + 7 = 35',
    correctAnswer: '35',
    correctAnswerNumeric: 35,
  },

  // Topic 7 - Open Ended 2
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'You see a pattern on a worksheet.',
    questionText: 'What is the next number: 100, 90, 80, 70, ?',
    hintText: 'Subtract 10 each time',
    explanation: '70 - 10 = 60',
    correctAnswer: '60',
    correctAnswerNumeric: 60,
  },

  // Topic 7 - Open Ended 3
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'You are solving a number puzzle.',
    questionText: 'In the pattern 2, 6, 18, 54, each number is multiplied by 3. What is the next number?',
    hintText: 'Multiply 54 by 3',
    explanation: '54 x 3 = 162',
    correctAnswer: '162',
    correctAnswerNumeric: 162,
  },

  // Topic 7 - Open Ended 4
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'You are figuring out a pattern.',
    questionText: 'Each day you do 2 more push-ups than the day before. Day 1: 5, Day 2: 7, Day 3: 9. How many on Day 5?',
    hintText: 'Day 4 = 11, Day 5 = ?',
    explanation: 'Day 4: 11, Day 5: 13',
    correctAnswer: '13',
    correctAnswerNumeric: 13,
  },
];
