public class Alarm {
  
  public static boolean setAlarm(boolean employed, boolean vacation) {
    // Your code here...
    return vacation == true || employed == false ? false : true;
  }

}
