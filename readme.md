# Installation


Clone this repo and run `composer install`.

# API's

## Sharecloth API

- used for ShareCloth Editor
- used for get cloth list for external resources

** only payment accounts **


## Plugun (Core) API

- used for generate and store avatars 
- used as data provider for web plugin( avatars, textures, curves, meshes)
- used for common tasks, as sheduled product calculation, logging and etc...



# How to use


First of all, you need to obtain API tokens for plugin-api (used in `server/create-avatar.php`)
and for sharecloth-api (used in `server/get-cloth-list.php`).

In the future, it will only be necessary to use only `sharecloth-api`.

Insert these key to file `config.php` (create it from `config.dist.php`) 

## Server Part
Run from СLI  `php server/create-avatar.php `.
After running this script you wil get a avatar ident. 

Run from CLI `php server/get-cloth-list.php` to get id's for your cloth.

## Client Part

1. Insert avatar id from `server/create-avatar.php` to `client/js/script.js:4`
2. Insert one of you cloth id from `server/get-cloth-list.php` to  `client/js/script.js:7`.
3. Run `client/index.html` from localhost (not file:///).

