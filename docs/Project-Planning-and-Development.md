# Project Planning and Development
How to create productive incentive systems among your peers

v0.3

### Contextual Narrative

If you've checked out some of the other courses, you should know that even the words I'm writing now myself have a unique bias, specific base of evidence, and uncertainty. One of the techniques for delivering a message with high-quality information includes telling a story. When you understand the context around the person providing you with information, you can pick and choose the bits and pieces that you are capable of verifying and minimize the bits and pieces that require blind trust.

This is why I will begin with first-hand account on why the techniques for planning and development that I present in this course _may or may not_ be useful to you. If you come from a completely different frame of mind and cannot empathize with someone else's narrative, you may not be able to parse this course for the information that _is_ useful to you. So please understand that at the time of writing, I'm simply a 25-year-old Spanish-American engineer trying to document and share information that I truly believe I've used to improve my quality of life. You should also know:

- The only full-time employment I've ever experienced is 3 months as an IT intern in a cubicle for a large corporation
- The rest of my work experience comes from participating in the cycle of constant failure and discovery that is self-employment and working on projects with my friends
- I spent 2 years learning how to build a music app that has not been monetized, another year unsuccessfully trying to raise investments for it, and 2 more years building a software consultancy using the skills I learned from building the music app.
- Until 2015, I had been studying electrical engineering in my spare time (*lol*) at a strongly academic university, after which I committed myself to the music-tech startup life by working 12-16 hours a day, 6 days a week, with 6-10 other peers who were just as willing as I was to spend months living in a 3.5 bedroom house that had 80% fewer mattresses to sleep on than people living in it (ie: college-aged males trying to get rich)
- 90% of my work hours were spent on a Macbook Air + 24 inch monitor teaching myself project management, operational logistics, full-stack software engineering, and development operations. The rest was spent on health & fitness research & experimentation (ie: diet, exercise, health management, polyphasic sleep, etc)
- Two years later, the 4 of us that survived gathered enough money to take an even bigger leap into a world where you have to deal with things like "commercial liability insurance" and "payroll taxes" and "scaling problems". We are in a constantly alternating state of struggle and success, never flexing more than ~3-8 weeks of runway.


### Core Roles: Planning
Simply adding more members to your team just because you don't have the skills to get the job done can lead to expenditures you cannot control and relationships that you cannot maintain. By detailing the roles needed to achieve a defined goal, you can decide which roles you feel confident in fulfilling and determine which responsibilities can be offered to others. Others will also appreciate when their responsibilities have been clearly defined so they themselves can make the same confident decision to get the job done.

When it comes to project planning, you will always have some roles that are common to many different industries. I have specific experience when it comes to software projects involving web and mobile applications and core programming, but every project has one or more of the following:
- Worker
- Stakeholder
- Director

The Worker receives payment for submitting proof that a work has been completed (logo design, source code package, translated document). The Stakeholder offers payment in the hopes of one day observing that the resulting work exceeds some expected value. The Director decides on whether the quality of each work should be improved to ensure that the requirements for executing payment have been met.

Freelancers often assume both the roles of Worker and Director, business owners often assume the role of Stakeholder and Director, and executives often assume the role of all three. This is perfectably acceptable and it's not required that all three be different people. However, understanding the dynamics between them throughout a project's lifecycle will help make sure that development goes smoothly.

### Core Roles: Development
Planning is only half the battle. Ensuring there clear set of expectations among all Workers, Stakeholders, and Directors sets the stage for a successful development process, but for the project to survive the development phase, there are many critical responsibilities to uphold and conflicts to resolve along the way. Instead of trying to solve every problem yourself, making sure everyone has access to the right set of tools and solutions will help make sure everyone both delivers the best work they are capable of as well as learns from their own mistakes. Knowing you have the skills will be enough to commit to your role as specified in the Development Plan, but you will feel much more empowered to take ownership and accountability if you know you have the tools to get the job done.


### Writing User Acceptance Tests

Linguistic grammar is a fundamental basis for writing useful tests that properly describe the behavior of software. A good user acceptance test consists of two independent clauses with a core structure of:

- _When_ NOUN + VERB + X, _then_ NOUN + VERB + X
- X is optional for providing more detail and can be a combination of direct objects, adverbs, participial phrases, dependent clauses, or prepositional phrases
> _When the user **(NOUN)** clicks **(VERB)** the Login Button **(direct object)** before typing a password **(prepositional phrase)**, then an error message **(NOUN)** appears **(VERB)** at the bottom of the screen **(prepositional phrases)**_

Use the present tense
Prefer the active voice

Grammar provide strict definitions for the meaning of a sentence, in the same way that a programming language requires strict definitions for the behavior of code. Using nouns and action verbs can provide the necessary strictness to define and convey the meaning of a series of coded commands.

To complete a task, programmers must test the code that they write and verify that the result matches a pre-defined condition. With clear and detailed conditions, the programmer can easily compare the result of their code with the behavior described in the test without having to clarify any unanticipated side effects with the product owner.

### Estimation Model

- 1 - Solution chosen with high-certainty, high confidence of < 0.5 day completion
- 2 - Solution chosen with high-certainty, low confidence of < 0.5 day completion
- 3 - Solution chosen with high-certainty, high confidence of < 1 day completion
- 5 - Multiple solutions with high-certainty, low confidence of < 1 day completion
- 8 - Multiple solutions with high-certainty, high confidence of < 1-2 day completion
- 13 - Multiple solutions with low-certainty, high confidence of < 2-3 day completion
- 20+ - Exploratory issue, should be broken down
>>>>>>> 5abf75079f4c4e82c6208c4c5664105596764dd7
