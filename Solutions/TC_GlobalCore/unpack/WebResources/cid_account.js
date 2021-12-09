//Xrm.Page.AddressComplete_Selected = AddressComplete_Selected();

Xrm.Utility.AddressComplete_Selected = function () {
    debugger;
}

function Me_OnLoad(context) {
    debugger;
}

function xxx() {
    debugger;
    alert("AddressComplete_Selected");
}

function RequirementLevelSetting() {
	var selectedLevel = Xrm.Page.getAttribute('cid_requirementlevel').getValue();

	//Basic
	if(selectedLevel == '100000000'){
		Xrm.Page.getControl('Mode_of_Transportation').setVisible(false);
		Xrm.Page.getControl('Company_UN_Numbers').setVisible(false);
	}
	//Extended
	else if(selectedLevel == '100000001'){
		Xrm.Page.getControl('Mode_of_Transportation').setVisible(true);
		Xrm.Page.getControl('Company_UN_Numbers').setVisible(true);
	}
}