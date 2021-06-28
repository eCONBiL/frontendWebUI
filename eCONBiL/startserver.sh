#!/bin/bash

#Autor: Malte Garmhausen

arg=$1
if [ "$arg" == "up" ]
then
  forever start --uid "serve" node_modules/@angular/cli/bin/ng serve --host 192.168.23.229 --public-host http://econbil01.abatgroup.de --port 8002 --prod
elif [ "$arg" == "down" ]
then
  forever stop serve
  rm /home/econ/.forever/serve.log
elif [ "$arg" == "-h" ] || [ "$arg" == "h" ] || [ "$arg" == "help" ] || [ "$arg" == "--help" ]
then
  echo "+-------------------------------------------------------------------------------------------------------------+"
  echo " small script to bring up the eCONBiL-Angular web-project                                                      "
  echo " Options are:                                                                                                  "
  echo "   up    -- start the angular application with forever and ng serve - needs some time after startup...         "
  echo "            check on default domain or hosts ip with port 8002 to see the result                               "
  echo "   down  -- stop the angular web project and delete process log                                                "
  echo "   help  -- show this info message                                                                             "
  echo "+-------------------------------------------------------------------------------------------------------------+"
else
  echo "wrong argument input - options are: up, down, help"
fi

