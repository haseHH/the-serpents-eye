// The Mantis Shrip is supposed to fry rice, but the unofficial port broke the tag list, so it's frying wheat.

// Add hint on obtainability
ItemEvents.modifyTooltips(event => {
  event.add('alexsmobs:shrimp_fried_rice', [
    Text.gray("You're telling me a (Mantis)"),
    Text.gray("Shrimp fried this rice?!")
  ])
})

ServerEvents.tags('item', event => {
  // Remove wheat from the tag (why on earth is it here in the first place?!)
  event.remove('alexsmobs:shrimp_rice_fryables', 'minecraft:wheat')
  // Restore the original tag mapping, adjusted from the 'forge' to the common 'c' tag
  event.add('alexsmobs:shrimp_rice_fryables', '#c:crops/rice')
})
