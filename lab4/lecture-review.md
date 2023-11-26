Alex Tsiogas C20336236 - Lab 4 Lecture Review

Q1
Streams in reactive program are an abstraction of data that may or may not arrive,
in the sense that they work with data in a less structured and more generalized way.
They deal with data only as it becomes available, and are prepared to react to data when it arrives,
rather than being manually triggered.

Streams implement the observer pattern, in the form of observables. Observables subscribe
to a subject (a stream), and are notified in the case of an event occuring, before reacting accordingly.
In this way, both the observer pattern and streams lend themselves to a reactive programming.

Streams can be used to model any scenario where data becomes available and is used over time.
An application of this might be live video feed - streams could allow video to be rendered
and displayed in real time as it becomes available. Also in chat applications where messages are
being continuously exchanged, subscribers could be set to react to the stream of messages coming in and deal with
them accordingly, witout requiring any refreshing of pages.


Q2
RxJS could be used to handle asynchronous network responses to API requests, by using the API Requests as observables.
In code this could be done by creating each API request we want in our interface, and having them return the rxjs "observable" object.
We can then subscribe to this object and deal with the responses reactively.

Due to their reactive nature streams are better suited for dealing with things like websockets, where responses are asynchronous.
Promises are less suited to dealing with asynchronous data flow. They are suited for simple single request-response cases, but in a live socket
where logical ordering of responses is required they can struggle and cause problems.


Q3
Tasks sharing global state can lead to unexpected behaviour and outcome of tasks, as tasks may try 
to access resources in the wrong sequence or at the wrong time. To alleviate this issue immutable data structures should
be used, or requests and callbacks should be nested or structured in such a way that tasks can only run when a seperate task has finished.