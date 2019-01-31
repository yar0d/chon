/*
** https://fr.wikipedia.org/wiki/Composition_nutritionnelle_des_aliments
**
** type:
**   L = vegetable
**   F = fruit
**   HA = Aromatic herb
**   V = Greenery
**
** quality:
**   TC = Very advisable
**   C = Advisable
**   D = Not recommended
**   M = With moderation
**   P = To forbid
**   T = Toxic !
**   ? = Not tested
**
** For 100 gr of product :
** Calories in kcal
** water in g
** fibers in g
** carbohydrates in g
** protein in g
** lipids in g
** vitamins in mg
*/

const FRUITS = [
  {
    name: 'Apricot',
    quality: 'C',
    vitamins: {
      C: 10
    },
    type: 'F',
    note: ''
  }, {
    name: 'Pineapple',
    quality: 'C',
    vitamins: {
      C: 47.8
    },
    type: 'F',
    note: ''
  }, {
    name: 'Banana',
    quality: 'C',
    vitamins: {
      C: 8.7
    },
    type: 'F',
    note: 'A section of 2 cm. Avoid in case of obesity.'
  }, {
    name: 'Cranberry',
    quality: 'C',
    vitamins: {
      C: 13.3
    },
    type: 'F',
    note: ''
  }, {
    name: 'Cherry',
    quality: 'M',
    vitamins: {
      C: 10
    },
    type: 'F',
    note: 'Very sweet.'
  }, {
    name: 'Clementine',
    quality: 'C',
    vitamins: {
      C: 48.8
    },
    type: 'F',
    note: ''
  }, {
    name: 'Quince',
    quality: 'C',
    vitamins: {
      C: 15
    },
    type: 'F',
    note: ''
  }, {
    name: 'Date',
    quality: 'D',
    vitamins: {
      C: 1.5
    },
    type: 'F',
    note: 'Rich in oxalic acid.'
  }, {
    name: 'Figs',
    quality: 'P',
    vitamins: {
      C: 2
    },
    type: 'F',
    note: 'Rich in oxalic acid.'
  }, {
    name: 'Strawberry',
    quality: 'C',
    vitamins: {
      C: 67
    },
    type: 'F',
    note: ''
  }, {
    name: 'Raspberry',
    quality: 'C',
    vitamins: {
      C: 26.2
    },
    type: 'F',
    note: ''
  }, {
    name: 'Passion fruit',
    quality: 'C',
    vitamins: {
      C: 30
    },
    type: 'F',
    note: 'Avoid in guinea pigs suffering from obesity.'
  }, {
    name: 'Guava',
    quality: 'M',
    vitamins: {
      C: 228.3
    },
    type: 'F',
    note: 'Avoid in guinea pigs suffering from obesity.'
  }, {
    name: 'Currant',
    quality: 'M',
    vitamins: {
      C: 41
    },
    type: 'F',
    note: 'Sweet.'
  }, {
    name: 'Khaki',
    quality: 'M',
    vitamins: {
      C: 66
    },
    type: 'F',
    note: 'Sweet.'
  }, {
    name: 'Kiwi',
    quality: 'C',
    vitamins: {
      C: 92.7
    },
    type: 'F',
    note: 'Diuretic. May cause loose stools in some susceptible guinea pigs.'
  }, {
    name: 'Litchi',
    quality: 'M',
    vitamins: {
      C: 71.5
    },
    type: 'F',
    note: 'Avoid in guinea pigs suffering from obesity.'
  }, {
    name: 'Mandarin',
    quality: 'M',
    vitamins: {
      C: 26.7
    },
    type: 'F',
    note: 'Sweet.'
  }, {
    name: 'Mango',
    quality: 'M',
    vitamins: {
      C: 36.4
    },
    type: 'F',
    note: 'Sweet.'
  }, {
    name: 'Melon',
    quality: 'M',
    vitamins: {
      C: 36.7
    },
    type: 'F',
    note: 'Avoid in guinea pigs with urinary problems.'
  }, {
    name: 'Green / yellow melon',
    quality: 'C',
    vitamins: {
      C: 36.7
    },
    type: 'F',
    note: 'Sweet.'
  }, {
    name: 'Blueberries',
    quality: 'M',
    vitamins: {
      C: 20
    },
    type: 'F',
    note: 'Sweet and acidic.'
  }, {
    name: 'Nectarine',
    quality: 'M',
    vitamins: {
      C: 5.4
    },
    type: 'F',
    note: 'Sweet.'
  }, {
    name: 'Coconut',
    quality: 'M',
    vitamins: {
      C: 3.3
    },
    type: 'F',
    note: 'Rich in vitamin D.'
  }, {
    name: 'Orange',
    quality: 'M',
    vitamins: {
      C: 53.2
    },
    type: 'F',
    note: ''
  }, {
    name: 'Grapefruit',
    quality: 'M',
    vitamins: {
      C: 42
    },
    type: 'F',
    note: ''
  }, {
    name: 'Watermelon',
    quality: 'D',
    vitamins: {
      C: 8.1
    },
    type: 'F',
    note: 'Not recommended for all the same guinea pigs in good health. Very disadvised in guinea pigs suffering from urinary problems because too rich in calcium.'
  }, {
    name: 'Perry',
    quality: 'M',
    vitamins: {
      C: 4.3
    },
    type: 'F',
    note: 'May cause bloating in some guinea pigs.'
  }, {
    name: 'Pomelo',
    quality: 'M',
    vitamins: {
      C: 40.9
    },
    type: 'F',
    note: 'Sweet and acidic.'
  }, {
    name: 'Apple',
    quality: 'M',
    vitamins: {
      C: 4.6
    },
    type: 'F',
    note: 'Moderately to avoid obesity. Some guinea pigs are allergic to pectin in the skin. To peel.'
  }, {
    name: 'Prune',
    quality: 'D',
    vitamins: {
      C: 0.6
    },
    type: 'F',
    note: 'Risk of diarrhea.'
  }, {
    name: 'Grapes',
    quality: 'M',
    vitamins: {
      C: 4
    },
    type: 'F',
    note: 'To moderate because very rich in sugar and can favor obesity.'
  }
]

const AROMATIC_HERBS = [
  {
    name: 'Dill',
    quality: 'M',
    vitamins: {
      C: 21
    },
    type: 'HA',
    note: ''
  }, {
    name: 'Angelic',
    quality: 'C',
    vitamins: {
      C: 0
    },
    type: 'HA',
    note: ''
  }, {
    name: 'Basil',
    quality: 'M',
    vitamins: {
      C: 18
    },
    type: 'HA',
    note: ''
  }, {
    name: 'Chervil',
    quality: 'D',
    vitamins: {
      C: 50
    },
    type: 'HA',
    note: ''
  }, {
    name: 'Coriander',
    quality: 'C',
    vitamins: {
      C: 27
    },
    type: 'HA',
    note: ''
  }, {
    name: 'Tarragon',
    quality: 'M',
    vitamins: {
      C: 50
    },
    type: 'HA',
    note: 'Rich in oxalic acid.'
  }, {
    name: 'Aromatic fennel',
    quality: 'C',
    vitamins: {
      C: 0
    },
    type: 'HA',
    note: ''
  }, {
    name: 'Mint',
    quality: 'C',
    vitamins: {
      C: 31.8
    },
    type: 'HA',
    note: ''
  }, {
    name: 'Sorrel',
    quality: 'P',
    vitamins: {
      C: 48
    },
    type: 'HA',
    note: 'Rich in oxalic acid.'
  }, {
    name: 'Parsley (flat, curly)',
    type: 'HA',
    quality: 'C',
    note: 'Do not give to a breastfeeding female: Cut the milk up. Very rich in vitamin C.',
    calories: 28,
    water: 83,
    fibers: 6,
    carbohydrates: 1.4,
    proteins: 4.4,
    lipids: 0.5,
    vitamins: {
      C: 170
    }
  }, {
    name: 'Savory',
    quality: 'P',
    vitamins: {
      C: 0
    },
    type: 'HA',
    note: ''
  }, {
    name: 'Sage',
    quality: 'P',
    vitamins: {
      C: 0
    },
    type: 'HA',
    note: ''
  }, {
    name: 'Thyme',
    quality: 'M',
    vitamins: {
      C: 0
    },
    type: 'HA',
    note: ''
  }
]

const GREENERY = [
  {
    name: 'Strawberry leaves',
    quality: 'C',
    vitamins: {
      C: 0
    },
    type: 'V',
    note: ''
  }, {
    name: 'Raspberry leaves',
    quality: 'C',
    vitamins: {
      C: 0
    },
    type: 'V',
    note: 'Be careful to remove thorns that can injure the walls of the oral cavity.'
  }, {
    name: 'Mulberry leaves',
    quality: 'C',
    vitamins: {
      C: 0
    },
    type: 'V',
    note: 'Be careful to remove thorns that can injure the walls of the oral cavity.'
  }, {
    name: 'Hazel leaves',
    quality: 'C',
    vitamins: {
      C: 0
    },
    type: 'V',
    note: '2 or 3 leaves per ration.'
  }, {
    name: 'Willow leaves',
    quality: 'C',
    vitamins: {
      C: 0
    },
    type: 'V',
    note: ''
  }, {
    name: 'Fresh grass',
    quality: 'TC',
    vitamins: {
      C: 0
    },
    type: 'V',
    note: ''
  }, {
    name: 'Fresh alfalfa',
    quality: 'D',
    vitamins: {
      C: 0
    },
    type: 'V',
    note: 'Too rich in calcium.'
  }, {
    name: 'Nettle',
    quality: 'C',
    vitamins: {
      C: 0
    },
    type: 'V',
    note: 'The ortie is rich in making, in calcium, in potassium, in magnesium, even in vitamins A and C. To make it dry for the purpose of stinging proprieties. Diurettique, Antidiarrheic.'
  }, {
    name: 'Dandelion',
    type: 'V',
    quality: 'C',
    note: 'Leaves and flowers are edible.',
    calories: 40,
    water: 85.5,
    fibers: 3.5,
    carbohydrates: 5.7,
    proteins: 2.7,
    lipids: 0.7,
    vitamins: {
      C: 35
    }
  }, {
    name: 'Clover',
    quality: 'M',
    vitamins: {
      C: 0
    },
    type: 'V',
    note: 'May cause excessive bloating.'
  }
]

const VEGETABLES = [
  {
    name: 'Garlic',
    type: 'L',
    quality: 'T',
    note: '',
    calories: 135,
    water: 64,
    fibers: 3,
    carbohydrates: 27.5,
    proteins: 6,
    lipids: 0.1,
    vitamins: {
      C: 30
    }
  }, {
    name: 'Artichoke',
    type: 'L',
    quality: '?',
    note: '',
    calories: 40,
    water: 85,
    fibers: 2,
    carbohydrates: 7.6,
    proteins: 2.1,
    lipids: 0.1,
    vitamins: {
      C: 8
    }
  }, {
    name: 'Asparagus',
    type: 'L',
    quality: 'D',
    note: '',
    calories: 25,
    water: 92,
    fibers: 1.5,
    carbohydrates: 3.5,
    proteins: 2.2,
    lipids: 0.2,
    vitamins: {
      C: 31
    }
  }, {
    name: 'Eggplant',
    type: 'L',
    quality: 'C',
    note: '',
    calories: 18,
    water: 92.2,
    fibers: 2.5,
    carbohydrates: 3.5,
    proteins: 0.9,
    lipids: 0,
    vitamins: {
      C: 31
    }
  }, {
    name: 'Batavia',
    quality: 'M',
    type: 'L',
    note: 'Laxative. May be given daily in moderate quantity (2 to 3 leaves). In very moderate quantities the very first times for guinea pigs not used.',
    vitamins: {
      C: 0
    }
  }, {
    name: 'Bette',
    type: 'L',
    quality: 'D',
    note: 'Very rich in oxalic acid (600mg for 1g) May promote urolithiasis problems if consumed in excess, even for healthy guinea pigs. Not recommended for guinea pigs with urinary problems.',
    calories: 21,
    water: 92.4,
    fibers: 1,
    carbohydrates: 2.7,
    proteins: 2.1,
    lipids: 0.2,
    vitamins: {
      C: 35
    }
  }, {
    name: 'Beetroot',
    type: 'L',
    quality: 'D',
    note: 'Rich in sugar, little nutritional value, promotes obesity. To proscribe in guinea pigs having urinary problems.',
    calories: 40,
    water: 86.2,
    fibers: 2.5,
    carbohydrates: 8.4,
    proteins: 1.5,
    lipids: 0.1,
    vitamins: {
      C: 10
    }
  }, {
    name: 'Borage',
    quality: 'C',
    type: 'L',
    note: '',
    vitamins: {
      C: 35
    }
  }, {
    name: 'Brocoli',
    type: 'L',
    quality: 'C',
    note: 'May cause excessive bloating.',
    calories: 25,
    water: 90.6,
    fibers: 3,
    carbohydrates: 2.4,
    proteins: 3,
    lipids: 0.4,
    vitamins: {
      C: 110
    }
  }, {
    name: 'Carrot',
    type: 'L',
    quality: 'D',
    note: 'Contains oxalic acid not recommended in cases of obesity (sugars).',
    calories: 33,
    water: 89,
    fibers: 3,
    carbohydrates: 6.7,
    proteins: 0.8,
    lipids: 0.3,
    vitamins: {
      C: 10
    }
  }, {
    name: 'Celery',
    type: 'L',
    quality: 'C',
    note: 'Diuretic. May cause loose stools in some susceptible guinea pigs.',
    calories: 18,
    water: 88,
    fibers: 5,
    carbohydrates: 2.4,
    proteins: 1.5,
    lipids: 0.3,
    vitamins: {
      C: 8
    }
  }, {
    name: 'Cultivated mushroom',
    type: 'L',
    quality: 'D',
    note: '',
    calories: 15,
    water: 91.8,
    fibers: 2,
    carbohydrates: 0.6,
    proteins: 2.7,
    lipids: 0.2,
    vitamins: {
      C: 5
    }
  }, {
    name: 'Chicory',
    quality: 'C',
    type: 'L',
    note: '',
    vitamins: {
      C: 24
    }
  }, {
    name: 'Chinese cabbage',
    quality: 'C',
    vitamins: {
      C: 3.2
    },
    type: 'L',
    note: ''
  }, {
    name: 'Brussels sprouts',
    quality: 'M',
    vitamins: {
      C: 85
    },
    type: 'L',
    note: 'May cause excessive bloating.'
  }, {
    name: 'Cauliflower (without leaf)',
    type: 'L',
    quality: 'M',
    note: 'May cause excessive bloating.',
    calories: 24,
    water: 91,
    fibers: 2.5,
    carbohydrates: 3.5,
    proteins: 2.4,
    lipids: 0,
    vitamins: {
      C: 60
    }
  }, {
    name: 'Kale',
    quality: 'M',
    vitamins: {
      C: 120
    },
    type: 'L',
    note: 'May cause excessive bloating.'
  }, {
    name: 'Green cabbage',
    type: 'L',
    quality: 'M',
    note: 'May cause excessive bloating.',
    calories: 22,
    water: 88,
    fibers: 3.4,
    carbohydrates: 2.8,
    proteins: 2.8,
    lipids: 0,
    vitamins: {
      C: 80
    }
  }, {
    name: 'Chive',
    quality: 'T',
    vitamins: {
      C: 0
    },
    type: 'L',
    note: ''
  }, {
    name: 'Cucumber',
    type: 'L',
    quality: 'C',
    note: 'Rich in water. Recommended for guinea pigs who drink little or have urinary problems.',
    calories: 10,
    water: 96.3,
    fibers: 0.9,
    carbohydrates: 1.8,
    proteins: 0.6,
    lipids: 0.1,
    vitamins: {
      C: 8
    }
  }, {
    name: 'Fresh pickle',
    type: 'L',
    quality: '?',
    note: 'Be careful to remove stinging hairs.',
    calories: 13,
    water: 94,
    fibers: 1,
    carbohydrates: 2.2,
    proteins: 0.7,
    lipids: 0.1,
    vitamins: {
      C: 5
    }
  }, {
    name: 'Squash',
    quality: 'M',
    vitamins: {
      C: 9.6
    },
    type: 'L',
    note: 'Slightly sweet.'
  }, {
    name: 'Zucchini',
    type: 'L',
    quality: 'C',
    note: '',
    calories: 15,
    water: 94.5,
    fibers: 1.1,
    carbohydrates: 3,
    proteins: 0.6,
    lipids: 0.1,
    vitamins: {
      C: 7
    }
  }, {
    name: 'Cress',
    type: 'L',
    quality: 'M',
    note: '',
    calories: 17,
    water: 93.1,
    fibers: 2,
    carbohydrates: 2,
    proteins: 1.5,
    lipids: 0.3,
    vitamins: {
      C: 60
    }
  }, {
    name: 'Endive (chicory, chicory)',
    type: 'L',
    quality: 'C',
    note: '2 or 3 leaves, rich in water.',
    calories: 15,
    water: 94,
    fibers: 2.2,
    carbohydrates: 2.4,
    proteins: 1,
    lipids: 0.1,
    vitamins: {
      C: 5
    }
  }, {
    name: 'Spinach',
    type: 'L',
    quality: 'D',
    note: 'May cause loose stools in some susceptible guinea pigs. Very rich in oxalic acid. Risk of promoting urolithiasis problems if they are consumed in excess, even for healthy guinea pigs. Not recommended in guinea pigs with urinary problems.',
    calories: 18,
    water: 91.7,
    fibers: 2.7,
    carbohydrates: 1.3,
    proteins: 2.7,
    lipids: 0.3,
    vitamins: {
      C: 50
    }
  }, {
    name: 'Beet tops',
    quality: 'P',
    vitamins: {
      C: 0
    },
    type: 'L',
    note: 'Very rich in oxalic acid.'
  }, {
    name: 'Carrot tops',
    quality: 'C',
    vitamins: {
      C: 0
    },
    type: 'L',
    note: 'Can be given daily.'
  }, {
    name: 'Fennel leaves',
    quality: 'C',
    vitamins: {
      C: 0
    },
    type: 'L',
    note: 'Can be given daily.'
  }, {
    name: 'Turnip Fanes',
    quality: 'P',
    vitamins: {
      C: 0
    },
    type: 'L',
    note: 'Very rich in calcium.'
  }, {
    name: 'Radish tops',
    quality: 'C',
    vitamins: {
      C: 0
    },
    type: 'L',
    note: 'Diuretic. May cause loose stools in some susceptible guinea pigs.'
  }, {
    name: 'Fennel',
    type: 'L',
    quality: 'C',
    note: '',
    calories: 25,
    water: 88,
    fibers: 3.3,
    carbohydrates: 2.8,
    proteins: 2.7,
    lipids: 0.3,
    vitamins: {
      C: 52
    }
  }, {
    name: 'Bean',
    type: 'L',
    quality: '?',
    note: '',
    calories: 64,
    water: 82,
    fibers: 6.5,
    carbohydrates: 10,
    proteins: 5.4,
    lipids: 0.3,
    vitamins: {
      C: 28
    }
  }, {
    name: 'Oak Leaf',
    quality: 'M',
    vitamins: {
      C: 0
    },
    type: 'L',
    note: 'Laxative. May be given daily in moderate quantity (2 to 3 leaves). In very moderate quantities the very first times for guinea pigs not used.'
  }, {
    name: 'Curly',
    quality: 'M',
    vitamins: {
      C: 0
    },
    type: 'L',
    note: 'Laxative. May be given daily in moderate quantity (2 to 3 leaves). In very moderate quantities the very first times for guinea pigs not used.'
  }, {
    name: 'Ginger',
    type: 'L',
    quality: '?',
    note: '',
    calories: 60,
    water: 85,
    fibers: 1,
    carbohydrates: 9.8,
    proteins: 1.8,
    lipids: 1.5,
    vitamins: {
      C: null
    }
  }, {
    name: 'Green beans',
    type: 'L',
    quality: 'M',
    note: 'Choose extra expenses. Do not give too much at a time. Rich in oxalic acid: not recommended for guinea pigs with urinary problems.',
    calories: 30,
    water: 90,
    fibers: 3,
    carbohydrates: 4.6,
    proteins: 2.4,
    lipids: 0.2,
    vitamins: {
      C: 16
    }
  }, {
    name: 'Flat coconut beans',
    quality: 'M',
    vitamins: {
      C: 0
    },
    type: 'L',
    note: ''
  }, {
    name: 'Lettuce',
    type: 'L',
    quality: 'P',
    note: 'Too much nitrate!',
    calories: 13,
    water: 94.5,
    fibers: 1,
    carbohydrates: 1.3,
    proteins: 1.2,
    lipids: 0.3,
    vitamins: {
      C: 8
    }
  }, {
    name: 'lamb\'s lettuce',
    quality: 'M',
    vitamins: {
      C: 38.2
    },
    type: 'L',
    note: 'Diuretic. May cause loose stools in some susceptible guinea pigs.'
  }, {
    name: 'Corn',
    type: 'L',
    quality: '?',
    note: '',
    calories: 96,
    water: 73,
    fibers: 4,
    carbohydrates: 18,
    proteins: 3.3,
    lipids: 1.2,
    vitamins: {
      C: 10
    }
  }, {
    name: 'Mesclun',
    quality: 'D',
    vitamins: {
      C: 0
    },
    type: 'L',
    note: ''
  }, {
    name: 'Turnip',
    type: 'L',
    quality: 'M',
    note: 'In moderate quantities because can cause bloating.',
    calories: 18,
    water: 93,
    fibers: 2,
    carbohydrates: 3.2,
    proteins: 0.9,
    lipids: 0.2,
    vitamins: {
      C: 20
    }
  }, {
    name: 'Onion',
    type: 'L',
    quality: 'T',
    note: '',
    calories: 34,
    water: 89,
    fibers: 2.1,
    carbohydrates: 7.1,
    proteins: 1.3,
    lipids: 0.2,
    vitamins: {
      C: 7
    }
  }, {
    name: 'Parsnip',
    quality: 'C',
    vitamins: {
      C: 17
    },
    type: 'L',
    note: ''
  }, {
    name: 'Pea',
    type: 'L',
    quality: 'M',
    note: '',
    calories: 80,
    water: 74,
    fibers: 6,
    carbohydrates: 12.3,
    proteins: 6,
    lipids: 0.7,
    vitamins: {
      C: 32
    }
  }, {
    name: 'Leek',
    type: 'L',
    quality: 'T',
    note: '',
    calories: 27,
    water: 90.5,
    fibers: 3.5,
    carbohydrates: 4,
    proteins: 2,
    lipids: 0.3,
    vitamins: {
      C: 18
    }
  }, {
    name: 'Pepper (red, yellow, green)',
    type: 'L',
    quality: 'C',
    note: 'Can be given daily. Red pepper contains much more Vitamin A C than yellow or green.',
    calories: 21,
    water: 91,
    fibers: 2,
    carbohydrates: 3.5,
    proteins: 1.1,
    lipids: 0.3,
    vitamins: {
      C: 126
    }
  }, {
    name: 'Potato',
    type: 'L',
    quality: 'T',
    note: '',
    calories: 85,
    water: 77,
    fibers: 2.1,
    carbohydrates: 19,
    proteins: 2,
    lipids: 0.1,
    vitamins: {
      C: 15
    }
  }, {
    name: 'Pumpkin',
    type: 'L',
    quality: 'M',
    note: 'Slightly sweet.',
    calories: 20,
    water: 92.8,
    fibers: 1.3,
    carbohydrates: 4.1,
    proteins: 0.8,
    lipids: 0.1,
    vitamins: {
      C: 7
    }
  }, {
    name: 'Purslane',
    type: 'L',
    quality: 'C',
    note: '',
    calories: 18,
    water: 93.2,
    fibers: 0.9,
    carbohydrates: 3,
    proteins: 1.4,
    lipids: 0.2,
    vitamins: {
      C: 22
    }
  }, {
    name: 'Radish',
    type: 'L',
    quality: 'C',
    note: 'We can also give the tops. Can create bloating if given too much.',
    calories: 15,
    water: 94.5,
    fibers: 1.5,
    carbohydrates: 3,
    proteins: 0.6,
    lipids: 0.1,
    vitamins: {
      C: 23
    }
  }, {
    name: 'Black radish',
    quality: 'C',
    vitamins: {
      C: 6.4
    },
    type: 'L',
    note: ''
  }, {
    name: 'Horseradish',
    quality: 'C',
    vitamins: {
      C: 97.3
    },
    type: 'L',
    note: ''
  }, {
    name: 'Rhubarb',
    quality: 'P',
    vitamins: {
      C: 0
    },
    type: 'L',
    note: 'Strong acidity.'
  }, {
    name: 'Romaine lettuce',
    quality: 'M',
    vitamins: {
      C: 5
    },
    type: 'L',
    note: 'Laxative. May be given daily in moderate quantity (2 to 3 leaves). In very moderate quantities the very first times for guinea pigs not used.'
  }, {
    name: 'Rocket salad',
    quality: 'C',
    vitamins: {
      C: 0
    },
    type: 'L',
    note: ''
  }, {
    name: 'Rutabaga',
    quality: 'C',
    vitamins: {
      C: 25
    },
    type: 'L',
    note: 'Give in small quantity.'
  }, {
    name: 'Salsify and scorzonera',
    type: 'L',
    quality: 'C',
    note: '',
    calories: 30,
    water: 79,
    fibers: 4,
    carbohydrates: 5,
    proteins: 1.4,
    lipids: 0.4,
    vitamins: {
      C: 4
    }
  }, {
    name: 'Escarole',
    quality: 'M',
    vitamins: {
      C: 0
    },
    type: 'L',
    note: 'Laxative. May be given daily in moderate quantity (2 to 3 leaves). In very moderate quantities the very first times for guinea pigs not used.'
  }, {
    name: 'Tomato',
    quality: 'C',
    vitamins: {
      C: 13.7
    },
    type: 'L',
    note: 'Rich in water, but can cause diarrhea.'
  }, {
    name: 'Cherry tomato',
    quality: 'C',
    vitamins: {
      C: 18.4
    },
    type: 'L',
    note: 'Rich in water, but can cause diarrhea.'
  }, {
    name: 'Jerusalem artichoke',
    type: 'L',
    quality: 'C',
    note: 'Rich in water and low in calcium and phosphorus.',
    calories: 31,
    water: 79,
    fibers: 7.6,
    carbohydrates: 4.5,
    proteins: 2.4,
    lipids: 0.4,
    vitamins: {
      C: 4
    }
  }
]

export default [].concat(AROMATIC_HERBS).concat(GREENERY).concat(FRUITS).concat(VEGETABLES)
