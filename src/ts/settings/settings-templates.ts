type SettingsOption = {
	id: string;
	label: string;
};

type SettingsSection = {
	sectionClass: string;
	headerClass: string;
	iconClass: string;
	iconSrc: string;
	iconAlt: string;
	title: string;
	buttonClass: string;
	options: SettingsOption[];
};

const settingsSections: SettingsSection[] = [
	{
		sectionClass: 'game_mode',
		headerClass: 'game_mode_header',
		iconClass: 'game_mode_header_icon',
		iconSrc: '../assets/icons/palette.svg',
		iconAlt: 'Palette Icon',
		title: 'Game themes',
		buttonClass: 'theme_button',
		options: [
			{ id: 'code_vibes_theme', label: 'Code vibes theme' },
			{ id: 'gaming_theme', label: 'Gaming theme' },
			{ id: 'da_projects_theme', label: 'DA Projects theme' },
			{ id: 'food_theme', label: 'Food theme' },
		],
	},
	{
		sectionClass: 'choose_player',
		headerClass: 'choose_player_header',
		iconClass: 'game_mode_header_icon',
		iconSrc: '../assets/icons/chess_pawn.svg',
		iconAlt: 'Chess Pawn Icon',
		title: 'Choose player',
		buttonClass: 'choose_player_button',
		options: [
			{ id: 'playerBlue', label: 'Blue' },
			{ id: 'playerOrange', label: 'Orange' },
		],
	},
	{
		sectionClass: 'board_size',
		headerClass: 'board_size_header',
		iconClass: 'board_size_header_icon',
		iconSrc: '../assets/icons/size.svg',
		iconAlt: 'Size Icon',
		title: 'Board size',
		buttonClass: 'board_size_button',
		options: [
			{ id: 'board_4x4', label: '16 cards' },
			{ id: 'board_6x6', label: '24 cards' },
			{ id: 'board_8x8', label: '32 cards' },
		],
	},
];

function createSettingsButton(buttonClass: string, option: SettingsOption): string {
	return `
		<button class="${buttonClass}" id="${option.id}">
			<img src="../assets/icons/off.svg" alt="Off Icon">
			${option.label}
		</button>
	`;
}

function createSettingsSection(section: SettingsSection): string {
	const buttons = section.options.map((option) => createSettingsButton(section.buttonClass, option)).join('');

	return `
		<section class="${section.sectionClass}">
			<header class="${section.headerClass}">
				<img src="${section.iconSrc}" alt="${section.iconAlt}" class="${section.iconClass}">
				<h3>${section.title}</h3>
			</header>
			${buttons}
		</section>
	`;
}

export function getSettingsSectionsMarkup(): string {
	return settingsSections.map(createSettingsSection).join('');
}
