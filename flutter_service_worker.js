'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7d6b10bcf1c141511d1f881134cd904d",
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
".git/index": "3085e8c22bc2f02c49c53634e5232a0b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cfa84cdc82a332e14c74ea85abfc20a7",
".git/logs/refs/heads/main": "d046f64d4eac0c16a013b8056cf12863",
".git/logs/refs/heads/master": "74aebbb17a0570cd747cc17978754a86",
".git/logs/refs/remotes/origin/main": "9d4341f2f1cefa1f4fa5bcf0ba6d7ea5",
".git/logs/refs/remotes/origin/master": "70f8361f421eee58d10948611d8a048b",
".git/objects/05/567d8db228f1b292d3250065dbad12408ebec6": "5de97ae7bd474b7061e1f2291691a123",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/178428f08646887c139c0eaee0e3f6ab1e4fba": "2e686a3b0a9acc3477511401d98ae571",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1f/b1d6003e3561936cf5a5d915ed50039d9491f9": "5a93ccdf591611fc889487b5912f7333",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/021351f8247bc031966aeef9c4b0b31d67f3b5": "7862a266ee004df787c90f1ed61d2eed",
".git/objects/2a/b6d5c303041f510b14d42f792c3893958977e0": "1365d9780e296de35b4ac48d4afbcd94",
".git/objects/2a/e4cc5db802bc6f3c365c8bd9f15be99f6a0ff0": "ff11ba94bb29c81433d3ac8cd5b59d9e",
".git/objects/2c/7780a1ca9945b5aa7b2e88f0096f72f544d063": "66dd1d28711921199ec0dc9331297dcd",
".git/objects/2e/0036e258f243873a262a0b0d74914acc519451": "d8de229dc1a8971747b9b75c54fa62ce",
".git/objects/2e/473d62ac347976f118c96d650103401820f3cb": "4cda9917e01488bfa18bc7aaa5287e56",
".git/objects/41/52cdc3e075ef77b81303431db0f9b383782db2": "ddf32e26949dd8062b2101e35bb52ce7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/d06c014b505d9e2c5aca8d891bda7dd7dc51f0": "862d976c44bb3ece67ad3fb5cf6593bc",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/52/99e07c20e24021e924d2f9a3aaf03a9efd21c5": "93f553f791fbebe5021cf52eecd19940",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5c/2ea6a222f5de20bbc041431900bd6904fffe45": "b1ad662a236edbf64a0930624301be8e",
".git/objects/6a/c63c4b8d0eb845e5b600b4f36acc05bf755407": "c8618f717471ce8bcc85704cc08e7966",
".git/objects/6c/ea696c730e47b7d1a8583802f8a4a306ccfa48": "83af6b8375aecaac931c3c598eb00590",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/a5/60d288972f37c295fb2f217848b91273837ab3": "4664873ff8f23312ec1ffd64b939cb42",
".git/objects/a5/91230376a277ebec0de86bf0a33c0b54b9057c": "9a9c4e9bc115407569e2d329ce018412",
".git/objects/a8/7aebd5317ab2f664117a60a78db994fd773ada": "e0525354c753c0c97b878fc7f5c0903f",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b0/6621e3a103bb3356d363ef362ae4d63b216311": "e575ee720c017df1082b810f601fd5b5",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/a8a7944b946f121a72cf359fc7c8814261f87c": "b94e0bea13e836a1cceddbf500d7f312",
".git/objects/b8/a08e301311cc227482b4c028654a29c9e7d006": "a17214c5ce0a75e3cc31755e5a69aef0",
".git/objects/c1/63be56d451c7f49e650d2d71a661b2dec2d729": "9a4763d8e4f5128eae85d2e6e6f7f2f4",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/ca/76dfb7fda48973c94aacf8e6f0aac11442b9a0": "e3504a532c5ea4acde916b046d7b5797",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ce/db6a78ff0444566c7cc6302fd245ac9c10e707": "93a908854e4dd7f66e38072e0c24956e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/31084d46d05f605c9343c83a957196a57707f8": "f7184572e9a36f8f4f3ac14dcd43b9e6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/a059b4ac5a4e37b19666b1cb82f44f238bf8e2": "6dc88c38409b0e22c0db01a616d1c9d6",
".git/objects/ee/1928e33725ad135d084a229281753d9d8b67bf": "2c80d9ec6a1d58784e1f4a3b09d96ea8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f9/9805336d216fabb51ebe37b52c990b321940aa": "8a5427a4d2954c0eca344be2275c48c0",
".git/objects/fd/ce1e6b829902e68d9fd0467f1159db84dedb9d": "2ff00cd2aa7fa41b12be1c88d827c0ce",
".git/objects/pack/pack-06f66c66ba1edce5db1838d5b77daba308be7dc9.idx": "39d93efff2061743de80b98c7d419a34",
".git/objects/pack/pack-06f66c66ba1edce5db1838d5b77daba308be7dc9.pack": "baaab88ab6b2ba16326f9bd061d7170a",
".git/objects/pack/pack-06f66c66ba1edce5db1838d5b77daba308be7dc9.rev": "d522ff0486fff0390aea0bec0d6a38d7",
".git/refs/heads/main": "865e405012bb5ddf66d51cac77c4794b",
".git/refs/heads/master": "865e405012bb5ddf66d51cac77c4794b",
".git/refs/remotes/origin/main": "865e405012bb5ddf66d51cac77c4794b",
".git/refs/remotes/origin/master": "865e405012bb5ddf66d51cac77c4794b",
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
"index.html": "9d74e6aa676fcf1da589cd1764896e7c",
"/": "9d74e6aa676fcf1da589cd1764896e7c",
"main.dart.js": "7ee78a89ead45ac0adfc3cf5bac38eba",
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
