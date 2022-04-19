// tdg.message = tdgcore.message
if (typeof (tdg.message) == "undefined") {
    tdg.message = {
        list: function () {
            var m000013_EN = "The Sites shown in the datagrid below, with a Site Claim of 'Site Claim Pending', " +
                             "are understood to belong to your company.\n" +
                             "Using the button (V) to the right of each of those Sites, please choose one of following actions:\n" +
                             "- Set as My Site Active\n" +
                             "- Set and Attest as My Site Inactive\n" +
                             "- Set and Attest Not My Site\n";
            var m000013_FR = "Les sites affichés dans la grille de données ci-dessous, avec une revendication de site de 'Revendication de site en attente', " +
                             "sont considérés comme appartenant à votre entreprise.\n" +
                             "À l'aide du bouton (V) à droite de chacun de ces sites, veuillez choisir l'une des actions suivantes :\n" +
                             "- Définir comme Mon site actif\n" +
                             "- Définir et attester comme mon site inactif\n" +
                             "- Définir et attester qu'il ne s'agit pas de mon site\n";
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
                    {
                        "code": "m000011",
                        "message_en": "You cannot proceed before adding active company site(s).",
                        "message_fr": "Vous ne pouvez pas continuer avant d'avoir ajouté le(s) site(s) d'entreprise actif(s)."
                    },
                    {
                        "code": "m000012",
                        "message_en": "You cannot proceed before attesting all the company sites.",
                        "message_fr": "Vous ne pouvez pas continuer avant d'avoir attesté tous les sites de l'entreprise."
                    },
                    {
                        "code": "m000013",
                        "message_en": m000013_EN,
                        "message_fr": m000013_FR
                    }
              ];

            return list;
        }
    }
}
