---
title: SRE Software Standards
description: Standards for software development in SRE
---

# Purpose

In order to function effectively as a primarily engineering-focused team, 
we need to have stringent standards for how our engineering is done.
This is to remove all ambiguity when it comes to how to go about engineering
work, as well as to make it easier for existing engineers and new joiners
to get used to the way we write/manage/maintain software.

This document will give an overview of our standards, and will evolve over
time as we expand our remit in terms of engineering work that we do.

Please note that standards outlined here are **ONLY** for SRE-related
engineering projects, and shouldn't necessarily be enforced on non-SRE
projects (unless there are any fans of these processes, of course!).

We have standards for the following areas:

* [Project folder structure](#project-folder-structure-standards)
* [README files](#readme-standards)
* [Code style](#code-style-standards)
* [Documentation](#documentation-standards)
* [Testing](#testing-standards)
* [Source control](#source-control-standards)
* [Work tracking](#work-tracking-standards)
* [CI/CD](#ci-and-cd-standards)
* [Configuration](#configuration-standards)
* [Code review](#code-review-standards)
* [Logging](#logging-standards)

# Project folder structure standards

All project repositories should roughly follow this format. Obviously it
can vary on a case by case basis, but if it varies too far make sure it's
clearly documented.

* `Glasswall.SRE.{project name}/` : The repo should be given a descriptive name.

        A namespace must be provided for the project. For example, a FileTrust
        project should reside within `Glasswall.SRE.FileTrust.{project name}` .

    - `src/` : This folder is where the source code lives. Subfolders here are

            optional, and can be added to/removed based on project needs.
            Folder names can optionally be prefixed with namespaces in things
            that require it, for example in C# projects.

        - `business/` : The application business logic should be in here.
        - `common/` : Common functionality (that can be reused elsewhere) should

                be in here.

        - `database/` : Any DDL or other database related things should be

                stored in here.

        - `initialisation/` : Application entry point(s) and init code should be

                here.

        - `service/` : For microservices, the `main()` method, dockerfiles, helm

                charts etc should be in here.

        - `config/` : For projects with lots of config, they should all be in

                this folder, otherwise a single config file in place of this
                will work fine.

    - `test/` : This folder is where code for tests lives. Obviously if no tests

            of a certain type exist subfolders for them should not be present
            in the project. As with the `src/` folder, test folders can
            optionally be prefixes with namespaces.

        - `l0/` : This is where L0 tests should be stored.
        - `l1/` : L1 tests.
        - `l2/` : L2 tests.
        - `l3/` : L3 tests.
        - `common/` : Common test functionality can be stored here.
    - `.gitignore` : All projects should have a gitignore.
    - `README.md` : All projects should have a markdown README.
    - `{...}` : Any other files that make sense being in the root, for example

`docker-compose.yml` , C# `.sln` files, `setup.py` , `Pipfile` , etc.

A good case for customising this project structure would be if you're making
something that implicitly needs a different structure, for example if you're
writing a Python package, where client usage is tied to folder structure.
In cases like this, simply make sure the structure is logical and well
documented. An example of this would be:

* `Glasswall.SRE.Common.coolpythonpackage/` 
    - `src` 
        - `coolpythonpackage/` 
            - `__init__.py` 
            - `common.py` 
            - `coolfunctionality.py` 
        - `config/` 
            - `config.yml` 
            - `log-config.yml` 
    - `test/` 
        - `__init__.py` 
        - `l0/` 
            - `__init__.py` 
            - `test_common.py` 
            - `test_coolfunctionality.py` 
        - `common/` 
            - `__init__.py` 
            - `common_setup.py` 
    - `.gitignore` 
    - `README.md` 
    - `Pipfile` 
    - `setup.py` 

Some projects may have subprojects. In this case, subprojects should be stored
in folders in the root directory of the repo, and subproject structure within
these folders should match regular project structure as outlined in this
section.

# README standards

All projects must have a README in the root of the project repository. This
README serves to give people interested in the project a quick way of grokking
everything they'll need to know about it.

The structure should be as follows:

``` markdown
# {Project title}
One paragraph description of project.

## Getting started

Instructions to clone the repo and get started with developing the project.

### Prerequisites

A list of things you need to install to develop the project.

### Quick start

A (quick!) guide to getting the project up and running.

### Testing

A guide to running tests that should (and can be) run locally. Think L0s and L1s.

### Deployment

A guide on how to deploy the project.

## Folder structure

Explain the folder structure of your project in a hierarhical way with bullet points.

Any other useful information you can think of.
```

All projects need to have a README. If a project does not have a README this is
considered a bug. If a project has an empty README this is a bug. If a project
has an incomplete README this is a bug.

# Code style standards

Generally code should follow Google style guides. If a Google style guide
doesn't exist for a particular language then follow the most commonly used
public style guide available. Do not write a new style guide for a language if
you can find a perfectly good one online, as it's a huge undertaking and
there's a lot that can and will be missed out on the first few iterations of
writing.

If there is any conflicting sections in a style guide you find online (for
example, if an online style guide has a section that is also listed in these
standards), then please give these standards priority over the style guide.

Below you can find our accepted style guides for each language that we use.
If in the future we start using a language that isn't listed here, please add
it to this section and note the style guide that you have decided to use so
future projects in this new language can keep their standards uniform.

## Style guides

### Python
Google's style guide: https://google.github.io/styleguide/pyguide.html

There's a good example of usage here: https://sphinxcontrib-napoleon.readthedocs.io/en/latest/example_google.html

* Use [YAPF](https://github.com/google/yapf) to automatically format your code.

  We recommend binding this to happen every time you save.

#### Overrides

* The character limit we use is 120, not Google's suggested 80.

# Documentation standards

We want to write documentation for almost everything we do as SREs. Whether it
is code, processes, playbooks, incidents, postmortems, whatever. This section
will specifically cover documentation for things related to engineering.

## Code documentation

Documentation for code should be written in line with the style guide that is
being used. If the style guide for some reason omits documentation, then you
still need to write docstrings and comments for code. A suggestion for if
documentation is omitted from the style guide would be to write docstrings in
a format that can be read by some docstring generation tool (like
[Doxygen](http://www.doxygen.nl/)). The aim is for API references to be
automatically generated for any code that we write.

All public and private interfaces **MUST** have docstrings.

Inline/block comments should be used where code needs it. Use your common
sense. Don't over comment.

## READMEs

READMEs should be written in line with the [README standards](#readme-standards).

## API documentation

If your application exposes any APIs be it HTTP, REST, RPC, or any other, then
it must be documented. Documentation should be generated from some kind of spec
using something like [Swagger](https://swagger.io/) for example.

## User interface documentation

If your app has a user interface (for example, a CLI or a GUI) then the usage
of this should be documented.

This could be as simple as a 'Usage' section in the README (see
[here](https://kubernetes.io/docs/reference/kubectl/overview/#syntax) for example), or 'how-to' guides if your app has a GUI.

## Config documentation

If your application uses config files, you must provide example config files, 
as well as documentation of **EVERY** field that can be used in the config.

## Other documentation

If your application uses any other things that can be documented (for example, 
it has DDL for a database or helm charts or anything) comments should be used
within these files explaining anything that is not immediately clear.

# Testing standards

Testing standards can be found here: https://dev.azure.com/glasswall/Glasswall%20Cloud/_wiki/wikis/Glasswall-Cloud.wiki?pagePath=%2FTest%20Level%20Definitions

# Source control standards

In order for our CI/CD pipelines to function effectively, we as a team need to
have well-defined guidelines for how we use source control. Good source control
practice also helps organise/track work items effectively.

All source control repositories must be Git repositories.

All repositories adhere to the [feature branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).

## Branch naming

Branches should be named in the following format:

``` 
{initials}/{issue-number}-{issue-description}
```

For example:

``` 
sg/98765-fix-queue-bug
```

The reason for this is so that you can identify whose branch it is, the
backlog item it's related to, and a short description of the feature.

## Commit messages

Commit messages should be in the following format:

``` 
#{issue-number}: {message}
```

For example:

``` 
#98765: Add error checking to queue pushing code
```

The reason for this is so that you can see which issue it's related to
(and Azure DevOps will automatically pick this up and link it for you).

[Here is](https://chris.beams.io/posts/git-commit/) some good advice for
writing for writing commit messages. The commit message should read as
"this commit will {message}". For example, "this commit will add error
checking to queue pushing code". Writing the commit as "added error checking
to queue pushing code" would be incorrect, as it would read "this commit will
added error checking to queue pushing code".

This seems pedantic, but it really helps out when reading the git log.

Another good source of information for writing commit messages is
[Google's advice](https://google.github.io/eng-practices/review/developer/cl-descriptions.html).
Please note that Google refers to these as a 'CL', or 'change list'.

## Pull requests

Feature branches are pushed to master, and when the feature is complete, a
pull request is created to request that the feature changes are 'pulled' into
the master branch.

Pull requests will need to be reviewed and approved by 2 other members of the
team before they are able to be merged. Additionally, a gated CI build should
be run and only allow the PR to be merged if it builds successfully. For more
information please see the section on [CI/CD standards](#ci-and-cd-standards).

If possible and realistic, it is preferable to rebase the changes in the
feature branch onto the master branch, as this keeps the graph clean and
easy to understand.[Here is some advice](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)
on rebasing versus merging. In particular, follow the advice in the 'The
Golden Rule of Rebasing' section.

## Ignoring files

All repos should have `.gitignore` files in order to ignore any files that
should not be put in source control. A very easy way to generate these is by
using http://gitignore.io/.

## Secrets

Secrets **SHOULD NOT** be stored in source control. Under any circumstances.
If you're ever thinking of putting one in source control, have a long walk, 
take a breather, and then find an alternate solution to whatever it is you
think you're doing. Because it's not right.

If you accidentally commit a secret to source control, deleting the file and
committing again will not remove it. With access to the repo, someone can still
roll back and find the secret. You will need to go back and remove this file
from the cache. This is a massive pain to do, and takes up a lot of time. So
the simple solution is to **NOT STORE SECRETS IN SOURCE CONTROL**.

If you ever need to remove a secret you've accidentally committed, see
[the advice here](https://help.github.com/en/articles/removing-sensitive-data-from-a-repository). But you shouldn't need to, right?

# Work tracking standards

All work needs to be tracked on [our issue board](https://dev.azure.com/glasswall/Glasswall%20Cloud/_boards/board/t/Glasswall%20DevOps%20Team/Backlog%20items).
When a piece of work is being planned, create a product backlog item (PBI) on
the board under the 'New' column. Ask someone in charge to look over this piece
of work and see if it aligns with our current goals, and if they sign off on it
then move it into the approved column.

Issue names should be descriptive enough for someone to get a good impression
of what a piece of work will entail at a glance. For example, this is the
difference between "Helm - Tag Filetrust Releases" and "Tag Releases". Within an issue, there should be a description that gives a more detailed
description of the backlog item. This should be where you propose how to
potentially do it, as well as link to useful sources if necessary.

Tasks should be given to PBIs delineating the steps to complete the work item, 
but be careful not to make them too granular, as that could get ridiculous.

When picking up work, you check the 'Approved' column of the board, assign
yourself to the task, and move it to the 'In Development' column. From here
you can comment on the issue to give updates and tick off tasks as you go.
When you've completed the work you can move it into the 'Done' column and start
the process over.

In any work that you do related to the issue, you should refer back to the
issue ID as much as possible, for example in branch names/commit messages.

See the [source control standards section](#source-control-standards) for more
detailed guidelines.

# CI and CD standards

All source controlled code projects need to have Azure DevOps pipelines for
both building and releasing the code. Standards won't get too specific here, 
as a lot of the actions that occur in a pipeline are quite bespoke and will
vary a lot depending on what is being built and where it's being deployed
to.

## Building (CI)

Code builds are done when there are new commits on a certain branch. The type
of the build depends on which branch has commits.

### Gated build

This pipeline builds code from pull requests onto the master branch. Any code
that is requested to be merged onto the master branch must trigger a gated
build to run, which runs tests and validation on the repository to make sure
broken code/invalid config isn't being merged into master.

This build is set up on the master branch's branch policy to run as a build
validation step. If the build fails then the code will not be allowed to be
merged into master.

### CI build

This pipeline builds code off of new commits to the master branch. Any time
there are new commits available in the master branch it should automatically
trigger and generate an artifact for the project with everything that will be
needed to deploy it.

These artifacts are kept in storage so that we can release new deployments and
roll back to old ones at whim.

## Releasing (CD)

When an artifact is ready after the CI build, it needs to be deployed
somewhere -- this is what release pipelines are for. Due to the fact that
projects are going to vary so much in terms of where they're being deployed to
as well as how they should be deployed, it's difficult to write standards for
this currently.

In general:

* Automation scripts must be written in Python and source controlled
* Releases should be triggered automatically wherever it makes sense to do so, 

  for example a release should be automatically created and rolled out to a
  development/testing environment as soon as an artifact is available.

# Configuration standards

A lot of the software we write will require configuration files. It's important
that these configuration files are standardised among all of our projects, so
things don't start to get too different.

* Configuration files should be in YAML wherever possible
* All configuration values should be well documented
* Example configuration files must be provided

# Code review standards

We will follow Google's standards for how to do code reviews: https://google.github.io/eng-practices/review/reviewer/

If you need some advice on how to have your code reviewed, again, [Google has
us covered](https://google.github.io/eng-practices/review/developer/handling-comments.html).

# Logging standards

The general accepted format for a log string is the following:

``` 
{UTC-timestamp} [{log-level}] <{file}:{line-number}> {message}
```

For example:

``` log
2019-09-06 10:47:50.099Z [DEBUG] <mailsend.py:13> Hello world!
```

