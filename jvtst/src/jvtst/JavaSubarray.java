package jvtst;

import java.util.Scanner;

public class JavaSubarray {

	private static final Scanner scanner = new Scanner(System.in);

	public static void main(String[] args) {

		int n = scanner.nextInt();

		scanner.nextLine();

		String[] s = scanner.nextLine().split(" ");

		int[] a = new int[n];

		for (int i = 0; i < n; i++)
			a[i] = Integer.valueOf(s[i]);

		int neg = 0;

		for (int x = 1; x <= n; x++) {

			for (int zz = 0; zz + x <= n; zz++) {
				int smg = 0;
				for (int j = 0; j < x; j++) {
					smg += a[zz + j];
				}
				if (smg < 0)
					neg++;
			}
		}

		System.out.println(neg);
		scanner.close();
	}

}
