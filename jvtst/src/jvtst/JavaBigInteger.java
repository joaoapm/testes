package jvtst;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.*;

class JavaBigInteger {

	public static void main(String[] args) {
		// Input
		Scanner sc = new Scanner(System.in);
		BigInteger a = sc.nextBigInteger();
		BigInteger b = sc.nextBigInteger();

		System.out.println(a.add(b));
		System.out.println(a.multiply(b));

	}

}