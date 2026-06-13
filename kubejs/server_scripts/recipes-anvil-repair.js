/*
 * Reimplementation of notblue's Anvil Repair datapack
 * since it is incompatible with our Minecraft version
 *
 * https://modrinth.com/user/notblue
 * https://modrinth.com/datapack/anvil-repair
 *
 * As a variant of the original datapack, this file is
 * licensed under CC-BY-NC-SA-4.0
 * https://creativecommons.org/licenses/by-nc-sa/4.0/
*/

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:anvil'),
    [
      'XXX',
      ' A '
    ],
    {
      X: 'minecraft:iron_ingot',
      A: 'minecraft:chipped_anvil'
    }
  ).id('anvil_repair:anvil_from_chipped_anvil')

  event.shapeless(
    'minecraft:anvil',
    [
      'minecraft:damaged_anvil',
      'minecraft:damaged_anvil'
    ]
  ).id('anvil_repair:anvil_from_combining_damaged_anvils')

  event.shaped(
    Item.of('minecraft:anvil'),
    [
      'XXX',
      'XXX',
      ' A '
    ],
    {
      X: 'minecraft:iron_ingot',
      A: 'minecraft:damaged_anvil'
    }
  ).id('anvil_repair:anvil_from_damaged_anvil')

  event.shaped(
    Item.of('minecraft:chipped_anvil'),
    [
      'XXX',
      ' A '
    ],
    {
      X: 'minecraft:iron_ingot',
      A: 'minecraft:damaged_anvil'
    }
  ).id('anvil_repair:chipped_anvil_from_damaged_anvil')
})
