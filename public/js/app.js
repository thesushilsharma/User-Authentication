//const socket = new io("ws://localhost:4024");
const socket = new io(location.protocol.replace('http', 'ws') + '//' + location.hostname + (location.port ? (':' + location.port) : '') + '/');
var term = new Terminal(
    {
        fontFamily: "Consolas, 'Courier New', monospace",
        cursorStyle: "block",
        cursorBlink: "true",
        fontSize: "14",
        cursorWidth: 5
    }
);

var terminal = document.getElementById('terminal');
term.open(terminal);

term.prompt = function () {
    term.write('\r\n');
};

term.writeln('Requesting a terminal (this might take a while)...');
term.writeln('Succeeded');
term.writeln('Welcome to Tron Terminal');
term.writeln('Connected to a remote terminal');

term.writeln('');
term.prompt();

socket.on("terminal.incomingData", (data) => {
    term.write(data);
});

term.onData((data) => {
    socket.emit("terminal.keystroke", data);
});