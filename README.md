# eos-test

As an EOS User, I want to see a list of the most recent blocks from the eosio
blockchain.

## Run Instructions
`npm i`

`ng serve`

## Test Instructions
After installing dependencies,

`ng test`



## Roadmap
### Acceptance Criteria
1. Page should update with the click of a “LOAD” button. We should only show 10 most recent
   blocks, older blocks should dropped from the list when you hit load again.
2. Block list entries should show the hash of the block (this is the id), it’s timestamp, and the count
   of actions included in that block (this will typically be 0).
3. Clicking a block entry should expand that line to show the raw contents of the block output.
### Technical Outline
 * Call public blockchain API endpoint via eos-js
 * Display block hash, timestamp, and count in accordion
 * Accordion elements expand to show raw block data
 
### UI Components
 * Container/Home
 * Load/Refresh Button
 * Accordion List
 * Accordion Element