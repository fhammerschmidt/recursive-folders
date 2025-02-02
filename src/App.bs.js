// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Folder from "./Folder.bs.js";
import * as Js_math from "rescript/lib/es6/js_math.js";

import './App.css'
;

var initState_rootFolder = {
  id: 0,
  name: "root",
  folders: [],
  files: []
};

var initState = {
  rootFolder: initState_rootFolder,
  newFolderValue: "",
  newFileValue: "",
  currentFolderId: 0
};

function reducer(state, action) {
  if (typeof action === "number") {
    return {
            rootFolder: state.rootFolder,
            newFolderValue: state.newFolderValue,
            newFileValue: "",
            currentFolderId: state.currentFolderId
          };
  }
  switch (action.TAG | 0) {
    case /* FolderInputUpdated */0 :
        return {
                rootFolder: state.rootFolder,
                newFolderValue: action._0,
                newFileValue: state.newFileValue,
                currentFolderId: state.currentFolderId
              };
    case /* FileValueUpdated */1 :
        return {
                rootFolder: state.rootFolder,
                newFolderValue: state.newFolderValue,
                newFileValue: action._0,
                currentFolderId: state.currentFolderId
              };
    case /* FolderAdded */2 :
        return {
                rootFolder: Folder.addFolderToRoot(state.rootFolder, state.currentFolderId, state.newFolderValue, action._0),
                newFolderValue: "",
                newFileValue: state.newFileValue,
                currentFolderId: state.currentFolderId
              };
    case /* FolderSelected */3 :
        return {
                rootFolder: state.rootFolder,
                newFolderValue: state.newFolderValue,
                newFileValue: state.newFileValue,
                currentFolderId: action._0
              };
    
  }
}

function App(Props) {
  var match = React.useReducer(reducer, initState);
  var dispatch = match[1];
  var state = match[0];
  var folderSelectedString = String(state.currentFolderId);
  return React.createElement("div", {
              className: "App"
            }, React.createElement("div", undefined, "Folder selected: " + folderSelectedString), React.createElement("div", undefined, React.createElement("label", undefined, "New folder name"), React.createElement("input", {
                      value: state.newFolderValue,
                      onChange: (function (e) {
                          var updatedValue = e.currentTarget.value;
                          Curry._1(dispatch, {
                                TAG: /* FolderInputUpdated */0,
                                _0: updatedValue
                              });
                        })
                    }), React.createElement("button", {
                      type: "button",
                      onClick: (function (param) {
                          Curry._1(dispatch, {
                                TAG: /* FolderAdded */2,
                                _0: Js_math.random_int(0, 100000)
                              });
                        })
                    }, "Add Folder")), React.createElement(Folder.Component.make, Curry._5(Folder.Component.makeProps, state.rootFolder, (function (id) {
                        Curry._1(dispatch, {
                              TAG: /* FolderSelected */3,
                              _0: id
                            });
                      }), 1, undefined, undefined)));
}

var make = App;

export {
  initState ,
  reducer ,
  make ,
}
/*  Not a pure module */
