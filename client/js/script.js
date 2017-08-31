$(document).ready(function () {

    // id of avatar - which gets from server/index.php
    var avatarId = '3d26a233-3ced-479e-838d-85c7d02459ab';

    // which product we loads - from shareClothAPI product/list
    var productId = '4fc12132-c293-46ab-9286-4cb6ecfe49fd';

    var product = 'c-' + productId;

    var sceneId = 9; //gray scene

    // plugin initialization
    window.plugin = new Plugin3d($('#plugin-3d'),
        {
            'transparent': false,
            'host': 'http://plugin-web.globedrobe.com/api',
            'clearColor': 0xffffff,
            'images': 'http://plugin-web.globedrobe.com/3d-plugin-gl/0.4.1/images/'
            // 'setLightsUp'
            //     :
            //     function (scene) {
            //         // например, обычный белый свет
            //         var light = new THREE.DirectionalLight(0xeff5fb, 0.2);
            //         light.position.set(0, 1, 0.2).normalize();
            //         scene.add(light);
            //
            //
            //         // отбросить тень
            //         light.castShadow = true;
            //
            //         // настройки тени (опционально)
            //         light.shadow.camera.left = -1.5;
            //         light.shadow.camera.right = 1.5;
            //         light.shadow.camera.top = 1.5;
            //         light.shadow.camera.bottom = -1.5;
            //         light.shadow.camera.near = 0.1;
            //         light.shadow.camera.far = 10;
            //         light.shadow.mapSize.width = 512 * 4;
            //         light.shadow.mapSize.height = 512 * 4;
            //
            //         // посмотреть, куда оно светит
            //         //var helper = new THREE.DirectionalLightHelper (light, 0.1);
            //         //scene.add (helper);
            //
            //         // посмотреть, где считается тень
            //         // helper = new THREE.CameraHelper (light.shadow.camera);
            //         // scene.add (helper);
            //
            //         //Create a PointLight and turn on shadows for the light
            //         var light2 = new THREE.PointLight(0xffffff, 0.7);
            //         light2.position.set(0, 1, 1);
            //         light2.castShadow = false;            // default false
            //         scene.add(light2);
            //
            //     }
        }
    );

    plugin.loadScene(sceneId, function () {

        $.when(
            $.Deferred(function (deferred) {
                plugin.loadDummy(avatarId, function () {
                    deferred.resolve();
                });
            })
            ,
            $.Deferred (function (deferred) {
                plugin.loadProducts(product, function () {
                    deferred.resolve ();
                });
            })
        );

    });

});
