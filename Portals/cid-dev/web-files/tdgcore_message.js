// tdg.message = tdgcore.message
if (typeof (tdg.message) == "undefined") {
    tdg.message = {
        list: function () {
            var m000013_EN = "The Sites shown in the datagrid below, with a Site Claim of 'Site Claim Pending', " +
                "are understood to belong to your Organization.\n" +
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

            var m000020_EN = "The data grid below lists the Sites that are understood to be associated to your Organization. " +
                "Please choose the <b>[V]</b> button on each row to update Attest each Site, or flag it as not your Organization's Site.\n\n" +
                "When those updates are Complete, please add any remaining Sites individually by choosing the <b>[+Add]</b> button," +
                "or all at once via Excel, by choosing the <b>[Bulk Add/Update]</b> button.";
            var m000020_FR = "The data grid below lists the Sites that are understood to be associated to your Organization. " +
                "Please choose the <b>[V]</b> button on each row to update Attest each Site, or flag it as not your Organization's Site.\n\n" +
                "When those updates are Complete, please add any remaining Sites individually by choosing the <b>[+Add]</b> button," +
                "or all at once via Excel, by choosing the <b>[Bulk Add/Update]</b> button._FR";

            var m000021_EN = "Existing Sites where 'Is Site Attested' is set to 'No', need to be attested by choosing one of " +
                "the options via the <b>[V]</b> button at the far right of those rows. All sites need to be attested before the Bulk option can be chosen.\n\n" +
                "To add additional Sites individually, choose the <b>[+Add]</b> button. Alternatively, choose the <b>[Bulk Add/Update]</b> " +
                "button to add all new Sites at once via Excel.\n\n" +
                "To edit one of the Sites, mouse-click the underlined Site ID link of that row, or choose the option from the <b>[V]</b> button at the end.\n\n" +
                "Choose the <b>[Next]</b> button, once all Sites are added and attested.\n\n" +
                "If required, choose the <b>[Previous]</b> button below to return to the Attest Organization screen.";
            var m000021_FR = "Existing Sites where 'Is Site Attested' is set to 'No', need to be attested by choosing one of " +
                "the options via the <b>[V]</b> button at the far right of those rows. All sites need to be attested before the Bulk option can be chosen.\n\n" +
                "To add additional Sites individually, choose the <b>[+Add]</b> button. Alternatively, choose the <b>[Bulk Add/Update]</b> " +
                "button to add all new Sites at once via Excel.\n\n" +
                "To edit one of the Sites, mouse-click the underlined Site ID link of that row, or choose the option from the <b>[V]</b> button at the end.\n\n" +
                "Choose the <b>[Next]</b> button, once all Sites are added and attested.\n\n" +
                "If required, choose the <b>[Previous]</b> button below to return to the Attest Organization screen._FR";

            var m000022_EN = "To add Sites individually, choose the <b>[+Add]</b> button. Alternatively, choose the <b>[Bulk Add/Update]</b> button to add all new Sites at once via Excel.\n\n" +
                "To edit one of the Sites, mouse-click the underlined Site ID link of that row, or choose the option from the <b>[V]</b> button at the end.\n\n" +
                "Choose the <b>[Next]</b> button, once all Sites are added and attested.\n\n" +
                "If required, choose the <b>[Previous]</b> button below to return to the Attest Organization screen.";
            var m000022_FR = "To add Sites individually, choose the <b>[+Add]</b> button. Alternatively, choose the <b>[Bulk Add/Update]</b> button to add all new Sites at once via Excel.\n\n" +
                "To edit one of the Sites, mouse-click the underlined Site ID link of that row, or choose the option from the <b>[V]</b> button at the end.\n\n" +
                "Choose the <b>[Next]</b> button, once all Sites are added and attested.\n\n" +
                "If required, choose the <b>[Previous]</b> button below to return to the Attest Organization screen._FR";

            var m000023_EN = "To add Sites individually, choose the <b>[+Add]</b> button below.\n\n" +
                "To edit one of the Sites, mouse-click the underlined Site ID link of that row, or choose the option from the <b>[V]</b> button at the end.\n\n" +
                "Alternatively, choose the <b>[Bulk Add/Update]</b> button to edit existing, and add new, Sites all at once via Excel.\n\n" +
                "If required, choose the 'Deactivate / Reactivate' option via the <b>[V]</b> button at the end of a Site's row.\n\n" +
                "Note:\n" +
                "- <b>[Bulk Add/Update]</b> will appear to the right of the <b>[+Add]</b> button\n" +
                "- For In Year / Annual Compliance, the <b>[V]</b> options will be 'Open Site Details', 'Deactivate / Reactivate'";
            var m000023_FR = "To add Sites individually, choose the <b>[+Add]</b> button below.\n\n" +
                "To edit one of the Sites, mouse-click the underlined Site ID link of that row, or choose the option from the <b>[V]</b> button at the end.\n\n" +
                "Alternatively, choose the <b>[Bulk Add/Update]</b> button to edit existing, and add new, Sites all at once via Excel.\n\n" +
                "If required, choose the 'Deactivate / Reactivate' option via the <b>[V]</b> button at the end of a Site's row.\n\n" +
                "Note:\n" +
                "- <b>[Bulk Add/Update]</b> will appear to the right of the <b>[+Add]</b> button\n" +
                "- For In Year / Annual Compliance, the <b>[V]</b> options will be 'Open Site Details', 'Deactivate / Reactivate'_FR";

            var m000030_EN = "The registration of your Organization in the CID Data Platform is now complete. " +
                "An email has been sent to your address, confirming the completion of the registration." +
                "<br><br>You are currently in the initial in-year page, which will be your starting page for each future CID sessions. {0} is your Organization annual compliance anniversary date."
            var m000030_FR = "L'enregistrement de votre entreprise dans la plateforme de données CID est maintenant terminé. " +
                "Un e-mail a été envoyé à votre adresse, confirmant la finalisation de l'inscription." +
                "<br><br>Vous êtes actuellement dans la page initiale en cours d'année, qui sera votre page de démarrage pour chaque future session CID. {0} is your Organization annual compliance anniversary date."

            var m000031_EN = "You are changing the site requirement level from basic to extended. " +
                "You are required to complete the extended processing requirements for the site before the site can be attested.<br><br>" +
                "You must enter the following applicable information for the site:<br>" +
                "All applicable UN Numbers<br>" +
                "<p>- Unit of Measurement<br>" +
                "- Annual Quantity / Volume<br>" +
                "- Annual Number of Consignments</p>";
            var m000031_FR = "Vous modifiez le niveau d'exigence du site de base à étendu. " +
                "Vous devez remplir les exigences de traitement étendu pour le site avant que le site puisse être attesté.<br><br>" +
                "Vous devez saisir les informations applicables suivantes pour le site:<br>" +
                "Tous les Nom d'affichage de l'ONU applicables<br>" +
                "<p>- Unité de mesure<br>" +
                "- Quantité annuelle / Volume<br>" +
                "- Nombre annuel d'envois</p>";

            //var m000039_EN = "At this point, you cannot proceed back to the previous step to begin the registration process.<br><br>" +
            //    "If you want to withdraw your registration altogether, including removing all entered data, then please choose No below. Next, choose the Contact Us button at the top of the screen, from which choose the ‘Request to withdraw this Registration’ option.<br><br>" +
            //    "Do you instead want to request that TDG support personnel reach out to you in order to reset your account so that you can change the initial information from the registration process?";
            //var m000039_FR = "At this point, you cannot proceed back to the previous step to begin the registration process.<br><br>" +
            //    "If you want to withdraw your registration altogether, including removing all entered data, then please choose No below. Next, choose the Contact Us button at the top of the screen, from which choose the ‘Request to withdraw this Registration’ option.<br><br>" +
            //    "Do you instead want to request that TDG support personnel reach out to you in order to reset your account so that you can change the initial information from the registration process?_FR";

            var m000039_EN = "At this point, you cannot proceed back to the previous step to begin the registration process.<br><br>" +
                "If you want to withdraw your registration altogether, including removing all entered data, then please choose No below. Next, choose the Contact Us button at the top of the screen, from which choose the ‘Request to withdraw this Registration’ option."
            var m000039_FR = "At this point, you cannot proceed back to the previous step to begin the registration process.<br><br>" +
                "If you want to withdraw your registration altogether, including removing all entered data, then please choose No below. Next, choose the Contact Us button at the top of the screen, from which choose the ‘Request to withdraw this Registration’ option._FR"

            var m000045_EN = "To proceed with the registration process you will need to either:<br><br>" +
                "- Enter a different Business Number.<br><br>" +
                "      OR<br><br>" +
                "- Continue with the same Business Number, which is linked to an existing Organization we already have on file. Note that in the screens to follow, you can change the existing Organization data fields as required.";
            var m000045_FR = "To proceed with the registration process you will need to either:<br><br>" +
                "- Enter a different Business Number.<br><br>" +
                "      OR<br><br>" +
                "- Continue with the same Business Number, which is linked to an existing Organization we already have on file. Note that in the screens to follow, you can change the existing Organization data fields as required._FR";

            var m000046_EN = "To proceed with the registration process you will need to either:<br><br>" +
                "- Enter a different organization name.<br><br>" +
                "      OR<br><br>" +
                "- Continue with this organization name, which matches an existing Organization we already have on file. Note that in the screens to follow, you can change any existing Organization data fields as required.";
            var m000046_FR = "To proceed with the registration process you will need to either:<br><br>" +
                "- Enter a different organization name.<br><br>" +
                "      OR<br><br>" +
                "- Continue with this organization name, which matches an existing Organization we already have on file. Note that in the screens to follow, you can change any existing Organization data fields as required._FR";

            var page_crw_start_EN = "Enter the Organization’s Canada Revenue Agency Business Number (CRA BN) and then choose the <b>[Next]</b> button below.<br><br>" +
                "Alternatively, if your Organization is from an Industry Type does not require a CRA BN, then choose ‘No‘, complete the two fields that follow and then choose the <b>[Next]</b> button below.<br><br>" +
                "Note that throughout the application, all fields with a red asterisk are mandatory fields and must be completed before proceeding to the next step.";
            var page_crw_start_FR = "Enter the Organization’s Canada Revenue Agency Business Number (CRA BN) and then choose the <b>[Next]</b> button below.<br><br>" +
                "Alternatively, if your Organization is from an Industry Type does not require a CRA BN, then choose ‘No‘, complete the two fields that follow and then choose the <b>[Next]</b> button below.<br><br>" +
                "Note that throughout the application, all fields with a red asterisk are mandatory fields and must be completed before proceeding to the next step._FR";
            var page_crw_company_insert_EN = "As required, update any of the Organization information below, then choose the <b>[Next]</b> button below to continue.<br>" +
                "If required: <br>" +
                " - choose the <b>[Previous]</b> button below to re-start the Registration.<br>" +
                " - choose the <b>[Contact Us]</b> button above to withdraw the Registration request.<br><br>" +
                "Note that fields in the application that have a red star at the end of their label are mandatory."
            var page_crw_company_insert_FR = "As required, update any of the Organization information below, then choose the <b>[Next]</b> button below to continue.<br>" +
                "If required: <br>" +
                " - choose the <b>[Previous]</b> button below to re-start the Registration.<br>" +
                " - choose the <b>[Contact Us]</b> button above to withdraw the Registration request.<br><br>" +
                "Note that fields in the application that have a red star at the end of their label are mandatory._FR"
            var page_crw_company_edit_EN = "As required, update any of the Organization information below, then choose the <b>[Next]</b> button below to continue.<br>" +
                "If required: <br>" +
                " - choose the <b>[Previous]</b> button below to re-start the Registration.<br>" +
                " - choose the <b>[Contact Us]</b> button above to withdraw the Registration request.<br><br>" +
                "Note that fields in the application that have a red star at the end of their label are mandatory."
            var page_crw_company_edit_FR = "As required, update any of the Organization information below, then choose the <b>[Next]</b> button below to continue.<br>" +
                "If required: <br>" +
                " - choose the <b>[Previous]</b> button below to re-start the Registration.<br>" +
                " - choose the <b>[Contact Us]</b> button above to withdraw the Registration request.<br><br>" +
                "Note that fields in the application that have a red star at the end of their label are mandatory._FR"
            var page_crw_contact_EN = "Create at least one Secondary Contact by choosing the <b>[+ Add]</b> button below, then choose the <b>[Next]</b> button below to continue.</br><br>" +
                "To edit or deactivate a Contact, then choose the <b>[V]</b> button to the far right of that row. If required, choose the <b>[Previous]</b> button to return to the Organization screen.";
            var page_crw_contact_FR = "Create at least one Secondary Contact by choosing the <b>[+ Add]</b> button below, then choose the <b>[Next]</b> button below to continue.</br><br>" +
                "To edit or deactivate a Contact, then choose the <b>[V]</b> button to the far right of that row. If required, choose the <b>[Previous]</b> button to return to the Organization screen._FR";
            var page_crw_naics_EN = "Choose the <b>[+ Add]</b> button below to create NAICS Codes for the Organization, then choose the <b>[Next]</b> button below to continue.</br></br>" +
                "To deactivate a NAICS, then choose the <b>[V]</b> button to the far right of that row. If required, choose the <b>[Previous]</b> button below to return to the Contact screen.";
            var page_crw_naics_FR = "Choose the <b>[+ Add]</b> button below to create NAICS Codes for the Organization, then choose the <b>[Next]</b> button below to continue.</br></br>" +
                "To deactivate a NAICS, then choose the <b>[V]</b> button to the far right of that row. If required, choose the <b>[Previous]</b> button below to return to the Contact screen._FR";
            var page_crw_attest_EN = "If the Organization details are accurate and complete, then choose the <b>[Attest Organization Data]</b> button below.</br>Otherwise, use the <b>[Previous]</b> button below to first make any adjustments.";
            var page_crw_attest_FR = "If the Organization details are accurate and complete, then choose the <b>[Attest Organization Data]</b> button below.</br>Otherwise, use the <b>[Previous]</b> button below to first make any adjustments._FR";
            var page_crw_site_EN = "For each Site:<br>" +
                "1. Choose the <b>[+ Add]</b> button below.<br>" +
                "2. When complete, click the <u>Site ID</u> underline link of that new Site row to complete and attest the Site.<br>" +
                "3. Choose the <b>[Next]</b> button below when all Sites are entered.<br><br>" +
                "To edit or deactivate a Site, then choose the <b>[V]</b> button to the far right of that row.<br>" +
                "If required, choose the <b>[Previous]</b> button below to return to the Attest Organization screen.";
            var page_crw_site_FR = "For each Site:<br>" +
                "1. Choose the <b>[+ Add]</b> button below.<br>" +
                "2. When complete, click the <u>Site ID</u> underline link of that new Site row to complete and attest the Site.<br>" +
                "3. Choose the <b>[Next]</b> button below when all Sites are entered.<br><br>" +
                "To edit or deactivate a Site, then choose the <b>[V]</b> button to the far right of that row.<br>" +
                "If required, choose the <b>[Previous]</b> button below to return to the Attest Organization screen._FR";
            var page_crw_complete_EN = "If the Organization and site details are accurate and complete, then choose the <b>[Attest and Organization Registration]</b> button below to complete the Registration. Otherwise, use the <b>[Previous]</b> button below to first make any adjustments.";
            var page_crw_complete_FR = "If the Organization and site details are accurate and complete, then choose the <b>[Attest and Organization Registration]</b> button below to complete the Registration. Otherwise, use the <b>[Previous]</b> button below to first make any adjustments._FR";
            var page_srw_site_EN = "";
            var page_srw_site_FR = "_FR";
            var page_srw_activity_type_EN = "Choose the Site Activity Types. When complete, choose the <b>[Next]</b> button below.</br>If necessary, choose the <b>[Previous]</b> button below to return to the Basic/Extended screen.</br>" +
                "Alternatively, choose the <b>[Back to Organization Registration]</b> to save the current site information and return to the Organization Registration process.";
            var page_srw_activity_type_FR = "Choose the Site Activity Types. When complete, choose the <b>[Next]</b> button below.</br>If necessary, choose the <b>[Previous]</b> button below to return to the Basic/Extended screen.</br>" +
                "Alternatively, choose the <b>[Back to Organization Registration]</b> to save the current site information and return to the Organization Registration process._FR";
            var page_srw_further_site_details_EN = "Please choose the <b>[Next]</b> button below to review and attest the Site.</br>" +
                "If necessary, choose the <b>[Previous]</b> button below to return to Further Site Details screen.</br>" +
                "Alternatively, choose the <b>[Back to Organization Registration]</b> to save the current site information and return to the Organization Registration process.";
            var page_srw_further_site_details_FR = "Please choose the <b>[Next]</b> button below to review and attest the Site.</br>" +
                "If necessary, choose the <b>[Previous]</b> button below to return to Further Site Details screen.</br>" +
                "Alternatively, choose the <b>[Back to Organization Registration]</b> to save the current site information and return to the Organization Registration process._FR";
            var page_srw_further_attest_site_EN = "If the site details are accurate and complete, then choose the <b>[Attest Site Data]</b> button below.</br>Otherwise, use the <b>[Previous]</b> button to make any adjustments.</br>" +
                "Alternatively, choose the <b>[Back to Organization Registration]</b> to save the current site information and return to the Organization Registration process.";
            var page_srw_further_attest_site_FR = "If the site details are accurate and complete, then choose the <b>[Attest Site Data]</b> button below.</br>Otherwise, use the <b>[Previous]</b> button to make any adjustments.</br>" +
                "Alternatively, choose the <b>[Back to Organization Registration]</b> to save the current site information and return to the Organization Registration process._FR";
            var page_orw_mot_EN = "Choose the Mode(s) Of Transportation. When complete, choose the <b>[Next]</b> button below.<br>" +
                "If necessary, choose the <b>[Previous]</b> button, or the <b>[Back to Activity Types Screen]</b> button, to return to the Activity Type screen.<br>" +
                "Alternatively, choose the <b>[Back to Activity Types Screen]</b> to save the current site information and return to the Activity Types Screen.";
            var page_orw_mot_FR = "Choose the Mode(s) Of Transportation. When complete, choose the <b>[Next]</b> button below.<br>" +
                "If necessary, choose the <b>[Previous]</b> button, or the <b>[Back to Activity Types Screen]</b> button, to return to the Activity Type screen.<br>" +
                "Alternatively, choose the <b>[Back to Activity Types Screen]</b> to save the current site information and return to the Activity Types Screen._FR";
            var page_orw_class_EN = "Choose the <b>[+ Add]</b> button below for each applicable Site Class. When complete, choose the <b>[Next]</b> button below.</br>" +
                "To edit or deactivate a Site Class, then choose the <b>[V]</b> button to the far right of that row.<br>" +
                "If necessary, choose the <b>[Previous]</b> button below to return to the Mode(s) of Transportation screen<br>" +
                "Alternatively, choose the <b>[Back to Activity Types Screen]</b> to save the current site information and return to the Activity Types Screen."
            var page_orw_class_FR = "Choose the <b>[+ Add]</b> button below for each applicable Site Class. When complete, choose the <b>[Next]</b> button below.</br>" +
                "To edit or deactivate a Site Class, then choose the <b>[V]</b> button to the far right of that row.<br>" +
                "If necessary, choose the <b>[Previous]</b> button below to return to the Mode(s) of Transportation screen<br>" +
                "Alternatively, choose the <b>[Back to Activity Types Screen]</b> to save the current site information and return to the Activity Types Screen._FR"
            var page_my_company_EN = "Head Office details can be updated by choosing the <b>[Update Organization]</b> button at the bottom of this screen.</br></br>" +
                "Following options are available via the menu options on the left:</br>" +
                "- Organization History Log: Key past activities for this Organization.</br>" +
                "- Annual Compliance Update: Allows completion of this mandatory annual update.</br>" +
                "- Deactivate Organization: To deactivate this Organization.</br>" +
                "- My Sites: To view a list of current Sites to add to, update, deactivate, reactivate or sale/transfer.</br>" +
                "- Manage Application Users: To add or remove user access to this application.</br>" +
                "- Online Help: To search for guidance on how to use this application.";
            var page_my_company_FR = "Head Office details can be updated by choosing the <b>[Update Organization]</b> button at the bottom of this screen.</br></br>" +
                "Following options are available via the menu options on the left:</br>" +
                "- Organization History Log: Key past activities for this Organization.</br>" +
                "- Annual Compliance Update: Allows completion of this mandatory annual update.</br>" +
                "- Deactivate Organization: To deactivate this Organization.</br>" +
                "- My Sites: To view a list of current Sites to add to, update, deactivate, reactivate or sale/transfer.</br>" +
                "- Manage Application Users: To add or remove user access to this application.</br>" +
                "- Online Help: To search for guidance on how to use this application._FR";
            var page_my_company_contact_EN = "For actions, select the <b>[V]</b> button beside each row, or the <b>[+ Add]</b> button for a new entry.";
            var page_my_company_contact_FR = "For actions, select the <b>[V]</b> button beside each row, or the <b>[+ Add]</b> button for a new entry._FR";
            var page_in_year_my_sites_EN = "Existing Sites where 'Is Site Attested' is set to 'No', need to be attested by choosing one of the options via the <b>[V]</b> button at the far right of those rows. All sites need to be attested before the Bulk option can be chosen.<br>" +
                "To add additional Sites individually, choose the <b>[+ Add]</b> button. Alternatively, choose the <b>[Bulk Add/Update]</b> button to add all new Sites at once via Excel.<br>" +
                "To edit one of the Sites, mouse-click the underlined Site ID link of that row, or choose the option from the <b>[V]</b> button at the end.";
            var page_in_year_my_sites_FR = "Existing Sites where 'Is Site Attested' is set to 'No', need to be attested by choosing one of the options via the <b>[V]</b> button at the far right of those rows. All sites need to be attested before the Bulk option can be chosen.<br>" +
                "To add additional Sites individually, choose the <b>[+ Add]</b> button. Alternatively, choose the <b>[Bulk Add/Update]</b> button to add all new Sites at once via Excel.<br>" +
                "To edit one of the Sites, mouse-click the underlined Site ID link of that row, or choose the option from the <b>[V]</b> button at the end._FR";
            var page_annual_compliance_update_EN = "To finalize the Annual Compliance Update:</br>1- As applicable, perform each step's related update below, then it's 'Mark as complete' option.</br>" +
                "2- Read and agree to the terms of service agreement and select the 'Attestation' section.</br>" +
                "3- When complete, select the <b>[Finalize Annual Compliance]</b> option.";
            var page_annual_compliance_update_FR = "To finalize the Annual Compliance Update:</br>1- As applicable, perform each step's related update below, then it's 'Mark as complete' option.</br>" +
                "2- Read and agree to the terms of service agreement and select the 'Attestation' section.</br>" +
                "3- When complete, select the <b>[Finalize Annual Compliance]</b> option._FR";

            var list =
                [
                    {
                        "code": "page_crw_start",
                        "message_en": page_crw_start_EN,
                        "message_fr": page_crw_start_FR
                    },
                    {
                        "code": "page_crw_company_insert",
                        "message_en": page_crw_company_insert_EN,
                        "message_fr": page_crw_company_insert_FR
                    },
                    {
                        "code": "page_crw_company_edit",
                        "message_en": page_crw_company_edit_EN,
                        "message_fr": page_crw_company_edit_FR
                    },
                    {
                        "code": "page_crw_contact",
                        "message_en": page_crw_contact_EN,
                        "message_fr": page_crw_contact_FR
                    },
                    {
                        "code": "page_crw_naics",
                        "message_en": page_crw_naics_EN,
                        "message_fr": page_crw_naics_FR
                    },
                    {
                        "code": "page_crw_attest",
                        "message_en": page_crw_attest_EN,
                        "message_fr": page_crw_attest_FR
                    },
                    {
                        "code": "page_crw_site",
                        "message_en": page_crw_site_EN,
                        "message_fr": page_crw_site_FR
                    },
                    {
                        "code": "page_crw_complete",
                        "message_en": page_crw_complete_EN,
                        "message_fr": page_crw_complete_FR
                    },
                    {
                        "code": "page_srw_site",
                        "message_en": page_srw_site_EN,
                        "message_fr": page_srw_site_FR
                    },
                    {
                        "code": "page_srw_activity_type",
                        "message_en": page_srw_activity_type_EN,
                        "message_fr": page_srw_activity_type_FR
                    },
                    {
                        "code": "page_srw_further_site_details",
                        "message_en": page_srw_further_site_details_EN,
                        "message_fr": page_srw_further_site_details_FR
                    },
                    {
                        "code": "page_srw_further_attest_site",
                        "message_en": page_srw_further_attest_site_EN,
                        "message_fr": page_srw_further_attest_site_FR
                    },
                    {
                        "code": "page_orw_mot",
                        "message_en": page_orw_mot_EN,
                        "message_fr": page_orw_mot_FR
                    },
                    {
                        "code": "page_orw_class",
                        "message_en": page_orw_class_EN,
                        "message_fr": page_orw_class_FR
                    },
                    {
                        "code": "page_my_company",
                        "message_en": page_my_company_EN,
                        "message_fr": page_my_company_FR
                    },
                    {
                        "code": "page_my_company_contact",
                        "message_en": page_my_company_contact_EN,
                        "message_fr": page_my_company_contact_FR
                    },
                    {
                        "code": "page_in_year_my_sites",
                        "message_en": page_in_year_my_sites_EN,
                        "message_fr": page_in_year_my_sites_FR
                    },
                    {
                        "code": "page_annual_compliance_update",
                        "message_en": page_annual_compliance_update_EN,
                        "message_fr": page_annual_compliance_update_FR
                    },

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
                        "code": "BTN_OK",
                        "message_en": "OK",
                        "message_fr": "Qui"
                    },
                    {
                        "code": "BTN_CANCEL",
                        "message_en": "Cancel",
                        "message_fr": "Annuler"
                    },
                    {
                        "code": "BTN_NEXT",
                        "message_en": "Next",
                        "message_fr": "Suivant"
                    },
                    {
                        "code": "BTN_PREVIOUS",
                        "message_en": "Previous",
                        "message_fr": "Précédent"
                    },
                    {
                        "code": "BTN_IS_MY_COMPANY",
                        "message_en": "This is my Organization",
                        "message_fr": "This is my Organization_FR"
                    },
                    {
                        "code": "BTN_IS_NOT_MY_COMPANY",
                        "message_en": "This is not my Organization",
                        "message_fr": "This is not my Organization_FR"
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
                        "message_en": "You cannot attest Organization before adding primary and secondary contacts.</br>",
                        "message_fr": "Vous ne pouvez pas attester de l'entreprise avant d'avoir ajouté des contacts principaux et secondaires.</br>"
                    },
                    {
                        "code": "m000007",
                        "message_en": "Print Summary",
                        "message_fr": "Imprimer le résumé"
                    },
                    {
                        "code": "m000008",
                        "message_en": "Organization Registration",
                        "message_fr": "Enregistrement de l'entreprise"
                    },
                    {
                        "code": "m000009",
                        "message_en": "Organization Registration for {0}",
                        "message_fr": "Enregistrement de l'entreprise pour {0}"
                    },
                    {
                        "code": "m000010",
                        "message_en": "Choose the same named button found below",
                        "message_fr": "Sélectionnez le bouton identique ci-dessous"
                    },
                    {
                        "code": "m000011",
                        "message_en": "You cannot proceed before adding active Organization site(s).",
                        "message_fr": "Vous ne pouvez pas continuer avant d'avoir ajouté le(s) site(s) d'entreprise actif(s)."
                    },
                    {
                        "code": "m000012",
                        "message_en": "You cannot proceed before attesting all the Organization Sites, via opening the site details and completing all the required information for each site.",
                        "message_fr": "FR-You cannot proceed before attesting all the Organization Sites, via opening the site details and completing all the required information for each site."
                    },
                    {
                        "code": "m000013",
                        "message_en": m000013_EN,
                        "message_fr": m000013_FR
                    },
                    {
                        "code": "m000014",
                        "message_en": "This registration for this Organization has already begun. Do you want to send a request to the Administrator of that registration process requesting to be on-boarded as a user for that Organization?",
                        "message_fr": "This registration for this Organization has already begun. Do you want to send a request to the Administrator of that registration process requesting to be on-boarded as a user for that Organization?_FR"
                    },
                    {
                        "code": "m000014B",
                        "message_en": "This registration for this Organization is already complete. Do you want to send a request to the Organization’s Administrator requesting to be on-boarded as a user for that Organization?",
                        "message_fr": "This registration for this Organization is already complete. Do you want to send a request to the Organization’s Administrator requesting to be on-boarded as a user for that Organization?_FR"
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
                        "message_en": "ERAP {0} is assigned to another Organization. Are you sure you want to complete the add?",
                        "message_fr": "ERAP {0} is assigned to another Organization. Are you sure you want to complete the add?_F"
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
                        "message_en": "You cannot proceed before attesting your Organization data changes, please check the 'Attestation' box",
                        "message_fr": "You cannot proceed before attesting your Organization data changes, please check the 'Attestation' box_FR"
                    },
                    {
                        "code": "m000027",
                        "message_en": "Further Site Details",
                        "message_fr": "Further Site Details_FR"
                    },
                    {
                        "code": "m000028",
                        "message_en": "This UN Number does not exist in the CID Regulation. Please enter a valid UN Number to proceed.",
                        "message_fr": "This UN Number does not exist in the CID Regulation. Please enter a valid UN Number to proceed._FR"
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
                        "code": "m000032",
                        "message_en": "The registration of the {0} Organization is based on invitation only. Do you want to request to have an invitation sent to you to register this Organization?",
                        "message_fr": "The registration of the {0} Organization is based on invitation only. Do you want to request to have an invitation sent to you to register this Organization?_FR"
                    },
                    {
                        "code": "m000033",
                        "message_en": "You are about to begin the process of registering the {0} Organization within CID. Would you like to proceed?",
                        "message_fr": "You are about to begin the process of registering the {0} Organization within CID. Would you like to proceed?_FR"
                    },
                    {
                        "code": "m000034",
                        "message_en": "The registration process for the {0} Organization has begun. If you proceed, then you will be on-boarded as a Secondary Admin for the {0} Corporation. Would you like to proceed?",
                        "message_fr": "The registration process for the {0} Organization has begun. If you proceed, then you will be on-boarded as a Secondary Admin for the {0} Corporation. Would you like to proceed?_FR"
                    },
                    {
                        "code": "m000035",
                        "message_en": "The registration process for the {0} Organization is complete. If you proceed, then you will be on-boarded as a Secondary Admin for the {0} Corporation. Would you like to proceed?",
                        "message_fr": "The registration process for the {0} Organization is complete. If you proceed, then you will be on-boarded as a Secondary Admin for the {0} Corporation. Would you like to proceed?_FR"
                    },
                    {
                        "code": "m000036",
                        "message_en": "If you proceed, you will no longer be attached to {0} Organization, after which you will have the option to register a new Organization instead. Do you want to continue and be disconnected from {0}?",
                        "message_fr": "If you proceed, you will no longer be attached to {0} Organization, after which you will have the option to register a new Organization instead. Do you want to continue and be disconnected from {0}?_FR"
                    },
                    {
                        "code": "m000037",
                        "message_en": "CRA Business Number '{0}' already exists.",
                        "message_fr": "CRA Business Number '{0}' already exists._FR"
                    },
                    {
                        "code": "m000038",
                        "message_en": "Processing...",
                        "message_fr": "Processing..._FR"
                    },
                    {
                        "code": "m000039",
                        "message_en": m000039_EN,
                        "message_fr": m000039_FR
                    },
                    {
                        "code": "m000040",
                        "message_en": "TDG support personnel have been notified of your request and will contact you shortly at your email of {0}.",
                        "message_fr": "TDG support personnel have been notified of your request and will contact you shortly at your email of {0}._FR"
                    },
                    {
                        "code": "m000041",
                        "message_en": "The following Organization data was retrieved from Canada Revenue Agency for this BN {0}:",
                        "message_fr": "The following Organization data was retrieved from Canada Revenue Agency for this BN {0}:_FR"
                    },
                    {
                        "code": "m000042",
                        "message_en": "The following Organization, with the same Legal Name '{0}', has been found in our system:",
                        "message_fr": "The following Organization, with the same Legal Name '{0}', has been found in our system:_FR"
                    },
                    {
                        "code": "m000043",
                        "message_en": "The request has been sent to the primary administrator of this Organization to onboard you. If they agree, then an invitation email will be sent to you that will allow you complete the onboarding process.<br><br>Please choose the [Sign Out] option to leave the application.",
                        "message_fr": "The request has been sent to the primary administrator of this Organization to onboard you. If they agree, then an invitation email will be sent to you that will allow you complete the onboarding process.<br><br>Please choose the [Sign Out] option to leave the application._FR"
                    },
                    {
                        "code": "m000044",
                        "message_en": "As requested, no request the primary administrator of this Organization was not sent a request to onboard you to this Organization.<br><br>Please choose the [Sign Out] option to leave the application.",
                        "message_fr": "As requested, no request the primary administrator of this Organization was not sent a request to onboard you to this Organization.<br><br>Please choose the [Sign Out] option to leave the application._FR"
                    },
                    {
                        "code": "m000045",
                        "message_en": m000045_EN,
                        "message_fr": m000045_FR
                    },
                    {
                        "code": "m000046",
                        "message_en": m000046_EN,
                        "message_fr": m000046_FR
                    },
                    {
                        "code": "m000047",
                        "message_en": "The '{0}' Organization is currently set up as a by-invitation only Organization. Do you want to request to be on-boarded?",
                        "message_fr": "The '{0}' Organization is currently set up as a by-invitation only Organization. Do you want to request to be on-boarded?_FR"
                    },
                    {
                        "code": "m000048",
                        "message_en": "For this site operation there is already a class record created",
                        "message_fr": "Cette operation a déjà une classe avec le type"
                    },
                    {
                        "code": "m000049",
                        "message_en": "Back To In Year Sites Page",
                        "message_fr": "Back To In Year Sites Page_FR"
                    },
                    {
                        "code": "m000050",
                        "message_en": "Back To Annual Compliance Update Page",
                        "message_fr": "Back To Annual Compliance Update Page_FR"
                    },
                    {
                        "code": "m000051",
                        "message_en": "Back To In Year Site Update Page",
                        "message_fr": "Back To In Year Site Update Page_FR"
                    },
                    {
                        "code": "m000098",
                        "message_en": "Your entered name and email account are already associated with an invitation tailored to you and your Organization. The invitation is being resent and will appear at this email address shortly. Please use the link within that email to onboard onto CID.",
                        "message_fr": "Your entered name and email account are already associated with an invitation tailored to you and your Organization. The invitation is being resent and will appear at this email address shortly. Please use the link within that email to onboard onto CID._FR"
                    }, {
                        "code": "m000099",
                        "message_en": "The Registration process is currently being processed by your Organization’s Primary Administrator. Until the Registration is complete, you will not be able add or change any data, nor Attest to the Organization or Sites. You will however be able to view the current state of the Registration via the [Next] and [Previous] buttons at the bottom of the screen",
                        "message_fr": "The Registration process is currently being processed by your Organization’s Primary Administrator. Until the Registration is complete, you will not be able add or change any data, nor Attest to the Organization or Sites. You will however be able to view the current state of the Registration via the [Next] and [Previous] buttons at the bottom of the screen_FR"
                    },
                    {
                        "code": "m000100",
                        "message_en": "Back to Organization Registration",
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
                        "message_en": "Marine",
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
                        "message_en": "Deactivate Organization",
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
                        "message_en": "The Annual Compliance Update can only be completed 30 days before your Anniversary Date. On your Anniversary Date, you will have an additional 30 days to complete the Annual Compliance Update.",
                        "message_fr": "The Annual Compliance Update can only be completed 30 days before your Anniversary Date. On your Anniversary Date, you will have an additional 30 days to complete the Annual Compliance Update_FR."
                    },
                    {
                        "code": "m000113",
                        "message_en": "The Assign as Primary Admin is restricted to only the Primary Admin for this Organization.",
                        "message_fr": "The Assign as Primary Admin is restricted to only the Primary Admin for this Organization._FR."
                    },
                    {
                        "code": "m000114",
                        "message_en": "Are you sure you want to assign {0} as the Primary Admin for this Organization’s CID Platform, and in doing assign yourself as a Secondary Contact?",
                        "message_fr": "Are you sure you want to assign {0} as the Primary Admin for this Organization’s CID Platform, and in doing assign yourself as a Secondary Contact?_FR."

                    },
                    {
                        "code": "m000115",
                        "message_en": "The Assign as Primary Admin can only be assigned to a Secondary Admin that has logged into the CID Platform at least one time.",
                        "message_fr": "The Assign as Primary Admin can only be assigned to a Secondary Admin that has logged into the CID Platform at least one time._FR"
                    },
                    {
                        "code": "m000116",
                        "message_en": "This Contact cannot be added as a Contact with this name and email address already exists in CID, but is assigned to a different Organization.",
                        "message_fr": "This Contact cannot be added as a Contact with this name and email address already exists in CID, but is assigned to a different Organization._FR"
                    },
                    {
                        "code": "m000117",
                        "message_en": "The Secondary Contact {0} has been sent an on-boarding invitation to their email address of {1}.",
                        "message_fr": "The Secondary Contact {0} has been sent an on-boarding invitation to their email address of {1}._FR"
                    },
                    {
                        "code": "m000118",
                        "message_en": "Only the Primary Admin can deactivate a Secondary Admin.",
                        "message_fr": "Only the Primary Admin can deactivate a Secondary Admin._FR"
                    },
                    {
                        "code": "m000119",
                        "message_en": "At least one other active Secondary Admin needs to be added before you can deactivate this Secondary Admin.",
                        "message_fr": "At least one other active Secondary Admin needs to be added before you can deactivate this Secondary Admin._FR"
                    },
                    {
                        "code": "m000120",
                        "message_en": "The Secondary Contact {0} has been sent an on-boarding invitation to their email address of {1}.",
                        "message_fr": "The Secondary Contact {0} has been sent an on-boarding invitation to their email address of {1}._FR"
                    },
                    {
                        "code": "m000121",
                        "message_en": "Mark All as Complete",
                        "message_fr": "Mark All as Complete_FR"
                    },
                    {
                        "code": "m000122",
                        "message_en": "Are you sure you would like to de-activate this contact record?",
                        "message_fr": "Are you sure you would like to de-activate this contact record?_FR"
                    },
                    {
                        "code": "m000123",
                        "message_en": "Mark as Complete",
                        "message_fr": "Mark as Complete_FR"
                    },
                    {
                        "code": "m000124",
                        "message_en": "TDG Activity Types for",
                        "message_fr": "TDG Activity Types for_FR"
                    },
                    {
                        "code": "m000125",
                        "message_en": "Class / Divisions for",
                        "message_fr": "Class / Divisions for_FR"
                    },
                    {
                        "code": "m000126",
                        "message_en": "Modes of Transportation for",
                        "message_fr": "Modes of Transportation for_FR"
                    },
                    {
                        "code": "m000127",
                        "message_en": "Site",
                        "message_fr": "Site_FR"
                    },
                    {
                        "code": "m000128",
                        "message_en": "Latitude",
                        "message_fr": "Latitude_FR"
                    },
                    {
                        "code": "m000129",
                        "message_en": "Longitude",
                        "message_fr": "Longitude_FR"
                    },
                    {
                        "code": "m000130",
                        "message_en": "The Annual Compliance Update can only be completed as early as 30 days before your Organization’s Anniversary Date of {0}.",
                        "message_fr": "The Annual Compliance Update can only be completed as early as 30 days before your Organization’s Anniversary Date of {0}._FR"
                    },
                    {
                        "code": "m000131",
                        "message_en": "Another organization already has an active Site at this location. You will not be able to add a Site at this Location until the other organization first deactivates it.</br></br> If that other organization has agreed to sell you this Site, then please advise them to Deactivate the Site within the CID Portal, after which you will be able to add this Site.</br></br> If you are certain that the Site details entered are correct, and this Site is not part of a sale or transfer, then do you want to have a request sent to that organization asking them to release the Site?</br></br>",
                        "message_fr": "Another organization already has an active Site at this location. You will not be able to add a Site at this Location until the other organization first deactivates it.</br></br> If that other organization has agreed to sell you this Site, then please advise them to Deactivate the Site within the CID Portal, after which you will be able to add this Site.</br></br> If you are certain that the Site details entered are correct, and this Site is not part of a sale or transfer, then do you want to have a request sent to that organization asking them to release the Site?_FR</br></br>"
                    },
                    {
                        "code": "m000132",
                        "message_en": "This action will deactivate the Organization and all of its Sites.</br></br>Please be aware that if any of the Sites are meant to be sold to another Organization, or merged into an existing Organization, then you will need to first begin the Transfer/Sale process for those Sites before deactivating the Organization.</br></br> <p style='color:red' >Be advised that this action cannot be undone.</p> Do you want to proceed with the Organization deactivation.</br></br>",
                        "message_fr": "This action will deactivate the Organization and all of its Sites.</br></br>Please be aware that if any of the Sites are meant to be sold to another Organization, or merged into an existing Organization, then you will need to first begin the Transfer/Sale process for those Sites before deactivating the Organization.</br></br> <p style='color:red' >Be advised that this action cannot be undone.</p> Do you want to proceed with the Organization deactivation.</br></br>_FR"
                    },
                    {
                        "code": "m000133",
                        "message_en": "Note: This addition of a backup Contact has completed the Contact requirements of the regulation. Any further Contact additions are completely optional.",
                        "message_fr": "Note: This addition of a backup Contact has completed the Contact requirements of the regulation. Any further Contact additions are completely optional._FR"
                    },
                    {
                        "code": "m000134",
                        "message_en": "This addition of a backup Contact has completed the Contact requirements of the regulation. Any further Contact additions are completely optional.",
                        "message_fr": "This addition of a backup Contact has completed the Contact requirements of the regulation. Any further Contact additions are completely optional._FR"
                    },
                    {
                        "code": "m000135",
                        "message_en": "Contact Email",
                        "message_fr": "Contact Email_FR"
                    },
                    {
                        "code": "m000136",
                        "message_en": "Note: This is your account’s official email, which may be updated via the <b>[Account Settings]</b> button at the top.",
                        "message_fr": "Note: This is your account’s official email, which may be updated via the <b>[Account Settings]</b> button at the top._FR"
                    },
                    {
                        "code": "m000137",
                        "message_en": "Your request has been sent to the Transport Canada TDG CID Support Team.",
                        "message_fr": "Your request has been sent to the Transport Canada TDG CID Support Team._FR"
                    },
                    {
                        "code": "m000138",
                        "message_en": "Details of Request needs to be entered.",
                        "message_fr": "Details of Request needs to be entered._FR"
                    },
                    {
                        "code": "m000139",
                        "message_en": "There is knowledge article information about this topic that may answer your request. Do you want to first view that information?",
                        "message_fr": "There is knowledge article information about this topic that may answer your request. Do you want to first view that information?_FR"
                    },
                    {
                        "code": "m000140",
                        "message_en": "The current owner orgnization of this site was contacted and informed to release this site.",
                        "message_fr": "The current owner orgnization of this site was contacted and informed to release this site._FR"
                    },
                    {
                        "code": "m000141",
                        "message_en": "Activate Orgnization",
                        "message_fr": "Activate Orgnization_FR"
                    },
                    {
                        "code": "m000142",
                        "message_en": "<p>Please be aware that the entered date is in the future.</p>",
                        "message_fr": "<p>Please be aware that the entered date is in the future._FR</p>"
                    }
                ];

            return list;
        }
    }
}
