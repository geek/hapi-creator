$(document).ready(function () {

    var editor = ace.edit("manifest_editor");
    editor.getSession().setMode("ace/mode/json");

    $('form').jsonForm({
        schema: {
            "servers": {
                "type": "array",
                "items": {
                    "type": "object",
                    "title": "Servers",
                    "properties": {
                        "port": {
                            "type": "integer",
                            "title": "Port"
                        }
                    }
                }
            },
            "plugins": {
                "type": "array",
                "items": {
                    "type": "object",
                    "title": "Plugins",
                    "properties": {
                    }
                }
            }
        },
        onSubmitValid: function (values) {

            var stringified = JSON.stringify(values, null, '    ');
            editor.getSession().setValue(stringified);
        }
    });
});

