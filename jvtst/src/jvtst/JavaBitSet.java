package jvtst;

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class JavaBitSet {

	public static void main(String[] args) {
		Scanner scn = new Scanner(System.in);

		int n = scn.nextInt();
		int no = scn.nextInt();

		BitSet bits1 = new BitSet(n);
		BitSet bits2 = new BitSet(n);

		for (int i = 0; i < no; i++) {

			scn.nextLine();

			String op = scn.next();
			int i0 = scn.nextInt();
			int i1 = scn.nextInt();

			if (op.equals("AND")) {
				if (i0 == 1)
					bits1.and(bits2);
				else if (i0 == 2)
					bits2.and(bits1);
			} else if (op.equals("OR")) {
				if (i0 == 1)
					bits1.or(bits2);
				else if (i0 == 2)
					bits2.or(bits1);
			} else if (op.equals("XOR")) {
				if (i0 == 1)
					bits1.xor(bits2);
				else if (i0 == 2)
					bits2.xor(bits1);
			} else if (op.equals("FLIP")) {
				if (i0 == 1)
					bits1.flip(i1);
				else if (i0 == 2)
					bits2.flip(i1);
			} else if (op.equals("SET")) {
				if (i0 == 1)
					bits1.set(i1);
				else if (i0 == 2)
					bits2.set(i1);
			}

			 
		}
		printBits(bits2);
		scn.close();

	}
	
	 public static void printBits(  BitSet b) {
	 
	      for (int i = 0; i < 5; i++) {
	         System.out.print(b.get(i) ? "1" : "0");
	      }
	      System.out.println();
	   }
}
