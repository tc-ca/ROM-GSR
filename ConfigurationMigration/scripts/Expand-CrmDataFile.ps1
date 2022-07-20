Install-Module -Name Xrm.Framework.CI.PowerShell.Cmdlets -Force

$basepath = "C:/Users/leblaaa/source/repos/ROM-GSR/ConfigurationMigration"

$splitDataXmlFile = $true
$sortDataXmlFile = $true
$dataZip = "$basepath/data/CostRecoveryAttributes.zip"
$extractFolder = "$basepath/extract"

If(!(test-path '$basepath/data/unpacked'))
{
    Write-Host "$basepath/data/unpacked folder does not exists."
    New-Item -ItemType Directory -Force -Path '$basepath/data/unpacked'
    Write-Host "$basepath/data/unpacked folder created."
}

If(!(test-path '$basepath/data/extract'))
{
    Write-Host "$basepath/data/extract folder does not exists."
    New-Item -ItemType Directory -Force -Path '$basepath/data/extract'
    Write-Host "$basepath/data/extract folder created."
}

Expand-XrmCMData -DataZip $dataZip -Folder $extractFolder -SplitDataXmlFile $splitDataXmlFile -SortDataXmlFile $sortDataXmlFile