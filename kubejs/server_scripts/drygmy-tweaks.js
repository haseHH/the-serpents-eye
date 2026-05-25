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
ItemEvents.modifyTooltips(event => {
  event.add('minecraft:honeycomb', [
    Text.gray('Drygmys are known to obtain'),
    Text.gray('these from bees directly')
  ])
})

// Nether Star Shards from Wither
LootJS.modifiers((event) => {
  onlyDrygmy(event, 'minecraft:wither').addLoot(LootEntry.of('kubejs:nether_star_shard').randomChance(0.15));
});
ItemEvents.modifyTooltips(event => {
  event.add('kubejs:nether_star_shard', [
    Text.gray('If you can manage to introduce a Drygmy'),
    Text.gray('to a Wither in a safe manner, they might'),
    Text.gray('reward you with these shards')
  ])
})

// Blood Sacs from Crimson Mosquitos
LootJS.modifiers((event) => {
  onlyDrygmy(event, 'alexsmobs:crimson_mosquito').addLoot(LootEntry.of('alexsmobs:blood_sac').randomChance(0.05));
});
ItemEvents.modifyTooltips(event => {
  event.add('alexsmobs:blood_sac', [
    Text.gray('Drygmys are also able to'),
    Text.gray('extract these sacs')
  ])
})
