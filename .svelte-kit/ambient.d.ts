
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const STRAVA_CLIENT_ID: string;
	export const STRAVA_CLIENT_SECRET: string;
	export const SHELL: string;
	export const npm_command: string;
	export const LSCOLORS: string;
	export const npm_config_userconfig: string;
	export const COLORTERM: string;
	export const PYENV_SHELL: string;
	export const HYPRLAND_CMD: string;
	export const npm_config_cache: string;
	export const LESS: string;
	export const XDG_SESSION_PATH: string;
	export const NVM_INC: string;
	export const TERM_PROGRAM_VERSION: string;
	export const XDG_CONFIG_DIRS_VSCODE_SNAP_ORIG: string;
	export const XDG_BACKEND: string;
	export const GDK_BACKEND_VSCODE_SNAP_ORIG: string;
	export const npm_config_resolution_mode: string;
	export const _P9K_TTY: string;
	export const NODE: string;
	export const GIO_MODULE_DIR_VSCODE_SNAP_ORIG: string;
	export const SSH_AUTH_SOCK: string;
	export const P9K_TTY: string;
	export const COLOR: string;
	export const npm_config_local_prefix: string;
	export const DESKTOP_SESSION: string;
	export const KITTY_PID: string;
	export const NO_AT_BRIDGE: string;
	export const npm_config_globalconfig: string;
	export const XCURSOR_SIZE: string;
	export const GPG_TTY: string;
	export const EDITOR: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const GSETTINGS_SCHEMA_DIR: string;
	export const XDG_SESSION_DESKTOP: string;
	export const LOGNAME: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const GTK_EXE_PREFIX: string;
	export const XDG_SESSION_TYPE: string;
	export const MANPATH: string;
	export const npm_config_init_module: string;
	export const _: string;
	export const KITTY_PUBLIC_KEY: string;
	export const MOTD_SHOWN: string;
	export const HOME: string;
	export const LANG: string;
	export const _JAVA_AWT_WM_NONREPARENTING: string;
	export const LS_COLORS: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_version: string;
	export const WAYLAND_DISPLAY: string;
	export const KITTY_WINDOW_ID: string;
	export const XDG_SEAT_PATH: string;
	export const INIT_CWD: string;
	export const CHROME_DESKTOP: string;
	export const QT_QPA_PLATFORM: string;
	export const INFOPATH: string;
	export const npm_lifecycle_script: string;
	export const NVM_DIR: string;
	export const GSETTINGS_SCHEMA_DIR_VSCODE_SNAP_ORIG: string;
	export const GTK_IM_MODULE_FILE_VSCODE_SNAP_ORIG: string;
	export const XDG_SESSION_CLASS: string;
	export const TERMINFO: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const GTK_PATH: string;
	export const npm_config_prefix: string;
	export const USER: string;
	export const GTK_PATH_VSCODE_SNAP_ORIG: string;
	export const SDL_VIDEODRIVER: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const HYPRLAND_INSTANCE_SIGNATURE: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const NVM_CD_FLAGS: string;
	export const MOZ_ENABLE_WAYLAND: string;
	export const LOCPATH: string;
	export const PAGER: string;
	export const _P9K_SSH_TTY: string;
	export const XDG_VTNR: string;
	export const GTK_EXE_PREFIX_VSCODE_SNAP_ORIG: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const LC_CTYPE: string;
	export const XDG_RUNTIME_DIR: string;
	export const PYENV_ROOT: string;
	export const XDG_DATA_DIRS_VSCODE_SNAP_ORIG: string;
	export const npm_package_json: string;
	export const P9K_SSH: string;
	export const TREE_COLORS: string;
	export const XDG_DATA_DIRS: string;
	export const GDK_BACKEND: string;
	export const npm_config_noproxy: string;
	export const PATH: string;
	export const npm_config_metrics_registry: string;
	export const npm_config_node_gyp: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const GTK_IM_MODULE_FILE: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_config_global_prefix: string;
	export const NVM_BIN: string;
	export const MAIL: string;
	export const LOCPATH_VSCODE_SNAP_ORIG: string;
	export const GIO_MODULE_DIR: string;
	export const KITTY_INSTALLATION_DIR: string;
	export const npm_node_execpath: string;
	export const npm_config_engine_strict: string;
	export const OLDPWD: string;
	export const TERM_PROGRAM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		STRAVA_CLIENT_ID: string;
		STRAVA_CLIENT_SECRET: string;
		SHELL: string;
		npm_command: string;
		LSCOLORS: string;
		npm_config_userconfig: string;
		COLORTERM: string;
		PYENV_SHELL: string;
		HYPRLAND_CMD: string;
		npm_config_cache: string;
		LESS: string;
		XDG_SESSION_PATH: string;
		NVM_INC: string;
		TERM_PROGRAM_VERSION: string;
		XDG_CONFIG_DIRS_VSCODE_SNAP_ORIG: string;
		XDG_BACKEND: string;
		GDK_BACKEND_VSCODE_SNAP_ORIG: string;
		npm_config_resolution_mode: string;
		_P9K_TTY: string;
		NODE: string;
		GIO_MODULE_DIR_VSCODE_SNAP_ORIG: string;
		SSH_AUTH_SOCK: string;
		P9K_TTY: string;
		COLOR: string;
		npm_config_local_prefix: string;
		DESKTOP_SESSION: string;
		KITTY_PID: string;
		NO_AT_BRIDGE: string;
		npm_config_globalconfig: string;
		XCURSOR_SIZE: string;
		GPG_TTY: string;
		EDITOR: string;
		XDG_SEAT: string;
		PWD: string;
		GSETTINGS_SCHEMA_DIR: string;
		XDG_SESSION_DESKTOP: string;
		LOGNAME: string;
		QT_QPA_PLATFORMTHEME: string;
		GTK_EXE_PREFIX: string;
		XDG_SESSION_TYPE: string;
		MANPATH: string;
		npm_config_init_module: string;
		_: string;
		KITTY_PUBLIC_KEY: string;
		MOTD_SHOWN: string;
		HOME: string;
		LANG: string;
		_JAVA_AWT_WM_NONREPARENTING: string;
		LS_COLORS: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_version: string;
		WAYLAND_DISPLAY: string;
		KITTY_WINDOW_ID: string;
		XDG_SEAT_PATH: string;
		INIT_CWD: string;
		CHROME_DESKTOP: string;
		QT_QPA_PLATFORM: string;
		INFOPATH: string;
		npm_lifecycle_script: string;
		NVM_DIR: string;
		GSETTINGS_SCHEMA_DIR_VSCODE_SNAP_ORIG: string;
		GTK_IM_MODULE_FILE_VSCODE_SNAP_ORIG: string;
		XDG_SESSION_CLASS: string;
		TERMINFO: string;
		TERM: string;
		npm_package_name: string;
		GTK_PATH: string;
		npm_config_prefix: string;
		USER: string;
		GTK_PATH_VSCODE_SNAP_ORIG: string;
		SDL_VIDEODRIVER: string;
		VSCODE_GIT_IPC_HANDLE: string;
		HYPRLAND_INSTANCE_SIGNATURE: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		NVM_CD_FLAGS: string;
		MOZ_ENABLE_WAYLAND: string;
		LOCPATH: string;
		PAGER: string;
		_P9K_SSH_TTY: string;
		XDG_VTNR: string;
		GTK_EXE_PREFIX_VSCODE_SNAP_ORIG: string;
		XDG_SESSION_ID: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		LC_CTYPE: string;
		XDG_RUNTIME_DIR: string;
		PYENV_ROOT: string;
		XDG_DATA_DIRS_VSCODE_SNAP_ORIG: string;
		npm_package_json: string;
		P9K_SSH: string;
		TREE_COLORS: string;
		XDG_DATA_DIRS: string;
		GDK_BACKEND: string;
		npm_config_noproxy: string;
		PATH: string;
		npm_config_metrics_registry: string;
		npm_config_node_gyp: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		GTK_IM_MODULE_FILE: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_config_global_prefix: string;
		NVM_BIN: string;
		MAIL: string;
		LOCPATH_VSCODE_SNAP_ORIG: string;
		GIO_MODULE_DIR: string;
		KITTY_INSTALLATION_DIR: string;
		npm_node_execpath: string;
		npm_config_engine_strict: string;
		OLDPWD: string;
		TERM_PROGRAM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
