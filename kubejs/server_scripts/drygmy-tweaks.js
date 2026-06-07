// https://ars.guide/kubejs/tweaks/drygmy/

// Allow Iron Golem farming
ServerEvents.tags("entity_type", (event) => {
  event.remove("ars_nouveau:drygmy_blacklist", ["minecraft:iron_golem"]);
});

// Function for extra Drygmy loot options
const DRYGMY_UUID = '7400926d-1007-4e53-880f-b43e67f2bf29';
function onlyDrygmy(event, entity) {
  return event.addEntityModifier(entity).matchAttackerCustom((attacker) => attacker.uuid.toString() == DRYGMY_UUID);
}

// Honeycomb from Bees
LootJS.modifiers((event) => {
  onlyDrygmy(event, 'minecraft:bee').addLoot(LootEntry.of('minecraft:honeycomb').randomChance(0.5));
});
RecipeViewerEvents.addInformation('item', event => {
  event.add('minecraft:honeycomb', [
    'Drygmys are known to obtain these from bees directly'
  ])
})

// Nether Star Shards from Wither
LootJS.modifiers((event) => {
  onlyDrygmy(event, 'minecraft:wither').addLoot(LootEntry.of('kubejs:nether_star_shard').randomChance(0.15));
});
RecipeViewerEvents.addInformation('item', event => {
  event.add('kubejs:nether_star_shard', [
    'If you can manage to introduce a Drygmy to a Wither in a safe manner, they might reward you with these shards'
  ])
})

// Blood Sacs from Crimson Mosquitos
LootJS.modifiers((event) => {
  onlyDrygmy(event, 'alexsmobs:crimson_mosquito').addLoot(LootEntry.of('alexsmobs:blood_sac').randomChance(0.05));
});
RecipeViewerEvents.addInformation('item', event => {
	event.add('alexsmobs:blood_sac', [
		'Crimson Mosquitos may drop these when slain while they\'re full of blood.',
    ' ',
    'Drygmys are also able to extract these sacs.'
	])
})
