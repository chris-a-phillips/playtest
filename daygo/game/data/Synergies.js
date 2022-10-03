export const Synergies = {
	sandstorm : {
		elements: ['Air', 'Stone'],
		category: '',
		affected: ['match'],
		shortDescription: 'match defense boosted',
		longDescription: ''
	},
	plasma : {
		elements: ['Lightning', 'Fire'],
		category: '',
		affected: ['diff'],
		shortDescription: 'diff defense reduced',
		longDescription: ''
	},
	blaze : {
		elements: ['Terra', 'Fire'],
		category: '',
		affected: ['match'],
		shortDescription: 'match attack boosted',
		longDescription: ''
	},
	slush : {
		elements: ['Water', 'Ice'],
		category: '',
		affected: ['diff'],
		shortDescription: 'diff attack reduced',
		longDescription: ''
	},
	crystal : {
		elements: ['Terra', 'Lightning'],
		category: '',
		affected: ['match'],
		shortDescription: 'match speed boosted',
		longDescription: ''
	},
	swamp : {
		elements: ['Terra', 'Water'],
		category: '',
		affected: ['diff'],
		shortDescription: 'diff speed reduced',
		longDescription: ''
	},
	spring : {
		elements: ['Stone', 'Water'],
		category: '',
		affected: ['player', 'match'],
		shortDescription: 'players have 1 more energy per turn for each own ent match',
		longDescription: ''
	},
	flash : {
		elements: ['Air', 'Lightning'],
		category: '',
		affected: ['match'],
		shortDescription: 'players have 1 less energy per turn per for each opponent ent match',
		longDescription: ''
	},
	storm : {
		elements: ['Water', 'Lightning'],
		category: '',
		affected: ['match'],
		stat: '',
		shortDescription: 'match attacks have splash damage',
		longDescription: ''
	},
	thorn : {
		elements: ['Stone', 'Terra'],
		category: '',
		affected: ['match', 'player'],
		stat: '',
		shortDescription: 'players have 1 less artifact slot per match',
		longDescription: ''
	},
	glare : {
		elements: ['Lightning', 'Stone'],
		category: '',
		affected: ['diff'],
		stat: '',
		shortDescription: 'diff may attack wrong target',
		longDescription: ''
	},
	smoke : {
		elements: ['Fire', 'Air'],
		category: '',
		affected: ['diff'],
		stat: '',
		shortDescription: 'diff attacks have chance of missing',
		longDescription: ''
	},
	harden : {
		elements: ['Stone', 'Metal'],
		category: '',
		affected: ['match'],
		stat: '',
		shortDescription: 'match receives 1 evo counter after each turn',
		longDescription: ''
	},
	melt : {
		elements: ['Ice', 'Fire'],
		category: '',
		affected: ['diff'],
		stat: '',
		shortDescription: 'diff loses 1 evo counter after each turn',
		longDescription: ''
	},
	spark : {
		elements: ['Metal', 'Lightning'],
		category: '',
		affected: ['player', 'diff'],
		stat: '',
		shortDescription: 'players gain 1 energy for each opponent diff',
		longDescription: ''
	},
	acid : {
		elements: ['Metal', 'Water'],
		category: '',
		affected: ['player', 'diff'],
		stat: '',
		shortDescription: 'players lose 1 energy for each diff they control',
		longDescription: ''
	},
	spore : {
		elements: ['Terra', 'Air'],
		category: '',
		affected: ['match', 'item'],
		stat: '',
		shortDescription: 'item cards attached to match are more effective',
		longDescription: ''
	},
	bLight: {
		elements:['Terra', 'Metal'],
		category: '',
		affected: ['diff', 'item'],
		stat: '',
		shortDescription: 'item cards attach to diff are less effective',
		longDescription: ''
	},
	steam: {
		elements:['Fire', 'Water'],
		category: '',
		affected: ['chain'],
		stat: '',
		shortDescription: 'chain gains health each turn',
		longDescription: ''
	},
	hail: {
		elements:['Ice', 'Air'],
		category: '',
		affected: ['chain'],
		stat: '',
		shortDescription: 'chain loses health each turn',
		longDescription: ''
	},
	chill: {
		elements:['Water', 'Air'],
		category: '',
		affected: ['all'],
		stat: '',
		shortDescription: 'super effective attacks are doubled',
		longDescription: ''
	},
	smolder: {
		elements:['Metal', 'Fire'],
		category: '',
		affected: ['all'],
		stat: '',
		shortDescription: 'non-effective attacks do 1x damage instead of .5x',
		longDescription: ''
	},
	slick: {
		elements:['Ice', 'Stone'],
		category: '',
		affected: [''],
		stat: '',
		shortDescription: 'match gets 1.5 evo if action is successful',
		longDescription: ''
	},
	callous: {
		elements:['Ice', 'Metal'],
		category: '',
		affected: ['match'],
		stat: '',
		shortDescription: 'match gets half evo if action is not successful',
		longDescription: ''
	},
	gale: {
		elements:['Metal', 'Air'],
		category: '',
		affected: ['player', 'match'],
		stat: '',
		shortDescription: 'players draw 1 more card per turn per match',
		longDescription: ''
	},
	frost: {
		elements:['Terra', 'Ice'],
		category: '',
		affected: ['player', 'diff'],
		stat: '',
		shortDescription: 'players draw 1 less card per turn per diff',
		longDescription: ''
	},
	lava: {
		elements:['Fire', 'Stone'],
		category: '',
		affected: ['player'],
		stat: '',
		shortDescription: 'one card discarded each turn is exhausted',
		longDescription: ''
	},
	tempest: {
		elements:['Ice', 'Lightning'],
		category: '',
		affected: ['player', 'match'],
		stat: '',
		shortDescription: 'players retain 1 card per turn per match',
		longDescription: ''
	},
	enhance: {
		elements:['Light', 'anything'],
		category: '',
		affected: ['match'],
		stat: '',
		shortDescription: 'match ent stats boosted',
		longDescription: ''
	},
	diminish: {
		elements:['Dark', 'anything'],
		category: '',
		affected: ['diff'],
		stat: '',
		shortDescription: 'diff ent stats lowered',
		longDescription: ''
	},
	NEUTRALIZE: { //FIXME: change elements
		elements:['Basic', 'anything'],
		category: '',
		affected: [''],
		stat: '',
		shortDescription: 'no effect',
		longDescription: ''
	},
	CHAOS: { // TODO: make special function
		elements:['Light', 'Dark', 'Basic'] ,
		category: '',
		affected: [''],
		stat: '',
		shortDescription: 'type effectiveness is reversed',
		longDescription: ''
	},
	OVERWHELM: { // TODO: make special function
		elements:['four of any 1 type'],
		category: '',
		affected: [''],
		stat: '',
		shortDescription: 'match super effective attacks are 2.5x',
		longDescription: ''
	}
}