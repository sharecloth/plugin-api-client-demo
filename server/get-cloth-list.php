<?php

require_once __DIR__ . "/../vendor/autoload.php";
$config = require_once __DIR__ . '/../config.php';

$client = new \ShareCloth\Api\Client($config['sharecloth-access-token']);
$items = $client->itemsList(['list' => 'all']);

echo "Your cloth list: \n";

foreach ($items as $item) {
    echo $item['curve_ident'] . "\n";
}