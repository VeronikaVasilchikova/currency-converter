# currency-converter

Here is an example of a currency converter to practice work with XMLHttpRequest-object.

Information is got from .json-file.
Event 'input' is added to input-field (with id 'rub').

1. The first way:
1.1 Create a new XMLHttpRequest-request
1.2 Initialize this object with method .open()
1.3 Set a header with method .setRequestHeader()
1.4 Send the request with method .send()
1.5 Check request state and status
1.6 Execute actions depending on conditions

2. The second way (with Promise):
2.1 Create a function getData() which returns promise
2.2 Create XMLHttpRequest-request inside promise
2.3 Execute function getData() inside event 'input'
