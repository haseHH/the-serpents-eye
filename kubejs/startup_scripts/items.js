// https://kubejs.com/wiki/tutorials/item-registry

StartupEvents.registry('item', event => {
  // The texture for this item is kubejs/assets/kubejs/textures/item/nether_star_shard.png
  event.create('nether_star_shard')
    .rarity('uncommon')
    .displayName('Nether Star Shard')
    .tooltip('If you can manage to introduce a Drygmy')
    .tooltip('to a Wither in a safe manner, they might')
    .tooltip('reward you with these shards')
})
