// remove phantom membrane drop to hide mob in JEI
LootJS.lootTables(event => {
    event.getLootTable("minecraft:entities/phantom").firstPool().removeItem("minecraft:phantom_membrane")
})
