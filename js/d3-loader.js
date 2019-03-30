$("[data-d3-graph]").each(function () {
    var $this = $(this)
    var graphName = $this.data("d3-graph")
    var dirName = "/js/d3-graphs/" + graphName + "/"

    var loadJS = function () {
        var script = document.createElement("script")
        script.onerror = function (e) {
            console.error(e)
        }
    
        script.src = dirName +  "index.js"
        
        document.body.appendChild(script)
    }

    if ($this.attr("data-html")) { 
        $this.load(dirName + "index.html", function () {
            var $svg = $("svg", $this)
            if($svg.length) {
                var svgWidth = $svg.attr("width")
                var svgHeight = $svg.attr("height")
                $svg.attr("width", "100%");
                $svg.attr({
                    viewBox: "0 0 " + svgWidth + " " + svgHeight,
                    preserveAspectRatio: "xMidYMid meet"
                })
            }
            loadJS();
        })
    } else {
        loadJS();
    }

    if ($this.attr("data-css")) {
        $("<link rel='stylesheet' href='" + dirName + "index.css'>").appendTo("head")
    }
})