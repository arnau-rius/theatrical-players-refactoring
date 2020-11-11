Theatrical Players Refactoring Kata
====================================

The first chapter of ['Refactoring' by Martin Fowler, 2nd Edition](https://www.thoughtworks.com/books/refactoring2) contains a worked example of this exercise, in javascript. That chapter is available to download for free. 

Kata
---------------
Image a company of theatrical players who go out to various events performing plays. Typically, a customer will request a few plays and the company charges them based on the size of the audience and the kind of play they perform. There are currently two kinds of plays that the company performs: tragedies and comedies. As well as providing a bill for the performance, the company gives its customers “volume credits” which they can use for discounts on future performances—think of it as a customer loyalty mechanism.

The performers store data about their plays in a simple JSON file that looks something like this:

`plays.json`
```json
{
"hamlet": {"name": "Hamlet", "type": "tragedy"}, "as­like": {"name": "As You Like It", "type": "comedy"}, "othello": {"name": "Othello", "type": "tragedy"}
}
```

The data for their bills also comes in a JSON file:
`invoices.json`
```json
{
    "customer": "BigCo",
    "performances": [
        {
            "playID": "hamlet",
            "audience": 55
        },
        {
            "playID": "as-like",
            "audience": 35
        },
        {
            "playID": "othello",
            "audience": 40
        }
    ]
}
```

The code that prints the bill is this [simple function](./src/statement.js).

Running that code on the test data files above results in the following output:

```
Statement for BigCo
    Hamlet: $650.00 (55 seats)
    As You Like It: $580.00 (35 seats)
    Othello: $500.00 (40 seats)
Amount owed is $1,730.00 You earned 47 credits
```

Automated tests
---------------
In his book Fowler mentions that the first step in refactoring is always the same - to ensure you have a solid set of tests for that section of code. However, Fowler did not include the test code for this example in his book. I have used an [Approval testing](https://medium.com/97-things/approval-testing-33946cde4aa8) approach and added some tests. I find Approval testing to be a powerful technique for rapidly getting existing code under test and to support refactoring. You should review these tests and make sure you understand what they cover and what kinds of refactoring mistakes they would expect to find.

[Initial Code](https://github.com/emilybache/Theatrical-Players-Refactoring-Kata/blob/master/README.md)
