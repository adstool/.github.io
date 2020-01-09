(function () {

  if ( typeof window.CustomEvent === "function" ) return false;

  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
})();

var adsIMA = (function () {

  function isElement(obj) {
    try {
      //Using W3 DOM2 (works for FF, Opera and Chrome)
      return obj instanceof HTMLElement;
    } catch (e) {
      //Browsers not supporting W3 DOM2 don't have HTMLElement and
      //an exception is thrown and we end up here. Testing some
      //properties that all elements have (works on IE7)
      return (typeof obj === "object") &&
        (obj.nodeType === 1) && (typeof obj.style === "object") &&
        (typeof obj.ownerDocument === "object");
    }
  }

  function loadJS (src, callback) {
    var s, r, t;
    r = false;
    s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = src;
    s.onload = s.onreadystatechange = function () {
      if (!r && (!this.readyState || this.readyState == 'complete')) {
        r = true;
        if (callback) callback();
      }
    };
    t = document.getElementsByTagName('script')[0];
    t.parentNode.insertBefore(s, t);
  }

  var progressCircle = function (el) {

    var ps = document.createElement('div');
    var cc = '<div style="position:absolute!important;bottom:2px!important;left:2px!important;border-radius:28px;width:28px!important;height:28px!important;background:rgba(0, 0, 0, 0.7);">\
            <svg style="transform:rotate(-90deg)!important" width="28" height="28" viewBox="0 0 120 120">\
                <circle style="fill:none!important;stroke:#fff!important" cx="60" cy="60" r="54" stroke-width="12" />\
                <circle style="fill:none!important;stroke:#fc0!important" class="ps_v" cx="60" cy="60" r="54" stroke-width="12" />\
            </svg>\
            <div class="ps_t" style="color:#fff!important;position:absolute!important;bottom:0!important;left:0!important;width:28px!important;height:28px!important;line-height:28px!important;font-size:8pt!important;text-align:center!important">0</div>\
        </div>';
    ps.innerHTML = cc;
    el.appendChild(ps);

    var ps_v = el.querySelector('.ps_v');
    var ps_t = el.querySelector('.ps_t');
    var CIRCUMFERENCE = 2 * Math.PI * 54;
    ps_v.style.strokeDasharray = CIRCUMFERENCE;
    var progressValue = function (value) {
      if (value < 10) {
        ps.remove()
      }
      var progress = value / 100;
      var dashoffset = CIRCUMFERENCE * (1 - progress);
      ps_v.style.strokeDashoffset = dashoffset;
    }

    var progressTime = function (sum, num) {
      var t = parseInt(sum - num);
      t = t > 99 ? '99+' : t;
      ps_t.textContent = t;
      var full = parseInt(100 - (num * 100 / sum));
      progressValue(full);
    }

    return progressTime;
  }

  function phat8(str) {
    if(!str) return "";
    var dec = "";
    if(str.indexOf('3gnuD=') !== -1){
      dec = str.replace('3gnuD=', '==');
    }
    else{
      dec = str.replace('3mahP=', '');
    }
    return parseInt(window.atob(dec));
  }

  function thien8(t) {
    var now = new Date().getTime();
    if(now > t) return true;
    return false;
  }

  // options: an object containing configuration options for the singleton
  // e.g var options = { name: "test", pointX: 5};
  function Singleton(videoWrap, adsIMAactive) {
    // set some properties for our singleton
    var name = "ads_" + new Date().getTime();

    var adContent, videoContent, videoSound, videoProgress; //element
    var _preroll = [];
    var _playing = false;
    var _muted = true;
    var _duration = 0;
    var _intervalTimer = null;
    var _queue = true;

    // console.log(adsIMAactive)

    var linearAd = {
      width: 640,
      height: 360
    }

    var adsLoader, adsManager, adDisplayContainer;

    var onAdError = function (adErrorEvent) {
      // Handle the error logging.
      if (adsManager || !adErrorEvent){
        try{
          adsManager.destroy();
        }catch(err){
          console.error('Time expired')
        }
      }
      console.log(adErrorEvent.getError());
      
    };

    var onAdEvent = function (adEvent) {
      // Create a new event
      var event = new CustomEvent(adEvent.type);
      if(adEvent.type === 'loaded') event = new CustomEvent('loaded', { detail: _preroll[0].adTagUrl });
      // Dispatch the event
      adContent.dispatchEvent(event);

      // Retrieve the ad from the event. Some events (e.g. ALL_ADS_COMPLETED)
      // don't have ad object associated.
      // console.log(adEvent.type)
      var ad = adEvent.getAd();
      switch (adEvent.type) {
        case google.ima.AdEvent.Type.LOADED:

        // var adI = adEvent.getAdData()
        //   console.log(adI.adPodInfo.maxDuration)
          
          // This is the first event sent for an ad - it is possible to
          // determine whether the ad is a video ad or an overlay.
          if (!ad.isLinear()) {
            // Position AdDisplayContainer correctly for overlay.
            // Use ad.width and ad.height.
            videoContent.play();
          }
          break;
        case google.ima.AdEvent.Type.STARTED:
          // This event indicates the ad has started - the video player
          // can adjust the UI, for example display a pause button and
          // remaining time.
          if (ad.isLinear()) {
            adContent.style.display = 'block';

            _duration = ad.getDuration();

            function toggleSound(sound, muted) {
              var sicon = muted ? sound_off : sound_on;
              var volume = muted ? 0 : 0.5;
              sound.style.backgroundImage = 'url(' + sicon + ')';
              adsManager.setVolume(volume);
              return;
            }

            videoSound = document.createElement('a');
            videoSound.style.cssText = 'position:absolute;z-index:1;bottom:2px;right:2px;width:28px;height:28px;border-radius:28px;display:block;background-position:center;background-repeat:no-repeat;background-color:rgba(255,255,255,0.5);';
            toggleSound(videoSound, _muted);
            adContent.appendChild(videoSound);

            videoSound.onclick = function () {
              console.log('ads muted', _muted);
              toggleSound(videoSound, !_muted);
              _muted = !_muted;
            }

            videoProgress = progressCircle(adContent);

            _intervalTimer = setInterval(function () {
                var remainingTime = adsManager.getRemainingTime();

                if(_duration <= 0) _duration = remainingTime + 1;
                
                videoProgress(_duration, _duration - remainingTime);

              },499); // every 300ms
          }
          break;
        case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
          if (videoSound) videoSound.remove();
          if (videoProgress) videoProgress(1,1);
          if (_intervalTimer) clearInterval(_intervalTimer);

          _preroll.shift();
          if(_preroll.length){
            setTimeout(function(){
              _playing = false;
              runAds();
            },966)
          }
          else{
            adContent.style.display = 'none';
          }
          break;
      }
    };

    var onAdsLoader = function () {
      // Create ads loader.
      var adsLoader = new google.ima.AdsLoader(adDisplayContainer);

      // Listen and respond to ads loaded and error events.
      adsLoader.addEventListener(
        google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
        onAdsManager,
        false);
      adsLoader.addEventListener(
        google.ima.AdErrorEvent.Type.AD_ERROR,
        onAdError,
        false);

      return adsLoader;
    };

    var onAdsManager = function (adsManagerLoadedEvent) {
      // Get the ads manager.
      var adsRenderingSettings = new google.ima.AdsRenderingSettings();
      adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
      // videoContent should be set to the content video element.
      adsManager = adsManagerLoadedEvent.getAdsManager(
        videoContent, adsRenderingSettings);

      videoContent.load();
      adDisplayContainer.initialize();

      try {
        // Initialize the ads manager. Ad rules playlist will start at this time.
        adsManager.init(640, 360, google.ima.ViewMode.NORMAL);
        // Call play to start showing the ad. Single video and overlay ads will
        // start at this time; the call will be ignored for ad rules.
        adsManager.start();

        // Add listeners to the required events.
        adsManager.addEventListener(
          google.ima.AdErrorEvent.Type.AD_ERROR,
          onAdError);
        adsManager.addEventListener(
          google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
          onContentPauseRequested);
        adsManager.addEventListener(
          google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
          onContentResumeRequested);


        function onContentPauseRequested() {
          videoContent.pause();
          // This function is where you should setup UI for showing ads (e.g.
          // display ad timer countdown, disable seeking etc.)
          // setupUIForAds();
        }

        function onContentResumeRequested() {
          videoContent.play();
          // This function is where you should ensure that your UI is ready
          // to play content. It is the responsibility of the Publisher to
          // implement this function when necessary.
          // setupUIForContent();

        }

        var events = [
          google.ima.AdEvent.Type.VOLUME_CHANGED,
          google.ima.AdEvent.Type.VOLUME_MUTED,
          google.ima.AdEvent.Type.SKIPPED,
          google.ima.AdEvent.Type.CLICK,
          google.ima.AdEvent.Type.PAUSED,
          google.ima.AdEvent.Type.LOADED,
          google.ima.AdEvent.Type.STARTED,
          google.ima.AdEvent.Type.FIRST_QUARTILE,
          google.ima.AdEvent.Type.MIDPOINT,
          google.ima.AdEvent.Type.THIRD_QUARTILE,
          google.ima.AdEvent.Type.COMPLETE,
          google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
        ];

        for (var index in events) {
          adsManager.addEventListener(events[index], onAdEvent);
        }

      } catch (adError) {
        console.log(adError)
        // An error may be thrown if there was a problem with the VAST response.
        videoContent.play();
      }


      return adsManager;
    };

    var sound_on = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjx0aXRsZT52b2x1bWVfb248L3RpdGxlPjxwYXRoIGQ9Ik0xNC4wMTYgMy4yMzRjNC4wMzEgMC44OTEgNi45ODQgNC41IDYuOTg0IDguNzY2cy0yLjk1MyA3Ljg3NS02Ljk4NCA4Ljc2NnYtMi4wNjNjMi45MDYtMC44NDQgNC45NjktMy41MTYgNC45NjktNi43MDNzLTIuMDYzLTUuODU5LTQuOTY5LTYuNzAzdi0yLjA2M3pNMTYuNSAxMmMwIDEuNzgxLTAuOTg0IDMuMjgxLTIuNDg0IDQuMDMxdi04LjA2M2MxLjUgMC43NSAyLjQ4NCAyLjI1IDIuNDg0IDQuMDMxek0zIDloMy45ODRsNS4wMTYtNS4wMTZ2MTYuMDMxbC01LjAxNi01LjAxNmgtMy45ODR2LTZ6Ij48L3BhdGg+PC9zdmc+';
    var sound_off = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjx0aXRsZT52b2x1bWVfb2ZmPC90aXRsZT48cGF0aCBkPSJNMTIgMy45ODR2NC4yMTlsLTIuMTA5LTIuMTA5ek00LjI2NiAzbDE2LjczNCAxNi43MzQtMS4yNjYgMS4yNjYtMi4wNjMtMi4wNjNjLTEuMDc4IDAuODQ0LTIuMjk3IDEuNS0zLjY1NiAxLjgyOHYtMi4wNjNjMC44NDQtMC4yMzQgMS41OTQtMC42NTYgMi4yNS0xLjE3MmwtNC4yNjYtNC4yNjZ2Ni43NWwtNS4wMTYtNS4wMTZoLTMuOTg0di02aDQuNzM0bC00LjczNC00LjczNHpNMTguOTg0IDEyYzAtMy4xODgtMi4wNjMtNS44NTktNC45NjktNi43MDN2LTIuMDYzYzQuMDMxIDAuODkxIDYuOTg0IDQuNSA2Ljk4NCA4Ljc2NiAwIDEuNS0wLjM3NSAyLjk1My0xLjAzMSA0LjE3MmwtMS41LTEuNTQ3YzAuMzI4LTAuNzk3IDAuNTE2LTEuNjg4IDAuNTE2LTIuNjI1ek0xNi41IDEyYzAgMC4yMzQgMCAwLjQyMi0wLjA0NyAwLjYwOWwtMi40MzgtMi40Mzh2LTIuMjAzYzEuNSAwLjc1IDIuNDg0IDIuMjUgMi40ODQgNC4wMzF6Ij48L3BhdGg+PC9zdmc+';

    var configAds = function () {
      // Create HTML

      // console.log(videoWrap)
      videoWrap = isElement(videoWrap) ? videoWrap : document.querySelector(videoWrap);
      if (!videoWrap) {
        console.log('video wrap is Empty');
        return;
      }
      // linearAd.width = videoWrap.clientWidth;
      // linearAd.height = videoWrap.clientHeight;
      var ratio = videoWrap.clientWidth / linearAd.width;

      videoContent = videoWrap.querySelector('video');
      if (videoContent) {
        videoContent.pause();
      }
      else{
        videoContent = document.createElement('video');
        videoContent.style.cssText = 'display:block;width:1px;heigh:1px';
        videoWrap.appendChild(videoContent);
        videoSource = document.createElement('source');
        videoSource.setAttribute('src','//static.blueseed.tv/ajs/video-player/blank.mp4');
        videoSource.setAttribute('type','video/mp4');
        videoContent.appendChild(videoSource);
      }
      videoContent.muted = _muted || true;

      adContent = document.createElement('div');
      adContent.style.cssText = 'z-index:99;position:relative;width:'+linearAd.width+'px;height:'+linearAd.height+'px;margin-top:-'+linearAd.height+'px;transform-origin: left bottom;transform: scale('+ratio+')';

      videoWrap.appendChild(adContent);

      //ttttt
      _queue = thien8(phat8(adsIMAactive));

      // Create the ad display container.
      adDisplayContainer = new google.ima.AdDisplayContainer(
        adContent, videoContent);

      //create adsLoader
      adsLoader = onAdsLoader();
      // An event listener to tell the SDK that our content video
      // is completed so the SDK can play any post-roll ads.
      var contentEndedListener = function () {
        adsLoader.contentComplete();
      };
      videoContent.onended = contentEndedListener;
      
    };

    var runAds = function () {
      // console.log(_preroll[0].adTagUrl)

      if(!_playing) adsLoader.requestAds(_preroll[0]);
      _playing = true;
    }

    configAds();

    return {

      setAdsRequest: function (adTagUrl) {
        // Request video ads.
        if(!adTagUrl) return;
        
        if(_queue) onAdError()

        var adsRequest = new google.ima.AdsRequest();
        adsRequest.adTagUrl = adTagUrl;

        // Specify the linear and nonlinear slot sizes. This helps the SDK to
        // select the correct creative if multiple are returned.
        adsRequest.linearAdSlotWidth = linearAd.height;
        adsRequest.linearAdSlotHeight = linearAd.height;

        adsRequest.nonLinearAdSlotWidth = 640;
        adsRequest.nonLinearAdSlotHeight = 100;
        
        _preroll.push(adsRequest)
      },
      runAds: runAds,
      adContent: adContent,
      name: name
    };

  }

  // our instance holder
  var instance;

  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    init: function (el, options) {

      if (!instance) {
        instance = Singleton(el, options);
      }

      return instance;
    }
  };

})();