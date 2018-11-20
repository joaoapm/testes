package jvtst;

import java.math.BigDecimal;
import java.util.*;

class JavaBigDecimal {

	public static void main(String[] args) {
		// Input
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		String[] s = new String[n + 2];
		for (int i = 0; i < n; i++) {
			s[i] = sc.next();
		}
		sc.close();

		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n - i - 1; j++) {
				if (new BigDecimal(s[j]).compareTo(new BigDecimal(s[j + 1])) < 0) {
					String tmp = s[j + 1];
					s[j + 1] = s[j];
					s[j] = tmp;
				}
			}
		}

		// Output
		for (int i = 0; i < n; i++) {
			System.out.println(s[i]);
		}
	}

}