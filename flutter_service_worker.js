'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c5e1670a76fa30eb5c8cb1969cb58536",
".git/config": "fb24056589dcd5927f6f6126b8116ece",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6bfec35d14a715e656e34a795bee871b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6953f1c13376c92b2681e4e15974718b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e2ede836cff9f5081354c7be834dd741",
".git/logs/refs/heads/main": "70e613e13034637f717025cc90061dc2",
".git/logs/refs/heads/master": "74aebbb17a0570cd747cc17978754a86",
".git/logs/refs/remotes/origin/main": "814b02b2c5abdde91461f48f9cd0748c",
".git/logs/refs/remotes/origin/master": "70f8361f421eee58d10948611d8a048b",
".git/objects/05/567d8db228f1b292d3250065dbad12408ebec6": "5de97ae7bd474b7061e1f2291691a123",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/178428f08646887c139c0eaee0e3f6ab1e4fba": "2e686a3b0a9acc3477511401d98ae571",
".git/objects/0c/e412867d710452e58ae04c0cdbfee97cc4c9ca": "bf3f874f83d9dfc57481ba9435790d97",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/eafbdc7cf77d9bdb54ccfdd8f27fe1e5bf7aa8": "f17b1ee21147de52e1ec441843d25fe8",
".git/objects/1f/b1d6003e3561936cf5a5d915ed50039d9491f9": "5a93ccdf591611fc889487b5912f7333",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/021351f8247bc031966aeef9c4b0b31d67f3b5": "7862a266ee004df787c90f1ed61d2eed",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/2a/b6d5c303041f510b14d42f792c3893958977e0": "1365d9780e296de35b4ac48d4afbcd94",
".git/objects/2a/e4cc5db802bc6f3c365c8bd9f15be99f6a0ff0": "ff11ba94bb29c81433d3ac8cd5b59d9e",
".git/objects/2c/7780a1ca9945b5aa7b2e88f0096f72f544d063": "66dd1d28711921199ec0dc9331297dcd",
".git/objects/2e/0036e258f243873a262a0b0d74914acc519451": "d8de229dc1a8971747b9b75c54fa62ce",
".git/objects/2e/473d62ac347976f118c96d650103401820f3cb": "4cda9917e01488bfa18bc7aaa5287e56",
".git/objects/35/eb1ddfbbc029bcab630581847471d7f238ec53": "b69277a8e391674b63a06b70141a9094",
".git/objects/39/96dfe52d2c9e586b25101b689d02132d265520": "fe51b88ccbdb8b66c70502356e27acc1",
".git/objects/3a/ad64e5b5e1bc3deeccdb425a48c5f29ce8af73": "0669abd6f8f065bca4d76ecc2d611c86",
".git/objects/40/e8765a48d1f866f40deae29d9d1ef5278c732c": "74880c0b84ab3794dae42806fa65a363",
".git/objects/41/52cdc3e075ef77b81303431db0f9b383782db2": "ddf32e26949dd8062b2101e35bb52ce7",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/d06c014b505d9e2c5aca8d891bda7dd7dc51f0": "862d976c44bb3ece67ad3fb5cf6593bc",
".git/objects/48/bae00343346cc1a6ec6f40d0ae68c80ced28f0": "23b703df5faa0ab7152ae6f9e663ac21",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/52/99e07c20e24021e924d2f9a3aaf03a9efd21c5": "93f553f791fbebe5021cf52eecd19940",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/58/4ef648ab613ae0737b12d31ae33a2ef3741e88": "c9bdaee7b04ea40fd362e194f16e716e",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5c/2ea6a222f5de20bbc041431900bd6904fffe45": "b1ad662a236edbf64a0930624301be8e",
".git/objects/63/9900d13c6182e452e33a3bd638e70a0146c785": "488924a8ec51457535ebf377a60e23c8",
".git/objects/65/abcaf95a3fba75a734e8fc5bf5b554ac6e7365": "ecb9089bb52f62562d32c562677e9e4a",
".git/objects/69/5f4d8f41c234f398e7cbad0c030e76691ad2e2": "a79ebec5de131f0be2b1d407e03ad36a",
".git/objects/6a/c63c4b8d0eb845e5b600b4f36acc05bf755407": "c8618f717471ce8bcc85704cc08e7966",
".git/objects/6c/ea696c730e47b7d1a8583802f8a4a306ccfa48": "83af6b8375aecaac931c3c598eb00590",
".git/objects/6e/ab95ccfe24b52c3251cc48548f6ad350da0273": "3194a8ad7a8e09b7c1fb1980fe8c4757",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/ecc7f763cacfbff68c9e1d42588a2f792f5eb9": "bb5401b2d349eb986c088079174c72be",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7e/4db6647b2f1b2d0955909567a4908e98ff6fdb": "b5af20c2fe6b15102bf301eb07b67438",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/69d6d6dd1e0abf2c9a7bb8ee8efa27e18036c0": "8dde732ddf5e84961a876912010b3ecf",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/5551971eb5d94b144db2ebdda35bb27051433a": "82c0a73b68f2ad4d6479e5900199c1dc",
".git/objects/a5/60d288972f37c295fb2f217848b91273837ab3": "4664873ff8f23312ec1ffd64b939cb42",
".git/objects/a5/91230376a277ebec0de86bf0a33c0b54b9057c": "9a9c4e9bc115407569e2d329ce018412",
".git/objects/a8/7aebd5317ab2f664117a60a78db994fd773ada": "e0525354c753c0c97b878fc7f5c0903f",
".git/objects/aa/14a087d096a36d1ef1722dbf10600d635d8add": "5686b437c6e96cfd3d2883bb2d614842",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b0/6621e3a103bb3356d363ef362ae4d63b216311": "e575ee720c017df1082b810f601fd5b5",
".git/objects/b0/fe6c8b79b7b7c3cd486b98968f716f482b9876": "87c42155af20defe900067207979aee0",
".git/objects/b2/04164b3f7f43177979c6e310752c8e51029844": "9a103c0bab139dd0b91a3046d930828c",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b6/d50b824980706326fe9d413a697dd19fcae7d5": "82ff6447afb0e23a39c32ecea036cb61",
".git/objects/b7/a8a7944b946f121a72cf359fc7c8814261f87c": "b94e0bea13e836a1cceddbf500d7f312",
".git/objects/b8/a08e301311cc227482b4c028654a29c9e7d006": "a17214c5ce0a75e3cc31755e5a69aef0",
".git/objects/c1/63be56d451c7f49e650d2d71a661b2dec2d729": "9a4763d8e4f5128eae85d2e6e6f7f2f4",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/ca/76dfb7fda48973c94aacf8e6f0aac11442b9a0": "e3504a532c5ea4acde916b046d7b5797",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cb/07bbc7c97c3db5f4f5b3d0765b2f8fcafb32c6": "7f7d6b1457d3a71b880aee16c72469fa",
".git/objects/ce/aab3b785a39a08f1ba0ccfa9f626a2d28db11f": "1fc1f0d19fc6109d6809a3eb3503e773",
".git/objects/ce/db6a78ff0444566c7cc6302fd245ac9c10e707": "93a908854e4dd7f66e38072e0c24956e",
".git/objects/d2/32167bcbe94d40f4abcd7b201c1c8ce089c74e": "8d27795c944b4752c4bbef1d8b15ec23",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/31084d46d05f605c9343c83a957196a57707f8": "f7184572e9a36f8f4f3ac14dcd43b9e6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e4/de847255e512dbf7a6bf2ab0364ae1f87c625f": "f405ff40dc92cd1e534f5c34a8b30ae9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/748cae3eb311056c006518968419425663bb0f": "75326382ae840cfe4d55c9482f6f7d0f",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/a059b4ac5a4e37b19666b1cb82f44f238bf8e2": "6dc88c38409b0e22c0db01a616d1c9d6",
".git/objects/ed/c683f4565a889aab0e2e250d14233c8feca1c1": "9ad9a3c1cc710b3d5430597c1d816957",
".git/objects/ee/1928e33725ad135d084a229281753d9d8b67bf": "2c80d9ec6a1d58784e1f4a3b09d96ea8",
".git/objects/ef/dd3b75cc21d20d54ef3fec431bc214508d10f9": "813a2cd393a42172e98f62748a6a2583",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/f9/9805336d216fabb51ebe37b52c990b321940aa": "8a5427a4d2954c0eca344be2275c48c0",
".git/objects/fa/73c2398194c3e6a4998aba3af6f6eeb0f085ff": "d7de9a390a3b03b88f05db1d83860aa3",
".git/objects/fd/ce1e6b829902e68d9fd0467f1159db84dedb9d": "2ff00cd2aa7fa41b12be1c88d827c0ce",
".git/objects/pack/pack-06f66c66ba1edce5db1838d5b77daba308be7dc9.idx": "39d93efff2061743de80b98c7d419a34",
".git/objects/pack/pack-06f66c66ba1edce5db1838d5b77daba308be7dc9.pack": "baaab88ab6b2ba16326f9bd061d7170a",
".git/objects/pack/pack-06f66c66ba1edce5db1838d5b77daba308be7dc9.rev": "d522ff0486fff0390aea0bec0d6a38d7",
".git/refs/heads/main": "3f395fe3e6e7773dc73aa83ee78ae1a4",
".git/refs/heads/master": "865e405012bb5ddf66d51cac77c4794b",
".git/refs/remotes/origin/main": "3f395fe3e6e7773dc73aa83ee78ae1a4",
".git/refs/remotes/origin/master": "865e405012bb5ddf66d51cac77c4794b",
".idea/misc.xml": "d4f288593ec15175e0ab2246a477dada",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/vcs.xml": "74d3a64f52848d5e8db631b1685e58c8",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "92cabc0827f2f05c4b59c6844e07b83f",
"assets/AssetManifest.bin": "8bf386c7fbbc84760f71ac40865e4185",
"assets/AssetManifest.bin.json": "0d8f6fbe57b8de4a0ef3fe47bc5eb232",
"assets/AssetManifest.json": "3ede0d00da83d52de8fb0f3f68fb3588",
"assets/assets/images/about_main.png": "f4da0a7c8e272e01339998fc33672151",
"assets/assets/images/about_stack.png": "9e55e69fc530b9ceb9646dbc68085a7c",
"assets/assets/images/Drip-Irrigation-slider.jpg": "c406c64f394ce11eb9a8c5c4d1f6f3bc",
"assets/assets/images/irrigation_img.jpg": "df39fe020a245061e95c83c1d633d858",
"assets/assets/images/irrigation_img1.jpg": "61e383e4c6105025867488f7224a6360",
"assets/assets/images/irrigation_img2.jpg": "dc3b1dc38fc4d090e26f63ddd0094413",
"assets/assets/images/irrigation_img3.jpg": "21b73b3f9bc9a6b242baf99221536927",
"assets/assets/images/Landscaping-Slider.jpg": "c25315436366a8e5e7b5f11deb377671",
"assets/assets/images/main_logo.png": "f67865c263397e290f208386aee3d63e",
"assets/assets/images/meeting_img.jpg": "2e95862552391e5c72308732c30cee98",
"assets/assets/images/our_philosophy.png": "c5f07bd3e108f509cb04ccd364a464d0",
"assets/assets/images/splash.jpg": "9258f0c99e701df397872babd4b2bb37",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "def04c2f9f4c91a2003a83215bba4f80",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "879b55fae2c49db5d9888e3927c0efad",
"icons/Icon-512.png": "8e4a96fdd42444cf6ba12b531591143d",
"icons/Icon-maskable-192.png": "879b55fae2c49db5d9888e3927c0efad",
"icons/Icon-maskable-512.png": "8e4a96fdd42444cf6ba12b531591143d",
"index.html": "298713256eb47ce8c8a5702b8961b65a",
"/": "298713256eb47ce8c8a5702b8961b65a",
"main.dart.js": "838038493cd0135812bc942a984c0468",
"manifest.json": "e6790512979f8dd99fff1ca691a74767",
"version.json": "840aa2d4dfa17bfe16d139318e64cd4b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}