## v3.3.1

#### Features/improvements
* _Rectify_ web console with [RxJS](https://github.com/Reactive-Extensions/RxJS) library
* Complete tests set for REST API
* End to end tests using the [protractor](http://angular.github.io/protractor) framework

#### Bug Fixes
* Activation/notification for an unknown endpoint should be 422 #17

----

## v3.3.0

#### Features/improvements
* _Promisify_ API implementation using [Q](https://github.com/kriskowal/q) library

#### Bug Fixes
* GUI is not aware when a new endpoint is added if the system passivates #13
* Validator unexpected error when REST API is used to directly add new endpoint #14
* Can not restart watherjs #15

----

## v3.2.0

#### Features/improvements
* Use SQLite for status history storage

#### Bug Fixes
* Duration does not reset on activation/deactivation via web console #11

----

## v3.1.1

#### Features/improvements
* Make the server API implementation consistent to asynch calls
* Unify the REST API implementation error handling
* Database operation abstraction (preparation for using sqlite as an alternative database)

#### Bug Fixes
* user defined history date range with future upper limit #9
* jump to specific history date range repetitively extends the range for one hour #10

----

## v3.1.0

#### Features/improvements
* Define custom date range at status history

----

## v3.0.0

#### Features/improvements
* Use [Angularjs](https://angularjs.org/) framework
* Use [UI Bootstrap](https://angular-ui.github.io/bootstrap/) library
* Use [Bootstrap](http://getbootstrap.com/) library

#### Bug Fixes
* Inconsistent rest api implementation for adding new endpoint #4
* Delete endpoint history on removal #5
* sort endpoints list by id #6
* history data problem in activation/deactivation endpoint #7

----

## v2.6.0

#### Features/improvements
* REST API for application settings retrieval and modification (only the service communication interval, at the moment).
* Configure connectors' connection timeout via web console.
* Configure application settings via web console.
* Use [EJS](http://www.embeddedjs.com/) as template engine

#### Bug Fixes
* status/actions icons are not displayed at firefox #3
* API documentation typos fixes/additions.

----

## v2.5.5

#### Bug Fixes
* web console timestamps are not displayed at UTC #2
* API documentation typos fixes/additions.

----

## v2.5.4

#### Features/improvements
* Documentation and examples updates.

----

## v2.5.3

#### Features/improvements
* Example with real time event notification update.

#### Bug Fixes
* Fix, on connection error a warning message should be appeared
* API documentation typos fixes/additions.

----

## v2.5.2

#### Features/improvements
* Example with real time event notification.
* Minor refactor.

#### Bug Fixes
* API documentation typos fixes/additions.

----

## v2.5.1

#### Features/improvements
* Real time notification for important events (endpoints status updated).
* Web console history chart, add button to reset the time range.

#### Design/implementation
* [socket.io](http://socket.io/) for real time event notification.

----

## v2.5.0

#### Bug Fixes
* Various bug fixes.

#### Features/improvements
* Save endpoint status transitions at persistent storage to provide endpoint status history.
* Expose queries for endpoint status history as REST service.
* Web console history chart implementation for visual representation of endpoint status history.
* [MongoDB](http://www.mongodb.org/) to persist the endpoints status transitions.

----

## v2.0.0

#### Bug Fixes
* Various bug fixes.

#### Features/improvements
* Expose functionality as REST services.
* [Backbone](http://backbonejs.org/) at watcher.js web console implementation.
* [RequireJS] (http://requirejs.org/) module loader.
* Persist changes at activation and notification state.
* Server side performance enchantments (async processing).
* Client side performance enchantments (more fine-grained ajax requests).