ServerEvents.recipes(event => {
  const colors = [
    'light_gray',
    'gray',
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'lime',
    'green',
    'cyan',
    'light_blue',
    'blue',
    'purple',
    'magenta',
    'pink',
  ]

  // The default recipe for recoloring block/items as a function
  const dyeEight = (input, color, output) => {
    event.shaped(
      Item.of(output, 8),
      [
        'III',
        'IDI',
        'III'
      ],
      {
        I: input,
        D: `minecraft:${color}_dye`
      }
    ).id(`kubejs:dye_${input.replace(':', '_')}_${color}`)
  }

  // Supplementaries' soap allows to wash the color off of concrete powder, giving white powder
  // I think it should allow re-coloring the white powder too
  colors.forEach(color => {
    dyeEight('minecraft:white_concrete_powder', color, `minecraft:${color}_concrete_powder`)
  })

  // Cleaning the color off of cured concrete feels wrong though.
  event.remove({ id: 'supplementaries:/soap_clean_minecraft_concrete' })
})
