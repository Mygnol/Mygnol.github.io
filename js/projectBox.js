function createProjectBox(displayImage, projectName, projectDesc, isTech, isArt, techContrib, artContrib,sourceName,sourceLink,isPlayable,siteName,siteLink) {

	//OH GOD WHAT HAVE I DONE
	document.write('<aside id="project-box">');

		document.write('<img src =' + String(displayImage) + ' width="128" class="project-box-main-icon">');

		document.write('<h1>' + projectName + '</h1>');
		document.write('<p><em>' + projectDesc + '</em></p>');
			
		document.write('<h2>Links:</h2>');
		document.write('<a href="' + sourceLink + '">' + sourceName + '</a> ');
		if(isPlayable)
		{
			document.write('<a href="' + siteLink + '">' + siteName + '</a>');
		}

		document.write('<div class ="project-box-inline-icons">');

			if(isTech){
			document.write('<div class = "tooltip"><img src = "images/tag_Tech.png" alt="Tech" width="64">');
				
				document.write('<span class = "tooltiptext">');
				document.write(techContrib);
				document.write('</span>');

			document.write('</div>');
			}

			if(isArt){
			document.write('<div class = "tooltip"><img src = "images/tag_Art.png" alt="Art" width="64">');
				
				document.write('<span class = "tooltiptext">');
				document.write(artContrib);
				document.write('</span>');

			document.write('</div>');
			}
		document.write('</div>');

	document.write('</aside>');
  return;
}