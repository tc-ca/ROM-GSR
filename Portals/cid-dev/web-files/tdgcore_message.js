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

            var m000020_EN = "The data grid below lists the Sites that are understood to be associated to your Company. " +
                "Please choose the <b>[V]</b> button on each row to update Attest each Site, or flag it as not your Company's Site.\n\n" +
                "When those updates are Complete, please add any remaining Sites individually by choosing the <b>[+Add]</b> button," +
                "or all at once via Excel, by choosing the <b>[Bulk Add/Update]</b> button."
            var m000020_FR = "The data grid below lists the Sites that are understood to be associated to your Company. " +
                "Please choose the <b>[V]</b> button on each row to update Attest each Site, or flag it as not your Company's Site.\n\n" +
                "When those updates are Complete, please add any remaining Sites individually by choosing the <b>[+Add]</b> button," +
                "or all at once via Excel, by choosing the <b>[Bulk Add/Update]</b> button._FR";

            var m000021_EN = "Existing Sites where 'Is Site Attested' is set to 'No', need to be attested by choosing one of " +
                "the options via the <b>[V]</b> button at the far right of those rows. All sites need to be attested before the Bulk option can be chosen.\n\n" +
                "To add additional Sites individually, choose the <b>[+Add]</b> button. Alternatively, choose the <b>[Bulk Add/Update]</b> " +
                "button to add all new Sites at once via Excel.\n\n" +
                "To edit one of the Sites, mouse-click the underlined Site ID link of that row, or choose the option from the <b>[V]</b> button at the end.\n\n" +
                "Choose the <b>[Next]</b> button, once all Sites are added and attested.\n\n" +
                "If required, choose the <b>[Previous]</b> button below to return to the Attest Company screen."
            var m000021_FR = "Existing Sites where 'Is Site Attested' is set to 'No', need to be attested by choosing one of " +
                "the options via the <b>[V]</b> button at the far right of those rows. All sites need to be attested before the Bulk option can be chosen.\n\n" +
                "To add additional Sites individually, choose the <b>[+Add]</b> button. Alternatively, choose the <b>[Bulk Add/Update]</b> " +
                "button to add all new Sites at once via Excel.\n\n" +
                "To edit one of the Sites, mouse-click the underlined Site ID link of that row, or choose the option from the <b>[V]</b> button at the end.\n\n" +
                "Choose the <b>[Next]</b> button, once all Sites are added and attested.\n\n" +
                "If required, choose the <b>[Previous]</b> button below to return to the Attest Company screen._FR"

            var m000022_EN = "To add Sites individually, choose the <b>[+Add]</b> button. Alternatively, choose the <b>[Bulk Add/Update]</b> button to add all new Sites at once via Excel.\n\n" +
                "To edit one of the Sites, mouse-click the underlined Site ID link of that row, or choose the option from the <b>[V]</b> button at the end.\n\n" +
                "Choose the <b>[Next]</b> button, once all Sites are added and attested.\n\n" +
                "If required, choose the <b>[Previous]</b> button below to return to the Attest Company screen."
            var m000022_FR = "To add Sites individually, choose the <b>[+Add]</b> button. Alternatively, choose the <b>[Bulk Add/Update]</b> button to add all new Sites at once via Excel.\n\n" +
                "To edit one of the Sites, mouse-click the underlined Site ID link of that row, or choose the option from the <b>[V]</b> button at the end.\n\n" +
                "Choose the <b>[Next]</b> button, once all Sites are added and attested.\n\n" +
                "If required, choose the <b>[Previous]</b> button below to return to the Attest Company screen._FR"

            var m000023_EN = "To add Sites individually, choose the <b>[+Add]</b> button below.\n\n" +
                "To edit one of the Sites, mouse-click the underlined Site ID link of that row, or choose the option from the <b>[V]</b> button at the end.\n\n" +
                "Alternatively, choose the <b>[Bulk Add/Update]</b> button to edit existing, and add new, Sites all at once via Excel.\n\n" +
                "If required, choose the 'Deactivate / Reactivate' option via the <b>[V]</b> button at the end of a Site's row.\n\n" +
                "Note:\n" +
                "- <b>[Bulk Add/Update]</b> will appear to the right of the <b>[+Add]</b> button\n" +
                "- For In Year / Annual Compliance, the <b>[V]</b> options will be 'Open Site Details', 'Deactivate / Reactivate'"
            var m000023_FR = "To add Sites individually, choose the <b>[+Add]</b> button below.\n\n" +
                "To edit one of the Sites, mouse-click the underlined Site ID link of that row, or choose the option from the <b>[V]</b> button at the end.\n\n" +
                "Alternatively, choose the <b>[Bulk Add/Update]</b> button to edit existing, and add new, Sites all at once via Excel.\n\n" +
                "If required, choose the 'Deactivate / Reactivate' option via the <b>[V]</b> button at the end of a Site's row.\n\n" +
                "Note:\n" +
                "- <b>[Bulk Add/Update]</b> will appear to the right of the <b>[+Add]</b> button\n" +
                "- For In Year / Annual Compliance, the <b>[V]</b> options will be 'Open Site Details', 'Deactivate / Reactivate'_FR"
				
			var m000030_EN = "The registration of your Company in the CID Data Platform is now complete. " +
				"An email has been sent to your address, confirming the completion of the registration." +
				"<br><br>You are currently in the initial in-year page, which will be your starting page for each future CID session."
            var m000030_FR = "L'enregistrement de votre entreprise dans la plateforme de données CID est maintenant terminé. " +
				"Un e-mail a été envoyé à votre adresse, confirmant la finalisation de l'inscription." +
				"<br><br>Vous êtes actuellement dans la page initiale en cours d'année, qui sera votre page de démarrage pour chaque future session CID."
							
			var m000031_EN = "You are changing the site requirement level from basic to extended. " +
				"You are required to complete the extended processing requirements for the site before the site can be attested.<br><br>" +
				"You must enter the following applicable information for the site:<br>" +
				"All applicable UN Numbers<br>" +
				"<p>- Unit of Measurement<br>" +
				"- Annual Quantity / Volume<br>" +
				"- Annual Number of Consignments</p>"
		
		
            var m000031_FR = "Vous modifiez le niveau d'exigence du site de base à étendu. " +
				"Vous devez remplir les exigences de traitement étendu pour le site avant que le site puisse être attesté.<br><br>" +
				"Vous devez saisir les informations applicables suivantes pour le site:<br>" +
				"Tous les Nom d'affichage de l'ONU applicables<br>" +
				"<p>- Unité de mesure<br>" +
				"- Quantité annuelle / Volume<br>" +
				"- Nombre annuel d'envois</p>"
				
            var list =
                [
                    {
                        "code": "CID_PORTAL",
                        "message_en": "TDG CLIENT IDENTIFICATION DATABASE",
                        "message_fr": "TDG CLIENT IDENTIFICATION DATABASE_FR"
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
                        "code": "NAICS Class (NAICS Code)",
                        "message_en": "Title",
                        "message_fr": "Titre",
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
                        "message_fr": "Enregistrement de l'entreprise"
                    },
                    {
                        "code": "m000009",
                        "message_en": "Company Registration for {0}",
                        "message_fr": "Enregistrement de l'entreprise pour {0}"
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
                        "message_en": "You cannot proceed before attesting all the Company Sites, via opening the site details and completing all the required information for each site.",
                        "message_fr": "FR-You cannot proceed before attesting all the Company Sites, via opening the site details and completing all the required information for each site."
                    },
                    {
                        "code": "m000013",
                        "message_en": m000013_EN,
                        "message_fr": m000013_FR
                    },
                    {
                        "code": "m000014",
                        "message_en": "This Company is either in the process of being registered, or is fully registered. You will not be able to use this Company at this time.",
                        "message_fr": "This Company is either in the process of being registered, or is fully registered. You will not be able to use this Company at this time._FR"
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
                        "code": "m000019",
                        "message_en": "ERAP {0} is assigned to another Company. Are you sure you want to complete the add?",
                        "message_fr": "ERAP {0} is assigned to another Company. Are you sure you want to complete the add?_F"
                    },
                    {
                        "code": "m000020",
                        "message_en": m000020_EN,
                        "message_fr": m000020_FR
                    },
                    {
                        "code": "m000021",
                        "message_en": m000021_EN,
                        "message_fr": m000021_FR
                    },
                    {
                        "code": "m000022",
                        "message_en": m000022_EN,
                        "message_fr": m000022_FR
                    },
                    {
                        "code": "m000023",
                        "message_en": m000023_EN,
                        "message_fr": m000023_FR
                    },
                    {
                        "code": "m000024",
                        "message_en": "Site Registration for {0}",
                        "message_fr": "Enregistrement du site pour {0}"
                    },
                    {
                        "code": "m000025",
                        "message_en": "Operation Registration for {0}",
                        "message_fr": "Enregistrement de l'opération pour {0}"
                    },
                    {
                        "code": "m000026",
                        "message_en": "You cannot proceed before attesting your company data changes, please check the 'Attestation' box",
                        "message_fr": "You cannot proceed before attesting your company data changes, please check the 'Attestation' box_FR"
                    },
                    {
                        "code": "m000027",
                        "message_en": "Further Site Details",
                        "message_fr": "Further Site Details_FR"
                    },
                    {
                        "code": "m000028",
                        "message_en": "UN Number does not exist",
                        "message_fr": "UN Number does not exist_FR"
                    },
                    {
                        "code": "m000029",
                        "message_en": "Switch Site Type",
                        "message_fr": "Switch Site Type_FR"
                    },
					{
                        "code": "m000030",
                        "message_en": m000030_EN,
                        "message_fr": m000030_FR
                    },
					{
                        "code": "m000031",
                        "message_en": m000031_EN,
                        "message_fr": m000031_FR
                    },
                    {
                        "code": "m000098",
                        "message_en": "Your entered name and email account are already associated with an invitation tailored to you and your Company. The invitation is being resent and will appear at this email address shortly. Please use the link within that email to onboard onto CID.",
                        "message_fr": "Your entered name and email account are already associated with an invitation tailored to you and your Company. The invitation is being resent and will appear at this email address shortly. Please use the link within that email to onboard onto CID._FR"
                    }, {
                        "code": "m000099",
                        "message_en": "The Registration process is currently being processed by your company’s Primary Administrator. Until the Registration is complete, you will not be able add or change any data, nor Attest to the Company or Sites. You will however be able to view the current state of the Registration via the [Next] and [Previous] buttons at the bottom of the screen",
                        "message_fr": "The Registration process is currently being processed by your company’s Primary Administrator. Until the Registration is complete, you will not be able add or change any data, nor Attest to the Company or Sites. You will however be able to view the current state of the Registration via the [Next] and [Previous] buttons at the bottom of the screen_FR"
                    },
                    {
                        "code": "m000100",
                        "message_en": "Back to Company Registration",
                        "message_fr": "Retour à l'enregistrement de société"
                    },
                    {
                        "code": "m000101",
                        "message_en": "As seen below your ERAP(s) from the TC ROOT systems have been transferred over If necessary add any remaining ERAPs, or choose the [Next] button to continue.",
                        "message_fr": "As seen below your ERAP(s) from the TC ROOT systems have been transferred over If necessary add any remaining ERAPs, or choose the [Next] button to continue._FR"
                    },
                    {
                        "code": "m000102",
                        "message_en": "Air",
                        "message_fr": "Aérien"
                    },
                    {
                        "code": "m000103",
                        "message_en": "Maritime",
                        "message_fr": "Maritime"
                    },
                    {
                        "code": "m000104",
                        "message_en": "Rail",
                        "message_fr": "Ferroviaire"
                    },
                    {
                        "code": "m000105",
                        "message_en": "Road",
                        "message_fr": "Route"
                    },
                    {
                        "code": "m000106",
                        "message_en": "<h2>TDG CLIENT IDENTIFICATION DATABASE: {0}</h2>",
                        "message_fr": "<h2>TDG CLIENT IDENTIFICATION DATABASE_FR: {0}</h2>"
                    },
                    {
                        "code": "m000107",
                        "message_en": "You must choose a valid NAICS Code from the NAICS Code drop- down list to continue.",
                        "message_fr": "You must choose a valid NAICS Code from the NAICS Code drop- down list to continue. _FR"
                    },
                    {
                        "code": "m000108",
                        "message_en": "Back to Activity Types Screen",
                        "message_fr": "Back to Activity Types Screen_FR"
                    },
                    {
                        "code": "m000109",
                        "message_en": "Deactivate Company",
                        "message_fr": "Désactiver l'entreprise"
                    },
                    {
                        "code": "m000110",
                        "message_en": "Before selecting the Bulk option, each Site where 'Site Claimed' is set to 'Site Claim Pending', needs to be claimed, by choosing one of the options (My Active Site, My Inactive Site, or Not My Site) via that row’s [V] button.",
                        "message_fr": "Before selecting the Bulk option, each Site where 'Site Claimed' is set to 'Site Claim Pending', needs to be claimed, by choosing one of the options (My Active Site, My Inactive Site, or Not My Site) via that row’s [V] button."
                    },
                    {
                        "code": "m000111",
                        "message_en": "Bulk Add/Update",
                        "message_fr": "Ajout/Mise à jour en masse"
                    },
					{
                        "code": "m000112",
                        "message_en": "The Annual Compliance Update can only be completed on or 30 days after the Company’s Anniversary Date each year.",
                        "message_fr": "The Annual Compliance Update can only be completed on or 30 days after the Company’s Anniversary Date each year_FR."
                    }
                ];

            return list;
        }
    }
}
