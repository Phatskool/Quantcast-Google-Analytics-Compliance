( function() {
  var insertAnalyticsJs = function() {
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-XXXXXXXX-X', 'example.com');
		ga('send', 'pageview');
  };
  var c = 0;
  var consentTimer = setInterval(function(){
	c += 1;
	if( c === 600 )
	  clearInterval(consentTimer);
	if( typeof window.__tcfapi !== 'undefined' ) { 
	  clearInterval( consentTimer );
	  window.__tcfapi( 'addEventListener', 2, function( tcData,listenerSuccess ) {
		if ( listenerSuccess ) {
		  if( tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete' ) {
			if ( ! tcData.gdprApplies ) {
			  insertAnalyticsJs();
			}
			else {
			  var hasDeviceStorageAndAccessConsent = tcData.purpose.consents[1] || false;
			  var hasGeoConsent = tcData.specialFeatureOptins[1] || false;
			  if ((hasDeviceStorageAndAccessConsent) && (hasGeoConsent)) {
				var hasGoogleVendorConsent = tcData.vendor.consents[755] || false;
				if(hasGoogleVendorConsent)  {
				  // load  analytics 
				  insertAnalyticsJs();
				}
			  }
			}
		  }
		}
	  } );
	}
	c++;
  }, 100);
})();