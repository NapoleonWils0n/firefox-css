# Firefox userContent.css

* Open Firefox and press Alt to show the top menu, then click on Help → Troubleshooting Information
* Click the Show Folder button beside the Profile Folder entry
* Create a folder named chrome in the directory that opens
* In the chrome folder create a css file with the name userContent.css
* Copy the following code to userContent.css, replacing "example.com" with the website you want to modify and your own custom CSS, and restart Firefox:

@-moz-document domain(example.com) {
    img { opacity: 0.05 !important; }
}

## Firefox blank page solarized

The userContent.css will also apply the solarized dark theme to Firefox's newtab, blank page and home page

Open Firefox's preference and change the Homepage and new windows to use Firefox Home (default),  
and newtabs to Blank page.

We have to set the Homepage to Firefox Home and not blank page because it doesnt seem to pick up the colour scheme on the homepage otherwise

## Google search solarized

Below is an example of Firefox userContent.css styling google.com using the solarized dark colour scheme,  
included in the userContent.css file

![image](https://raw.githubusercontent.com/NapoleonWils0n/firefox-css/master/google-solarized.png)
