ServerEvents.recipes(event => {
  // revert Kaleidoscope Tavern bottles to vanilla ones at will
  event.shapeless(
    Item.of('minecraft:glass_bottle', 1), // arg 1: output
    [
      'kaleidoscope_tavern:empty_bottle' // arg 2: the array of inputs
    ]
  )

  // Kaleidoscope Tavern watermelon juice into Farmer's Delight melon juice
  event.shapeless(
    Item.of('farmersdelight:melon_juice', 1), // arg 1: output
    [
      'kaleidoscope_tavern:watermelon_juice', // arg 2: the array of inputs
      'minecraft:sugar'
    ]
  )
})
