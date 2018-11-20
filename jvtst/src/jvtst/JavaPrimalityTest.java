package jvtst;

import java.math.BigInteger;
import java.util.Scanner;

public class JavaPrimalityTest {

	private static final Scanner scanner = new Scanner(System.in);

	public static void main(String[] args) {
		String n = scanner.nextLine();
		BigInteger bd = new BigInteger(n);

		System.out.println(bd.isProbablePrime(1) ? "prime" : "not prime");
		scanner.close();
	}
}
