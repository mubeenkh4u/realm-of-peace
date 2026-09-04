// SPDX-License-Identifier: AGPL-3.0-or-later

import {BUILD_CHANNEL} from '@electron/common/BuildChannel';

export const DESKTOP_APP_NAME = BUILD_CHANNEL === 'canary' ? 'Realm of Peace Canary' : 'Realm of Peace';
export const MACOS_BUNDLE_ID = BUILD_CHANNEL === 'canary' ? 'app.realmofpeace.canary' : 'app.realmofpeace';
export const LINUX_DESKTOP_ENTRY_ID = BUILD_CHANNEL === 'canary' ? 'realm-of-peace-canary' : 'realm-of-peace';
export const WINDOWS_SHORTCUT_AUTHOR = 'Realm of Peace';
const WINDOWS_VELOPACK_ID = BUILD_CHANNEL === 'canary' ? 'realm_of_peace_desktop_canary' : 'realm_of_peace_desktop';
export const WINDOWS_APP_USER_MODEL_ID =
	BUILD_CHANNEL === 'canary' ? 'RealmOfPeace.Desktop.Canary' : 'RealmOfPeace.Desktop';
export const WINDOWS_LEGACY_APP_USER_MODEL_IDS = [`velopack.${WINDOWS_VELOPACK_ID}`];
export const WINDOWS_TOAST_ACTIVATOR_CLSID =
	BUILD_CHANNEL === 'canary' ? '{2D607979-94C5-4C53-84E4-02D1B449D0A1}' : '{A25F7AE1-BDD5-43F9-A1D0-01EED4D1B6C8}';
