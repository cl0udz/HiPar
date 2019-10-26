var tests = [
    {"name":"codem-transcode", "test":"./TestCodemTranscode"},
    {"name":"autolint", "test":"./TestAutolint"}
];
require("./RunTests.js")(tests, "./resources/out.txt", false);
