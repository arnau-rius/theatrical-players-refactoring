# Techniques: _Refactoring_ by Martin Fowler

## Basic Refactorings
* [Extract Function (106)](#extract-function-106)
* [Inline Function (115)](#inline-function-115)
* [Extract Variable (119)](#extract-variable-119)
* [Inline Variable (123)](#inline-variable-123)
* [Change Function Declaration (124)](#change-function-declaration-124)
* [Encapsulate Variable (132)](#encapsulate-variable-132)
* [Rename Variable (137)](#rename-variable-137)
* [Introduce Parameter Object (140)](#introduce-parameter-object-140)
* [Combine Functions into Class (144)](#combine-functions-into-class-144)
* [Combine Functions into Transform (149)](#combine-functions-into-transform-149)
* [Split Phase (154)](#split-phase-154)

## Encapsulation
* [Encapsulate Record (162)](#encapsulate-record-162)
* [Encapsulate Collection (170)](#encapsulate-collection-170)
* [Replace Primitive with Object (174)](#encapsulate-collection-174)
* [Replace Temp with Query (178)](#replace-temp-with-query-178)
* [Extract Class (182)](#extract-class-182)
* [Inline Class (186)](#inline-class-186)
* [Hide Delegate (189)](#hide-delegate-189)
* [Remove Middle Man (192)](#remove-middle-man-192)
* [Substitute Algorithm (195)](#substitute-algorithm-195)

## Moving Features
* [Move Function (198)](#move-function-198)
* [Move Field (207)](#move-field-207)
* [Move Statements into Function (213)](#move-statements-into-function-213)
* [Move Statements to Callers (217)](#move-statements-to-callers-217)
* [Replace Inline Code with Function Call (222)](#replace-inline-code-with-function-call-222)
* [Slide Statements (223)](#slide-statements-223)
* [Split Loop (227)](#split-loop-227)
* [Replace Loop with Pipeline (231)](#replace-loop-with-pipeline-231)
* [Remove Dead Code (237)](#remove-dead-code-237)

## Organizing Data
* [Split Variable (240)](#split-variable-240)
* [Rename Variable (244)](#rename-variable-244)
* [Replace Derived Variable with Query (248)](#replace-derived-variable-with-query-248)
* [Change Reference to Value (252)](#change-reference-to-value-252)
* [Change Value to Reference (256)](#change-value-to-reference-256)

## Simplifying Conditional Logic
* [Decompose Conditional (260)](#decompose-conditional-260)
* [Consolidate Conditional Expression (263)](#consolidate-conditional-expression-263)
* [Replace Nested Conditional with Guard Clauses (266)](#replace-nested-conditional-with-guard-clauses-266)
* [Replace Conditional with Polymorphism (272)](#replace-conditional-with-polymorphism-272)
* [Introduce Special Case (289)](#introduce-special-case-289)
* [Introduce Assertion (302)](#introduce-assertion-302)

## Refactoring APIs
* [Separate Query from Modifier (306)](#separate-query-from-modifier-306)
* [Parametrize Function (310)](#parametrize-function-310)
* [Remove Flag Argument (314)](#remove-flag-argument-314)
* [Preserve Whole Object (319)](#preserve-whole-object-319)
* [Replace Parameter with Query (324)](#replace-parameter-with-query-324)
* [Replace Query with Parameter (327)](#replace-query-with-parameter-327)
* [Remove Setting Method (331)](#remove-setting-method-331)
* [Replace Constructor with Factory Function (334)](#replace-constructor-with-factory-function-334)
* [Replace Function with Command (337)](#replace-function-with-command-337)
* [Replace Command with Function (344)](#replace-command-with-function-344)

## Dealing with Inheritance
* [Pull Up Method (350)](#pull-up-method-350)
* [Pull Up Field (353)](#pull-up-field-353)
* [Pull Up Constructor Body (355)](#pull-up-constructor-body-355)
* [Push Down Method (359)](#push-down-method-359)
* [Push Down Field (361)](#push-down-field-361)
* [Replace Type Code with Subclasses (362)](#replace-type-code-with-subclasses-362)
* [Remove Subclass (369)](#remove-subclass-369)
* [Extract Superclass (375)](#extract-superclass-375)
* [Collapse Hierarchy (380)](#collapse-hierarchy-380)
* [Replace Subclass with Delegate (381)](#replace-subclass-with-delegate-381)
* [Replace Superclass with Delegate (399)](#replace-superclass-with-delegate-399)


### Extract Function (106)
Use when functions are too long.  Code used more than once should be put in its
own function.  If you spend effort looking at a fragment of code and figuring
out _what_ it's doing, then turning it into a function with a name that
describes this _what_ is a good idea.

[Back to Top](#basic-refactorings)


### Inline Function (115)
When the function body is as self-descriptive as the name.  Also useful as an
intermediate step to a later `Extract Function (106)` to re-refactor a previous
refactor the way you want. Great for when code uses too much indirection and
you get lost in all of the delegation from one function to the next.

[Back to Top](#basic-refactorings)


### Extract Variable (119)
Code expressions can become very complex and hard to read.  Similar to
extracting a function, `Extract Variable (119)` gives an expression a name that
can be self-descriptive.  Think about the context for the variable.  If it is
only meaningful within the function, then `Extract Variable (119)` is a good
choice, but if its useful more broadly, you can use `Extract Function (106)`
instead to make it more widely available.

[Back to Top](#basic-refactorings)


### Inline Variable (123)
Use when the name of the variable does not communicate more than the expression
itself.  Most times, this refactor is used as an intermediate step of a larger
refactor.

[Back to Top](#basic-refactorings)


### Change Function Declaration (124)
The most important element of a function for maintainability is its name.  If
you come across a name that is unclear, it's imperative that you rename it as
soon as you understand what the function does.  The same applies to function
parameters, since the parameters dictate the interface to the outside world.
Changing the parameters may also benefit by reducing coupling between code that
shares the data, but be careful!  Sometimes coupling code is a Good Thing over
time as the parameter and other code develops.

[Back to Top](#basic-refactorings)


### Encapsulate Variable (132)
Data can be wrangled more understandably when mutations occur as part of
functions.  It adds a clear point to monitor changes and use of the data.  This
is the basis for encapsulating data into an object and then writing getters and
setters.

[Back to Top](#basic-refactorings)


### Rename Variable (137)
Use when you get the name wrong initially and a rename can help make the code
more self-descriptive.  In tiny functions where the variable is self-evident by
the context, a terse name can be acceptable, but persistent fields that last
more than one function invocation require more careful naming.

[Back to Top](#basic-refactorings)


### Introduce Parameter Object (140)
Groups of data often travel together, appearing in function after function as a
data clump.  It's often a great idea to replace it with a single data
structure.  This process can greatly simplify the picture of the code.

[Back to Top](#basic-refactorings)


### Combine Functions into Class (144)
Use when a group of functions operate closely together on a common body of
data.  An alternative to this refactor is `Combine Functions into Transform
(149)`.  Use a class if mutability is acceptable or important.  A second
alternative is to nest the functions within each other, but this may make
testing the functions harder to do.

[Back to Top](#basic-refactorings)


### Combine Functions into Transform (149)
The point of this refactor is to take a bunch of functions that operate on a
group of data and write a pure transform function that takes source data,
clones it, operates on it and adds new attributes or changes the cloned object,
and returns it.  The benefit is that the data transform happens in one single
place.

[Back to Top](#basic-refactorings)


### Split Phase (154)
Use when code is dealing with two different things.  For example, suppose if
you receive JSON and a body of code operates on the JSON object with complex
key access or even string manipulations across different expressions, it can be
beneficial to split the computation into different phases.  In this example,
you could have a first phase that parses the input into an intermediate data
structure that has easily accessible attributes for a second phase.

[Back to Top](#basic-refactorings)

### Encapsulate Record (162)
Fowler likes to encapsulate records into an object when the data itself is
_mutable_.  With an object, data accesses and mutations are more easily
abstracted and kept track of.  The underlying data structure can be refactored
without worry of side effects.  If the data is immutable, then you have two
choices:  use a structure that has all of its fields explicitly defined, or use
a structure with dynamic fields.

[Back to Top](#encapsulation)


### Encapsulate Collection (170)
This is a special case of `Encapsulate Record (162)` that takes special care
over collections.  If a list is encapsulated in an object and some getter
method returns the list itself, the list can be inadvertently mutated, which
removes all of the benefit of encapsulation.  Instead, you can provide
add/remove/access methods that interact on a collection, and if a list needs to
be returned, you can return a copy or if the language supports it, a read-only
pointer.

[Back to Top](#encapsulation)


### Replace Primitive with Object (174)
Eventually the needs of some variable stored as a primitive grow beyond its
usefulness.  For example, a phone number may have sufficed at first as a
string, but eventually you may need more detailed functionality like handling
area codes, country codes, handling different display formats, being
self-checking, etc.  Another example is a date range.

[Back to Top](#encapsulation)


### Replace Temp with Query (178)
Use when you want to provide even more self-explaining code for a variable that
is instantiated with a complex expression.  This is also useful when breaking
up a large function.  In python classes, the equivalent is basically turning
temporary variables into @property methods or computed fields.

[Back to Top](#encapsulation)


### Extract Class (182)
Classes should be a crisp abstraction that handles a few clear
responsibilities.  In practice, classes grow and grow and take on
responsibilities that may have at first did not seem like it deserved their own
class.  But eventually once a class becomes too bloated, its time to split the
class into two (or more).

[Back to Top](#encapsulation)


### Inline Class (186)
The inverse of `Extract Class (182)`.  If a class is doing _too little_, then
we can reduce the indirection by folding the class into another.  This could
also be a stepping stone to a larger refactor.  For example if you have two
classes that you want to refactor into another two classes with different
allocation of features, you may want to `Inline Class (186)` then first into a
super class, and subsequently `Extract Class (182)`.

[Back to Top](#encapsulation)


### Hide Delegate (189)
The inverse of `Remove Middle Man (192)`. Use when you have a situation where A
calls a method defined on C, but C is held inside of B.  In this example, C is
the delegate with the actual information that A cares about.  B can hide the
delegate by implementing functions that basically wrap the calls to C.  That
way, if a change needs to occur on C, the impact will only go to B to make sure
the wrappers remain in sync with any interface changes from C.  A does not need
to care about the change.

[Back to Top](#encapsulation)


### Remove Middle Man (192)
The inverse of `Hide Delegate (189)`.  Hiding delegates can get annoying the
more that the caller needs to access the delegate.  For every new interaction
point, a new method needs to defined just to expose a way for the caller to
reach to the delegate.  Eventually the coupling between the caller and the
delegate get big enough that it's about time to remove the middle man and just
have the caller call the delegate directly.

[Back to Top](#encapsulation)


### Substitute Algorithm (195)
Use when you discover new, better ways to implement the same thing.  For
example, if you start using a library that supplies features that duplicate
your code, start using the library features (e.g., lodash).  Also use if the
new and better way to implement the code is clearer than the original
implementation.  Simpler is better than complex.

[Back to Top](#encapsulation)


### Move Function (198)
Use this to ensure that related software elements are grouped together adn the
links between them are easy to find and understand.  Also use this when
functions references elements in other contexts more than the one it currently
resides in.  Or use it when you need to make some function more easily callable.

[Back to Top](#moving-features)


### Move Field (207)
Use as soon as you realize a certain data structure is not right.  Leaving data
structures with problems will continue to confuse readers and users of the data
structure far into the future.  Use also when you find you always need to pass
a field from one record whenever you pass another record to a function.

[Back to Top](#moving-features)


### Move Statements into Function (213)
Inverse of `Move Statements to Callers (217)`.  Use if doing so will reduce
duplication of code.  Look for the opportunity to use this by looking at the
call sites of a function.  If certain statements are always co-located with the
call site, then it's time to move the statements into the function.  When doing
so, the statements moving into the function should only make sense within the
context of the function.

[Back to Top](#moving-features)


### Move Statements to Callers (217)
Inverse of `Move Statements into Function (213)`.  Functions are meant to be an
atomic unit of some action.  When common behavior used in several places need
to vary slightly at each of its call sites, it's time to move the varying code
out of a function and into the call sites.

[Back to Top](#moving-features)


### Replace Inline Code with Function Call (222)
Quite simply, this is taking statements and placing them into a new function.
This is very similar in oncept to `Move Statements into Function (213)`, but
just without the relationship between an already existing function to its
callsites.  With this refactor, you are just repackaging statements into a
brand new function, mostly to give a name to the operation so that the call
site can focus on _what_ to do and the packaged function can focus on _how_
it's doing it.

[Back to Top](#moving-features)


### Slide Statements (223)
Use to co-locate code statements together that share similar concerns or access
the same data structures.  Use also as an intermediate step to a larger
refactor.
[Back to Top](#moving-features)


### Split Loop (227)
Use when you find a loop that is doing multiple things at the same time.  This
refactor ultimately makes you repeat the loop in the pursuit of clearer code.
This might be uncomfortable, but if the duplication of the loop ends up being
the bottleneck, the refactor will make it easier to combine the loop again
after.

[Back to Top](#moving-features)


### Replace Loop with Pipeline (231)
Chained pipelines like `filter`, `map`, `reduce` are often significantly more
readable than complex for-loops that execute multiple statements.  When
appropriate, convert the for-loop into a pipeline.
[Back to Top](#moving-features)


### Remove Dead Code (237)
Use always.  Especially commented out code.  You can always get it back with
git.

[Back to Top](#moving-features)


### Split Variable (240)
Use when you see a variable identifier being reused again and again on separate
statements.  Ideally an identifier should be declared and used one time.  There
will be notable exceptions to this, but for the most part, try to achive a
one-time usage.

[Back to Top](#organizing-data)


### Rename Variable (244)
Use when a new name would better convey the purppose and usage of a variable.

[Back to Top](#organizing-data)


### Replace Derived Variable with Query (248)
Use when the _usage_ of a variable is located far from locations where that
variable can be mutated.  If possible, make the derived variable computed
lazily, or on-demand.  This makes it easier to reason out what the value of the
variable can be at a given time.

[Back to Top](#organizing-data)


### Change Reference to Value (252)
Inverse of `Change Value to Reference (256)`.  Storing variables as values
instead of references is advantageous because values can be treated as
immutable, and when they get set to new values, a completely new value can be
instantiated and substitute itself in.  Values are especially helpful when
passing them between different contexts, but only if you don't need the actual
value to be shared.  For that, you'd need a reference.

[Back to Top](#organizing-data)


### Change Value to Reference (256)
Inverse of `Change Reference to Value (252)`.  Use when you want the value for
some variable to be dictated in some source of truth that all accessors must
reference.

[Back to Top](#organizing-data)


### Decompose Conditional (260)
In a function, conditionals describe what happens but obfuscates the _why_ it
happens.  Decomposing the condition means to take the condition itself and
re-write it as a function that returns some boolean.  The function name will
describe the intention for the condition.  This is really just a hyper-specific
case of `Extract Function (106)`, specific for conditional logic.

[Back to Top](#simplifying-conditional-logic)


### Consolidate Conditional Expression (263)
Use when you find a series of conditional checks, where each check is different
but the outcome of each check is the same.  Using `and`, `or` and `not` logic
helps to convey that you are really only performing one check, and also sets up
the code for a future `Decompose Conditional (260)`.  This is not a one-size
fits all, though.  Sometimes even if the series of conditional checks are meant
to be thought as different checks, then don't do the refactor.

[Back to Top](#simplifying-conditional-logic)


### Replace Nested Conditional with Guard Clauses (266)
Functions with a conditional come in two flavors:  the first is where the
branch in code result in two paths that can be considered "normal" and maybe
even more-or-less equally likely.  the second flavor is where there is one
"true" happy path and the conditional checks for some weird state before
continuing.  A `guard clause` (defined here by Fowler) is an if-check that
returns early if found to be true.

Returning early from guard clauses helps with lateral drift of code, aka code
that is becoming more and more nested means the code needs to be more and more
indented to make visual sense.

[Back to Top](#simplifying-conditional-logic)


### Replace Conditional with Polymorphism (272)
Use when you come across some kind of `switch` statement that operates on a set
of variables differently based on the type of the variable.  You can create a
class for each case and then create a polymorphic function that handles
themselves differently based on the individual case implementation of the
function.  This is especially helpful when there is some kind of base case that
should be defined, but that some cases have small variations to the base case.

[Back to Top](#simplifying-conditional-logic)


### Introduce Special Case (289)
Use when you discover some code where many users of a data structure check for
a specific value and then do the same thing with it every time.  One common
example is when code is written to handle nulls.  The idea is instead of
returning null, you return a literal object that represents null and has its
own method for defautl behavior.  This is actually a larger coding pattern
called the Null Object Pattern, which Fowler calls a special case of "Special
Case".

[Back to Top](#simplifying-conditional-logic)


### Introduce Assertion (302)
Use when a section of code should only work if certain conditions are true.
The important part is that this should only be done where a failure would be
caused by a programmer error.  The program should be equally correct if all
assertion statements were removed.

Assertions are a valuable mode of communication.  They indicate the expected
state at some certain point of the code.

[Back to Top](#simplifying-conditional-logic)


### Separate Query from Modifier (306)
In general and for most cases, making clear distinctions between functions with
observable side effects and those without are a great idea.

[Back to Top](#refactoring-apis)


### Parametrize Function (310)
Use when there are two very similar functions that do nearly the same thing but
differ by some hardcoded constant.  The constant can be made into a parameter
to a common function.

[Back to Top](#refactoring-apis)


### Remove Flag Argument (314)
Use when a parameter for a function serves as a flag argument that leads to
some branching path within the function.  There should be two separate
functions for the different cases of the flag.

[Back to Top](#refactoring-apis)


### Preserve Whole Object (319)
Use when a callsite deconstructs an object or record into individual values and
then passes those deconstructed values into another function.  The function
should just accept the entire record and deconstruct what _it_ needs out of it.

"Pulling several values from an object to do some logic on them alolne is a
smell, and usually a signal that this logic should be moved into the whole
itself."

[Back to Top](#refactoring-apis)


### Replace Parameter with Query (324)
Inverse of `Replace Query with Parameter (327)`.  *The parameter list to a
function should usmmarize the points of variability of that function,
indicating the primary ways in which that function may behave differently.*

If a call passes in a value that the function can just as easily determine for
itself, that's a form of duplication - one that unnecessarily complicates the
caller, which has to determine teh value of a parameter when it could have been
freed of that work.

Should not use this if removing the parameter and moving its derivation to the
function would add an unwanted dependency to the function body.

[Back to Top](#refactoring-apis)


### Replace Query with Parameter (327)
Inverse of `Replace Parameter with Query (324)`.  Use when the query inside the
function is part of some unwanted dependency that you no longer want the
function to care or be aware about.  For example, in JavaScript, if the
function has closure over some variable it is using and you want to decouple it
from its declaration site, you may want to parametrize the query so that it
makes it easier to move the function around.

[Back to Top](#refactoring-apis)


### Remove Setting Method (331)
In the context of getters and setters, removing the setting method will convey
that updating values of some object make no sense after initialization.  This
reduces the areas in the code that can mutate the object.  If the caller wants
a different object, they can instantiate a new one.

[Back to Top](#refactoring-apis)


### Replace Constructor with Factory Function (334)
Use when you want code to conditionally create different objects based on some
parameter.  Many languages have limitations to what you can do with a
constructor, but a function that returns an instantiated object will have no
such limitations.

[Back to Top](#refactoring-apis)


### Replace Function with Command (337)
Inverse of `Replace Command with Function (344)`.  At times it can be a good
idea to take a function and move it into some class object that must first be
instantiated and subsequently have the function called.  Fowler calls this
containing object a `Command`.  `Command`s give you a much richer lifestyle to
the function.  For example, since it's in a class that can be stateful, you
could potentially have an `undo` function.  You can also take advantage of the
`class` nature by using inheritance, granting better flexibility.

The downside to the above is added complexity, which, based on the
circumstance, you may want to avoid.

[Back to Top](#refactoring-apis)


### Replace Command with Function (344)
Inverse of `Replace Function with Command (337)`.  Use when a `Command` would
be overkill for what you're trying to do or want the function to do.

[Back to Top](#refactoring-apis)


### Pull Up Method (350)
Inverse of `Push Down Method (359)`.  Use to reduce any duplication of code
between class "siblings".  Raising the method up to a common parent will by
defintiion remove the duplication.  Usually in order to do this refactor you'll
have to do other refactors as well.

As a word of warning, Fowler notes that the most awkward version of this is
when the body of one of the methods refers to attributes that are on a subclass
but not on the superclass.  When that happens, he'll reach for `Pull Up Field
(353)` first.

[Back to Top](#dealing-with-inheritance)


### Pull Up Field (353)
Inverse of `Push Down Field (361)`.  Use for the same reasons as `Pull Up
Method (350)`:  to reduce duplication of code betweeen class "siblings".

[Back to Top](#dealing-with-inheritance)


### Pull Up Constructor Body (355)
This is basically a special case of `Pull Up Method (350)`, specific for
constructor methods since for a lot of languages the constructor is very
important.  What this looks like is moving common behavior to a superclass and
then having the subclasses calling `super()`, or some language-equivalent.

[Back to Top](#dealing-with-inheritance)


### Push Down Method (359)
Inverse of `Pull Up Method (350)`.  Use this when a particular behavior is
specific to one of the subclasses and not to all subclasses.  As a caveat, this
refactor only applies if the caller _knows_ it's working with the relevant
subclass.  If it doesn't know that or can't know that, then you should instead
reach for `Replace Conditional with Polymorphism (272)`.

[Back to Top](#dealing-with-inheritance)


### Push Down Field (361)
Inverse of `Push Up Field (353)`.  Use for the same reason as `Push Down Method
(359)`.  If a particular subclass is cares about a field and more of its
"siblings" do not, then move the field to that subclass.

[Back to Top](#dealing-with-inheritance)


### Replace Type Code with Subclasses (362)
Inverse of `Remove Subclass (369)`.  Use when you have a class that has a
special attribute that indicates some kind of enumerated "type" and a lot of
its other behavior is dependent on the value of this type variable.

[Back to Top](#dealing-with-inheritance)


### Remove Subclass (369)
Inverse of `Replace Type Code with Subclasses (362)`.  Subclasses lose their
value as the variations they support are moved to other places or removed
altogehter.  Sometimes, the subclasses were created in anticipation of features
that never end up being built or built in a way that doesn't need the subclass.

A subclass that does too little is costly, and it is therefore best to remove
the subclass, replacing it with a field on the superclass.

[Back to Top](#dealing-with-inheritance)


### Extract Superclass (375)
Use when you notice two classes doing similar things to pull the common
behavior into a superclass.

[Back to Top](#dealing-with-inheritance)


### Collapse Hierarchy (380)
Use when you determine that a class and its parent are no longer different
enough to keep them different.

[Back to Top](#dealing-with-inheritance)


### Replace Subclass with Delegate (381)
Sometimes you'll want to abort from using inheritance at all.  Inheritance
allows only for a single axis of variation.  If you want to vary a People class
based on whether they're young or old and also by whether they're poor or rich,
you cannot do so with just inheritance.  Inheritance also introduces a very
close relationship betwen classes.  Any change to a parent class can easily
break children.

This refactor is really close to supporting the mantra to "Favor object
composition over class inheritance."  Fowler calls "object composition" the
same as what he refers to as a delegate.

[Back to Top](#dealing-with-inheritance)


### Replace Superclass with Delegate (399)
Use when some but not all of the methods on the superclass don't make sense on
the subclass.  For example, early in Computer Science history, they used to
mis-inherit List into a Stack object.  The problem was that the Stack object
had all the methods that a List would, and many of these methods are not
applicable to a Stack.

[Back to Top](#dealing-with-inheritance)