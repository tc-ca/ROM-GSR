$basepath = "C:/Users/leblaaa/source/repos/ROM-GSR/ConfigurationMigration/"
$schemaFile = "$basepath/schema/CostRecoveryAttributes.xml"
$dataFile = "$basepath/data/CostRecoveryAttributes.zip"
$crmConnection = "AuthType=ClientSecret; url=https://tdgcore-dev-tcd365.crm3.dynamics.com; ClientId=a6adc57f-f130-4e0e-8cab-c0d6a26f8273; ClientSecret=2e5L2VU.an8-Smpcn.nu2wavk__sY5eocF"
$logWriteDirectory = "$basepath\logs\export\"

Install-Module -Name Microsoft.Xrm.Tooling.ConfigurationMigration -force

Export-CrmDataFile -SchemaFile $schemaFile -DataFile $dataFile -CrmConnection $crmConnection -Verbose -EmitLogToConsole -LogWriteDirectory $logWriteDirectory