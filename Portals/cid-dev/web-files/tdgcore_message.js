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
                        "code": "CID_PORTAL",
                        "message_en": "Transport Canada CID Portal",
                        "message_fr": "Portail CID de Transports Canada"
                    },
                    {
                        "code": "tdg_unnumberid",
                        "message_en": "UN Display Name",
                        "message_fr": "Nom d'affichage de l'ONU"
                    },
                    {
                        "code": "cid_naicscode",
                        "message_en": "NAICS Code",
                        "message_fr": "Code SCIAN"
                    },
                    {
                        "code": "OK",
                        "message_en": "OK",
                        "message_fr": "D'accord"
                    },
                    {
                        "code": "Yes",
                        "message_en": "Yes",
                        "message_fr": "Qui"
                    },
                    {
                        "code": "No",
                        "message_en": "No",
                        "message_fr": "Non",
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
                        "message_en": "{0} record(s) added",
                        "message_fr": "{0} information(s) ont été ajoutées"
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
                        "message_en": "Company Registration",
                        "message_fr": "Enregistrement de la société"
                    },
                    {
                        "code": "m000009",
                        "message_en": "Company Registration for {0}",
                        "message_fr": "Enregistrement de la société pour {0}"
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
                    },
                    {
                        "code": "m000015",
                        "message_en": "You cannot proceed before adding at least one mode of transportation.",
                        "message_fr": "Vous ne pouvez pas continuer avant d'avoir ajouté au moins un mode de transport."
                    },
                    {
                        "code": "m000016",
                        "message_en": "You cannot proceed before adding class(es).",
                        "message_fr": "Vous ne pouvez pas continuer avant d'ajouter des classes."
                    },
                    {
                        "code": "m000017",
                        "message_en": "You cannot proceed before adding UN Number(s).",
                        "message_fr": "Vous ne pouvez pas continuer avant d'avoir ajouté le(s) numéro(s) UN."
                    },
                    {
                        "code": "m000018",
                        "message_en": "Invalid province",
                        "message_fr": "Invalid province_F"
                    },
                    {
                        "code": "m000100",
                        "message_en": "Back to Company Registration",
                        "message_fr": "Retour à l'enregistrement de société"
                    },
                    {
                        "code": "m000101",
                        "message_en": "As seen below your ERAP(s) from the TC ROOT systems have been transferred over If necessary add any remaining ERAPs, or choose the [Next] button to continue.",
                        "message_fr": "As seen below your ERAP(s) from the TC ROOT systems have been transferred over If necessary add any remaining ERAPs, or choose the [Next] button to continue."
                    }
              ];

            return list;
        }
    }
}
