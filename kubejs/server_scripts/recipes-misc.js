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
  )

  // Enchanted Golden Apple
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "minecraft:gold_block",
      "minecraft:gold_block",
      "minecraft:gold_block",
      "minecraft:gold_block",
      "ars_nouveau:source_gem_block",
      "ars_nouveau:source_gem_block",
      "ars_nouveau:source_gem_block",
      "ars_nouveau:source_gem_block",
    ], // input items
    "minecraft:golden_apple", // reagent
    "minecraft:enchanted_golden_apple", // output
    5000, // source cost
    // true // keep nbt of reagent, think like a smithing recipe
  );

  // interchangable ropes
  event.shapeless(
    Item.of('supplementaries:rope', 1), // arg 1: output
    [
      'farmersdelight:rope' // arg 2: the array of inputs
    ]
  )
  event.shapeless(
    Item.of('farmersdelight:rope', 1), // arg 1: output
    [
      'supplementaries:rope' // arg 2: the array of inputs
    ]
  )

  // new Name Tag crafting while Vanilla Backport doesn't have it yet
  event.shapeless(
    Item.of('minecraft:name_tag', 1), // arg 1: output
    [
      'minecraft:paper', // arg 2: the array of inputs
      'minecraft:iron_nugget'
    ]
  )

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
  )

  // remove redundant cake recipes
  // keep farmersdelight:cake_from_milk_bottle
  event.remove({ id: 'minecraft:cake' })
  event.remove({ id: 'vanillabackport:cake' })

  // remove old Lodestone recipe
  event.remove({ id: 'minecraft:lodestone' })
})
