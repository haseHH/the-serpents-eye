/*
 * https://kubejs.com/wiki/tutorials/recipes
 * ServerEvents.recipes(callback) is a function that accepts another function,
 * called the "callback", as a parameter. The callback gets run when the
 * server is working on recipes, and then we can make our own changes.
 * When the callback runs, it is also known as the event "firing".
*/

// Listen for the "recipes" server event.
ServerEvents.recipes(event => {
  // more phantom membrane, analog to Miner's Delight bat wing cutting
  event.recipes.farmersdelight.cutting(
    'ars_nouveau:wilden_wing',
    '#c:tools/knife', // tool
    [ // results
      "minecraft:phantom_membrane",
      ChanceResult.of("2x minecraft:phantom_membrane", 0.5)
    ],
    // '' // sound
  ).id('kubejs:phantom_membrane_from_wilden_wing')

  // interchangable ropes
  event.shapeless(
    Item.of('supplementaries:rope', 1), // arg 1: output
    [
      'farmersdelight:rope' // arg 2: the array of inputs
    ]
  ).id('kubejs:interchangable_rope_farmersdelight_to_supplementaries')
  event.shapeless(
    Item.of('farmersdelight:rope', 1), // arg 1: output
    [
      'supplementaries:rope' // arg 2: the array of inputs
    ]
  ).id('kubejs:interchangable_rope_supplementaries_to_farmersdelight')

  // new Name Tag crafting while Vanilla Backport doesn't have it yet
  event.shapeless(
    Item.of('minecraft:name_tag', 1), // arg 1: output
    [
      'minecraft:paper', // arg 2: the array of inputs
      '#c:nuggets'
    ]
  ).id('kubejs:name_tag')

  // Nether Star from Shards
  event.shaped(
    Item.of('minecraft:nether_star'), // arg 1: output
    [
      ' A ',
      'A A', // arg 2: the shape (array of strings)
      ' A '
    ],
    {
      A: 'kubejs:nether_star_shard'  //arg 3: the mapping object
    }
  ).id('kubejs:nether_star_from_shards')

  // remove redundant cake recipes
  // keep farmersdelight:cake_from_milk_bottle
  event.remove({ id: 'minecraft:cake' })
  event.remove({ id: 'vanillabackport:cake' })

  // remove old Lodestone recipe
  event.remove({ id: 'minecraft:lodestone' })

  // remove Nature's Compass repair recipe
  // we don't have its durability feature on so it's not helpful
  event.remove({ id: 'naturescompass:repair_natures_compass' })
})
