#!/usr/bin/env bash
STASH_NAME="pre-commit-$(date +%s)"
git stash save -q --keep-index $STASH_NAME
EXIT_STATUS=0
source ./build.sh
if [[ $(git diff public | wc -c) -ne 0 ]]; then
    echo "Diff is different on compiled output, please commit built code"
    EXIT_STATUS=1
fi
STASHES=$(git stash list)
if [[ $STASHES == "$STASH_NAME" ]]; then
  git stash pop -q
fi
exit ${EXIT_STATUS}
