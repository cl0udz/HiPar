![watcher.js](http://jpsoroulas.github.io/watcherjs/images/logo-2.jpg)

__Watcher.js__ is a [Node.js](https://nodejs.org/)/[Express](http://expressjs.com/) based application that can be used to monitor service status.
It is not a competitor of [nagios](http://www.nagios.org/) or [zabbix](http://www.zabbix.com/) or any other advanced monitoring tool.
However, it can be a solution for simple cases.
The application architecture is simple. At regular intervals service specific defined messages,
either as http requests or as raw data to sockets, are send to the service endpoints to find out their status.
On the service status resolution, the status is stored internally and is made available either programmatically or
via REST requests. The application, at design level, is extensible since custom defined behaviors can be easily
applied.

----

## Architecture overview

The main application components follows:

### _[Resolution strategies and status resolver](http://htmlpreview.github.io/?https://github.com/jpsoroulas/watcherjs/blob/master/doc/api/modules/resolvers.html)_
The _status resolver_ implements the context for applying the strategy for service status resolution, whereas the
_resolution strategy_ the strategy itself. The strategy is described by a set of methods. Each method is called at a
specific stage during the conversation with the endpoint and returns the outcome of the service status.
The __resolution strategy__ is application's __extension point__ since custom defined strategies can be applied.
Note that the user can independently register any number of resolution strategies and refer to them by their ids.
A service can be marked as:

 * _up_, when the service is up and running.
 * _down_, when the service is down.
 * _undetermined_, when no decision can be made.
 * _unreachable_, status that is used by the connector when no connection with the endpoint can be made.

Detailed documentation and examples can be found at:
[resolvers](http://htmlpreview.github.io/?https://github.com/jpsoroulas/watcherjs/blob/master/doc/api/modules/resolvers.html),
[socket-connector-extended.js](examples/socket-connector-extended.js) and [http-connector-extended.js](examples/http-connector-extended.js)

### _[Connectors](http://htmlpreview.github.io/?https://github.com/jpsoroulas/watcherjs/blob/master/doc/api/modules/connectors.html)_
A connector is responsible for connecting, communicating and determining the service status using the _status resolver_
along with the appropriate _resolution strategy_. Each connector handles a specific type of communication with an _endpoint_.
Currently there are two types of connectors, the _socket connector_ that enables the communication via raw socket
(the data is transmitted as utf-8 encoded string) and the _http connector_ that makes possible the communication via
http(s) protocol.

Detailed documentation and examples can be found at:
[connectors](http://htmlpreview.github.io/?https://github.com/jpsoroulas/watcherjs/blob/master/doc/api/modules/connectors.html),
[socket-connector.js](examples/socket-connector.js), [socket-connector-extended.js](examples/socket-connector-extended.js),
[http-connector.js](examples/http-connector.js) and [http-connector-extended.js](examples/http-connector-extended.js)

### _[Watcher](http://htmlpreview.github.io/?https://github.com/jpsoroulas/watcherjs/blob/master/doc/api/modules/watcher.html)_
This is the main application component. It provides the factory method for creating an application instance.
The application configuration consists of two parts; the one that refers to the express framework that implements
application's http interface, and the other that refers to the service endpoints.

Detailed documentation and examples can be found at:
[watcher](http://htmlpreview.github.io/?https://github.com/jpsoroulas/watcherjs/blob/master/doc/api/modules/watcher.html),
[watcher-extended.js](examples/watcher-extended.js) and [watcher-minimal.js](examples/watcher-minimal.js)

### _[REST API](http://htmlpreview.github.io/?https://github.com/jpsoroulas/watcherjs/blob/master/doc/api/modules/watcher-http.html)_
The entire application API is exposed as REST services. For the REST API implementation
the [express](http://expressjs.com) web framework is used. It is worth mentioning that the user can define
__route extension points__ in order to build custom responses for the status requests.

Detailed information about the REST interface and examples can be found at:
[watcher-http](http://htmlpreview.github.io/?https://github.com/jpsoroulas/watcherjs/blob/master/doc/api/modules/watcher-http.html) and
[watcher](http://htmlpreview.github.io/?https://github.com/jpsoroulas/watcherjs/blob/master/doc/api/modules/watcher.html) and
[watcher-extended.js](examples/watcher-extended.js)

### Real time event notification
A [socket.io](http://socket.io/) client can be used for real time event notification from the system. Currently,
a client can be notified for the endpoints status updates (this feature is used by the web console
to update the display of the monitored endpoints). More information and examples can be found at:
[watcher events](http://htmlpreview.github.io/?https://github.com/jpsoroulas/watcherjs/blob/master/doc/api/classes/WatcherEvents.html) and
[real-time-notification](examples/real-time-notification.html)

### Watcher web console
On top of the application's REST services, a simple but handy web GUI is implemented, the _watcher web console_.
The console enables the user to dynamically add/remove/modify and monitor endpoints visually.
It can be accessed at http://localhost:`<port>`/console, where `<port>` the http-server port defined at
application startup (7777, if default configuration is used).
Screenshots from the console follow below.

The console illustrates the list of the monitored endpoints along with their related information.
More specifically, the endpoint id (Id), the endpoint description (Description), the endpoint status (Status),
the timestamp of the current status (Timestamp) and the period where the current status has lasted (Duration).
At the column 'Actions' the user can activate/deactivate the endpoint (eye icon),
enable/disable notification (mail icon), delete the endpoint (cross icon) and show the endpoint status history chart
(the last icon). Note that the deletion causes the permanent endpoint information removal from the storage
(the dynamically added endpoints from the console are stored at the filesystem under the directory _storage_, see at
[watcher](http://htmlpreview.github.io/?https://github.com/jpsoroulas/watcherjs/blob/master/doc/api/modules/watcher.html))
At the bottom of the page some statistical is presented. All times are expressed as __UTC__.

On the menu 'Add endpoint' selection, the form of adding a new endpoint is displayed. The parameters that the user
should set depends on the connector type ('socket' or 'http(s)'). Note the drop-down list 'Resolution strategy' where
an unbound resolution strategy (if any) can be selected. On the menu 'Settings' selection, the form for updating application 
settings is displayed. Currently, only the _service communication interval_ can be modified.



![Console](http://jpsoroulas.github.io/watcherjs/images/console-ng.jpg)
![Endpoint socket](http://jpsoroulas.github.io/watcherjs/images/endpoint-socket-ng.jpg)

![Status history](http://jpsoroulas.github.io/watcherjs/images/status-history-ng.jpg)

----

## API / REST API summary
The application features can be summarized as follows:

  * Get information/status for endpoint(s)
  * Add/remove endpoint
  * Activate/deactivate endpoint
  * Enable/disable email notification on erroneous service status
  * Store endpoint configuration (at the file system for easy modification)
  * Query endpoint(s) status history
  * Get/update application settings

## Extension points
The application's extensions points can be summarized as follows:

  * Define custom _status resolution strategy_ for specific endpoint
  * Define pool of custom _unbound status resolution strategies_
  * Define route extensions for building custom responses for the _status requests_

----

## Release Notes
Changelogs and release notes can be found at [changelog](https://github.com/jpsoroulas/watcherjs/blob/master/changelog.md)
or at [releases](https://github.com/jpsoroulas/watcherjs/releases).

## Important releases
  * [Rectify web console](https://github.com/jpsoroulas/watcherjs/releases/tag/v3.3.1)
  * [Promisify API implementation](https://github.com/jpsoroulas/watcherjs/releases/tag/v3.3.0)
  * [AngularJS and UI Bootstrap at web console](https://github.com/jpsoroulas/watcherjs/releases/tag/v3.0.0)
  * [Endpoints status history](https://github.com/jpsoroulas/watcherjs/releases/tag/v2.5.0)
  * [Expose functionality as REST services and Backbone at web console](https://github.com/jpsoroulas/watcherjs/releases/tag/v2.0.0)

## Techinical notes
Starting from version [v3.0.0](https://github.com/jpsoroulas/watcherjs/releases/tag/v3.0.0), the web console 
implementation is based on the [AngularJS](https://angularjs.org/) and the [UI Bootstrap](https://angular-ui.github.io/bootstrap/), 
whereas in older versions (2.x), the [Backbone.js](http://backbonejs.org/) and the [JQuery UI](https://jqueryui.com/) are used. 
Comparing the two implementation approaches, using AngularJS seems to be less boilerplate and cleaner code than using Backbone.
Moreover, the usage of Promises (with the help of the excellent [Q](https://github.com/kriskowal/q) library) and the adaption of 
the Reactive programming style at the web console implementation (using the awesome [RxJS](https://github.com/Reactive-Extensions/RxJS) library),
at versions [v3.3.0](https://github.com/jpsoroulas/watcherjs/releases/tag/v3.3.0) and [v3.3.1](https://github.com/jpsoroulas/watcherjs/releases/tag/v3.3.1)
respectively, have significantly improved the asynchronous control flow and the error handling.

----

## Installation
* Install [nodejs](https://nodejs.org/)
* Optionally you can install the [mongoDB](http://www.mongodb.org/). Otherwise, the default 
database engine [SQLite3](http://sqlite.org/) will be used (for configuration see at API documentation)
* Download the project and extract it at a desire location
* Under the project's root directory execute the following command to download and install project dependencies:
```
$ npm install
```

The application has been tested with node version v0.12.7 under CentOS 6.7


## Docs/Examples
* [API documentation](https://github.com/jpsoroulas/watcherjs/blob/master/doc/api)
* [Examples](examples/)
* [Unit tests](test/unit)
* [E2E tests](test/e2e)
* [Project site](http://jpsoroulas.github.io/watcherjs/)

## Quick Start
Start the watcher.js with default configuration as show at the example
[watcher-minimal.js](examples/watcher-minimal.js) and access the web console at
```
http://localhost:7777/console
```

----

## License
Distributed under the terms of [the MIT license](LICENSE-MIT).

----

Copyright &copy; 2015 John Psoroulas
