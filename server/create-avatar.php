<?php


require_once __DIR__ . '/../vendor/autoload.php';
$config = require_once __DIR__ . '/../config.php';

$client = new \Plugin\ApiClient\Client();

$client->setAccessToken($config['plugin-access-token']);

$parameters = [
    'name' => 'test female',
    'parameters' => [
        'metric' => [
            'HEIGHT' => '170',
            'WEIGHT' => '60',
            'HIPS' => '90',
            'WAIST' => '60',
            'BUST' => '90',
            'NECK_CIRCLE' => '40',
            'UNDER_BREAST' => '70',
            'GENDER' => 'female',
        ]
    ]
];

$data = $client->avatarCreate($parameters);


echo "\nAvatar ident is: $data[ident] \n\n";