module.exports = {
   checkMsg: function(message, mutes) {
   		//nep if necessary
   		let neeep = parseInt(Math.random() * 1000);
		if (neeep==0)  { 
			let nep = "nep";
	        do { continu = (parseInt(Math.random() * 5) == 0); 
	            nep += " nep";
	        } while (continu)
	        message.channel.send(nep);
		}
	   	let auteur = (message.author.username).toUpperCase();

		for(var i=0; i < mutes.length; i++)
		{
			if(message.author == mutes[i]){
				if(auteur != "KRYSTHALIA"){
					message.delete();
				}
			}
		}

		let msg = message.toString().substring(1);
		let motifs = msg.split(' ');
		let res = 0;
		
		motifs.forEach(function(word) { 
		   	if(word.toUpperCase() == "QUAND"){ res+=10; }
			if(word == '?'){ res++; }
		});

		// if(res>10){
			// message.reply("** DANS 10 MINUUUUUUTES !!!**");
		// }
	   
		const taggedUser = message.mentions.users.first();

		if(auteur == "ANDERSON"){
			if((message.content) == "Soleil :sun_with_face: !") {
				message.channel.send("VOS GUEULES LES BOTS !");
				message.channel.send("*/flip_table");
			}
		}
	   
	   	let m = message.content;
		
	   	if(m == "ckc"){
			message.channel.send('*Cassé !!!*', {
				file : "https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/tenor.gif"
			});
		}
		
		/*if(m == "mdr" || m == "jpp" || m == ":joy:" || m==":')" || m=="😂" || m=="haha"){
			message.channel.send(":regional_indicator_l:  :regional_indicator_o:  :regional_indicator_u:  :regional_indicator_l: ");
		}*/
	   
	   	if(m== "nani ?" || m == "Nani ?" || m=="NANI ?"){
			message.channel.send("C'est quoi ?");	
		}
			
   }
}
