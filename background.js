const defaultFilters = [
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
	"*://*.locanto.ca/*",
	"*://*.oodle.com/*",
	"*://*.classifiedads.com/*",
	"*://*.adpost.com/*",
	"*://*.gumtree.com/*",
	"*://*.geebo.com/*",
	"*://*.hoobly.com/*",
	"*://*.yelp.com/*",
	"*://*.olx.com/*",
	"*://*.hero-wars.com/*",
	"*://*.blockchain-life.com/*",
	"*://*.a-ads.com/*",
	"*://ads.google.com/*",
	"*://*.freeadstime.org/*",
	"*://*.findermaster.com/*",
	"*://*.advertiseera.com/*",
	"*://*.giganticlist.com/*",
	"*://*.wallclassifieds.com/*",
	"*://*.h1ad.com/*",
	"*://*.classifiedsfactor.com/*",
	"*://ads.shopolop.com/*",
	"*://ad.ologames.com/*",
	"*://ads.digitalmarketinghints.com/*",
	"*://*.angi.com/*",
	"*://*.bbb.org/*",
	"*://*.elocal.com/*",
	"*://*.ezlocal.com/*",
	"*://*.hotfrog.com/*",
	"*://*.insiderpages.com/*",
	"*://*.local.com/*",
	"*://*.manta.net/*",
	"*://*.merchantcircle.com/*",
	"*://*.submitexpress.com/*",
	"*://*.superpages.com/*",
	"*://*.thumbtack.com/*",
	"*://*.tupalo.com/*",
	"*://*.freeadstime.org/*",
	"*://*.findermaster.com/*",
	"*://*.advertiseera.com/*",
	"*://*.giganticlist.com/*",
	"*://*.adsthumb.com/*",
	"*://*.clickindia.com/*",
	"*://*.webhostingecommerce.org/*",
	"*://*.sell.com/*",
	"*://*.indialist.com/*",
	"*://*.locanto.in/*",
	"*://*.global-free-classified-ads.com/*",
	"*://rediff.Classifieds.com/*",
	"*://*.bechna.com/*",
	"*://*.adsglobe.com/*",
	"*://*.adpost.in/*",
	"*://*.quikr.com/*",
	"*://classifieds.ivarta.com/*",
	"*://*.ocala4sale.com/*",
	"*://*.bonqo.com/*",
	"*://*.traderonline.com/*",
	"*://*.claz.org/*",
	"*://*.adswale.in/*",
	"*://*.adpostbox.com/*",
	"*://*.classifieds.webindia123.com/*",
	"*://*.inetgiant.com/*",
	"*://*.yakaz.com/*",
	"*://*.pennysaverusa.com/*",
	"*://*.daype.com/*",
	"*://*.ziply.com/*",
	"*://*.adeex.in/*",
	"*://*.adlandpro.com/*",
	"*://*.thisismyindia.com/*",
	"*://*.salespider.com/*",
	"*://*.sify.com/*",
	"*://*.adsmantra.com/*",
	"*://*.freeadscity.com/*",
	"*://*.chooseyouritem.com/*",
	"*://*.rajb2b.com/*",
	"*://*.indyapulse.com/*",
	"*://*.bavun.in/*",
	"*://*.wantedwants.com/*",
	"*://*.classifieds4me.com/*",
	"*://*.e-classifieds.net/*",
	"*://*.classifieds.co.uk/*",
	"*://*.bizmartindia.com/*",
	"*://*.bharatpatal.org/*",
	"*://*.highlandclassifieds.com/*",
	"*://*.kijiji.com/*",
	"*://*.kugli.com/*",
	"*://*.droik.com/*",
	"*://*.itsmymarket.com/*",
	"*://sfgate.kaango.com/*",
	"*://*.freeadvertisingzone.com/*",
	"*://*.shiningindiaclassifieds.in/*",
	"*://*.free2post.in/*",
	"*://*.indianclassifiedsonline.in/*",
	"*://*.adspublish.in/*",
	"*://*.webhostingecommerce.org/*",
	"*://*.gyanijiworld.in/*",
	"*://*.usfreeads.com/*",
	"*://*.elclasificado.com/*",
	"*://*.gyanijiclassifieds.com/*",
	"*://*.adfreeposting.com/*",
	"*://*.thefreeadforum.com/*",
	"*://*.malayaliclassifieds.com/*",
	"*://*.topclassifieds.com/*",
	"*://*.indiadynamics.com/*",
	"*://*.indiacatalog.com/*",
	"*://*.ezclassifiedads.com/*",
	"*://*.fmclassifieds.com/*",
	"*://*.classifiedsdekho.com/*",
	"*://*.indian-freeads.com/*",
	"*://*.freeclassads.eu/*",
	"*://*.gofreeclassified.com/*",
	"*://*.australialisted.com/*",
	"*://*.namanas.com/*",
	"*://*.izydaisy.com/*",
	"*://*.indiamart.com/*",
	"*://*.clutch.co/*",
	"*://*.10dayads.com/*",
	"*://*.ibackpage.com/*",
	"*://*.classifiedsciti.com/*",
	"*://*.classtize.com/*",
	"*://*.india-classifieds.in/*",
	"*://*.way2ad.com/*",
	"*://*.delhincrads.com/*",
	"*://*.classifiedlane.com/*",
	"*://*.tuffclassified.com/*",
	"*://*.nextfreeads.com/*",
	"*://*.nullads.org/*",
	"*://*.webclassifieds.us/*",
	"*://*.classifiedslive.com/*",
	"*://*.classifiedsfree.in/*",
	"*://*.cityclassify.com/*",
	"*://*.classifiedexpert.com/*",
	"*://*.justlanded.com/*",
	"*://*.freeadsciti.com/*",
	"*://*.indoclassified.com/*",
	"*://*.findinall.com/*",
	"*://*.koolbusiness.com/*",
	"*://*.justclassified.co.in/*",
	"*://*.freeadsbox.com/*",
	"*://web-free-ads.com/*",
	"*://*.mypetads.com/*",
	"*://*.freeads24.eu/*",
	"*://*.99localads.com/*",
	"*://*.jobsclassified.in/*",
	"*://*.digitalclassifieds.net/*",
	"*://*.freeprachar.com/*",
	"*://*.adskeep.com/*",
	"*://*.nowclassifieds.com/*",
	"*://*.hotfreelist.com/*",
	"*://*.adway24.com/*",
	"*://*.ukadslist.com/*",
	"*://*.advertigo.net/*",
	"*://*.click4post.com/*",
	"*://*.web-free-ads.com/*",
	"*://*.adazpoint.com/*",
	"*://*.classified4u.biz/*",
	"*://*.adsnity.com/*",
	"*://*.bestclassifiedsusa.com/*",
	"*://*.k2classifieds.com/*",
	"*://*.freeadsonline.biz/*",
	"*://*.freeadshome.com/*",
	"*://*.princeclassified.com/*",
	"*://*.youpost.org/*",
	"*://*.adsblue.com/*",
	"*://*.craftstylish.com/*",
	"*://*.stclassifieds.sg/*",
	"*://*.quickfinds.in/*",
	"*://*.indiaaclick.com/*",
	"*://*.adsyellowpages.com/*",
	"*://*.askmeclassifieds.com/*",
	"*://*.freeadsbook.com/*",
	"*://*.jumpindeals.com/*",
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)
