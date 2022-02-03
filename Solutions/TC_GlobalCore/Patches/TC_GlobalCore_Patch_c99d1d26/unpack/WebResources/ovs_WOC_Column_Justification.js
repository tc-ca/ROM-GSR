var CRJ_Column_Justification = (function (window, document) {

    //********************private methods*******************


    function displayIconTooltip(rowData, userLCID) {

        var str = JSON.parse(rowData);

        var image = 0;
        var isHQ = (str.ovs_hqflag == null)
            ? false : (str.ovs_hqflag_Value._val == 1) ? true : false;
        var isPriorityScore = (isNaN(str.ovs_cdpriorityscore_Value))
            ? false : str.ovs_cdpriorityscore_Value >= 100;
        var isLocal = (str.ovs_regionflag == null)
            ? false : (str.ovs_regionflag_Value._val == 1) ? true : false;
        var isJust = (str.ovs_justification_Value == null)
            ? false : (str.ovs_justification_Value.trim() == "")
                ? false : true;

        if (isHQ && isPriorityScore && isLocal && !isJust) image = 1;// justification text mandatory
        if (!isHQ && !isPriorityScore && isLocal && !isJust) image = 1;//justification text mandatory
        if (isHQ && isLocal && !isJust) image = 1;// justification text mandatory



        switch (image) {
            case 1:
                imgName = "ovs_eclamation_red_16.png";
                switch (userLCID) {
                    case 1036:
                        tooltip = "French: Justification cannot be empty";
                        break;
                    default:
                        tooltip = "English: Justification cannot be empty";
                        break;
                }
                break;
            default:
                imgName = "";
                tooltip = "";
                break;
        }
        var resultarray = [imgName, tooltip];
        return resultarray;

    }

    //********************private methods end***************

    //********************public methods***************
    return {

        displayIconTooltip: displayIconTooltip,
    };

})(window, document);