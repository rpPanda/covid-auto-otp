# Get me my goddamn vaccine

This only works if the phone you get OTPs on is an Android phone.

Things you'll need to have before you get this running:

1. [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)
1. [Google Messages](https://play.google.com/store/apps/details?id=com.google.android.apps.messaging&hl=en_IN&gl=US) as the default SMS app on your phone
1. [Node.js](https://nodejs.org/en/)
1. [Google Chrome](https://chrome.google.com)

## Setup

### Google Messages

1. Set Google Messages as your default SMS app
1. Log in to https://messages.google.com/web and start getting SMSes on your Google Chrome
1. On your Google Messages Web, open the conversation where you get OTPs from CoWIN. If you don't have any OTPs from CoWIN yet, try logging into CoWIN. When you do open the conversation, the URL looks something like this: https://messages.google.com/web/conversations/617 with the number `617` at the end replaced by something else.

### Tampermonkey

1. While still on the Google Messages conversation page, open Tampermonkey extension and click on "Create a new script..."
   ![Tampermonkey](https://i.imgur.com/WnJDdaN.png)
1. On the Tampermonkey page that just opened, replace the existing code with the one in `tampermonkey.js` file from this repo
1. On line 7 in the code set replace https://messages.google.com/web/conversations/617 URL with the URL of conversation with OTPs in your Google Messages Web. The number "617" would be changed by something else.
1. Refresh Google Messages Web page
