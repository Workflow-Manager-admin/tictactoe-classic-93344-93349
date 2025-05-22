#!/bin/bash
cd /home/kavia/workspace/code-generation/tictactoe-classic-93344-93349/tic_tac_toe_container
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

