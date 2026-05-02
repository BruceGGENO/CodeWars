interface Count {
	static int countCharOccurrences(String s, char c) {
  //do something
    int count=0;
    for(int i=0;i<s.length();i++){
      if(s.charAt(i)==c){
        count+=1;
      } 
    }
    return count;
  }
}