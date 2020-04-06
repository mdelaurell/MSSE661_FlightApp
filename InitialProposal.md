Airline Travel Booking System Requirements Document
Prepared by Michael De Laurell
March 15th, 2020
1

 Project Requirements Document for Airline Travel Booking System 2 Project Description
The Airline Booking software system is a java based system to allow customer to view flights, create reservations based on flight segments, and managed their profile information. The system will allow a manager to view flights, perform operation to add/cancel/update flight information, generate a report and manage profile data. Customers will be required to register in the system with name, address, username and password, email address, as well as credit card information (optional), including a 16-digit card number and a 4-digit expiration date prior to accessing the system. The system will have a page for a traveler to log in with username and password. The system will be able to handle flight management, reservation and booking management for a variety of airlines and routes (departing from and arrival at) operations. The customer will be able to save, cancel reservations and booking from within the application. Managers must be able to add, cancel and update flights from the system. Managers must be generate an inventory report for the system. When adding a flight, the system must allow to enter an airline code, name, flight number, departure location, departure day of the week/time, arrival location, arrival day of the week/time, cost of business class and cost of economy class ticket. Specific fees may be added if a bike is turned in late, if there is a reservation change or there is a cancellation. Bike rental rates must be modifiable. Reservations may be changed or cancelled until 24 hours before the scheduled rental. The system must be able to generate reports.

 Project Requirements Document for Airline Travel Booking System 3 Organization of the Problem
All of the actors using the system will have a user interface to help perform any actions. Customers will have a general screen with access to functions that will allow them to browse flight selection using specific search criteria such as departure and arrival date/time and location, number of passengers, one-way or round trip. A list of flights will be presented to the customer with departure/arival and cost information. The display flight will be +/- a specified number of hours. They will be able to select up to two flight segments. Once they have completed their itinerary, they will have the option to reserve it, and once reserved the option to purchase creating a booking. A credit card will be necessary for the purchase of any booking. The customer will have the ability to cancel an itinerary from their itinerary list. cannot navigate out of the application while using the tablet. A bluetooth credit card reader can be paired with the tablet to allow the customers to swipe their credit cards to pay. Staff that sign into the system with their personal log-in information will have access to extra features that allow them to be notified when a reservation is made, allow them to record a bikes return time and record the physical state it is in. Managers will have a higher access level where they can use these same features, as well as more options including setting any extra fees to a customer’s bill, adding or removing a bike from the available inventory, modifying any bike rental rates and generating reports that show inventory and rental history. These extra options will be available to them as well as any owners that sign into the system with their personal log-in details.

 Project Requirements Document for Airline Travel Booking System 4 Stakeholders / Actors
Customers (Actor) - They can search for, reverse, change or cancel existing itineraries and pay for an itinerary with a credit card.
Manager (Actor) - They can add, change or cancel flights in the system. They can run a report on inventory.
Developers (Non-Actor) - The people programming the system.

 Project Requirements Document for Airline Travel Booking System 5 UML Use Case Diagram / Description
 
 Project Requirements Document for Airline Travel Booking System 6
    Use case name:
Search Flight
Use case ID:
001
Primary actors:
Customer
Secondary actors:
 Brief description:
Customer searches through the Flights
Preconditions:
The user wants to see available flight based on Search criteria of
Flow of events:
1. The customer accesses the system through the swing-ui
2. Chooses the reservation
3. Uses search criteria to specify
departure or arrival date/time and
location..
4. Browses through the available flights
available.
5. Select one or more flights as part of
an itinerary.
6. Update the status of a itinerary to
reserved when saved by customer, booked when paid, cancelled when deleted by the customer.
Post-conditions:
 Priority:
 Alternative flows and exceptions:
 Non-behavioral requirements:
 Assumptions:
 Issues:
 Source:
Airline Travel Booking System
              
 Project Requirements Document for Airline Travel Booking System 7
    Use case name:
Manage Flights
Use case ID:
002
Primary actors:
Manager
Secondary actors:
 Brief description:
Manager Manages Flights
Preconditions:
Has already log into the system
Flow of events:
1. While browsing, the customer can add a bike or several bikes to the order.
2. The manager can add a flight to the system with airline code, name, flight number, departure location, departure day of the week/time, arrival location, arrival day of the week/time, cost of business class and cost of economy.
3. The manager can update a flight in the system
4. The manager can cancel a flight in the system
5. The manager can generate a report from the system.
Post-conditions:
The manager has update the system with information which is reflected in the customer search area.
Priority:
 Alternative flows and exceptions:
 Non-behavioral requirements:
 Assumptions:
 Issues:
 Source:
Airline Travel Booking System
              
 Project Requirements Document for Airline Travel Booking System 8
 