document.addEventListener("DOMContentLoaded", function () {
    // Function to connect nodes
    function connectNodes() {
        var lines = [];

        // Connect parent to child nodes
        var parents = document.querySelectorAll('.parent');
        parents.forEach(function (parent) {
            var children = parent.querySelectorAll('.node:not(.parent)');
            children.forEach(function (child) {
                var line = new LeaderLine(parent, child, { color: '#336699', size: 2 });
                lines.push(line);
            });
        });

        // Connect child to grandchild nodes
        var children = document.querySelectorAll('.node[class^="child"]');
        children.forEach(function (child) {
            var grandchildren = child.querySelectorAll('.node:not(.child)');
            grandchildren.forEach(function (grandchild) {
                var line = new LeaderLine(child, grandchild, { color: '#336699', size: 2 });
                lines.push(line);
            });
        });

        return lines;
    }

    // Array to store all lines
    var lines = connectNodes();
});