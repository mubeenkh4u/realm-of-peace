// SPDX-License-Identifier: AGPL-3.0-or-later

const base = require('./electron-builder.config.cjs');

module.exports = {
	...base,
	appId: 'app.realmofpeace.desktop',
	productName: 'Realm of Peace',
	copyright: 'Copyright © 2026 Realm of Peace',
	artifactName: 'Realm-of-Peace-${version}-${os}-${arch}.${ext}',
	win: {
		...base.win,
		target: [
			{
				target: 'portable',
				arch: ['x64'],
			},
		],
	},
	portable: {
		...base.portable,
		artifactName: 'Realm-of-Peace-${version}-portable-${os}-${arch}.${ext}',
	},
};
