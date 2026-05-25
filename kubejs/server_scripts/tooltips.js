ItemEvents.modifyTooltips(event => {
  // Add hints on obtainability
  event.add('kaleidoscope_tavern:watermelon_juice', [
    Text.gray('Straight from the tap(ped watermelon)')
  ])
  event.add('kaleidoscope_tavern:molotov', [
    Text.gray('Can be brewed or tapped from'),
    Text.gray('a lava-filled cauldron')
  ])
  event.add('minecraft:honey_bottle', [
    Text.gray('Using a tap on the hive probably'),
    Text.gray('saves you the sticky fingers')
  ])
  event.add('minecraft:dragon_breath', [
    Text.gray('Scooping it up is so tedious... Maybe'),
    Text.gray('you can tap it right from the head?')
  ])
  event.add('kaleidoscope_tavern:grape', [
    Text.gray('Grown from a grapevine planted on a'),
    Text.gray('trellis standing on any Dirt variant')
  ])
  event.add('kaleidoscope_tavern:ice_grape', [
    Text.gray('Grown from a grapevine planted on a'),
    Text.gray('trellis standing on Ice or Snow Blocks')
  ])
  event.add('kaleidoscope_tavern:gold_grape', [
    Text.gray('Grown from a grapevine planted on a'),
    Text.gray('trellis standing on Netherrack or Magma')
  ])
  event.add('kaleidoscope_tavern:green_grape', [
    Text.gray('Can sometimes be found when'),
    Text.gray('harvesting any other grape type')
  ])
})
