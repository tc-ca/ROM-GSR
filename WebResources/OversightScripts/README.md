# Steps to run this project on your desktop

1. Download VS Code
2. Install ES Lint Extension
3. Install Prettier Extension
2. Open OversightScripts folder using VS Code
3. Create XrmDefinitelyTyped.exe.config in \XrmDefinitelyTyped folder and add your username and password.
4. Run XrmDefinitelyTyped.exe (skip if no form change nor entity change)
5. npm install
6. npm run build
7. Take the .js file in \build and update the web resource file in Dynamics 365.
8. Don't forget to push your change if there is any.

**NOTE:** the mfaAppId and mfaReturnUrl in the sample below are dev/prototyping values provided by Microsoft. Don't use these values against PROD.

# XrmDefinitelyTyped.exe.config

```
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <appSettings>
    <add key="url" value="https://rom-dev-tcd365.crm3.dynamics.com/xrmservices/2011/Organization.svc" />
    <add key="username" value="username@tc.gc.ca" />
    <add key="out" value="../typings/XRM" />
    <add key="solutions" value="CarrierJasonOVS" />
    <add key="entities" value="msdyn_workorder,account" />
    <add key="web" value="" />
    <add key="jsLib" value="../src/lib" />
    <add key="mfaAppId" value="51f81489-12ee-4a9e-aaae-a2591f45987d" />
    <add key="mfaReturnUrl" value="app://58145b91-0c36-4500-8554-080854f2ac97"/>
    <add key="method" value="OAuth"/>
  </appSettings>
</configuration>
```
# Additional Resources
- https://github.com/delegateas/XrmDefinitelyTyped/wiki/Tool-usage
- https://reenhanced.com/2019/how-to-get-started-with-form-scripts-in-dynamics-365/
- https://dyncrmexp.com/2020/06/16/modern-web-resource-workspace-in-dynamics-365-part-1-typescript/
- https://www.oliverflint.co.uk/2020/03/07/D365-Typescript-Webresources-Part-1/
- https://github.com/delegateas/XrmFramework
- https://docs.microsoft.com/en-us/dynamics365/customerengagement/on-premises/developer/streamline-javascript-development-fiddler-autoresponder