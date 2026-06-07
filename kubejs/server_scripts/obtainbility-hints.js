// Add hints on obtainability
RecipeViewerEvents.addInformation('item', event => {
  event.add('kaleidoscope_tavern:watermelon_juice', [
    'Straight from the tap(ped watermelon)'
  ])
  event.add('kaleidoscope_tavern:molotov', [
    'Can be brewed or tapped from a lava-filled cauldron'
  ])
  event.add('minecraft:honey_bottle', [
    'Using a tap on the hive probably saves you the sticky fingers'
  ])
  event.add('minecraft:dragon_breath', [
    'Scooping it up is so tedious... Maybe you can tap it right from the head?'
  ])
  event.add('kaleidoscope_tavern:grape', [
    'Grown from a grapevine planted on a trellis standing on any Dirt variant'
  ])
  event.add('kaleidoscope_tavern:ice_grape', [
    'Grown from a grapevine planted on a trellis standing on Ice or Snow Blocks'
  ])
  event.add('kaleidoscope_tavern:gold_grape', [
    'Grown from a grapevine planted on a trellis standing on Netherrack or Magma'
  ])
  event.add('kaleidoscope_tavern:green_grape', [
    'Can sometimes be found when harvesting any other grape type'
  ])
})
