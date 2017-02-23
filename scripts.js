var $ = go.GraphObject.make;
var folderImage = "images/folder1600.png";
var fileImage = "images/file.png";

function showMessage(s) {
    document.getElementById("inputEventsMsg").textContent = s;
}

var myDiagram =
    $(go.Diagram, "myDiagramDiv", {
        initialContentAlignment:  go.Spot.Center,
        "undoManager.isEnabled": true,
        allowZoom: false,
        layout: $(go.TreeLayout, { angle: 90, layerSpacing: 35 })
    });


myDiagram.nodeTemplate =
    $(go.Node, "Vertical", { isTreeExpanded: false },

        $(go.Picture, { width: 30, height: 30 },
            new go.Binding("source")),


        $(go.TextBlock, "Default Text", { margin: 12, stroke: "black", font: "bold 12px sans-serif",editable: true },
            new go.Binding("text", "name")), { click: function(e, obj) { showMessage(obj.part.data.content); } },

        $("TreeExpanderButton", { alignment: go.Spot.Bottom, alignmentFocus: go.Spot.Top }, { visible: true })


    );



myDiagram.linkTemplate =
    $(go.Link, { routing: go.Link.Orthogonal, corner: 1 },
        $(go.Shape, { strokeWidth: 3, stroke: "#555" }));



myDiagram.addDiagramListener("InitialLayoutCompleted", function(e) {
    e.diagram.findTreeRoots().each(function(r) { r.expandTree(3); });
});


var model = $(go.TreeModel);


model.nodeDataArray = [
    // parent 1 ----------------root
    { key: "1", name: "root", source: folderImage, content: "Root Folder" },

    // parent 2 -------------- app

    { key: "2", parent: "1", name: "app", source: folderImage, content: " Folder contains action,components,containers,reducers,images" },
    { key: "3", parent: "2", name: "actions", source: folderImage, content: "Folder holds redux actions" },
    { key: "4", parent: "2", name: "components", source: folderImage, content: "Folder holds react components" },
    { key: "5", parent: "2", name: "containers", source: folderImage, content: "Folder holds containers" },
    { key: "6", parent: "2", name: "reducers", source: folderImage, content: "Folder holds redux reducers" },
    { key: "7", parent: "2", name: "images", source: folderImage, content: "Folder holds images" },


    //-----------------app/components
    { key: "8", parent: "4", name: "BookDetailViewStatusBar", source: folderImage, content: "Folder that holds scripts and styles for BookDetailViewStatusBar " },
    { key: "9", parent: "4", name: "bookGriditem", source: folderImage, content: "Folder that holds scripts and styles for bookGriditem" },
    { key: "10", parent: "4", name: "bookGridView", source: folderImage, content: "Folder that holds scripts and styles for bookGridView" },
    { key: "11", parent: "4", name: "lockPinView", source: folderImage, content: "Folder that holds scripts and styles for lockPinView" },
    { key: "12", parent: "4", name: "userProfileInputView", source: folderImage, content: "Folder that holds scripts and styles for userProfileInputView" },
    { key: "13", parent: "4", name: "toolBarView", source: folderImage, content: "Folder that holds scripts and styles for toolBarView" },

    //----------------- app/containers/

    { key: "14", parent: "5", name: "loginPageView", source: folderImage, content: "Folder that holds scripts and styles for loginPageView" },
    { key: "15", parent: "5", name: "registerPageView", source: folderImage, content: "Folder that holds scripts and styles for registerPageView" },
    { key: "16", parent: "5", name: "userProfilePageView", source: folderImage, content: "Folder that holds scripts and styles for userProfilePageView" },
    { key: "17", parent: "5", name: "bookDetailPageView", source: folderImage, content: "Folder that holds scripts and styles for bookDetailPageView" },
    { key: "18", parent: "5", name: "bookListingPageView", source: folderImage, content: "Folder that holds scripts and styles for bookListingPageView" },
    { key: "19", parent: "5", name: "childLockPageView", source: folderImage, content: "Folder that holds scripts and styles for childLockPageView" },

    //--------------------app/actions

    { key: "20", parent: "3", name: "LoginActions.js", source: fileImage, content: "Actions related to login" },
    { key: "21", parent: "3", name: "NavActions.js", source: fileImage, content: "Actions related to navigation" },



    //------------------------app/reducers
    { key: "23", parent: "6", name: "index.js", source: fileImage, content: "Multiple reducers implemented here" },
    { key: "24", parent: "6", name: "navigation.js", source: fileImage, content: "Reducers related to navigation" },
    { key: "25", parent: "6", name: "userManagement.js", source: fileImage, content: "Reducers related to usermanagement" },
    { key: "26", parent: "1", name: "index.android.js", source: fileImage, content: "This is the root file for android" },
    { key: "27", parent: "1", name: "index.ios.js", source: fileImage, content: "This id the root file for ios" },
    { key: "28", parent: "1", name: "android", source: folderImage, content: "This folder contains all the necessary files for android" },
    { key: "29", parent: "1", name: "ios", source: folderImage, content: "This folder contains all the necessary file for ios" },


    //--------------------------app/images
    { key: "30", parent: "2", name: "styles", source: folderImage, content: "This folder contains all the genric styles" }



];
myDiagram.model = model;
