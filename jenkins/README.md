# Jenkins

## 1. Unlock Jenkins
docker exec -it jenkins bash
cat /var/jenkins_home/secrets/initialAdminPassword
enter displayed password in jenkins web interface

## 2. Install plugins
Install suggested plugins (wait until the end of the installation).

## 3. Create an administrator account

suggested information for testing
- username : admin
- password : admin
- name : Dniit
- email : jenkinsdniit@gmail.com

## 4 Instance configuration

Don't change anything and click on "Save and done"

## 5 Start to use Jenkins

### Install more plugins
Go to Dashboard -> Manage Jenkins -> Plugins -> Available plugins
Search and install "Multibranch Scan Webhook Trigger"

### Setup credentials
Dashboard -> Manage jenkins -> Credentials -> (global) -> add credentials
- Kind: username with password
- Scope : global
- Username : JenkinsDniit
- Password: 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

### Setup item
Dashboard -> New Item
- Enter item name : SupervisionControlItem
- Click on "Multibranch Pipeline"
- Validate
- Display name : SupervisionControl
- Branch source -> select Github
- Select "JenkinsDniit/******"
- Repository HTTPS URL : https://github.com/LeBihanLeo/SupervisionControlDanang.git
- Click on validate and the following message must appear"Credentials ok. Connected to https://github.com/LeBihanLeo/SupervisionControlDanang."
- Select scan by webhook
