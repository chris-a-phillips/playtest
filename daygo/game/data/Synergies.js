export const Synergies = {
	sandstorm: {
		name: 'sandstorm',
		elements: ['air', 'stone'],
		category: '',
		affected: ['match'],
		shortDescription: 'match defense boosted',
		longDescription: ''
	},
	plasma: {
		name: 'plasma',
		elements: ['lightning', 'fire'],
		category: '',
		affected: ['diff'],
		shortDescription: 'diff defense reduced',
		longDescription: ''
	},
	blaze: {
		name: 'blaze',
		elements: ['terra', 'fire'],
		category: '',
		affected: ['match'],
		shortDescription: 'match attack boosted',
		longDescription: ''
	},
	slush: {
		name: 'slush',
		elements: ['water', 'ice'],
		category: '',
		affected: ['diff'],
		shortDescription: 'diff attack reduced',
		longDescription: ''
	},
	crystal: {
		name: 'crystal',
		elements: ['terra', 'lightning'],
		category: '',
		affected: ['match'],
		shortDescription: 'match speed boosted',
		longDescription: ''
	},
	swamp: {
		name: 'swamp',
		elements: ['terra', 'water'],
		category: '',
		affected: ['diff'],
		shortDescription: 'diff speed reduced',
		longDescription: ''
	},
	spring: {
		name: 'spring',
		elements: ['stone', 'water'],
		category: '',
		affected: ['player', 'match'],
		shortDescription: 'players have 1 more energy per turn for each own ent match',
		longDescription: ''
	},
	flash: {
		name: 'flash',
		elements: ['air', 'lightning'],
		category: '',
		affected: ['match'],
		shortDescription: 'players have 1 less energy per turn per for each opponent ent match',
		longDescription: ''
	},
	storm: {
		name: 'storm',
		elements: ['water', 'lightning'],
		category: '',
		affected: ['match'],
		stat: '',
		shortDescription: 'match attacks have splash damage',
		longDescription: ''
	},
	thorn: {
		name: 'thorn',
		elements: ['stone', 'terra'],
		category: '',
		affected: ['match', 'player'],
		stat: '',
		shortDescription: 'players have 1 less artifact slot per match',
		longDescription: ''
	},
	glare: {
		name: 'glare',
		elements: ['lightning', 'stone'],
		category: '',
		affected: ['diff'],
		stat: '',
		shortDescription: 'diff may attack wrong target',
		longDescription: ''
	},
	smoke: {
		name: 'smoke',
		elements: ['fire', 'air'],
		category: '',
		affected: ['diff'],
		stat: '',
		shortDescription: 'diff attacks have chance of missing',
		longDescription: ''
	},
	harden: {
		name: 'harden',
		elements: ['stone', 'metal'],
		category: '',
		affected: ['match'],
		stat: '',
		shortDescription: 'match receives 1 evo counter after each turn',
		longDescription: ''
	},
	melt: {
		name: 'melt',
		elements: ['ice', 'fire'],
		category: '',
		affected: ['diff'],
		stat: '',
		shortDescription: 'diff loses 1 evo counter after each turn',
		longDescription: ''
	},
	spark: {
		name: 'spark',
		elements: ['metal', 'lightning'],
		category: '',
		affected: ['player', 'diff'],
		stat: '',
		shortDescription: 'players gain 1 energy for each opponent diff',
		longDescription: ''
	},
	acid: {
		name: 'acid',
		elements: ['metal', 'water'],
		category: '',
		affected: ['player', 'diff'],
		stat: '',
		shortDescription: 'players lose 1 energy for each diff they control',
		longDescription: ''
	},
	spore: {
		name: 'spore',
		elements: ['terra', 'air'],
		category: '',
		affected: ['match', 'item'],
		stat: '',
		shortDescription: 'item cards attached to match are more effective',
		longDescription: ''
	},
	bight: {
		name: 'bight',
		elements:['terra', 'metal'],
		category: '',
		affected: ['diff', 'item'],
		stat: '',
		shortDescription: 'item cards attach to diff are less effective',
		longDescription: ''
	},
	steam: {
		name: 'steam',
		elements:['fire', 'water'],
		category: '',
		affected: ['chain'],
		stat: '',
		shortDescription: 'chain gains health each turn',
		longDescription: ''
	},
	hail: {
		name: 'hail',
		elements:['ice', 'air'],
		category: '',
		affected: ['chain'],
		stat: '',
		shortDescription: 'chain loses health each turn',
		longDescription: ''
	},
	chill: {
		name: 'chill',
		elements:['water', 'air'],
		category: '',
		affected: ['all'],
		stat: '',
		shortDescription: 'super effective attacks are doubled',
		longDescription: ''
	},
	smolder: {
		name: 'smolder',
		elements:['metal', 'fire'],
		category: '',
		affected: ['all'],
		stat: '',
		shortDescription: 'non-effective attacks do 1x damage instead of .5x',
		longDescription: ''
	},
	slick: {
		name: 'slick',
		elements:['ice', 'stone'],
		category: '',
		affected: [''],
		stat: '',
		shortDescription: 'match gets 1.5 evo if action is successful',
		longDescription: ''
	},
	callous: {
		name: 'callous',
		elements:['ice', 'metal'],
		category: '',
		affected: ['match'],
		stat: '',
		shortDescription: 'match gets half evo if action is not successful',
		longDescription: ''
	},
	gale: {
		name: 'gale',
		elements:['metal', 'air'],
		category: '',
		affected: ['player', 'match'],
		stat: '',
		shortDescription: 'players draw 1 more card per turn per match',
		longDescription: ''
	},
	frost: {
		name: 'frost',
		elements:['terra', 'ice'],
		category: '',
		affected: ['player', 'diff'],
		stat: '',
		shortDescription: 'players draw 1 less card per turn per diff',
		longDescription: ''
	},
	lava: {
		name: 'lava',
		elements:['fire', 'stone'],
		category: '',
		affected: ['player'],
		stat: '',
		shortDescription: 'one card discarded each turn is exhausted',
		longDescription: ''
	},
	tempest: {
		name: 'tempest',
		elements:['ice', 'lightning'],
		category: '',
		affected: ['player', 'match'],
		stat: '',
		shortDescription: 'players retain 1 card per turn per match',
		longDescription: ''
	},
	enhance: {
		name: 'enhance',
		elements:['light'],
		category: '',
		affected: ['match'],
		stat: '',
		shortDescription: 'match ent stats boosted',
		longDescription: ''
	},
	diminish: {
		name: 'diminish',
		elements:['dark'],
		category: '',
		affected: ['diff'],
		stat: '',
		shortDescription: 'diff ent stats lowered',
		longDescription: ''
	},
	neutralize: {
		name: 'neutralize',
		elements:['basic'],
		category: '',
		affected: [''],
		stat: '',
		shortDescription: 'no special effect',
		longDescription: ''
	},
	chaos: {
		name: 'chaos',
		elements:['light', 'dark', 'basic'] ,
		category: '',
		affected: [''],
		stat: '',
		shortDescription: 'type effectiveness is reversed',
		longDescription: ''
	},
	overwhelm: {
		name: 'overwhelm',
		elements:[''],
		category: '',
		affected: [''],
		stat: '',
		shortDescription: 'match super effective attacks are 2.5x',
		longDescription: ''
	}
}