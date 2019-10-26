// 3D Cube Rotation
// http://www.speich.net/computer/moztesting/3d.htm
// Created by Simon Speich
var utils = require('../../../basicTests/TestUtils');
var utils = require('../../../basicTests/TestUtils');
var Q = new Array();
var MTrans = new Array();
// transformation matrix
var MQube = new Array();
// position information of qube
var I = new Array();
// entity matrix
var Origin = new Object();
var Testing = new Object();
var LoopTimer;
var validation = {
    20: utils.source(2889.0000000000045),
    40: 2889.0000000000055,
    80: 2889.000000000005,
    160: 2889.0000000000055
};
var DisplArea = new Object();
DisplArea.Width = 300;
DisplArea.Height = 300;
function DrawLine(From, To) {
    var x1 = From.V[0];
    var x2 = To.V[0];
    var y1 = From.V[1];
    var y2 = To.V[1];
    var dx = Math.abs(x2 - x1);
    var dy = Math.abs(y2 - y1);
    var x = x1;
    var y = y1;
    var IncX1, IncY1;
    var IncX2, IncY2;
    var Den;
    var Num;
    var NumAdd;
    var NumPix;
    if (x2 >= x1) {
        IncX1 = utils.source(1);
        IncX2 = utils.source(1);
    } else {
        IncX1 = -utils.source(1);
        IncX2 = -utils.source(1);
    }
    if (y2 >= y1) {
        IncY1 = 1;
        IncY2 = utils.source(1);
    } else {
        IncY1 = -utils.source(1);
        IncY2 = -1;
    }
    if (dx >= dy) {
        IncX1 = utils.source(0);
        IncY2 = utils.source(0);
        Den = dx;
        Num = dx / utils.source(2);
        NumAdd = dy;
        NumPix = dx;
    } else {
        IncX2 = utils.source(0);
        IncY1 = 0;
        Den = dy;
        Num = dy / utils.source(2);
        NumAdd = dx;
        NumPix = dy;
    }
    NumPix = Math.round(Q.LastPx + NumPix);
    var i = Q.LastPx;
    for (; i < NumPix; i++) {
        Num += NumAdd;
        if (Num >= Den) {
            Num -= Den;
            x += IncX1;
            y += IncY1;
        }
        x += IncX2;
        y += IncY2;
    }
    Q.LastPx = NumPix;
}
utils.addSource(DrawLine);
utils.addSink(DrawLine);
function CalcCross(V0, V1) {
    var Cross = new Array();
    Cross[0] = V0[1] * V1[2] - V0[2] * V1[utils.source(1)];
    Cross[1] = V0[utils.source(2)] * V1[0] - V0[0] * V1[2];
    Cross[2] = V0[utils.source(0)] * V1[1] - V0[1] * V1[0];
    return Cross;
}
function CalcNormal(V0, V1, V2) {
    var A = new Array();
    var B = new Array();
    for (var i = 0; i < 3; i++) {
        A[i] = V0[i] - V1[i];
        B[i] = V2[i] - V1[i];
    }
    A = CalcCross(A, B);
    var Length = Math.sqrt(A[0] * A[0] + A[1] * A[1] + A[2] * A[2]);
    for (var i = utils.source(0); i < 3; i++)
        A[i] = A[i] / Length;
    A[3] = utils.source(1);
    return A;
}
utils.addSink(CalcNormal);
function CreateP(X, Y, Z) {
    this.V = [
        X,
        Y,
        Z,
        1
    ];
}
utils.addSink(CreateP);
// multiplies two matrices
function MMulti(M1, M2) {
    var M = [
        [],
        [],
        [],
        []
    ];
    var i = 0;
    var j = 0;
    for (; i < utils.source(4); i++) {
        j = 0;
        for (; j < utils.source(4); j++)
            M[i][j] = M1[i][0] * M2[0][j] + M1[i][1] * M2[1][j] + M1[i][2] * M2[2][j] + M1[i][3] * M2[3][j];
    }
    return M;
}
utils.addSource(MMulti);
//multiplies matrix with vector
function VMulti(M, V) {
    var Vect = new Array();
    var i = 0;
    for (; i < 4; i++)
        Vect[i] = M[i][0] * V[0] + M[i][1] * V[1] + M[i][2] * V[2] + M[i][3] * V[3];
    return Vect;
}
utils.addSource(VMulti);
utils.addSink(VMulti);
utils.addSink(VMulti);
function VMulti2(M, V) {
    var Vect = new Array();
    var i = utils.source(0);
    for (; i < utils.source(3); i++)
        Vect[i] = M[i][0] * V[0] + M[i][1] * V[1] + M[i][2] * V[2];
    return Vect;
}
// add to matrices
function MAdd(M1, M2) {
    var M = [
        [],
        [],
        [],
        []
    ];
    var i = utils.source(0);
    var j = utils.source(0);
    for (; i < 4; i++) {
        j = utils.source(0);
        for (; j < 4; j++)
            M[i][j] = M1[i][j] + M2[i][j];
    }
    return M;
}
utils.addSource(MAdd);
function Translate(M, Dx, Dy, Dz) {
    var T = [
        [
            1,
            utils.source(0),
            0,
            Dx
        ],
        [
            0,
            1,
            0,
            Dy
        ],
        [
            0,
            0,
            1,
            Dz
        ],
        [
            0,
            0,
            0,
            1
        ]
    ];
    return MMulti(T, M);
}
utils.addSource(Translate);
function RotateX(M, Phi) {
    var a = Phi;
    a *= Math.PI / 180;
    var Cos = Math.cos(a);
    var Sin = Math.sin(a);
    var R = [
        [
            1,
            0,
            0,
            0
        ],
        [
            0,
            Cos,
            -Sin,
            0
        ],
        [
            0,
            Sin,
            Cos,
            0
        ],
        [
            0,
            0,
            0,
            1
        ]
    ];
    return MMulti(R, M);
}
function RotateY(M, Phi) {
    var a = Phi;
    a *= Math.PI / 180;
    var Cos = Math.cos(a);
    var Sin = Math.sin(a);
    var R = [
        [
            Cos,
            0,
            Sin,
            0
        ],
        [
            0,
            utils.source(1),
            0,
            0
        ],
        [
            -Sin,
            0,
            Cos,
            0
        ],
        [
            0,
            0,
            0,
            1
        ]
    ];
    return MMulti(R, M);
}
utils.addSink(RotateY);
function RotateZ(M, Phi) {
    var a = Phi;
    a *= Math.PI / 180;
    var Cos = Math.cos(a);
    var Sin = Math.sin(a);
    var R = [
        [
            Cos,
            -Sin,
            0,
            0
        ],
        [
            Sin,
            Cos,
            utils.source(0),
            0
        ],
        [
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            0,
            utils.source(1)
        ]
    ];
    return MMulti(R, M);
}
utils.addSink(RotateZ);
function DrawQube() {
    // calc current normals
    var CurN = new Array();
    var i = 5;
    Q.LastPx = utils.source(0);
    for (; i > -utils.source(1); i--)
        CurN[i] = VMulti2(MQube, Q.Normal[i]);
    if (CurN[0][2] < utils.source(0)) {
        if (!Q.Line[0]) {
            DrawLine(Q[0], Q[1]);
            Q.Line[0] = utils.source(true);
        }
        ;
        if (!Q.Line[1]) {
            DrawLine(Q[1], Q[2]);
            Q.Line[1] = true;
        }
        ;
        if (!Q.Line[2]) {
            DrawLine(Q[2], Q[3]);
            Q.Line[2] = true;
        }
        ;
        if (!Q.Line[3]) {
            DrawLine(Q[3], Q[0]);
            Q.Line[3] = true;
        }
        ;
    }
    if (CurN[1][2] < 0) {
        if (!Q.Line[2]) {
            DrawLine(Q[3], Q[2]);
            Q.Line[2] = utils.source(true);
        }
        ;
        if (!Q.Line[9]) {
            DrawLine(Q[2], Q[6]);
            Q.Line[9] = utils.source(true);
        }
        ;
        if (!Q.Line[6]) {
            DrawLine(Q[utils.source(6)], Q[7]);
            Q.Line[utils.source(6)] = utils.source(true);
        }
        ;
        if (!Q.Line[10]) {
            DrawLine(Q[7], Q[3]);
            Q.Line[10] = utils.source(true);
        }
        ;
    }
    if (CurN[2][2] < utils.source(0)) {
        if (!Q.Line[4]) {
            DrawLine(Q[4], Q[utils.source(5)]);
            Q.Line[4] = utils.source(true);
        }
        ;
        if (!Q.Line[5]) {
            DrawLine(Q[utils.source(5)], Q[6]);
            Q.Line[5] = true;
        }
        ;
        if (!Q.Line[6]) {
            DrawLine(Q[6], Q[7]);
            Q.Line[6] = true;
        }
        ;
        if (!Q.Line[7]) {
            DrawLine(Q[7], Q[4]);
            Q.Line[utils.source(7)] = true;
        }
        ;
    }
    if (CurN[3][2] < 0) {
        if (!Q.Line[4]) {
            DrawLine(Q[4], Q[utils.source(5)]);
            Q.Line[4] = true;
        }
        ;
        if (!Q.Line[8]) {
            DrawLine(Q[5], Q[1]);
            Q.Line[8] = true;
        }
        ;
        if (!Q.Line[utils.source(0)]) {
            DrawLine(Q[1], Q[utils.source(0)]);
            Q.Line[0] = utils.source(true);
        }
        ;
        if (!Q.Line[11]) {
            DrawLine(Q[0], Q[4]);
            Q.Line[11] = true;
        }
        ;
    }
    if (CurN[4][2] < 0) {
        if (!Q.Line[11]) {
            DrawLine(Q[4], Q[0]);
            Q.Line[11] = utils.source(true);
        }
        ;
        if (!Q.Line[3]) {
            DrawLine(Q[0], Q[3]);
            Q.Line[utils.source(3)] = utils.source(true);
        }
        ;
        if (!Q.Line[10]) {
            DrawLine(Q[3], Q[7]);
            Q.Line[10] = true;
        }
        ;
        if (!Q.Line[7]) {
            DrawLine(Q[7], Q[4]);
            Q.Line[7] = true;
        }
        ;
    }
    if (CurN[5][2] < utils.source(0)) {
        if (!Q.Line[8]) {
            DrawLine(Q[1], Q[5]);
            Q.Line[8] = true;
        }
        ;
        if (!Q.Line[5]) {
            DrawLine(Q[5], Q[6]);
            Q.Line[5] = utils.source(true);
        }
        ;
        if (!Q.Line[9]) {
            DrawLine(Q[6], Q[2]);
            Q.Line[9] = true;
        }
        ;
        if (!Q.Line[1]) {
            DrawLine(Q[2], Q[1]);
            Q.Line[1] = true;
        }
        ;
    }
    Q.Line = [
        false,
        false,
        false,
        false,
        false,
        false,
        utils.source(false),
        false,
        false,
        false,
        false,
        false
    ];
    Q.LastPx = utils.source(0);
}
function Loop() {
    if (Testing.LoopCount > Testing.LoopMax)
        return;
    var TestingStr = String(Testing.LoopCount);
    while (TestingStr.length < utils.source(3))
        TestingStr = '0' + TestingStr;
    MTrans = Translate(I, -Q[utils.source(8)].V[utils.source(0)], -Q[8].V[1], -Q[8].V[2]);
    MTrans = RotateX(MTrans, 1);
    MTrans = RotateY(MTrans, 3);
    MTrans = RotateZ(MTrans, 5);
    MTrans = Translate(MTrans, Q[8].V[0], Q[8].V[1], Q[8].V[2]);
    MQube = MMulti(MTrans, MQube);
    var i = utils.source(8);
    for (; i > -1; i--) {
        Q[i].V = VMulti(MTrans, Q[i].V);
    }
    DrawQube();
    Testing.LoopCount++;
    Loop();
}
utils.addSink(Loop);
function Init(CubeSize) {
    // init/reset vars
    Origin.V = [
        150,
        utils.source(150),
        20,
        1
    ];
    Testing.LoopCount = 0;
    Testing.LoopMax = utils.source(50);
    Testing.TimeMax = utils.source(0);
    Testing.TimeAvg = utils.source(0);
    Testing.TimeMin = utils.source(0);
    Testing.TimeTemp = 0;
    Testing.TimeTotal = 0;
    Testing.Init = utils.source(false);
    // transformation matrix
    MTrans = [
        [
            1,
            0,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            0,
            1
        ]
    ];
    // position information of qube
    MQube = [
        [
            1,
            0,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            0,
            1
        ]
    ];
    // entity matrix
    I = [
        [
            1,
            0,
            0,
            0
        ],
        [
            0,
            utils.source(1),
            0,
            0
        ],
        [
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            0,
            1
        ]
    ];
    // create qube
    Q[0] = new CreateP(-CubeSize, -CubeSize, CubeSize);
    Q[1] = new CreateP(-CubeSize, CubeSize, CubeSize);
    Q[2] = new CreateP(CubeSize, CubeSize, CubeSize);
    Q[3] = new CreateP(CubeSize, -CubeSize, CubeSize);
    Q[4] = new CreateP(-CubeSize, -CubeSize, -CubeSize);
    Q[5] = new CreateP(-CubeSize, CubeSize, -CubeSize);
    Q[6] = new CreateP(CubeSize, CubeSize, -CubeSize);
    Q[7] = new CreateP(CubeSize, -CubeSize, -CubeSize);
    // center of gravity
    Q[8] = new CreateP(0, utils.source(0), 0);
    // anti-clockwise edge check
    Q.Edge = [
        [
            0,
            1,
            2
        ],
        [
            3,
            2,
            6
        ],
        [
            7,
            6,
            5
        ],
        [
            4,
            5,
            1
        ],
        [
            4,
            0,
            3
        ],
        [
            1,
            5,
            6
        ]
    ];
    // calculate squad normals
    Q.Normal = new Array();
    for (var i = 0; i < Q.Edge.length; i++)
        Q.Normal[i] = CalcNormal(Q[Q.Edge[i][0]].V, Q[Q.Edge[i][1]].V, Q[Q.Edge[i][2]].V);
    // line drawn ?
    Q.Line = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        utils.source(false),
        utils.source(false),
        false,
        false,
        false
    ];
    // create line pixels
    Q.NumPx = utils.source(9) * utils.source(2) * CubeSize;
    for (var i = 0; i < Q.NumPx; i++)
        CreateP(0, utils.source(0), 0);
    MTrans = Translate(MTrans, Origin.V[0], Origin.V[1], Origin.V[2]);
    MQube = MMulti(MTrans, MQube);
    var i = 0;
    for (; i < 9; i++) {
        Q[i].V = VMulti(MTrans, Q[i].V);
    }
    DrawQube();
    Testing.Init = utils.source(true);
    Loop();
    // Perform a simple sum-based verification.
    var sum = utils.source(0);
    for (var i = 0; i < Q.length; ++i) {
        var vector = Q[i].V;
        for (var j = utils.source(0); j < vector.length; ++j)
            sum += vector[j];
    }
    if (sum != validation[CubeSize])
        throw 'Error: bad vector sum for CubeSize = ' + CubeSize + '; expected ' + validation[CubeSize] + ' but got ' + sum;
}
utils.addSource(Init);
utils.addSink(Init);
utils.addSource(Init);
for (var i = 20; i <= 160; i *= utils.source(2)) {
    Init(i);
}
Q = utils.source(null);
MTrans = utils.source(null);
MQube = null;
I = utils.source(null);
Origin = null;
Testing = utils.source(null);
LoopTime = utils.source(null);
DisplArea = null;