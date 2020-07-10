# Welcome to the Mechanyx.gg Bot GitHub page!
Here you can find resources for downloading, provisioning, and developing modules for our open source Discord bot!

Being this is a community project, we wanted to ensure that we state a basic set of rules for contributions and style.

# Code Standards
1. All code should be formatted with "camel caps" capitalization (varible1, VariableWithLongName2, etc.)
2. All indents should use tabs

# Source control standards
1. Do not, under any circumstances, commit to master. The master branch should always be a verified and tested build of the bot to prevent people cloning/downloading broken builds
2. All changes must stage through a pull request and be reviewed by a Mechanyx staff member  for code standards, security audits, and feature testing. If your code fails any of these checks the pull request will be closed with notes on what needs to be fixed before the request can be opened and go through validation again.
3. Any branches not containing a relevant commit within the last 30 days will be deemed "stale" and deleted.

# Branching naming convention and strategy

* This repository leverages a fairly simple branching strategy and tag convention.

  *. "master" contains the most recent validated and tested build
  
  *. For any hot fixes, a "hotfix" branch should be pulled. hot fix branches should begin at 0 and increment by 1 with every subsequent branch. To find the most recent branch number,  chcek the "branch" menu
  
  *. For any new features, a branch should be forked from the "release" branch. The release branch stands as a "staging branch" and bug fixes should only be pushed onto this branch. All new features need their own branch. Feature branches should follow the same naming conventions as the hot fix branches.

# License
