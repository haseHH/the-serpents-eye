// The Mantis Shrimp is supposed to fry rice, but the unofficial port broke the tag list, so it's frying wheat.

// original:
// https://github.com/AlexModGuy/AlexsMobs/blob/1.20/src/main/resources/data/alexsmobs/tags/items/shrimp_rice_fryables.json
// altered in port for some reason:
// https://github.com/Raguto/AlexsMobs-1.21.1/blob/master/src/main/resources/data/alexsmobs/tags/item/shrimp_rice_fryables.json

// Add hint on obtainability
ItemEvents.modifyTooltips(event => {
  event.add('alexsmobs:shrimp_fried_rice', [
    Text.gray("You're telling me a (Mantis)"),
    Text.gray("Shrimp fried this rice?!")
  ])
})

ServerEvents.tags('item', event => {
  // Remove wheat from the tag (why on earth is it here in the first place...)
  event.remove('alexsmobs:shrimp_rice_fryables', 'minecraft:wheat')
  // Restore the original tag mapping, adjusted from the 'forge' to the common 'c' tag
  event.add('alexsmobs:shrimp_rice_fryables', '#c:crops/rice')
})
