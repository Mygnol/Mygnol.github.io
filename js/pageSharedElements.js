function createProjectBox(displayImage, projectName, projectDesc, isTech, isArt, techContrib, artContrib,sourceName,sourceLink,isPlayable,siteName,siteLink,isUnreal) {
	document.write('<aside id="project-box">');

		document.write('<img src =' + String(displayImage) + ' width="128" class="project-box-main-icon">');

		document.write('<div>')
			document.write('<h1>' + projectName + '</h1>');
			document.write('<p><em>' + projectDesc + '</em></p>');
		document.write('</div>');

		document.write('<div class = "project-box-img-with-text">')
			document.write('<br><h2>Links:</h2>');
			document.write('<a href="' + sourceLink + '"target="_blank">' + sourceName + '</a>');
			if(isPlayable)
			{
				document.write(' <a href="' + siteLink + '"target="_blank">' + siteName + '</a>');
			}

		document.write('</div>');


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

			if(isUnreal){
				document.write('<div class = "tooltip"><img src = "images/tag_unreal.png" alt="Unreal Engine" width="64">');
				document.write('</div>');
			}
			else
			{
				document.write('<div class = "tooltip"><img src = "images/tag_unity.png" alt="Unity Engine" width="64">');
				document.write('</div>');
			}
		document.write('</div>');

	document.write('</aside>');
  return;
}

function makeHeader(){
	document.write('<div class = "container">');

	//TITLE
	document.write('<img src = "images/title.png" alt="Long Yee Ming | Game Programmer" class = "header">');

	//NAVBAR
	document.write('<nav id="navbar">');
		//document.write('<img src = "images/lineBreak.png" class = "lineBreak">');
		document.write('<ul>');
			document.write('<a href="index.html"><div class = "buttonHome"></div></a>');
			document.write('<a href="about.html"><div class = "buttonAbout"></div></a>');
			document.write('<a href="projects.html"><div class = "buttonProjects"></div></a>');
			document.write('<a href="about.html#contact"><div class = "buttonContact"></div></a>');
		document.write('</ul>');
		//document.write('<img src = "images/lineBreak.png" class = "lineBreak">');
	document.write('</nav>');

	document.write('</div>');
}

function makeShowcaseBox(imgLinkTop,imgLinkBottom,clickLink,title,desc){
	document.write('<a href="' + clickLink + '">');

	document.write('<div class = "showcase-text-holder">');

		document.write('<content id = "showcase-box">');
			document.write('<img src = "'+imgLinkBottom+'" class = "bottom">');
			document.write('<img src = "'+imgLinkTop+'" class = "top">');
		document.write('</content>');

		document.write('<h1>'+title+'</h1>');
		document.write('<p>'+desc+'</p>');

	document.write('</div>');

	document.write('</a>');
}

function makeButton(buttonType,target,icon,width)
{
	document.write('<a href="'+target+'" target="_blank"><button class="button '+buttonType+'"><img class = "a" src = "'+icon+'" width="'+width+'"></img></button></a>');
}

/*
<!-- Title -->
<img src = "images/title.png" alt="Long Yee Ming | Game Programmer" class = "header">
<div class="container">
	<h1>Game Programmer</h1>
</div>

<!-- Navbar -->
<nav id="navbar">

	<img src = "images/lineBreak.png" class = "lineBreak">

	<ul>
		<a href="#about"><div class = "buttonAbout"></div></a>
		<a href="#projects"><div class = "buttonProjects"></div></a>
		<a href="#contact"><div class = "buttonContact"></div></a>
		<a href="#resume"><div class = "buttonResume"></div></a>
	</ul>

	<img src = "images/lineBreak.png" class = "lineBreak">
</nav>

<div class = "showcase-text-holder">
	<content id = "showcase-box">
		<img src = "gifs/submarine.gif" class = "bottom">
		<img src = "images/projectTitleCards/submarine_card.png" class = "top">
	</content>
	<h1>Help! I'm Trapped In A Submarine...</h1>
	<p>Limited Information Submarine Simulator</p>
</div>
*/
