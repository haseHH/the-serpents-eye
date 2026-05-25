ServerEvents.recipes(event => {
  // revert Kaleidoscope Tavern bottles to vanilla ones at will
  event.shapeless(
    'minecraft:glass_bottle',
    ['kaleidoscope_tavern:empty_bottle']
  ).id('kubejs:empty_bottle_revert')

  // Kaleidoscope Tavern watermelon juice into Farmer's Delight melon juice
  event.shapeless(
    'farmersdelight:melon_juice',
    [
      'kaleidoscope_tavern:watermelon_juice',
      'minecraft:sugar'
    ]
  ).id('kubejs:sweeten_watermelon_juice')
})
