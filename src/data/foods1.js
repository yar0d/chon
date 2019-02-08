/*
** https://fr.wikipedia.org/wiki/Composition_nutritionnelle_des_aliments
**
** type:
**   VG = vegetable
**   FR = fruit
**   HA = Aromatic herb
**   GR = Greenery
**
** quality:
**   VA = Very advisable
**   AD = Advisable
**   NR = Not recommended
**   WM = With moderation
**   TF = To forbid
**   TX = Toxic !
**   ? = Not tested
**
** For 100 gr of product :
**   Calories in kcal
**   Water in g
**   Fibers in g
**   Carbohydrates in g
**   Protein in g
**   Lipids in g
**   Vitamins in mg
*/

const FRUITS = [
  {
    name: 'Apricot',
    quality: 'AD',
    vitamins: {
      C: 10
    },
    type: 'FR',
    note: ''
  }, {
    name: 'Pineapple',
    quality: 'AD',
    vitamins: {
      C: 47.8
    },
    type: 'FR',
    note: ''
  }, {
    name: 'Banana',
    quality: 'AD',
    vitamins: {
      C: 8.7
    },
    type: 'FR',
    note: 'A section of 2 cm. Avoid in case of obesity.'
  }, {
    name: 'Cranberry',
    quality: 'AD',
    vitamins: {
      C: 13.3
    },
    type: 'FR',
    note: ''
  }, {
    name: 'Cherry',
    quality: 'WM',
    vitamins: {
      C: 10
    },
    type: 'FR',
    note: 'Very sweet.'
  }, {
    name: 'Clementine',
    quality: 'AD',
    vitamins: {
      C: 48.8
    },
    type: 'FR',
    note: ''
  }, {
    name: 'Quince',
    quality: 'AD',
    vitamins: {
      C: 15
    },
    type: 'FR',
    note: ''
  }, {
    name: 'Date',
    quality: 'NR',
    vitamins: {
      C: 1.5
    },
    type: 'FR',
    note: 'Rich in oxalic acid.'
  }, {
    name: 'Figs',
    quality: 'TF',
    vitamins: {
      C: 2
    },
    type: 'FR',
    note: 'Rich in oxalic acid.'
  }, {
    name: 'Strawberry',
    quality: 'AD',
    vitamins: {
      C: 67
    },
    type: 'FR',
    note: ''
  }, {
    name: 'Raspberry',
    quality: 'AD',
    vitamins: {
      C: 26.2
    },
    type: 'FR',
    note: ''
  }, {
    name: 'Passion fruit',
    quality: 'AD',
    vitamins: {
      C: 30
    },
    type: 'FR',
    note: 'Avoid in guinea pigs suffering from obesity.'
  }, {
    name: 'Guava',
    quality: 'WM',
    vitamins: {
      C: 228.3
    },
    type: 'FR',
    note: 'Avoid in guinea pigs suffering from obesity.'
  }, {
    name: 'Currant',
    quality: 'WM',
    vitamins: {
      C: 41
    },
    type: 'FR',
    note: 'Sweet.'
  }, {
    name: 'Khaki',
    quality: 'WM',
    vitamins: {
      C: 66
    },
    type: 'FR',
    note: 'Sweet.'
  }, {
    name: 'Kiwi',
    quality: 'AD',
    vitamins: {
      C: 92.7
    },
    type: 'FR',
    note: 'Diuretic. May cause loose stools in some susceptible guinea pigs.'
  }, {
    name: 'Litchi',
    quality: 'WM',
    vitamins: {
      C: 71.5
    },
    type: 'FR',
    note: 'Avoid in guinea pigs suffering from obesity.'
  }, {
    name: 'Mandarin',
    quality: 'WM',
    vitamins: {
      C: 26.7
    },
    type: 'FR',
    note: 'Sweet.'
  }, {
    name: 'Mango',
    quality: 'WM',
    vitamins: {
      C: 36.4
    },
    type: 'FR',
    note: 'Sweet.'
  }, {
    name: 'Melon',
    quality: 'WM',
    vitamins: {
      C: 36.7
    },
    type: 'FR',
    note: 'Avoid in guinea pigs with urinary problems.'
  }, {
    name: 'Green / yellow melon',
    quality: 'AD',
    vitamins: {
      C: 36.7
    },
    type: 'FR',
    note: 'Sweet.'
  }, {
    name: 'Blueberries',
    quality: 'WM',
    vitamins: {
      C: 20
    },
    type: 'FR',
    note: 'Sweet and acidic.'
  }, {
    name: 'Nectarine',
    quality: 'WM',
    vitamins: {
      C: 5.4
    },
    type: 'FR',
    note: 'Sweet.'
  }, {
    name: 'Coconut',
    quality: 'WM',
    vitamins: {
      C: 3.3
    },
    type: 'FR',
    note: 'Rich in vitamin D.'
  }, {
    name: 'Orange',
    quality: 'WM',
    vitamins: {
      C: 53.2
    },
    type: 'FR',
    note: ''
  }, {
    name: 'Grapefruit',
    quality: 'WM',
    vitamins: {
      C: 42
    },
    type: 'FR',
    note: ''
  }, {
    name: 'Watermelon',
    quality: 'NR',
    vitamins: {
      C: 8.1
    },
    type: 'FR',
    note: 'Not recommended for all the same guinea pigs in good health. Very disadvised in guinea pigs suffering from urinary problems because too rich in calcium.'
  }, {
    name: 'Perry',
    quality: 'WM',
    vitamins: {
      C: 4.3
    },
    type: 'FR',
    note: 'May cause bloating in some guinea pigs.'
  }, {
    name: 'Pomelo',
    quality: 'WM',
    vitamins: {
      C: 40.9
    },
    type: 'FR',
    note: 'Sweet and acidic.'
  }, {
    name: 'Apple',
    quality: 'WM',
    vitamins: {
      C: 4.6
    },
    type: 'FR',
    note: 'Moderately to avoid obesity. Some guinea pigs are allergic to pectin in the skin. To peel.'
  }, {
    name: 'Prune',
    quality: 'NR',
    vitamins: {
      C: 0.6
    },
    type: 'FR',
    note: 'Risk of diarrhea.'
  }, {
    name: 'Grapes',
    quality: 'WM',
    vitamins: {
      C: 4
    },
    type: 'FR',
    note: 'To moderate because very rich in sugar and can favor obesity.'
  }
]

const AROMATIC_HERBS = [
  {
    name: 'Dill',
    quality: 'WM',
    vitamins: {
      C: 21
    },
    type: 'HA',
    note: ''
  }, {
    name: 'Angelic',
    quality: 'AD',
    vitamins: {
      C: 0
    },
    type: 'HA',
    note: ''
  }, {
    name: 'Basil',
    quality: 'WM',
    vitamins: {
      C: 18
    },
    type: 'HA',
    note: ''
  }, {
    name: 'Chervil',
    quality: 'NR',
    vitamins: {
      C: 50
    },
    type: 'HA',
    note: ''
  }, {
    name: 'Coriander',
    quality: 'AD',
    vitamins: {
      C: 27
    },
    type: 'HA',
    note: ''
  }, {
    name: 'Tarragon',
    quality: 'WM',
    vitamins: {
      C: 50
    },
    type: 'HA',
    note: 'Rich in oxalic acid.'
  }, {
    name: 'Aromatic fennel',
    quality: 'AD',
    vitamins: {
      C: 0
    },
    type: 'HA',
    note: ''
  }, {
    name: 'Mint',
    quality: 'AD',
    vitamins: {
      C: 31.8
    },
    type: 'HA',
    note: ''
  }, {
    name: 'Sorrel',
    quality: 'TF',
    vitamins: {
      C: 48
    },
    type: 'HA',
    note: 'Rich in oxalic acid.'
  }, {
    name: 'Parsley (flat, curly)',
    type: 'HA',
    quality: 'AD',
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
    quality: 'TF',
    vitamins: {
      C: 0
    },
    type: 'HA',
    note: ''
  }, {
    name: 'Sage',
    quality: 'TF',
    vitamins: {
      C: 0
    },
    type: 'HA',
    note: ''
  }, {
    name: 'Thyme',
    quality: 'WM',
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
    quality: 'AD',
    vitamins: {
      C: 0
    },
    type: 'GR',
    note: ''
  }, {
    name: 'Raspberry leaves',
    quality: 'AD',
    vitamins: {
      C: 0
    },
    type: 'GR',
    note: 'Be careful to remove thorns that can injure the walls of the oral cavity.'
  }, {
    name: 'Mulberry leaves',
    quality: 'AD',
    vitamins: {
      C: 0
    },
    type: 'GR',
    note: 'Be careful to remove thorns that can injure the walls of the oral cavity.'
  }, {
    name: 'Hazel leaves',
    quality: 'AD',
    vitamins: {
      C: 0
    },
    type: 'GR',
    note: '2 or 3 leaves per ration.'
  }, {
    name: 'Willow leaves',
    quality: 'AD',
    vitamins: {
      C: 0
    },
    type: 'GR',
    note: ''
  }, {
    name: 'Fresh grass',
    quality: 'VA',
    vitamins: {
      C: 0
    },
    type: 'GR',
    note: ''
  }, {
    name: 'Fresh alfalfa',
    quality: 'NR',
    vitamins: {
      C: 0
    },
    type: 'GR',
    note: 'Too rich in calcium.'
  }, {
    name: 'Nettle',
    quality: 'AD',
    vitamins: {
      C: 0
    },
    type: 'GR',
    note: 'The ortie is rich in making, in calcium, in potassium, in magnesium, even in vitamins A and C. To make it dry for the purpose of stinging proprieties. Diurettique, Antidiarrheic.'
  }, {
    name: 'Dandelion',
    type: 'GR',
    quality: 'AD',
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
    quality: 'WM',
    vitamins: {
      C: 0
    },
    type: 'GR',
    note: 'May cause excessive bloating.'
  }
]

const VEGETABLES = [
  {
    name: 'Garlic',
    type: 'VG',
    quality: 'TX',
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
    type: 'VG',
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
    type: 'VG',
    quality: 'NR',
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
    type: 'VG',
    quality: 'AD',
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
    quality: 'WM',
    type: 'VG',
    note: 'Laxative. May be given daily in moderate quantity (2 to 3 leaves). In very moderate quantities the very first times for guinea pigs not used.',
    vitamins: {
      C: 0
    }
  }, {
    name: 'Bette',
    type: 'VG',
    quality: 'NR',
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
    type: 'VG',
    quality: 'NR',
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
    quality: 'AD',
    type: 'VG',
    note: '',
    vitamins: {
      C: 35
    }
  }, {
    name: 'Brocoli',
    type: 'VG',
    quality: 'AD',
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
    type: 'VG',
    quality: 'NR',
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
    type: 'VG',
    quality: 'AD',
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
    type: 'VG',
    quality: 'NR',
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
    quality: 'AD',
    type: 'VG',
    note: '',
    vitamins: {
      C: 24
    }
  }, {
    name: 'Chinese cabbage',
    quality: 'AD',
    vitamins: {
      C: 3.2
    },
    type: 'VG',
    note: ''
  }, {
    name: 'Brussels sprouts',
    quality: 'WM',
    vitamins: {
      C: 85
    },
    type: 'VG',
    note: 'May cause excessive bloating.'
  }, {
    name: 'Cauliflower (without leaf)',
    type: 'VG',
    quality: 'WM',
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
    quality: 'WM',
    vitamins: {
      C: 120
    },
    type: 'VG',
    note: 'May cause excessive bloating.'
  }, {
    name: 'Green cabbage',
    type: 'VG',
    quality: 'WM',
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
    quality: 'TX',
    vitamins: {
      C: 0
    },
    type: 'VG',
    note: ''
  }, {
    name: 'Cucumber',
    type: 'VG',
    quality: 'AD',
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
    type: 'VG',
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
    quality: 'WM',
    vitamins: {
      C: 9.6
    },
    type: 'VG',
    note: 'Slightly sweet.'
  }, {
    name: 'Zucchini',
    type: 'VG',
    quality: 'AD',
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
    type: 'VG',
    quality: 'WM',
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
    type: 'VG',
    quality: 'AD',
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
    type: 'VG',
    quality: 'NR',
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
    quality: 'TF',
    vitamins: {
      C: 0
    },
    type: 'VG',
    note: 'Very rich in oxalic acid.'
  }, {
    name: 'Carrot tops',
    quality: 'AD',
    vitamins: {
      C: 0
    },
    type: 'VG',
    note: 'Can be given daily.'
  }, {
    name: 'Fennel leaves',
    quality: 'AD',
    vitamins: {
      C: 0
    },
    type: 'VG',
    note: 'Can be given daily.'
  }, {
    name: 'Turnip Fanes',
    quality: 'TF',
    vitamins: {
      C: 0
    },
    type: 'VG',
    note: 'Very rich in calcium.'
  }, {
    name: 'Radish tops',
    quality: 'AD',
    vitamins: {
      C: 0
    },
    type: 'VG',
    note: 'Diuretic. May cause loose stools in some susceptible guinea pigs.'
  }, {
    name: 'Fennel',
    type: 'VG',
    quality: 'AD',
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
    type: 'VG',
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
    quality: 'WM',
    vitamins: {
      C: 0
    },
    type: 'VG',
    note: 'Laxative. May be given daily in moderate quantity (2 to 3 leaves). In very moderate quantities the very first times for guinea pigs not used.'
  }, {
    name: 'Curly',
    quality: 'WM',
    vitamins: {
      C: 0
    },
    type: 'VG',
    note: 'Laxative. May be given daily in moderate quantity (2 to 3 leaves). In very moderate quantities the very first times for guinea pigs not used.'
  }, {
    name: 'Ginger',
    type: 'VG',
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
    type: 'VG',
    quality: 'WM',
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
    quality: 'WM',
    vitamins: {
      C: 0
    },
    type: 'VG',
    note: ''
  }, {
    name: 'Lettuce',
    type: 'VG',
    quality: 'TF',
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
    quality: 'WM',
    vitamins: {
      C: 38.2
    },
    type: 'VG',
    note: 'Diuretic. May cause loose stools in some susceptible guinea pigs.'
  }, {
    name: 'Corn',
    type: 'VG',
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
    quality: 'NR',
    vitamins: {
      C: 0
    },
    type: 'VG',
    note: ''
  }, {
    name: 'Turnip',
    type: 'VG',
    quality: 'WM',
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
    type: 'VG',
    quality: 'TX',
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
    quality: 'AD',
    vitamins: {
      C: 17
    },
    type: 'VG',
    note: ''
  }, {
    name: 'Pea',
    type: 'VG',
    quality: 'WM',
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
    type: 'VG',
    quality: 'TX',
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
    type: 'VG',
    quality: 'AD',
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
    type: 'VG',
    quality: 'TX',
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
    type: 'VG',
    quality: 'WM',
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
    type: 'VG',
    quality: 'AD',
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
    type: 'VG',
    quality: 'AD',
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
    quality: 'AD',
    vitamins: {
      C: 6.4
    },
    type: 'VG',
    note: ''
  }, {
    name: 'Horseradish',
    quality: 'AD',
    vitamins: {
      C: 97.3
    },
    type: 'VG',
    note: ''
  }, {
    name: 'Rhubarb',
    quality: 'TF',
    vitamins: {
      C: 0
    },
    type: 'VG',
    note: 'Strong acidity.'
  }, {
    name: 'Romaine lettuce',
    quality: 'WM',
    vitamins: {
      C: 5
    },
    type: 'VG',
    note: 'Laxative. May be given daily in moderate quantity (2 to 3 leaves). In very moderate quantities the very first times for guinea pigs not used.'
  }, {
    name: 'Rocket salad',
    quality: 'AD',
    vitamins: {
      C: 0
    },
    type: 'VG',
    note: ''
  }, {
    name: 'Rutabaga',
    quality: 'AD',
    vitamins: {
      C: 25
    },
    type: 'VG',
    note: 'Give in small quantity.'
  }, {
    name: 'Salsify and scorzonera',
    type: 'VG',
    quality: 'AD',
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
    quality: 'WM',
    vitamins: {
      C: 0
    },
    type: 'VG',
    note: 'Laxative. May be given daily in moderate quantity (2 to 3 leaves). In very moderate quantities the very first times for guinea pigs not used.'
  }, {
    name: 'Tomato',
    quality: 'AD',
    vitamins: {
      C: 13.7
    },
    type: 'VG',
    note: 'Rich in water, but can cause diarrhea.'
  }, {
    name: 'Cherry tomato',
    quality: 'AD',
    vitamins: {
      C: 18.4
    },
    type: 'VG',
    note: 'Rich in water, but can cause diarrhea.'
  }, {
    name: 'Jerusalem artichoke',
    type: 'VG',
    quality: 'AD',
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
