/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {		
        app.receivedEvent('deviceready');
        admob.initAdmob("ca-app-pub-4504479228598196/5311317412");
        admob.showBanner(admob.BannerSize.BANNER, admob.Position.BOTTOM_APP);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var url = "http://toykam-dailytok.blogspot.com";
        var web = cordova.InAppBrowser.open(url, '_self', 'location=no,hidden=yes,footer=yes,closebuttoncaption="close blog",closebuttoncolor="#ffeebb",hardwareback=yes,hideurlbar=yes,zoom=no');
        web.addEventListener('loadstart', function(){
            alert('Loading...');
        });
        var gotoBlog = document.getElementById('gotoblog');
        gotoBlog.addEventListener('click', this.open_blog);


        if (cordova.platformId == 'android') {
            StatusBar.backgroundColorByName("red");
        }
        document.addEventListener("offline", onOffline, false);

        function onOffline() {
            alert("Please you are offline");
            document.getElementById('gotoblog').setAttribute('style','hidden');
        }
    },

    open_blog: function(){
        var url = "http://toykam-dailytok.blogspot.com";
        cordova.InAppBrowser.open(url, '_self', 'location=no', 'location=no,hidden=yes,footer=yes,closebuttoncaption="close blog",closebuttoncolor="#ffeebb",hardwareback="yes",hideurlbar="yes",zoom="no"');
    }
};
