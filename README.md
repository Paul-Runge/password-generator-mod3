# Random Password Generator

This is a random password generator that I built to satisfy the user story for the module 3 challenge in the University of Oregon coding bootcamp.  It is a web based application that takes specific user provided parameters and returns a random password utilizing those parameters.

## Appearance

Random Passowrd Generator Demo:
![password-generator-demo](Assets/images/password-generator-demo.png)

## Functionality

The application works as follows:

* Click on the Generate Password button.
* User will be prompted to specify the number of characters the password should conatain (between 8 & 128).
* User will be prompted to individually confirm whether to include any of 4 presented character types (must confirm at least 1).  The types are: numbers, lowercase letters, uppercase letters, special characters.
* Should the user fail to specify an adequate password length or choose at least one character type, the user will be notified of the error and prompted to complete the task again.
* Once all prompts requirements have been adequately met, a random password utilizing the confirmed paramaters will appear in the text area inside the dashed border.
* Each time the Generate Password button is clicked, the information resets and the sequence restarts.

## Deployed Link
https://paul-runge.github.io/password-generator-mod3/
