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

// Nether Star Shards from Wither
LootJS.modifiers((event) => {
    onlyDrygmy(event, 'minecraft:wither').addLoot(LootEntry.of('kubejs:nether_star_shard').randomChance(0.15));
});

// Gold Nuggets from Starbuncles
// LootJS.modifiers((event) => {
//     onlyDrygmy(event, 'ars_nouveau:starbuncle').addLoot('minecraft:gold_nugget');
// });
