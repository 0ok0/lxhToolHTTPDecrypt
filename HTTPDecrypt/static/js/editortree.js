var methodinfo = null;

var setting = {

	callback: {
		onClick: zTreeOnClick,
		onRightClick: OnRightClick
	}

};


function OnRightClick(event, treeId, treeNode) {
			if (!treeNode && event.target.tagName.toLowerCase() != "button" && $(event.target).parents("a").length == 0) {
				zTree.cancelSelectedNode();
			} else if (treeNode && !treeNode.noparent && treeNode.isParent) {
				// console.log();
				zTree.selectNode(treeNode);
				$('#mm').menu('show', { left: event.pageX,
										top:  event.pageY,
										hideOnUnhover:false});

			}else if(treeNode.noparent){
				zTree.selectNode(treeNode);
				$('#mm1').menu('show', { left: event.pageX,
										top:  event.pageY,
										hideOnUnhover:false});
			}

			$('#mm').menu({

                onClick: function(item) {
                    if (item.name == 'sendhooks') {
                    	sendhooks();
                    } else if (item.name == 'modify' && !$('#modifyNode').attr('disabled')) {
                     alert("修改节点");
                    } else if (item.name == 'del' && !$('#delNode').attr('disabled')) {
                     /*
                     if (treeNode.children && treeNode.children.length > 0) {
                      alert("该节点是父节点，还要继续删除么？");
                     }*/
                     alert("删除节点");
                    }
         	}
        });

		$('#mm1').menu({

                onClick: function(item) {
                    if (item.name == 'SendtotoBurp') {
                    sendtoburp();
                    // alert("新增节点");
                    // } else if (item.name == 'modify' && !$('#modifyNode').attr('disabled')) {
                    //  alert("修改节点");
                    // } else if (item.name == 'del' && !$('#delNode').attr('disabled')) {
                     /*
                     if (treeNode.children && treeNode.children.length > 0) {
                      alert("该节点是父节点，还要继续删除么？");
                     }*/

                    }
         	}
        });
}

function sendhooks() {
	var fullclazzname = zTree.getSelectedNodes()[0].fullclassname;
	var matchtext = Hooksinfo.getValue();
   if (matchtext){
   		Hooksinfo.setValue(matchtext + '\n' + fullclazzname);
    }else {
   		Hooksinfo.setValue(fullclazzname);
    }

}

function sendtoburp() {
	var pkg_class_method = zTree.getSelectedNodes()[0].pkg_class_method;
	$('#InspectText').val(pkg_class_method);
}

function zTreeOnClick(event, treeId, treeNode) {
	methodinfo = treeNode.methodinfo;
	if (!methodinfo) {
		return ;
	}
	$("#findsmethodname").text(methodinfo);
    // alert(treeNode.name +','+ treeNode.methodname);
};


	var FindMatchcode = ace.edit("FindMatchcode");
    //设置编辑器样式，对应theme-*.js文件
    FindMatchcode.setTheme("ace/theme/twilight");
    //设置代码语言，对应mode-*.js文件
    // editor.session.setMode("ace/mode/javascript");
    //设置打印线是否显示
    FindMatchcode.setShowPrintMargin(false);
    //设置是否只读
    FindMatchcode.setReadOnly(false);

	var FindOptionscode = ace.edit("FindOptionscode");
    //设置编辑器样式，对应theme-*.js文件
    FindOptionscode.setTheme("ace/theme/twilight");
    FindOptionscode.setValue("{\"startsWith\":\"\"}\n{\"contains\":\"\"}\n{\"endsWith\":\"\"}");
    //设置代码语言，对应mode-*.js文件
    // editor.session.setMode("ace/mode/javascript");
    //设置打印线是否显示
    FindOptionscode.setShowPrintMargin(false);
    //设置是否只读
    FindOptionscode.setReadOnly(false);


	var toBurpinfo = ace.edit("infomessage");
    toBurpinfo.setTheme("ace/theme/twilight");
    toBurpinfo.setShowPrintMargin(false);
    toBurpinfo.setReadOnly(false);

	var Hooksinfo = ace.edit("matchtext");
    Hooksinfo.setTheme("ace/theme/twilight");
    Hooksinfo.setShowPrintMargin(false);
    Hooksinfo.setReadOnly(false);
    //以下部分是设置输入代码提示的，如果不需要可以不用引用ext-language_tools.js
   // ace.require("ace/ext/language_tools");
   // FindOptionscode.session.setMode("ace/mode/text");
   // FindOptionscode.setOptions({
   //      enableBasicAutocompletion: true,
   //      enableSnippets: true,
   //      enableLiveAutocompletion: true,
	// 	autoScrollEditorIntoView: true
   // });
