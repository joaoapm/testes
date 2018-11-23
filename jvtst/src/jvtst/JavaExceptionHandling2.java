package jvtst;

import java.util.Scanner;

class MyCalculatorx {

	public long power(int c, int p) throws Exception {
		if (c == 0 && p == 0)
			throw new Exception("n and p should not be zero.");
		if (c < 0 || p < 0)
			throw new Exception("n or p should not be negative.");
		else
			return (long) Math.pow(c, p);
	}
	/*
	 * Create the method long power(int, int) here.
	 */

}

public class JavaExceptionHandling2 {
	public static final MyCalculatorx my_calculatorx = new MyCalculatorx();
	public static final Scanner in = new Scanner(System.in);

	public static void main(String[] args) {
		while (in.hasNextInt()) {
			int n = in.nextInt();
			int p = in.nextInt();

			try {
				System.out.println(my_calculatorx.power(n, p));
			} catch (Exception e) {
				System.out.println(e);
			}
		}
	}
}