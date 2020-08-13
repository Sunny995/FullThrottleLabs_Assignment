
# FullThrottleLabs_Assignment


############  Overview ########################################



For the given requirement Of UI/UX, I have used Angular 10 Framework to build the user interface, which I find very useful to build scalable Single Page Applications.
Also, I have used Angular Material Library to use the datepicker for building the calendar option, to look for activities for a selected date.
If any queries with the installation of the framework locally. Go To: https://angular.io/guide/setup-local

For getting the mock data I have used json server , which can be configured using the steps provided in the below link.
https://medium.com/@websleengur/mock-data-for-angular-5-applications-with-json-server-part-1-d377eced223b


######### Structure And Description ###########################

Components :

This application consist mainly of four Components :
home, users-dash-board , user-activity , calendar. 
The path for the components is "app/components".

The users-dash-board consist of the UI for showing all the users. Clicking on a specific user , opens up all his activities .
The user-activity consist of the UI for showing selected user activities with date and time range in tabular format.
The users-dash-board and user-activity components are rendered in the home component.

The home component is rendered in the app.component.html, which is the main component html page.

The calendar component consists of a angular material datepicker which gives an option to see the selected user activities, for the chosen date on datepicker.
The calendar component is rendered in the user-activity component.


Service:

This application consist of one service : users-information.service, which has been used to get the mock data from the json server.
The mock data is provided in the "data.json" file.
The path for the service is "app/service/users-information.service.ts".


Interface:

This application consist one main Interface IUsers, which is used as a data transfer object while getting the data as an observable from the json server.
The path is "app/interfaces/IUsers.ts


################ Functioning ######################

When the application builds it shows names of all the users.
If we click on a name, the user is selected. Activities related to the selected user are displayed with date and time ranges in a tabular format.
Also a datepicker is provided to choose any date. If there are any activities of the selected user for the chosen date, it will be displayed.
Otherwise, a message will be displayed : "User has no activities."





********************************************************************* THANK YOU *************************************************************************************************************************





