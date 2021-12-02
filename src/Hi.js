// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
//string typed name of gesture 
export const hiGesture = new GestureDescription('hi'); 

//thumb
hiGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
hiGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
hiGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

//index
hiGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
hiGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
hiGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
hiGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

// Middle
hiGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)
hiGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

//Ring
hiGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0)
hiGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
hiGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
hiGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

//Pinky
hiGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
hiGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
hiGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);




