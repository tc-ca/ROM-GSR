// tdg.message = tdgcore.message
if (typeof (tdg.message) == "undefined") {
    tdg.message = {
        list: function () {
            debugger;

            var list =
                [
                    {
                        "code": "m000001",
                        "message_en": "Invalid CRA Business Number",
                        "message_fr": "Numéro d'entreprise de l'ARC invalide"
                    },
                    {
                        "code": "m000002",
                        "message_en": "You cannot proceed before adding at least one secondary contact.",
                        "message_fr": "Vous ne pouvez pas continuer avant d'avoir ajouté au moins un contact secondaire."
                    }
                ];

            return list;
        }
    }
}
