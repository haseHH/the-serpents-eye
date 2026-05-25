ServerEvents.recipes(event => {
  // Enchanted Golden Apple
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      'minecraft:gold_block',
      'minecraft:gold_block',
      'minecraft:gold_block',
      'minecraft:gold_block',
      'ars_nouveau:source_gem_block',
      'ars_nouveau:source_gem_block',
      'ars_nouveau:source_gem_block',
      'ars_nouveau:source_gem_block'
    ], // input items
    'minecraft:golden_apple', // reagent
    'minecraft:enchanted_golden_apple', // output
    5000, // source cost
    // true // keep nbt of reagent, think like a smithing recipe
  ).id('kubejs:enchanted_golden_apple')

  // Codex entries
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      'ars_nouveau:abjuration_essence',
      'ars_nouveau:conjuration_essence',
      'ars_nouveau:manipulation_essence',
      'supplementaries:antique_ink',
    ],
    'ars_nouveau:blank_parchment',
    'ars_additions:codex_entry',
    1000
  ).id('kubejs:tier_one_codex_entry')
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      'ars_nouveau:abjuration_essence',
      'ars_nouveau:conjuration_essence',
      'ars_nouveau:manipulation_essence',
      'supplementaries:antique_ink',
    ],
    'ars_additions:codex_entry',
    'ars_additions:lost_codex_entry',
    2500
  ).id('kubejs:tier_two_codex_entry')
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      'ars_nouveau:abjuration_essence',
      'ars_nouveau:conjuration_essence',
      'ars_nouveau:manipulation_essence',
      'supplementaries:antique_ink',
    ],
    'ars_additions:lost_codex_entry',
    'ars_additions:ancient_codex_entry',
    5000
  ).id('kubejs:tier_three_codex_entry')
})
