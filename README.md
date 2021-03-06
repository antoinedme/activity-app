## Preview ADLs dashboard for participants:
Client-side of the Ubismart platform (based on sails.js, node.js MVC framework with support of real-time features via socket.io)

Activities of Daily Living metrics dashboard for users:
![alt text](https://raw.githubusercontent.com/antoinedme/activity-app/master/img/activity-app-preview.png)


## Use of bar-chart.css:

Open the bar chart div
```html
<div class="bar-chart">
```
Insert item and class bar
```html
<div class="item">
	<div class="bar">
```
Insert custom element, replace label and data-percent value with var
```html
<span class="percent">92%</span>
<div class="item-progress" data-percent="92">
	<span class="title">Indoor</span>
</div>
```

## Use percircle.css:

Display a big blue circle with label "Good!" with circle progress bar value: 86%
```html
<div id="bluecircle" data-percent="86" data-text="Good!" class="big"> </div>
```
Other examples from library:
```html
<div id="pinkcircle" data-text="work" data-percent="65" class="red big"></div> 
<div id="bluecircle" data-text="rest" data-percent="87" class="purple"></div>
<div id="bluecircle" data-text="rest" data-percent="87" class="pink"></div>
<div id="custom" class="yellow big"></div><div id="clock" class="purple big"></div>
<div id="custom-color" class="big"></div><div id="countdown" class="big"></div>
```

# Access the App:
https://antoinedme.github.io/activity-app/ - check the preview:
[Activity-App](https://antoinedme.github.io/activity-app/)
