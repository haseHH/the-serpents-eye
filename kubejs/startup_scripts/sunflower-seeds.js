// Custom placeable food for our tavern theme
// Because Helia likes both sunflowers and roasted seeds

// Recipe is in: ../server_scripts/sunflower-seeds.js

// Register block, also auto-creates the item
// https://kubejs.com/wiki/tutorials/block-registry
StartupEvents.registry('block', event => {
  event.create('sunflower_seeds') // Create a new block
    .displayName('Roasted Sunflower Seeds') // Set a custom name
    .soundType('wood') // Set a material (affects the sounds and some properties)
    .hardness(0) // Set hardness (affects mining time)
    .resistance(0) // Set resistance (to explosions, etc)
    .requiresTool(false) // Doesn't require a tool to drop
    .fullBlock(false) // Mark as a non-full block
    .box(1, 0, 1, 15, 4, 15) // Define hitbox
    .tagItem('c:foods') // Add the block's item to the food tag
    .item(item => { // Modify the block's item
      item.food(food => { // Add the food properties to the item
        food.usingConvertsTo('minecraft:bowl')
          .alwaysEdible()
          .nutrition(2)
          .saturation(1.2)
      })
    })
})
