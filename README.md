
# Regulatory Oversight Management



## Development Guidance

### Solutions
__Do__ Always use Solutions, they should be segmented and relevant to what’s contained in them.  
__Do__ create components (entities, options sets, forms, views, etc...) in a desired solution.   

__DO NOT__ create components (entities, options sets, forms, views, etc...) outside of a solution.    
  > Why? Makes it easier to transfer customizations to other environments like QA and PROD and allows the ability to manage it in source control also helps to avoid dependencies issue when pushing to other environments.

### Adding existing Entities into a Solution.
__Do__ only bring only the relevant fields on an entity when brining into a solution  

__DO NOT__ include 'all components' or 'include entity metadata' when adding existing entity.  
  > Why? Helps to reduce dependencies and keep track of changes.

### Forms

__Do__ create your own custom/copy of "standard" form or view to keep the default as originals when making form changes.  

__DO NOT__ customize the Standard/default forms.  
  > Why? Allows to have a reference to an original copy and avoids cascading changes.
  
## Installing the Configuration Migration
* run ConfigurationMigration/installCrmSdkTools.ps1
  * this will download the configuration migration tool and other tools into a new "Tools" directory in the current directory 

### Export Configuration Data
* run the Configuration Migration Tool
* select the Export Data option
* create a connection with a user who has system admin priviledges on the environment
* select the BU_TEAM_ROLE_USER.xml file as the schema
* select the directory you want to export the data zip file
* select export data

### Import Configuration Data
* select the Import Data option
* create a connection with a user who has system admin priviledges on the environment
* select the data zip file from source control or exported using the export steps
* select the import button
* you will be told system users are being imported, and that requires a userImportMap file
* select the ImportUserMap.xml file from Source Control and continue the import

### Create a new User Import Map File
* a flow has been created that will query the users from the Dev environment and create an updated ImportUserMap.xml file in the ROM MSTeam Channel
* go to the dev environment of make.powerapps.com 
  * https://make.powerapps.com/environments/d53e333c-ff57-4199-ab2c-922cd31a4225/logicflows 
* go to flows -> teams flows
* run the Create User Mapping File


## Additional Resources
- [MS Power Platform Application Lifecycle Management Video](https://www.youtube.com/watch?v=xwCUJmrRI9E&t=1159s) In this session, you'll learn how to use Solutions and Azure DevOps to ensure your apps are protected in source control and your apps can be automatically deployed to other environments like test and production
