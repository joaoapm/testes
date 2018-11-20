package jvtst;


import java.util.Scanner;

public class JavaStaticInitializerBlock {
	public static boolean flag = initializeClassVariable();
	public static int B;
	public static int H;

	private static boolean initializeClassVariable() {
		Scanner in = new Scanner(System.in);

		B = in.nextInt();
		H = in.nextInt();

		in.close();

		try {
			if (B <= 0 || H <= 0)
				throw new Exception("Breadth and height must be positive");
			else
				return !false;
		} catch (Exception e) {
			System.out.println(e.toString());
			return false;
		}

	}

	public static void main(String[] args) {
		if (flag) {
			int area = B * H;
			System.out.print(area);
		}

	}// end of main

}// end of class
