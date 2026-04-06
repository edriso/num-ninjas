import type { QuestionSeed } from './questions-level1';

export const level5QuestionsEn: QuestionSeed[] = [
  // ══════════════════════════════════════════════════════════════════════
  // Topic 1: Powers & Exponents
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 1, MCQ 1 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'In a math competition, the teacher asks about powers.',
    questionText: 'What is 2 to the power of 5 (2^5)?',
    hintText: 'Multiply 2 by itself 5 times: 2 x 2 x 2 x 2 x 2',
    explanation: '2^5 = 2 x 2 x 2 x 2 x 2 = 32',
    options: [
      { optionText: '32', isCorrect: true },
      { optionText: '16', isCorrect: false },
      { optionText: '64', isCorrect: false },
      { optionText: '10', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 2 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'You are tiling a square floor. Each side is 7 tiles long.',
    questionText: 'How many tiles do you need? (Find 7^2)',
    hintText: '7 squared means 7 x 7',
    explanation: '7^2 = 7 x 7 = 49 tiles',
    options: [
      { optionText: '49', isCorrect: true },
      { optionText: '14', isCorrect: false },
      { optionText: '42', isCorrect: false },
      { optionText: '56', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 3 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'A cube-shaped box has sides of 3 cm.',
    questionText: 'What is the volume of the box? (Find 3^3)',
    hintText: '3 cubed means 3 x 3 x 3',
    explanation: '3^3 = 3 x 3 x 3 = 27 cubic cm',
    options: [
      { optionText: '27', isCorrect: true },
      { optionText: '9', isCorrect: false },
      { optionText: '18', isCorrect: false },
      { optionText: '81', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 4 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'Each day, a plant doubles its number of leaves. It starts with 1 leaf.',
    questionText: 'How many leaves will it have after 4 days? (Find 2^4)',
    hintText: 'Day 1: 2, Day 2: 4, Day 3: 8, Day 4: ?',
    explanation: '2^4 = 2 x 2 x 2 x 2 = 16 leaves',
    options: [
      { optionText: '16', isCorrect: true },
      { optionText: '8', isCorrect: false },
      { optionText: '32', isCorrect: false },
      { optionText: '12', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 5 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'What is any number raised to the power of 0?',
    questionText: 'What is 5^0?',
    hintText: 'Any number to the power of 0 equals a special number',
    explanation: 'Any number to the power of 0 equals 1. So 5^0 = 1',
    options: [
      { optionText: '1', isCorrect: true },
      { optionText: '0', isCorrect: false },
      { optionText: '5', isCorrect: false },
      { optionText: '50', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 6 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'A square garden has sides of 9 meters.',
    questionText: 'What is the area of the garden? (Find 9^2)',
    hintText: 'Area of a square = side x side',
    explanation: '9^2 = 9 x 9 = 81 square meters',
    options: [
      { optionText: '81', isCorrect: true },
      { optionText: '18', isCorrect: false },
      { optionText: '72', isCorrect: false },
      { optionText: '99', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 7 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'In science class, you learn that 10^3 is called a thousand.',
    questionText: 'What is 10^3?',
    hintText: '10 x 10 x 10',
    explanation: '10^3 = 10 x 10 x 10 = 1000',
    options: [
      { optionText: '1000', isCorrect: true },
      { optionText: '30', isCorrect: false },
      { optionText: '100', isCorrect: false },
      { optionText: '10000', isCorrect: false },
    ],
  },

  // --- Topic 1, MCQ 8 ---
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'A cube has sides of 4 cm.',
    questionText: 'What is 4^3?',
    hintText: '4 x 4 x 4',
    explanation: '4^3 = 4 x 4 x 4 = 64',
    options: [
      { optionText: '64', isCorrect: true },
      { optionText: '12', isCorrect: false },
      { optionText: '16', isCorrect: false },
      { optionText: '48', isCorrect: false },
    ],
  },

  // --- Topic 1, Open Ended 1 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'A square field has sides of 12 meters.',
    questionText: 'What is 12 squared (12^2)?',
    hintText: 'Multiply 12 by 12',
    explanation: '12^2 = 12 x 12 = 144',
    correctAnswer: '144',
    correctAnswerNumeric: 144,
  },

  // --- Topic 1, Open Ended 2 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'In a math game, you need to find 5 cubed.',
    questionText: 'What is 5^3?',
    hintText: '5 x 5 x 5',
    explanation: '5^3 = 5 x 5 x 5 = 125',
    correctAnswer: '125',
    correctAnswerNumeric: 125,
  },

  // --- Topic 1, Open Ended 3 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'You need to find the value of 2 to the power of 6.',
    questionText: 'What is 2^6?',
    hintText: '2 x 2 x 2 x 2 x 2 x 2',
    explanation: '2^6 = 64',
    correctAnswer: '64',
    correctAnswerNumeric: 64,
  },

  // --- Topic 1, Open Ended 4 ---
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'A square room has sides of 11 meters.',
    questionText: 'What is the area of the room? (11^2)',
    hintText: '11 x 11',
    explanation: '11^2 = 11 x 11 = 121 square meters',
    correctAnswer: '121',
    correctAnswerNumeric: 121,
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 2: GCD & LCM
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 2, MCQ 1 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'You have 12 apples and 8 bananas. You want to make equal bags with no fruit left over.',
    questionText: 'What is the greatest number of bags you can make? (GCD of 12 and 8)',
    hintText: 'Find the largest number that divides both 12 and 8',
    explanation: 'Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 8: 1, 2, 4, 8. GCD = 4',
    options: [
      { optionText: '4', isCorrect: true },
      { optionText: '2', isCorrect: false },
      { optionText: '6', isCorrect: false },
      { optionText: '8', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 2 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'Two buses leave a station. One comes every 6 minutes and the other every 8 minutes.',
    questionText: 'After how many minutes will both buses leave at the same time again? (LCM of 6 and 8)',
    hintText: 'Find the smallest number that both 6 and 8 divide into',
    explanation: 'Multiples of 6: 6, 12, 18, 24. Multiples of 8: 8, 16, 24. LCM = 24',
    options: [
      { optionText: '24', isCorrect: true },
      { optionText: '48', isCorrect: false },
      { optionText: '14', isCorrect: false },
      { optionText: '12', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 3 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'Sara wants to cut two ribbons (18 cm and 24 cm) into equal pieces with nothing left.',
    questionText: 'What is the longest piece she can cut? (GCD of 18 and 24)',
    hintText: 'Find the largest number that divides both 18 and 24',
    explanation: 'Factors of 18: 1, 2, 3, 6, 9, 18. Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. GCD = 6',
    options: [
      { optionText: '6 cm', isCorrect: true },
      { optionText: '3 cm', isCorrect: false },
      { optionText: '9 cm', isCorrect: false },
      { optionText: '12 cm', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 4 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'Ali exercises every 3 days. Omar exercises every 5 days. They both exercised today.',
    questionText: 'In how many days will they exercise together again? (LCM of 3 and 5)',
    hintText: 'Find the smallest number that both 3 and 5 go into',
    explanation: 'Multiples of 3: 3, 6, 9, 12, 15. Multiples of 5: 5, 10, 15. LCM = 15',
    options: [
      { optionText: '15', isCorrect: true },
      { optionText: '8', isCorrect: false },
      { optionText: '30', isCorrect: false },
      { optionText: '10', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 5 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'You have 20 dates and 30 apples to put into gift bags equally.',
    questionText: 'What is the most bags you can make with no fruit left over? (GCD of 20 and 30)',
    hintText: 'Find the largest number that divides both 20 and 30',
    explanation: 'Factors of 20: 1, 2, 4, 5, 10, 20. Factors of 30: 1, 2, 3, 5, 6, 10, 15, 30. GCD = 10',
    options: [
      { optionText: '10', isCorrect: true },
      { optionText: '5', isCorrect: false },
      { optionText: '20', isCorrect: false },
      { optionText: '15', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 6 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'Two lights flash. One flashes every 4 seconds and the other every 10 seconds.',
    questionText: 'When will they flash at the same time? (LCM of 4 and 10)',
    hintText: 'List multiples of 4 and 10 until you find one they share',
    explanation: 'Multiples of 4: 4, 8, 12, 16, 20. Multiples of 10: 10, 20. LCM = 20',
    options: [
      { optionText: '20 seconds', isCorrect: true },
      { optionText: '40 seconds', isCorrect: false },
      { optionText: '14 seconds', isCorrect: false },
      { optionText: '10 seconds', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 7 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'A baker makes 36 rolls and 48 buns. He puts them into equal boxes.',
    questionText: 'What is the most boxes he can fill equally? (GCD of 36 and 48)',
    hintText: 'Find the biggest number that divides both 36 and 48',
    explanation: 'GCD of 36 and 48 = 12',
    options: [
      { optionText: '12', isCorrect: true },
      { optionText: '6', isCorrect: false },
      { optionText: '24', isCorrect: false },
      { optionText: '8', isCorrect: false },
    ],
  },

  // --- Topic 2, MCQ 8 ---
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'Nour waters plants every 6 days. Her brother waters every 9 days. They both watered today.',
    questionText: 'When will they next water on the same day? (LCM of 6 and 9)',
    hintText: 'List multiples of 6 and 9 until you find the first one they share',
    explanation: 'Multiples of 6: 6, 12, 18. Multiples of 9: 9, 18. LCM = 18',
    options: [
      { optionText: '18 days', isCorrect: true },
      { optionText: '15 days', isCorrect: false },
      { optionText: '54 days', isCorrect: false },
      { optionText: '36 days', isCorrect: false },
    ],
  },

  // --- Topic 2, Open Ended 1 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'You have 16 red balls and 24 blue balls for party bags.',
    questionText: 'What is the GCD of 16 and 24?',
    hintText: 'Find the largest number that divides both 16 and 24',
    explanation: 'Factors of 16: 1, 2, 4, 8, 16. Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. GCD = 8',
    correctAnswer: '8',
    correctAnswerNumeric: 8,
  },

  // --- Topic 2, Open Ended 2 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'Two friends visit a library. One goes every 4 days, the other every 6 days.',
    questionText: 'What is the LCM of 4 and 6?',
    hintText: 'Find the smallest number both 4 and 6 divide into',
    explanation: 'Multiples of 4: 4, 8, 12. Multiples of 6: 6, 12. LCM = 12',
    correctAnswer: '12',
    correctAnswerNumeric: 12,
  },

  // --- Topic 2, Open Ended 3 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'A farmer has 45 oranges and 60 apples to pack equally.',
    questionText: 'What is the GCD of 45 and 60?',
    hintText: 'Find the largest number that divides both 45 and 60',
    explanation: 'GCD of 45 and 60 = 15',
    correctAnswer: '15',
    correctAnswerNumeric: 15,
  },

  // --- Topic 2, Open Ended 4 ---
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'Two bells ring. One rings every 5 minutes, the other every 7 minutes.',
    questionText: 'What is the LCM of 5 and 7?',
    hintText: 'Since 5 and 7 have no common factors, multiply them',
    explanation: '5 and 7 are both prime, so LCM = 5 x 7 = 35',
    correctAnswer: '35',
    correctAnswerNumeric: 35,
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 3: Negative Numbers
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 3, MCQ 1 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'The temperature outside is 3 degrees. It drops by 5 degrees at night.',
    questionText: 'What is the new temperature?',
    hintText: '3 minus 5 goes below zero',
    explanation: '3 - 5 = -2 degrees',
    options: [
      { optionText: '-2', isCorrect: true },
      { optionText: '2', isCorrect: false },
      { optionText: '-8', isCorrect: false },
      { optionText: '8', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 2 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'A building has floors above and below ground. Ground floor is 0.',
    questionText: 'You are on floor -3 and go up 5 floors. What floor are you on?',
    hintText: '-3 + 5 = ?',
    explanation: '-3 + 5 = 2. You are on the 2nd floor',
    options: [
      { optionText: '2', isCorrect: true },
      { optionText: '-8', isCorrect: false },
      { optionText: '8', isCorrect: false },
      { optionText: '-2', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 3 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'Ahmed has 10 pounds. He owes his friend 15 pounds.',
    questionText: 'After paying his friend, what is his balance?',
    hintText: '10 - 15 goes below zero',
    explanation: '10 - 15 = -5. He still owes 5 pounds',
    options: [
      { optionText: '-5', isCorrect: true },
      { optionText: '5', isCorrect: false },
      { optionText: '-25', isCorrect: false },
      { optionText: '25', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 4 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'The temperature at night was -4 degrees. By morning it went up by 7 degrees.',
    questionText: 'What is the morning temperature?',
    hintText: '-4 + 7 = ?',
    explanation: '-4 + 7 = 3 degrees',
    options: [
      { optionText: '3', isCorrect: true },
      { optionText: '-11', isCorrect: false },
      { optionText: '11', isCorrect: false },
      { optionText: '-3', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 5 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'Which number is smaller: -7 or -3?',
    questionText: 'Which number is smaller?',
    hintText: 'On a number line, the number farther to the left is smaller',
    explanation: '-7 is farther left on the number line, so -7 is smaller',
    options: [
      { optionText: '-7', isCorrect: true },
      { optionText: '-3', isCorrect: false },
      { optionText: 'They are equal', isCorrect: false },
      { optionText: '0', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 6 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'A diver is 8 meters below sea level (-8). She goes down 4 more meters.',
    questionText: 'What is her new depth?',
    hintText: '-8 minus 4 more',
    explanation: '-8 - 4 = -12 meters',
    options: [
      { optionText: '-12', isCorrect: true },
      { optionText: '-4', isCorrect: false },
      { optionText: '12', isCorrect: false },
      { optionText: '-32', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 7 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'The temperature was -6 degrees in the morning and -2 degrees in the afternoon.',
    questionText: 'How many degrees did it rise?',
    hintText: 'Find the difference: -2 minus -6',
    explanation: '-2 - (-6) = -2 + 6 = 4 degrees rise',
    options: [
      { optionText: '4', isCorrect: true },
      { optionText: '-4', isCorrect: false },
      { optionText: '8', isCorrect: false },
      { optionText: '-8', isCorrect: false },
    ],
  },

  // --- Topic 3, MCQ 8 ---
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'What is the result of adding two negative numbers: -5 and -3?',
    questionText: 'What is -5 + (-3)?',
    hintText: 'Adding two negatives makes a bigger negative',
    explanation: '-5 + (-3) = -8',
    options: [
      { optionText: '-8', isCorrect: true },
      { optionText: '8', isCorrect: false },
      { optionText: '-2', isCorrect: false },
      { optionText: '2', isCorrect: false },
    ],
  },

  // --- Topic 3, Open Ended 1 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'The temperature is -10 degrees. It goes up by 15 degrees.',
    questionText: 'What is the new temperature?',
    hintText: '-10 + 15 = ?',
    explanation: '-10 + 15 = 5 degrees',
    correctAnswer: '5',
    correctAnswerNumeric: 5,
  },

  // --- Topic 3, Open Ended 2 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'You are on floor 2 of a building and take a lift down 5 floors.',
    questionText: 'What floor are you on now?',
    hintText: '2 - 5 = ?',
    explanation: '2 - 5 = -3. You are on basement floor 3',
    correctAnswer: '-3',
    correctAnswerNumeric: -3,
  },

  // --- Topic 3, Open Ended 3 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'Sara has a balance of -20 pounds (she owes money). She earns 35 pounds.',
    questionText: 'What is her new balance?',
    hintText: '-20 + 35 = ?',
    explanation: '-20 + 35 = 15 pounds',
    correctAnswer: '15',
    correctAnswerNumeric: 15,
  },

  // --- Topic 3, Open Ended 4 ---
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'The temperature was -3 degrees. It dropped by 9 more degrees.',
    questionText: 'What is the temperature now?',
    hintText: '-3 - 9 = ?',
    explanation: '-3 - 9 = -12 degrees',
    correctAnswer: '-12',
    correctAnswerNumeric: -12,
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 4: Probability
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 4, MCQ 1 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'You flip a fair coin.',
    questionText: 'What is the probability of getting heads?',
    hintText: 'A coin has 2 sides. One is heads',
    explanation: 'Probability = 1 out of 2 = 1/2',
    options: [
      { optionText: '1/2', isCorrect: true },
      { optionText: '1/4', isCorrect: false },
      { optionText: '1', isCorrect: false },
      { optionText: '1/3', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 2 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'A bag has 3 red balls and 7 blue balls.',
    questionText: 'What is the probability of picking a red ball?',
    hintText: 'Total balls = 3 + 7 = 10. Red = 3',
    explanation: 'Probability = 3/10',
    options: [
      { optionText: '3/10', isCorrect: true },
      { optionText: '7/10', isCorrect: false },
      { optionText: '3/7', isCorrect: false },
      { optionText: '1/3', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 3 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'You roll a normal 6-sided die.',
    questionText: 'What is the probability of rolling a 4?',
    hintText: 'A die has 6 faces. Only one shows 4',
    explanation: 'Probability = 1/6',
    options: [
      { optionText: '1/6', isCorrect: true },
      { optionText: '4/6', isCorrect: false },
      { optionText: '1/4', isCorrect: false },
      { optionText: '1/2', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 4 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'A box has 5 apples, 3 bananas, and 2 oranges.',
    questionText: 'If you pick one fruit without looking, what is the probability of getting a banana?',
    hintText: 'Total fruits = 5 + 3 + 2 = 10',
    explanation: 'Probability = 3/10',
    options: [
      { optionText: '3/10', isCorrect: true },
      { optionText: '3/5', isCorrect: false },
      { optionText: '1/3', isCorrect: false },
      { optionText: '5/10', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 5 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'You roll a die. You want an even number (2, 4, or 6).',
    questionText: 'What is the probability of rolling an even number?',
    hintText: '3 even numbers out of 6 total',
    explanation: 'Probability = 3/6 = 1/2',
    options: [
      { optionText: '1/2', isCorrect: true },
      { optionText: '1/3', isCorrect: false },
      { optionText: '1/6', isCorrect: false },
      { optionText: '2/3', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 6 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'A spinner has 8 equal sections: 2 red, 3 blue, and 3 green.',
    questionText: 'What is the probability of landing on blue?',
    hintText: 'Blue sections = 3. Total sections = 8',
    explanation: 'Probability = 3/8',
    options: [
      { optionText: '3/8', isCorrect: true },
      { optionText: '3/5', isCorrect: false },
      { optionText: '1/3', isCorrect: false },
      { optionText: '5/8', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 7 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'You pick a card from numbers 1 to 10.',
    questionText: 'What is the probability of picking a number greater than 7?',
    hintText: 'Numbers greater than 7 are: 8, 9, 10. That is 3 numbers out of 10',
    explanation: 'Numbers > 7: {8, 9, 10} = 3. Probability = 3/10',
    options: [
      { optionText: '3/10', isCorrect: true },
      { optionText: '7/10', isCorrect: false },
      { optionText: '1/7', isCorrect: false },
      { optionText: '1/10', isCorrect: false },
    ],
  },

  // --- Topic 4, MCQ 8 ---
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'A bag has 4 red, 4 blue, and 4 green marbles.',
    questionText: 'What is the probability of NOT picking a red marble?',
    hintText: 'Total = 12. Not red = blue + green = 8',
    explanation: 'Not red = 8 out of 12 = 8/12 = 2/3',
    options: [
      { optionText: '2/3', isCorrect: true },
      { optionText: '1/3', isCorrect: false },
      { optionText: '4/12', isCorrect: false },
      { optionText: '1/4', isCorrect: false },
    ],
  },

  // --- Topic 4, Open Ended 1 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'A bag has 6 green balls and 4 yellow balls. You pick one without looking.',
    questionText: 'How many balls are there in total?',
    hintText: 'Add the green and yellow balls',
    explanation: '6 + 4 = 10 balls total',
    correctAnswer: '10',
    correctAnswerNumeric: 10,
  },

  // --- Topic 4, Open Ended 2 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'You roll a die. You want a number less than 3 (that means 1 or 2).',
    questionText: 'How many good outcomes are there?',
    hintText: 'Count how many numbers on a die are less than 3',
    explanation: 'Numbers less than 3: 1 and 2. That is 2 outcomes',
    correctAnswer: '2',
    correctAnswerNumeric: 2,
  },

  // --- Topic 4, Open Ended 3 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'A box has 20 balls: 5 are white and 15 are black.',
    questionText: 'Out of 20, how many are white? (This is the top number of the probability fraction)',
    hintText: 'Count the white balls',
    explanation: 'There are 5 white balls, so probability = 5/20',
    correctAnswer: '5',
    correctAnswerNumeric: 5,
  },

  // --- Topic 4, Open Ended 4 ---
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'A spinner has 10 equal parts. 4 are red, 3 are blue, 3 are green.',
    questionText: 'How many parts are NOT red?',
    hintText: 'Total parts minus red parts',
    explanation: '10 - 4 = 6 parts are not red',
    correctAnswer: '6',
    correctAnswerNumeric: 6,
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 5: Volume
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 5, MCQ 1 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'A box is 4 cm long, 3 cm wide, and 2 cm tall.',
    questionText: 'What is the volume of the box?',
    hintText: 'Volume = length x width x height',
    explanation: 'Volume = 4 x 3 x 2 = 24 cubic cm',
    options: [
      { optionText: '24 cubic cm', isCorrect: true },
      { optionText: '9 cubic cm', isCorrect: false },
      { optionText: '20 cubic cm', isCorrect: false },
      { optionText: '12 cubic cm', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 2 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'A cube has sides of 5 cm.',
    questionText: 'What is the volume of the cube?',
    hintText: 'Volume of a cube = side x side x side',
    explanation: 'Volume = 5 x 5 x 5 = 125 cubic cm',
    options: [
      { optionText: '125 cubic cm', isCorrect: true },
      { optionText: '25 cubic cm', isCorrect: false },
      { optionText: '15 cubic cm', isCorrect: false },
      { optionText: '75 cubic cm', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 3 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'A fish tank is 60 cm long, 30 cm wide, and 40 cm tall.',
    questionText: 'What is the volume of the tank?',
    hintText: 'Volume = length x width x height',
    explanation: 'Volume = 60 x 30 x 40 = 72000 cubic cm',
    options: [
      { optionText: '72000 cubic cm', isCorrect: true },
      { optionText: '130 cubic cm', isCorrect: false },
      { optionText: '7200 cubic cm', isCorrect: false },
      { optionText: '36000 cubic cm', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 4 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'A gift box is 10 cm long, 8 cm wide, and 6 cm tall.',
    questionText: 'What is its volume?',
    hintText: 'Multiply all three numbers together',
    explanation: 'Volume = 10 x 8 x 6 = 480 cubic cm',
    options: [
      { optionText: '480 cubic cm', isCorrect: true },
      { optionText: '24 cubic cm', isCorrect: false },
      { optionText: '240 cubic cm', isCorrect: false },
      { optionText: '800 cubic cm', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 5 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'A cube-shaped ice block has sides of 2 cm.',
    questionText: 'What is the volume of the ice block?',
    hintText: '2 x 2 x 2',
    explanation: 'Volume = 2 x 2 x 2 = 8 cubic cm',
    options: [
      { optionText: '8 cubic cm', isCorrect: true },
      { optionText: '6 cubic cm', isCorrect: false },
      { optionText: '4 cubic cm', isCorrect: false },
      { optionText: '12 cubic cm', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 6 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'A book is 20 cm long, 15 cm wide, and 3 cm thick.',
    questionText: 'What is the volume of the book?',
    hintText: 'Volume = length x width x height (thickness)',
    explanation: 'Volume = 20 x 15 x 3 = 900 cubic cm',
    options: [
      { optionText: '900 cubic cm', isCorrect: true },
      { optionText: '300 cubic cm', isCorrect: false },
      { optionText: '600 cubic cm', isCorrect: false },
      { optionText: '38 cubic cm', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 7 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'A rectangular water tank holds water. It is 50 cm long, 20 cm wide, and 30 cm tall.',
    questionText: 'What is the volume of the tank?',
    hintText: 'Multiply length x width x height',
    explanation: 'Volume = 50 x 20 x 30 = 30000 cubic cm',
    options: [
      { optionText: '30000 cubic cm', isCorrect: true },
      { optionText: '3000 cubic cm', isCorrect: false },
      { optionText: '100 cubic cm', isCorrect: false },
      { optionText: '15000 cubic cm', isCorrect: false },
    ],
  },

  // --- Topic 5, MCQ 8 ---
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'A box has a volume of 120 cubic cm. It is 10 cm long and 4 cm wide.',
    questionText: 'What is the height of the box?',
    hintText: 'Volume = length x width x height. So height = volume / (length x width)',
    explanation: 'Height = 120 / (10 x 4) = 120 / 40 = 3 cm',
    options: [
      { optionText: '3 cm', isCorrect: true },
      { optionText: '6 cm', isCorrect: false },
      { optionText: '12 cm', isCorrect: false },
      { optionText: '30 cm', isCorrect: false },
    ],
  },

  // --- Topic 5, Open Ended 1 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'A cube has sides of 6 cm.',
    questionText: 'What is the volume of the cube?',
    hintText: '6 x 6 x 6',
    explanation: 'Volume = 6 x 6 x 6 = 216 cubic cm',
    correctAnswer: '216',
    correctAnswerNumeric: 216,
  },

  // --- Topic 5, Open Ended 2 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'A box is 12 cm long, 5 cm wide, and 4 cm tall.',
    questionText: 'What is the volume of the box?',
    hintText: 'Multiply all three: 12 x 5 x 4',
    explanation: 'Volume = 12 x 5 x 4 = 240 cubic cm',
    correctAnswer: '240',
    correctAnswerNumeric: 240,
  },

  // --- Topic 5, Open Ended 3 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'A container has a volume of 200 cubic cm. It is 10 cm long and 5 cm wide.',
    questionText: 'What is the height of the container?',
    hintText: 'Height = Volume / (length x width)',
    explanation: 'Height = 200 / (10 x 5) = 200 / 50 = 4 cm',
    correctAnswer: '4',
    correctAnswerNumeric: 4,
  },

  // --- Topic 5, Open Ended 4 ---
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'A juice box is 8 cm long, 5 cm wide, and 10 cm tall.',
    questionText: 'What is the volume of the juice box?',
    hintText: '8 x 5 x 10',
    explanation: 'Volume = 8 x 5 x 10 = 400 cubic cm',
    correctAnswer: '400',
    correctAnswerNumeric: 400,
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 6: 2-Step Equations
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 6, MCQ 1 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'Ahmed buys some books. Each book costs 2 pounds. He also pays 3 pounds for a bag.',
    questionText: 'He pays 15 pounds total. If 2x + 3 = 15, what is x?',
    hintText: 'First subtract 3 from both sides, then divide by 2',
    explanation: '2x + 3 = 15. 2x = 12. x = 6',
    options: [
      { optionText: '6', isCorrect: true },
      { optionText: '9', isCorrect: false },
      { optionText: '7', isCorrect: false },
      { optionText: '5', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 2 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'Sara thinks of a number. She multiplies it by 3 and subtracts 4.',
    questionText: 'She gets 11. If 3x - 4 = 11, what is x?',
    hintText: 'Add 4 to both sides first, then divide by 3',
    explanation: '3x - 4 = 11. 3x = 15. x = 5',
    options: [
      { optionText: '5', isCorrect: true },
      { optionText: '7', isCorrect: false },
      { optionText: '3', isCorrect: false },
      { optionText: '4', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 3 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'Each ticket to a show costs 5 pounds. There is also a 10 pound booking fee.',
    questionText: 'Omar pays 40 pounds total. If 5x + 10 = 40, how many tickets did he buy?',
    hintText: 'Subtract 10 first, then divide by 5',
    explanation: '5x + 10 = 40. 5x = 30. x = 6 tickets',
    options: [
      { optionText: '6', isCorrect: true },
      { optionText: '8', isCorrect: false },
      { optionText: '10', isCorrect: false },
      { optionText: '5', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 4 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'Nour saves 4 pounds each week. She already had 8 pounds saved.',
    questionText: 'After some weeks she has 28 pounds. If 4x + 8 = 28, how many weeks did she save?',
    hintText: 'Subtract 8 from both sides, then divide by 4',
    explanation: '4x + 8 = 28. 4x = 20. x = 5 weeks',
    options: [
      { optionText: '5', isCorrect: true },
      { optionText: '7', isCorrect: false },
      { optionText: '9', isCorrect: false },
      { optionText: '4', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 5 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'A number is doubled and then 7 is added. The result is 19.',
    questionText: 'If 2x + 7 = 19, what is x?',
    hintText: 'Subtract 7 first, then divide by 2',
    explanation: '2x + 7 = 19. 2x = 12. x = 6',
    options: [
      { optionText: '6', isCorrect: true },
      { optionText: '13', isCorrect: false },
      { optionText: '8', isCorrect: false },
      { optionText: '5', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 6 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'Mona buys x kg of apples at 6 pounds per kg and pays 2 pounds for a bag.',
    questionText: 'She pays 20 pounds total. If 6x + 2 = 20, what is x?',
    hintText: 'Subtract 2 from both sides, then divide by 6',
    explanation: '6x + 2 = 20. 6x = 18. x = 3',
    options: [
      { optionText: '3', isCorrect: true },
      { optionText: '2', isCorrect: false },
      { optionText: '4', isCorrect: false },
      { optionText: '6', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 7 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'A number is multiplied by 5 and then 9 is subtracted. The answer is 16.',
    questionText: 'If 5x - 9 = 16, what is x?',
    hintText: 'Add 9 to both sides first, then divide by 5',
    explanation: '5x - 9 = 16. 5x = 25. x = 5',
    options: [
      { optionText: '5', isCorrect: true },
      { optionText: '7', isCorrect: false },
      { optionText: '3', isCorrect: false },
      { optionText: '25', isCorrect: false },
    ],
  },

  // --- Topic 6, MCQ 8 ---
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'Ali earns 3 pounds per hour. He also got a 6 pound bonus.',
    questionText: 'He earned 21 pounds total. If 3x + 6 = 21, how many hours did he work?',
    hintText: 'Subtract 6 from 21, then divide by 3',
    explanation: '3x + 6 = 21. 3x = 15. x = 5 hours',
    options: [
      { optionText: '5', isCorrect: true },
      { optionText: '7', isCorrect: false },
      { optionText: '9', isCorrect: false },
      { optionText: '4', isCorrect: false },
    ],
  },

  // --- Topic 6, Open Ended 1 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'A number is tripled and 5 is added. The result is 20.',
    questionText: 'If 3x + 5 = 20, what is x?',
    hintText: 'Subtract 5 first, then divide by 3',
    explanation: '3x + 5 = 20. 3x = 15. x = 5',
    correctAnswer: '5',
    correctAnswerNumeric: 5,
  },

  // --- Topic 6, Open Ended 2 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'A number is multiplied by 4 and then 6 is subtracted. The answer is 10.',
    questionText: 'If 4x - 6 = 10, what is x?',
    hintText: 'Add 6 to both sides, then divide by 4',
    explanation: '4x - 6 = 10. 4x = 16. x = 4',
    correctAnswer: '4',
    correctAnswerNumeric: 4,
  },

  // --- Topic 6, Open Ended 3 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'Each sandwich costs 7 pounds. Delivery is 4 pounds.',
    questionText: 'You pay 32 pounds total. If 7x + 4 = 32, how many sandwiches did you buy?',
    hintText: 'Subtract 4 from 32, then divide by 7',
    explanation: '7x + 4 = 32. 7x = 28. x = 4 sandwiches',
    correctAnswer: '4',
    correctAnswerNumeric: 4,
  },

  // --- Topic 6, Open Ended 4 ---
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'A number is doubled and 10 is added. The result is 30.',
    questionText: 'If 2x + 10 = 30, what is x?',
    hintText: 'Subtract 10, then divide by 2',
    explanation: '2x + 10 = 30. 2x = 20. x = 10',
    correctAnswer: '10',
    correctAnswerNumeric: 10,
  },

  // ══════════════════════════════════════════════════════════════════════
  // Topic 7: Math Puzzles & Logic
  // 8 MCQ + 4 open_ended = 12
  // ══════════════════════════════════════════════════════════════════════

  // --- Topic 7, MCQ 1 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'Look at this number pattern: 2, 6, 18, 54, ...',
    questionText: 'What is the next number?',
    hintText: 'Each number is multiplied by 3',
    explanation: '54 x 3 = 162',
    options: [
      { optionText: '162', isCorrect: true },
      { optionText: '108', isCorrect: false },
      { optionText: '72', isCorrect: false },
      { optionText: '60', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 2 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'Find the missing number: 5, 10, 20, ?, 80.',
    questionText: 'What is the missing number?',
    hintText: 'Each number is doubled (multiplied by 2)',
    explanation: '20 x 2 = 40. Check: 40 x 2 = 80. Correct!',
    options: [
      { optionText: '40', isCorrect: true },
      { optionText: '30', isCorrect: false },
      { optionText: '50', isCorrect: false },
      { optionText: '60', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 3 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'I am a 2-digit number. The sum of my digits is 9. I am even.',
    questionText: 'Which of these could I be?',
    hintText: 'Check which option has digits adding to 9 AND is even',
    explanation: '3 + 6 = 9 and 36 is even. It works!',
    options: [
      { optionText: '36', isCorrect: true },
      { optionText: '45', isCorrect: false },
      { optionText: '27', isCorrect: false },
      { optionText: '63', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 4 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'Look at the sequence: 1, 4, 9, 16, 25, ...',
    questionText: 'What is the next number?',
    hintText: 'These are square numbers: 1^2, 2^2, 3^2, 4^2, 5^2, ...',
    explanation: 'The next is 6^2 = 36',
    options: [
      { optionText: '36', isCorrect: true },
      { optionText: '30', isCorrect: false },
      { optionText: '49', isCorrect: false },
      { optionText: '35', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 5 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'Three friends share some apples. Karim gets twice as many as Mona. Mona gets 4 apples.',
    questionText: 'How many apples does Karim get?',
    hintText: 'Twice means 2 times',
    explanation: 'Karim gets 2 x 4 = 8 apples',
    options: [
      { optionText: '8', isCorrect: true },
      { optionText: '6', isCorrect: false },
      { optionText: '12', isCorrect: false },
      { optionText: '10', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 6 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'A magic square has rows, columns, and diagonals that all add up to the same number.',
    questionText: 'If one row is 8, 1, 6 (total 15), and another row starts with 3, 5, what is the third number?',
    hintText: 'The row must add up to 15. So 3 + 5 + ? = 15',
    explanation: '3 + 5 = 8. 15 - 8 = 7',
    options: [
      { optionText: '7', isCorrect: true },
      { optionText: '9', isCorrect: false },
      { optionText: '5', isCorrect: false },
      { optionText: '10', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 7 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'Look at this pattern: 100, 91, 82, 73, ...',
    questionText: 'What is the next number?',
    hintText: 'Each time you subtract 9',
    explanation: '73 - 9 = 64',
    options: [
      { optionText: '64', isCorrect: true },
      { optionText: '63', isCorrect: false },
      { optionText: '66', isCorrect: false },
      { optionText: '70', isCorrect: false },
    ],
  },

  // --- Topic 7, MCQ 8 ---
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'Sara is older than Mona. Mona is older than Nour. Nour is 8 years old and Mona is 10.',
    questionText: 'If Sara is 3 years older than Mona, how old is Sara?',
    hintText: 'Mona is 10. Sara is 3 more than Mona',
    explanation: 'Sara = 10 + 3 = 13 years old',
    options: [
      { optionText: '13', isCorrect: true },
      { optionText: '11', isCorrect: false },
      { optionText: '15', isCorrect: false },
      { optionText: '12', isCorrect: false },
    ],
  },

  // --- Topic 7, Open Ended 1 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'Find the next number in the pattern: 3, 7, 11, 15, 19, ...',
    questionText: 'What comes next?',
    hintText: 'Each time you add 4',
    explanation: '19 + 4 = 23',
    correctAnswer: '23',
    correctAnswerNumeric: 23,
  },

  // --- Topic 7, Open Ended 2 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'I am a number. If you multiply me by 3 and add 2, you get 20.',
    questionText: 'What number am I?',
    hintText: '3 x ? + 2 = 20. Subtract 2 first, then divide by 3',
    explanation: '20 - 2 = 18. 18 / 3 = 6',
    correctAnswer: '6',
    correctAnswerNumeric: 6,
  },

  // --- Topic 7, Open Ended 3 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'Find the missing number: 2, 5, 10, 17, ?, 37.',
    questionText: 'What is the missing number?',
    hintText: 'The differences are: 3, 5, 7, ?, ?. They go up by 2 each time',
    explanation: 'Differences: 3, 5, 7, 9, 11. So 17 + 9 = 26. Check: 26 + 11 = 37. Correct!',
    correctAnswer: '26',
    correctAnswerNumeric: 26,
  },

  // --- Topic 7, Open Ended 4 ---
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'Two numbers add up to 20. One number is 3 times the other.',
    questionText: 'What is the bigger number?',
    hintText: 'If the small number is x, the big one is 3x. So x + 3x = 20',
    explanation: '4x = 20. x = 5. The bigger number = 3 x 5 = 15',
    correctAnswer: '15',
    correctAnswerNumeric: 15,
  },
];
