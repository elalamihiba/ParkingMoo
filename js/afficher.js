
function afficher_semestre() {
            i = document.an.annee.selectedIndex;
            aa = document.an.annee.options[i].value;
            if (aa=='premiere_annee') {
			    
				document.getElementById('semestre1').checked = true;
				document.getElementById('semestre3').checked = false;
				document.getElementById('semestre4').checked = false;
				document.getElementById('semestre5').checked = false;
                document.getElementById('premiere_annee').style.display="block";
                document.getElementById('deuxieme_annee').style.display="none";
				document.getElementById('troisieme_annee').style.display="none";
				
               
                document.getElementById('op').style.display="none";
                
            }
            else if (aa=='deuxieme_annee') {
			    
				document.getElementById('semestre3').checked = true;
				document.getElementById('semestre1').checked = false;
				document.getElementById('semestre2').checked = false;
				document.getElementById('semestre5').checked = false;
                document.getElementById('deuxieme_annee').style.display="block";
                document.getElementById('premiere_annee').style.display="none";
				document.getElementById('troisieme_annee').style.display="none";
				
                document.getElementById('op').style.display="none";
              
            }
            else if (aa=='troisieme_annee') {
			     
				document.getElementById('semestre5').checked = true;
				document.getElementById('semestre1').checked = false;
				document.getElementById('semestre2').checked = false;
				document.getElementById('semestre3').checked = false;
				document.getElementById('semestre4').checked = false;
                 document.getElementById('troisieme_annee').style.display="block";
                document.getElementById('premiere_annee').style.display="none";
                document.getElementById('deuxieme_annee').style.display="none";
				
                document.getElementById('op').style.display="block";
                
                
            }
            else {
                document.getElementById('premiere_annee').style.display="block";
				document.getElementById('troisieme_annee').style.display="none";
                document.getElementById('deuxieme_annee').style.display="none";
				
                document.getElementById('op').style.display="none";
            }
}