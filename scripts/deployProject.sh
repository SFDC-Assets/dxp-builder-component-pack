
echo "*** Run Test Cases W\Coverage ..."
sfdx force:apex:test:run -c -u CDOPackageManagerScratch -r human

#No Longer Needed
#echo "*** Creating Managed Package ..."
#sfdx force:package:create -n "DXP Builder Component Pack" -t Unlocked --nonamespace -r force-app --targetdevhubusername CDOPackageManager

echo "*** Creating Managed Package Version..."
sfdx force:package:version:create --package "DXP Builder Component Pack" -x --wait 10 --codecoverage --definitionfile config/project-scratch-def.json --targetdevhubusername CDOPackageManager

echo "*** Promoting Latest Managed Package ..."
sfdx force:package:version:promote -p $(sfdx force:package:version:list -p 'DXP Builder Component Pack' -o CreatedDate --concise | tail -1 | awk '{print $3}')  --targetdevhubusername CDOPackageManager
