const BurgerBlock = require('./burgerBlock');

class BurgerNode {
    constructor(burgerBlockchain) {
        this.chain = burgerBlockchain;
        this.pendingTransactions = [];
        this.nodes = [];
    }

    createNewBlock(proof, previousHash, confirmedTransactions = []) {
        const index = this.chain.blocks.length + 1;
        const timestamp = new Date().toISOString();

        const block = BurgerBlock(
            index,
            timestamp,
            confirmedTransactions,
            proof,
            previousHash
        );

        this.chain.addBlock(block);
        return block;
    }

    getBlocks() {
        return this.chain.blocks;
    }

    addNodeToNetwork(address) {
        this.nodes.push(address);
    }

    validateChain() {}
}

module.exports = BurgerNode;