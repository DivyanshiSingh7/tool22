(this.webpackJsonpmhealth3=this.webpackJsonpmhealth3||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},29:function(e,t,a){e.exports=a(52)},34:function(e,t,a){},35:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},36:function(e,t,a){},37:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(16),i=a.n(s),c=(a(34),a(35),a(15)),o=a(8),r=a(9),m=a(6),u=a(11),d=a(10),h=(a(36),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleClick=function(e,t){0==n.state.start_page?n.setState({start_page:1}):1==n.state.start_page&&0==e&&n.setState({start_page:0});var a=[0,0,0,0,0,0,0,0,0,0,0,0];if(a[e]=1,n.setState({ques_clicked:a}),11===e){var l=n.state.arr[0]+n.state.arr[1]+n.state.arr[2]+n.state.arr[3]+n.state.arr[4]+n.state.arr[5]+n.state.arr[6]+n.state.arr[7];n.setState({sum:l,error:!1})}var s=n.state.visited.slice();s[e-1]=1,n.setState({visited:s})},n.state={selectedOption1:-1,selectedOption2:-1,selectedOption3:-1,selectedOption4:-1,selectedOption5:-1,selectedOption6:-1,selectedOption7:-1,selectedOption8:-1,selectedOption9:-1,selectedOption10:-1,arr:[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],bapp:!1,edu:!1,ans:!1,sum:0,buttonq1:[0,0],buttonq2:[0,0],buttonq3:[0,0],buttonq4:[0,0],buttonq5:[0,0],buttonq6:[0,0],buttonq7:[0,0],buttonq8:[0,0],buttonq9:[0,0],buttonq10:[0,0],ques_clicked:[0,0,0,0,0,0,0,0,0,0,0,0],start_page:0,visited:[0,0,0,0,0,0,0,0,0,0],error:!1},n.handleOptionChange1=n.handleOptionChange1.bind(Object(m.a)(n)),n.handleOptionChange2=n.handleOptionChange2.bind(Object(m.a)(n)),n.handleOptionChange3=n.handleOptionChange3.bind(Object(m.a)(n)),n.handleOptionChange4=n.handleOptionChange4.bind(Object(m.a)(n)),n.handleOptionChange5=n.handleOptionChange5.bind(Object(m.a)(n)),n.handleOptionChange6=n.handleOptionChange6.bind(Object(m.a)(n)),n.handleOptionChange7=n.handleOptionChange7.bind(Object(m.a)(n)),n.handleOptionChange8=n.handleOptionChange8.bind(Object(m.a)(n)),n.handleOptionChange9=n.handleOptionChange9.bind(Object(m.a)(n)),n.handleOptionChange10=n.handleOptionChange10.bind(Object(m.a)(n)),n.handleClick=n.handleClick.bind(Object(m.a)(n)),n.handleError=n.handleError.bind(Object(m.a)(n)),n}return Object(r.a)(a,[{key:"handleOptionChange1",value:function(e){this.setState({selectedOption1:e.target.value});var t=e.target.value,a=Number(t),n=this.state.arr.slice();n[0]=a,this.setState({arr:n});var l=[0,0];l[a]=1,this.setState({buttonq1:l})}},{key:"handleOptionChange2",value:function(e){this.setState({selectedOption2:e.target.value});var t=e.target.value,a=Number(t),n=this.state.arr.slice();n[1]=a,this.setState({arr:n});var l=[0,0];l[a]=1,this.setState({buttonq2:l})}},{key:"handleOptionChange3",value:function(e){this.setState({selectedOption3:e.target.value});var t=e.target.value,a=Number(t),n=this.state.arr.slice();n[2]=a,this.setState({arr:n});var l=[0,0];l[a]=1,this.setState({buttonq3:l})}},{key:"handleOptionChange4",value:function(e){this.setState({selectedOption4:e.target.value});var t=e.target.value,a=Number(t),n=this.state.arr.slice();n[3]=a,this.setState({arr:n});var l=[0,0];l[a]=1,this.setState({buttonq4:l})}},{key:"handleOptionChange5",value:function(e){this.setState({selectedOption5:e.target.value});var t=e.target.value,a=Number(t),n=this.state.arr.slice();n[4]=a,this.setState({arr:n});var l=[0,0];l[a]=1,this.setState({buttonq5:l})}},{key:"handleOptionChange6",value:function(e){this.setState({selectedOption6:e.target.value});var t=e.target.value,a=Number(t),n=this.state.arr.slice();n[5]=a,this.setState({arr:n});var l=[0,0];l[a]=1,this.setState({buttonq6:l})}},{key:"handleOptionChange7",value:function(e){this.setState({selectedOption7:e.target.value});var t=e.target.value,a=Number(t),n=this.state.arr.slice();n[6]=a,this.setState({arr:n});var l=[0,0];l[a]=1,this.setState({buttonq7:l})}},{key:"handleOptionChange8",value:function(e){this.setState({selectedOption8:e.target.value});var t=e.target.value,a=Number(t),n=this.state.arr.slice();n[7]=a,this.setState({arr:n});var l=[0,0];l[a]=1,this.setState({buttonq8:l})}},{key:"handleOptionChange9",value:function(e){this.setState({selectedOption9:e.target.value});var t=e.target.value,a=Number(t),n=this.state.arr.slice();n[8]=a,this.setState({arr:n});var l=[0,0];l[a]=1,this.setState({buttonq9:l})}},{key:"handleOptionChange10",value:function(e){this.setState({selectedOption10:e.target.value});var t=e.target.value,a=Number(t),n=this.state.arr.slice();n[9]=a,this.setState({arr:n});var l=[0,0];l[a]=1,this.setState({buttonq10:l})}},{key:"handleError",value:function(){this.setState({error:!0})}},{key:"render",value:function(){var e,t,a=this,n=[l.a.createElement("div",{className:"m",style:{marginBottom:"5%"}},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",{className:"intropara"},"Premenstrual dysphoric disorder (PMDD) causes many symptoms similar to PMS (Premenstrual syndrome), but with much greater impact on a woman's personal and social life, relationships and work. It can be easily confused with PMS."),l.a.createElement("p",{className:"intropara"},"  Take this brief assessment to find out if you could be suffering from PMDD."),l.a.createElement("button",{className:"start_button",onClick:function(){return a.handleClick(1)}},"Start\u27a1")),l.a.createElement("div",{className:"m"},l.a.createElement("p",{className:"pa"},"I feel much more depressed, down, tearful, sad or hopeless before the start of my period.",l.a.createElement("span",{style:{color:"red"}},"*"),"  "),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},0==this.state.buttonq1[1]?l.a.createElement("button",{className:"unclicked_button",value:"1",onClick:this.handleOptionChange1},"YES"):l.a.createElement("button",{value:"1",className:"clicked_button",onClick:this.handleOptionChange1},"YES")),l.a.createElement("div",{className:"col-md-6"},0==this.state.buttonq1[0]?l.a.createElement("button",{className:"unclicked_button",value:"0",onClick:this.handleOptionChange1},"NO"):l.a.createElement("button",{value:"0",className:"clicked_button",onClick:this.handleOptionChange1},"NO"))),l.a.createElement("div",{className:"row"},l.a.createElement("button",{className:"left_button",onClick:function(){return a.handleClick(0)}},"Back"),l.a.createElement("button",{className:"right_button",onClick:function(){return a.handleClick(2)}},"Next")))),l.a.createElement("div",{className:"m"},l.a.createElement("p",{className:"pa"}," I feel anxious, tense, nervous, \u201ckeyed up\u201d or \u201con edge\u201d before the start of my period.",l.a.createElement("span",{style:{color:"red"}},"*"),"  "),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},0==this.state.buttonq2[1]?l.a.createElement("button",{value:"1",className:"unclicked_button",onClick:this.handleOptionChange2},"YES"):l.a.createElement("button",{value:"1",className:"clicked_button",onClick:this.handleOptionChange2},"YES")),l.a.createElement("div",{className:"col-md-6"},0==this.state.buttonq2[0]?l.a.createElement("button",{value:"0",className:"unclicked_button",onClick:this.handleOptionChange2},"NO"):l.a.createElement("button",{value:"0",className:"clicked_button",onClick:this.handleOptionChange2},"NO"))),l.a.createElement("div",{className:"row"},l.a.createElement("button",{className:"left_button",onClick:function(){return a.handleClick(1)}},"Back"),l.a.createElement("button",{className:"right_button",onClick:function(){return a.handleClick(3)}},"Next")))),l.a.createElement("div",{className:"m"},l.a.createElement("p",{className:"pa"},"I feel hypersensitive to rejection, or, my emotions feel very unstable and unpredictable before the start of my period.",l.a.createElement("span",{style:{color:"red"}},"*"),"  "),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},0==this.state.buttonq3[1]?l.a.createElement("button",{value:"1",className:"unclicked_button",onClick:this.handleOptionChange3},"YES"):l.a.createElement("button",{value:"1",className:"clicked_button",onClick:this.handleOptionChange3},"YES")),l.a.createElement("div",{className:"col-md-6"},0==this.state.buttonq3[0]?l.a.createElement("button",{value:"0",className:"unclicked_button",onClick:this.handleOptionChange3},"NO"):l.a.createElement("button",{value:"0",className:"clicked_button",onClick:this.handleOptionChange3},"NO"))),l.a.createElement("div",{className:"row"},l.a.createElement("button",{className:"left_button",onClick:function(){return a.handleClick(2)}},"Back"),l.a.createElement("button",{className:"right_button",onClick:function(){return a.handleClick(4)}},"Next")))),l.a.createElement("div",{className:"m"},l.a.createElement("p",{className:"pa"},"I feel much more irritable or I get angry easily before the start of my period.",l.a.createElement("span",{style:{color:"red"}},"*"),"  "),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},0==this.state.buttonq4[1]?l.a.createElement("button",{value:"1",className:"unclicked_button",onClick:this.handleOptionChange4},"YES"):l.a.createElement("button",{value:"1",className:"clicked_button",onClick:this.handleOptionChange4},"YES")),l.a.createElement("div",{className:"col-md-6"},0==this.state.buttonq4[0]?l.a.createElement("button",{value:"0",className:"unclicked_button",onClick:this.handleOptionChange4},"NO"):l.a.createElement("button",{value:"0",className:"clicked_button",onClick:this.handleOptionChange4},"NO"))),l.a.createElement("div",{className:"row"},l.a.createElement("button",{className:"left_button",onClick:function(){return a.handleClick(3)}},"Back"),l.a.createElement("button",{className:"right_button",onClick:function(){return a.handleClick(5)}},"Next")))),l.a.createElement("div",{className:"m"},l.a.createElement("p",{className:"pa"}," I experience feelings of hopelessness before the start of my period.",l.a.createElement("span",{style:{color:"red"}},"*"),"  "),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},0==this.state.buttonq5[1]?l.a.createElement("button",{value:"1",className:"unclicked_button",onClick:this.handleOptionChange5},"YES"):l.a.createElement("button",{value:"1",className:"clicked_button",onClick:this.handleOptionChange5},"YES")),l.a.createElement("div",{className:"col-md-6"},0==this.state.buttonq5[0]?l.a.createElement("button",{value:"0",className:"unclicked_button",onClick:this.handleOptionChange5},"NO"):l.a.createElement("button",{value:"0",className:"clicked_button",onClick:this.handleOptionChange5},"NO"))),l.a.createElement("div",{className:"row"},l.a.createElement("button",{className:"left_button",onClick:function(){return a.handleClick(4)}},"Back"),l.a.createElement("button",{className:"right_button",onClick:function(){return a.handleClick(6)}},"Next")))),l.a.createElement("div",{className:"m"},l.a.createElement("p",{className:"pa"},"I am much less interested than usual in my hobbies and daily activities before the start of my period.",l.a.createElement("span",{style:{color:"red"}},"*"),"  "),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},0==this.state.buttonq6[1]?l.a.createElement("button",{value:"1",className:"unclicked_button",onClick:this.handleOptionChange6},"YES"):l.a.createElement("button",{value:"1",className:"clicked_button",onClick:this.handleOptionChange6},"YES")),l.a.createElement("div",{className:"col-md-6"},0==this.state.buttonq6[0]?l.a.createElement("button",{value:"0",className:"unclicked_button",onClick:this.handleOptionChange6},"NO"):l.a.createElement("button",{value:"0",className:"clicked_button",onClick:this.handleOptionChange6},"NO"))),l.a.createElement("div",{className:"row"},l.a.createElement("button",{className:"left_button",onClick:function(){return a.handleClick(5)}},"Back"),l.a.createElement("button",{className:"right_button",onClick:function(){return a.handleClick(7)}},"Next")))),l.a.createElement("div",{className:"m"},l.a.createElement("p",{className:"pa"},"I find it much harder to concentrate before the start of my period.",l.a.createElement("span",{style:{color:"red"}},"*"),"  "),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},0==this.state.buttonq7[1]?l.a.createElement("button",{value:"1",className:"unclicked_button",onClick:this.handleOptionChange7},"YES"):l.a.createElement("button",{value:"1",className:"clicked_button",onClick:this.handleOptionChange7},"YES")),l.a.createElement("div",{className:"col-md-6"},0==this.state.buttonq7[0]?l.a.createElement("button",{value:"0",className:"unclicked_button",onClick:this.handleOptionChange7},"NO"):l.a.createElement("button",{value:"0",className:"clicked_button",onClick:this.handleOptionChange7},"NO"))),l.a.createElement("div",{className:"row"},l.a.createElement("button",{className:"left_button",onClick:function(){return a.handleClick(6)}},"Back"),l.a.createElement("button",{className:"right_button",onClick:function(){return a.handleClick(8)}},"Next")))),l.a.createElement("div",{className:"m"},l.a.createElement("p",{className:"pa"},"I am bothered by breast tenderness or swelling, increased headaches, joint or muscle pain, bloating or water retention, and/or weight gain before the start of my period.",l.a.createElement("span",{style:{color:"red"}},"*"),"  "),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},0==this.state.buttonq8[1]?l.a.createElement("button",{className:"unclicked_button",value:"1",onClick:this.handleOptionChange8},"YES"):l.a.createElement("button",(e={value:"1",className:"clicked_button"},Object(c.a)(e,"className","clicked_button"),Object(c.a)(e,"onClick",this.handleOptionChange8),e),"YES")),l.a.createElement("div",{className:"col-md-6"},0==this.state.buttonq8[0]?l.a.createElement("button",{value:"0",className:"unclicked_button",onClick:this.handleOptionChange8},"NO"):l.a.createElement("button",(t={value:"0",className:"clicked_button"},Object(c.a)(t,"className","clicked_button"),Object(c.a)(t,"onClick",this.handleOptionChange8),t),"NO"))),l.a.createElement("div",{className:"row"},l.a.createElement("button",{className:"left_button",onClick:function(){return a.handleClick(7)}},"Back"),l.a.createElement("button",{className:"right_button",onClick:function(){return a.handleClick(9)}},"Next")))),l.a.createElement("div",{className:"m"},l.a.createElement("p",{className:"pa"},"These symptoms interfere or cause problems in my day-to-day activities and/or relationships. ",l.a.createElement("span",{style:{color:"red"}},"*"),"  "),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},0==this.state.buttonq9[1]?l.a.createElement("button",{value:"1",className:"unclicked_button",onClick:this.handleOptionChange9},"YES"):l.a.createElement("button",{value:"1",className:"clicked_button",onClick:this.handleOptionChange9},"YES")),l.a.createElement("div",{className:"col-md-6"},0==this.state.buttonq9[0]?l.a.createElement("button",{value:"0",className:"unclicked_button",onClick:this.handleOptionChange9},"NO"):l.a.createElement("button",{value:"0",className:"clicked_button",onClick:this.handleOptionChange9},"NO"))),l.a.createElement("div",{className:"row"},l.a.createElement("button",{className:"left_button",onClick:function(){return a.handleClick(8)}},"Back"),l.a.createElement("button",{className:"right_button",onClick:function(){return a.handleClick(10)}},"Next")))),l.a.createElement("div",{className:"m"},l.a.createElement("p",{className:"pa"},"Most of my symptoms disappear by the end of my period.",l.a.createElement("span",{style:{color:"red"}},"*"),"  "),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},0==this.state.buttonq10[1]?l.a.createElement("button",{value:"1",className:"unclicked_button",onClick:this.handleOptionChange10},"YES"):l.a.createElement("button",{value:"1",className:"clicked_button",onClick:this.handleOptionChange10},"YES")),l.a.createElement("div",{className:"col-md-6"},0==this.state.buttonq10[0]?l.a.createElement("button",{value:"0",className:"unclicked_button",onClick:this.handleOptionChange10},"NO"):l.a.createElement("button",{value:"0",className:"clicked_button",onClick:this.handleOptionChange10},"NO"))),l.a.createElement("div",{className:"row"},l.a.createElement("button",{className:"left_button",onClick:function(){return a.handleClick(9)}},"Back"),-1!=this.state.selectedOption1&&-1!=this.state.selectedOption2&&-1!=this.state.selectedOption3&&-1!=this.state.selectedOption4&&-1!=this.state.selectedOption5&&-1!=this.state.selectedOption6&&-1!=this.state.selectedOption7&&-1!=this.state.selectedOption8&&-1!=this.state.selectedOption9&&-1!=this.state.selectedOption10?l.a.createElement("button",{className:"right_button",onClick:function(){return a.handleClick(11)}},"Get Results"):l.a.createElement("button",{className:"right_button",onClick:this.handleError},"Get Results")))),l.a.createElement("div",{className:"m"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"resultheading"},l.a.createElement("strong",null,"Your Result")),l.a.createElement("div",{className:"row",id:"resultpara",style:{textAlign:"justify"}},this.state.sum>4||this.state.sum<=4&&"1"===this.state.selectedOption9?l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("strong",null,"Your answers suggest that you have symptoms similar to people suffering from Premenstrual dysphoric disorder (PMDD).")),l.a.createElement("p",null,"These results do not mean that you are suffering from Premenstrual dysphoric disorder (PMDD), but may be a sign that it is time you started talking to a trusted psychotherapist who will further investigate your mental health.")):l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("strong",null,"Your answers suggest that you have negligible or very few symptoms of Premenstrual dysphoric disorder (PMDD)."))," ",l.a.createElement("p",null,"You may be suffering from Premenstrual syndrome (PMS) Since this quiz is not substitute for a professional diagnosis, we recommend that you speak to a  psychotherapist who will perform a complete assessment of your mental health. You can also consider taking this test again after a few weeks."))),l.a.createElement("div",{className:"row"},l.a.createElement("button",{className:"left_button",onClick:function(){return a.handleClick(10)}},"Back"),l.a.createElement("a",{className:"right_buttonl",href:"http://DivyanshiSingh7.github.io/tool33/"},"Take Test Again"))))];return l.a.createElement("div",null,l.a.createElement("div",{className:"d"},l.a.createElement("div",null,0==this.state.start_page?l.a.createElement("div",null,n[0]):l.a.createElement("div",null,1===this.state.ques_clicked[1]?l.a.createElement("div",null,n[1]):null,1===this.state.ques_clicked[2]?l.a.createElement("div",null,n[2]):null,1===this.state.ques_clicked[3]?l.a.createElement("div",null,n[3]):null,1===this.state.ques_clicked[4]?l.a.createElement("div",null,n[4]):null,1===this.state.ques_clicked[5]?l.a.createElement("div",null,n[5]):null,1===this.state.ques_clicked[6]?l.a.createElement("div",null,n[6]):null,1===this.state.ques_clicked[7]?l.a.createElement("div",null,n[7]):null,1===this.state.ques_clicked[8]?l.a.createElement("div",null,n[8]):null,1===this.state.ques_clicked[9]?l.a.createElement("div",null,n[9]):null,1===this.state.ques_clicked[10]?l.a.createElement("div",null,n[10]):null,1===this.state.ques_clicked[11]?l.a.createElement("div",null,n[11]):null,l.a.createElement("br",null),this.state.error?l.a.createElement("div",{style:{color:"#cf1b1b"}},"*Please answer all questions"):null,l.a.createElement("br",null),0===this.state.ques_clicked[11]?l.a.createElement("div",null,0===this.state.visited[0]&&-1===this.state.selectedOption1?l.a.createElement("button",{className:"nav_buttons1",id:"buttonr",onClick:function(){return a.handleClick(1)}},"1"):1===this.state.visited[0]&&-1===this.state.selectedOption1?l.a.createElement("button",{className:"nav_buttons2",id:"buttonr",onClick:function(){return a.handleClick(1)}},"1"):1===this.state.visited[0]&&-1!=this.state.selectedOption1?l.a.createElement("button",{className:"nav_buttons3",id:"buttonr",onClick:function(){return a.handleClick(1)}},"1"):null,0===this.state.visited[1]&&-1===this.state.selectedOption2?l.a.createElement("button",{className:"nav_buttons1",id:"buttonr",onClick:function(){return a.handleClick(2)}},"2"):1===this.state.visited[1]&&-1===this.state.selectedOption2?l.a.createElement("button",{className:"nav_buttons2",id:"buttonr",onClick:function(){return a.handleClick(2)}},"2"):1===this.state.visited[1]&&-1!=this.state.selectedOption2?l.a.createElement("button",{className:"nav_buttons3",id:"buttonr",onClick:function(){return a.handleClick(2)}},"2"):null,0===this.state.visited[2]&&-1===this.state.selectedOption3?l.a.createElement("button",{className:"nav_buttons1",id:"buttonr",onClick:function(){return a.handleClick(3)}},"3"):1===this.state.visited[2]&&-1===this.state.selectedOption3?l.a.createElement("button",{className:"nav_buttons2",id:"buttonr",onClick:function(){return a.handleClick(3)}},"3"):1===this.state.visited[2]&&-1!=this.state.selectedOption3?l.a.createElement("button",{className:"nav_buttons3",id:"buttonr",onClick:function(){return a.handleClick(3)}},"3"):null,0===this.state.visited[3]&&-1===this.state.selectedOption4?l.a.createElement("button",{className:"nav_buttons1",id:"buttonr",onClick:function(){return a.handleClick(4)}},"4"):1===this.state.visited[3]&&-1===this.state.selectedOption4?l.a.createElement("button",{className:"nav_buttons2",id:"buttonr",onClick:function(){return a.handleClick(4)}},"4"):1===this.state.visited[3]&&-1!=this.state.selectedOption4?l.a.createElement("button",{className:"nav_buttons3",id:"buttonr",onClick:function(){return a.handleClick(4)}},"4"):null,0===this.state.visited[4]&&-1===this.state.selectedOption5?l.a.createElement("button",{className:"nav_buttons1",id:"buttonr",onClick:function(){return a.handleClick(5)}},"5"):1===this.state.visited[4]&&-1===this.state.selectedOption5?l.a.createElement("button",{className:"nav_buttons2",id:"buttonr",onClick:function(){return a.handleClick(5)}},"5"):1===this.state.visited[4]&&-1!=this.state.selectedOption5?l.a.createElement("button",{className:"nav_buttons3",id:"buttonr",onClick:function(){return a.handleClick(5)}},"5"):null,0===this.state.visited[5]&&-1===this.state.selectedOption6?l.a.createElement("button",{className:"nav_buttons1",id:"buttonr",onClick:function(){return a.handleClick(6)}},"6"):1===this.state.visited[5]&&-1===this.state.selectedOption6?l.a.createElement("button",{className:"nav_buttons2",id:"buttonr",onClick:function(){return a.handleClick(6)}},"6"):1===this.state.visited[5]&&-1!=this.state.selectedOption6?l.a.createElement("button",{className:"nav_buttons3",id:"buttonr",onClick:function(){return a.handleClick(6)}},"6"):null,0===this.state.visited[6]&&-1===this.state.selectedOption7?l.a.createElement("button",{className:"nav_buttons1",id:"buttonr",onClick:function(){return a.handleClick(7)}},"7"):1===this.state.visited[6]&&-1===this.state.selectedOption7?l.a.createElement("button",{className:"nav_buttons2",id:"buttonr",onClick:function(){return a.handleClick(7)}},"7"):1===this.state.visited[6]&&-1!=this.state.selectedOption7?l.a.createElement("button",{className:"nav_buttons3",id:"buttonr",onClick:function(){return a.handleClick(7)}},"7"):null,0===this.state.visited[7]&&-1===this.state.selectedOption8?l.a.createElement("button",{className:"nav_buttons1",id:"buttonr",onClick:function(){return a.handleClick(8)}},"8"):1===this.state.visited[7]&&-1===this.state.selectedOption8?l.a.createElement("button",{className:"nav_buttons2",id:"buttonr",onClick:function(){return a.handleClick(8)}},"8"):1===this.state.visited[7]&&-1!=this.state.selectedOption8?l.a.createElement("button",{className:"nav_buttons3",id:"buttonr",onClick:function(){return a.handleClick(8)}},"8"):null,0===this.state.visited[8]&&-1===this.state.selectedOption9?l.a.createElement("button",{className:"nav_buttons1",id:"buttonr",onClick:function(){return a.handleClick(9)}},"9"):1===this.state.visited[8]&&-1===this.state.selectedOption9?l.a.createElement("button",{className:"nav_buttons2",id:"buttonr",onClick:function(){return a.handleClick(9)}},"9"):1===this.state.visited[8]&&-1!=this.state.selectedOption9?l.a.createElement("button",{className:"nav_buttons3",id:"buttonr",onClick:function(){return a.handleClick(9)}},"9"):null,0===this.state.visited[9]&&-1===this.state.selectedOption10?l.a.createElement("button",{className:"nav_buttons1",id:"button10",onClick:function(){return a.handleClick(10)}},"10"):1===this.state.visited[9]&&-1===this.state.selectedOption10?l.a.createElement("button",{className:"nav_buttons2",id:"button10",onClick:function(){return a.handleClick(10)}},"10"):1===this.state.visited[9]&&-1!=this.state.selectedOption10?l.a.createElement("button",{className:"nav_buttons3",id:"button10",onClick:function(){return a.handleClick(10)}},"10"):null):null))))}}]),a}(n.Component)),b=(a(22),a(37),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={a:2},n}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{style:{marginTop:"7%",paddingTop:"3%",paddingBottom:"3%"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("h2",{className:"phyheading"},"Speak to our physician"),l.a.createElement("br",null),l.a.createElement("h3",{className:"phyheading2"},"Your comfort, Your convenience"),l.a.createElement("h5",{className:"phypara"},"Schedule a 1:1 consultation with an expert to openly talk about any reasons that might be affecting your emotional well-being."),l.a.createElement("a",{className:"myButton2",href:"http://www.proactiveforher.com/doctors/"},"Book an Appointment")),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.proactiveforher.com/doctors/"},l.a.createElement("i",{class:"fa fa-user-md",style:{fontSize:"250px",color:"rgb(188, 216, 223)"}})))),l.a.createElement("div",{className:"row",id:"articles"},l.a.createElement("h4",{className:"articlesread"},"Read related articles")),l.a.createElement("div",{className:"row",id:"articlesrow"},l.a.createElement("div",{className:"col-md-4",id:"article1"},l.a.createElement("a",{className:"myButton4",href:"http://www.proactiveforher.com/mental-health-2/pcos-and-emotional-wellness/"},"Could your severe PMS be PPMD?")),l.a.createElement("div",{className:"col-md-4",id:"article2"},l.a.createElement("a",{className:"myButton4",href:"http://www.proactiveforher.com/mental-health/the-psychological-impact-of-hormonal-imbalances/"},"Psychological Impact of Hormonal Imbalances")),l.a.createElement("div",{className:"col-md-4",id:"article3"},l.a.createElement("a",{className:"myButton3",href:"http://www.proactiveforher.com/mental-health-2/mindfulness/"},"Mindfulness")))))}}]),a}(n.Component)),p=a(53),v=a(54),E=a(62),f=a(55),k=a(7),N=a(17),C=(a(23),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={open:!1},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{style:{position:"fixed",width:"100%",top:0,zIndex:1}},l.a.createElement(p.a,{expand:"lg",className:"header"},l.a.createElement("h2",null,l.a.createElement("a",{href:"http://www.proactiveforher.com/",className:"logo",style:{fontFamily:"Abril Fatface, Sans-serif",letterSpacing:"5px"}},"Proactive")),l.a.createElement(v.a,{className:"navbar-dark",style:{borderColor:"white"},onClick:function(){e.setState({open:!e.state.open})}},l.a.createElement(k.a,{icon:N.a,color:"white"})),l.a.createElement(E.a,{className:"header-right",isOpen:this.state.open,navbar:!0},l.a.createElement(f.a,{navbar:!0},l.a.createElement("a",{href:"http://www.proactiveforher.com/"},"Home"),l.a.createElement("a",{href:"http://www.proactiveforher.com/webinar/"},"Webinars"),l.a.createElement("a",{href:"http://www.proactiveforher.com/videos/"},"Videos"),l.a.createElement("a",{href:"http://www.proactiveforher.com/blog/"},"Blog"),l.a.createElement("a",{href:"http://www.proactiveforher.com/sti-2/patient-education-tools/"},"Tools"),l.a.createElement("a",{href:"http://www.proactiveforher.com/forum/"},"Forum"),l.a.createElement("a",{href:"http://www.proactiveforher.com/doctors/"},"Physicians"))))),l.a.createElement("div",{style:{backgroundColor:"#FFFCFC",marginTop:"5%",paddingTop:"10px"}},l.a.createElement("h1",{className:"hh",style:{paddingTop:"2%",paddingBottom:"0%",color:"#163948"}},l.a.createElement("strong",null,"Premenstrual Dysphoric Disorder Check")),l.a.createElement("p",{className:"para1",style:{paddingLeft:"15%",paddingRight:"15%",paddingTop:"1%",paddingBottom:"1%"}},"A brief assessment to check if you may be suffering from premenstrual dysphoric disorder or just premenstrual syndrome (PMS) based on how you feel a few days before your periods.")))}}]),a}(n.Component)),g=a(13),O=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={a:2},n}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{style:{marginTop:"15%",backgroundColor:"#FFFCFC",paddingTop:"3.5%",paddingBottom:"5%"}},l.a.createElement("h1",{style:{color:"#163948"}},"Share now"),l.a.createElement("p",{style:{color:"#163948",paddingBottom:"1.5%"}},"Let your friends know about this PMDD Check tool and help them identify if they may have PMDD."),l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("a",{className:"",href:" https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.proactiveforher.com%2Ftools%2Fpmdd-tool%2F&quote=Proactive%E2%80%99s%20self-screening%20tool%20for%20PMDD%20provides%20a%20comprehensive%20assessment%20of%20your%20symptoms.%20Just%20answer%20few%20questions%20and%20get%20actionable%20insights!",target:"_blank",rel:"noopener","aria-label":""},l.a.createElement(k.a,{icon:g.b,style:{fontSize:"50px",backgroundColor:"#475993",color:"white",paddingTop:"10px",borderRadius:"5px",paddingBottom:"10px",width:"60px"}})),l.a.createElement("a",{className:"pl-4",href:"https://twitter.com/intent/tweet/?text=Proactive%E2%80%99s%20self-screening%20tool%20for%20PMDD%20provides%20a%20comprehensive%20assessment%20of%20your%20symptoms.%20Just%20answer%20few%20questions%20and%20get%20actionable%20insights!&url=http%3A%2F%2Fproactiveforher.com%2Ftools%2Fpmdd-tool%2F",target:"_blank",rel:"noopener","aria-label":""},l.a.createElement(k.a,{icon:g.f,style:{fontSize:"50px",backgroundColor:"#76a9ea",color:"white",paddingTop:"10px",borderRadius:"5px",paddingBottom:"10px",width:"60px"}})),l.a.createElement("a",{className:"pl-4",href:"mailto:?subject=Could%20your%20severe%20PMS%20be%20PMDD?%20Let\u2019s%20find%20out.%20|%20Proactive&body=Proactive%E2%80%99s%20self-screening%20tool%20for%20PMDD%20provides%20a%20comprehensive%20assessment%20of%20your%20symptoms.%20Just%20answer%20few%20questions%20and%20get%20actionable%20insights!%20http%3A%2F%2Fproactiveforher.com%2Ftools%2Fpmdd-tool%2F",target:"_self",rel:"noopener","aria-label":""},l.a.createElement(k.a,{icon:N.b,style:{fontSize:"50px",backgroundColor:"#fdbf04",color:"white",paddingTop:"10px",borderRadius:"5px",paddingBottom:"10px",width:"60px"}})),l.a.createElement("a",{className:"pl-4",href:"https://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Fproactiveforher.com%2Ftools%2Fbirth-control%2F&title=Could%20your%20severe%20PMS%20be%20PMDD?%20Let\u2019s%20find%20out.%20|%20Proactive&summary=Proactive%E2%80%99s%20self-screening%20tool%20for%20PMDD%20provides%20a%20comprehensive%20assessment%20of%20your%20symptoms.%20Just%20answer%20few%20questions%20and%20get%20actionable%20insights!&source=http%3A%2F%2Fproactiveforher.com%2Ftools%2Fpmdd-tool%2F",target:"_blank",rel:"noopener","aria-label":""},l.a.createElement(k.a,{icon:g.e,style:{fontSize:"50px",backgroundColor:"#0077b7",color:"white",paddingTop:"10px",borderRadius:"5px",paddingBottom:"10px",width:"60px"}})),l.a.createElement("a",{className:"pl-4",href:"whatsapp://send?text=Proactive%E2%80%99s%20self-screening%20tool%20for%20PMDD%20provides%20a%20comprehensive%20assessment%20of%20your%20symptoms.%20Just%20answer%20few%20questions%20and%20get%20actionable%20insights!%20http%3A%2F%2Fproactiveforher.com%2Ftools%2Fpmdd-tool%2F",target:"_blank",rel:"noopener","aria-label":""},l.a.createElement(k.a,{icon:g.g,style:{fontSize:"50px",backgroundColor:"rgb(122, 208, 109)",color:"white",paddingTop:"10px",borderRadius:"5px",paddingBottom:"10px",width:"60px"}}))),l.a.createElement("div",null,l.a.createElement("h1",{className:"sharetext",style:{color:"#163948",marginTop:"5%"}},"Comment"),l.a.createElement("p",{style:{color:"#163948",paddingBottom:"1.5%"}},"Share anything you would like to say."),l.a.createElement("div",{class:"fb-comments","data-href":"http://DivyanshiSingh7.github.io/tool33/","data-numposts":"100","data-width":""})))}}]),a}(n.Component),y=a(56),w=a(57),_=a(58),S=a(59),q=a(60),x=a(61),j=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={value:""},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(y.a,{fluid:!0,style:{background:"#163948",padding:"30px"}},l.a.createElement(w.a,{className:"mx-md-5"},l.a.createElement(_.a,{className:"p-4 text-white order-2 order-md-1",md:"6"},l.a.createElement("div",{className:"mb-3 ",style:{textAlign:"left"}},l.a.createElement("a",{href:"http://www.proactiveforher.com/",style:{color:"white"}},"Home")),l.a.createElement("div",{className:"mb-3 ",style:{display:"flex"}},l.a.createElement("a",{href:"https://www.facebook.com/proactiveforher/?__tn__=%2Cd%2CP-R&eid=ARBOEZQG5jk8MqVy1_dkE5SWe1aZh6iVRJ4CNfc2AlW_d4oKslHdFP1TOpa1LqHGK7eKHdarQEhFmfjz",target:"_blank",style:{color:"white"}},l.a.createElement(k.a,{cursor:"pointer",icon:g.a,className:"mr-3"})),l.a.createElement("a",{href:"https://www.instagram.com/proactiveforher/?hl=en",target:"_blank",style:{color:"white"}},l.a.createElement(k.a,{cursor:"pointer",icon:g.c,className:"mr-3"})),l.a.createElement("a",{href:"https://www.linkedin.com/company/43208504/admin/",target:"_blank",style:{color:"white"}},l.a.createElement(k.a,{cursor:"pointer",icon:g.d,className:"mr-3 "}))),l.a.createElement("div",{className:"mb-3 ",style:{textAlign:"left"}},"\xa9 Proactive For Her 2020")),l.a.createElement(_.a,{className:"p-4 order-md-2"},l.a.createElement("div",{id:"mc_embed_signup"},l.a.createElement(S.a,{action:"https://proactiveforher.us18.list-manage.com/subscribe/post?u=14fbc27b9ee1cfe7f204242de&id=792a773110",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",class:"validate",target:"_blank",novalidate:!0},l.a.createElement("div",{id:"mc_embed_signup_scroll"},l.a.createElement(q.a,{type:"email",style:{width:"100%",fontSize:"0.8rem"},value:this.state.value,onChange:function(t){e.setState({value:t.target.value})},name:"EMAIL",className:"email mb-2",id:"mce-EMAIL",placeholder:"Your Email Address",required:!0}),l.a.createElement("div",{class:"clear"},l.a.createElement(x.a,{style:{width:"100%",fontSize:"0.8rem"},type:"submit",name:"subscribe",id:"mc-embedded-subscribe",className:"button"},"Signup for Newsletter"))))))))}}]),a}(n.Component);a(50);var F=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(C,null),l.a.createElement(h,null),l.a.createElement(b,null),l.a.createElement(O,null),l.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(51);i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.8e09eb9e.chunk.js.map