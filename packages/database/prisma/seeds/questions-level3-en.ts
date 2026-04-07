import type { QuestionSeed } from './questions-level1';

export const level3QuestionsEn: QuestionSeed[] = [
  // =============================================
  // Topic 1: Unlike Fractions (different denominators)
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 1 - MCQ 1
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'You ate part of a cake and your sister ate a different part.',
    questionText: 'You ate 1/3 of a cake and your sister ate 1/6. How much cake was eaten in total?',
    hintText: 'Find a common denominator. 1/3 = 2/6',
    explanation: '1/3 = 2/6. So 2/6 + 1/6 = 3/6 = 1/2',
    options: [
      { optionText: '3/6', isCorrect: true },
      { optionText: '2/9', isCorrect: false },
      { optionText: '1/9', isCorrect: false },
      { optionText: '2/6', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 2
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'Two friends drank juice from the same bottle.',
    questionText: 'Ali drank 1/4 of the juice and Omar drank 1/2. How much did they drink together?',
    hintText: 'Convert 1/2 to fourths: 1/2 = 2/4',
    explanation: '1/4 + 2/4 = 3/4',
    options: [
      { optionText: '3/4', isCorrect: true },
      { optionText: '2/6', isCorrect: false },
      { optionText: '1/4', isCorrect: false },
      { optionText: '2/4', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 3
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'You painted parts of a wall on different days.',
    questionText: 'On Monday you painted 1/3 of the wall. On Tuesday you painted 1/4. How much did you paint in total?',
    hintText: 'Common denominator of 3 and 4 is 12. Convert both fractions',
    explanation: '1/3 = 4/12, 1/4 = 3/12. Total = 4/12 + 3/12 = 7/12',
    options: [
      { optionText: '7/12', isCorrect: true },
      { optionText: '2/7', isCorrect: false },
      { optionText: '1/7', isCorrect: false },
      { optionText: '5/12', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 4
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'A water tank was partly full.',
    questionText: 'A tank is 3/4 full. You used 1/2 of the tank for the garden. How much water is left?',
    hintText: 'Convert to the same denominator: 1/2 = 2/4',
    explanation: '3/4 - 2/4 = 1/4',
    options: [
      { optionText: '1/4', isCorrect: true },
      { optionText: '2/4', isCorrect: false },
      { optionText: '1/2', isCorrect: false },
      { optionText: '2/6', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 5
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'You are baking and mixing two types of flour.',
    questionText: 'You used 2/5 kg of white flour and 1/3 kg of brown flour. How much flour in total?',
    hintText: 'Common denominator of 5 and 3 is 15',
    explanation: '2/5 = 6/15, 1/3 = 5/15. Total = 6/15 + 5/15 = 11/15 kg',
    options: [
      { optionText: '11/15', isCorrect: true },
      { optionText: '3/8', isCorrect: false },
      { optionText: '3/15', isCorrect: false },
      { optionText: '7/15', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 6
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'You walked part of the way to school and rode a bus for the rest.',
    questionText: 'You walked 1/6 of the way and rode 1/3 of the way. How much of the trip have you done?',
    hintText: '1/3 = 2/6',
    explanation: '1/6 + 2/6 = 3/6 = 1/2',
    options: [
      { optionText: '3/6', isCorrect: true },
      { optionText: '2/9', isCorrect: false },
      { optionText: '1/6', isCorrect: false },
      { optionText: '2/6', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 7
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'Two children shared a bag of dates.',
    questionText: 'Sara took 2/3 of the dates. Nour took 1/6 of the dates. How much is left?',
    hintText: '2/3 = 4/6. Total taken = 4/6 + 1/6 = 5/6',
    explanation: 'Total taken = 4/6 + 1/6 = 5/6. Left = 6/6 - 5/6 = 1/6',
    options: [
      { optionText: '1/6', isCorrect: true },
      { optionText: '2/6', isCorrect: false },
      { optionText: '3/6', isCorrect: false },
      { optionText: '1/3', isCorrect: false },
    ],
  },

  // Topic 1 - MCQ 8
  {
    topicIndex: 1,
    questionType: 'mcq',
    realLifeContext: 'You solved part of a puzzle in the morning and more at night.',
    questionText: 'You solved 3/8 of a puzzle in the morning and 1/4 at night. How much did you solve in total?',
    hintText: '1/4 = 2/8',
    explanation: '3/8 + 2/8 = 5/8',
    options: [
      { optionText: '5/8', isCorrect: true },
      { optionText: '4/12', isCorrect: false },
      { optionText: '4/8', isCorrect: false },
      { optionText: '3/8', isCorrect: false },
    ],
  },

  // Topic 1 - Open Ended 1
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'You drank milk at breakfast and lunch.',
    questionText: 'You drank 1/3 of a bottle at breakfast and 1/6 at lunch. What fraction did you drink in total? Write as top/bottom (e.g. 3/6).',
    hintText: '1/3 = 2/6. Then add 2/6 + 1/6',
    explanation: '2/6 + 1/6 = 3/6',
    correctAnswer: '3/6',
    correctAnswerNumeric: 3,
  },

  // Topic 1 - Open Ended 2
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'You need to find a common denominator.',
    questionText: 'What is the common denominator (LCD) of 1/4 and 1/6?',
    hintText: 'Find the smallest number that both 4 and 6 divide into',
    explanation: 'The LCD of 4 and 6 is 12',
    correctAnswer: '12',
    correctAnswerNumeric: 12,
  },

  // Topic 1 - Open Ended 3
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'You filled part of a jar.',
    questionText: 'A jar is 5/6 full. You removed 1/3. How many sixths are left? (Hint: 1/3 = 2/6)',
    hintText: '5/6 - 2/6 = ?/6. Write just the top number',
    explanation: '5/6 - 2/6 = 3/6. The top number is 3',
    correctAnswer: '3',
    correctAnswerNumeric: 3,
  },

  // Topic 1 - Open Ended 4
  {
    topicIndex: 1,
    questionType: 'open_ended',
    realLifeContext: 'You are adding fractions.',
    questionText: '1/5 + 1/10 = ?/10. What is the top number?',
    hintText: '1/5 = 2/10. Then 2/10 + 1/10 = ?',
    explanation: '2/10 + 1/10 = 3/10. The top number is 3',
    correctAnswer: '3',
    correctAnswerNumeric: 3,
  },

  // =============================================
  // Topic 2: Multiplying Fractions
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 2 - MCQ 1
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'You are sharing a pizza with friends.',
    questionText: 'You have 1/2 of a pizza. You eat 1/3 of your piece. What fraction of the whole pizza did you eat?',
    hintText: 'Multiply the fractions: 1/2 x 1/3',
    explanation: '1/2 x 1/3 = 1/6 of the whole pizza',
    options: [
      { optionText: '1/6', isCorrect: true },
      { optionText: '1/5', isCorrect: false },
      { optionText: '2/3', isCorrect: false },
      { optionText: '1/3', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 2
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'A recipe needs a fraction of a cup of milk.',
    questionText: 'A recipe needs 3/4 cup of milk. You want to make half the recipe. How much milk do you need?',
    hintText: 'Multiply 3/4 by 1/2',
    explanation: '3/4 x 1/2 = 3/8 cup',
    options: [
      { optionText: '3/8', isCorrect: true },
      { optionText: '3/2', isCorrect: false },
      { optionText: '4/6', isCorrect: false },
      { optionText: '1/4', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 3
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'You are finding a fraction of a number.',
    questionText: 'What is 2/3 of 12?',
    hintText: 'Multiply 2/3 x 12. First find 1/3 of 12, then multiply by 2',
    explanation: '1/3 of 12 = 4. So 2/3 of 12 = 4 x 2 = 8',
    options: [
      { optionText: '8', isCorrect: true },
      { optionText: '6', isCorrect: false },
      { optionText: '9', isCorrect: false },
      { optionText: '4', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 4
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'You have apples to share.',
    questionText: 'You have 20 apples. You give away 3/5 of them. How many did you give away?',
    hintText: 'Find 3/5 of 20. First find 1/5 of 20',
    explanation: '1/5 of 20 = 4. So 3/5 of 20 = 4 x 3 = 12 apples',
    options: [
      { optionText: '12', isCorrect: true },
      { optionText: '15', isCorrect: false },
      { optionText: '8', isCorrect: false },
      { optionText: '10', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 5
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'You are multiplying two fractions in class.',
    questionText: 'What is 2/5 x 3/4?',
    hintText: 'Multiply tops: 2 x 3. Multiply bottoms: 5 x 4',
    explanation: '2/5 x 3/4 = 6/20 = 3/10',
    options: [
      { optionText: '6/20', isCorrect: true },
      { optionText: '5/9', isCorrect: false },
      { optionText: '6/9', isCorrect: false },
      { optionText: '5/20', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 6
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'A garden is partly used for flowers.',
    questionText: '1/4 of a garden is for flowers. 2/3 of the flower area is roses. What fraction of the whole garden is roses?',
    hintText: 'Multiply 1/4 x 2/3',
    explanation: '1/4 x 2/3 = 2/12 = 1/6',
    options: [
      { optionText: '2/12', isCorrect: true },
      { optionText: '3/7', isCorrect: false },
      { optionText: '2/7', isCorrect: false },
      { optionText: '1/4', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 7
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'You are finding a fraction of a group.',
    questionText: 'There are 30 students. 1/6 of them wear glasses. How many wear glasses?',
    hintText: 'Find 1/6 of 30',
    explanation: '30 / 6 = 5 students',
    options: [
      { optionText: '5', isCorrect: true },
      { optionText: '6', isCorrect: false },
      { optionText: '10', isCorrect: false },
      { optionText: '3', isCorrect: false },
    ],
  },

  // Topic 2 - MCQ 8
  {
    topicIndex: 2,
    questionType: 'mcq',
    realLifeContext: 'You are solving a fraction multiplication.',
    questionText: 'What is 5/6 x 3/5?',
    hintText: 'Multiply tops: 5 x 3. Multiply bottoms: 6 x 5',
    explanation: '5/6 x 3/5 = 15/30 = 1/2',
    options: [
      { optionText: '15/30', isCorrect: true },
      { optionText: '8/11', isCorrect: false },
      { optionText: '15/11', isCorrect: false },
      { optionText: '2/11', isCorrect: false },
    ],
  },

  // Topic 2 - Open Ended 1
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'You are finding a fraction of a number.',
    questionText: 'What is 1/4 of 24?',
    hintText: 'Divide 24 by 4',
    explanation: '24 / 4 = 6',
    correctAnswer: '6',
    correctAnswerNumeric: 6,
  },

  // Topic 2 - Open Ended 2
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'You have pocket money to spend.',
    questionText: 'You have 40 pounds. You spend 3/8 of it. How many pounds did you spend?',
    hintText: 'Find 1/8 of 40, then multiply by 3',
    explanation: '40 / 8 = 5. 5 x 3 = 15 pounds',
    correctAnswer: '15',
    correctAnswerNumeric: 15,
  },

  // Topic 2 - Open Ended 3
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'You are multiplying fractions.',
    questionText: 'What is 1/3 x 1/4? Write the bottom number of the answer.',
    hintText: 'Multiply the bottom numbers: 3 x 4',
    explanation: '1/3 x 1/4 = 1/12. The bottom number is 12',
    correctAnswer: '12',
    correctAnswerNumeric: 12,
  },

  // Topic 2 - Open Ended 4
  {
    topicIndex: 2,
    questionType: 'open_ended',
    realLifeContext: 'A class is going on a trip.',
    questionText: 'There are 36 students. 2/9 of them brought lunch from home. How many brought lunch?',
    hintText: '36 / 9 = 4. Then 4 x 2 = ?',
    explanation: '1/9 of 36 = 4. 2/9 of 36 = 8 students',
    correctAnswer: '8',
    correctAnswerNumeric: 8,
  },

  // =============================================
  // Topic 3: Dividing Fractions
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 3 - MCQ 1
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'You are sharing a cake equally.',
    questionText: 'You have 1/2 of a cake. You want to share it equally between 3 people. What fraction does each person get?',
    hintText: 'Divide 1/2 by 3: flip 3 to 1/3 and multiply',
    explanation: '1/2 / 3 = 1/2 x 1/3 = 1/6',
    options: [
      { optionText: '1/6', isCorrect: true },
      { optionText: '3/2', isCorrect: false },
      { optionText: '1/5', isCorrect: false },
      { optionText: '2/3', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 2
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'You are cutting ribbon into equal pieces.',
    questionText: 'You have 3/4 of a meter of ribbon. You cut it into pieces of 1/4 meter each. How many pieces do you get?',
    hintText: 'Divide 3/4 by 1/4: flip 1/4 and multiply',
    explanation: '3/4 / 1/4 = 3/4 x 4/1 = 12/4 = 3 pieces',
    options: [
      { optionText: '3', isCorrect: true },
      { optionText: '4', isCorrect: false },
      { optionText: '1', isCorrect: false },
      { optionText: '2', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 3
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'You are dividing fractions in class.',
    questionText: 'What is 2/3 divided by 1/2?',
    hintText: 'Flip 1/2 to get 2/1 and multiply: 2/3 x 2/1',
    explanation: '2/3 / 1/2 = 2/3 x 2/1 = 4/3',
    options: [
      { optionText: '4/3', isCorrect: true },
      { optionText: '1/3', isCorrect: false },
      { optionText: '2/6', isCorrect: false },
      { optionText: '3/4', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 4
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'You are pouring juice into small cups.',
    questionText: 'You have 4/5 liter of juice. Each cup holds 2/5 liter. How many cups can you fill?',
    hintText: 'Divide 4/5 by 2/5',
    explanation: '4/5 / 2/5 = 4/5 x 5/2 = 20/10 = 2 cups',
    options: [
      { optionText: '2', isCorrect: true },
      { optionText: '3', isCorrect: false },
      { optionText: '8/25', isCorrect: false },
      { optionText: '4', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 5
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'You are solving a division problem.',
    questionText: 'What is 5/6 divided by 5?',
    hintText: 'Dividing by 5 means multiplying by 1/5',
    explanation: '5/6 / 5 = 5/6 x 1/5 = 5/30 = 1/6',
    options: [
      { optionText: '1/6', isCorrect: true },
      { optionText: '25/6', isCorrect: false },
      { optionText: '5/1', isCorrect: false },
      { optionText: '1/30', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 6
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'You are sharing dates equally.',
    questionText: 'You have 3/4 kg of dates to share between 2 people. How much does each person get?',
    hintText: 'Divide 3/4 by 2',
    explanation: '3/4 / 2 = 3/4 x 1/2 = 3/8 kg each',
    options: [
      { optionText: '3/8', isCorrect: true },
      { optionText: '6/4', isCorrect: false },
      { optionText: '3/2', isCorrect: false },
      { optionText: '1/4', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 7
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'You are working with reciprocals.',
    questionText: 'What is the reciprocal of 3/7?',
    hintText: 'Flip the fraction upside down',
    explanation: 'The reciprocal of 3/7 is 7/3',
    options: [
      { optionText: '7/3', isCorrect: true },
      { optionText: '3/7', isCorrect: false },
      { optionText: '1/3', isCorrect: false },
      { optionText: '7/1', isCorrect: false },
    ],
  },

  // Topic 3 - MCQ 8
  {
    topicIndex: 3,
    questionType: 'mcq',
    realLifeContext: 'You are measuring ingredients for cooking.',
    questionText: 'A recipe needs 1/3 cup of water. You only have a 1/6 cup measure. How many scoops do you need?',
    hintText: 'Divide 1/3 by 1/6',
    explanation: '1/3 / 1/6 = 1/3 x 6/1 = 6/3 = 2 scoops',
    options: [
      { optionText: '2', isCorrect: true },
      { optionText: '3', isCorrect: false },
      { optionText: '1/2', isCorrect: false },
      { optionText: '6', isCorrect: false },
    ],
  },

  // Topic 3 - Open Ended 1
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'You are cutting a rope.',
    questionText: 'You have 1/2 meter of rope. You cut it into 4 equal pieces. What fraction of a meter is each piece? Write the bottom number.',
    hintText: '1/2 / 4 = 1/2 x 1/4 = 1/8. The bottom number is 8',
    explanation: '1/2 / 4 = 1/8. Each piece is 1/8 meter. Bottom number is 8',
    correctAnswer: '8',
    correctAnswerNumeric: 8,
  },

  // Topic 3 - Open Ended 2
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'You are portioning juice.',
    questionText: 'You have 6/8 liter of juice. Each glass takes 2/8 liter. How many glasses can you fill?',
    hintText: 'Divide 6/8 by 2/8',
    explanation: '6/8 / 2/8 = 6/8 x 8/2 = 48/16 = 3 glasses',
    correctAnswer: '3',
    correctAnswerNumeric: 3,
  },

  // Topic 3 - Open Ended 3
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'You are solving a math problem.',
    questionText: 'What is 4/5 divided by 2? Write the bottom number of the answer.',
    hintText: '4/5 / 2 = 4/5 x 1/2 = 4/10. Bottom number is 10',
    explanation: '4/5 x 1/2 = 4/10 = 2/5. Bottom number of 4/10 is 10',
    correctAnswer: '10',
    correctAnswerNumeric: 10,
  },

  // Topic 3 - Open Ended 4
  {
    topicIndex: 3,
    questionType: 'open_ended',
    realLifeContext: 'You are sharing a bag of dates.',
    questionText: 'A bag has 2/3 kg of dates. It is shared equally between 4 children. How many twelfths of a kg does each child get? (Hint: 2/3 / 4 = 2/12)',
    hintText: '2/3 / 4 = 2/3 x 1/4 = 2/12. How many twelfths?',
    explanation: '2/3 / 4 = 2/12. Each child gets 2 twelfths',
    correctAnswer: '2',
    correctAnswerNumeric: 2,
  },

  // =============================================
  // Topic 4: Mixed Numbers (mixed <-> improper, operations)
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 4 - MCQ 1
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'You baked some trays of date bars.',
    questionText: 'Convert 2 and 1/3 to an improper fraction.',
    hintText: 'Multiply the whole number by the denominator and add the numerator: (2 x 3) + 1',
    explanation: '2 and 1/3 = (2 x 3 + 1)/3 = 7/3',
    options: [
      { optionText: '7/3', isCorrect: true },
      { optionText: '5/3', isCorrect: false },
      { optionText: '3/7', isCorrect: false },
      { optionText: '6/3', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 2
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'You have some bottles of water.',
    questionText: 'Convert 11/4 to a mixed number.',
    hintText: 'Divide 11 by 4. The quotient is the whole number, the remainder is the numerator',
    explanation: '11 / 4 = 2 remainder 3. So 11/4 = 2 and 3/4',
    options: [
      { optionText: '2 and 3/4', isCorrect: true },
      { optionText: '3 and 1/4', isCorrect: false },
      { optionText: '2 and 1/4', isCorrect: false },
      { optionText: '1 and 3/4', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 3
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'You are adding mixed numbers.',
    questionText: 'What is 1 and 1/4 + 2 and 2/4?',
    hintText: 'Add whole numbers: 1 + 2 = 3. Add fractions: 1/4 + 2/4 = 3/4',
    explanation: '1 + 2 = 3. 1/4 + 2/4 = 3/4. Total = 3 and 3/4',
    options: [
      { optionText: '3 and 3/4', isCorrect: true },
      { optionText: '3 and 1/4', isCorrect: false },
      { optionText: '4 and 1/4', isCorrect: false },
      { optionText: '2 and 3/4', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 4
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'You walked a distance measured in mixed numbers.',
    questionText: 'What is 3 and 2/5 - 1 and 1/5?',
    hintText: 'Subtract whole numbers: 3 - 1 = 2. Subtract fractions: 2/5 - 1/5 = 1/5',
    explanation: '3 - 1 = 2. 2/5 - 1/5 = 1/5. Answer = 2 and 1/5',
    options: [
      { optionText: '2 and 1/5', isCorrect: true },
      { optionText: '2 and 3/5', isCorrect: false },
      { optionText: '1 and 1/5', isCorrect: false },
      { optionText: '4 and 3/5', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 5
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'You are converting fractions.',
    questionText: 'Convert 3 and 2/5 to an improper fraction.',
    hintText: '(3 x 5) + 2 = ?',
    explanation: '3 and 2/5 = (3 x 5 + 2)/5 = 17/5',
    options: [
      { optionText: '17/5', isCorrect: true },
      { optionText: '15/5', isCorrect: false },
      { optionText: '13/5', isCorrect: false },
      { optionText: '5/17', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 6
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'You are converting an improper fraction.',
    questionText: 'Convert 9/2 to a mixed number.',
    hintText: '9 / 2 = 4 remainder 1',
    explanation: '9 / 2 = 4 remainder 1. So 9/2 = 4 and 1/2',
    options: [
      { optionText: '4 and 1/2', isCorrect: true },
      { optionText: '3 and 1/2', isCorrect: false },
      { optionText: '5 and 1/2', isCorrect: false },
      { optionText: '4 and 2/9', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 7
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'You bought flour for baking.',
    questionText: 'You bought 2 and 1/2 kg of flour and used 1 and 3/4 kg. How much is left?',
    hintText: 'Convert to improper fractions: 5/2 - 7/4. Use common denominator 4',
    explanation: '5/2 = 10/4. 10/4 - 7/4 = 3/4 kg left',
    options: [
      { optionText: '3/4 kg', isCorrect: true },
      { optionText: '1 and 1/4 kg', isCorrect: false },
      { optionText: '1/2 kg', isCorrect: false },
      { optionText: '1 kg', isCorrect: false },
    ],
  },

  // Topic 4 - MCQ 8
  {
    topicIndex: 4,
    questionType: 'mcq',
    realLifeContext: 'You are adding mixed numbers where fractions add up to more than 1.',
    questionText: 'What is 1 and 3/4 + 2 and 3/4?',
    hintText: 'Add whole numbers: 1+2=3. Add fractions: 3/4+3/4=6/4=1 and 2/4',
    explanation: '3/4 + 3/4 = 6/4 = 1 and 2/4. Total = 3 + 1 and 2/4 = 4 and 2/4 = 4 and 1/2',
    options: [
      { optionText: '4 and 1/2', isCorrect: true },
      { optionText: '3 and 6/4', isCorrect: false },
      { optionText: '3 and 3/4', isCorrect: false },
      { optionText: '5 and 1/4', isCorrect: false },
    ],
  },

  // Topic 4 - Open Ended 1
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'You are converting a mixed number.',
    questionText: 'Convert 1 and 3/5 to an improper fraction. What is the top number?',
    hintText: '(1 x 5) + 3 = ?',
    explanation: '1 and 3/5 = 8/5. The top number is 8',
    correctAnswer: '8',
    correctAnswerNumeric: 8,
  },

  // Topic 4 - Open Ended 2
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'You are converting an improper fraction.',
    questionText: 'Convert 13/6 to a mixed number. What is the whole number part?',
    hintText: '13 / 6 = 2 remainder 1',
    explanation: '13/6 = 2 and 1/6. The whole number is 2',
    correctAnswer: '2',
    correctAnswerNumeric: 2,
  },

  // Topic 4 - Open Ended 3
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'You are adding mixed numbers.',
    questionText: 'What is 2 and 1/6 + 1 and 3/6? Write the whole number part of the answer.',
    hintText: '2 + 1 = 3. 1/6 + 3/6 = 4/6. Answer is 3 and 4/6',
    explanation: '2 and 1/6 + 1 and 3/6 = 3 and 4/6. Whole number is 3',
    correctAnswer: '3',
    correctAnswerNumeric: 3,
  },

  // Topic 4 - Open Ended 4
  {
    topicIndex: 4,
    questionType: 'open_ended',
    realLifeContext: 'You are subtracting mixed numbers.',
    questionText: 'What is 4 and 5/8 - 2 and 3/8? Write the whole number part of the answer.',
    hintText: '4 - 2 = 2. 5/8 - 3/8 = 2/8. Answer is 2 and 2/8',
    explanation: '4 and 5/8 - 2 and 3/8 = 2 and 2/8. Whole number is 2',
    correctAnswer: '2',
    correctAnswerNumeric: 2,
  },

  // =============================================
  // Topic 5: Multiply/Divide Decimals
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 5 - MCQ 1
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'You are buying apples by the kilogram.',
    questionText: 'Apples cost 3.50 pounds per kg. You buy 2 kg. How much do you pay?',
    hintText: 'Multiply 3.50 by 2',
    explanation: '3.50 x 2 = 7.00 pounds',
    options: [
      { optionText: '7.00 pounds', isCorrect: true },
      { optionText: '5.50 pounds', isCorrect: false },
      { optionText: '6.50 pounds', isCorrect: false },
      { optionText: '7.50 pounds', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 2
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'You are sharing money equally.',
    questionText: '12.60 pounds is shared equally among 4 friends. How much does each person get?',
    hintText: 'Divide 12.60 by 4',
    explanation: '12.60 / 4 = 3.15 pounds each',
    options: [
      { optionText: '3.15 pounds', isCorrect: true },
      { optionText: '3.20 pounds', isCorrect: false },
      { optionText: '3.06 pounds', isCorrect: false },
      { optionText: '4.20 pounds', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 3
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'You are multiplying a decimal by 10.',
    questionText: 'What is 4.56 x 10?',
    hintText: 'When you multiply by 10, move the decimal point one place to the right',
    explanation: '4.56 x 10 = 45.6',
    options: [
      { optionText: '45.6', isCorrect: true },
      { optionText: '456', isCorrect: false },
      { optionText: '0.456', isCorrect: false },
      { optionText: '4.560', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 4
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'You are dividing a decimal by 10.',
    questionText: 'What is 73.5 / 10?',
    hintText: 'When you divide by 10, move the decimal point one place to the left',
    explanation: '73.5 / 10 = 7.35',
    options: [
      { optionText: '7.35', isCorrect: true },
      { optionText: '735', isCorrect: false },
      { optionText: '0.735', isCorrect: false },
      { optionText: '73.05', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 5
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'A shop sells bananas by weight.',
    questionText: 'Bananas cost 2.40 pounds per kg. You buy 3 kg. How much do you pay?',
    hintText: 'Multiply 2.40 by 3',
    explanation: '2.40 x 3 = 7.20 pounds',
    options: [
      { optionText: '7.20 pounds', isCorrect: true },
      { optionText: '7.00 pounds', isCorrect: false },
      { optionText: '6.80 pounds', isCorrect: false },
      { optionText: '7.40 pounds', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 6
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'You are splitting a bill at a restaurant.',
    questionText: 'The bill is 45.50 pounds for 5 people. How much does each person pay?',
    hintText: 'Divide 45.50 by 5',
    explanation: '45.50 / 5 = 9.10 pounds',
    options: [
      { optionText: '9.10 pounds', isCorrect: true },
      { optionText: '9.50 pounds', isCorrect: false },
      { optionText: '8.10 pounds', isCorrect: false },
      { optionText: '9.00 pounds', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 7
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'You are multiplying decimals.',
    questionText: 'What is 0.6 x 0.3?',
    hintText: 'Multiply 6 x 3 = 18, then count decimal places (2 total)',
    explanation: '0.6 x 0.3 = 0.18',
    options: [
      { optionText: '0.18', isCorrect: true },
      { optionText: '1.8', isCorrect: false },
      { optionText: '18', isCorrect: false },
      { optionText: '0.018', isCorrect: false },
    ],
  },

  // Topic 5 - MCQ 8
  {
    topicIndex: 5,
    questionType: 'mcq',
    realLifeContext: 'You are multiplying by 100.',
    questionText: 'What is 2.345 x 100?',
    hintText: 'Move the decimal point 2 places to the right',
    explanation: '2.345 x 100 = 234.5',
    options: [
      { optionText: '234.5', isCorrect: true },
      { optionText: '23.45', isCorrect: false },
      { optionText: '2345', isCorrect: false },
      { optionText: '23450', isCorrect: false },
    ],
  },

  // Topic 5 - Open Ended 1
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'You are buying juice.',
    questionText: 'Juice costs 1.50 pounds per bottle. You buy 4 bottles. How much do you pay?',
    hintText: 'Multiply 1.50 by 4',
    explanation: '1.50 x 4 = 6.00 pounds',
    correctAnswer: '6',
    correctAnswerNumeric: 6,
  },

  // Topic 5 - Open Ended 2
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'You are dividing money.',
    questionText: '8.40 pounds is shared equally among 3 people. How much does each person get?',
    hintText: 'Divide 8.40 by 3',
    explanation: '8.40 / 3 = 2.80 pounds',
    correctAnswer: '2.8',
    correctAnswerNumeric: 2.8,
  },

  // Topic 5 - Open Ended 3
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'You are multiplying by 10.',
    questionText: 'What is 3.72 x 10?',
    hintText: 'Move the decimal one place to the right',
    explanation: '3.72 x 10 = 37.2',
    correctAnswer: '37.2',
    correctAnswerNumeric: 37.2,
  },

  // Topic 5 - Open Ended 4
  {
    topicIndex: 5,
    questionType: 'open_ended',
    realLifeContext: 'You are dividing by 10.',
    questionText: 'What is 56.0 / 10?',
    hintText: 'Move the decimal one place to the left',
    explanation: '56.0 / 10 = 5.6',
    correctAnswer: '5.6',
    correctAnswerNumeric: 5.6,
  },

  // =============================================
  // Topic 6: Order of Operations (BODMAS)
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 6 - MCQ 1
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'You are solving a math problem in class.',
    questionText: 'What is 3 + 4 x 2?',
    hintText: 'Do multiplication before addition (BODMAS)',
    explanation: '4 x 2 = 8. Then 3 + 8 = 11',
    options: [
      { optionText: '11', isCorrect: true },
      { optionText: '14', isCorrect: false },
      { optionText: '10', isCorrect: false },
      { optionText: '9', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 2
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'You are solving a problem with brackets.',
    questionText: 'What is (5 + 3) x 4?',
    hintText: 'Do the brackets first',
    explanation: '(5 + 3) = 8. Then 8 x 4 = 32',
    options: [
      { optionText: '32', isCorrect: true },
      { optionText: '17', isCorrect: false },
      { optionText: '23', isCorrect: false },
      { optionText: '35', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 3
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'You have a tricky calculation.',
    questionText: 'What is 20 - 3 x 5?',
    hintText: 'Multiply first, then subtract',
    explanation: '3 x 5 = 15. Then 20 - 15 = 5',
    options: [
      { optionText: '5', isCorrect: true },
      { optionText: '85', isCorrect: false },
      { optionText: '35', isCorrect: false },
      { optionText: '25', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 4
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'You see a math problem on the board.',
    questionText: 'What is 12 / 4 + 2 x 3?',
    hintText: 'Do division and multiplication first (left to right), then addition',
    explanation: '12 / 4 = 3. 2 x 3 = 6. Then 3 + 6 = 9',
    options: [
      { optionText: '9', isCorrect: true },
      { optionText: '15', isCorrect: false },
      { optionText: '3', isCorrect: false },
      { optionText: '12', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 5
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'You are calculating a score in a game.',
    questionText: 'What is (10 - 4) x (3 + 2)?',
    hintText: 'Solve both brackets first',
    explanation: '(10 - 4) = 6. (3 + 2) = 5. Then 6 x 5 = 30',
    options: [
      { optionText: '30', isCorrect: true },
      { optionText: '11', isCorrect: false },
      { optionText: '50', isCorrect: false },
      { optionText: '24', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 6
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'You are solving a problem step by step.',
    questionText: 'What is 8 + 12 / 6 - 1?',
    hintText: 'Division first: 12 / 6 = 2',
    explanation: '12 / 6 = 2. Then 8 + 2 - 1 = 9',
    options: [
      { optionText: '9', isCorrect: true },
      { optionText: '3', isCorrect: false },
      { optionText: '7', isCorrect: false },
      { optionText: '11', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 7
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'You are simplifying an expression.',
    questionText: 'What is 2 x (7 + 3) - 5?',
    hintText: 'Brackets first, then multiply, then subtract',
    explanation: '(7 + 3) = 10. 2 x 10 = 20. 20 - 5 = 15',
    options: [
      { optionText: '15', isCorrect: true },
      { optionText: '25', isCorrect: false },
      { optionText: '12', isCorrect: false },
      { optionText: '17', isCorrect: false },
    ],
  },

  // Topic 6 - MCQ 8
  {
    topicIndex: 6,
    questionType: 'mcq',
    realLifeContext: 'You found a hard problem in your textbook.',
    questionText: 'What is 36 / (4 + 2) x 3?',
    hintText: 'Brackets first: 4 + 2 = 6. Then work left to right',
    explanation: '(4 + 2) = 6. 36 / 6 = 6. 6 x 3 = 18',
    options: [
      { optionText: '18', isCorrect: true },
      { optionText: '6', isCorrect: false },
      { optionText: '27', isCorrect: false },
      { optionText: '24', isCorrect: false },
    ],
  },

  // Topic 6 - Open Ended 1
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'You are solving a BODMAS problem.',
    questionText: 'What is 5 + 6 x 2?',
    hintText: 'Multiply first: 6 x 2 = 12. Then add 5',
    explanation: '6 x 2 = 12. 5 + 12 = 17',
    correctAnswer: '17',
    correctAnswerNumeric: 17,
  },

  // Topic 6 - Open Ended 2
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'You are working with brackets.',
    questionText: 'What is (8 + 2) x 5?',
    hintText: 'Brackets first: 8 + 2 = 10',
    explanation: '(8 + 2) = 10. 10 x 5 = 50',
    correctAnswer: '50',
    correctAnswerNumeric: 50,
  },

  // Topic 6 - Open Ended 3
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'You are solving a multi-step problem.',
    questionText: 'What is 30 - 4 x 6?',
    hintText: 'Multiply first: 4 x 6 = 24',
    explanation: '4 x 6 = 24. 30 - 24 = 6',
    correctAnswer: '6',
    correctAnswerNumeric: 6,
  },

  // Topic 6 - Open Ended 4
  {
    topicIndex: 6,
    questionType: 'open_ended',
    realLifeContext: 'You are practicing order of operations.',
    questionText: 'What is (12 - 4) x (1 + 2)?',
    hintText: 'Brackets first: (12-4)=8 and (1+2)=3. Then multiply',
    explanation: '8 x 3 = 24',
    correctAnswer: '24',
    correctAnswerNumeric: 24,
  },

  // =============================================
  // Topic 7: Money Math (profit, loss, budgets)
  // 8 MCQ + 4 open_ended = 12
  // =============================================

  // Topic 7 - MCQ 1
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'You sold lemonade at a school fair.',
    questionText: 'You spent 30 pounds on lemons and sold lemonade for 50 pounds. What is your profit?',
    hintText: 'Profit = selling price - cost',
    explanation: '50 - 30 = 20 pounds profit',
    options: [
      { optionText: '20 pounds', isCorrect: true },
      { optionText: '80 pounds', isCorrect: false },
      { optionText: '30 pounds', isCorrect: false },
      { optionText: '15 pounds', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 2
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'A shop bought and sold T-shirts.',
    questionText: 'A shop bought a T-shirt for 40 pounds and sold it for 35 pounds. What happened?',
    hintText: 'If selling price is less than cost, it is a loss',
    explanation: '35 - 40 = -5. The shop made a loss of 5 pounds',
    options: [
      { optionText: 'A loss of 5 pounds', isCorrect: true },
      { optionText: 'A profit of 5 pounds', isCorrect: false },
      { optionText: 'A loss of 75 pounds', isCorrect: false },
      { optionText: 'No profit or loss', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 3
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'You are planning a weekly budget.',
    questionText: 'You get 100 pounds per week. You spend 35 on food, 25 on transport, and 15 on school supplies. How much can you save?',
    hintText: 'Add all expenses and subtract from 100',
    explanation: '35 + 25 + 15 = 75 pounds spent. 100 - 75 = 25 pounds saved',
    options: [
      { optionText: '25 pounds', isCorrect: true },
      { optionText: '75 pounds', isCorrect: false },
      { optionText: '35 pounds', isCorrect: false },
      { optionText: '15 pounds', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 4
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'A boy bought bananas and sold them at school.',
    questionText: 'Omar bought 10 bananas for 2 pounds each. He sold them for 3 pounds each. What is his total profit?',
    hintText: 'Total cost = 10 x 2. Total selling = 10 x 3. Profit = selling - cost',
    explanation: 'Cost = 20 pounds. Selling = 30 pounds. Profit = 30 - 20 = 10 pounds',
    options: [
      { optionText: '10 pounds', isCorrect: true },
      { optionText: '5 pounds', isCorrect: false },
      { optionText: '20 pounds', isCorrect: false },
      { optionText: '30 pounds', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 5
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'A family is budgeting for a trip.',
    questionText: 'The family has 500 pounds for a trip. Transport costs 150 pounds and food costs 200 pounds. How much is left for fun activities?',
    hintText: 'Subtract transport and food from the total budget',
    explanation: '500 - 150 - 200 = 150 pounds left',
    options: [
      { optionText: '150 pounds', isCorrect: true },
      { optionText: '250 pounds', isCorrect: false },
      { optionText: '350 pounds', isCorrect: false },
      { optionText: '100 pounds', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 6
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'A girl made juice to sell.',
    questionText: 'Sara spent 24 pounds on fruit. She made 8 cups of juice and sold each for 5 pounds. What is her profit?',
    hintText: 'Total sales = 8 x 5. Profit = sales - cost',
    explanation: 'Sales = 8 x 5 = 40 pounds. Profit = 40 - 24 = 16 pounds',
    options: [
      { optionText: '16 pounds', isCorrect: true },
      { optionText: '40 pounds', isCorrect: false },
      { optionText: '24 pounds', isCorrect: false },
      { optionText: '8 pounds', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 7
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'You are comparing costs at two shops.',
    questionText: 'Shop A sells 3 kg of rice for 45 pounds. Shop B sells 2 kg of rice for 28 pounds. Which shop has the better price per kg?',
    hintText: 'Find cost per kg: Shop A = 45/3, Shop B = 28/2',
    explanation: 'Shop A: 45/3 = 15 pounds/kg. Shop B: 28/2 = 14 pounds/kg. Shop B is cheaper',
    options: [
      { optionText: 'Shop B', isCorrect: true },
      { optionText: 'Shop A', isCorrect: false },
      { optionText: 'Same price', isCorrect: false },
      { optionText: 'Cannot tell', isCorrect: false },
    ],
  },

  // Topic 7 - MCQ 8
  {
    topicIndex: 7,
    questionType: 'mcq',
    realLifeContext: 'You saved money over 4 weeks.',
    questionText: 'You saved 15 pounds in week 1, 20 in week 2, 10 in week 3, and 25 in week 4. What is the total saved?',
    hintText: 'Add all 4 amounts',
    explanation: '15 + 20 + 10 + 25 = 70 pounds',
    options: [
      { optionText: '70 pounds', isCorrect: true },
      { optionText: '60 pounds', isCorrect: false },
      { optionText: '75 pounds', isCorrect: false },
      { optionText: '65 pounds', isCorrect: false },
    ],
  },

  // Topic 7 - Open Ended 1
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'You bought and sold dates.',
    questionText: 'You bought dates for 50 pounds and sold them for 72 pounds. What is your profit?',
    hintText: 'Profit = selling price - cost price',
    explanation: '72 - 50 = 22 pounds',
    correctAnswer: '22',
    correctAnswerNumeric: 22,
  },

  // Topic 7 - Open Ended 2
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'You are making a budget for a school project.',
    questionText: 'You have 80 pounds. You spend 28 pounds on paper and 17 pounds on colors. How much is left?',
    hintText: 'Subtract both expenses from 80',
    explanation: '80 - 28 - 17 = 35 pounds',
    correctAnswer: '35',
    correctAnswerNumeric: 35,
  },

  // Topic 7 - Open Ended 3
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'A boy sells water bottles at a sports event.',
    questionText: 'He bought 20 bottles at 3 pounds each. He sold them at 5 pounds each. What is his total profit?',
    hintText: 'Cost = 20 x 3. Sales = 20 x 5. Profit = sales - cost',
    explanation: 'Cost = 60. Sales = 100. Profit = 100 - 60 = 40 pounds',
    correctAnswer: '40',
    correctAnswerNumeric: 40,
  },

  // Topic 7 - Open Ended 4
  {
    topicIndex: 7,
    questionType: 'open_ended',
    realLifeContext: 'You bought a toy and later sold it.',
    questionText: 'You bought a toy for 65 pounds but could only sell it for 50 pounds. How much money did you lose?',
    hintText: 'Loss = cost - selling price',
    explanation: '65 - 50 = 15 pounds loss',
    correctAnswer: '15',
    correctAnswerNumeric: 15,
  },
];
