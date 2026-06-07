// Custom placeable food for our tavern theme
// Because Helia likes both sunflowers and roasted seeds

// Block and item are in: ../startup_scripts/sunflower-seeds.js

// Roast the seeds from sunflower items
ServerEvents.recipes(event => {
  event.recipes.farmersdelight.cooking(
    "misc", // recipe book tab - valid values: meals, drinks, misc
    ['minecraft:sunflower'], // ingredients
    'kubejs:sunflower_seeds', // output
      0.5, // exp
      200, // cookTime, 20t/s, 10s
    'minecraft:bowl'// container
  ).id('kubejs:roasting_sunflower_seeds')
});
