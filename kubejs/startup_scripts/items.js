// https://kubejs.com/wiki/tutorials/item-registry

StartupEvents.registry('item', event => {
  // The texture for this item is kubejs/assets/kubejs/textures/item/nether_star_shard.png
  event.create('nether_star_shard')
    .rarity('uncommon')
    .displayName('Nether Star Shard')
})
