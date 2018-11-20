package jvtst;

import java.util.ArrayList;
import java.util.Scanner;

public class JavaArraylist {

   private static final Scanner scanner = new Scanner(System.in);

   public static void main(String[] args) {
   Scanner in = new Scanner(System.in);


   int numLists = in.nextInt();
   ArrayList<Integer>[] lists = new ArrayList[numLists];
   for (int i = 0; i < numLists; i++) {
       int length = in.nextInt();
       lists[i] = new ArrayList<Integer>(length);

       for (int j = 0; j < length; j++) {
           lists[i].add(in.nextInt());
       }
   }


   int numQueries = in.nextInt();
   for (int q = 0; q < numQueries; q++) {
       int listIndex = in.nextInt();
       int itemIndex = in.nextInt();

       try {
           System.out.println(
               lists[listIndex - 1].get(itemIndex - 1));
       } catch (Exception e) {
           System.out.println("ERROR!");
       }
   }
   in.close();
}

}
