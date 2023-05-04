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
            var m000013_FR = "Les sites figurant dans le tableau ci-dessous, dont le statut est 'Revendication de site en attente', appartiennent à votre organisation. À l’aide du bouton [V] à droite de chacun de ces sites, veuillez choisir l’une des actions suivantes :\n" +
                "- Configurer comme Mon site actif\n" +
                "- Configurer et attester comme Mon site inactif\n" +
                "- Configurer et attester comme qu'il ne s'agit pas de mon site\n";

            var m000020_EN = "The data grid below lists the Sites that are understood to be associated to your Organization. " +
                "Please choose the <b>[V]</b> button on each row to update Attest each Site, or flag it as not your Organization's Site.\n\n" +
                "When those updates are Complete, please add any remaining Sites individually by choosing the <b>[+Add]</b> button," +
                "or all at once via Excel, by choosing the <b>[Bulk Add/Update]</b> button.";
            var m000020_FR = "Le tableau de données ci-dessous contient les sites qui sont associés à votre organisation. Veuillez cliquer sur le bouton <b>[V]</b> de chaque rangée pour attester chaque site ou marquer le site comme n’appartenant pas à votre organisation. Une fois les mises à jour terminées, ajouter tous les autres sites individuellement en cliquant sur le bouton <b>[+Add]</b> ou tous à la fois par Excel, en cliquant sur le bouton <b>[Ajout/mise à jour en bloc]</b>.";

            var m000021_EN = "Existing Sites where 'Is Site Attested' is set to 'No', need to be attested by choosing one of " +
                "the options via the <b>[V]</b> button at the far right of those rows. All sites need to be attested before the Bulk option can be chosen.\n\n" +
                "To add additional Sites individually, choose the <b>[+Add]</b> button. Alternatively, choose the <b>[Bulk Add/Update]</b> " +
                "button to add all new Sites at once via Excel.\n\n" +
                "To edit one of the Sites, mouse-click the underlined Site ID link of that row, or choose the option from the <b>[V]</b> button at the end.\n\n" +
                "Choose the <b>[Next]</b> button, once all Sites are added and attested.\n\n" +
                "If required, choose the <b>[Previous]</b> button below to return to the Attest Organization screen.";
            var m000021_FR = "Les sites existants où 'Is Site Attested' est défini sur 'Non', doivent être attestés en choisissant l'un des " +
                "les options via le bouton <b>[V]</b> à l'extrême droite de ces lignes. Tous les sites doivent être attestés avant que l'option En vrac puisse être choisie.\n\n" +
                "Pour ajouter des sites supplémentaires individuellement, choisissez le bouton <b>[+Ajouter]</b>. Vous pouvez également choisir le bouton <b>[Ajouter/Mettre à jour en masse]</b>" +
                "bouton pour ajouter tous les nouveaux sites à la fois via Excel.\n\n" +
                "Pour modifier l'un des sites, cliquez avec la souris sur le lien souligné de l'ID de site de cette ligne ou choisissez l'option à partir du bouton <b>[V]</b> à la fin.\n\n" +
                "Choisissez le bouton <b>[Suivant]</b>, une fois tous les sites ajoutés et attestés.\n\n" +
                "Si nécessaire, choisissez le bouton <b>[Précédent]</b> ci-dessous pour revenir à l'écran Attester l'organisation.";

            var m000022_EN = "To add Sites individually, choose the <b>[+Add]</b> button. Alternatively, choose the <b>[Bulk Add/Update]</b> button to add all new Sites at once via Excel.\n\n" +
                "To edit one of the Sites, mouse-click the underlined Site ID link of that row, or choose the option from the <b>[V]</b> button at the end.\n\n" +
                "Choose the <b>[Next]</b> button, once all Sites are added and attested.\n\n" +
                "If required, choose the <b>[Previous]</b> button below to return to the Attest Organization screen.";
            var m000022_FR = "Pour ajouter des sites individuellement, choisissez le bouton <b>[+Ajouter]</b>. Sinon, choisissez le bouton <b>[Ajouter/Mettre à jour en masse]</b> pour ajouter tous les nouveaux sites en une seule fois via Excel.\ n\n" +
                "Pour modifier l'un des sites, cliquez avec la souris sur le lien souligné de l'ID de site de cette ligne ou choisissez l'option à partir du bouton <b>[V]</b> à la fin.\n\n" +
                "Choisissez le bouton <b>[Suivant]</b>, une fois tous les sites ajoutés et attestés.\n\n" +
                "Si nécessaire, choisissez le bouton <b>[Précédent]</b> ci-dessous pour revenir à l'écran Attester l'organisation.";

            var m000023_EN = "To add Sites individually, choose the <b>[+Add]</b> button below.\n\n" +
                "To edit one of the Sites, mouse-click the underlined Site ID link of that row, or choose the option from the <b>[V]</b> button at the end.\n\n" +
                "Alternatively, choose the <b>[Bulk Add/Update]</b> button to edit existing, and add new, Sites all at once via Excel.\n\n" +
                "If required, choose the 'Deactivate / Reactivate' option via the <b>[V]</b> button at the end of a Site's row.\n\n" +
                "Note:\n" +
                "- <b>[Bulk Add/Update]</b> will appear to the right of the <b>[+Add]</b> button\n" +
                "- For In Year / Annual Compliance, the <b>[V]</b> options will be 'Open Site Details', 'Deactivate / Reactivate'";
            var m000023_FR = "Pour ajouter des sites individuellement, choisissez le bouton <b>[+Ajouter]</b> ci-dessous.\n\n" +
                "Pour modifier l'un des sites, cliquez avec la souris sur le lien souligné de l'ID de site de cette ligne ou choisissez l'option à partir du bouton <b>[V]</b> à la fin.\n\n" +
                "Vous pouvez également choisir le bouton <b>[Ajouter/Mettre à jour en masse]</b> pour modifier les sites existants et en ajouter de nouveaux en une seule fois via Excel.\n\n" +
                "Si nécessaire, choisissez l'option 'Désactiver / Réactiver' via le bouton <b>[V]</b> à la fin de la ligne d'un site.\n\n" +
                "Remarque :\n" +
                "- <b>[Ajouter/Mettre à jour en masse]</b> apparaîtra à droite du bouton <b>[+Ajouter]</b>\n" +
                "- Pour la conformité dans l'année / annuelle, les options <b>[V]</b> seront 'Ouvrir les détails du site', 'Désactiver / Réactiver'";

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

            var m000039_EN = "At this point, you cannot proceed back to the previous step to begin the registration process.<br><br>" +
                "If you want to withdraw your registration altogether, including removing all entered data, then please choose No below. Next, choose the Contact Us button at the top of the screen, from which choose the ‘Request to withdraw this Registration’ option.";
            var m000039_FR = "À ce stade, vous ne pouvez pas revenir à l'étape précédente pour commencer le processus d'inscription.<br><br>" +
                "Si vous souhaitez annuler complètement votre inscription, y compris la suppression de toutes les données saisies, veuillez choisir Non ci-dessous. Ensuite, choisissez le bouton Contactez-nous en haut de l'écran, à partir duquel choisissez l'option Demande de retrait de cette inscription.";

            var m000045_EN = "To proceed with the registration process you will need to either:<br><br>" +
                "- Enter a different Business Number.<br><br>" +
                "      OR<br><br>" +
                "- Continue with the same Business Number, which is linked to an existing Organization we already have on file. Note that in the screens to follow, you can change the existing Organization data fields as required.";
            var m000045_FR = "Pour procéder à l’enregistrement, vous devrez :<br><br>" +
                "- saisir un numéro d’entreprise différent<br><br>" +
                "      OU<br><br>" +
                "- poursuivre avec le même numéro d’entreprise, qui est lié à une organisation existante déjà au dossier. Veuillez noter que dans les écrans suivants, vous pouvez changer les données des champs sur l’organisation au besoin.";

            var m000046_EN = "To proceed with the registration process you will need to either:<br><br>" +
                "- Enter a different organization name.<br><br>" +
                "      OR<br><br>" +
                "- Continue with this organization name, which matches an existing Organization we already have on file. Note that in the screens to follow, you can change any existing Organization data fields as required.";
            var m000046_FR = "Pour procéder à l’enregistrement, vous devrez :<br><br>" +
                "- saisir un nom d’organisation différent<br><br>" +
                "      OU<br><br>" +
                "- poursuivre avec le même nom d’organisation, qui correspond à une organisation existante déjà au dossier. Veuillez noter que dans les écrans suivants, vous pouvez changer les données des champs sur l’organisation au besoin.";

            var m000161_EN = "You are changing the site requirement level from extended to basic.<br>" +
                "Continuing with the update would result in the loss of the Extended Processing details assigned to the site."
            var m000161_FR = "Vous modifiez le niveau d'exigence du site d'étendu à essentiel.<br>" +
                "Poursuivre la mise à jour entraînerait la perte des détails du niveau étendu attribués à ce site."

            var page_crw_start_EN = "Enter the Organization’s Canada Revenue Agency Business Number (CRA BN) and then choose the <b>[Next]</b> button below.<br><br>" +
                "Alternatively, if your Organization is from an Industry Type does not require a CRA BN, then choose ‘No‘, complete the two fields that follow and then choose the <b>[Next]</b> button below.<br><br>" +
                "Note that throughout the application, all fields with a red asterisk are mandatory fields and must be completed before proceeding to the next step.";
            var page_crw_start_FR = "Saisir le numéro d’entreprise de l’Agence du revenu du Canada (NE ARC) et cliquer sur le bouton <b>[Suivant]</b> ci‑dessous.<br><br>" +
                "Sinon, si votre compagnie appartient à un type d’industrie qui ne possède pas de NE ARC, cliquer sur ‘Non‘, remplir les champs et cliquer sur le bouton <b>[Suivant]</b> ci‑dessous.";

            var page_crw_company_insert_EN = "As required, update any of the Organization information below, then choose the <b>[Next]</b> button below to continue.<br>" +
                "If required: <br>" +
                " - choose the <b>[Previous]</b> button below to re-start the Registration.<br>" +
                " - choose the <b>[Contact Us]</b> button above to withdraw the Registration request.<br><br>" +
                "Note that fields in the application that have a red star at the end of their label are mandatory."
            var page_crw_company_insert_FR = "Pour ajouter les sites individuellement, cliquer sur le bouton <b>[+Créer]</b>. Sinon, cliquer sur le bouton <b>[Ajout/mise à jour en bloc]</b> pour ajouter tous les nouveaux sites à la fois sur Excel.<br>" +
                "Pour modifier un des sites, cliquer sur le lien Site ID souligné dans la rangée, ou cliquer sur l’option du bouton <b>[V]</b> à l’extrémité de la rangée.<br>" +
                "Cliquer sur le bouton <b>[Suivant]</b> une fois tous les sites ajoutés et attestés.<br><br>" +
                "Au besoin, cliquer sur le bouton <b>[Précédent]</b> ci‑dessous pour retourner à l’écran Attest Organization."

            var page_crw_company_edit_EN = page_crw_company_insert_EN;
            var page_crw_company_edit_FR = page_crw_company_insert_FR;

            var page_crw_contact_EN = "Create at least one Secondary Contact by choosing the <b>[+Add]</b> button below, then choose the <b>[Next]</b> button below to continue.</br><br>" +
                "To edit or deactivate a Contact, then choose the <b>[V]</b> button to the far right of that row. If required, choose the <b>[Previous]</b> button to return to the Organization screen.";
            var page_crw_contact_FR = "Créer au moins un contact secondaire en cliquant sur le bouton <b>[+Créer]</b> ci‑dessous, ensuite cliquer sur le bouton <b>[Suivant]</b> ci‑dessous pour poursuivre.</br><br>" +
                "Pour modifier ou désactiver un contact, cliquer sur le bouton <b>[V]</b> à l’extrémité droite de cette rangée. Au besoin, cliquer sur le bouton <b>[Précédent]</b> pour revenir à l’écran organization .";

            var page_crw_naics_EN = "Choose the <b>[+Add]</b> button below to create NAICS Codes for the Organization, then choose the <b>[Next]</b> button below to continue.</br></br>" +
                "To deactivate a NAICS, then choose the <b>[V]</b> button to the far right of that row. If required, choose the <b>[Previous]</b> button below to return to the Contact screen.";
            var page_crw_naics_FR = "Cliquer sur le bouton <b>[+Créer]</b> ci‑dessous pour créer les codes SCIAN pour la compagnie, ensuite cliquer sur le bouton <b>[Suivant]</b> ci‑dessous pour poursuivre.<br><br>" +
                "Pour désactiver un code SCIAN, cliquer sur le bouton <b>[V]</b> à l’extrémité droite de cette rangée. Au besoin, cliquer sur le bouton <b>[Précédent]</b> pour revenir à l’écran Personnes-ressources.";

            var page_crw_attest_EN = "If the Organization details are accurate and complete, then choose the <b>[Submit]</b> button below.</br>Otherwise, use the <b>[Previous]</b> button below to first make any adjustments.";
            var page_crw_attest_FR = "Si les détails de la compagnie sont exacts et complets, cliquer sur le bouton <b>[Envoyer]</b> ci‑dessous.<br>Sinon, cliquer sur le bouton <b>[Précédent]</b> ci‑dessous pour apporter des changements.";

            var page_crw_site_EN = "For each Site:<br>" +
                "1. Choose the <b>[+Add]</b> button below.<br>" +
                "2. When complete, click the <u>Site ID</u> underline link of that new Site row to complete and attest the Site.<br>" +
                "3. Choose the <b>[Next]</b> button below when all Sites are entered.<br><br>" +
                "To edit or deactivate a Site, then choose the <b>[V]</b> button to the far right of that row.<br>" +
                "If required, choose the <b>[Previous]</b> button below to return to the Attest Organization screen.";
            var page_crw_site_FR = "Pour chaque site:<br>" +
                "1. Cliquer sur le bouton <b>[+Créer]</b> ci‑dessous.<br>" +
                "2. Ensuite, cliquer sur le lien <u>Site ID</u> souligné de la nouvelle rangée afin de compléter et d’attester le site.<br>" +
                "3. Cliquer sur le bouton <b>[Suivant]</b> ci‑dessous une fois tous les sites saisis.<br><br>" +
                "Pour modifier ou désactiver un site, cliquer sur le bouton <b>[V]</b> à l’extrémité droite de la rangée.<br>" +
                "Au besoin, cliquer sur le bouton <b>[Précédent]</b> dessous pour retourner à l’écran Attester l'organisation.";

            var page_crw_complete_EN = "If the Organization and site details are accurate and complete, then choose the <b>[Attest and Organization Registration]</b> button below to complete the Registration. Otherwise, use the <b>[Previous]</b> button below to first make any adjustments.";
            var page_crw_complete_FR = "Si les détails de l'organisation et du site sont exacts et complets, choisissez le bouton <b>[Attestation et inscription de l'organisation]</b> ci-dessous pour terminer l'inscription. Sinon, utilisez le bouton <b>[Précédent]</b> ci-dessous pour effectuer d'abord les ajustements.";

            var page_srw_site_EN = "As required, update any of the Site information, then choose the <b>[Next]</b> button below to continue.</br></br>" +
                "Alternatively, choose the <b>[Back to Organization Registration]</b> to save the current site information and return to the Organization Registration process.<br>" +
                "<div id ='redirectInstruction'><h4>Please wait. You will be redirected to the site details steps</h4></div>";
            var page_srw_site_FR = "Au besoin, mettre à jour l’information sur le site, ensuite cliquer sur le bouton <b>[Suivant]</b> ci‑dessous pour continuer.</br></br>" +
                "Sinon, sélectionner <b>[Retour à l’enregistrement de l’organisation]</b> pour sauvegarder l’information à jour sur le site et revenir au processus d’enregistrement de l’organisation.<br>" +
                "<div id ='redirectInstruction'><h4>Veuillez patienter. Vous allez être redirigé vers les étapes relatives aux sites</h4></div>";

            var page_srw_activity_type_EN = "Choose the Site Activity Types. When complete, choose the <b>[Next]</b> button below.</br>If necessary, choose the <b>[Previous]</b> button below to return to the Basic/Extended screen.</br>" +
                "Alternatively, choose the <b>[Back to Organization Registration]</b> to save the current site information and return to the Organization Registration process.";
            var page_srw_activity_type_FR = "Choisir les types d’activités du site. Ensuite, cliquer sur le bouton <b>[Suivant]</b> ci‑dessous. Au besoin, cliquer sur le bouton <b>[Précédent]</b> ci‑dessous pour revenir à l’écran De base/Prolongé.</br>" +
                "Sinon, cliquer sur <b>[Retour à l’enregistrement de l’organisation]</b> pour sauvegarder l’information à jour sur le site et revenir au processus d’enregistrement de l’organisation.";

            var page_srw_further_site_details_EN = "Please choose the <b>[Next]</b> button below to review and attest the Site.</br>" +
                "If necessary, choose the <b>[Previous]</b> button below to return to Further Site Details screen.</br>" +
                "Alternatively, choose the <b>[Back to Organization Registration]</b> to save the current site information and return to the Organization Registration process.";
            var page_srw_further_site_details_FR = "Veuillez choisir le bouton <b>[Suivant]</b> ci-dessous pour examiner et attester le site.</br>" +
                "Si nécessaire, choisissez le bouton <b>[Précédent]</b> ci-dessous pour revenir à l'écran Détails supplémentaires du site.</br>" +
                "Vous pouvez également choisir <b>[Retour à l'enregistrement de l'organisation]</b> pour enregistrer les informations actuelles du site et revenir au processus d'enregistrement de l'organisation.";

            var page_srw_further_attest_site_EN = "If the site details are accurate and complete, then choose the <b>[Attest Site Data]</b> button below.</br>" +
                "Otherwise, use the <b>[Previous]</b> button to make any adjustments.</br>" +
                "Alternatively, choose the <b>[Back to Organization Registration]</b> to save the current site information and return to the Organization Registration process.";
            var page_srw_further_attest_site_FR = "Si les détails du site sont exacts et complets, cliquer sur le bouton <b>[Attester les données du site]</b> ci‑dessous.</br>" +
                "Sinon, cliquer sur le bouton <b>[Précédent]</b> pour apporter des changements.</br>" +
                "Vous pouvez également sélectionner <b>[Retour à l’enregistrement de l’organisation]</b> pour sauvegarder l’information à jour sur le site et revenir au processus d’enregistrement de l’organisation.";

            var page_orw_mot_EN = "Choose the Mode(s) Of Transportation. When complete, choose the <b>[Next]</b> button below.<br>" +
                "If necessary, choose the <b>[Previous]</b> button, or the <b>[Back to Activity Types Screen]</b> button, to return to the Activity Type screen.<br>" +
                "Alternatively, choose the <b>[Back to Activity Types Screen]</b> to save the current site information and return to the Activity Types Screen.";
            var page_orw_mot_FR = "Choisir le ou les modes de transport. Ensuite, cliquer sur le bouton <b>[Suivant]</b> ci‑dessous.<br>" +
                "Au besoin, cliquer sur le bouton <b>[Précédent]</b>, ou le bouton de l’écran <b>[Retour à l'écran Type d'activité]</b> pour revenir à l’écran Type(s) d'activité.<br>" +
                "Sinon, cliquer sur le bouton de l’écran <b>[Retour à l'écran Type d'activité]</b> pour sauvegarder l’information à jour sur le site et revenir à l’écran Type(s) d'activité.";

            var page_orw_class_EN = "Choose the <b>[+Add]</b> button below for each applicable Site Class. When complete, choose the <b>[Next]</b> button below.</br>" +
                "To edit or deactivate a Site Class, then choose the <b>[V]</b> button to the far right of that row.<br>" +
                "If necessary, choose the <b>[Previous]</b> button below to return to the Mode(s) of Transportation screen<br>" +
                "Alternatively, choose the <b>[Back to Activity Types Screen]</b> to save the current site information and return to the Activity Types Screen."
            var page_orw_class_FR = "Cliquer sur le bouton <b>[+Créer]</b> ci‑dessous pour chaque classe de site applicable. Ensuite, cliquer sur le bouton <b>[Suivant]</b> ci‑dessous.</br>" +
                "Pour modifier ou désactiver une classe de site, cliquer sur le bouton <b>[V]</b> à l’extrémité droite de la rangée.<br>" +
                "Au besoin, cliquer sur le bouton <b>[Précédent]</b> ci‑dessous pour revenir à l’écran Mode(s) de Transport.<br>" +
                "Sinon, sélectionner l’écran <b>[Retour à l'écran Type d'activité]</b> pour sauvegarder l’information à jour sur le site et revenir à l’écran Type(s) d'activité."

            var page_my_company_EN = "Head Office details can be updated by choosing the <b>[Update Organization]</b> button at the bottom of this screen.</br></br>" +
                "Following options are available via the menu options on the left:</br>" +
                "- Organization History Log: Key past activities for this Organization.</br>" +
                "- Annual Compliance Update: Allows completion of this mandatory annual update.</br>" +
                "- Deactivate Organization: To deactivate this Organization.</br>" +
                "- My Sites: To view a list of current Sites to add to, update, deactivate, reactivate or sale/transfer.</br>" +
                "- Manage Application Users: To add or remove user access to this application.</br>" +
                "- Online Help: To search for guidance on how to use this application.";
            var page_my_company_FR = "Les détails du siège social peuvent être mis à jour en choisissant le bouton <b>[Mettre à jour l'organisation]</b> en bas de cet écran.</br></br>" +
                "Les options suivantes sont disponibles via les options de menu à gauche :</br>" +
                "- Journal de l'historique de l'organisation : principales activités passées de cette organisation.</br>" +
                "- Mise à jour annuelle de conformité : permet de compléter cette mise à jour annuelle obligatoire.</br>" +
                "- Désactiver l'organisation : pour désactiver cette organisation.</br>" +
                "- Mes sites : pour afficher une liste des sites actuels à ajouter, mettre à jour, désactiver, réactiver ou vendre/transférer.</br>" +
                "- Gérer les utilisateurs de l'application : pour ajouter ou supprimer l'accès des utilisateurs à cette application.</br>" +
                "- Aide en ligne : pour rechercher des conseils sur l'utilisation de cette application.";

            var page_my_company_contact_EN = "For actions, select the <b>[V]</b> button beside each row, or the <b>[+Add]</b> button for a new entry.";
            var page_my_company_contact_FR = "Pour les actions, sélectionnez le bouton <b>[V]</b> à côté de chaque ligne, ou le bouton <b>[+Ajouter]</b> pour une nouvelle entrée.";

            var page_in_year_my_sites_EN = "Existing Sites where 'Is Site Attested' is set to 'No', need to be attested by choosing one of the options via the <b>[V]</b> button at the far right of those rows. All sites need to be attested before the Bulk option can be chosen.<br>" +
                "To add additional Sites individually, choose the <b>[+Add]</b> button. Alternatively, choose the <b>[Bulk Add/Update]</b> button to add all new Sites at once via Excel.<br>" +
                "To edit one of the Sites, mouse-click the underlined Site ID link of that row, or choose the option from the <b>[V]</b> button at the end.";
            var page_in_year_my_sites_FR = "Les sites existants où 'Is Site Attested' est défini sur 'Non' doivent être attestés en appliquant l'une des options via le bouton <b>[V]</b> à l'extrême droite de ces lignes. Tous les les sites doivent attester avant que l'option Bulk puisse être choisie.<br>" +
                "Pour ajouter des sites supplémentaires individuellement, choisissez le bouton <b>[+Ajouter]</b>. Vous pouvez également choisir le bouton <b>[Ajouter/Mettre à jour en masse]</b> pour ajouter tous les nouveaux sites en une seule fois via Excel. <br>" +
                "Pour modifier l'un des sites, cliquez avec la souris sur le lien souligné de l'ID de site de cette ligne ou choisissez l'option à partir du bouton <b>[V]</b> à la fin.";

            var page_annual_compliance_update_EN = "To finalize the Annual Compliance Update:</br>1- As applicable, perform each step's related update below, then it's 'Mark as complete' option.</br>" +
                "2- Read and agree to the terms of service agreement and select the 'Attestation' section.</br>" +
                "3- When complete, select the <b>[Finalize Annual Compliance]</b> option.";
            var page_annual_compliance_update_FR = "Pour finaliser la mise à jour annuelle de conformité :</br>1- Le cas échéant, effectuez la mise à jour associée à chaque étape ci-dessous, puis l'option 'Marquer comme terminée'.</br>" +
                "2- Lisez et acceptez les termes du contrat de service et sélectionnez la section 'Attestation'.</br>" +
                "3- Une fois terminé, sélectionnez l'option <b>[Finaliser la conformité annuelle]</b>.";

            var page_annual_compliance_resubmit_EN = "1- The next Annual Compliance Update can only be completed as early as 30 days before your Company’s Anniversary Date of {0}.</br>" +
                "2- If it is required to re-submit the previous Annual Compliance, then please choose the <b>[Re-Submit Annual Compliance Update]</b> button below.</br>" +
                "3- Note that the Annual Compliance should only be re-submitted if new data, or a date update, related to previous year that this Annual Compliance covers, was missed in the previous Compliance Update. </br>Any additions, or updates, that took place after the last Annual Compliance Completion Date of {1} should instead be done as regular in-year updates.";
            var page_annual_compliance_resubmit_FR = "1- La prochaine mise à jour annuelle de conformité ne peut être effectuée que 30 jours avant la date anniversaire de votre entreprise, le {0}.</br>" +
                "2- S'il est nécessaire de soumettre à nouveau la conformité annuelle précédente, veuillez choisir le bouton <b>[Re-Submit Annual Compliance Update]</b> ci-dessous.</br>" +
                "3- Notez que la conformité annuelle ne doit être soumise à nouveau que si de nouvelles données ou une mise à jour de la date, liées à l'année précédente couverte par cette conformité annuelle, ont été manquées dans la mise à jour de conformité précédente. </br> Tout ajout ou mise à jour , qui ont eu lieu après la dernière date d'achèvement de la conformité annuelle du {1} doivent plutôt être effectuées sous forme de mises à jour régulières en cours d'année.";

            var page_company_naics_code_EN = "The NAICS Code must be selected using the NAICS Code drop-down. Enter at least the first two digits or your full NAICS Code to filter the drop-down and select the applicable NAICS Code from the list.";
            var page_company_naics_code_FR = "Le code SCIAN doit être sélectionné au moyen du menu déroulant. Saisir au moins les deux premiers chiffres du code SCIAN, ou le code au complet, pour appliquer un filtre au menu déroulant et sélectionner le code SCIAN applicable à partir de la liste.";

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
                        "code": "page_annual_compliance_resubmit",
                        "message_en": page_annual_compliance_resubmit_EN,
                        "message_fr": page_annual_compliance_resubmit_FR
                    },
                    {
                        "code": "page_company_naics_code",
                        "message_en": page_company_naics_code_EN,
                        "message_fr": page_company_naics_code_FR
                    },
                    {
                        "code": "CID_PORTAL",
                        "message_en": "TDG CLIENT IDENTIFICATION DATABASE",
                        "message_fr": "BASE DE DONNÉES D’IDENTIFICATION DES CLIENTS DU TMD"
                    },
                    {
                        "code": "tdg_unnumberid",
                        "message_en": "UN Display Name",
                        "message_fr": "Nom d'affichage de l'ONU"
                    },
                    {
                        "code": "cid_naicscode",
                        "message_en": "NAICS Code",
                        "message_fr": "Codes du SCIAN"
                    },
                    {
                        "code": "OK",
                        "message_en": "OK",
                        "message_fr": "D'accord"
                    },
                    {
                        "code": "Yes",
                        "message_en": "Yes",
                        "message_fr": "Oui"
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
                        "code": "BTN_SUBMIT",
                        "message_en": "Submit",
                        "message_fr": "Soumettre"
                    },
                    {
                        "code": "BTN_OK",
                        "message_en": "OK",
                        "message_fr": "Oui"
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
                        "code": "BTN_ADD",
                        "message_en": "+Add",
                        "message_fr": "+Créer"
                    },
                    {
                        "code": "BTN_WITHDRAW",
                        "message_en": "Withdraw",
                        "message_fr": "Retirer"
                    },
                    {
                        "code": "BTN_IS_MY_COMPANY",
                        "message_en": "This is my Organization",
                        "message_fr": "Il s’agit de mon organisation"
                    },
                    {
                        "code": "BTN_IS_NOT_MY_COMPANY",
                        "message_en": "This is not my Organization",
                        "message_fr": "Il ne s’agit pas de mon organisation"
                    },
                    {
                        "code": "BTN_UPDATE_ORG",
                        "message_en": "Update Organization",
                        "message_fr": "Mettre à jour l'organisation"
                    },
                    {
                        "code": "lbl_operating_name",
                        "message_en": "Operating Name",
                        "message_fr": "Nom commercial"
                    },
                    {
                        "code": "lbl_legal_name",
                        "message_en": "Legal Name",
                        "message_fr": "Dénomination sociale"
                    },
                    {
                        "code": "lbl_cra_bn",
                        "message_en": "CRA Business Number",
                        "message_fr": "Numéro d’organisation de l’ARC"
                    },
                    {
                        "code": "lbl_address",
                        "message_en": "Address",
                        "message_fr": "Adresse"
                    },
                    {
                        "code": "lbl_reasonfornobnnumber",
                        "message_en": "Reason for No CRA Business Number",
                        "message_fr": "Raison pour laquelle il n’y a aucun numéro d’organisation de l’ARC"
                    },
                    {
                        "code": "lbl_reasonfornobnnumber_other",
                        "message_en": "Further Details Regarding No CRA Business Number",
                        "message_fr": "Autres détails concernant l’absence de numéro d’organisation de l’ARC"
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
                        "message_fr": "{0} de dossier(s) ajouté(s)"
                    },
                    {
                        "code": "m000006",
                        "message_en": "You cannot attest Organization before adding primary and secondary contacts.</br>",
                        "message_fr": "Vous ne pouvez pas attester de l'entreprise avant d'avoir ajouté des contacts principaux et secondaires.</br>"
                    },
                    {
                        "code": "m000007",
                        "message_en": "Print Summary",
                        "message_fr": "Imprimer le sommaire"
                    },
                    {
                        "code": "m000008",
                        "message_en": "Organization Registration",
                        "message_fr": "Inscription de l’organisation"
                    },
                    {
                        "code": "m000009",
                        "message_en": "Organization Registration for {0}",
                        "message_fr": "Inscription de l’organisation pour {0}"
                    },
                    {
                        "code": "m000010",
                        "message_en": "Choose the same named button found below",
                        "message_fr": "Choisir le bouton du même nom ci-dessous"
                    },
                    {
                        "code": "m000011",
                        "message_en": "You cannot proceed before adding active Organization site(s).",
                        "message_fr": "Vous ne pouvez pas procéder avant d’ajouter une ou des organisation(s) active(s)."
                    },
                    {
                        "code": "m000012",
                        "message_en": "You cannot proceed before attesting all the Organization Sites, via opening the site details and completing all the required information for each site.",
                        "message_fr": "Vous ne pouvez pas procéder avant d’attester tous les sites de l’organisation, en ouvrant les détails du site et en fournissant tous les renseignements requis pour chaque site."
                    },
                    {
                        "code": "m000013",
                        "message_en": m000013_EN,
                        "message_fr": m000013_FR
                    },
                    {
                        "code": "m000014",
                        "message_en": "This registration for this Organization has already begun. Do you want to send a request to the Administrator of that registration process requesting to be on-boarded as a user for that Organization?",
                        "message_fr": "L’enregistrement de cette organisation est déjà commencé. Voulez‑vous envoyer une demande à l’administrateur de ce processus d’enregistrement afin d’être ajouté comme utilisateur pour cette organisation?"
                    },
                    {
                        "code": "m000014B",
                        "message_en": "This registration for this Organization is already complete. Do you want to send a request to the Organization’s Administrator requesting to be on-boarded as a user for that Organization?",
                        "message_fr": "L’enregistrement de cette organisation est déjà terminé. Voulez‑vous envoyer une demande à l’administrateur de ce processus d’enregistrement afin d’être ajouté comme utilisateur pour cette organisation?"
                    },
                    {
                        "code": "m000015",
                        "message_en": "You cannot proceed before adding at least one mode of transportation.",
                        "message_fr": "Vous ne pouvez pas procéder avant d’ajouter au moins un mode de transport."
                    },
                    {
                        "code": "m000016",
                        "message_en": "You cannot proceed before adding class(es).",
                        "message_fr": "Vous ne pouvez pas procéder avant d’ajouter la ou les classes."
                    },
                    {
                        "code": "m000017",
                        "message_en": "You cannot proceed before adding UN Number(s).",
                        "message_fr": "Vous ne pouvez pas procéder avant d’ajouter le ou les numéros UN."
                    },
                    {
                        "code": "m000018",
                        "message_en": "Invalid province",
                        "message_fr": "Province non valide"
                    },
                    {
                        "code": "m000019",
                        "message_en": "ERAP {0} is assigned to another Organization. Are you sure you want to complete the add?",
                        "message_fr": "PIU {0} est attribué à une autre organisation. Êtes‑vous certain de vouloir compléter cet ajout?"
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
                        "message_fr": "Enregistrement des opérations pour {0}"
                    },
                    {
                        "code": "m000026",
                        "message_en": "You cannot proceed before attesting your Organization data changes, please check the 'Attestation' box",
                        "message_fr": "Vous ne pouvez pas procéder avant d’attester les changements de données de votre organisation, veuillez cocher la case 'Attestation'"
                    },
                    {
                        "code": "m000027",
                        "message_en": "Further Site Details",
                        "message_fr": "Autres détails sur le site"
                    },
                    {
                        "code": "m000028",
                        "message_en": "This UN Number does not exist in the CID Regulation. Please enter a valid UN Number to proceed.",
                        "message_fr": "Ce numéro UN n’existe pas dans le règlement du CID. Veuillez entrer un numéro UN valide pour continuer."
                    },
                    {
                        "code": "m000029",
                        "message_en": "Switch Site Type",
                        "message_fr": "Changer le type de site"
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
                        "message_fr": "L’enregistrement de l’organisation {0} ne peut se faire que sur invitation. Voulez‑vous recevoir une invitation pour inscrire cette organisation?"
                    },
                    {
                        "code": "m000033",
                        "message_en": "You are about to begin the process of registering the {0} Organization within CID. Would you like to proceed?",
                        "message_fr": "Vous êtes sur le point de commencer le processus d’inscription de {0} organisation dans le CID. Voulez‑vous continuer?"
                    },
                    {
                        "code": "m000034",
                        "message_en": "The registration process for the {0} Organization has begun. If you proceed, then you will be on-boarded as a Secondary Admin for the {0} Corporation. Would you like to proceed?",
                        "message_fr": "Le processus d’enregistrement pour l’organisation {0} est commencé. Si vous poursuivez, vous serez inscrit comme administrateur secondaire pour l’entreprise {0}. Voulez‑vous continuer?"
                    },
                    {
                        "code": "m000035",
                        "message_en": "The registration process for the {0} Organization is complete. If you proceed, then you will be on-boarded as a Secondary Admin for the {0} Corporation. Would you like to proceed?",
                        "message_fr": "Le processus d’enregistrement pour l’organisation {0} est terminé. Si vous poursuivez, vous serez inscrit comme administrateur secondaire pour l’entreprise {0}. Voulez‑vous continuer?"
                    },
                    {
                        "code": "m000036",
                        "message_en": "If you proceed, you will no longer be attached to {0} Organization, after which you will have the option to register a new Organization instead. Do you want to continue and be disconnected from {0}?",
                        "message_fr": "Si vous continuez, vous ne serez plus associé à l’organisation {0}, après quoi vous aurez l’option d’enregistrer à la place une autre organisation. Voulez‑vous continuer et être désaffilié de {0}?"
                    },
                    {
                        "code": "m000037",
                        "message_en": "CRA Business Number '{0}' already exists.",
                        "message_fr": "Le numéro d'entreprise ARC {0} existe déjà."
                    },
                    {
                        "code": "m000038",
                        "message_en": "Processing...",
                        "message_fr": "Traitement…"
                    },
                    {
                        "code": "m000039",
                        "message_en": m000039_EN,
                        "message_fr": m000039_FR
                    },
                    {
                        "code": "m000040",
                        "message_en": "TDG support personnel have been notified of your request and will contact you shortly at your email of {0}.",
                        "message_fr": "Le personnel de soutien de TMD a été avisé de votre demande et communiquera avec vous sous peu à votre adresse {0}."
                    },
                    {
                        "code": "m000041",
                        "message_en": "The following Organization data was retrieved from Canada Revenue Agency for this BN {0}:",
                        "message_fr": "Les données suivantes sur l’organisation ont été récupérées auprès de l’Agence du revenu du Canada pour ce NE {0} :"
                    },
                    {
                        "code": "m000042",
                        "message_en": "The following Organization, with the same Legal Name '{0}', has been found in our system.",
                        "message_fr": "L’organisation suivante, portant le même nom commercial {0}, a été trouvée dans notre système."
                    },
                    {
                        "code": "m000043",
                        "message_en": "The request has been sent to the primary administrator of this Organization to onboard you. If they agree, then an invitation email will be sent to you that will allow you complete the onboarding process.<br><br>Please choose the <b>[Sign Out]</b> option to leave the application.",
                        "message_fr": "La demande a été envoyée à l’administrateur principal de cette organisation afin de vous ajouter comme utilisateur. S’il est d’accord, un courriel d’invitation vous sera envoyé afin de compléter le processus.<br><br>Veuillez sélectionner l’option <b>[Fermer la session]</b> pour quitter l’application."
                    },
                    {
                        "code": "m000044",
                        "message_en": "As requested, no request the primary administrator of this Organization was not sent a request to onboard you to this Organization.<br><br>Please choose the <b>[Sign Out]</b> option to leave the application.",
                        "message_fr": "Tel que demandé, l’administrateur principal de cette organisation n’a pas reçu de demande afin de vous ajouter comme utilisateur.<br><br>Veuillez sélectionner l’option <b>[Fermer la session]</b> pour quitter l’application."
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
                        "message_fr": "L’organisation n’autorise l’accès que sur invitation. Souhaitez‑vous faire une demande afin d’être ajouté comme utilisateur?"
                    },
                    {
                        "code": "m000048",
                        "message_en": "For this site operation there is already a class record created",
                        "message_fr": "Il existe déjà un dossier de classe pour les opérations de ce site."
                    },
                    {
                        "code": "m000049",
                        "message_en": "Back To In Year Sites Page",
                        "message_fr": "Retour à la page des sites en cours d'année"
                    },
                    {
                        "code": "m000050",
                        "message_en": "Back To Annual Compliance Update Page",
                        "message_fr": "Retour à la page de mise à jour annuelle de la conformité"
                    },
                    {
                        "code": "m000051",
                        "message_en": "Back To In Year Site Update Page",
                        "message_fr": "Retour à la page de mise à jour du site en cours d'année"
                    },
                    {
                        "code": "m000052",
                        "message_en": "Confirmation that this is your Organization:",
                        "message_fr": "Confirmation qu'il s'agit de votre organisation:"
                    },
                    {
                        "code": "m000098",
                        "message_en": "Your entered name and email account are already associated with an invitation tailored to you and your Organization. The invitation is being resent and will appear at this email address shortly. Please use the link within that email to onboard onto CID.",
                        "message_fr": "Le nom et le compte de courriel saisis sont déjà associés à une invitation formulée pour vous et votre organisation. L’invitation vous sera retournée à cette adresse de courriel sous peu. Veuillez utiliser le lien figurant dans ce courriel pour être ajouté comme utilisateur du CID."
                    }, {
                        "code": "m000099",
                        "message_en": "The Registration process is currently being processed by your Organization’s Primary Administrator. Until the Registration is complete, you will not be able add or change any data, nor Attest to the Organization or Sites. You will however be able to view the current state of the Registration via the <b>[Next]</b> and <b>[Previous]</b> buttons at the bottom of the screen.",
                        "message_fr": "Le processus d’enregistrement est traité par l’administrateur principal de votre organisation. Tant que l’enregistrement ne sera pas terminé, vous ne pourrez pas ajouter ou changer les données, ni attester l’organisation ou les sites. Vous pourrez cependant voir l’état actuel de l’enregistrement en cliquant sur les boutons <b>[Suivant]</b> et <b>[Précédent]</b> au bas de l’écran."
                    },
                    {
                        "code": "m000100",
                        "message_en": "Back to Organization Registration",
                        "message_fr": "Retour à l’enregistrement de l’organisation"
                    },
                    {
                        "code": "m000101",
                        "message_en": "As seen below your ERAP(s) from the TC ROOT systems have been transferred over If necessary add any remaining ERAPs, or choose the <b>[Next]</b> button to continue.",
                        "message_fr": "Comme vous pouvez le voir ci-dessous, votre ou vos PIU des systèmes ROOT de TC ont été transférés. Au besoin, ajoutez les autres PIU ou cliquez sur le bouton <b>[Suivant]</b> pour poursuivre."
                    },
                    {
                        "code": "m000102",
                        "message_en": "Air",
                        "message_fr": "Transport aérien"
                    },
                    {
                        "code": "m000103",
                        "message_en": "Marine",
                        "message_fr": "Transport maritime"
                    },
                    {
                        "code": "m000104",
                        "message_en": "Rail",
                        "message_fr": "Transport ferroviaire"
                    },
                    {
                        "code": "m000105",
                        "message_en": "Road",
                        "message_fr": "Transport routier"
                    },
                    {
                        "code": "m000106",
                        "message_en": "<h2>TDG CLIENT IDENTIFICATION DATABASE: {0}</h2>",
                        "message_fr": "<h2>BASE DE DONNÉES D’IDENTIFICATION DES CLIENTS DU TMD: {0}</h2>"
                    },
                    {
                        "code": "m000107",
                        "message_en": "You must choose a valid NAICS Code from the NAICS Code drop- down list to continue.",
                        "message_fr": "Vous devez choisir un code SCIAN valide du menu déroulant NAICS Code pour continuer."
                    },
                    {
                        "code": "m000108",
                        "message_en": "Back to Activity Types Screen",
                        "message_fr": "Retour à l'écran Type d'activité"
                    },
                    {
                        "code": "m000109",
                        "message_en": "Deactivate Organization",
                        "message_fr": "Désactiver l’organisation"
                    },
                    {
                        "code": "m000110",
                        "message_en": "Before selecting the Bulk option, each Site where 'Site Claimed' is set to 'Site Claim Pending', needs to be claimed, by choosing one of the options (My Active Site, My Inactive Site, or Not My Site) via that row’s [V] button.",
                        "message_fr": "Avant de sélectionner l’option en bloc, chaque site où le champ « Site Claimed » est « Site Claim Pending » doit être réclamé en choisissant l’une des options (My Active Site, My Inactive Site, ou Not My Site) au moyen du bouton [V] de la rangée."
                    },
                    {
                        "code": "m000111",
                        "message_en": "Bulk Add/Update",
                        "message_fr": "Ajout/mise à jour en bloc"
                    },
                    {
                        "code": "m000112",
                        "message_en": "The Annual Compliance Update can only be completed 30 days before your Anniversary Date. On your Anniversary Date, you will have an additional 30 days to complete the Annual Compliance Update.",
                        "message_fr": "La mise à jour de la conformité annuelle ne peut être effectuée que 30 jours avant votre date d’anniversaire. Le jour de l’anniversaire, vous aurez 30 jours de plus pour effectuer la mise à jour de la conformité annuelle."
                    },
                    {
                        "code": "m000113",
                        "message_en": "The Assign as Primary Admin is restricted to only the Primary Admin for this Organization.",
                        "message_fr": "La fonction d’administrateur principal ne peut être assignée qu’à l’administrateur principal de cette organisation."
                    },
                    {
                        "code": "m000114",
                        "message_en": "Are you sure you want to assign {0} as the Primary Admin for this Organization’s CID Platform, and in doing assign yourself as a Secondary Contact?",
                        "message_fr": "Êtes‑vous certain de vouloir nommer {0} comme administrateur principal pour la plateforme CID de cette organisation et, ce faisant, vous nommer comme contact secondaire?"

                    },
                    {
                        "code": "m000115",
                        "message_en": "The Assign as Primary Admin can only be assigned to a Secondary Admin that has logged into the CID Platform at least one time.",
                        "message_fr": "La fonction d’administrateur principal ne peut être assignée qu’à un administrateur secondaire qui a ouvert une session sur la plateforme du CID au moins une fois."
                    },
                    {
                        "code": "m000116",
                        "message_en": "This Contact cannot be added as a Contact with this name and email address already exists in CID, but is assigned to a different Organization.",
                        "message_fr": "Ce contact ne peut pas être ajouté, puisqu’un contact avec ce nom et cette adresse de courriel existe déjà dans le CID, mais est attribué à une organisation différente."
                    },
                    {
                        "code": "m000117",
                        "message_en": "The Secondary Contact {0} has been sent an on-boarding invitation to their email address of {1}.",
                        "message_fr": "Une invitation pour être ajouté comme utilisateur a été envoyée au contact secondaire {0} à son adresse de courriel {1}."
                    },
                    {
                        "code": "m000118",
                        "message_en": "Only the Primary Admin can deactivate a Secondary Admin.",
                        "message_fr": "Seul l’administrateur principal peut désactiver un administrateur secondaire."
                    },
                    {
                        "code": "m000119",
                        "message_en": "At least one other active Secondary Admin needs to be added before you can deactivate this Secondary Admin.",
                        "message_fr": "Au moins un autre administrateur secondaire doit être ajouté avant que vous puissiez désactiver cet administrateur secondaire."
                    },
                    {
                        "code": "m000120",
                        "message_en": "The Secondary Contact {0} has been sent an on-boarding invitation to their email address of {1}.",
                        "message_fr": "Une invitation pour être ajouté comme utilisateur a été envoyée au contact secondaire {0} à son adresse de courriel {1}."
                    },
                    {
                        "code": "m000121",
                        "message_en": "Mark All as Complete",
                        "message_fr": "Afficher tous comme terminé"
                    },
                    {
                        "code": "m000122",
                        "message_en": "Are you sure you would like to de-activate this contact record?",
                        "message_fr": "Êtes‑vous sûr de vouloir désactiver le dossier de ce contact?"
                    },
                    {
                        "code": "m000123",
                        "message_en": "Mark as Complete",
                        "message_fr": "Afficher comme terminé"
                    },
                    {
                        "code": "m000124",
                        "message_en": "TDG Activity Types for",
                        "message_fr": "Types d'activités TMD pour"
                    },
                    {
                        "code": "m000125",
                        "message_en": "Class/Divisions for",
                        "message_fr": "Catégorie/Division pour"
                    },
                    {
                        "code": "m000126",
                        "message_en": "Modes of Transportation for",
                        "message_fr": "Modes de transport pour"
                    },
                    {
                        "code": "m000127",
                        "message_en": "Site",
                        "message_fr": "Site"
                    },
                    {
                        "code": "m000128",
                        "message_en": "Latitude",
                        "message_fr": "Latitude"
                    },
                    {
                        "code": "m000129",
                        "message_en": "Longitude",
                        "message_fr": "Longitude"
                    },
                    {
                        "code": "m000130",
                        "message_en": "The Annual Compliance Update can only be completed as early as 30 days before your Organization’s Anniversary Date of {0}.",
                        "message_fr": "La mise à jour de la conformité annuelle ne peut être effectuée avant les 30 jours précédant la date d’anniversaire de votre organisation, soit le {0}."
                    },
                    {
                        "code": "m000131",
                        "message_en": "The address you entered is currently registered and active and used by another organization. The site at this address must be de-activated before changes can be made.",
                        "message_fr": "L'adresse que vous avez entrée est actuellement enregistrée, active et utilisée par une autre organisation. Le site à cette adresse doit être désactivé avant que des modifications puissent être apportées."
                    },
                    {
                        "code": "m000132",
                        "message_en": "This action will deactivate the Organization and all of its Sites.</br></br>Please be aware that if any of the Sites are meant to be sold to another Organization, or merged into an existing Organization, then you will need to first begin the Transfer/Sale process for those Sites before deactivating the Organization.</br></br> <p style='color:red' >Be advised that this action cannot be undone.</p> Do you want to proceed with the Organization deactivation.",
                        "message_fr": "Cette action désactivera l’organisation et tous ses sites.</br></br>Soyez avisé que si l’un ou plusieurs de ces sites doivent être vendus à une autre organisation, ou fusionnés à une organisation existante, il vous faudra en premier lieu commencer le processus de transfert/vente pour ces sites avant de désactiver l’organisation.</br></br> <p style='color:red' >Soyez avisé que cette action ne peut pas être annulée.</p> Voulez-vous procéder à la désactivation de l’organisation?"
                    },
                    {
                        "code": "m000133",
                        "message_en": "Note: This addition of a backup Contact has completed the Contact requirements of the regulation. Any further Contact additions are completely optional.",
                        "message_fr": "Remarque : En ajoutant ce contact de réserve, vous répondez à toutes les exigences du règlement. Tout autre ajout de contact est entièrement facultatif."
                    },
                    {
                        "code": "m000134",
                        "message_en": "This addition of a backup Contact has completed the Contact requirements of the regulation. Any further Contact additions are completely optional.",
                        "message_fr": "Cet ajout d'un second contact a complété les exigences de contact du règlement. Tout autre ajout de contact est entièrement facultatif."
                    },
                    {
                        "code": "m000135",
                        "message_en": "Contact Email",
                        "message_fr": "Courriel de la personne contact"
                    },
                    {
                        "code": "m000136",
                        "message_en": "Note: This is your account’s official email, which may be updated via the <b>[Account Settings]</b> button at the top.",
                        "message_fr": "Remarque: il s'agit de l'adresse courriel officielle de votre compte, qui peut être mise à jour via le bouton <b>[Paramètres du compte]</b> en haut."
                    },
                    {
                        "code": "m000137",
                        "message_en": "Your request has been sent to the Transport Canada TDG CID Support Team.",
                        "message_fr": "Votre demande a été envoyée à l'équipe de soutien BDIC du TMD de Transports Canada."
                    },
                    {
                        "code": "m000138",
                        "message_en": "Details of Request needs to be entered.",
                        "message_fr": "Les détails de la demande doivent être saisis."
                    },
                    {
                        "code": "m000139",
                        "message_en": "There is knowledge article information about this topic that may answer your request. Do you want to first view that information?",
                        "message_fr": "Il existe des informations et des articles sur ce sujet qui peuvent répondre à votre demande. Voulez-vous d'abord consulter ces informations ?"
                    },
                    {
                        "code": "m000140",
                        "message_en": "The current owner orgnization of this site was contacted and informed to release this site.",
                        "message_fr": "L'organisation actuellement propriétaire de ce site a été contactée et informée pour libérer ce site dans le système."
                    },
                    {
                        "code": "m000141",
                        "message_en": "Activate Organization",
                        "message_fr": "Activer l'organisation"
                    },
                    {
                        "code": "m000142",
                        "message_en": "<p>Please be aware that the entered date is in the future.</p>",
                        "message_fr": "<p>Veuillez noter que la date saisie est dans le futur.</p>"
                    },
                    {
                        "code": "m000143",
                        "message_en": "Please enter a Latitude as a decimal, with the full four digit decimal point (e.g. 41.3251).",
                        "message_fr": "Veuillez saisir une latitude sous forme décimale, avec le point et  quatre décimales (par exemple, 41.3251)."
                    },
                    {
                        "code": "m000144",
                        "message_en": "Please enter a Longitude as a decimal, with the full four digit decimal point (e.g. -74.7992).",
                        "message_fr": "Veuillez saisir une longitude sous forme décimale, avec le point et  quatre décimales (par exemple, 41.3251)."
                    },
                    {
                        "code": "m000145",
                        "message_en": "Proceeding with this option will result in a complete withdrawal from the CID registration process. All data entered to date will be deleted. Do you still want to proceed?",
                        "message_fr": "Poursuivre avec cette option entraînera un retrait complet du processus d'enregistrement BDIC. Toutes les données saisies à ce jour seront supprimées. Voulez-vous toujours continuer?"
                    },
                    {
                        "code": "m000146",
                        "message_en": "You cannot proceed before selecting the site activity types.",
                        "message_fr": "Vous ne pouvez pas procéder avant de sélectionner les types d’activités du site."
                    },
                    {
                        "code": "m000147",
                        "message_en": "Your profile has been updated successfully",
                        "message_fr": "Votre profil a été mis à jour"
                    },
                    {
                        "code": "m000148",
                        "message_en": "Annual Organization has been successfully re-opened. Please now complete the Annual Compliance Update, which is due as of {0}.",
                        "message_fr": "La conformité annuelle a été ré-ouverte avec succès. Veuillez maintenant remplir la mise à jour annuelle de conformité, qui est due à partir du {0}."
                    },
                    {
                        "code": "m000149",
                        "message_en": "A re-submit of your Organizatio’s previous Annual Compliance Update should only be done when there is a material change to your Organizatio’s details covering up to your previous Update Anniversary Date. It should not be used when there is a new change to your data in the current year. For those changes, you should instead do a regular update. <br><br> Are you sure you want to reopen the submitted Annual Compliance so that you can submit a new one?",
                        "message_fr": "Une nouvelle soumission de la précédente mise à jour annuelle de conformité de votre entreprise ne doit être effectuée que lorsqu'il y a un changement important dans les détails de votre entreprise couvrant jusqu'à votre date anniversaire de mise à jour précédente. Il ne doit pas être utilisé lorsqu'il y a un nouveau changement dans vos données dans l'année en cours. Pour ces changements, vous devriez plutôt faire une mise à jour régulière. <br><br> Êtes-vous sûr de vouloir rouvrir la conformité annuelle soumise afin de pouvoir en soumettre une nouvelle ?"
                    },
                    {
                        "code": "m000150",
                        "message_en": "You cannot proceed before completing the checklist items in the Organization Management section<br>",
                        "message_fr": "Vous ne pouvez pas continuer avant d'avoir rempli les éléments de la liste de contrôle dans la section Gestion de l'entreprise<br>"
                    },
                    {
                        "code": "m000151",
                        "message_en": "You cannot proceed before completing the checklist items in the Sites Management section<br>",
                        "message_fr": "Vous ne pouvez pas continuer avant d'avoir terminé les éléments de la liste de contrôle dans la section Gestion des sites<br>"
                    },
                    {
                        "code": "m000152",
                        "message_en": "You cannot proceed before attesting all Organizations sites",
                        "message_fr": "Vous ne pouvez pas continuer avant d'avoir attesté tous les sites de l'entreprise"
                    },
                    {
                        "code": "m000153",
                        "message_en": "You cannot proceed before attesting your Organization annual compliance update changes, please check the 'Attestation' box<br>",
                        "message_fr": "Vous ne pouvez pas continuer avant d'avoir attesté les modifications apportées à la mise à jour annuelle de la conformité de votre entreprise, veuillez cocher la case 'Attestation'<br>"
                    },
                    {
                        "code": "m000154",
                        "message_en": "The Resend Onboarding Invitation is only available to Secondary Admins that have not yet logged into the CID Platform.",
                        "message_fr": "L'invitation Renvoyer l'intégration n'est disponible que pour les administrateurs secondaires qui ne se sont pas encore connectés à la plate-forme BDIC."
                    },
                    {
                        "code": "m000155",
                        "message_en": "Only Primary Admin can Resend invitation.",
                        "message_fr": "Seul l'administrateur principal peut renvoyer l'invitation."
                    },
                    {
                        "code": "m000156",
                        "message_en": "Head Office",
                        "message_fr": "Siège social"
                    },
                    {
                        "code": "m000157",
                        "message_en": "You cannot proceed before attesting your site data changes, please check the 'Attestation' box",
                        "message_fr": "Vous ne pouvez pas continuer avant d'avoir attesté les modifications apportées aux données de votre site, veuillez cocher la case 'Attestation'."
                    },
                    {
                        "code": "m000158",
                        "message_en": "Update Mode(s) of transportation",
                        "message_fr": "Mettre à jour les modes de transport"
                    },
                    {
                        "code": "m000159",
                        "message_en": "TDG Activity Types required",
                        "message_fr": "Types d'activités de TMD obligatoires"
                    },
                    {
                        "code": "m000160",
                        "message_en": "History for ",
                        "message_fr": "Historique pour"
                    },
                    {
                        "code": "m000161",
                        "message_en": m000161_EN,
                        "message_fr": m000161_FR
                    },
                    {
                        "code": "m000162",
                        "message_en": "Description:",
                        "message_fr": "Description:"
                    },
                    {
                        "code": "m000163",
                        "message_en": "Content:",
                        "message_fr": "Contenu:"
                    },
                    {
                        "code": "m000164",
                        "message_en": "We are currently experiencing issues with the Canada Revenue Agency (CRA) Application Program Interface (API). You will not be able to create a new company by using a CRA Business Number. Please try again at a later date.",
                        "message_fr": "Nous rencontrons actuellement des problèmes avec l'interface du programme d'application (API) de l'Agence du revenu du Canada (ARC). Vous ne pourrez pas créer une nouvelle entreprise en utilisant un numéro d'entreprise de l'ARC. Veuillez réessayer ultérieurement."
                    },
                    {
                        "code": "m000165",
                        "message_en": "Back to Site Registration Wizard",
                        "message_fr": "Retour au site de l'assistant d'inscription en ligne"
                    },
                    {
                        "code": "m000166",
                        "message_en": "The form could not be submitted for the following reasons:",
                        "message_fr": "Le formulaire n’a pas pu être soumis pour les raisons suivantes:"
                    },
                    {
                        "code": "m000167",
                        "message_en": "You cannot proceed before completing site operation details.",
                        "message_fr": "Vous ne pouvez pas continuer avant d’avoir terminé l'entrée des détails des opérations du site."
                    },
                    {
                        "code": "m000168",
                        "message_en": "Add the Site Name, Address 2 and Address 3 to separate the site from similar addresses.",
                        "message_fr": "Ajoutez le nom du site, l'adresse 2 et l'adresse 3 pour séparer le site des adresses similaires."
                    },
                    {
                        "code": "m000169",
                        "message_en": "Add the Site Name in Address 2 or 3 for extra detail that would set it apart from other site addresses.",
                        "message_fr": "Ajoutez le nom du site dans l'adresse 2 ou 3 pour des détails supplémentaires qui le distingueraient des autres adresses de site."
                    },
                    {
                        "code": "m000170",
                        "message_en": "Update Site",
                        "message_fr": "Mise à jour du Site"
                    }
                ];

            return list;
        }
    }
}
