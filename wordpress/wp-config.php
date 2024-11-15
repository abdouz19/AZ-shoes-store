<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'db-ph' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Pq29UJ5Ls#gVW=uEN}%bZg=kzYh^?(|ULYl2~*-DSypGi#mKNvDK|5r*6[W`{gI_' );
define( 'SECURE_AUTH_KEY',  '5[Y;jEO$)TAU t#{c(ZnwUkGYPN/gmSW=w74H-vX;R59=70oYqTJr#N#s7bEp4EI' );
define( 'LOGGED_IN_KEY',    '?}C8^}y%rm;+C)!t_ESv(+NlC8f3;diKy.7~QBs2<jp8joYkiVrP@&f~ce4fjL3H' );
define( 'NONCE_KEY',        'U+[BKmdC]KB?v{ugA>;JUj[@hrkoJ261YnUjpRuQ^_i>.(vAzN,+^/T)_b)IxRn$' );
define( 'AUTH_SALT',        'l[7M6|3(F5!a5R:@,B 0F(]_M:71vV]}QQ6,;PxA(LJ`ywdYso`=|<b:&`^XawMq' );
define( 'SECURE_AUTH_SALT', '2<YL}GH2%CA7@xqh/325Ng_vE-iLNyTlWZHg9r[.eOjLx_6OHBC>YI8,Y,F_~l<{' );
define( 'LOGGED_IN_SALT',   'dYWU64o3+Aa2}v !iVdfxN2m|uT08]NB!_X=[5YBzszkTwO`$dGF[I7*zdGog{86' );
define( 'NONCE_SALT',       'x=<U(ht;LQo$F2r 3vM|3bqSKlf9fr3?0FM16OXbc#j:3D:/UmvlT^~eY,$gNp-M' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
