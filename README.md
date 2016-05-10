URL-Debug
---------

URL-Debug is a minimalist chrome extension that parses a URL into its respective components so that it can easily be analyzed.  It has been designed with simplicity in mind and has no production/stage dependencies.

###Local Setup
To get set up locally first clone this repo:

```
$ git clone git@github.com:Opus1no2/URL-Debug.git
```
After cloning the repo run:

```
npm install
```
###Installing on Chrome
After finishing the local setup you can install on Chrome by navigating to

```
chrome://extensions
```

Next select 'Load unpacked extension...'. When prompted, paste the path to the app directory:

```
/your/path/to/URL-Debug/app
```
The extenion should be installed and available after choosing 'select'.

###Testing

Tests are run using the Intern test framework.  Before running the tests make sure to set browser stack environment variables:

```
export BROWSERSTACK_USERNAME=<your-username>
export BROWSERSTACK_ACCESS_KEY=<your-access-key>
```
Once your browserstack credentials are set just run:

```
npm test
```

###Contributing
Feel free to make a pull request or submit issues!


