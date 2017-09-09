<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'tho1714912592195');

/** MySQL database username */
define('DB_USER', 'tho1714912592195');

/** MySQL database password */
define('DB_PASSWORD', 'k6D@9Mgz');

/** MySQL hostname */
define('DB_HOST', 'tho1714912592195.db.11589033.hostedresource.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Pm6c#5JyRzRVtCU- =c6');
define('SECURE_AUTH_KEY',  'b5!a(QN3=8_E/d7vbaws');
define('LOGGED_IN_KEY',    'WSs#X$hE0-*8/fFBDZp=');
define('NONCE_KEY',        '80k(VN9$-NC*S8-Oz*tW');
define('AUTH_SALT',        'rf/Z 9%1d&I$p6%YJn7T');
define('SECURE_AUTH_SALT', 'TF*$Mwkv 5 bF0_B2x 0');
define('LOGGED_IN_SALT',   'zhNhFvFG&rg8N=g6PmvB');
define('NONCE_SALT',       'PA$MytWROK_JVy UmPM*');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
