const { genSystemDrawer, genSystem } = require('../')
const Turtle = require('@sebassdc/turtlejs')

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const bob = new Turtle(ctx)

const standartDescriptor =  {
  'F': 'fd',
  '+': 'rt',
  '-': 'lt'
}

const kotchCurve90 = genSystemDrawer({
  angle: 90,
  sys: genSystem({
    inicio: 'F++F++F',
    variables: ['F'],
    constantes: ['+', '-'],
    reglas: {
      'F': 'F-F+F+F-F',
    },
  }),
  descriptor: standartDescriptor,
})
const kotchCurve60 = genSystemDrawer({
  angle: 60,
  sys: genSystem({
    variables: ['F'],
    constantes: ['+', '-'],
    reglas: {
      'F': 'F+F--F+F',
    },
    inicio: 'F'
  }),
  descriptor: standartDescriptor
})
const curve32Seg = genSystemDrawer({
  angle: 90,
  sys: genSystem({
    variables: ['F'],
    constantes: ['+', '-'],
    reglas: {
      'F': '-F+F-F-F+F+FF-F+F+FF+F-F-FF+FF-FF+F+F-FF-F-F+FF-F-F+F+F-F+'
    },
    inicio: 'F',
  }),
  descriptor: standartDescriptor,
})
const hilbertCurve = genSystemDrawer({
  angle: 90,
  sys: genSystem({
    variables: ['L', 'R'],
    constantes: ['+', '-', 'F'],
    reglas: {
      'L': '+RF-LFL-FR+',
      'R': '-LF+RFR+FL-'
    },
    inicio: 'L',
  }),
  descriptor: standartDescriptor,
})
const sierpinskiTriangle = genSystemDrawer({
  angle: 120,
  sys: genSystem({
    variables: ['F', 'G'],
    constantes: ['+', '-'],
    inicio: 'F-G-G',
    reglas: {
      'F': 'F-G+F+G-F',
      'G': 'GG'
    },
  }),
  descriptor: {
    'F': 'fd',
    'G': 'fd',
    '+': 'lt',
    '-': 'rt',
  },
})
const sierpinskiCurve = genSystemDrawer({
  angle: 60,
  sys: genSystem({
    variables: ['A', 'B'],
    constantes: ['+', '-'],
    inicio: 'A',
    reglas: {
      'A': 'B-A-B',
      'B': 'A+B+A'
    },
  }),
  descriptor: {
    'A': 'fd',
    'B': 'fd',
    '+': 'lt',
    '-': 'rt',
  },
})
const dragonCurve = genSystemDrawer({
  sys: genSystem({
    inicio: 'FX',
    variables: ['X', 'Y'],
    constantes: ['F', '+', '-'],
    reglas: {
      'X': 'X+YF+',
      'Y': '-FX-Y',
    }
  }),
  angle: 90,
  descriptor: standartDescriptor,
})

const peanoGosperCurve = genSystemDrawer({
  sys: genSystem({
    inicio: 'X',
    variables: ['X', 'Y'],
    constantes: ['F', '+', '-'],
    reglas: {
      'X': 'X+YF++YF-FX--FXFX-YF+',
      'Y': '-FX+YFYF++YF+FX--FX-Y',
    }
  }),
  angle: 60,
  descriptor: standartDescriptor,
})
const peanoCurve = genSystemDrawer({
  sys: genSystem({
    inicio: 'F',
    variables: ['F'],
    constantes: ['+', '-'],
    reglas: {
      'F': 'F+F-F-F-F+F+F+F-F',
    }
  }),
  angle: 90,
  descriptor: standartDescriptor,
})
const quadraticKochIsland = genSystemDrawer({
  sys: genSystem({
    inicio: 'F-F-F-F',
    variables: ['F'],
    constantes: ['+', '-'],
    reglas: {
      'F': 'F-F+F+FFF-F-F+F',
    }
  }),
  angle: 90,
  descriptor: standartDescriptor,
})
const squareCurve = genSystemDrawer({
  sys: genSystem({
    inicio: 'F+XF+F+XF',
    variables: ['X'],
    constantes: ['+', '-', 'F'],
    reglas: {
      'X': 'XF-F+F-XF+F+XF-F+F-X',
    }
  }),
  angle: 90,
  descriptor: standartDescriptor,
})

bob.goto(-250, -250)
bob.rt(90)

sierpinskiCurve(bob)({
  n: 10,
  length: 3
})