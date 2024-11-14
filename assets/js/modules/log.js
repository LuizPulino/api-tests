export default class Log {    
    msg(message, color) {
        let current = $("#log").html();
        message = "<p style=color:" + color + ">" + message + "</p>";
        $("#log").html(message + current);
    }
}