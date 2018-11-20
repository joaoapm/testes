package jvtst;

import java.util.Scanner;

public class Java2DArray {

	private static final Scanner scanner = new Scanner(System.in);

	public static void main(String[] args) {
		int[][] arr = new int[6][6];

		for (int i = 0; i < 6; i++) {
			String[] arrRowItems = scanner.nextLine().split(" ");
			scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

			for (int j = 0; j < 6; j++) {
				int arrItem = Integer.parseInt(arrRowItems[j]);
				arr[i][j] = arrItem;
			}
		}

		Integer smax = null;
		int sum = 0;
		for (int i = 0; i < 6; i++) {

			for (int j = 0; j < 6; j++) {

				if (2 + i < 6 && 2 + j < 6) {

					for (int k = 0; (k < 3) && (2 + i < 6); k++) {
						for (int l = 0; (l < 3) && (2 + j < 6); l++) {

							if (k != 1)
								sum += arr[i + k][j + l];
							else if (l == 1)
								sum += arr[i + k][j + l];
						}
					}
					if (smax == null || smax < sum)
						smax = sum;
					sum = 0;
				}
			}
		}

		System.out.println(smax);

		scanner.close();
	}
}
