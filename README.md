# Quantcast - Google Analytics Compliance
 Make Quantcast GDPR Compliant using Google Analytics
  For details please keep scrolling
  
  # Installation Instructions:

After you set up Quantcast Choice and integrated the generated Universal Tag to your website, you can add my script, changing UA-XXXXXXXX-X to your Analytics ID.
The script can easily be edited, to check if specific consent have been given, in order to run any script you want, simply by replacing the insertAnalyticsJs function to a function/code of your choice.

# Why Quantcast is not enough
  
  Just to keep you up-to-date, in order for a site to be GDPR compliant, if a user has not given direct consent to use his data (geolocation - personalization etc),
 you are not allowed to collect such data. 
 
 This time, when digging up the Quantcast Choice Universal Tag in order to integrate it to a website to make it GDPR Compliant,
 I came up with the following problem:
 Although Quantcast Choice developers have made a fantastic job oversimplifying the use of their plugin,
 probably due to adversity reasons, they do not offer a way to block Google Analytics script before a visitor gives such consent.
  
 So my first thought, was wait a minute, almost everyone in my country uses Quantcast for GDPR compliance with their sites and Google Analytics for measuring data, how can they possibly be compliant if Quantcast gives no such option? So I started digging up some major websites, and to my surprise, I realised all of them loaded their Google Analytics script regardless of consent! 
 
 My second thought was creating a javascript that was handling the website cookies based on the Quantcast choice of the user, but soon enough I found out I could not deal with a specific bug that came up, such as cookies not working properly when a user declines, consents, declines and consents again(I know it's a far fetched scenario, but I could not let that slide). Based on the fundamental programmatic approach that I had, using no framework plus plain JS, I could not patch this bug. 

Therefore, for time saving reasons, I had to take a new approach, so i dug up how Quantcast Choice was made.
It uses CMP2 & CCPA API, so what better way can you find than learn a new API? :)
 
  Bottomline is that I created a JS using the aformed API, that checks each 0.1s(for a maximum of one minute) if a user has given all proper consents in order to run Google Analytics.
In order to run it, a user has to give direct consent to the 3 following sections: a) geolocaton data b) personalized data and measuring data c)access to device storage(in order to save cookies)