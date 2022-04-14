// tdg.message = tdgcore.message
if (typeof (tdg.message) == "undefined") {
    tdg.message = {
        list: function () {
            var list =
                [
                    {
                        "code": "1. Start",
                        "message_en": "1. Start",
                        "message_fr": "1. Commencez"
                    },
                    {
                        "code": "2. Company",
                        "message_en": "2. Company",
                        "message_fr": "2. Entreprise"
                    },
                    {
                        "code": "3. Contact(s)",
                        "message_en": "3. Contact(s)",
                        "message_fr": "3. Contact(s)"
                    },
                    {
                        "code": "4. NAICS Code(s)",
                        "message_en": "4. NAICS Code(s)",
                        "message_fr": "4. Code(s) SCIAN"
                    },
                    {
                        "code": "5. ERAP(s)",
                        "message_en": "5. ERAP(s)",
                        "message_fr": "5. ERAP(s)"
                    },
                    {
                        "code": "6. Attest Company",
                        "message_en": "6. Attest Company",
                        "message_fr": "6. Attester l'entreprise"
                    },
                    {
                        "code": "7. Site(s)",
                        "message_en": "7. Site(s)",
                        "message_fr": "7. Site(s)"
                    },
                    {
                        "code": "8. Complete",
                        "message_en": "8. Complete",
                        "message_fr": "8. Terminer"
                    },
                    {
                        "code": "m000001",
                        "message_en": "Invalid CRA Business Number",
                        "message_fr": "Numéro d'entreprise de l'ARC invalide"
                    },
                    {
                        "code": "m000002",
                        "message_en": "You cannot proceed before adding at least one secondary contact.",
                        "message_fr": "Vous ne pouvez pas continuer avant d'avoir ajouté au moins un contact secondaire."
                    },
                      {
                        "code": "m000003",
                        "message_en": "Submit and Close",
                        "message_fr": "Soumettre et fermer"
                    },
                    {
                        "code": "m000004",
                        "message_en": "Submit and Add Another",
                        "message_fr": "Soumettre et ajouter un autre"
                    },
                    {
                        "code": "m000005",
                        "message_en": "Record added",
                        "message_fr": "Enregistrement ajouté"
                    },
                    {
                        "code": "m000006",
                        "message_en": "You cannot attest company before adding primary and secondary contacts.</br>",
                        "message_fr": "Vous ne pouvez pas attester de l'entreprise avant d'avoir ajouté des contacts principaux et secondaires.</br>"
                    },
                    {
                        "code": "m000007",
                        "message_en": "Print Summary",
                        "message_fr": "Imprimer le résumé"
                    },
                    {
                        "code": "m000008",
                        "message_en": "Company Registration Wizard",
                        "message_fr": "Assistant d'enregistrement de société"
                    },
                    {
                        "code": "m000009",
                        "message_en": "Company Registration Wizard for {0}",
                        "message_fr": "Assistant d'enregistrement de société pour {0}"
                    },
                    {
                        "code": "m000010",
                        "message_en": "Choose the same named button found below",
                        "message_fr": "Sélectionnez le bouton identique ci-dessous"
                    },

              ];

            return list;
        }
    }
}
