# HLK - Happy Learnable Kiosk

This is a repository for HLK, Happy Learnable Kiosk.
<div>
  <img src="./hello_burger.JPG" width="70%">
</div>

## Overview
HLK is a project for KAIST CS374(Introduction to Human-Computer Interaction) in Spring, 2021. We propose a new kiosk design for middle-aged users who feel uncomfortable with using previous kiosk.   
We considered users who know what they want, but cannot reach for their requirements because they are not used to communicating with new machines. 
Our prototype is written in Korean for our target users. 

* Link for Demo: [URL](https://hci-hlk-f2fb4.web.app/)
* Link for Demo Video: [URL](https://drive.google.com/file/d/1GUsJZ02Hi5UtBlVlPHkJAChp-lwxRcTU/view?usp=sharing)

## Description of codes

### [App.js](https://github.com/sewon0918/HCI_HLK/blob/master/src/App.js)
App.js is the main component of our prototype. It includes greeting page and renders components. One of the main component is SelectCategory, which asks users what to order. Another main component is Cart, which will show what the user has selected.   
In our kiosk prototype, all components are rendered at the bottom of previous components so that the user can see what he or she has selected. 

### [SelectCategory](https://github.com/sewon0918/HCI_HLK/tree/master/src/components/SelectCategory)
SelectCategory asks the user what to order, burger, drinks or sides. Choosing one of the options renders next components that will help the user find what he or she wants. 

### [SelectMethod](https://github.com/sewon0918/HCI_HLK/tree/master/src/components/SelectMethod)
SelectMethods asks the user how to find the menu. 4 methods are available; find by name search, find by ingredient, find by recommendation and view all menus. Each of the methods are implemented in [NameSearch](https://github.com/sewon0918/HCI_HLK/tree/master/src/components/NameSearch), [Ingredient](https://github.com/sewon0918/HCI_HLK/tree/master/src/components/Ingredient), [Recommendation](https://github.com/sewon0918/HCI_HLK/tree/master/src/components/Recommendation) and [ShowBurgers](https://github.com/sewon0918/HCI_HLK/tree/master/src/components/SelectMethod).   

### Firebase
In our implementation, firebase is used to record what user has put in the cart. All the ordered menus are saved in our database, and cart element shows the items in the database, which is implemented in [HowMany](https://github.com/sewon0918/HCI_HLK/tree/master/src/components/HowMany) component. 

## Libraries & Frameworks
react   
react-DOM   
react-scroll-to-bottom   
@testing-library/react   
firebase   
@material-ui/core/TextField   
@material-ui/lab/Autocomplete   
react-speech-kit   

## Contributors
[Kangsan Kim](https://github.com/KangsanKim07)

[Jaehyun Kim](https://github.com/Jennyjaen)

[Sewon Lim](https://github.com/sewon0918)

[Sookyung Han](https://github.com/suplookie)
