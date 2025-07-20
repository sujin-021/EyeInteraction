# 👀 EyeInteraction 👀

### Overview
This is an interactive web character whose eyes follow the user's mouse cursor in real time.
The pupils react smoothly to movement, giving a lifelike and playful expression to the illustrated face.


# Technologies used
- HTML : basic layout and image placement
- CSS : Styling and font design using Google Fonts
- JavaScript : Real-time mouse tracking and Pupil movement


### System Features
- Eye Tracking with Mouse Movement : The eyes are separated from the face image and Both pupils move together based on the user's mouse position using real-time tracking via JavaScript. The movement is constrained within a limited area to prevent the pupils from "escaping" the eye sockets, using Math.max() and Math.min().

- Responsive Eye Position & Size : Pupil sizes and positions are dynamically calculated based on the face image size using getBoundingClientRect(). This ensures that the eyes scale correctly on different screen sizes and stay in place even when the window is resized.


### Live Demo
👉 [Click and Enjoy!](https://sujin-021.github.io/Eye-animation/)
> Tip: Open the link and move your mouse to see the character follow you around!

