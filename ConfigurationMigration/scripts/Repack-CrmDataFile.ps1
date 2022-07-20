Install-Module -Name Xrm.Framework.CI.PowerShell.Cmdlets -Force

$basepath = "C:/Users/leblaaa/source/repos/ROM-GSR/ConfigurationMigration"

$combineDataXmlFile = $true
$dataZip = "$basepath/repacked/CostRecoveryAttributes.zip"
$extractFolder = "$basepath/extract"

If(!(test-path "$basepath/repacked"))
{
    Write-Host "$basepath/repacked folder does not exists."
    New-Item -ItemType Directory -Force -Path "$basepath/repacked"
    Write-Host "$basepath/repacked folder created."
}

Compress-XrmCMData -DataZip "$dataZip" -Folder "$extractFolder" -CombineDataXmlFile $combineDataXmlFile