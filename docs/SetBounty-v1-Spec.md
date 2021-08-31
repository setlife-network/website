# SetBounty v1.0 Specification

## Background & Research

---

Let us define three roles that will be referenced throughout:

1. **Leader**
2. **Investor**
3. **Developer**

An issue is created by a **Leader** containing some amount of information, detail, or specification (for example, "Deploy landing page with project logo and contact form"). The amount of work required to resolve the issue may depend on many variables including the skill level of **Developers** contributing to the issue and the complexity of the solution desired by the Leader. This leads to challenges in estimating the time it will take to resolve the issue, compensating those that contributed that time, and proving that the work was completed as specified.

To simplify these problems, we will “blackbox” these unknowns as a function of the amount of money committed to a given issue. **Investors** interested in seeing the issue resolved will communicate that interest in the form of money "staked" while protecting their investment with a time-locked refund period. The **Leader** will then have until the end of that refund period to coordinate efforts to close the issue and disburse the money to **Developers** who had contributed to any pull requests that close the issue. If the issue remains open after the end of the refund period, the staked money will be returned to the Investor, who can then re-stake the same issue, stake on any other open issue, or simply take his/her money elsewhere.

The basic interface for v1.0 may be built directly into GitHub as a Chrome extension. API data can be accessed directly from a Node server that the Chrome app communicates with. A database may be used, but storing and securing sensitive user data with a [Blockstack](http://blockstack.com/) solution may decentralize the core technology and add long-term value to the project. Other solutions including drivechains and LN payment channels will also be explored to reduce the need for institutional financial services. The interactions among Leaders, Investors, & Developers may be modeled by setting certain constraints on sidechain mining nodes or LN channel counterparties, but further research & experimentation is required.

### Creating an Issue

Issues are created through Github and maintained by a repository's Leader. An issue should contain enough information, detail, or specification so that a Developer can resolve the issue with minimal communication with a Leader.

### Resolving multiple pull requests

One solution could be to merge the 1st PR as is and open a new unfunded issue for adding a testing suite + code cleanup since it wasn't explicitly asked for. Or the Leader could ask the 2nd dev to merge his PR into the 1st one and then evenly split the reward between the 2 devs.

If the Leader has begun reviewing 2 "competing" PRs (i.e. has left a comment on the PR or clicked "Start a Review" on GitHub), the developers who contributed to each PR have the ability to veto the Leader's bounty % (if any). That way if the Leader fails to satisfy Developers of both PRs fairly, they lose their %.
The vetoed Leader bounty could go back to the Investor, or diverted to other issues, but it should not go to the Developers so they are not incentivized to abuse the veto ability.

## Resources

[https://api.github.com/graphql](https://api.github.com/graphql)

# Features

---

## User Authentication & Github Access

- Log in with Github account
- Access repository issues
- Access repository pull requests
- Subscribe to pull request status
- Subscribe to issue status

## Payment Options

All Users and Issues have a unique wallet to facilitate transactions while minimizing stripe transaction fees

- Connect a debit/credit card with Stripe
- Transfer USD from Investor payment method to issue
- Transfer USD from issue to Developer
- Withdraw USD from wallet to bank account

## Funding an Issue

- Place bounty and time limit on any open issue
- Transfer money from Investor's payment method to unique wallet for Issue
- Allocate a percentage of bounty to the Leader (investor may opt out)
- Return money to Investor's wallet if issue remains open at the end of the time limit

## Communication

- Commenting on issues
- Private messaging during Issue Resolution?

## Issue Resolution

- Developer(s) submit a pull request to the Leader
    - Possible way to express interest & encourage collaboration between developers
- New PR submissions are locked until the Leader accepts or rejects the new code
- PR Spam prevention
    - Leader may place suspension on User after PR has been submitted
    - Filter PR's by # of changed files, lines of code, etc.
- Leader has full discretion on distributing payments between developers

# Database Schema

---

[https://github.com/setlife-network/setbounty/blob/master/api/database/datamodel.graphql](https://github.com/setlife-network/setbounty/blob/master/api/database/datamodel.graphql)

    # api/database/datamodel.graqphl

# Tech Stack

---

## Chrome Extension

- React
- Apollo Client

## Backend

- Apollo Server/Graphql
- Prisma/SQL
- Github API
- JWT authentication

## Tooling

- Webpack
- Puppeteer
