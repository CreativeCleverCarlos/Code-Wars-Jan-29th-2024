/**
 A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

**/

//the window will always be at 1.5. That's the consistent height the mother will always be at.

//if the bounce is equal to 1, return -1 as an answer (cause it's infinite)

//I'm looking to get a rate or ratio, of the bounce to the height.

//the returned value has to be a whole number

function bouncingBall(h,  bounce,  window) {
    let count = -1
    //need a for loop where i starts at 1, and if h * bounce > window, add 2 to i.
    if (bounce >= 1 || bounce < 0){
        return count
    } while (h > window){
            h = h * bounce
            count+=2
    
    }
    return count
}
console.log(bouncingBall(30, 0.66, 1.5))
