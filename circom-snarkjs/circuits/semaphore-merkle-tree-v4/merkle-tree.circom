pragma circom 2.0.0;

include "../../node_modules/circomlib/circuits/poseidon.circom";
include "../../node_modules/circomlib/circuits/mux1.circom";
include "../../node_modules/circomlib/circuits/comparators.circom";

template CalculateMerkleRoot(MAX_DEPTH) {
    signal input leaf, depth, indices[MAX_DEPTH], siblings[MAX_DEPTH];

    signal output out;

    signal nodes[MAX_DEPTH + 1];
    nodes[0] <== leaf;

    signal roots[MAX_DEPTH];
    var root = 0;

    // TODO: refactoring
    for (var i = 0; i < MAX_DEPTH; i++) {
        var a = IsEqual()([depth, i]);

        roots[i] <== a * nodes[i];

        root += roots[i];

        var c[2][2] = [ [nodes[i], siblings[i]], [siblings[i], nodes[i]] ];
        var childNodes[2] = MultiMux1(2)(c, indices[i]);

        nodes[i + 1] <== Poseidon(2)(childNodes);
    }

    out <== root;
}