/// range(5) -> [0, 1, 2, 3, 4]
const range = n => [...Array(n).keys()]

export const genSystem = ({
  inicio = '',
  variables = [],
  constantes = [],
  reglas = {},
}) => n =>
  range(n+1)
    .reduce(
      (acc, actu, index, arr) => [
        ...acc,
        acc[index]
          .split('')
          .map(e => (constantes.indexOf(e) === -1) ? reglas[e] : e)
          .join('')
      ],
      [inicio]
    )[n]

const genDrawer = ({turtle, angle, length, descriptor}) =>
  Object
    .keys(descriptor)
    .map(e => () =>
      turtle[descriptor[e]](
        descriptor[e] == 'rt' || descriptor[e] == 'lt'
          ? angle
          : length
      )
    )
    .reduce(
      (acc, actu, index, arr) => ({
        ...acc,
        [Object.keys(descriptor)[index]]: actu,
      }),
      {}
    )


const drawSystem = ({sys, n, ...rest}) => {
  const drawer = genDrawer(rest)
  sys(n)
    .split('')
    .forEach(e =>
      (drawer[e] || (()=>{}))()
    )
}

export const genSystemDrawer = ({
  descriptor,
  sys,
  angle,
}) => turtle => iterStuff => {
  drawSystem({
    sys,
    turtle,
    descriptor,
    angle,
    ...iterStuff
  })
}