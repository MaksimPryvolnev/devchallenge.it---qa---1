@NewHotel
Feature: Test New Hotel page functionality:
    Background:
        Given User is "Guest"

    @NewHotelFromWelcomePage
    Scenario: Verify that user can open New Hotel page
        Given User is on the welcome page
        When User selects "Article->New->Hotel"
        Then User should see that Register new Hotel page is displayed
            And User should see that Data section is displayed on Register new Hotel
            And User should see that save button is displayed on Register new Hotel

    @NewHotelNameField
    Scenario:  Verify that user can edit Name field
        Given User is on the register new hotel page
        Then User should see that Name field is displayed in Data section of Register new Hotel page
            And User should see that Name field is marked with asterisk
            And User should see that Name field is editable
            And User should see that Name field allows to input alphanumeric characters
        When User sets "" to the input Name field
            And User sets "6/2/19" to the input Date of Construction field
            And User selects Ukraine from Country dropdown
            And User selects Kyiv from City dropdown
            And User sets "Description" to the input Short Description field
            And User sets "Long Description" to the input Description field
            And User clicks on the element registerNewHotelSaveButton
        Then User should see that a required error message is displayed for Name field
        When User clicks on the back button
        When User sets "Test Hotel" to the input Name field
            And User sets "6/6/19" to the input Date of Construction field
            And User selects USA from Country dropdown
            And User selects New York from City dropdown
            And User sets "Best hotel" to the input Short Description field
            And User sets "One of the best hotels" to the input Description field
            And User clicks on the element registerNewHotelSaveButton
        Then User should see that hotel was added to the list

    @NewHotelGlobalRatingField
    Scenario: Verify that user can edit Global Rating field
        Given User is on the register new hotel page
        Then User should see that Global Rating field is displayed in Data section of Register new Hotel page
            And User should see that Global Rating field allows to rate the hotel (0-5 stars)
        When User sets "Test Hotel with rating" to the input Name field
            And User clicks on 5th rating star
            And User sets "6/6/19" to the input Date of Construction field
            And User selects USA from Country dropdown
            And User selects New York from City dropdown
            And User sets "Best hotel with rating" to the input Short Description field
            And User sets "One of the best hotels with rating" to the input Description field
            And User clicks on the element registerNewHotelSaveButton
        Then User should see that hotel was added to the list

    @NewHotelDateOfConstructionField
    Scenario: Verify that user can add Date of Construction of new hotel
        Given User is on the register new hotel page
        Then User should see that Date of Construction field is displayed in Data section of Register new Hotel page
            And User should see that Date of Construction field is marked with asterisk
            And User should see that Date of Construction field is editable
        When User sets from console "19-6-6" to the input Date of Construction field
            And User sets "Test Hotel" to the input Name field
            And User selects USA from Country dropdown
            And User selects New York from City dropdown
            And User sets "Best hotel" to the input Short Description field
            And User sets "One of the best hotels" to the input Description field
            And User clicks on the element registerNewHotelSaveButton
        Then User should see that a format error message is displayed for Date of Construction field
        When User sets "" to the input Date of Construction field
            And User clicks on the element registerNewHotelSaveButton
        Then User should see that a required error message is displayed for Date of Construction field
        When User sets "6/6/19" to the input Date of Construction field
            And User clicks on the element registerNewHotelSaveButton
        Then User should see that hotel was added to the list

    @NewHotelCountryField
    Scenario: Verify that user can add Country of new hotel
        Given User is on the register new hotel page
        Then User should see that Country field is displayed in Data section of Register new Hotel page
            And User should see that Country field is marked with asterisk
            And User should see that Country dropdown is editable
        When User sets "Test Hotel" to the input Name field
            And User sets "6/6/19" to the input Date of Construction field
            And User sets "Best hotel" to the input Short Description field
            And User sets "One of the best hotels" to the input Description field
            And User clicks on the element registerNewHotelSaveButton
        Then User should see that a required error message is displayed for Country field
        When User selects USA from Country dropdown
            And User selects New York from City dropdown
            And User clicks on the element registerNewHotelSaveButton
        Then User should see that hotel was added to the list

    @NewHotelCityField
    Scenario: Verify that user can add City of new hotel
        Given User is on the register new hotel page
        Then User should see that City field is displayed in Data section of Register new Hotel page
            And User should see that City field is marked with asterisk
        When User selects Ukraine from Country dropdown
            And User should see that City dropdown is editable
        When User sets "Test Hotel" to the input Name field
            And User sets "6/6/19" to the input Date of Construction field
            And User selects USA from Country dropdown
            And User sets "Best hotel" to the input Short Description field
            And User sets "One of the best hotels" to the input Description field
            And User clicks on the element registerNewHotelSaveButton
        Then User should see that a required error message is displayed for City field
        When User selects New York from City dropdown
            And User clicks on the element registerNewHotelSaveButton
        Then User should see that hotel was added to the list

    @NewHotelShortDescriptionField
    Scenario: Verify that user can add Short Description of new hotel
        Given User is on the register new hotel page
        Then User should see that Short Description field is displayed in Data section of Register new Hotel page
            And User should see that Short Description field is marked with asterisk
            And User should see that Short Description field is editable
            And User should see that Short Description field allows to input alphanumeric characters
        When User sets "Test Hotel Short Description test" to the input Name field
            And User sets "6/6/19" to the input Date of Construction field
            And User selects USA from Country dropdown
            And User selects New York from City dropdown
            And User sets "" to the input Short Description field
            And User sets "One of the best hotels" to the input Description field
            And User clicks on the element registerNewHotelSaveButton
        Then User should see that a required error message is displayed for Short Description field
        When User sets "Hotel with short description" to the input Short Description field
            And User clicks on the element registerNewHotelSaveButton
        Then User should see that hotel was added to the list

    @NewHotelDescriptionField
    Scenario: Verify that user can add Description of new hotel
        Given User is on the register new hotel page
        Then User should see that Description field is displayed in Data section of Register new Hotel page
            And User should see that Description field is marked with asterisk
            And User should see that Description field is editable
            And User should see that Description field allows to input alphanumeric characters
        When User sets "Test Hotel Description test" to the input Name field
            And User sets "6/6/19" to the input Date of Construction field
            And User selects USA from Country dropdown
            And User selects New York from City dropdown
            And User sets "One of the best hotels" to the input Short Description field
            And User sets "" to the input Description field
            And User clicks on the element registerNewHotelSaveButton
        Then User should see that a required error message is displayed for Description field
        When User sets "Hotel with description" to the input Description field
            And User clicks on the element registerNewHotelSaveButton
        Then User should see that hotel was added to the list

    @NewHotelNotesField
    Scenario: Verify that user can add Notes of new hotel
        Given User is on the register new hotel page
        Then User should see that Notes field is displayed in Data section of Register new Hotel page
            And User should see that Notes field is editable
            And User should see that Notes field allows to input alphanumeric characters
        When User sets "Test Hotel With Empty Notes" to the input Name field
            And User sets "1/1/18" to the input Date of Construction field
            And User selects USA from Country dropdown
            And User selects New York from City dropdown
            And User sets "Best hotel" to the input Short Description field
            And User sets "One of the best hotels" to the input Description field
            And User clicks on the element registerNewHotelSaveButton
        Then User should see that hotel was added to the list
        Given User is on the register new hotel page
            And User sets "Test #2 Hotel With Notes" to the input Name field
            And User sets "1/1/18" to the input Date of Construction field
            And User selects USA from Country dropdown
            And User selects New York from City dropdown
            And User sets "Best hotel" to the input Short Description field
            And User sets "One of the best hotels" to the input Description field
            And User sets "Some notes about hotel hotels" to the input Notes field
            And User clicks on the element registerNewHotelSaveButton
        Then User should see that hotel was added to the list