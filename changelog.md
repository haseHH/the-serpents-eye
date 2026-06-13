# Changelog

## Version 1.1.0

[Full Diff](https://github.com/haseHH/the-serpents-eye/compare/v1.0...v1.1.0)

### Crafting Recipes

- sunflowers can now be roasted into sunflower seeds
  - custom placeable snack making use of KubeJS and Farmer's Delight
  - also works in copper pot from Miner's Delight
  - item texture adapted from vanilla bowl texture
  - custom model made by [Marsh the Frog](https://marshthefrog.carrd.co/)
- empty Kaleidoscope Tavern bottles can now be reverted into vanilla bottles
- Kaleidoscope Tavern's watermelon juice can be sweetened with sugar to convert it into Farmer's Delight's melon juice
- name tags are now craftable with metal nuggets
- opinionated "fix" of concrete (powder) dyeing
  - concrete blocks can no longer be washed with Supplementaries' soap
  - white concrete powder can now be dyed, making washing it relevant
- different sands are now renewable via crush spells and/or dyeing
  - terracotta now crushes into classic sand instead of red sand
  - all colors of sandstone can be crushed into their respective sands
  - all colored sands can be obtained by crushing the associated terracotta
  - sands can be washed to basic vanilla and dyed to colored variants
- Ars Additions' codex entries of all tiers are now craftable
- ingredient-tag for Alex's Mobs' [Shrimp-Fried Rice](https://alexs-mobs-unofficial.fandom.com/wiki/Shrimp-Fried_Rice) has been corrected
- ingredient-tag for Alex's Mobs' [Daze Music Disc Transformation](https://alexs-mobs-unofficial.fandom.com/wiki/Music_Discs#Daze_Music_Disc) has been corrected
- missing recipes for Alex's Mobs' potions have been re-implemented

### Drygmy Farming

- Drygmys can now obtain honeycomb from bees
- Drygmys can now obtain blood sacs from Alex's Mobs' crimson mosquitos
- non-standard Drygmy-obtainable items have a hint added to their JEI info section

### Mods

#### Notable Changes

- added [Show Your Identity](https://www.curseforge.com/minecraft/mc-mods/showyouridentity) to allow showing of player pronouns and pride flags on multiplayer
- upgraded Kaleidoscope Tavern from v1.0.1 to v1.1.2 ([Full Changelog](https://www.curseforge.com/minecraft/mc-mods/kaleidoscope-tavern/files/8081984))
  - 3 new grape types
  - ~~14~~ 13 new drinks
    - Removed rum in this pack as it gives Bad Omen, to prevent accidental raids
  - new effects
  - new tap functionality
- added [Brewin' and Chewin'](https://www.curseforge.com/minecraft/mc-mods/brewin-and-chewin) for more drinks, more snacks, and cheese
- added [Ube's Delight](https://www.curseforge.com/minecraft/mc-mods/ubes-delight) to add Filipino-inspired crops and foods
- added [Right Click and Milk](https://www.curseforge.com/minecraft/mc-mods/right-click-and-milk) to milk cows and goats directly into bottles
- added Anti Enderman Grief datapack from [Vanilla Tweaks](https://vanillatweaks.net/)
- added a selection of [notblue](https://modrinth.com/user/notblue)'s recycling datapacks:
  - [Better Iron Recycling](https://modrinth.com/datapack/better-iron-recycling)
  - [Better Copper Recycling](https://modrinth.com/datapack/copper-recycling)
  - [Better Gold Recycling](https://modrinth.com/datapack/better-gold-recycling)
  - [Diamond Recycling](https://modrinth.com/datapack/diamond-recycling)
  - [Netherite Recycling](https://modrinth.com/datapack/netherite-recycling) (adjusted Lodestone recycling to be in line with the Vanilla Backport switch to iron)
  - [Anvil Repair](https://modrinth.com/datapack/anvil-repair) (reimplemented recipes in KubeJS because of version incompatibility)

#### Other Changes

- upgraded NeoForge from 21.1.219 to 21.1.233
- upgraded various mods:
  - alltheleaks (version 1.1.7+1.21.1-neoforge -> 1.1.9+1.21.1-neoforge)
  - appleskin (version 3.0.8+mc1.21 -> 3.0.9+mc1.21)
  - ars_nouveau (version 5.11.3 -> 5.11.7)
  - baguettelib (version 1.1.6 -> 2.0.3)
  - bee_info (version 1.4.1 -> 2.0.0)
  - citadel (version 2.7.5 -> 2.7.6)
  - collective (version 8.13 -> 8.25)
  - cupboard (version 3.5 -> 3.7)
  - dummmmmmy (version 1.21-2.0.11 -> 1.21-2.0.12)
  - entityculling (version 1.9.5 -> 1.10.2)
  - farmersdelight (version 1.2.10 -> 1.3.2)
  - framedblocks (version 10.5.3 -> 10.6.0)
  - ftbbackups3 (version 21.1.3 -> 21.1.5)
  - ftblibrary (version 2101.1.31 -> 2101.1.32)
  - ftbquests (version 2101.1.23 -> 2101.1.26)
  - ftbteams (version 2101.1.9 -> 2101.1.10)
  - glitchcore (version 2.1.0.0 -> 2.1.0.2)
  - justenoughprofessions (version 4.0.4 -> 4.0.5)
  - kaleidoscope_tavern (version 1.0.1-neoforge+mc1.21.1 -> 1.1.2-neoforge+mc1.21.1)
  - kubejs (version 2101.7.2-build.348 -> 2101.7.2-build.368)
  - kubejsdelight (version 1.1.5 -> 1.1.6)
  - lootjs (version 1.21.1-3.6.1 -> 1.21.1-3.7.0)
  - minersdelight (version 1.4.2 -> 1.4.5)
  - modernfix (version 5.26.1+mc1.21.1 -> 5.27.12+mc1.21.1)
  - moonlight (version 1.21-2.29.20 -> 1.21.1-3.0.17)
  - naturescompass (version 1.21.1-3.0.2-neoforge -> 1.21.1-3.4.0-neoforge)
  - neoforge (version 21.1.219 -> 21.1.233)
  - platform (version 1.2.11.6.2 -> 1.3.3)
  - puzzleslib (version 21.1.39 -> 21.1.51)
  - rhino (version 2101.2.7-build.81 -> 2101.2.7-build.85)
  - sophisticatedbackpacks (version 3.25.34 -> 3.25.58)
  - sophisticatedcore (version 1.4.10 -> 1.4.54)
  - sophisticatedstorage (version 1.5.30 -> 1.5.58)
  - supplementaries (version 1.21-3.5.29 -> 1.21.1-3.6.7)
  - transition (version 1.0.11 -> 1.0.19)
  - trender (version 1.0.10 -> 1.0.13)
  - voicechat (version 1.21.1-2.6.12 -> 1.21.1-2.6.18)
  - voicechat_api (version 2.6.0 -> 2.6.13)
  - waystones (version 21.1.29 -> 21.1.34)
  - xaerolib (version 1.1.0 -> 1.1.15)
  - xaerominimap (version 25.3.10 -> 26.1.0)
  - xaeroworldmap (version 1.40.11 -> 1.41.0)

### Configs and Miscellaneous

- increased Ars Nouveau's storage lectern linking range from 30 to 100
- increased Sophisticated Storage's storage controller range from 15 to 64
- added missing and new crops to Reap's right-click harvestable list
- added human-readable recipe IDs to KubeJS crafting recipes
- added hints on how to obtain some items and variants to their JEI info section
- hide unobtainable debug tools from Sophisticated Storage and Ars Nouveau in JEI
