---
title: Prettier pre-commit
date: "2023-10-18"
draft: false
tags:
  - seed
---

Run prettier out of the `./ui/node_modules/bin` folder for proco ui.

```bash
#!/bin/sh



exit 0



# Define colors for log messages

COLOR_OFF='\033[0m'

GREENBOLD='\033[1;32m'

YELLOWBOLD='\033[1;33m'

BLUEBOLD='\033[1;34m'



# Log message prefixes for different log levels

INFO="$BLUEBOLD[INFO]$COLOR_OFF"

SUCCESS="$GREENBOLD[SUCCESS]$COLOR_OFF"

WARNING="$YELLOWBOLD[WARNING]$COLOR_OFF"



# Function to log an informational message

log_info() {

echo "$INFO $1"

}



# Function to log a success message

log_success() {

echo "$SUCCESS $1"

}



# Function to log a warning message

log_warning() {

echo "$WARNING $1"

}



# Function to log an exit message

log_exiting() {

log_info "Exiting pre-commit"

}



log_info "Run pre-commit"



# Capture the list of staged files using git diff

FILES=$(git diff --cached --name-only --diff-filter=ACMR | sed 's| |\\ |g')



# Check if FILES is empty (no files staged for commit)

if [ -z "$FILES" ]; then

log_info "No files staged for commit"

log_exiting

exit 0

fi



log_info "Run pre-commit"



# Capture the list of staged files using git diff

FILES=$(git diff --cached --name-only --diff-filter=ACMR | sed 's| |\\ |g')



# Check if FILES is empty (no files staged for commit)

if [ -z "$FILES" ]; then

log_info "No files staged for commit"

log_exiting

exit 0

fi



# Check if Prettier is installed in the local ./ui/node_modules folder

if [ ! -f ./ui/node_modules/.bin/prettier ]; then

log_warning "Prettier is not installed in the ./ui/node_modules folder. Please install Prettier."

log_exiting

exit 0

fi



# Run Prettier on all modified files at once and capture the list of modified files

MODIFIED_FILES=$(

echo "$FILES" | xargs ./ui/node_modules/.bin/prettier --ignore-unknown --list-different

)



# Check if there are any modified files

if [ -z "$MODIFIED_FILES" ]; then

log_success "No changes introduced by Prettier"

else

# Check if Prettier can make changes to the list of staged files

if echo "$MODIFIED_FILES" | xargs ./ui/node_modules/.bin/prettier --ignore-unknown --write; then

log_success "Prettier run successfully"



# Git add all modified files in a single batch

if git add $MODIFIED_FILES; then

log_success "Successfully added modified files to the staging area"

else

log_warning "Git add failed for modified files"

log_exiting

exit 0

fi

else

log_warning "Prettier encountered an error"

log_exiting

exit 0

fi

fi



log_success "Pre-commit done 🎉"

exit 0
```
