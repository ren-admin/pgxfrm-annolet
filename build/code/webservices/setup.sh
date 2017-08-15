
#! bash script for setting up enviornment for webservices

sudo apt-get install python-virtualenv

virtualenv flask

flask/bin/pip install flask

flask/bin/pip install requests

flask/bin/pip install bs4

flask/bin/pip install -U flask-cors
