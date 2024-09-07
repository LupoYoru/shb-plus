const makro_klassenwahl = await renderTemplate("modules/dnd5e-spielerhandbuch-plus/data/makro_klassenwahl.html");

await Dialog.prompt({
    title: 'Anfangsvermögen nach Klasse',
    content: makro_klassenwahl,
        callback: async(html) => {
          let select = html.find('[name="klassenwahl"]').val();
          if (select === "barbar") {
            let msg_barbar = `<p style="text-align: center;">Ermittle dein <strong>Anfangsvermögen als Barbar</strong> durch folgenden Würfelwurf:</p><p style="text-align: center;">[[/r 2d4 * 10 #Anfangsvermögen als Barbar]]</p>`;
            ChatMessage.create({
                user: game.user._id,
                content: msg_barbar
            })
          }
          if (select === "barde") {
            let msg_barde = `<p style="text-align: center;">Ermittle dein <strong>Anfangsvermögen als Barde</strong> durch folgenden Würfelwurf:</p><p style="text-align: center;">[[/r 5d4 * 10 #Anfangsvermögen als Barde]]</p>`;
            ChatMessage.create({
                user: game.user._id,
                content: msg_barde
            })
          }
          if (select === "druide") {
            let msg_druide = `<p style="text-align: center;">Ermittle dein <strong>Anfangsvermögen als Druide</strong> durch folgenden Würfelwurf:</p><p style="text-align: center;">[[/r 2d4 * 10 #Anfangsvermögen als Druide]]</p>`;
            ChatMessage.create({
                user: game.user._id,
                content: msg_druide
            })
          }
          if (select === "hexenmeister") {
            let msg_hexenmeister = `<p style="text-align: center;">Ermittle dein <strong>Anfangsvermögen als Hexenmeister</strong> durch folgenden Würfelwurf:</p><p style="text-align: center;">[[/r 4d4 * 10 #Anfangsvermögen als Hexenmeister]]</p>`;
            ChatMessage.create({
                user: game.user._id,
                content: msg_hexenmeister
            })
          }
          if (select === "kaempfer") {
            let msg_kaempfer = `<p style="text-align: center;">Ermittle dein <strong>Anfangsvermögen als Kämpfer</strong> durch folgenden Würfelwurf:</p><p style="text-align: center;">[[/r 5d4 * 10 #Anfangsvermögen als Kämpfer]]</p>`;
            ChatMessage.create({
                user: game.user._id,
                content: msg_kaempfer
            })
          }
          if (select === "kleriker") {
            let msg_kleriker = `<p style="text-align: center;">Ermittle dein <strong>Anfangsvermögen als Kleriker</strong> durch folgenden Würfelwurf:</p><p style="text-align: center;">[[/r 5d4 * 10 #Anfangsvermögen als Kleriker]]</p>`;
            ChatMessage.create({
                user: game.user._id,
                content: msg_kleriker
            })
          }
          if (select === "magier") {
            let msg_magier = `<p style="text-align: center;">Ermittle dein <strong>Anfangsvermögen als Magier</strong> durch folgenden Würfelwurf:</p><p style="text-align: center;">[[/r 4d4 * 10 #Anfangsvermögen als Magier]]</p>`;
            ChatMessage.create({
                user: game.user._id,
                content: msg_magier
            })
          }
          if (select === "moench") {
            let msg_moench = `<p style="text-align: center;">Ermittle dein <strong>Anfangsvermögen als Mönch</strong> durch folgenden Würfelwurf:</p><p style="text-align: center;">[[/r 5d4 #Anfangsvermögen als Mönch]]</p>`;
            ChatMessage.create({
                user: game.user._id,
                content: msg_moench
            })
          }
          if (select === "paladin") {
            let msg_paladin = `<p style="text-align: center;">Ermittle dein <strong>Anfangsvermögen als Paladin</strong> durch folgenden Würfelwurf:</p><p style="text-align: center;">[[/r 5d4 * 10 #Anfangsvermögen als Paladin]]</p>`;
            ChatMessage.create({
                user: game.user._id,
                content: msg_paladin
            })
          }
          if (select === "schurke") {
            let msg_schurke = `<p style="text-align: center;">Ermittle dein <strong>Anfangsvermögen als Schurke</strong> durch folgenden Würfelwurf:</p><p style="text-align: center;">[[/r 4d4 * 10 #Anfangsvermögen als Schurke]]</p>`;
            ChatMessage.create({
                user: game.user._id,
                content: msg_schurke
            })
          }
          if (select === "waldlaeufer") {
            let msg_waldlaeufer = `<p style="text-align: center;">Ermittle dein <strong>Anfangsvermögen als Waldläufer</strong> durch folgenden Würfelwurf:</p><p style="text-align: center;">[[/r 5d4 * 10 #Anfangsvermögen als Waldläufer]]</p>`;
            ChatMessage.create({
                user: game.user._id,
                content: msg_waldlaeufer
            })
          }
          if (select === "zauberer") {
            let msg_zauberer = `<p style="text-align: center;">Ermittle dein <strong>Anfangsvermögen als Zauberer</strong> durch folgenden Würfelwurf:</p><p style="text-align: center;">[[/r 3d4 * 10 #Anfangsvermögen als Zauberer]]</p>`;
            ChatMessage.create({
                user: game.user._id,
                content: msg_zauberer
            })
          }
        }
})