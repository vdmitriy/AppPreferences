//
//  applicationPreferences.h
//
//
//  Created by Tue Topholm on 31/01/11.
//  Copyright 2011 Sugee. All rights reserved.
//
// Updated for Phonegap 3.x by Dave Alden (dave@workingedge.co.uk) on 05 Oct 13

#import <Foundation/Foundation.h>

#import <Cordova/CDVPlugin.h>

@interface applicationPreferences : CDVPlugin
{

}

-	(void) getSetting:(CDVInvokedUrlCommand*)command;
-	(void) setSetting:(CDVInvokedUrlCommand*)command;
-	(NSString*) getSettingFromBundle:(NSString*)settingName;


@end
