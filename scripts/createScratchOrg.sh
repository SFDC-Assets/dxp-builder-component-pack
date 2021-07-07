#!/bin/bash

echo "*** Creating scratch org ..."
sfdx force:org:create -f config/project-scratch-def.json --setdefaultusername --setalias DXPBuilderComponentPackScratch -d 30

echo "*** Pushing metadata to scratch org ..."
sfdx force:source:push

echo "*** Assigning permission set to your users ..."
#sfdx force:user:permset:assign -n DXPBuilderComponentPackScratch -u scratch

echo "*** Generating password for your users ..."
#sfdx force:user:password:generate --targetusername DXPBuilderComponentPackScratch

echo "*** Setting up debug mode..."
sfdx force:apex:execute -f scripts/apex/setDebugMode.apex

echo "*** Creating Debug Community..."
sfdx force:community:create --name "DXP BCP Feature Showcase" --templatename "Build Your Own (LWR)" --urlpathprefix customers --description "DXP Builder Component Pack Feature Showcase Community"

echo "*** Opening Org"
sfdx force:org:open
