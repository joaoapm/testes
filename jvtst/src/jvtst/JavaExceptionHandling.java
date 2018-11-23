package jvtst;

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class JavaExceptionHandling {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		try {
			int v1 = sc.nextInt();
			int v2 = sc.nextInt();

			System.out.println(v1 / v2);
		} catch (InputMismatchException ie) {
			System.out.println("java.util.InputMismatchException");
		} catch (Exception e) {
			System.out.println(e.toString());
		}

	}
}
