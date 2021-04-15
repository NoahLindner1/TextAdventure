# TextAdventure
<h2>Simulations<h2>
<p>The simulations are each contained in their own folder. They all follow the same format, starting at the head followed by two options that lead to a series of two more options and a final result page. Each page of the simulation is made up of a prompt at the top, and two responses(one on each half of the page) followed by a button directly under. The final result page contains some closing text and a button to restart the simulation so the user can experience different paths and results. Also, the name of the person is listed at the top of the head page.<p>


<h2>Design template<h2>

	The design template of the simulations follows a similar pattern as the actual simulations themselves. There are pages where there are two options, a next button or a restart option. Inside simulation1 there is CSS files for reach of these options and the all of the html tags that fall within them. These classNames from the CSS files are reused throughout all three simulations and form a template that is applicable for all the simulations.
	One important thing to note in the design is that in on all the pages that feature a next button have a space between the heading and the button for pictures or videos that customer has or will be providing in the future.

classNames you will see:
	
divs: 

headbody
-	This adds the background and sets the height and width for it
-	This can be used for all the outside div tags on the simulations as background and sizes are the same

A1Buttons
-	Wrapper for both choices whenever there is two

choice1
-	A wrapper for the first choice button box

choice2
-	Wrapper for the second choice box

H1:
	

P:

userStory1
-	Used to organize the first option in choice story, can be utilized for the first story whenever there is two

p2
-	Utilized to organize the second choice story, can be utilized for the second story whenever there is two


Buttons:

btn2: utilized when there is two choice the user must make and restart buttons

btns: utilized on all next buttons
![image](https://user-images.githubusercontent.com/44238895/114918361-9d30dd00-9dec-11eb-83c8-a898bf74d084.png)
