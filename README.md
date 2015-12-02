# cordova-whitelist-example #
Date: 2015-11-30<br>
Last Update: 2015-11-30

An example on how to apply `whitelist` security with Cordova, Phonegap and Phonegap Build

The new `whitelist` system is difficult to implement mostly because it encompasses multiple layers of filters.

The following papers gives some directions on using the new `whitelist` system.
[HOW TO apply the Cordova/Phonegap the whitelist system](/top-phonegap-mistakes/blob/master/the-whitelist-system.md)

The remainder of this README covers the example application.

----

## The App ##
This App compiles for iOS, Android, and Windows. It excercises the main `whitelist` elements - `<access (...) />`,`<allow-intent (...) />`, `<allow-navigate (...) />`, `CSP` and `ATS`. The App has four (4) files, seven (7) plugins, and nine (9) icons. It uses no *splash screens*.

1. index.html - body and view of the application, required
2. config.xml - App configuration, required
3. zepto-1.1.6.js - a jquery equivalent, but lighter weight
4. mapBasic.js - some google map functions

- cordova-plugin-device - used to collect device information
- cordova-plugin-file - required for file placement and `file-transfer` plugin
- cordova-plugin-file-transfer - **to be tested**
- cordova-plugin-inappbrowser - **to be tested**
- cordova-plugin-media - used to play files requested via `http://`
- cordova-plugin-network-information - used to report network availability
- cordova-plugin-whitelist - **to be tested**

## External Files ##

The directive `<access (...) />` is the bottom filter. Everything eventually goes through `access`.

**Loads an external image from the same page.**<br>
- http://codesnippets.altervista.org/examples/phonegap/images/cordova-whitelist-example.png - image

**`CSP` external CSS from the same page.**<br>
- http://codesnippets.altervista.org/examples/phonegap/images/cordova-whitelist-example.css - css

**`CSP` external Javascript from an internet server.**<br>
- http://maps.googleapis.com/maps/api/js - Javascript - Google Maps

**Loads JSON data from an internet server.**<br>
- https://api.github.com/users - JSON (REST API)

**window.open(url,"_system")**<br>
- http://cordova.apache.org/blog/
- requires `<allow-intent (...) />`

**Navigates to page**<br>
- map.html
- requires `<allow-navigate (...) />`

## Google Maps ##

Domains required for *Google Maps*.

maps.googleapis.com
mt0.googleapis.com
mt1.googleapis.com
fonts.googleapis.com
csi.gstatic.com
maps.gstatic.com

## github API##
A simple test to GET data from the github.com API

- https://api.github.com/users
Returns a JSON data structure

- https://developer.github.com/
- https://developer.github.com/v3/

