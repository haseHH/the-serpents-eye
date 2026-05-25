ServerEvents.recipes(event => {
  // The default recipe for recoloring block/items as a function
  const dyeEight = (input, color, output, recipeId) => {
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

  const biomesoplentySandColors = [
    'white',
    'orange',
    'black'
  ]

  // Finding the colored sand variants is hard, some of them just don't seem to generate
  // So we clean and dye vanilla sand now I guess ¯\_(ツ)_/¯
  event.shapeless(
    'minecraft:sand',
    [
      Ingredient.of('minecraft:red_sand')
        .or('biomesoplenty:white_sand')
        .or('biomesoplenty:orange_sand')
        .or('biomesoplenty:black_sand'),
      'supplementaries:soap'
    ]
  ).id('kubejs:soap_clean_sand')
  dyeEight('minecraft:sand', 'red', 'minecraft:red_sand')
  biomesoplentySandColors.forEach(color => {
    dyeEight('minecraft:sand', color, `biomesoplenty:${color}_sand`)
  })

  // Ars Nouveau's Crush Glyph allows crushing of Sandstone into Sand and Terracotta into Red Sand
  // Let's expand on that too, adjusting the Terracotta colors in the process to match our dyed sand

  // Sand
  event.recipes.ars_nouveau.crush(
    'minecraft:terracotta',
    [{ stack: Item.of('minecraft:sand'), chance: 1.0 }]
  ).id('kubejs:crush_terracotta_into_sand')

  // Red Sand
  event.remove({ id: 'ars_nouveau:terracotta' })
  event.recipes.ars_nouveau.crush(
    'minecraft:red_terracotta',
    [{ stack: Item.of('minecraft:red_sand'), chance: 1.0 }]
  ).id('kubejs:crush_red_terracotta_into_red_sand')
  event.recipes.ars_nouveau.crush(
    'minecraft:red_sandstone',
    [{ stack: Item.of('minecraft:red_sand'), chance: 1.0 }]
  ).id('kubejs:crush_red_sandstone_into_red_sand')

  // Biomes O' Plenty Sands
  biomesoplentySandColors.forEach(color => {
    event.recipes.ars_nouveau.crush(
      `minecraft:${color}_terracotta`,
      [{ stack: Item.of(`biomesoplenty:${color}_sand`), chance: 1.0 }]
    ).id(`kubejs:crush_${color}_terracotta_into_${color}_sand`)
    event.recipes.ars_nouveau.crush(
      `biomesoplenty:${color}_sandstone`,
      [{ stack: Item.of(`biomesoplenty:${color}_sand`), chance: 1.0 }]
    ).id(`kubejs:crush_${color}_sandstone_into_${color}_sand`)
  })
})
