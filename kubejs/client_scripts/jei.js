// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

//JEI Hide
onEvent('jei.hide.items', e => {
	// Hide items in JEI here
	e.hide(['kubejs:db_water_generator', 'kubejs:db_soul_forge', 'kubejs:db_advanced_barrel', 'kubejs:db_basic_barrel', 'kubejs:db_alloy_mixer', 'kubejs:db_bedrock_infuser', 'kubejs:db_dragon_infuser', 'kubejs:db_eroder', 'kubejs:db_fragment_combiner', 'kubejs:db_ore_extractor', 'kubejs:db_organic_producer'])
	e.hide(['powah:ender_gate_starter', 'powah:ender_gate_basic', 'powah:ender_gate_hardened', 'powah:ender_gate_blazing', 'powah:ender_gate_niotic', 'powah:ender_gate_spirited', 'powah:ender_gate_nitro'])
	e.hide(['powah:energy_cable_starter', 'powah:energy_cable_basic', 'powah:energy_cable_hardened', 'powah:energy_cable_blazing', 'powah:energy_cable_niotic', 'powah:energy_cable_spirited', 'powah:energy_cable_nitro'])
})

//JEI Add
onEvent('jei.add.items', e => {
	e.add(['minecraft:dragon_egg'])
})

//JEI Tooltip

onEvent('item.tooltip', tooltip => {
    tooltip.add(['hostilenetworks:overworld_prediction', 'hostilenetworks:nether_prediction', 'hostilenetworks:end_prediction'], [Text.of('Shift + 點擊右鍵使用以取得經驗值！').color(0x34eb7d)])
})



