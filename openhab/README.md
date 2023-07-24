# openHAB

## myopenHAB accounts

URL : [myopenhab.org](https://myopenhab.org/)

| Username               | Password         | Role  |
|------------------------|------------------|-------|
| test01@gmail.com       | user1234         | user  |
| jenkinsdniit@gmail.com | lU?8a!2uG2/j$rGk | admin |

## First start of openHAB

You will be prompted to create an initial user/password combination.
This user will have full access to the openHAB console, which is a powerful tool that allows you to monitor and modify the state of your openHAB installation.
It is therefore recommended to choose a strong password.

Once you have created your username and password, openHAB is already configured, so you can skip the setup by clicking on the `Skip Setup` text, then `OK`

## Floor plans location

The floor plans are located in the container at [conf/html/ressources/](./conf/html/ressources/) directory 
and in the project folder in the [resources/floor_plans](./resources/floor_plans) directory.

### How to add a floor plan

1. Put the file in the [conf/html/ressources/](./conf/html/ressources/) directory
2. Restart openHAB container (`docker-compose restart openhab`)
3. Go to the openHAB configuration webpage (example using [myopenhab.org](https://myopenhab.org/))
4. Add a floor plan
   - Click on `Settings` on the left panel
   - Click on `Pages` in the `Configuration` section
   - Click on the `+` button in the bottom right corner
   - Click on `Create floor plan`
5. Configure the floor plan
   - `Label` : give it a friendly name, example : `Building S: 4th floor plan`
   - `Sidebar & Visibility` : check `Show in sidebar`
   - `Image URL` : put the path to the image, example : `/static/ressources/(your_image)`
   - `Image Width` : put the width of the image (mandatory, if not entered, the image will be stretched)
   - `Image Height` : put the height of the image (mandatory, if not entered, the image will be stretched)
   - Click on `Run mode (CTRL+R)` : (optional) to see the floor plan
6. Add markers to display data on the plan  
   - Go in run mode 
   - Click on `Add Marker` then move it.
   - Click on it then click on `Configure`
     - `Name` : give it a friendly name, example : `Temp sensor 1`
     - `Item` : select the item to display
   - Click on `done`
   - Click on `Save (CTRL+S)`
