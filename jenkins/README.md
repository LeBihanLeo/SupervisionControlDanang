##1 Unlock Jenkins
password : ea32e95d275149b8878708e28eb14e68

##2 Install plugins
Install suggested plugins (wait until the end of the installation).

##3 Create administrator account
suggested information for testing
- username : admin
- password : admin
- name : Dniit
- email : random

##4 Instance configuration
Dont change anything and click on "Save and done".

##5 Start to use Jenkins

## Install more plugins
Go to Dashboard -> Manage Jenkins -> Plugins -> Available plugins
Search and install "Multibranch Scan Webhook Trigger"

## Setup credentials
Dashboard -> Manage jenkins -> Credentials -> (global) -> add credentials
- Kind : username with password
- Scope : global
- Username : JenkinsDniit
- Password : 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

## Setup item
Dashboard -> New Item
- Enter item name : SupervisionControlItem
- Click on "Multibranch Pipeline"
- Validate
- Display name : SupervisionControl
- Branche source -> select Github
- Select "JenkinsDniit/******"
- Repository HTTPS URL : https://github.com/LeBihanLeo/SupervisionControlDanang.git
- Click on validate and the following message must apprear "Credentials ok. Connected to https://github.com/LeBihanLeo/SupervisionControlDanang."
- Select scan by webhook
