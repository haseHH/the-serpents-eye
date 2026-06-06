// In the unofficial port, the potion recipes were deactivated instead
// of being adapted to the API changes. This rebuilds them.

// The deactivated original recipes in question:
// https://github.com/Raguto/AlexsMobs-1.21.1/blob/master/src/main/java/com/github/alexthe666/alexsmobs/effect/AMEffectRegistry.java#L70

// Utilizes MoreJS because the brewing stand recipes aren't data-driven
// and therefore not accessible via KubeJS' normal recipe event handling:
// https://github.com/AlmostReliable/morejs/wiki/Potion-Brewing

MoreJS.registerPotionBrewing((event) => {
  /*
    'addPotionBrewing' takes an ingredient item, a base *potion effect* and a result *potion effect*
    'addCustomBrewing' allows *any item* as base and result, so I need to build the appropriate potion item string
  */
  function potion(effect) {
    return `minecraft:potion[potion_contents={potion:"${effect}"}]`
  }
                      // ingredient                      base                                  result
  event.addPotionBrewing('alexsmobs:bear_fur',           'minecraft:strength',                 'alexsmobs:knockback_resistance');
  event.addPotionBrewing('minecraft:redstone',           'alexsmobs:knockback_resistance',     'alexsmobs:long_knockback_resistance');
  event.addPotionBrewing('minecraft:glowstone_dust',     'alexsmobs:knockback_resistance',     'alexsmobs:strong_knockback_resistance');
  event.addCustomBrewing('alexsmobs:bone_serpent_tooth', 'alexsmobs:lava_bottle',              potion('alexsmobs:lava_vision'));
  event.addPotionBrewing('minecraft:redstone',           'alexsmobs:lava_vision',              'alexsmobs:long_lava_vision');
  event.addCustomBrewing('alexsmobs:rattlesnake_rattle', potion('minecraft:poison'),           'alexsmobs:poison_bottle');
  event.addCustomBrewing('alexsmobs:centipede_leg',      Ingredient.of('alexsmobs:poison_bottle')
                                                         .or('alexsmobs:komodo_spit_bottle'),  potion('alexsmobs:poison_resistance'));
  event.addPotionBrewing('alexsmobs:komodo_spit',        'alexsmobs:poison_resistance',        'alexsmobs:long_poison_resistance');
  event.addPotionBrewing('alexsmobs:gazelle_horn',       'minecraft:strong_swiftness',         'alexsmobs:speed_iii');
  event.addPotionBrewing('alexsmobs:cockroach_wing',     'minecraft:awkward',                  'alexsmobs:bug_pheromones');
  event.addPotionBrewing('minecraft:redstone',           'alexsmobs:bug_pheromones',           'alexsmobs:long_bug_pheromones');
  event.addPotionBrewing('alexsmobs:soul_heart',         'minecraft:awkward',                  'alexsmobs:soulsteal');
  event.addPotionBrewing('minecraft:redstone',           'alexsmobs:soulsteal',                'alexsmobs:long_soulsteal');
  event.addPotionBrewing('minecraft:glowstone_dust',     'alexsmobs:soulsteal',                'alexsmobs:strong_soulsteal');
  event.addPotionBrewing('alexsmobs:dropbear_claw',      'minecraft:awkward',                  'alexsmobs:clinging');
  event.addPotionBrewing('minecraft:redstone',           'alexsmobs:clinging',                 'alexsmobs:long_clinging');
})
